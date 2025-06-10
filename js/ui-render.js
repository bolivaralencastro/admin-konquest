import {
  trilhasData,
  cursosData,
  canaisData,
  pulsesData,
  eventosData,
  matriculasCursosData,
  matriculasTrilhasData,
  matriculasEventosData,
  gruposData,
  categoriasData,
  normativasData,
  transferenciasData,
  integrationsData,
} from "./data.js";

const tableDataSources = {
  trilhas: trilhasData,
  cursos: cursosData,
  canais: canaisData,
  pulses: pulsesData,
  eventos: eventosData,
  matriculas_cursos: matriculasCursosData,
  matriculas_trilhas: matriculasTrilhasData,
  matriculas_eventos: matriculasEventosData,
  grupos: gruposData,
  categorias: categoriasData,
  normativas: normativasData,
  transferencias: transferenciasData,
};

const allTableColumns = {
  trilhas: [{
    key: "titulo",
    label: "Título"
  }, {
    key: "cursos",
    label: "Cursos"
  }, {
    key: "status",
    label: "Status"
  }, {
    key: "acoes",
    label: "Ações"
  }],
  cursos: [{
    key: "titulo",
    label: "Título"
  }, {
    key: "status",
    label: "Status"
  }, {
    key: "inscritos",
    label: "Inscritos"
  }, {
    key: "finalizados",
    label: "Finalizados"
  }, {
    key: "taxaConclusao",
    label: "Taxa de Conclusão"
  }, {
    key: "duracao",
    label: "Duração Recomendada"
  }, {
    key: "autor",
    label: "Autor/Criador"
  }, {
    key: "dataModificacao",
    label: "Data de Modificação"
  }, {
    key: "idioma",
    label: "Idioma"
  }, {
    key: "conteudos",
    label: "Conteúdos"
  }, {
    key: "dataEdicao",
    label: "Data de Edição"
  }, {
    key: "categoria",
    label: "Categoria"
  }, {
    key: "acoes",
    label: "Ações"
  }, ],
  canais: [{
    key: "nome",
    label: "Nome do Canal"
  }, {
    key: "tipo",
    label: "Tipo"
  }, {
    key: "criador",
    label: "Criador"
  }, {
    key: "seguidores",
    label: "Seguidores"
  }, {
    key: "acoes",
    label: "Ações"
  }, ],
  pulses: [{
    key: "titulo",
    label: "Título do Pulse"
  }, {
    key: "tipo",
    label: "Tipo"
  }, {
    key: "canal",
    label: "Canal Associado"
  }, {
    key: "visualizacoes",
    label: "Visualizações"
  }, {
    key: "acoes",
    label: "Ações"
  }, ],
  eventos: [{
    key: "nome",
    label: "Nome"
  }, {
    key: "data",
    label: "Data"
  }, {
    key: "tipo",
    label: "Tipo"
  }, {
    key: "status",
    label: "Status"
  }, {
    key: "acoes",
    label: "Ações"
  }, ],
  matriculas_cursos: [{
    key: "nomeMissao",
    label: "Nome"
  }, {
    key: "usuario",
    label: "Usuário"
  }, {
    key: "inicio",
    label: "Início"
  }, {
    key: "fim",
    label: "Fim"
  }, {
    key: "meta",
    label: "Meta"
  }, {
    key: "perf",
    label: "Perf."
  }, {
    key: "atraso",
    label: "Atraso"
  }, {
    key: "obrig",
    label: "Obrig."
  }, {
    key: "status",
    label: "Status"
  }, {
    key: "acoes",
    label: "Ações"
  }, ],
  matriculas_trilhas: [{
    key: "nomeTrilha",
    label: "Nome"
  }, {
    key: "usuario",
    label: "Usuário"
  }, {
    key: "inicio",
    label: "Início"
  }, {
    key: "fim",
    label: "Fim"
  }, {
    key: "meta",
    label: "Meta"
  }, {
    key: "perf",
    label: "Perf."
  }, {
    key: "atraso",
    label: "Atraso"
  }, {
    key: "status",
    label: "Status"
  }, {
    key: "acoes",
    label: "Ações"
  }, ],
  matriculas_eventos: [{
    key: "aluno",
    label: "Aluno"
  }, {
    key: "evento",
    label: "Evento"
  }, {
    key: "presenca",
    label: "Presença"
  }, {
    key: "acoes",
    label: "Ações"
  }, ],
  grupos: [{
    key: "nome",
    label: "Nome"
  }, {
    key: "trilhas",
    label: "Trilhas"
  }, {
    key: "missoes",
    label: "Missões"
  }, {
    key: "canais",
    label: "Canais"
  }, {
    key: "usuarios",
    label: "Usuários"
  }, {
    key: "acoes",
    label: "Ações"
  }, ],
  categorias: [{
    key: "nome",
    label: "Nome"
  }, {
    key: "missoes",
    label: "Missões"
  }, {
    key: "canais",
    label: "Canais"
  }, {
    key: "acoes",
    label: "Ações"
  }, ],
  normativas: [{
    key: "titulo",
    label: "Título"
  }, {
    key: "versao",
    label: "Versão"
  }, {
    key: "status",
    label: "Status"
  }, {
    key: "dataPublicacao",
    label: "Publicação"
  }, {
    key: "acoes",
    label: "Ações"
  }, ],
  transferencias: [{
    key: "nome",
    label: "Nome"
  }, {
    key: "acao",
    label: "Ação"
  }, {
    key: "enviadoPor",
    label: "Env. por"
  }, {
    key: "origem",
    label: "Orig."
  }, {
    key: "destino",
    label: "Dest."
  }, {
    key: "data",
    label: "Data"
  }, {
    key: "matriculas",
    label: "Matric."
  }, {
    key: "acoes",
    label: "Ações"
  }, ],
};

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
  matriculas_eventos: 'calendar_month',
  transferencias: 'rocket_launch'
};

