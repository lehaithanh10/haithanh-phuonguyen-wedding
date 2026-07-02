const SPREADSHEET_ID = '1r_ySWbQ434ekVgJCsgLDXLW2g6j55RHHnDRuFXwThvw';
const SHEET_NAME = 'RSVPs';

function doPost(e) {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
    sheet.appendRow(['Timestamp', 'Name', 'Attendance', 'Message']);
  }
  sheet.appendRow([
    new Date(),
    e.parameter.name || '',
    e.parameter.attendance || '',
    e.parameter.message || ''
  ]);
  return ContentService.createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
