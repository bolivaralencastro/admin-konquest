// Alternância de abas
const abas = document.querySelectorAll('.tab-item');
const conteudos = document.querySelectorAll('.tab-content');
let currentTab = 'usuarios';
let currentSearch = '';

function renderAba(aba, filtro = '') {
    currentTab = aba;
    if (aba === 'usuarios') renderTabelaUsuarios(filtro);
    if (aba === 'cursos') renderTabelaCursos(filtro);
    if (aba === 'trilhas') renderTabelaTrilhas(filtro);
    if (aba === 'eventos') renderTabelaEventos(filtro);
    if (aba === 'canais') renderTabelaCanais(filtro);
}

abas.forEach(aba => {
    aba.addEventListener('click', () => {
        abas.forEach(a => a.classList.remove('active'));
        conteudos.forEach(c => c.classList.remove('active'));
        aba.classList.add('active');
        const conteudo = document.getElementById('aba-' + aba.dataset.aba);
        conteudo.classList.add('active');
        renderAba(aba.dataset.aba, currentSearch);
    });
});

// Botão de voltar
const btnVoltar = document.getElementById('btnVoltar');
btnVoltar.addEventListener('click', () => {
    window.location.href = '../index.html'; // Volta para a listagem de grupos
});

// Preencher nome do grupo dinamicamente (exemplo: pegar de query string)
function getGrupoNome() {
    const params = new URLSearchParams(window.location.search);
    return params.get('nome') || 'Nome do Grupo';
}
document.getElementById('grupoTitulo').textContent = getGrupoNome();
const headerSearchInput = document.getElementById('grupo-header-search');
headerSearchInput.addEventListener('input', e => {
    currentSearch = e.target.value;
    renderAba(currentTab, currentSearch);
});

// MOCK de dados de usuários vinculados
const usuariosMock = [
    { id: 1, nome: 'Admin testerSTAGE', cargo: 'ADMINISTRADOR', data: '2 de mai. de 2024', avatar: 'https://ui-avatars.com/api/?name=Admin+testerSTAGE' },
    { id: 2, nome: 'Conteudistaa', cargo: 'CONTEUDISTA', data: '2 de mai. de 2024', avatar: 'https://ui-avatars.com/api/?name=Conteudistaa' },
    { id: 3, nome: 'DEV-2104', cargo: 'DESENVOLVEDOR', data: '2 de mai. de 2024', avatar: 'https://ui-avatars.com/api/?name=DEV-2104' },
    { id: 4, nome: 'Lucas USER', cargo: 'CARGO NOVO', data: '2 de mai. de 2024', avatar: 'https://ui-avatars.com/api/?name=Lucas+USER' },
];

function renderTabelaUsuarios(filtro = '') {
    const usuarios = usuariosMock.filter(u => u.nome.toLowerCase().includes(filtro.toLowerCase()));
    let html = `
        <table><thead><tr><th><input type="checkbox" id="checkAllUsuarios"></th><th></th><th>Nome</th><th>Cargo</th><th>Inclusão no grupo</th><th></th></tr></thead><tbody>
        ${usuarios.length === 0 ? `<tr><td colspan="6" style="text-align:center; color:#aaa;">Nenhum usuário encontrado.</td></tr>` :
            usuarios.map((u, idx) => `
                <tr>
                    <td><input type="checkbox" class="checkUsuario"></td>
                    <td><img class="grupo-tabela-avatar" src="${u.avatar}" alt="Avatar"></td>
                    <td>${u.nome}</td>
                    <td>${u.cargo}</td>
                    <td>${u.data}</td>
                    <td><button class="btn-icon btn-menu" title="Ações"><span class="material-icons-outlined">more_vert</span></button></td>
                </tr>
            `).join('')
        }
        </tbody></table>`;
    document.getElementById('aba-usuarios').innerHTML = html;
    // Seleção em lote
    const checkAll = document.getElementById('checkAllUsuarios');
    const checks = document.querySelectorAll('.checkUsuario');
    checkAll.addEventListener('change', e => {
        checks.forEach(c => c.checked = checkAll.checked);
    });
    // Menu de ações (mock)
    document.querySelectorAll('.btn-menu').forEach((btn, idx) => {
        btn.addEventListener('click', e => {
            alert('Abrir menu de ações para: ' + usuarios[idx].nome);
        });
    });
}

