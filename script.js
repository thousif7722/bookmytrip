// Sample destination data
const destinations = [
    {
        id: 1,
        name: "Bali, Indonesia",
        image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Tropical paradise with beautiful beaches and temples",
        price: 899,
        rating: 4.8,
        type: "beach"
    },
    {
        id: 2,
        name: "Paris, France",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Romantic city of lights and culture",
        price: 1299,
        rating: 4.9,
        type: "city"
    },
    {
        id: 3,
        name: "Tokyo, Japan",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Vibrant metropolis blending tradition and modernity",
        price: 1499,
        rating: 4.7,
        type: "city"
    },
    {
        id: 4,
        name: "Maldives",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Luxury overwater bungalows and crystal clear waters",
        price: 2499,
        rating: 4.9,
        type: "beach"
    },
    {
        id: 5,
        name: "New York, USA",
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "The city that never sleeps",
        price: 1599,
        rating: 4.6,
        type: "city"
    },
    {
        id: 6,
        name: "Swiss Alps",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Majestic mountains and alpine adventures",
        price: 1799,
        rating: 4.8,
        type: "mountain"
    }
];

// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const closeModals = document.querySelectorAll('.close-modal');
const searchBtn = document.getElementById('searchBtn');
const destinationsGrid = document.getElementById('destinationsGrid');
const tabs = document.querySelectorAll('.tab');

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    loadDestinations();
    setupEventListeners();
});

// Load destinations to the page
function loadDestinations() {
    destinationsGrid.innerHTML = '';
    
    destinations.forEach(destination => {
        const card = document.createElement('div');
        card.className = 'destination-card';
        card.innerHTML = `
            <img src="${destination.image}" alt="${destination.name}">
            <div class="destination-info">
                <h3>${destination.name}</h3>
                <p>${destination.description}</p>
                <div class="destination-meta">
                    <span class="price">$${destination.price}</span>
                    <span class="rating">
                        <i class="fas fa-star"></i> ${destination.rating}
                    </span>
                </div>
                <button class="btn btn-primary" onclick="bookDestination(${destination.id})">
                    Book Now
                </button>
            </div>
        `;
        destinationsGrid.appendChild(card);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Login modal
    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'flex';
    });

    // Signup modal
    signupBtn.addEventListener('click', () => {
        signupModal.style.display = 'flex';
    });

    // Close modals
    closeModals.forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            loginModal.style.display = 'none';
            signupModal.style.display = 'none';
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) loginModal.style.display = 'none';
        if (e.target === signupModal) signupModal.style.display = 'none';
    });

    // Tab switching
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    // Search button
    searchBtn.addEventListener('click', handleSearch);

    // Form submissions
    document.getElementById('loginForm')?.addEventListener('submit', handleLogin);
    document.getElementById('signupForm')?.addEventListener('submit', handleSignup);

    // Switch between login/signup modals
    document.getElementById('signupLink')?.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.style.display = 'none';
        signupModal.style.display = 'flex';
    });

    document.getElementById('loginLink')?.addEventListener('click', (e) => {
        e.preventDefault();
        signupModal.style.display = 'none';
        loginModal.style.display = 'flex';
    });
}

// Handle search functionality
function handleSearch() {
    const from = document.getElementById('fromInput').value;
    const to = document.getElementById('toInput').value;
    const dates = document.getElementById('datesInput').value;
    const travelers = document.getElementById('travelersSelect').value;

    if (!from || !to || !dates) {
        alert('Please fill in all required fields');
        return;
    }

    alert(`Searching flights from ${from} to ${to} on ${dates} for ${travelers}`);
    
    // In a real app, this would make an API call
    console.log('Search parameters:', { from, to, dates, travelers });
}

// Handle login
function handleLogin(e) {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    // In a real app, this would make an API call
    console.log('Login attempt:', { email, password });
    alert('Login functionality would connect to backend');
    
    loginModal.style.display = 'none';
    e.target.reset();
}

// Handle signup
function handleSignup(e) {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const confirmPassword = e.target[3].value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // In a real app, this would make an API call
    console.log('Signup attempt:', { name, email, password });
    alert('Account created successfully!');
    
    signupModal.style.display = 'none';
    e.target.reset();
}

// Book destination
function bookDestination(id) {
    const destination = destinations.find(d => d.id === id);
    if (destination) {
        alert(`Booking ${destination.name} for $${destination.price}`);
        // In a real app, this would redirect to booking page
    }
}

// Filter destinations by type
function filterDestinations(type) {
    const filtered = type === 'all' 
        ? destinations 
        : destinations.filter(d => d.type === type);
    
    destinationsGrid.innerHTML = '';
    filtered.forEach(destination => {
        const card = document.createElement('div');
        card.className = 'destination-card';
        card.innerHTML = `
            <img src="${destination.image}" alt="${destination.name}">
            <div class="destination-info">
                <h3>${destination.name}</h3>
                <p>${destination.description}</p>
                <div class="destination-meta">
                    <span class="price">$${destination.price}</span>
                    <span class="rating">
                        <i class="fas fa-star"></i> ${destination.rating}
                    </span>
                </div>
                <button class="btn btn-primary" onclick="bookDestination(${destination.id})">
                    Book Now
                </button>
            </div>
        `;
        destinationsGrid.appendChild(card);
    });
}

// API integration example (commented out for now)
/*
async function fetchFlights(from, to, date) {
    try {
        const response = await fetch(`https://api.example.com/flights?from=${from}&to=${to}&date=${date}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching flights:', error);
        return [];
    }
}
*/

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});