// Inicialização do estado das colunas visíveis
let visibleColumnsState = {};
for (const sectionKey in allTableColumns) {
  visibleColumnsState[sectionKey] = {};
  allTableColumns[sectionKey].forEach(col => {
    if (col.key !== 'acoes') {
      visibleColumnsState[sectionKey][col.key] = true;
    }
  });
}


function getStatusClass(status) {
  if (!status) return '';
  let className = status.toLowerCase().replace(/[\s()]/g, '-');
  if (status === "OBRIGATÓRIA") className += " status-obrigatoria";
  if (status === "INICIADA") className += " status-iniciada";
  if (status === "FINALIZADA" && !className.includes("status-publicado")) className += " status-finalizada";
  return className;
}

function renderColumnToggleDropdown(sectionId, allCols) {
  let dropdownHtml = '<div class="column-toggle-dropdown">';
  const configurableColumns = allCols.filter(col => col.key !== 'acoes');
  configurableColumns.forEach(col => {
    const isVisible = visibleColumnsState[sectionId] ? visibleColumnsState[sectionId][col.key] !== false : true;
    dropdownHtml += `<div class="dropdown-item" data-section="${sectionId}" data-column="${col.key}"><input type="checkbox" ${isVisible ? 'checked' : ''} id="toggle-col-${sectionId}-${col.key}"><label for="toggle-col-${sectionId}-${col.key}">${col.label}</label></div>`;
  });
  dropdownHtml += '</div>';
  return dropdownHtml;
}

