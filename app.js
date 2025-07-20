// Les fonctions essentielles que nous avons développées 

// Gestion du panier
let cartItems = [];

function addToCart(activity) {
    cartItems.push({
        name: activity.dataset.name,
        price: parseFloat(activity.dataset.price),
        ecoScore: parseFloat(activity.dataset.eco) || null
    });
    updateCartDisplay();
}

function updateCartDisplay() {
    const count = cartItems.length;
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    
    document.getElementById('cart-count').textContent = count;
    document.getElementById('cart-total').textContent = total.toFixed(2);
    
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = cartItems.map(item => `
        <div class="cart-item">
            <span>${item.name}</span>
            <span>€${item.price.toFixed(2)}</span>
        </div>
    `).join('');
}

// Initialisation des boutons
document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => {
        addToCart(btn);
    });
});

// Gestion de la carte
function initThemeMap(center, zoom, locations, path) {
    const map = new google.maps.Map(document.getElementById('map'), {
        center,
        zoom,
        mapTypeId: 'terrain',
        styles: [{
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
        }]
    });

    // Marqueurs
    locations.forEach(loc => {
        new google.maps.Marker({
            position: loc.position,
            map,
            title: loc.title,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 8,
                fillColor: '#2ecc71',
                strokeColor: '#fff',
                strokeWeight: 2
            }
        });
    });

    // Tracé du parcours
    if(path) {
        new google.maps.Polyline({
            path,
            geodesic: true,
            strokeColor: '#2ecc71',
            strokeOpacity: 0.7,
            strokeWeight: 4,
            map
        });
    }
}

function initMainMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: { lat: 43.5513, lng: 7.01295 }, // Centre sur Cannes
        mapTypeId: 'terrain',
        styles: [
            { featureType: "poi", stylers: [{ visibility: "off" }] },
            { featureType: "transit", stylers: [{ visibility: "off" }] }
        ]
    });

    // Coordonnées du grand parcours
    const grandParcours = [
        { lat: 43.5528, lng: 7.0174 },  // Palais des Festivals
        { lat: 43.6976, lng: 7.1223 },  // Saint-Paul-de-Vence
        { lat: 43.7208, lng: 6.9789 },  // Gourdon
        { lat: 43.6001, lng: 6.9973 },  // Mougins
        { lat: 43.5501, lng: 7.0177 }   // Croisette
    ];

    // Tracé du parcours
    new google.maps.Polyline({
        path: grandParcours,
        geodesic: true,
        strokeColor: "#808000",
        strokeOpacity: 0.8,
        strokeWeight: 4,
        map: map
    });

    // Ajout des marqueurs
    grandParcours.forEach(coord => {
        new google.maps.Marker({
            position: coord,
            map: map,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 8,
                fillColor: '#808000',
                strokeColor: '#fff',
                strokeWeight: 2
            }
        });
    });
}

// Add to all map initialization functions
const mapOptions = {
    zoom: 10,
    center: { lat: 43.5513, lng: 7.01195 }, // Consistent center point
    mapTypeId: 'terrain',
    styles: [
        { featureType: "poi", stylers: [{ visibility: "off" }] },
        { featureType: "transit", stylers: [{ visibility: "off" }] },
        { 
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#4d8cff" }]
        }
    ]
};

// Mise à jour des coordonnées cinéma
const cinemaLocations = [
    {
        lat: 43.552841, lng: 7.019371,
        title: "Palais des Festivals",
        films: ["Festival de Cannes", "8 Femmes", "La Dolce Vita"]
    },
    {
        lat: 43.523611, lng: 7.047500,
        title: "Île Sainte-Marguerite",
        films: ["Le Masque de Fer (1929)", "The Island (2005)"]
    },
    {
        lat: 43.550015, lng: 7.021505,
        title: "Hôtel Martinez",
        films: ["GoldenEye (1995)", "La Baie des Anges (1963)"]
    }
];

function initCinemaMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: { lat: 43.5528, lng: 7.0174 },
        styles: [{
            featureType: "poi",
            stylers: [{ visibility: "off" }]
        }]
    });

    cinemaLocations.forEach(location => {
        new google.maps.Marker({
            position: location,
            map,
            title: location.title,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 8,
                fillColor: '#B2A4D4', // Couleur lavande
                strokeColor: '#fff',
                strokeWeight: 2
            }
        });
    });
} 