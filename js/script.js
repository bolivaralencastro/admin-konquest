// --- Data (Completa com todos os tipos) ---
const trilhasData = [
    { id: 1, titulo: "Onboarding para Novos Colaboradores da Empresa XPTO", cursos: 5, status: "Publicado", iconName: 'conversion_path' },
    { id: 2, titulo: "Desenvolvimento de Lideranças Estratégicas", cursos: 8, status: "Rascunho", iconName: 'conversion_path' },
    { id: 3, titulo: "Trilha de Formação em Atendimento", cursos: 6, status: "Publicado", iconName: 'conversion_path' },
    { id: 4, titulo: "Programa de Atualização Técnica", cursos: 4, status: "Publicado", iconName: 'conversion_path' },
    { id: 5, titulo: "Trilha de Compliance e Ética", cursos: 3, status: "Rascunho", iconName: 'conversion_path' }
];
const cursosData = [
    { id: 1, titulo: "Cultura Corporativa e Valores Fundamentais", tipo: "Interno", status: "Publicado", iconName: 'rocket_launch' },
    { id: 2, titulo: "Comunicação Interpessoal Eficaz no Ambiente de Trabalho", tipo: "Externo", status: "Publicado", iconName: 'rocket_launch' },
    { id: 3, titulo: "Introdução ao Gerenciamento de Projetos", tipo: "Interno", status: "Publicado", iconName: 'rocket_launch' },
    { id: 4, titulo: "Excel Avançado para Negócios", tipo: "Externo", status: "Rascunho", iconName: 'rocket_launch' },
    { id: 5, titulo: "Fundamentos de Marketing Digital", tipo: "Interno", status: "Publicado", iconName: 'rocket_launch' }
];
const canaisData = [
    { id: 1, nome: "Canal Novidades da Empresa e Comunicados Importantes", tipo: "Aberto", criador: "Admin", seguidores: 150, iconName: 'hub' },
    { id: 2, nome: "Canal Design e Inovação de Produtos", tipo: "Fechado", criador: "Ana Carolina", seguidores: 30, iconName: 'hub' },
    { id: 3, nome: "Canal RH e Benefícios", tipo: "Aberto", criador: "Recursos Humanos", seguidores: 85, iconName: 'hub' },
    { id: 4, nome: "Canal Vendas e Resultados", tipo: "Fechado", criador: "Equipe Vendas", seguidores: 42, iconName: 'hub' },
    { id: 5, nome: "Canal Comunidade Tech", tipo: "Aberto", criador: "TI", seguidores: 65, iconName: 'hub' }
];
const pulsesData = [
    { id: 1, titulo: "Lançamento do Novo Produto Linha X Detalhado", tipo: "Video", canal: "Novidades", visualizacoes: 200, iconName: 'bolt' },
    { id: 2, titulo: "Dica Rápida Y: Otimizando seu Fluxo de Trabalho Diário", tipo: "Artigo", canal: "Design", visualizacoes: 50, iconName: 'bolt' },
    { id: 3, titulo: "Atualização Semanal do Projeto Z", tipo: "Video", canal: "Comunidade Tech", visualizacoes: 80, iconName: 'bolt' },
    { id: 4, titulo: "Resumo da Reunião de Equipe", tipo: "Podcast", canal: "RH e Benefícios", visualizacoes: 35, iconName: 'bolt' },
    { id: 5, titulo: "Inspiração da Semana", tipo: "Artigo", canal: "Vendas e Resultados", visualizacoes: 60, iconName: 'bolt' }
];
const eventosData = [
    { id: 1, nome: "Workshop Avançado de Técnicas de Vendas Consultivas", data: "2024-08-15", tipo: "Presencial", status: "Agendado", iconName: 'location_on' },
    { id: 2, nome: "Webinar sobre Inteligência Artificial Aplicada aos Negócios", data: "2024-07-30", tipo: "Online", status: "Agendado", iconName: 'videocam' },
    { id: 3, nome: "Feira de Inovação 2024", data: "2024-09-10", tipo: "Presencial", status: "Planejado", iconName: 'location_on' },
    { id: 4, nome: "Treinamento de Liderança", data: "2024-06-20", tipo: "Online", status: "Concluído", iconName: 'videocam' },
    { id: 5, nome: "Simpósio de Tecnologia", data: "2024-11-05", tipo: "Presencial", status: "Agendado", iconName: 'location_on' }
];
const matriculasCursosData = [
    { id: 1, nomeMissao: "Lançamento da Escola do Varejo Completo 2024", usuario: "Iranice Maria Da Silva Pereira", inicio: "23/10/2023", fim: "23/10/2023", meta: "19/10/2023", perf: "100%", atraso: "-", obrig: "OBRIGATÓRIA", status: "FINALIZADA", iconName: 'school' },
    { id: 2, nomeMissao: "Técnicas de Vendas para Iniciantes no Setor", usuario: "Adley Cunha Rodrigues De Matos Silva", inicio: "23/10/2023", fim: "23/10/2023", meta: "19/10/2023", perf: "100%", atraso: "-", obrig: "OBRIGATÓRIA", status: "FINALIZADA", iconName: 'school' }
    ,{ id: 3, nomeMissao: "Formação Básica em Excel", usuario: "João Souza", inicio: "01/02/2024", fim: "10/02/2024", meta: "15/02/2024", perf: "100%", atraso: "-", obrig: "OPCIONAL", status: "FINALIZADA", iconName: 'school' }
    ,{ id: 4, nomeMissao: "Treinamento de Atendimento ao Cliente", usuario: "Maria Oliveira", inicio: "05/03/2024", fim: "15/03/2024", meta: "20/03/2024", perf: "90%", atraso: "-", obrig: "OBRIGATÓRIA", status: "FINALIZADA", iconName: 'school' }
    ,{ id: 5, nomeMissao: "Capacitação de Líderes", usuario: "Carlos Lima", inicio: "10/04/2024", fim: "-", meta: "30/04/2024", perf: "60%", atraso: "-", obrig: "OBRIGATÓRIA", status: "INICIADA", iconName: 'school' }
];
const matriculasTrilhasData = [
    { id: 1, nomeTrilha: "Boas-vindas ao Setor de Mercearia e Depósito Geral", usuario: "MAGNO CÉSAR RODRIGUES DE CARVALHO JUNIOR", inicio: "28/05/2025", fim: "-", meta: "30/06/2025", perf: "-", atraso: "-", obrig: "-", status: "INICIADA", iconName: 'conversion_path' },
    { id: 2, nomeTrilha: "Integração para Novos Membros do Time de Açougue", usuario: "MAGNO CÉSAR RODRIGUES DE CARVALHO JUNIOR", inicio: "28/05/2025", fim: "30/05/2025", meta: "30/06/2025", perf: "84%", atraso: "-", obrig: "-", status: "FINALIZADA", iconName: 'conversion_path' }
    ,{ id: 3, nomeTrilha: "Trilha de Desenvolvimento Profissional", usuario: "João Souza", inicio: "15/04/2024", fim: "-", meta: "15/05/2024", perf: "40%", atraso: "-", obrig: "-", status: "INICIADA", iconName: 'conversion_path' }
    ,{ id: 4, nomeTrilha: "Trilha de Especialistas em Vendas", usuario: "Maria Oliveira", inicio: "01/03/2024", fim: "20/03/2024", meta: "25/03/2024", perf: "100%", atraso: "-", obrig: "-", status: "FINALIZADA", iconName: 'conversion_path' }
    ,{ id: 5, nomeTrilha: "Trilha de Inovação", usuario: "Carlos Lima", inicio: "10/02/2024", fim: "-", meta: "10/03/2024", perf: "70%", atraso: "-", obrig: "-", status: "INICIADA", iconName: 'conversion_path' }
];
const matriculasEventosData = [
    { id: 1, aluno: "Carlos Alberto Souza Lima", evento: "Workshop Vendas Estratégicas", presenca: "Confirmada", iconName: 'calendar_month' },
    { id: 2, aluno: "João Souza", evento: "Feira de Inovação 2024", presenca: "Pendente", iconName: 'calendar_month' },
    { id: 3, aluno: "Maria Oliveira", evento: "Treinamento de Liderança", presenca: "Confirmada", iconName: 'calendar_month' },
    { id: 4, aluno: "Ana Paula", evento: "Simpósio de Tecnologia", presenca: "Pendente", iconName: 'calendar_month' },
    { id: 5, aluno: "Carlos Lima", evento: "Webinar IA nos Negócios", presenca: "Confirmada", iconName: 'calendar_month' }
];
const gruposData = [
    { id: 1, nome: "Açougueiros e Auxiliares de Corte", trilhas: 0, missoes: 8, canais: 0, usuarios: 72, iconName: 'groups' },
    { id: 2, nome: "Analistas de Cobrança e Crédito Financeiro", trilhas: 0, missoes: 5, canais: 0, usuarios: 1, iconName: 'groups' },
    { id: 3, nome: "Equipe de Marketing", trilhas: 2, missoes: 3, canais: 1, usuarios: 15, iconName: 'groups' },
    { id: 4, nome: "Time de Tecnologia", trilhas: 1, missoes: 4, canais: 2, usuarios: 25, iconName: 'groups' },
    { id: 5, nome: "Comissão de Eventos", trilhas: 0, missoes: 2, canais: 1, usuarios: 8, iconName: 'groups' }
];
const categoriasData = [
    { id: 1, nome: "Desenvolvimento Comportamental e Soft Skills", missoes: 1, canais: 0, iconName: 'category' },
    { id: 2, nome: "Conhecimentos Institucionais e Corporativos", missoes: 11, canais: 2, iconName: 'category' },
    { id: 3, nome: "Tecnologia da Informação", missoes: 4, canais: 3, iconName: 'category' },
    { id: 4, nome: "Marketing e Vendas", missoes: 2, canais: 1, iconName: 'category' },
    { id: 5, nome: "Finanças e Contabilidade", missoes: 3, canais: 1, iconName: 'category' }
];
const normativasData = [
    { id: 1, titulo: "Política de Segurança da Informação e Dados Pessoais", versao: "1.2", status: "Publicado", dataPublicacao: "2023-01-15", iconName: 'update' },
    { id: 2, titulo: "Código de Conduta Ética e Profissional da Organização", versao: "2.0", status: "Em Revisão", dataPublicacao: "2022-11-20", iconName: 'update' },
    { id: 3, titulo: "Norma de Uso de Recursos de TI", versao: "1.0", status: "Publicado", dataPublicacao: "2023-05-10", iconName: 'update' },
    { id: 4, titulo: "Política de Privacidade", versao: "3.1", status: "Publicado", dataPublicacao: "2023-03-22", iconName: 'update' },
    { id: 5, titulo: "Procedimento de Backup", versao: "1.5", status: "Em Revisão", dataPublicacao: "2023-07-01", iconName: 'update' }
];
 const integrationsData = [
    { id: 'slack', name: 'Slack', category: 'Comunicação', logoIcon: 'forum', description: 'Integre sua plataforma de aprendizado com o Slack para notificações e engajamento em tempo real.', tags: ['Notificações automáticas', 'Compartilhamento de conteúdo', 'Comunicação em tempo real', '+1'], active: true },
    { id: 'msteams', name: 'Microsoft Teams', category: 'Comunicação', logoIcon: 'groups', description: 'Conecte sua plataforma ao Microsoft Teams para colaboração e comunicação eficiente.', tags: ['Reuniões integradas', 'Compartilhamento de recursos', 'Colaboração em equipe', '+1'], active: false },
    { id: 'zoom', name: 'Zoom', category: 'Comunicação', logoIcon: 'videocam', description: 'Integre o Zoom para realizar sessões de aprendizado ao vivo e webinars diretamente.', tags: ['Sessões ao vivo', 'Gravação automática', 'Agendamento integrado', '+1'], active: true },
    { id: 'chatgpt', name: 'ChatGPT', category: 'Inteligência Artificial', logoIcon: 'psychology', description: 'Adicione recursos de IA da OpenAI para melhorar a experiência de aprendizado com respostas inteligentes.', tags: ['Respostas inteligentes', 'Tutoria virtual', 'Geração de conteúdo', '+1'], active: true },
    { id: 'notion', name: 'Notion', category: 'Produtividade', logoIcon: 'wysiwyg', description: 'Conecte com o Notion para gerenciar documentação e recursos de aprendizado de forma integrada.', tags: ['Sincronização de conteúdo', 'Documentação colaborativa', 'Wiki integrado', '+1'], active: false },
    { id: 'miro', name: 'Miro', category: 'Produtividade', logoIcon: 'draw', description: 'Integre com o Miro para colaboração visual e brainstorming em tempo real em seus cursos.', tags: ['Quadros colaborativos', 'Brainstorming visual', 'Templates educacionais', '+1'], active: false },
];