function computeDashboardStats() {
  const uniqueAlunos = new Set();
  matriculasCursosData.forEach(m => uniqueAlunos.add(m.usuario));
  matriculasTrilhasData.forEach(m => uniqueAlunos.add(m.usuario));
  matriculasEventosData.forEach(m => uniqueAlunos.add(m.aluno));

  const totalMatriculasCursos = matriculasCursosData.length;
  const totalMatriculasTrilhas = matriculasTrilhasData.length;
  const totalMatriculasEventos = matriculasEventosData.length;
  const totalMatriculas = totalMatriculasCursos + totalMatriculasTrilhas + totalMatriculasEventos;

  const totalMatriculasConcluidas = matriculasCursosData.filter(m => m.status === 'FINALIZADA').length +
    matriculasTrilhasData.filter(m => m.status === 'FINALIZADA').length;
  const matriculasEmAndamento = totalMatriculas - totalMatriculasConcluidas;

  const totalCursos = cursosData.length;
  const cursosEmAndamento = new Set(matriculasCursosData.filter(m => m.status !== 'FINALIZADA').map(m => m.nomeMissao)).size;

  const acessosPorDia = [];
  let acessosTotaisSemana = 0;
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const qtd = Math.floor(Math.random() * 50) + 10;
    acessosTotaisSemana += qtd;
    acessosPorDia.push({
      dia: `${d.getDate()}/${d.getMonth()+1}`,
      acessos: qtd
    });
  }
  const alunosArr = Array.from(uniqueAlunos);
  const ranking = alunosArr.slice(0, 5).map(nome => ({
      nome,
      pontos: Math.floor(Math.random() * 1000)
    }))
    .sort((a, b) => b.pontos - a.pontos);

  return {
    totalAlunos: uniqueAlunos.size,
    totalMatriculas,
    totalMatriculasConcluidas,
    matriculasEmAndamento,
    totalCursos,
    cursosComMatriculasEmAndamento: cursosEmAndamento,
    totalNormativosMatriculas: 0,
    acessosTotaisSemana,
    acessosPorDia,
    ranking
  };
}


function renderDashboard() {
  const stats = computeDashboardStats();

  // Metadados para os cards de estatística, incluindo ícones e cores
  const cardMetaData = [{
    title: "Total de alunos inscritos",
    value: stats.totalAlunos,
    icon: 'group',
    bgColor: 'rgba(138, 43, 226, 0.1)',
    iconColor: 'var(--primary-color)'
  }, {
    title: "Total de matrículas",
    value: stats.totalMatriculas,
    icon: 'assignment_turned_in',
    bgColor: 'rgba(52, 152, 219, 0.1)',
    iconColor: '#3498db'
  }, {
    title: "Matrículas concluídas",
    value: stats.totalMatriculasConcluidas,
    icon: 'check_circle',
    bgColor: 'rgba(46, 204, 113, 0.1)',
    iconColor: '#2ecc71'
  }, {
    title: "Matrículas em andamento",
    value: stats.matriculasEmAndamento,
    icon: 'hourglass_top',
    bgColor: 'rgba(241, 196, 15, 0.1)',
    iconColor: '#f1c40f'
  }, {
    title: "Cursos criados",
    value: stats.totalCursos,
    icon: 'school',
    bgColor: 'rgba(230, 126, 34, 0.1)',
    iconColor: '#e67e22'
  }, {
    title: "Cursos com matrículas em andamento",
    value: stats.cursosComMatriculasEmAndamento,
    icon: 'play_circle',
    bgColor: 'rgba(155, 89, 182, 0.1)',
    iconColor: '#9b59b6'
  }, {
    title: "Matrículas em cursos normativos",
    value: stats.totalNormativosMatriculas,
    icon: 'gavel',
    bgColor: 'rgba(52, 73, 94, 0.1)',
    iconColor: '#34495e'
  }, {
    title: "Acessos na semana",
    value: stats.acessosTotaisSemana,
    icon: 'visibility',
    bgColor: 'rgba(26, 188, 156, 0.1)',
    iconColor: '#1abc9c'
  }];

  // HTML para os cards de estatística
  const statCardsHtml = cardMetaData.map(card => `
        <div class="dashboard-card">
            <div class="card-icon-wrapper" style="background-color: ${card.bgColor};">
                <span class="material-symbols-outlined" style="color: ${card.iconColor};">${card.icon}</span>
            </div>
            <div class="card-details">
                <h3>${card.title}</h3>
                <p class="card-value">${card.value}</p>
            </div>
        </div>
    `).join('');

  // HTML para os cards de lista (Ranking e Acessos)
  const rankingItems = stats.ranking
    .map((r, i) => `<li>${i + 1}. ${r.nome} - ${r.pontos} pts</li>`)
    .join('');
  const acessosItems = stats.acessosPorDia
    .map(d => `<li>${d.dia}: ${d.acessos}</li>`)
    .join('');

  const listCardsHtml = `
        <div class="dashboard-card list-card ranking-card">
            <h3>Ranking Gamificação</h3>
            <ol class="dashboard-ranking">${rankingItems}</ol>
        </div>
        <div class="dashboard-card list-card accesses-card">
            <h3>Acessos - Última Semana</h3>
            <ul class="dashboard-accesses">${acessosItems}</ul>
        </div>
    `;

  // Montagem final do conteúdo do dashboard
  const cards = `
        <div class="dashboard-grid">
            ${statCardsHtml}
            ${listCardsHtml}
        </div>`;

  return `
        <div class="content-header-no-tabs"><span class="section-title">Dashboard</span></div>
        ${cards}`;
}


