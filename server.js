import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static assets from root directory
app.use(express.static(__dirname));

// Rutas desconocidas: 404 real (antes devolvía index.html con 200 y Google
// lo veía como páginas duplicadas). Las páginas nuevas se sirven como archivos
// estáticos (p. ej. /sonografia-villa-mella/index.html).
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});
