const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000; // Você pode escolher outra porta se preferir

const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.eot': 'application/vnd.ms-fontobject',
    // Adicione mais tipos MIME conforme necessário
};

const server = http.createServer((req, res) => {
    // Define o caminho base para os arquivos estáticos
    const basePath = path.join(__dirname, 'public');
    
    // Constrói o caminho do arquivo solicitado
    let filePath = path.join(basePath, req.url === '/' ? 'index.html' : req.url);

    // Verifica a extensão do arquivo para definir o Content-Type
    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                // Se o arquivo não for encontrado, tenta servir index.html para rotas de SPA
                // (isso é útil se você tiver rotas no lado do cliente)
                fs.readFile(path.join(basePath, 'index.html'), (err, indexContent) => {
                    if (err) {
                        res.writeHead(404, { 'Content-Type': 'text/html' });
                        res.end('<h1>404 Not Found (index.html also not found)</h1>');
                    } else {
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        res.end(indexContent);
                    }
                });
            } else {
                res.writeHead(500);
                res.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            if (contentType.startsWith('text/')) {
                res.end(content, 'utf-8');
            } else {
                res.end(content);
            }
        }
    });
});

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