function renderGenericTable(sectionId, data, allColsDefinition) {
  let placeholderText = "Buscar";
  let sectionFriendlyName = sectionId.replace(/matriculas_|-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()).trim();
  placeholderText = `Buscar em ${sectionFriendlyName}...`;
  const itemIconName = sectionIcons[sectionId] || 'article';
  const columnsToRenderInHeader = allColsDefinition.filter(col => {
    if (col.key === 'acoes') return false;
    return visibleColumnsState[sectionId] ? visibleColumnsState[sectionId][col.key] !== false : true;
  });
  let tableHTML = `<table id="table-${sectionId}"><thead><tr><th class="cell-checkbox"><input type="checkbox" class="table-checkbox" id="selectAll-${sectionId}" title="Selecionar Todos"></th>`;
  columnsToRenderInHeader.forEach(col => {
    tableHTML += `<th>${col.label}</th>`;
  });
  tableHTML += `<th style="text-align: right; position:relative;"><div class="table-header-actions"><button class="btn-icon" id="tableSettingsBtn-${sectionId}" title="Configurar Colunas"><span class="material-symbols-outlined">settings</span></button>${renderColumnToggleDropdown(sectionId, allColsDefinition)}</div></th>`;
  tableHTML += `</tr></thead><tbody>`;
  if (data && data.length > 0) {
    data.forEach((item) => {
      tableHTML += `<tr> <td class="cell-checkbox"><input type="checkbox" class="table-checkbox item-checkbox" data-id="${item.id}"></td>`;
      allColsDefinition.forEach((col, colIndex) => {
        if (col.key === 'acoes') return;
        const shouldRenderCell = visibleColumnsState[sectionId] ? visibleColumnsState[sectionId][col.key] !== false : true;
        if (shouldRenderCell) {
          if (colIndex === 0 && (sectionIcons[sectionId])) {
            tableHTML += `<td class="cell-with-icon"><span class="material-symbols-outlined">${item.iconName || itemIconName}</span><span>${item[col.key] || 'N/A'}</span></td>`;
          } else if (col.key === "status" || col.key === "obrig") {
            tableHTML += `<td><span class="status ${getStatusClass(item[col.key])}">${item[col.key] || 'N/A'}</span></td>`;
          } else {
            tableHTML += `<td>${item[col.key] || 'N/A'}</td>`;
          }
        }
      });
      tableHTML += `<td class="cell-actions"> <div class="table-row-actions"><button class="btn-icon more" title="Mais opções"><span class="material-symbols-outlined">more_vert</span></button><button class="btn-icon view" title="Visualizar"><span class="material-symbols-outlined">visibility</span></button><button class="btn-icon delete" title="Excluir"><span class="material-symbols-outlined">delete</span></button></div> </td>`;
      tableHTML += `</tr>`;
    });
  } else {
    tableHTML += `<tr><td colspan="${columnsToRenderInHeader.length + 2}" style="text-align:center; padding: 20px;">Nenhum item encontrado.</td></tr>`;
  }
  tableHTML += `</tbody></table>`;
  return tableHTML;
}


