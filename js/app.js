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
    allTableColumns,
    tableDataSources,
    sectionIcons
} from './data.js';

import {
    renderDashboard,
    renderGenericTable,
    renderContentTabs,
    renderIntegrationTabs,
    renderIntegrationCards,
    renderLayoutSettings,
    renderGeneralSettings,
    renderConfiguracoesTabs,
    renderConfiguracoesGeral,
    renderConfiguracoesIdentidade,
    renderConfiguracoesComplementos,
    renderConfiguracoesLog,
    getStatusClass,
    renderColumnToggleDropdown
} from './ui-render.js';

import {
    visibleColumnsState,
    currentActiveMenuSection,
    currentActiveContentTab,
    currentIntegrationFilter
} from './state.js';

import {
    attachHeaderSearchListener,
    setupTableCheckboxes,
    addColumnToggleListeners,
    setupRowActionsDropdowns,
    setupGrupoRowNavigation,
    setupTransferenciasRowActions,
    addLayoutSettingsListeners
} from './listeners.js';


const sidebar = document.getElementById('sidebar');
const collapseButton = document.getElementById('collapseButton');
const exitAdminButton = document.getElementById('exitAdminButton');
const themeToggle = document.getElementById('themeToggle');
const addButton = document.getElementById('addButton');
const addDropdown = document.getElementById('addDropdown');
const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');
const contentPanel = document.getElementById('contentPanel');

// Global event listeners (defined here for access to DOM elements)
collapseButton.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    if (addDropdown) addDropdown.style.display = 'none';
});
exitAdminButton.addEventListener('click', () => {
    alert('Saindo da Área Administrativa...');
});
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const icon = themeToggle.querySelector('span');
        document.body.classList.toggle('dark-theme');
        icon.textContent = document.body.classList.contains('dark-theme') ? 'light_mode' : 'dark_mode';
    });
}
if (addButton && addDropdown) {
    addButton.addEventListener('click', ev => {
        ev.stopPropagation();
        const isOpen = addDropdown.style.display === 'block';
        addDropdown.style.display = isOpen ? 'none' : 'block';
        const rect = addButton.getBoundingClientRect();
        addDropdown.style.top = (rect.top + window.scrollY) + 'px';
        addDropdown.style.left = (rect.right + window.scrollX + 4) + 'px';
    });
    document.addEventListener('click', ev => {
        if (!addDropdown.contains(ev.target) && ev.target !== addButton) {
            addDropdown.style.display = 'none';
        }
    });
    addDropdown.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', () => {
            alert('Criar ' + item.textContent);
            addDropdown.style.display = 'none';
        });
    });
}


navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        const sectionId = this.getAttribute('data-section');
        currentActiveMenuSection = sectionId;
        loadSectionContent(sectionId);
    });
});


function loadTabContent(tabId) {
    const tabContentElement = document.getElementById(`tab-content-${tabId}`);
    const allPossibleColumnsForTab = allTableColumns[tabId];

    if (tabContentElement && tableDataSources[tabId] && allPossibleColumnsForTab) {
        if (!visibleColumnsState[tabId]) {
            visibleColumnsState[tabId] = {};
            allPossibleColumnsForTab.forEach(col => {
                if (col.key !== 'acoes') visibleColumnsState[tabId][col.key] = true;
            });
        }
        tabContentElement.innerHTML = renderGenericTable(tabId, tableDataSources[tabId], allPossibleColumnsForTab, visibleColumnsState, sectionIcons, getStatusClass, renderColumnToggleDropdown);
        setupTableCheckboxes(`table-${tabId}`);
        addColumnToggleListeners(tabId, allPossibleColumnsForTab, visibleColumnsState, renderGenericTable, tableDataSources, sectionIcons, getStatusClass, renderColumnToggleDropdown, contentPanel);

        filterCurrentTable(tabId); // Needs access to filterCurrentTable
    } else if (tabContentElement) {
        tabContentElement.innerHTML = `<p class="generic-content-placeholder">Conteúdo para a aba ${tabId} não definido ou não é uma tabela.</p>`;
    }
    setupRowActionsDropdowns(tabId, tableDataSources);
}


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

