import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'public', 'pdf', 'Abinesh_Resume.pdf');
  const fileStream = fs.createReadStream(filePath);

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'inline; filename="Abinesh_Resume.pdf"');

  fileStream.pipe(res);
}
