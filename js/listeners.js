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

const sidebar = document.getElementById('sidebar');
const collapseButton = document.getElementById('collapseButton');
const exitAdminButton = document.getElementById('exitAdminButton');
const themeToggle = document.getElementById('themeToggle');
const addButton = document.getElementById('addButton');
const addDropdown = document.getElementById('addDropdown');
const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');
const contentPanel = document.getElementById('contentPanel');


export function setupSidebarListeners() {
    collapseButton.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        handleHeaderOnCollapse();
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
}

export function setupAddButtonListeners() {
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
}

export function setupNavListeners(loadSectionContent) {
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
}

export function setupTableSearchListeners(sectionId) {
    const input = document.getElementById(`header-search-${sectionId}`);
    if (input) {
        input.addEventListener('keyup', () => filterCurrentTable(sectionId));
    }
}

export function setupColumnToggleListeners(sectionId, allColsDefinition) {
    const settingsButton = document.getElementById(`tableSettingsBtn-${sectionId}`);
    const dropdown = settingsButton?.parentElement.querySelector('.column-toggle-dropdown');
    settingsButton?.addEventListener('click', (event) => {
        event.stopPropagation();
        if (dropdown) {
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        }
    });
    document.addEventListener('click', function(event) {
        if (dropdown && settingsButton && !settingsButton.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    });
    const dropdownItems = document.querySelectorAll(`.column-toggle-dropdown .dropdown-item[data-section="${sectionId}"]`);
    dropdownItems.forEach(item => {
        const checkbox = item.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', function() {
            const columnKey = item.dataset.column;
            if (!visibleColumnsState[sectionId]) {
                visibleColumnsState[sectionId] = {};
                allColsDefinition.forEach(col => {
                    if (col.key !== 'acoes') visibleColumnsState[sectionId][col.key] = true;
                });
            }
            visibleColumnsState[sectionId][columnKey] = this.checked;
            if (document.getElementById(`tab-content-${sectionId}`)) {
                loadTabContent(sectionId);
            } else {
                const contentArea = contentPanel.querySelector('.section-content-area');
                if (contentArea && tableDataSources[sectionId] && allTableColumns[sectionId]) {
                    contentArea.innerHTML = renderGenericTable(sectionId, tableDataSources[sectionId], allTableColumns[sectionId]);
                    setupTableCheckboxes(`table-${sectionId}`);
                    addColumnToggleListeners(sectionId, allTableColumns[sectionId]);
                }
            }
        });
    });
}

export function setupTableCheckboxes(tableId) {
    const selectAllCheckbox = document.getElementById(`selectAll-${tableId.replace('table-', '')}`);
    const itemCheckboxes = document.querySelectorAll(`#${tableId} .item-checkbox`);
    if (selectAllCheckbox) {
        selectAllCheckbox.addEventListener('change', function() {
            itemCheckboxes.forEach(checkbox => {
                checkbox.checked = this.checked;
            });
        });
    }
    itemCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            if (!checkbox.checked && selectAllCheckbox) {
                selectAllCheckbox.checked = false;
            }
            let allChecked = true;
            itemCheckboxes.forEach(cb => {
                if (!cb.checked) allChecked = false;
            });
            if (allChecked && selectAllCheckbox) {
                selectAllCheckbox.checked = true;
            }
        });
    });
}

