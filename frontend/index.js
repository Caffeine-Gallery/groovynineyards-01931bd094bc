import { backend } from "declarations/backend";

async function loadEmployees() {
    try {
        const employees = await backend.getEmployees();
        const grid = document.getElementById('employees-grid');
        grid.innerHTML = '';
        
        employees.forEach(employee => {
            const card = document.createElement('div');
            card.className = 'card employee-card';
            card.innerHTML = `
                <div class="card-inner">
                    <img src="${employee.photoUrl}" alt="${employee.name}">
                    <h3>${employee.name}</h3>
                    <h4>${employee.title}</h4>
                    <p>${employee.bio}</p>
                </div>
            `;
            grid.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading employees:', error);
    }
}

async function loadCompanies() {
    try {
        const companies = await backend.getCompanies();
        const grid = document.getElementById('companies-grid');
        grid.innerHTML = '';
        
        companies.forEach(company => {
            const card = document.createElement('div');
            card.className = 'card company-card';
            card.innerHTML = `
                <div class="card-inner">
                    <img src="${company.logoUrl}" alt="${company.name}">
                    <h3>${company.name}</h3>
                    <h4>${company.sector}</h4>
                    <p>${company.description}</p>
                </div>
            `;
            grid.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading companies:', error);
    }
}

// Initialize the page
window.addEventListener('load', () => {
    loadEmployees();
    loadCompanies();
});
