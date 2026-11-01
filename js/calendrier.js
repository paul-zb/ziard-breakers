// 1. Liste de tes dates de concert
const concerts = [
    { date: "2026-06-13", ville: "Lille", lieu: "Le Tatoué Bar", ticketUrl: "#" },
    { date: "2026-06-18", ville: "Lille", lieu: "Aéronef", ticketUrl: "#" },
    { date: "2026-06-21", ville: "Calais", lieu: "La Crypte", ticketUrl: "#" },
    { date: "2026-06-27", ville: "Lille", lieu: "Le Bidule", ticketUrl: "#" },
    { date: "2026-09-05", ville: "Lille", lieu: "High Voltage", ticketUrl: "#" },
    { date: "2026-09-06", ville: "Lille", lieu: "Le Pop Bar", ticketUrl: "#" },
    { date: "2026-09-13", ville: "Lille", lieu: "Les Sarrazins", ticketUrl: "#" },
    { date: "2026-10-10", ville: "Douvrin", lieu: "Festi'Plus", ticketUrl: "#" },
    { date: "2026-10-17", ville: "Bauvin", lieu: "O'Rendez Vous", ticketUrl: "#" },
    { date: "2026-11-14", ville: "Béthune", lieu: "Nautilus", ticketUrl: "#" },
    { date: "2026-11-21", ville: "La Bassée", lieu: "Skal Bar", ticketUrl: "#" }
];

// 2. Date d'aujourd'hui (mise à 00:00:00 pour une comparaison exacte)
const today = new Date();
today.setHours(0, 0, 0, 0);

// 3. Trier les concerts dans l'ordre chronologique
concerts.sort((a, b) => new Date(a.date) - new Date(b.date));

// 4. Trouver le premier concert dont la date est supérieure ou égale à aujourd'hui
const nextShow = concerts.find(c => new Date(c.date) >= today);

// --- AFFICHAGE COLONNE GAUCHE (Prochain concert) ---
const nextShowContainer = document.getElementById('next-show');

if (nextShow) {
    nextShowContainer.innerHTML = `
        <h2>Prochain Concert</h2>
        <div class="highlight-date">${formatDate(nextShow.date)}</div>
        <h3>${nextShow.lieu}</h3>
        <p>${nextShow.ville}</p>
        <a href="${nextShow.ticketUrl}" class="btn-ticket">Infos / Billetterie</a>
    `;
} else {
    nextShowContainer.innerHTML = `
        <h2>Prochain Concert</h2>
        <p>Aucune date à venir pour le moment. Restez connectés !</p>
    `;
}

// --- AFFICHAGE COLONNE DROITE (Liste complète) ---
const listContainer = document.getElementById('shows-list');

concerts.forEach(c => {
    const isPast = new Date(c.date) < today;
    const li = document.createElement('li');
    
    // Si la date est passée, on lui ajoute une classe pour la griser
    if (isPast) {
        li.classList.add('past');
    }

    li.innerHTML = `
        <span class="date">${formatDate(c.date)}</span>
        <span class="location"><strong>${c.ville}</strong> - ${c.lieu}</span>
    `;
    listContainer.appendChild(li);
});

// Fonction utilitaire pour afficher les dates au format français (ex: 15 novembre 2026)
function formatDate(dateString) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
}