export function setupRowActionsDropdowns(sectionId) {
    const allowedSections = ['cursos', 'trilhas', 'eventos', 'canais', 'pulses', 'transferencias'];
    if (!allowedSections.includes(sectionId)) return;
    const table = document.getElementById(`table-${sectionId}`);
    if (!table) return;
    table.querySelectorAll('.btn-icon.more').forEach((btn) => {
        if (btn.classList.contains('disabled')) return;
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            document.querySelectorAll('.row-actions-dropdown').forEach(el => el.remove());
            const row = btn.closest('tr');
            const itemId = row.querySelector('.item-checkbox')?.getAttribute('data-id');
            const item = (tableDataSources[sectionId] || []).find(i => String(i.id) === String(itemId));
            const dropdown = document.createElement('div');
            dropdown.innerHTML = createRowActionsDropdown(item, sectionId);
            dropdown.classList.add('row-actions-dropdown-wrapper');
            dropdown.style.position = 'absolute';
            dropdown.style.top = (btn.getBoundingClientRect().bottom + window.scrollY + 4) + 'px';
            dropdown.style.left = (btn.getBoundingClientRect().right - 220) + 'px';
            dropdown.style.zIndex = 1000;
            document.body.appendChild(dropdown);
            dropdown.querySelectorAll('.dropdown-item').forEach(opt => {
                opt.addEventListener('click', function(ev) {
                    ev.stopPropagation();
                    alert(`Ação: ${opt.textContent}\nItem: ${item?.titulo || item?.nome || item?.id}`);
                    dropdown.remove();
                });
            });
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

export function setupLayoutSettingsListeners() {
    document.getElementById('logoLightUploader')?.addEventListener('click', () => document.getElementById('logoLightFile').click());
    document.getElementById('logoDarkUploader')?.addEventListener('click', () => document.getElementById('logoDarkFile').click());
    document.getElementById('logoLightFile')?.addEventListener('change', function(e) {
        if (e.target.files && e.target.files[0]) {
            alert(`Logo tema claro: ${e.target.files[0].name}`);
        }
    });
    document.getElementById('logoDarkFile')?.addEventListener('change', function(e) {
        if (e.target.files && e.target.files[0]) {
            alert(`Logo tema escuro: ${e.target.files[0].name}`);
        }
    });
    const colorSwatches = document.querySelectorAll('#colorPalette .color-swatch');
    const customColorHexInput = document.getElementById('customColorHex');
    const customColorPreview = document.getElementById('customColorPreview');

    function setActiveColor(selectedSwatch) {
        colorSwatches.forEach(sw => {
            sw.classList.remove('active');
            sw.querySelector('.material-symbols-outlined').style.opacity = '0';
        });
        if (selectedSwatch) {
            selectedSwatch.classList.add('active');
            selectedSwatch.querySelector('.material-symbols-outlined').style.opacity = '1';
            const primaryColor = selectedSwatch.dataset.primary;
            if (customColorHexInput) customColorHexInput.value = primaryColor;
            if (customColorPreview) customColorPreview.style.backgroundColor = primaryColor;
            console.log("Cor primária:", primaryColor);
        }
    }
    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', () => setActiveColor(swatch));
    });
    customColorHexInput?.addEventListener('input', function() {
        let color = this.value;
        if (/^#([0-9A-Fa-f]{3}){1,2}$/.test(color)) {
            if (customColorPreview) customColorPreview.style.backgroundColor = color;
            colorSwatches.forEach(sw => {
                sw.classList.remove('active');
                sw.querySelector('.material-symbols-outlined').style.opacity = '0';
            });
            console.log("Cor customizada:", color);
        }
    });
    if (colorSwatches.length > 0) {
        setActiveColor(colorSwatches[0]);
    }
    const themeOptions = document.querySelectorAll('#themeSelector .theme-option');
    themeOptions.forEach(option => {
        option.addEventListener('click', function() {
            themeOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            const selectedTheme = this.dataset.theme;
            alert(`Tema: ${selectedTheme}`);
        });
    });
    document.getElementById('saveLayoutSettings')?.addEventListener('click', () => {
        const selectedColor = document.querySelector('#colorPalette .color-swatch.active')?.dataset.primary || customColorHexInput.value;
        const selectedTheme = document.querySelector('#themeSelector .theme-option.active')?.dataset.theme;
        alert(`Salvo!\nCor: ${selectedColor}\nTema: ${selectedTheme}`);
    });
}


export function setupGeneralSettingsListeners() {
    document.getElementById('savePerformance')?.addEventListener('click', () => {
        alert(`Performance salva: ${document.getElementById('performanceMin').value}%`);
    });
}


export function setupConfiguracoesTabListeners() {
    document.querySelectorAll('.content-tabs .tab-item').forEach(tab => {
        tab.addEventListener('click', () => {
            renderConfiguracoesTabs(tab.dataset.tab);
        });
    });
}

export function setupConfiguracoesIdentidadeListeners() {
    const dropClaro = document.getElementById('dropzoneClaro');
    const inputClaro = document.getElementById('logoInputClaro');
    const previewClaro = document.getElementById('logoPreviewClaro');
    dropClaro.addEventListener('click', () => inputClaro.click());
    dropClaro.addEventListener('dragover', e => {
        e.preventDefault();
        dropClaro.classList.add('dragover');
    });
    dropClaro.addEventListener('dragleave', () => dropClaro.classList.remove('dragover'));
    dropClaro.addEventListener('drop', e => {
        e.preventDefault();
        dropClaro.classList.remove('dragover');
        if (e.dataTransfer.files[0]) inputClaro.files = e.dataTransfer.files;
        inputClaro.dispatchEvent(new Event('change'));
    });
    inputClaro.addEventListener('change', function(e) {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = ev => {
                previewClaro.innerHTML = `<img src='${ev.target.result}' style='max-width:100%;max-height:100%;border-radius:8px;'>`;
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    });
    const dropEscuro = document.getElementById('dropzoneEscuro');
    const inputEscuro = document.getElementById('logoInputEscuro');
    const previewEscuro = document.getElementById('logoPreviewEscuro');
    dropEscuro.addEventListener('click', () => inputEscuro.click());
    dropEscuro.addEventListener('dragover', e => {
        e.preventDefault();
        dropEscuro.classList.add('dragover');
    });
    dropEscuro.addEventListener('dragleave', () => dropEscuro.classList.remove('dragover'));
    dropEscuro.addEventListener('drop', e => {
        e.preventDefault();
        dropEscuro.classList.remove('dragover');
        if (e.dataTransfer.files[0]) inputEscuro.files = e.dataTransfer.files;
        inputEscuro.dispatchEvent(new Event('change'));
    });
    inputEscuro.addEventListener('change', function(e) {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = ev => {
                previewEscuro.innerHTML = `<img src='${ev.target.result}' style='max-width:100%;max-height:100%;border-radius:8px;'>`;
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    });
    const corInput = document.getElementById('corPrincipalInput');
    const corHex = document.getElementById('corPrincipalHex');
    const corPreview = document.getElementById('corPreview');
    let corAtual = '#8A2BE2';
    document.querySelectorAll('.color-swatch').forEach(swatch => {
        swatch.addEventListener('click', function() {
            document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
            swatch.classList.add('active');
            corAtual = swatch.dataset.color;
            corInput.value = corAtual;
            corHex.value = corAtual;
            corPreview.style.background = corAtual;
        });
    });
    corInput.addEventListener('input', function() {
        corAtual = corInput.value;
        corHex.value = corAtual;
        corPreview.style.background = corAtual;
        document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
    });
    corHex.addEventListener('input', function() {
        if (/^#([0-9A-Fa-f]{3}){1,2}$/.test(corHex.value)) {
            corAtual = corHex.value;
            corInput.value = corAtual;
            corPreview.style.background = corAtual;
            document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
        }
    });
    let temaAtual = 'dark';
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            temaAtual = btn.dataset.theme;
        });
    });
    document.getElementById('salvarIdentidade').addEventListener('click', function() {
        alert(`Configurações salvas!\nCor: ${corAtual}\nTema: ${temaAtual}`);
    });
}