function loadSectionContent(sectionId) {
    contentPanel.innerHTML = '';
    const hasTabsForTables = sectionId === 'gestao-conteudos' || sectionId === 'matriculas';
    const usesSimpleTable = ['grupos', 'categorias', 'normativas', 'transferencias'].includes(sectionId);
    const usesConfigTabs = sectionId === 'geral' || sectionId === 'layout' || sectionId === 'integracoes' || sectionId === 'marketplace' || sectionId === 'log-atividades';

    let sectionTitle = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
    if (sectionId === "matriculas") sectionTitle = "Matrículas";
    else if (sectionId === "gestao-conteudos") sectionTitle = "Conteúdos";
    else if (sectionId === "normativas") sectionTitle = "Normativas";
    else if (sectionId === "geral") sectionTitle = "Configuração Geral";
    else if (sectionId === "layout") sectionTitle = "Identidade Visual";
    else if (sectionId === "integracoes") sectionTitle = "Integrações";

    if (sectionId === 'dashboard') {
        contentPanel.innerHTML = renderDashboard(matriculasCursosData, matriculasTrilhasData, matriculasEventosData, cursosData, normativasData);
    } else if (usesConfigTabs) {
        renderConfiguracoesTabs(sectionId, contentPanel, renderConfiguracoesGeral, renderConfiguracoesIdentidade, renderConfiguracoesComplementos, renderConfiguracoesLog);
        // Specific listeners might need to be attached after render
        if (sectionId === 'layout') addLayoutSettingsListeners();
         if (sectionId === 'complementos') {
             document.getElementById('btnFiltroComplementos').addEventListener('click', () => alert('Abrir filtros avançados (mock)'));
             document.getElementById('buscaComplementos').addEventListener('input', function(e) {
                 const termo = e.target.value.toLowerCase();
                 document.querySelectorAll('.complementos-cards-area .integration-card').forEach(card => {
                     const txt = card.textContent.toLowerCase();
                     card.style.display = txt.includes(termo) ? '' : 'none';
                 });
             });
         }

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
        contentPanel.innerHTML = headerHtml + renderContentTabs(sectionId, currentActiveContentTab, sectionIcons);
        attachHeaderSearchListener(sectionId, filterCurrentTable);
        loadTabContent(currentActiveContentTab); // Load the active tab
        document.querySelectorAll('.tab-item[data-tab]').forEach(tabElement => {
            tabElement.addEventListener('click', function() {
                document.querySelectorAll('.tab-item[data-tab]').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
                this.classList.add('active');
                currentActiveContentTab = this.dataset.tab;
                const targetTabContent = document.getElementById(`tab-content-${currentActiveContentTab}`);
                if (targetTabContent) targetTabContent.classList.add('active');
                loadTabContent(currentActiveContentTab);
            });
        });
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
        if (sectionId !== 'grupos' && sectionId !== 'categorias' && sectionId !== 'transferencias') {
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
        attachHeaderSearchListener(sectionId, filterCurrentTable);
        const directCreateButton = document.getElementById('directCreateButton');
        if (directCreateButton) {
            directCreateButton.addEventListener('click', () => {
                let alertMsg = `Botão "+" (${sectionTitle}) Clicado! Criar novo ${sectionTitle}.`;
                if (sectionId === 'grupos') {
                    alertMsg += "\nOpções de Importação: Usuários, Missões, Canais.";
                }
                alert(alertMsg);
            });
        }
        const contentArea = contentPanel.querySelector('.section-content-area');
        const allPossibleColumnsForSection = allTableColumns[sectionId];
        if (contentArea && tableDataSources[sectionId] && allPossibleColumnsForSection) {
            if (!visibleColumnsState[sectionId]) {
                visibleColumnsState[sectionId] = {};
                allPossibleColumnsForSection.forEach(col => {
                    if (col.key !== 'acoes') visibleColumnsState[sectionId][col.key] = true;
                });
            }
            contentArea.innerHTML = renderGenericTable(sectionId, tableDataSources[sectionId], allPossibleColumnsForSection, visibleColumnsState, sectionIcons, getStatusClass, renderColumnToggleDropdown);
            setupTableCheckboxes(`table-${sectionId}`);
            addColumnToggleListeners(sectionId, allPossibleColumnsForSection, visibleColumnsState, renderGenericTable, tableDataSources, sectionIcons, getStatusClass, renderColumnToggleDropdown, contentPanel);
            filterCurrentTable(sectionId);
            if (sectionId === 'transferencias') {
                setupTransferenciasRowActions(transferenciasData);
            }
        } else if (contentArea) {
            contentArea.innerHTML = `<p class="generic-content-placeholder">Dados para ${sectionTitle} não encontrados.</p>`;
        }
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
    const defaultActiveLink = document.querySelector('.nav-link[data-section="dashboard"]') ||
        document.querySelector('.nav-link[data-section="gestao-conteudos"]');
    if (defaultActiveLink) {
        defaultActiveLink.classList.add('active');
        currentActiveMenuSection = defaultActiveLink.dataset.section;
        if (currentActiveMenuSection === 'gestao-conteudos') currentActiveContentTab = 'cursos';
        else if (currentActiveMenuSection === 'matriculas') currentActiveContentTab = 'matriculas_cursos';
    } else {
        const firstLink = document.querySelector('.sidebar-nav .nav-link');
        if (firstLink) {
            firstLink.classList.add('active');
            currentActiveMenuSection = firstLink.dataset.section;
            if (currentActiveMenuSection === 'gestao-conteudos') currentActiveContentTab = 'cursos';
            else if (currentActiveMenuSection === 'matriculas') currentActiveContentTab = 'matriculas_cursos';
        }
    }
    loadSectionContent(currentActiveMenuSection);

});