// MOCK de dados para as demais abas
const cursosMock = [
    { id: 1, nome: 'Onboarding XPTO', tipo: 'Interno', status: 'Publicado', data: '2 de mai. de 2024', icon: 'rocket_launch' },
    { id: 2, nome: 'Comunicação Eficaz', tipo: 'Externo', status: 'Publicado', data: '2 de mai. de 2024', icon: 'rocket_launch' },
];
const trilhasMock = [
    { id: 1, nome: 'Trilha de Liderança', status: 'Ativa', data: '2 de mai. de 2024', icon: 'conversion_path' },
    { id: 2, nome: 'Trilha de Boas-vindas', status: 'Inativa', data: '2 de mai. de 2024', icon: 'conversion_path' },
];
const eventosMock = [
    { id: 1, nome: 'Workshop Vendas', tipo: 'Presencial', dataEvento: '10/06/2024', status: 'Agendado', data: '2 de mai. de 2024', icon: 'location_on' },
    { id: 2, nome: 'Webinar IA', tipo: 'Online', dataEvento: '15/06/2024', status: 'Concluído', data: '2 de mai. de 2024', icon: 'videocam' },
];
const canaisMock = [
    { id: 1, nome: 'Canal Novidades', tipo: 'Aberto', data: '2 de mai. de 2024', icon: 'hub' },
    { id: 2, nome: 'Canal Design', tipo: 'Fechado', data: '2 de mai. de 2024', icon: 'hub' },
];
const storesData = [
    { id: 1, nome: "Loja Central", usuarios: 34 },
    { id: 2, nome: "Filial Norte", usuarios: 22 },
    { id: 3, nome: "Filial Sul", usuarios: 18 },
    { id: 4, nome: "Filial Leste", usuarios: 15 },
    { id: 5, nome: "Filial Oeste", usuarios: 21 }
];
window.storesData = storesData;


function renderTabelaCursos(filtro = '') {
    const cursos = cursosMock.filter(c => c.nome.toLowerCase().includes(filtro.toLowerCase()));
    let html = `
        <table><thead><tr><th></th><th>Nome</th><th>Tipo</th><th>Status</th><th>Inclusão no grupo</th><th></th></tr></thead><tbody>
        ${cursos.length === 0 ? `<tr><td colspan="6" style="text-align:center; color:#aaa;">Nenhum curso encontrado.</td></tr>` :
            cursos.map(c => `
                <tr>
                    <td><span class="material-icons-outlined" style="color:#7b1fa2;">${c.icon}</span></td>
                    <td>${c.nome}</td>
                    <td>${c.tipo}</td>
                    <td>${c.status}</td>
                    <td>${c.data}</td>
                    <td><button class="btn-icon" title="Remover"><span class="material-icons-outlined">delete</span></button></td>
                </tr>
            `).join('')
        }
        </tbody></table>`;
    document.getElementById('aba-cursos').innerHTML = html;
    document.querySelectorAll('#aba-cursos .btn-icon').forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            alert('Remover curso: ' + cursos[idx].nome);
        });
    });
}

function renderTabelaTrilhas(filtro = '') {
    const trilhas = trilhasMock.filter(t => t.nome.toLowerCase().includes(filtro.toLowerCase()));
    let html = `
        <table><thead><tr><th></th><th>Nome</th><th>Status</th><th>Inclusão no grupo</th><th></th></tr></thead><tbody>
        ${trilhas.length === 0 ? `<tr><td colspan="5" style="text-align:center; color:#aaa;">Nenhuma trilha encontrada.</td></tr>` :
            trilhas.map(t => `
                <tr>
                    <td><span class="material-icons-outlined" style="color:#7b1fa2;">${t.icon}</span></td>
                    <td>${t.nome}</td>
                    <td>${t.status}</td>
                    <td>${t.data}</td>
                    <td><button class="btn-icon" title="Remover"><span class="material-icons-outlined">delete</span></button></td>
                </tr>
            `).join('')
        }
        </tbody></table>`;
    document.getElementById('aba-trilhas').innerHTML = html;
    document.querySelectorAll('#aba-trilhas .btn-icon').forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            alert('Remover trilha: ' + trilhas[idx].nome);
        });
    });
}