export function setupConfiguracoesComplementosListeners() {
    document.getElementById('btnFiltroComplementos').addEventListener('click', () => alert('Abrir filtros avançados (mock)'));
    document.getElementById('buscaComplementos').addEventListener('input', function(e) {
        const termo = e.target.value.toLowerCase();
        document.querySelectorAll('.integration-card').forEach(card => {
            const txt = card.textContent.toLowerCase();
            card.style.display = txt.includes(termo) ? '' : 'none';
        });
    });
}


export function setupIntegrationListeners(renderIntegrationCards) {
    const newIntegrationButton = document.getElementById('newIntegrationButton');
    if (newIntegrationButton) {
        newIntegrationButton.addEventListener('click', () => {
            alert('Abrir modal/página para criar Nova Integração.');
        });
    }
    document.querySelectorAll('.content-tabs-container .tab-item[data-filter]').forEach(tabElement => {
        tabElement.addEventListener('click', function() {
            document.querySelectorAll('.content-tabs-container .tab-item[data-filter]').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            currentIntegrationFilter = this.dataset.filter;
            renderIntegrationCards();
        });
    });
    const searchIntegrationsInput = document.getElementById('search-integrations');
    if (searchIntegrationsInput) {
        searchIntegrationsInput.addEventListener('keyup', renderIntegrationCards);
    }
}

export function setupGrupoRowNavigation() {
    const table = document.getElementById('table-grupos');
    if (!table) return;
    Array.from(table.querySelectorAll('tbody tr')).forEach(row => {
        if (!row.querySelector('.cell-with-icon')) return;
        row.style.cursor = 'pointer';
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

export function setupTransferenciasRowActions() {
    const table = document.getElementById('table-transferencias');
    if (!table) return;
    const rows = table.querySelectorAll('tbody tr');
    rows.forEach((row, idx) => {
        const item = transferenciasData[idx];
        const moreBtn = row.querySelector('.btn-icon.more');
        const viewBtn = row.querySelector('.btn-icon.view');
        const deleteBtn = row.querySelector('.btn-icon.delete');
        viewBtn?.remove();
        deleteBtn?.remove();
        if (!item || item.acao !== 'Compartilhada') {
            moreBtn?.classList.add('disabled');
            if (moreBtn) moreBtn.title = 'Ação disponível apenas para compartilhamentos';
        }
    });
    setupRowActionsDropdowns('transferencias');
}


function createRowActionsDropdown(item, sectionId) {
    const options = [
        [{
            key: 'editar',
            label: 'Editar'
        }, {
            key: 'contribuidores',
            label: 'Contribuidores'
        }, {
            key: 'duplicar',
            label: 'Duplicar'
        }, ],
        [{
            key: 'matricular_em_lote',
            label: 'Matricular em lote'
        }, {
            key: 'vincular_grupo',
            label: 'Vincular grupo'
        }, {
            key: 'transferir',
            label: 'Transferir'
        }, ],
        [{
            key: 'avaliacoes',
            label: 'Avaliações'
        }, {
            key: 'estatisticas',
            label: 'Estatísticas'
        }, ],
        [{
            key: 'compartilhar',
            label: 'Compartilhar'
        }, ],
        [{
            key: 'apagar',
            label: 'Apagar'
        }, ],
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


function handleHeaderOnCollapse() {
    if (addDropdown) addDropdown.style.display = 'none';
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
        tabContentElement.innerHTML = renderGenericTable(tabId, tableDataSources[tabId], allPossibleColumnsForTab);
        setupTableCheckboxes(`table-${tabId}`);
        setupColumnToggleListeners(tabId, allPossibleColumnsForTab);
        filterCurrentTable(tabId);
        setupRowActionsDropdowns(tabId);
    } else if (tabContentElement) {
        tabContentElement.innerHTML = `<p class="generic-content-placeholder">Conteúdo para a aba ${tabId} não definido ou não é uma tabela.</p>`;
    }
}