const allTableColumns = {
    trilhas: [ { key: "titulo", label: "Título" }, { key: "cursos", label: "Cursos" }, { key: "status", label: "Status" }, {key: "acoes", label: "Ações"}],
    cursos: [ { key: "titulo", label: "Título" }, { key: "tipo", label: "Tipo" }, { key: "status", label: "Status" }, {key: "acoes", label: "Ações"}],
    canais: [ { key: "nome", label: "Nome do Canal" }, { key: "tipo", label: "Tipo" }, { key: "criador", label: "Criador" }, { key: "seguidores", label: "Seguidores" }, {key: "acoes", label: "Ações"}],
    pulses: [ { key: "titulo", label: "Título do Pulse" }, { key: "tipo", label: "Tipo" }, { key: "canal", label: "Canal Associado" }, { key: "visualizacoes", label: "Visualizações" }, {key: "acoes", label: "Ações"}],
    eventos: [ { key: "nome", label: "Nome" }, { key: "data", label: "Data" }, { key: "tipo", label: "Tipo" }, { key: "status", label: "Status" }, {key: "acoes", label: "Ações"}],
    matriculas_cursos: [ { key: "nomeMissao", label: "Nome" }, { key: "usuario", label: "Usuário" }, { key: "inicio", label: "Início" }, { key: "fim", label: "Fim" }, { key: "meta", label: "Meta" }, { key: "perf", label: "Perf." }, { key: "atraso", label: "Atraso" }, { key: "obrig", label: "Obrig." }, { key: "status", label: "Status" }, {key: "acoes", label: "Ações"}],
    matriculas_trilhas: [ { key: "nomeTrilha", label: "Nome" }, { key: "usuario", label: "Usuário" }, { key: "inicio", label: "Início" }, { key: "fim", label: "Fim" }, { key: "meta", label: "Meta" }, { key: "perf", label: "Perf." }, { key: "atraso", label: "Atraso" }, { key: "status", label: "Status" }, {key: "acoes", label: "Ações"}],
    matriculas_eventos: [ { key: "aluno", label: "Aluno" }, {key: "evento", label: "Evento"}, {key: "presenca", label: "Presença"}, {key: "acoes", label: "Ações"}],
    grupos: [ { key: "nome", label: "Nome" }, { key: "trilhas", label: "Trilhas" }, { key: "missoes", label: "Missões" }, { key: "canais", label: "Canais" }, { key: "usuarios", label: "Usuários" }, {key: "acoes", label: "Ações"} ],
    categorias: [ { key: "nome", label: "Nome" }, { key: "missoes", label: "Missões" }, { key: "canais", label: "Canais" }, {key: "acoes", label: "Ações"} ],
    normativas: [ { key: "titulo", label: "Título" }, { key: "versao", label: "Versão" }, { key: "status", label: "Status" }, { key: "dataPublicacao", label: "Publicação" }, {key: "acoes", label: "Ações"}]
};
const tableDataSources = { trilhas: trilhasData, cursos: cursosData, canais: canaisData, pulses: pulsesData, eventos: eventosData, matriculas_cursos: matriculasCursosData, matriculas_trilhas: matriculasTrilhasData, matriculas_eventos: matriculasEventosData, grupos: gruposData, categorias: categoriasData, normativas: normativasData };
const sectionIcons = {
    cursos: 'rocket_launch',
    trilhas: 'conversion_path',
    canais: 'hub',
    pulses: 'bolt',
    eventos: 'calendar_month',
    grupos: 'groups',
    categorias: 'category',
    normativas: 'update',
    matriculas_cursos: 'rocket_launch',
    matriculas_trilhas: 'conversion_path',
    matriculas_eventos: 'calendar_month'
};
let visibleColumnsState = {};
for (const sectionKey in allTableColumns) { visibleColumnsState[sectionKey] = {}; allTableColumns[sectionKey].forEach(col => { if (col.key !== 'acoes') { visibleColumnsState[sectionKey][col.key] = true; } }); }

const sidebar = document.getElementById('sidebar');
const collapseButton = document.getElementById('collapseButton');
const exitAdminButton = document.getElementById('exitAdminButton');
const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');
const contentPanel = document.getElementById('contentPanel');
let currentActiveMenuSection = 'gestao-conteudos';
let currentActiveContentTab = 'cursos';
let currentIntegrationFilter = 'todas';

function filterCurrentTable(sectionId) {
    let tableId = sectionId;
    if (sectionId === 'gestao-conteudos' || sectionId === 'matriculas') {
        tableId = currentActiveContentTab;
    }
    const table = document.getElementById(`table-${tableId}`);
    const input = document.getElementById(`header-search-${sectionId}`);
    if (table && input) {
        const term = input.value.toLowerCase();
        const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
        Array.from(rows).forEach(row => {
            row.style.display = Array.from(row.cells).some(cell => cell.textContent.toLowerCase().includes(term)) ? '' : 'none';
        });
    }
}

function attachHeaderSearchListener(sectionId) {
    const input = document.getElementById(`header-search-${sectionId}`);
    if (input) {
        input.addEventListener('keyup', () => filterCurrentTable(sectionId));
    }
}

function handleHeaderOnCollapse() {}
collapseButton.addEventListener('click', () => { sidebar.classList.toggle('collapsed'); handleHeaderOnCollapse(); });
exitAdminButton.addEventListener('click', () => { alert('Saindo da Área Administrativa...'); });

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        const sectionId = this.getAttribute('data-section');
        currentActiveMenuSection = sectionId;
        if (sectionId === 'geral' || sectionId === 'layout' || sectionId === 'integracoes' || sectionId === 'marketplace' || sectionId === 'log-atividades') {
            renderConfiguracoesTabs();
        } else {
            loadSectionContent(sectionId);
        }
    });
});