function renderContentTabs(sectionType, currentActiveContentTab) {
  let contentTabsConfig = [];
  let defaultTabId = '';
  if (sectionType === 'gestao-conteudos') {
    contentTabsConfig = [{
      id: 'cursos',
      label: 'Cursos',
      icon: 'rocket_launch'
    }, {
      id: 'trilhas',
      label: 'Trilhas',
      icon: 'conversion_path'
    }, {
      id: 'eventos',
      label: 'Eventos',
      icon: 'calendar_month'
    }, {
      id: 'canais',
      label: 'Canais',
      icon: 'hub'
    }, {
      id: 'pulses',
      label: 'Pulses',
      icon: 'bolt'
    }];
    defaultTabId = 'cursos';
  } else if (sectionType === 'matriculas') {
    contentTabsConfig = [{
      id: 'matriculas_cursos',
      label: 'Cursos',
      icon: 'rocket_launch'
    }, {
      id: 'matriculas_trilhas',
      label: 'Trilhas',
      icon: 'conversion_path'
    }, {
      id: 'matriculas_eventos',
      label: 'Eventos',
      icon: 'calendar_month'
    }];
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

function renderIntegrationTabs(integrationsData, currentIntegrationFilter) {
  const filterTabsConfig = [{
    id: 'todas',
    label: `Todas (${integrationsData.length})`
  }, {
    id: 'ativas',
    label: `Ativas (${integrationsData.filter(i => i.active).length})`
  }, {
    id: 'inativas',
    label: `Inativas (${integrationsData.filter(i => !i.active).length})`
  }];
  let html = `<div class="content-tabs-container"><div class="content-tabs">`;
  filterTabsConfig.forEach(tab => {
    html += `<div class="tab-item ${tab.id === currentIntegrationFilter ? 'active' : ''}" data-filter="${tab.id}">${tab.label}</div>`;
  });
  html += `</div><div class="content-tab-actions"><button class="header-button" id="newIntegrationButton" title="Nova Integração"><span class="material-symbols-outlined">add</span></button></div></div>`;
  html += `<div class="controls" style="padding: 12px 16px 12px 24px; border-bottom: 1px solid var(--border-color);"><div class="search-input-container"><span class="material-symbols-outlined">search</span><input type="text" placeholder="Buscar integrações..." id="search-integrations"></div></div>`;
  html += '<div class="integrations-grid-wrapper"><div class="integrations-grid" id="integrationsGrid"></div></div>';
  return html;
}


function renderIntegrationCards(integrationsData, currentIntegrationFilter) {
  const grid = document.getElementById('integrationsGrid');
  if (!grid) return;
  grid.innerHTML = '';
  const searchTerm = document.getElementById('search-integrations')?.value.toLowerCase() || '';
  const filteredData = integrationsData.filter(integration => {
    const matchesFilter = (currentIntegrationFilter === 'todas') || (currentIntegrationFilter === 'ativas' && integration.active) || (currentIntegrationFilter === 'inativas' && !integration.active);
    const matchesSearch = !searchTerm || integration.name.toLowerCase().includes(searchTerm) || integration.category.toLowerCase().includes(searchTerm) || integration.description.toLowerCase().includes(searchTerm);
    return matchesFilter && matchesSearch;
  });
  if (filteredData.length === 0) {
    grid.innerHTML = `<p style="padding: 24px; text-align: center; color: var(--sidebar-icon-color);">Nenhuma integração encontrada.</p>`;
    return;
  }
  filteredData.forEach(integration => {
    const card = document.createElement('div');
    card.className = 'integration-card';
    card.innerHTML = `<div class="integration-card-header"> <div class="integration-card-info"> <div class="integration-card-logo"> ${integration.logoIcon ? `<span class="material-symbols-outlined">${integration.logoIcon}</span>` : ''} </div> <div> <div class="integration-card-name">${integration.name}</div> <div class="integration-card-category">${integration.category}</div> </div> </div> <label class="integration-card-toggle"> <input type="checkbox" ${integration.active ? 'checked' : ''} data-id="${integration.id}"> <span class="slider"></span> </label> </div> <p class="integration-card-description">${integration.description}</p> <div class="integration-card-tags"> ${integration.tags.map(tag => `<span class="tag">${tag}</span>`).join('')} </div> <div class="integration-card-footer"> <a href="#" class="details-link" onclick="alert('Ver detalhes: ${integration.name}')"> Ver detalhes <span class="material-symbols-outlined">chevron_right</span> </a> <button class="btn config-button" onclick="alert('Configurar: ${integration.name}')"> <span class="material-symbols-outlined">settings</span> Configurar </button> </div>`;
    grid.appendChild(card);
  });
  document.querySelectorAll('.integration-card-toggle input').forEach(toggle => {
    toggle.addEventListener('change', function() {
      const integrationId = this.dataset.id;
      const integration = integrationsData.find(i => i.id === integrationId);
      if (integration) {
        integration.active = this.checked;
        if ((currentIntegrationFilter === 'ativas' && !integration.active) || (currentIntegrationFilter === 'inativas' && integration.active)) {
          renderIntegrationCards(integrationsData, currentIntegrationFilter);
        }
        document.querySelector('.tab-item[data-filter="ativas"]').textContent = `Ativas (${integrationsData.filter(i => i.active).length})`;
        document.querySelector('.tab-item[data-filter="inativas"]').textContent = `Inativas (${integrationsData.filter(i => !i.active).length})`;
      }
    });
  });
}

function renderLayoutSettings() {
  const predefinedColors = [{
    primary: '#8A2BE2',
    secondary: '#C6A4E7'
  }, {
    primary: '#FF3B30',
    secondary: '#FF9500'
  }, {
    primary: '#34C759',
    secondary: '#30D158'
  }, {
    primary: '#007AFF',
    secondary: '#5856D6'
  }, {
    primary: '#AF52DE',
    secondary: '#FF2D55'
  }, {
    primary: '#FF9500',
    secondary: '#FFCC00'
  }, ];
  let currentColor = {
    primary: '#673AB7',
    secondary: '#9F73E5'
  };
  let html = `<div class="settings-section-card"><h3>Logo da plataforma</h3> <div class="logo-uploaders"> <div class="logo-uploader"> <div class="logo-preview-box" id="logoLightUploader" title="Clique para carregar logo para tema claro"> <span class="material-symbols-outlined">upload_file</span> <span>Logo para tema claro</span> </div> <small>Recomendado: PNG com fundo transparente</small> </div> <div class="logo-uploader"> <div class="logo-preview-box" id="logoDarkUploader" title="Clique para carregar logo para tema escuro"> <span class="material-symbols-outlined">upload_file</span> <span>Logo para tema escuro</span> </div> <small>Recomendado: PNG com fundo transparente</small> </div> </div> <input type="file" id="logoLightFile" accept="image/*" style="display:none;"> <input type="file" id="logoDarkFile" accept="image/*" style="display:none;"> <h3>Cor principal</h3> <div class="color-palette" id="colorPalette">`;
  predefinedColors.forEach((colorPair) => {
    html += `<div class="color-swatch" title="Primária: ${colorPair.primary}" style="background-color: ${colorPair.primary};" data-primary="${colorPair.primary}" data-secondary="${colorPair.secondary}"> <span class="material-symbols-outlined" style="opacity:0;">check</span> </div>`;
  });
  html += `</div> <div class="custom-color-input"> <label for="customColorHex">Cor customizada:</label> <input type="text" id="customColorHex" value="${currentColor.primary}" maxlength="7"> <div class="color-preview-inline" id="customColorPreview" style="background-color: ${currentColor.primary};"></div> </div> </div>`;
  html += `<div class="settings-section-card"> <h3 style="margin-top:0; border-bottom:none; padding-bottom:0;">Tema da plataforma</h3> <p class="description">Escolha entre tema claro ou escuro para sua workspace.</p> <div class="theme-selector" id="themeSelector"> <div class="theme-option active" data-theme="dark"> <span class="material-symbols-outlined">dark_mode</span> Dark </div> <div class="theme-option" data-theme="light"> <span class="material-symbols-outlined">light_mode</span> Light </div> <div class="theme-option" data-theme="system">  Sistema </div> </div> </div>`;
  html += `<div class="layout-actions"> `;
  return html;
}


function renderGeneralSettings() {
  const modulos = [{
    id: 'dashboard',
    label: 'Dashboard',
    checked: true,
    icon: 'dashboard'
  }, {
    id: 'trilhas',
    label: 'Trilhas',
    checked: true,
    icon: 'signpost'
  }, {
    id: 'missoes',
    label: 'Missões',
    checked: true,
    icon: 'school'
  }, {
    id: 'eventos',
    label: 'Eventos',
    checked: true,
    icon: 'event'
  }, {
    id: 'pulses',
    label: 'Pulses',
    checked: true,
    icon: 'campaign'
  }, {
    id: 'normativas_mod',
    label: 'Normativas',
    checked: true,
    icon: 'gavel'
  }, {
    id: 'gamificacao_mod',
    label: 'Gamificação',
    checked: true,
    icon: 'sports_esports'
  }, {
    id: 'ranking_geral',
    label: 'Ranking geral',
    checked: false,
    icon: 'leaderboard'
  }, {
    id: 'ranking_diretoria',
    label: 'Ranking por diretoria',
    checked: false,
    icon: 'leaderboard'
  }, {
    id: 'ranking_subdiretoria',
    label: 'Ranking por sub-diretoria',
    checked: false,
    icon: 'leaderboard'
  }, {
    id: 'ranking_area',
    label: 'Ranking por área',
    checked: false,
    icon: 'leaderboard'
  }, {
    id: 'ranking_lideranca',
    label: 'Ranking por liderança',
    checked: false,
    icon: 'leaderboard'
  }, ];
  const outrasConfig = [{
    id: 'cat_padrao',
    label: 'Categorias Padrão',
    checked: true
  }, {
    id: 'bloq_rematricula',
    label: 'Bloqueio de Rematrícula',
    checked: true,
    description: 'Ative esta opção para impedir que usuários se matriculem mais de uma vez na mesma trilha ou missão. Este bloqueio impede novas rematrículas, mas não afeta matrículas existentes realizadas antes da ativação desta função. As rematrículas anteriores continuarão válidas e não serão excluídas automaticamente.'
  }, ];
  const exibicaoConteudos = [{
    id: 'ex_matr',
    label: 'Matriculada',
    checked: false
  }, {
    id: 'ex_inic',
    label: 'Iniciada',
    checked: false
  }, {
    id: 'ex_final',
    label: 'Finalizada',
    checked: true
  }, {
    id: 'ex_desist',
    label: 'Desistiu',
    checked: true,
    negative: true
  }, {
    id: 'ex_reprov',
    label: 'Reprovada',
    checked: true,
    negative: true
  }, {
    id: 'ex_expir',
    label: 'Expirada',
    checked: true,
    negative: true
  }, {
    id: 'ex_inativa',
    label: 'Inativa',
    checked: true,
    negative: true
  }, {
    id: 'ex