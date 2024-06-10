import PdfPrinter from 'pdfmake';
import fs from 'node:fs';
import type { TDocumentDefinitions } from 'pdfmake/interfaces';
import { getTablesContent, headers } from './data/data';

const printer = new PdfPrinter({
  Roboto: {
    normal: './fonts/Roboto-Regular.ttf',
  },
});

const docDefinition = {
  content: getTablesContent(),
} satisfies TDocumentDefinitions;

const pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(fs.createWriteStream('pdfs/packages.pdf'));
pdfDoc.end();
