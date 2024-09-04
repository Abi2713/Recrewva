const pdf = require('pdfkit');
const ExcelJS = require('exceljs');

exports.exportToPDF = async (report) => {
  const doc = new pdf();
  doc.text(`Report Name: ${report.name}`);
  doc.text(`Created By: ${report.createdBy}`);
  doc.text(`Date Created: ${new Date(report.createdAt).toLocaleDateString()}`);

  // Add more content to the PDF based on report data

  return new Promise((resolve, reject) => {
    let buffers = [];
    doc.on('data', buffers.push.bind(buffers));
    doc.on('end', () => resolve(Buffer.concat(buffers)));
    doc.end();
  });
};

exports.exportToExcel = async (report) => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Report Data');

  // Add headers
  worksheet.addRow(['Report Name', 'Created By', 'Date Created']);
  worksheet.addRow([report.name, report.createdBy, new Date(report.createdAt).toLocaleDateString()]);

  // Add more rows based on report data

  return workbook.xlsx.writeBuffer();
};