function getStatusClass(status) { if (!status) return ''; let className = status.toLowerCase().replace(/[\s()]/g, '-'); if (status === "OBRIGATÓRIA") className += " status-obrigatoria"; if (status === "INICIADA") className += " status-iniciada"; if (status === "FINALIZADA" && !className.includes("status-publicado")) className += " status-finalizada"; return className; }

function renderColumnToggleDropdown(sectionId, allCols) { let dropdownHtml = '<div class="column-toggle-dropdown">'; const configurableColumns = allCols.filter(col => col.key !== 'acoes'); configurableColumns.forEach(col => { const isVisible = visibleColumnsState[sectionId] ? visibleColumnsState[sectionId][col.key] !== false : true; dropdownHtml += `<div class="dropdown-item" data-section="${sectionId}" data-column="${col.key}"><input type="checkbox" ${isVisible ? 'checked' : ''} id="toggle-col-${sectionId}-${col.key}"><label for="toggle-col-${sectionId}-${col.key}">${col.label}</label></div>`; }); dropdownHtml += '</div>'; return dropdownHtml; }

function addColumnToggleListeners(sectionId, allColsDefinition) { const settingsButton = document.getElementById(`tableSettingsBtn-${sectionId}`); const dropdown = settingsButton?.parentElement.querySelector('.column-toggle-dropdown'); settingsButton?.addEventListener('click', (event) => { event.stopPropagation(); if (dropdown) { dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block'; } }); document.addEventListener('click', function(event) { if (dropdown && settingsButton && !settingsButton.contains(event.target) && !dropdown.contains(event.target)) { dropdown.style.display = 'none'; } }); const dropdownItems = document.querySelectorAll(`.column-toggle-dropdown .dropdown-item[data-section="${sectionId}"]`); dropdownItems.forEach(item => { const checkbox = item.querySelector('input[type="checkbox"]'); checkbox.addEventListener('change', function() { const columnKey = item.dataset.column; if (!visibleColumnsState[sectionId]) { visibleColumnsState[sectionId] = {}; allColsDefinition.forEach(col => { if(col.key !== 'acoes') visibleColumnsState[sectionId][col.key] = true; }); } visibleColumnsState[sectionId][columnKey] = this.checked; if (document.getElementById(`tab-content-${sectionId}`)) { loadTabContent(sectionId); } else { const contentArea = contentPanel.querySelector('.section-content-area'); if (contentArea && tableDataSources[sectionId] && allTableColumns[sectionId]) { contentArea.innerHTML = renderGenericTable(sectionId, tableDataSources[sectionId], allTableColumns[sectionId]); setupTableCheckboxes(`table-${sectionId}`); addColumnToggleListeners(sectionId, allTableColumns[sectionId]); } } }); }); }

function setupTableCheckboxes(tableId) { const selectAllCheckbox = document.getElementById(`selectAll-${tableId.replace('table-', '')}`); const itemCheckboxes = document.querySelectorAll(`#${tableId} .item-checkbox`); if (selectAllCheckbox) { selectAllCheckbox.addEventListener('change', function() { itemCheckboxes.forEach(checkbox => { checkbox.checked = this.checked; }); }); } itemCheckboxes.forEach(checkbox => { checkbox.addEventListener('change', () => { if (!checkbox.checked && selectAllCheckbox) { selectAllCheckbox.checked = false; } let allChecked = true; itemCheckboxes.forEach(cb => { if (!cb.checked) allChecked = false; }); if (allChecked && selectAllCheckbox) { selectAllCheckbox.checked = true; } }); }); }

function renderGenericTable(sectionId, data, allColsDefinition) {
    let placeholderText = "Buscar"; let sectionFriendlyName = sectionId.replace(/matriculas_|-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()).trim(); placeholderText = `Buscar em ${sectionFriendlyName}...`;
    const itemIconName = sectionIcons[sectionId] || 'article';
    const columnsToRenderInHeader = allColsDefinition.filter(col => { if (col.key === 'acoes') return false; return visibleColumnsState[sectionId] ? visibleColumnsState[sectionId][col.key] !== false : true; });
    let tableHTML = `<table id="table-${sectionId}"><thead><tr><th class="cell-checkbox"><input type="checkbox" class="table-checkbox" id="selectAll-${sectionId}" title="Selecionar Todos"></th>`;
    columnsToRenderInHeader.forEach(col => { tableHTML += `<th>${col.label}</th>`; });
    tableHTML += `<th style="text-align: right; position:relative;"><div class="table-header-actions"><button class="btn-icon" id="tableSettingsBtn-${sectionId}" title="Configurar Colunas"><span class="material-symbols-outlined">settings</span></button>${renderColumnToggleDropdown(sectionId, allColsDefinition)}</div></th>`;
    tableHTML += `</tr></thead><tbody>`;
    if (data && data.length > 0) { data.forEach((item) => { tableHTML += `<tr> <td class="cell-checkbox"><input type="checkbox" class="table-checkbox item-checkbox" data-id="${item.id}"></td>`; allColsDefinition.forEach((col, colIndex) => { if (col.key === 'acoes') return; const shouldRenderCell = visibleColumnsState[sectionId] ? visibleColumnsState[sectionId][col.key] !== false : true; if (shouldRenderCell) { if (colIndex === 0 && (sectionIcons[sectionId]) ) { tableHTML += `<td class="cell-with-icon"><span class="material-symbols-outlined">${item.iconName || itemIconName}</span><span>${item[col.key] || 'N/A'}</span></td>`; } else if (col.key === "status" || col.key === "obrig") { tableHTML += `<td><span class="status ${getStatusClass(item[col.key])}">${item[col.key] || 'N/A'}</span></td>`; } else { tableHTML += `<td>${item[col.key] || 'N/A'}</td>`; } } }); tableHTML += `<td class="cell-actions"> <div class="table-row-actions"><button class="btn-icon more" title="Mais opções"><span class="material-symbols-outlined">more_vert</span></button><button class="btn-icon view" title="Visualizar"><span class="material-symbols-outlined">visibility</span></button><button class="btn-icon delete" title="Excluir"><span class="material-symbols-outlined">delete</span></button></div> </td>`; tableHTML += `</tr>`; });
    } else { tableHTML += `<tr><td colspan="${columnsToRenderInHeader.length + 2}" style="text-align:center; padding: 20px;">Nenhum item encontrado.</td></tr>`; }
    tableHTML += `</tbody></table>`; return tableHTML;
}

function renderContentTabs(sectionType) { /* ... (Idêntico) ... */ }
renderContentTabs = function(sectionType) {
    let contentTabsConfig = [];
    let defaultTabId = '';
    if (sectionType === 'gestao-conteudos') {
        contentTabsConfig = [
            { id: 'cursos', label: 'Cursos', icon: 'rocket_launch' },
            { id: 'trilhas', label: 'Trilhas', icon: 'conversion_path' },
            { id: 'eventos', label: 'Eventos', icon: 'calendar_month' },
            { id: 'canais', label: 'Canais', icon: 'hub' },
            { id: 'pulses', label: 'Pulses', icon: 'bolt' }
        ];
        defaultTabId = 'cursos';
    } else if (sectionType === 'matriculas') {
        contentTabsConfig = [
            { id: 'matriculas_cursos', label: 'Cursos', icon: 'rocket_launch' },
            { id: 'matriculas_trilhas', label: 'Trilhas', icon: 'conversion_path' },
            { id: 'matriculas_eventos', label: 'Eventos', icon: 'calendar_month' }
        ];
        defaultTabId = 'matriculas_cursos';
    }
    const isValidCurrentTab = contentTabsConfig.some(tab => tab.id === currentActiveContentTab);
    if (!isValidCurrentTab && defaultTabId) {
        currentActiveContentTab = defaultTabId;
    }
    let html = `<div class="content-tabs-container"> <div class="content-tabs">`;
    contentTabsConfig.forEach(tab => {
        html += `<div class="tab-item ${tab.id === currentActiveContentTab ? 'active' : ''}" data-tab="${tab.id}"><span class="material-symbols-outlined nav-icon-md">${tab.icon}</span> ${tab.label}</div>`;
    });
    html += `</div>  </div>`;
    html += '<div class="tab-content-area">';
    contentTabsConfig.forEach(tab => {
        html += `<div class="tab-content ${tab.id === currentActiveContentTab ? 'active' : ''}" id="tab-content-${tab.id}"></div>`;
    });
    html += '</div>';
    return html;
}

function renderIntegrationTabs() { /* ... (Idêntico) ... */ }
renderIntegrationTabs = function() { const filterTabsConfig = [ { id: 'todas', label: `Todas (${integrationsData.length})` }, { id: 'ativas', label: `Ativas (${integrationsData.filter(i => i.active).length})` }, { id: 'inativas', label: `Inativas (${integrationsData.filter(i => !i.active).length})` } ]; let html = `<div class="content-tabs-container"><div class="content-tabs">`; filterTabsConfig.forEach(tab => { html += `<div class="tab-item ${tab.id === currentIntegrationFilter ? 'active' : ''}" data-filter="${tab.id}">${tab.label}</div>`; }); html += `</div><div class="content-tab-actions"><button class="header-button" id="newIntegrationButton" title="Nova Integração"><span class="material-symbols-outlined">add</span></button></div></div>`; html += `<div class="controls" style="padding: 12px 16px 12px 24px; border-bottom: 1px solid var(--border-color);"><div class="search-input-container"><span class="material-symbols-outlined">search</span><input type="text" placeholder="Buscar integrações..." id="search-integrations"></div></div>`; html += '<div class="integrations-grid-wrapper"><div class="integrations-grid" id="integrationsGrid"></div></div>'; return html; }

function renderIntegrationCards() { /* ... (Idêntico) ... */ }
renderIntegrationCards = function() { const grid = document.getElementById('integrationsGrid'); if (!grid) return; grid.innerHTML = ''; const searchTerm = document.getElementById('search-integrations')?.value.toLowerCase() || ''; const filteredData = integrationsData.filter(integration => { const matchesFilter = (currentIntegrationFilter === 'todas') || (currentIntegrationFilter === 'ativas' && integration.active) || (currentIntegrationFilter === 'inativas' && !integration.active); const matchesSearch = !searchTerm || integration.name.toLowerCase().includes(searchTerm) || integration.category.toLowerCase().includes(searchTerm) || integration.description.toLowerCase().includes(searchTerm); return matchesFilter && matchesSearch; }); if (filteredData.length === 0) { grid.innerHTML = `<p style="padding: 24px; text-align: center; color: var(--sidebar-icon-color);">Nenhuma integração encontrada.</p>`; return; } filteredData.forEach(integration => { const card = document.createElement('div'); card.className = 'integration-card'; card.innerHTML = `<div class="integration-card-header"> <div class="integration-card-info"> <div class="integration-card-logo"> ${integration.logoIcon ? `<span class="material-symbols-outlined">${integration.logoIcon}</span>` : ''} </div> <div> <div class="integration-card-name">${integration.name}</div> <div class="integration-card-category">${integration.category}</div> </div> </div> <label class="integration-card-toggle"> <input type="checkbox" ${integration.active ? 'checked' : ''} data-id="${integration.id}"> <span class="slider"></span> </label> </div> <p class="integration-card-description">${integration.description}</p> <div class="integration-card-tags"> ${integration.tags.map(tag => `<span class="tag">${tag}</span>`).join('')} </div> <div class="integration-card-footer"> <a href="#" class="details-link" onclick="alert('Ver detalhes: ${integration.name}')"> Ver detalhes <span class="material-symbols-outlined">chevron_right</span> </a> <button class="btn config-button" onclick="alert('Configurar: ${integration.name}')"> <span class="material-symbols-outlined">settings</span> Configurar </button> </div>`; grid.appendChild(card); }); document.querySelectorAll('.integration-card-toggle input').forEach(toggle => { toggle.addEventListener('change', function() { const integrationId = this.dataset.id; const integration = integrationsData.find(i => i.id === integrationId); if (integration) { integration.active = this.checked; if ((currentIntegrationFilter === 'ativas' && !integration.active) || (currentIntegrationFilter === 'inativas' && integration.active)) { renderIntegrationCards(); } document.querySelector('.tab-item[data-filter="ativas"]').textContent = `Ativas (${integrationsData.filter(i => i.active).length})`; document.querySelector('.tab-item[data-filter="inativas"]').textContent = `Inativas (${integrationsData.filter(i => !i.active).length})`; } }); }); }

function renderLayoutSettings() { /* ... (Idêntico) ... */ }
renderLayoutSettings = function() { const predefinedColors = [ { primary: '#8A2BE2', secondary: '#C6A4E7' }, { primary: '#FF3B30', secondary: '#FF9500' }, { primary: '#34C759', secondary: '#30D158' }, { primary: '#007AFF', secondary: '#5856D6' }, { primary: '#AF52DE', secondary: '#FF2D55' }, { primary: '#FF9500', secondary: '#FFCC00' } ]; let currentColor = { primary: '#673AB7', secondary: '#9F73E5' }; let html = `<div class="settings-section-card"><h3>Logo da plataforma</h3> <div class="logo-uploaders"> <div class="logo-uploader"> <div class="logo-preview-box" id="logoLightUploader" title="Clique para carregar logo para tema claro"> <span class="material-symbols-outlined">upload_file</span> <span>Logo para tema claro</span> </div> <small>Recomendado: PNG com fundo transparente</small> </div> <div class="logo-uploader"> <div class="logo-preview-box" id="logoDarkUploader" title="Clique para carregar logo para tema escuro"> <span class="material-symbols-outlined">upload_file</span> <span>Logo para tema escuro</span> </div> <small>Recomendado: PNG com fundo transparente</small> </div> </div> <input type="file" id="logoLightFile" accept="image/*" style="display:none;"> <input type="file" id="logoDarkFile" accept="image/*" style="display:none;"> <h3>Cor principal</h3> <div class="color-palette" id="colorPalette">`; predefinedColors.forEach((colorPair) => { html += `<div class="color-swatch" title="Primária: ${colorPair.primary}" style="background-color: ${colorPair.primary};" data-primary="${colorPair.primary}" data-secondary="${colorPair.secondary}"> <span class="material-symbols-outlined" style="opacity:0;">check</span> </div>`; }); html += `</div> <div class="custom-color-input"> <label for="customColorHex">Cor customizada:</label> <input type="text" id="customColorHex" value="${currentColor.primary}" maxlength="7"> <div class="color-preview-inline" id="customColorPreview" style="background-color: ${currentColor.primary};"></div> </div> </div>`; html += `<div class="settings-section-card"> <h3 style="margin-top:0; border-bottom:none; padding-bottom:0;">Tema da plataforma</h3> <p class="description">Escolha entre tema claro ou escuro para sua workspace.</p> <div class="theme-selector" id="themeSelector"> <div class="theme-option active" data-theme="dark"> <span class="material-symbols-outlined">dark_mode</span> Dark </div> <div class="theme-option" data-theme="light"> <span class="material-symbols-outlined">light_mode</span> Light </div> <div class="theme-option" data-theme="system">  Sistema </div> </div> </div>`; html += `<div class="layout-actions"> `; return html; }

function addLayoutSettingsListeners() { /* ... (Idêntico) ... */ }
addLayoutSettingsListeners = function() { document.getElementById('logoLightUploader')?.addEventListener('click', () => document.getElementById('logoLightFile').click()); document.getElementById('logoDarkUploader')?.addEventListener('click', () => document.getElementById('logoDarkFile').click()); document.getElementById('logoLightFile')?.addEventListener('change', function(e) { if (e.target.files && e.target.files[0]) { alert(`Logo tema claro: ${e.target.files[0].name}`); } }); document.getElementById('logoDarkFile')?.addEventListener('change', function(e) { if (e.target.files && e.target.files[0]) { alert(`Logo tema escuro: ${e.target.files[0].name}`); } }); const colorSwatches = document.querySelectorAll('#colorPalette .color-swatch'); const customColorHexInput = document.getElementById('customColorHex'); const customColorPreview = document.getElementById('customColorPreview'); function setActiveColor(selectedSwatch) { colorSwatches.forEach(sw => { sw.classList.remove('active'); sw.querySelector('.material-symbols-outlined').style.opacity = '0'; }); if (selectedSwatch) { selectedSwatch.classList.add('active'); selectedSwatch.querySelector('.material-symbols-outlined').style.opacity = '1'; const primaryColor = selectedSwatch.dataset.primary; if (customColorHexInput) customColorHexInput.value = primaryColor; if (customColorPreview) customColorPreview.style.backgroundColor = primaryColor; console.log("Cor primária:", primaryColor); } } colorSwatches.forEach(swatch => { swatch.addEventListener('click', () => setActiveColor(swatch)); }); customColorHexInput?.addEventListener('input', function() { let color = this.value; if (/^#([0-9A-Fa-f]{3}){1,2}$/.test(color)) { if (customColorPreview) customColorPreview.style.backgroundColor = color; colorSwatches.forEach(sw => { sw.classList.remove('active'); sw.querySelector('.material-symbols-outlined').style.opacity = '0'; }); console.log("Cor customizada:", color); } }); if (colorSwatches.length > 0) { setActiveColor(colorSwatches[0]); } const themeOptions = document.querySelectorAll('#themeSelector .theme-option'); themeOptions.forEach(option => { option.addEventListener('click', function() { themeOptions.forEach(opt => opt.classList.remove('active')); this.classList.add('active'); const selectedTheme = this.dataset.theme; alert(`Tema: ${selectedTheme}`); }); }); document.getElementById('saveLayoutSettings')?.addEventListener('click', () => { const selectedColor = document.querySelector('#colorPalette .color-swatch.active')?.dataset.primary || customColorHexInput.value; const selectedTheme = document.querySelector('#themeSelector .theme-option.active')?.dataset.theme; alert(`Salvo!\nCor: ${selectedColor}\nTema: ${selectedTheme}`); }); }

function renderGeneralSettings() { /* ... (Idêntico) ... */ }
renderGeneralSettings = function() { const modulos = [ { id: 'dashboard', label: 'Dashboard', checked: true, icon: 'dashboard' }, { id: 'trilhas', label: 'Trilhas', checked: true, icon: 'conversion_path' }, { id: 'missoes', label: 'Missões', checked: true, icon: 'school' }, { id: 'eventos', label: 'Eventos', checked: true, icon: 'event' }, { id: 'pulses', label: 'Pulses', checked: true, icon: 'campaign' }, { id: 'normativas_mod', label: 'Normativas', checked: true, icon: 'gavel' }, { id: 'gamificacao_mod', label: 'Gamificação', checked: true, icon: 'sports_esports' }, { id: 'ranking_geral', label: 'Ranking geral', checked: false, icon: 'leaderboard' }, { id: 'ranking_diretoria', label: 'Ranking por diretoria', checked: false, icon: 'leaderboard' }, { id: 'ranking_subdiretoria', label: 'Ranking por sub-diretoria', checked: false, icon: 'leaderboard' }, { id: 'ranking_area', label: 'Ranking por área', checked: false, icon: 'leaderboard' }, { id: 'ranking_lideranca', label: 'Ranking por liderança', checked: false, icon: 'leaderboard' } ]; const outrasConfig = [ { id: 'cat_padrao', label: 'Categorias Padrão', checked: true }, { id: 'bloq_rematricula', label: 'Bloqueio de Rematrícula', checked: true, description: 'Ative esta opção para impedir que usuários se matriculem mais de uma vez na mesma trilha ou missão. Este bloqueio impede novas rematrículas, mas não afeta matrículas existentes realizadas antes da ativação desta função. As rematrículas anteriores continuarão válidas e não serão excluídas automaticamente.' } ]; const exibicaoConteudos = [ { id: 'ex_matr', label: 'Matriculada', checked: false }, { id: 'ex_inic', label: 'Iniciada', checked: false }, { id: 'ex_final', label: 'Finalizada', checked: true }, { id: 'ex_desist', label: 'Desistiu', checked: true, negative: true },  { id: 'ex_reprov', label: 'Reprovada', checked: true, negative: true }, { id: 'ex_expir', label: 'Expirada', checked: true, negative: true }, { id: 'ex_inativa', label: 'Inativa', checked: true, negative: true }, { id: 'ex_agconf', label: 'Ag. confirm', checked: true, negative: true }, { id: 'ex_recus', label: 'Recusada', checked: true, negative: true }, { id: 'ex_reqprazo', label: 'Req. novo prazo', checked: true, negative: true }, { id: 'ex_agaprov', label: 'Ag. Aprovação', checked: true, negative: true } ]; let html = `<div class="general-settings-grid"> <div class="settings-column"> <div class="settings-block"> <h3>Ativar/Desativar Módulos</h3>`; modulos.forEach(mod => { html += `<div class="setting-item"> <label for="toggle-${mod.id}"> ${mod.icon ? `<span class="material-symbols-outlined">${mod.icon}</span>` : ''} ${mod.label} </label> <label class="toggle-switch"> <input type="checkbox" id="toggle-${mod.id}" ${mod.checked ? 'checked' : ''}> <span class="slider"></span> </label> </div>`; }); html += `</div> </div> <div class="settings-column"> <div class="settings-block"> <h3>Outras configurações</h3>`; outrasConfig.forEach(conf => { html += `<div class="setting-item"> <label for="toggle-${conf.id}">${conf.label}</label> <label class="toggle-switch"> <input type="checkbox" id="toggle-${conf.id}" ${conf.checked ? 'checked' : ''}> <span class="slider"></span> </label> </div> ${conf.description ? `<p class="description" style="margin-top: 8px; padding-left:0;">${conf.description}</p>` : ''}`; }); html += `</div> <div class="settings-block"> <h3>Exibição de Conteúdos</h3> <p class="description">Personalize a página de missões configurando quais tipos serão exibidos aos usuários:</p>`; exibicaoConteudos.forEach(ex => { html += `<div class="setting-item"> <label for="toggle-${ex.id}">${ex.label}</label> <label class="toggle-switch ${ex.negative ? 'negative' : ''}"> <input type="checkbox" id="toggle-${ex.id}" ${ex.checked ? 'checked' : ''}> <span class="slider"></span> </label> </div>`; }); html += `</div> </div> <div class="settings-column"> <div class="settings-block"> <h3>Performance mínima para aprovação</h3> <p class="description">Configure a performance mínima para aprovação e geração de certificado de uma missão. Novos valores só serão refletidos à novas matrículas concluídas.</p> <div class="form-group"> <input type="number" id="performanceMin" value="76" min="0" max="100"> <small>Informe um valor entre 0% e 100%</small> </div> <div class="form-actions"> <button class="btn btn-primary" id="savePerformance">Salvar</button> </div> </div> <div class="settings-block"> <h3>Meta para conclusão das missões</h3> <p class="description">Defina o valor base para a data meta de conclusão dos cursos em sua workspace.</p> <div class="form-group"> <input type="text" id="metaConclusao" value="55 dias(s)"> </div> </div> </div> </div>`; return html; }

// --- Configurações: Tabs internas ---
function renderConfiguracoesTabs(activeTab = 'geral') {
    const tabs = [
        { key: 'geral', label: 'Geral' },
        { key: 'identidade', label: 'Identidade Visual' },
        { key: 'complementos', label: 'Complementos' },
        { key: 'log', label: 'Log de Atividades' }
    ];
    let html = `<div class="content-header-no-tabs">
        <span class="section-title">Configurações</span>
    </div>
    <div class="content-tabs-container">
        <div class="content-tabs">`;
    tabs.forEach(tab => {
        html += `<div class="tab-item${activeTab === tab.key ? ' active' : ''}" data-tab="${tab.key}">${tab.label}</div>`;
    });
    html += `</div></div><div class="tab-content-area">`;
    tabs.forEach(tab => {
        html += `<div class="tab-content${activeTab === tab.key ? ' active' : ''}" id="tab-${tab.key}"></div>`;
    });
    html += `</div>`;
    contentPanel.innerHTML = html;
    // Alternância de abas
    document.querySelectorAll('.tab-item').forEach(tab => {
        tab.addEventListener('click', () => {
            renderConfiguracoesTabs(tab.dataset.tab);
        });
    });
    // Render conteúdo de cada aba
    if (activeTab === 'geral') renderConfiguracoesGeral();
    if (activeTab === 'identidade') renderConfiguracoesIdentidade();
    if (activeTab === 'complementos') renderConfiguracoesComplementos();
    if (activeTab === 'log') renderConfiguracoesLog();
}

function renderConfiguracoesGeral() {
    // Renderiza todas as seções em cards verticais, exceto identidade visual
    let html = `<div class="settings-page-wrapper">
        <div class="settings-section-card">
            <h2>Ativar/Desativar Módulos</h2>
            <div class="form-group"><label><input type="checkbox" checked> Dashboard</label></div>
            <div class="form-group"><label><input type="checkbox" checked> Trilhas</label></div>
            <div class="form-group"><label><input type="checkbox" checked> Missões</label></div>
            <div class="form-group"><label><input type="checkbox" checked> Cursos</label></div>
            <div class="form-group"><label><input type="checkbox" checked> Canais</label></div>
            <div class="form-group"><label><input type="checkbox"> Eventos</label></div>
            <div class="form-group"><label><input type="checkbox"> Grupos</label></div>
        </div>
        <div class="settings-section-card">
            <h2>Regras e Comportamentos</h2>
            <div class="form-group"><label><input type="checkbox"> Bloqueio de Rematrícula</label></div>
            <div class="form-group"><label>Categorias Padrão <select><option>Selecione</option><option>Soft Skills</option><option>Onboarding</option></select></label></div>
            <div class="form-group"><label><input type="checkbox"> Exibir conteúdos apenas publicados</label></div>
        </div>
        <div class="settings-section-card">
            <h2>Performance e Prazos</h2>
            <div class="form-group"><label>Performance mínima (%)<input type="number" min="0" max="100" value="80"></label></div>
            <div class="form-group"><label>Meta de conclusão (dias)<input type="number" min="0" value="30"></label></div>
        </div>
    </div>`;
    document.getElementById('tab-geral').innerHTML = html;
}

function renderConfiguracoesIdentidade() {
    // Paleta de cores
    const palette = [
        '#1E40AF','#2563EB','#3B82F6','#38BDF8','#06B6D4','#14B8A6','#22C55E','#84CC16','#FACC15','#F59E42','#F97316','#EF4444','#F43F5E','#EC4899','#A21CAF','#8B5CF6','#7C3AED','#64748B','#A3A3A3','#7C4A2D'
    ];
    let html = `<div class="settings-page-wrapper">
        <div class="settings-section-card">
            <h2 style="color:var(--primary-color);margin-bottom:24px;">Identidade Visual</h2>
            <div style="display:flex;gap:32px;flex-wrap:wrap;align-items:flex-start;justify-content:flex-start;">
                <div style="display:flex;flex-direction:column;gap:24px;min-width:220px;">
                    <div class="logo-dropzone" id="dropzoneClaro">
                        <input type="file" id="logoInputClaro" accept="image/*" style="display:none;">
                        <div class="logo-preview" id="logoPreviewClaro" style="background:#fff;"><span class="material-symbols-outlined" style="font-size:40px;color:#bbb;">upload_file</span></div>
                        <div class="logo-instruction">Selecione ou arraste uma imagem (tema claro)</div>
                    </div>
                    <div class="logo-dropzone" id="dropzoneEscuro">
                        <input type="file" id="logoInputEscuro" accept="image/*" style="display:none;">
                        <div class="logo-preview" id="logoPreviewEscuro" style="background:#222;"><span class="material-symbols-outlined" style="font-size:40px;color:#bbb;">upload_file</span></div>
                        <div class="logo-instruction">Selecione ou arraste uma imagem (tema escuro)</div>
                    </div>
                </div>
                <div style="flex:1;min-width:320px;">
                    <div style="margin-bottom:18px;">
                        <label style="font-weight:500;">Selecione uma cor da lista abaixo</label>
                        <div class="color-swatches" style="display:flex;gap:12px;margin:12px 0 0 0;flex-wrap:wrap;">
                            ${palette.map(color => `<div class="color-swatch" data-color="${color}" style="background:${color};"></div>`).join('')}
                        </div>
                    </div>
                    <div style="margin-bottom:18px;">
                        <label style="font-weight:500;">ou selecione uma cor customizada</label>
                        <div style="display:flex;align-items:center;gap:12px;margin-top:8px;">
                            <input type="color" id="corPrincipalInput" value="#8A2BE2" style="width:44px;height:44px;border:none;background:none;">
                            <input type="text" id="corPrincipalHex" value="#8A2BE2" maxlength="7" style="width:90px;">
                            <span id="corPreview" style="display:inline-block;width:32px;height:32px;border-radius:6px;background:#8A2BE2;"></span>
                        </div>
                    </div>
                    <div style="margin-bottom:18px;">
                        <label style="font-weight:500;">Selecione o tema</label>
                        <div class="theme-selectors" style="display:flex;gap:18px;margin-top:10px;">
                            <button class="theme-btn active" data-theme="dark"><span class="material-symbols-outlined">dark_mode</span> Dark</button>
                            <button class="theme-btn" data-theme="light"><span class="material-symbols-outlined">light_mode</span> Light</button>
                            <button class="theme-btn" data-theme="system"><span class="material-symbols-outlined">settings_brightness</span> Sistema</button>
                        </div>
                    </div>
                    <div class="form-actions" style="margin-top:32px;">
                        <button class="btn btn-primary" id="salvarIdentidade">Salvar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    document.getElementById('tab-identidade').innerHTML = html;
    // Dropzone e preview para logo claro
    const dropClaro = document.getElementById('dropzoneClaro');
    const inputClaro = document.getElementById('logoInputClaro');
    const previewClaro = document.getElementById('logoPreviewClaro');
    dropClaro.addEventListener('click',()=>inputClaro.click());
    dropClaro.addEventListener('dragover',e=>{e.preventDefault();dropClaro.classList.add('dragover');});
    dropClaro.addEventListener('dragleave',()=>dropClaro.classList.remove('dragover'));
    dropClaro.addEventListener('drop',e=>{e.preventDefault();dropClaro.classList.remove('dragover');if(e.dataTransfer.files[0])inputClaro.files=e.dataTransfer.files;inputClaro.dispatchEvent(new Event('change'));});
    inputClaro.addEventListener('change',function(e){if(e.target.files&&e.target.files[0]){const reader=new FileReader();reader.onload=ev=>{previewClaro.innerHTML=`<img src='${ev.target.result}' style='max-width:100%;max-height:100%;border-radius:8px;'>`;};reader.readAsDataURL(e.target.files[0]);}});
    // Dropzone e preview para logo escuro
    const dropEscuro = document.getElementById('dropzoneEscuro');
    const inputEscuro = document.getElementById('logoInputEscuro');
    const previewEscuro = document.getElementById('logoPreviewEscuro');
    dropEscuro.addEventListener('click',()=>inputEscuro.click());
    dropEscuro.addEventListener('dragover',e=>{e.preventDefault();dropEscuro.classList.add('dragover');});
    dropEscuro.addEventListener('dragleave',()=>dropEscuro.classList.remove('dragover'));
    dropEscuro.addEventListener('drop',e=>{e.preventDefault();dropEscuro.classList.remove('dragover');if(e.dataTransfer.files[0])inputEscuro.files=e.dataTransfer.files;inputEscuro.dispatchEvent(new Event('change'));});
    inputEscuro.addEventListener('change',function(e){if(e.target.files&&e.target.files[0]){const reader=new FileReader();reader.onload=ev=>{previewEscuro.innerHTML=`<img src='${ev.target.result}' style='max-width:100%;max-height:100%;border-radius:8px;'>`;};reader.readAsDataURL(e.target.files[0]);}});
    // Paleta de cores
    const corInput = document.getElementById('corPrincipalInput');
    const corHex = document.getElementById('corPrincipalHex');
    const corPreview = document.getElementById('corPreview');
    let corAtual = '#8A2BE2';
    document.querySelectorAll('.color-swatch').forEach(swatch=>{
        swatch.addEventListener('click',function(){
            document.querySelectorAll('.color-swatch').forEach(s=>s.classList.remove('active'));
            swatch.classList.add('active');
            corAtual = swatch.dataset.color;
            corInput.value = corAtual;
            corHex.value = corAtual;
            corPreview.style.background = corAtual;
        });
    });
    corInput.addEventListener('input',function(){
        corAtual = corInput.value;
        corHex.value = corAtual;
        corPreview.style.background = corAtual;
        document.querySelectorAll('.color-swatch').forEach(s=>s.classList.remove('active'));
    });
    corHex.addEventListener('input',function(){
        if(/^#([0-9A-Fa-f]{3}){1,2}$/.test(corHex.value)){
            corAtual = corHex.value;
            corInput.value = corAtual;
            corPreview.style.background = corAtual;
            document.querySelectorAll('.color-swatch').forEach(s=>s.classList.remove('active'));
        }
    });
    // Seleção de tema
    let temaAtual = 'dark';
    document.querySelectorAll('.theme-btn').forEach(btn=>{
        btn.addEventListener('click',function(){
            document.querySelectorAll('.theme-btn').forEach(b=>b.classList.remove('active'));
            btn.classList.add('active');
            temaAtual = btn.dataset.theme;
        });
    });
    // Salvar (mock)
    document.getElementById('salvarIdentidade').addEventListener('click',function(){
        alert(`Configurações salvas!\nCor: ${corAtual}\nTema: ${temaAtual}`);
    });
}

function renderConfiguracoesComplementos() {
    // Mock de dados agrupados por categoria
    const grupos = [
        {
            titulo: 'Cursos',
            itens: [
                { tipo: 'marketplace', nome: 'Alura', descricao: 'Com a integração Alura, tenha acesso a cursos de programação, Front-end, Back-end, Data Science, UX, DevOps, Inovação e Gestão da...', logo: 'https://www.alura.com.br/assets/img/alura-share.1647533644.png', acao: 'Contratar', link: '#', toggle: false }
            ]
        },
        {
            titulo: 'Comunicação',
            itens: [
                { tipo: 'integracao', nome: 'Teams', descricao: 'Um plataforma unificada de comunicação e colaboração, mantenha sua equipe conectada ao Konquest diretamente no Teams.', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968752.png', toggle: true },
                { tipo: 'integracao', nome: 'Slack', descricao: 'O Slack é um serviço de mensagens instantâneas multi plataforma baseado na nuvem. Simplifique a comunicação da sua...', logo: 'https://cdn-icons-png.flaticon.com/512/2111/2111615.png', toggle: false }
            ]
        },
        {
            titulo: 'Gestão de Pessoas',
            itens: [
                { tipo: 'integracao', nome: 'Senior', descricao: 'A integração Senior oferece uma plataforma unificada para comunicação e colaboração, combinando bate-papo, videoconferências,...', logo: 'https://seeklogo.com/images/S/senior-logo-6B1B1B1B1B-seeklogo.com.png', acao: 'Solicitar integração', link: '#', toggle: false },
                { tipo: 'integracao', nome: 'ADP', descricao: 'Com a integração ADP, você terá acesso a um serviço de mensagens instantâneas multi plataforma baseado na nuvem. Simplifique o...', logo: 'https://cdn.worldvectorlogo.com/logos/adp-2.svg', acao: 'Solicitar integração', link: '#', toggle: false },
                { tipo: 'integracao', nome: 'GUPY', descricao: 'A integração Gupy oferece um serviço de mensagens instantâneas multi plataforma baseado na nuvem. Melhore o processo de...', logo: 'https://play-lh.googleusercontent.com/1QnQh6Qw1kQw1kQw1kQw1kQw1kQw1kQw1kQw1kQw1kQw1kQw1kQw1kQw1kQw1kQw1kQw1kQw1kQw1kQ=w240-h480-rw', acao: 'Solicitar integração', link: '#', toggle: false },
                { tipo: 'integracao', nome: 'Solides', descricao: 'A integração Solides simplifica a gestão de pessoas com um serviço de mensagens instantâneas multi plataforma baseado na...', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png', acao: 'Solicitar integração', link: '#', toggle: false },
                { tipo: 'integracao', nome: 'Convenia', descricao: 'A integração Convenia oferece um serviço de mensagens instantâneas multi plataforma baseado na nuvem. Gerencie folhas de...', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png', acao: 'Solicitar integração', link: '#', toggle: false },
                { tipo: 'integracao', nome: 'Domínio', descricao: 'Com a integração Domínio, você terá acesso a um serviço de mensagens instantâneas multi plataforma baseado na nuvem. Simplifique a...', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png', acao: 'Solicitar integração', link: '#', toggle: false },
                { tipo: 'integracao', nome: 'Feedz', descricao: 'A integração Feedz oferece um serviço de mensagens instantâneas multi plataforma baseado na nuvem. Melhore o engajamento ...', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png', acao: 'Solicitar integração', link: '#', toggle: false },
                { tipo: 'integracao', nome: 'Totvs RM', descricao: 'A integração Totvs RM proporciona um serviço de mensagens instantâneas multi plataforma baseado na nuvem. Gerencie recursos...', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png', acao: 'Solicitar integração', link: '#', toggle: false }
            ]
        },
        {
            titulo: 'SSO (Login)',
            itens: [
                { tipo: 'integracao', nome: 'Google', descricao: 'Com a integração Google, acesse uma plataforma unificada de comunicação e colaboração. Facilite o login único e simplifiq...', logo: 'https://cdn-icons-png.flaticon.com/512/2702/2702602.png', acao: 'Solicitar integração', link: '#', toggle: false },
                { tipo: 'integracao', nome: 'Azure / Adfs', descricao: 'A integração Azure / Adfs oferece um serviço de mensagens instantâneas multi plataforma baseado na nuvem. Reforce a segurança do...', logo: 'https://cdn-icons-png.flaticon.com/512/732/732221.png', acao: 'Solicitar integração', link: '#', toggle: false }
            ]
        }
    ];
    let html = `
        <div class="complementos-search-bar" style="padding:0 16px 0 16px;">
            <div class="controls" style="margin-bottom:24px; border-bottom:none; padding: 16px 0 0 0;">
                <div class="search-input-container" style="flex:1;">
                    <span class="material-symbols-outlined">search</span>
                    <input type="text" id="buscaComplementos" placeholder="Buscar integrações ou parceiros...">
                    <button class="btn-icon filter-button" id="btnFiltroComplementos" title="Filtros"><span class="material-symbols-outlined">filter_list</span></button>
                </div>
            </div>
        </div>
        <div class="complementos-cards-area" style="padding:0 16px 32px 16px;">`;
    grupos.forEach(grupo => {
        html += `<h3 style="margin:32px 0 16px 0; color:var(--text-color); font-size:1.15rem; font-weight:600;">${grupo.titulo}</h3>`;
        html += `<div class="integrations-grid">`;
        grupo.itens.forEach(card => {
            html += `<div class="integration-card">
                <div class="integration-card-header">
                    <div class="integration-card-info">
                        <div class="integration-card-logo">${card.logo ? `<img src='${card.logo}' style='width:40px;height:40px;object-fit:contain;border-radius:8px;'>` : `<span class="material-symbols-outlined">extension</span>`}</div>
                        <div>
                            <div class="integration-card-name">${card.nome}</div>
                        </div>
                    </div>
                </div>
                <div class="integration-card-description">${card.descricao}</div>
                <div class="integration-card-footer">`;
            if(card.toggle !== undefined) {
                html += `<label class="integration-card-toggle"><input type="checkbox" ${card.toggle ? 'checked' : ''}><span class="slider"></span></label>`;
            }
            if(card.acao) {
                html += `<a class="details-link" href="${card.link || '#'}" style="color:var(--primary-color);font-weight:500;">${card.acao}</a>`;
            }
            html += `</div></div>`;
        });
        html += `</div>`;
    });
    html += `</div>`;
    document.getElementById('tab-complementos').innerHTML = html;
    // Busca e filtro (mock)
    document.getElementById('btnFiltroComplementos').addEventListener('click',()=>alert('Abrir filtros avançados (mock)'));
    document.getElementById('buscaComplementos').addEventListener('input',function(e){
        // Filtro simples por nome/descrição
        const termo = e.target.value.toLowerCase();
        document.querySelectorAll('.integration-card').forEach(card=>{
            const txt = card.textContent.toLowerCase();
            card.style.display = txt.includes(termo) ? '' : 'none';
        });
    });
}

function renderConfiguracoesLog() {
    document.getElementById('tab-log').innerHTML = `<div class="generic-content-placeholder-wrapper"><div class="generic-content-placeholder"><p>Conteúdo ainda não implementado.</p></div></div>`;
}

// --- FIM DAS FUNÇÕES AUXILIARES E DE RENDERIZAÇÃO ---


// --- INÍCIO DA LÓGICA PRINCIPAL E EVENT LISTENERS ---
function loadTabContent(tabId) {
    const tabContentElement = document.getElementById(`tab-content-${tabId}`);
    const allPossibleColumnsForTab = allTableColumns[tabId]; 

    if (tabContentElement && tableDataSources[tabId] && allPossibleColumnsForTab) {
        if (!visibleColumnsState[tabId]) {
            visibleColumnsState[tabId] = {};
            allPossibleColumnsForTab.forEach(col => { if(col.key !== 'acoes') visibleColumnsState[tabId][col.key] = true;});
        }
        tabContentElement.innerHTML = renderGenericTable(tabId, tableDataSources[tabId], allPossibleColumnsForTab);
        setupTableCheckboxes(`table-${tabId}`);
        addColumnToggleListeners(tabId, allPossibleColumnsForTab);

        filterCurrentTable(tabId);
    } else if (tabContentElement) {
        tabContentElement.innerHTML = `<p class="generic-content-placeholder">Conteúdo para a aba ${tabId} não definido ou não é uma tabela.</p>`;
    }
    setupRowActionsDropdowns(tabId);
}

function loadSectionContent(sectionId) {
    contentPanel.innerHTML = '';
    const hasTabsForTables = sectionId === 'gestao-conteudos' || sectionId === 'matriculas';
    const usesSimpleTable = ['grupos', 'categorias', 'normativas'].includes(sectionId);

    let sectionTitle = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
    if (sectionId === "matriculas") sectionTitle = "Matrículas";
    else if (sectionId === "gestao-conteudos") sectionTitle = "Conteúdos";
    else if (sectionId === "normativas") sectionTitle = "Normativas";
    else if (sectionId === "geral") sectionTitle = "Configuração Geral";
    else if (sectionId === "layout") sectionTitle = "Identidade Visual";
    else if (sectionId === "integracoes") sectionTitle = "Integrações";

    if (sectionId === 'geral') {
        let headerHtml = `<div class="content-header-no-tabs"><span class="section-title">${sectionTitle}</span></div>`;
        contentPanel.innerHTML = headerHtml + `<div class="section-content-area">${renderGeneralSettings()}</div>`;
        document.getElementById('savePerformance')?.addEventListener('click', () => {
            alert(`Performance salva: ${document.getElementById('performanceMin').value}%`);
        });
    } else if (sectionId === 'layout') {
        let headerHtml = `<div class="content-header-no-tabs"><span class="section-title">${sectionTitle}</span></div> <div class="settings-page-wrapper">${renderLayoutSettings()}</div>`;
        contentPanel.innerHTML = headerHtml;
        addLayoutSettingsListeners();
    } else if (hasTabsForTables) {
        let headerHtml = `
            <div class="content-header-no-tabs">
                <span class="section-title">${sectionTitle}</span>
                <div class="header-search">
                    <div class="search-input-container">
                        <span class="material-symbols-outlined">search</span>
                        <input type="text" id="header-search-${sectionId}" placeholder="Buscar...">
                        <button class="filter-button icon-btn" title="Filtrar" id="header-filter-${sectionId}">
                            <span class="material-symbols-outlined">filter_list</span>
                        </button>
                    </div>
                </div>
            </div>`;
        contentPanel.innerHTML = headerHtml + renderContentTabs(sectionId);
        attachHeaderSearchListener(sectionId);
        loadTabContent(currentActiveContentTab); // Carrega a aba ativa
        document.querySelectorAll('.tab-item[data-tab]').forEach(tabElement => {
            tabElement.addEventListener('click', function() {
                document.querySelectorAll('.tab-item[data-tab]').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
                this.classList.add('active'); currentActiveContentTab = this.dataset.tab;
                const targetTabContent = document.getElementById(`tab-content-${currentActiveContentTab}`);
                if(targetTabContent) targetTabContent.classList.add('active');
                loadTabContent(currentActiveContentTab);
            });
        });
    } else if (sectionId === 'integracoes') {
        contentPanel.innerHTML = renderIntegrationTabs();
        renderIntegrationCards();
        const newIntegrationButton = document.getElementById('newIntegrationButton');
        if (newIntegrationButton) { newIntegrationButton.addEventListener('click', () => { alert('Abrir modal/página para criar Nova Integração.'); }); }
        document.querySelectorAll('.content-tabs-container .tab-item[data-filter]').forEach(tabElement => {
            tabElement.addEventListener('click', function() {
                document.querySelectorAll('.content-tabs-container .tab-item[data-filter]').forEach(t => t.classList.remove('active'));
                this.classList.add('active'); currentIntegrationFilter = this.dataset.filter;
                renderIntegrationCards();
            });
        });
        const searchIntegrationsInput = document.getElementById('search-integrations');
        if (searchIntegrationsInput) { searchIntegrationsInput.addEventListener('keyup', renderIntegrationCards); }
    } else if (usesSimpleTable) {
        let headerHtml = `
            <div class="content-header-no-tabs">
                <span class="section-title">${sectionTitle}</span>
                <div class="header-search">
                    <div class="search-input-container">
                        <span class="material-symbols-outlined">search</span>
                        <input type="text" id="header-search-${sectionId}" placeholder="Buscar...">
                        <button class="filter-button icon-btn" title="Filtrar" id="header-filter-${sectionId}">
                            <span class="material-symbols-outlined">filter_list</span>
                        </button>
                    </div>
                </div>`;
        if(sectionId !== 'grupos' && sectionId !== 'categorias') {
            headerHtml += `
                <div class="content-header-actions">
                    <button class="header-button" id="directCreateButton" title="Criar Novo ${sectionTitle}">
                        <span class="material-symbols-outlined">add</span>
                    </button>
                </div>`;
        }
        headerHtml += `
            </div>
            <div class="section-content-area"></div>`;
        contentPanel.innerHTML = headerHtml;
        attachHeaderSearchListener(sectionId);
        const directCreateButton = document.getElementById('directCreateButton');
        if(directCreateButton) {
            directCreateButton.addEventListener('click', () => {
                let alertMsg = `Botão "+" (${sectionTitle}) Clicado! Criar novo ${sectionTitle}.`;
                if (sectionId === 'grupos') { alertMsg += "\nOpções de Importação: Usuários, Missões, Canais."; }
                alert(alertMsg);
            });
        }
        const contentArea = contentPanel.querySelector('.section-content-area');
        const allPossibleColumnsForSection = allTableColumns[sectionId]; // Pega todas as colunas possíveis
        if (contentArea && tableDataSources[sectionId] && allPossibleColumnsForSection) {
            if (!visibleColumnsState[sectionId]) { // Inicializa se não existir
                visibleColumnsState[sectionId] = {};
                allPossibleColumnsForSection.forEach(col => { if(col.key !== 'acoes') visibleColumnsState[sectionId][col.key] = true;});
            }
            contentArea.innerHTML = renderGenericTable(sectionId, tableDataSources[sectionId], allPossibleColumnsForSection);
            setupTableCheckboxes(`table-${sectionId}`);
            addColumnToggleListeners(sectionId, allPossibleColumnsForSection); // Passa todas as colunas para o dropdown
            filterCurrentTable(sectionId);
        } else if (contentArea) { contentArea.innerHTML = `<p class="generic-content-placeholder">Dados para ${sectionTitle} não encontrados.</p>`; }
    } else {
        contentPanel.innerHTML = `
            <div class="content-header-no-tabs"> <span class="section-title">${sectionTitle}</span></div>
            <div class="generic-content-placeholder-wrapper"> <div class="generic-content-placeholder">
                <p>Conteúdo para "${sectionTitle}" ainda não implementado.</p>
            </div> </div>`;
    }
    if (sectionId === 'grupos') setupGrupoRowNavigation();
}

document.addEventListener('DOMContentLoaded', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    const defaultActiveLink = document.querySelector('.nav-link[data-section="gestao-conteudos"]');
    if(defaultActiveLink) {
        defaultActiveLink.classList.add('active');
        currentActiveMenuSection = defaultActiveLink.dataset.section;
        if(currentActiveMenuSection === 'gestao-conteudos') currentActiveContentTab = 'cursos';
        else if(currentActiveMenuSection === 'matriculas') currentActiveContentTab = 'matriculas_cursos';
    } else {
        const firstLink = document.querySelector('.sidebar-nav .nav-link');
        if (firstLink) {
            firstLink.classList.add('active');
            currentActiveMenuSection = firstLink.dataset.section;
             if(currentActiveMenuSection === 'gestao-conteudos') currentActiveContentTab = 'cursos';
            else if(currentActiveMenuSection === 'matriculas') currentActiveContentTab = 'matriculas_cursos';
        }
    }
    loadSectionContent(currentActiveMenuSection);
    handleHeaderOnCollapse();
});

// Adiciona o menu dropdown de ações ao clicar no botão de três pontinhos
function createRowActionsDropdown(item, sectionId) {
    // Opções agrupadas
    const options = [
        [ // Edição e Atualização de Conteúdo
            { key: 'editar', label: 'Editar' },
            { key: 'contribuidores', label: 'Contribuidores' },
            { key: 'duplicar', label: 'Duplicar' },
        ],
        [ // Gestão de Usuários e Acesso
            { key: 'matricular_em_lote', label: 'Matricular em lote' },
            { key: 'vincular_grupo', label: 'Vincular grupo' },
            { key: 'transferir', label: 'Transferir' },
        ],
        [ // Acompanhamento e Resultados
            { key: 'avaliacoes', label: 'Avaliações' },
            { key: 'estatisticas', label: 'Estatísticas' },
        ],
        [ // Distribuição e Compartilhamento
            { key: 'compartilhar', label: 'Compartilhar' },
        ],
        [ // Remoção e Arquivamento
            { key: 'apagar', label: 'Apagar' },
        ],
    ];
    let html = '<div class="row-actions-dropdown">';
    options.forEach((group, idx) => {
        if (idx > 0) html += '<div class="dropdown-divider"></div>';
        group.forEach(opt => {
            html += `<div class="dropdown-item" data-action="${opt.key}">${opt.label}</div>`;
        });
    });
    html += '</div>';
    return html;
}

// Função para adicionar listeners aos botões de três pontinhos
function setupRowActionsDropdowns(sectionId) {
    // Só aplica para as seções desejadas
    const allowedSections = ['cursos', 'trilhas', 'eventos', 'canais', 'pulses'];
    if (!allowedSections.includes(sectionId)) return;
    const table = document.getElementById(`table-${sectionId}`);
    if (!table) return;
    table.querySelectorAll('.btn-icon.more').forEach((btn, idx) => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            // Remove outros dropdowns abertos
            document.querySelectorAll('.row-actions-dropdown').forEach(el => el.remove());
            // Pega o item correspondente
            const row = btn.closest('tr');
            const itemId = row.querySelector('.item-checkbox')?.getAttribute('data-id');
            const item = (tableDataSources[sectionId] || []).find(i => String(i.id) === String(itemId));
            // Cria o dropdown
            const dropdown = document.createElement('div');
            dropdown.innerHTML = createRowActionsDropdown(item, sectionId);
            dropdown.classList.add('row-actions-dropdown-wrapper');
            // Posiciona o dropdown
            dropdown.style.position = 'absolute';
            dropdown.style.top = (btn.getBoundingClientRect().bottom + window.scrollY + 4) + 'px';
            dropdown.style.left = (btn.getBoundingClientRect().right - 220) + 'px';
            dropdown.style.zIndex = 1000;
            document.body.appendChild(dropdown);
            // Listener para ações
            dropdown.querySelectorAll('.dropdown-item').forEach(opt => {
                opt.addEventListener('click', function(ev) {
                    ev.stopPropagation();
                    alert(`Ação: ${opt.textContent}\nItem: ${item?.titulo || item?.nome || item?.id}`);
                    dropdown.remove();
                });
            });
            // Fecha ao clicar fora
            setTimeout(() => {
                document.addEventListener('mousedown', function handler(ev) {
                    if (!dropdown.contains(ev.target) && ev.target !== btn) {
                        dropdown.remove();
                        document.removeEventListener('mousedown', handler);
                    }
                });
            }, 50);
        });
    });
}

// Adicionar chamada ao final de loadTabContent para as seções desejadas
const originalLoadTabContent = loadTabContent;
loadTabContent = function(tabId) {
    originalLoadTabContent(tabId);
    setupRowActionsDropdowns(tabId);
};

// Após renderGenericTable para grupos, tornar as linhas clicáveis
function setupGrupoRowNavigation() {
    const table = document.getElementById('table-grupos');
    if (!table) return;
    Array.from(table.querySelectorAll('tbody tr')).forEach(row => {
        // Ignorar linhas sem dados (ex: "Nenhum item encontrado")
        if (!row.querySelector('.cell-with-icon')) return;
        row.style.cursor = 'pointer';
        // Remove event listeners duplicados
        row.onclick = null;
        row.addEventListener('click', function(e) {
            if (e.target.closest('.cell-actions')) return;
            const nome = row.querySelectorAll('td')[1]?.textContent?.trim();
            const id = row.querySelector('.item-checkbox')?.getAttribute('data-id');
            console.log('Clicou no grupo:', nome, id);
            if (nome && id) {
                window.location.href = `grupos/interno.html?nome=${encodeURIComponent(nome)}&id=${encodeURIComponent(id)}`;
            }
        });
    });
}

// Chamar após renderização da tabela de grupos
const originalLoadSectionContent = loadSectionContent;
loadSectionContent = function(sectionId) {
    originalLoadSectionContent(sectionId);
    if (sectionId === 'grupos') setupGrupoRowNavigation();
};
// --- FIM DA LÓGICA PRINCIPAL E EVENT LISTENERS ---
