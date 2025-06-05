const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const PORT = process.env.PORT || 3000; // Você pode escolher outra porta se preferir ou definir via variável de ambiente

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
    
    // Extrai apenas o pathname para ignorar query strings
    const { pathname } = new URL(req.url, 'http://localhost');

    // Resolve o caminho solicitado de forma segura
    let resolvedPath = path.resolve(basePath, pathname.slice(1));

    // Se a requisição for para a raiz, serve index.html
    if (pathname === '/') {
        resolvedPath = path.resolve(basePath, 'index.html');
    }

    // Impede acesso a caminhos fora da pasta public
    if (!resolvedPath.startsWith(basePath)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('Forbidden');
        return;
    }

    let filePath = resolvedPath;

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
                        res.end('<h1>404 Not Found (index.html also not found)</h1>', 'utf-8');
                    } else {
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        res.end(indexContent, 'utf-8');
                    }
                });
            } else {
                res.writeHead(500);
                res.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
