export let visibleColumnsState = {};
export let currentActiveMenuSection = 'dashboard';
export let currentActiveContentTab = 'cursos';
export let currentIntegrationFilter = 'todas';

// Initializing visibleColumnsState for all sections based on allTableColumns
// Assuming allTableColumns is imported or available
import { allTableColumns } from './data.js'; // Adjust the import path as needed

for (const sectionKey in allTableColumns) {
    visibleColumnsState[sectionKey] = {};
    allTableColumns[sectionKey].forEach(col => {
        if (col.key !== 'acoes') {
            visibleColumnsState[sectionKey][col.key] = true;
        }
    });
}