function renderTabelaEventos(filtro = '') {
    const eventos = eventosMock.filter(ev => ev.nome.toLowerCase().includes(filtro.toLowerCase()));
    let html = `
        <table><thead><tr><th></th><th>Nome</th><th>Tipo</th><th>Data do evento</th><th>Status</th><th>Inclusão no grupo</th><th></th></tr></thead><tbody>
        ${eventos.length === 0 ? `<tr><td colspan="7" style="text-align:center; color:#aaa;">Nenhum evento encontrado.</td></tr>` :
            eventos.map(ev => `
                <tr>
                    <td><span class="material-icons-outlined" style="color:#7b1fa2;">${ev.icon}</span></td>
                    <td>${ev.nome}</td>
                    <td>${ev.tipo}</td>
                    <td>${ev.dataEvento}</td>
                    <td>${ev.status}</td>
                    <td>${ev.data}</td>
                    <td><button class="btn-icon" title="Remover"><span class="material-icons-outlined">delete</span></button></td>
                </tr>
            `).join('')
        }
        </tbody></table>`;
    document.getElementById('aba-eventos').innerHTML = html;
    document.querySelectorAll('#aba-eventos .btn-icon').forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            alert('Remover evento: ' + eventos[idx].nome);
        });
    });
}

function renderTabelaCanais(filtro = '') {
    const canais = canaisMock.filter(c => c.nome.toLowerCase().includes(filtro.toLowerCase()));
    let html = `
        <table><thead><tr><th></th><th>Nome</th><th>Tipo</th><th>Inclusão no grupo</th><th></th></tr></thead><tbody>
        ${canais.length === 0 ? `<tr><td colspan="5" style="text-align:center; color:#aaa;">Nenhum canal encontrado.</td></tr>` :
            canais.map(c => `
                <tr>
                    <td><span class="material-icons-outlined" style="color:#7b1fa2;">${c.icon}</span></td>
                    <td>${c.nome}</td>
                    <td>${c.tipo}</td>
                    <td>${c.data}</td>
                    <td><button class="btn-icon" title="Remover"><span class="material-icons-outlined">delete</span></button></td>
                </tr>
            `).join('')
        }
        </tbody></table>`;
    document.getElementById('aba-canais').innerHTML = html;
    document.querySelectorAll('#aba-canais .btn-icon').forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            alert('Remover canal: ' + canais[idx].nome);
        });
    });
}
function renderQuickGraph() {
    const container = document.getElementById("quickGraphContainer");
    if (!container) return;
    const totalUsuarios = storesData.reduce((sum, s) => sum + s.usuarios, 0);
    const bars = storesData.map(s => {
        const pct = totalUsuarios ? (s.usuarios / totalUsuarios) * 100 : 0;
        return `<div class="quick-graph-bar"><span class="quick-graph-label">${s.nome}</span><div class="quick-graph-bar-inner" style="width:${pct}%">${s.usuarios}</div></div>`;
    }).join("");
    container.innerHTML = `<h3 class="quick-graph-title">Visão rápida de Lojas</h3>${bars}<div class="quick-graph-total">Total: ${totalUsuarios}</div>`;
}


// Estrutura básica para as outras abas (cursos, trilhas, eventos, canais)
function renderTabelaPlaceholder(aba, label) {
    document.getElementById('aba-' + aba).innerHTML = `<div style="padding:32px; text-align:center; color:#bbb;">Nenhum ${label} vinculado.</div>`;
}

// Render inicial
renderAba(currentTab, currentSearch);
renderQuickGraph();
