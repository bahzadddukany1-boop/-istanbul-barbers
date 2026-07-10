/* ==========================================================================
   1. DESIGN TOKENS & RESET
   ========================================================================== */
:root {
    --primary-gold: #f5b016;
    --primary-gold-hover: #d4960c;
    --dark-bg: #0b0c10;
    --dark-card: #111215;
    --light-bg: #f9f9f9;
    --text-dark: #1c1c1e;
    --text-muted: #666666;
    --text-light: #ffffff;
    --border-color: #e5e5e5;
    --font-main: 'Poppins', sans-serif;
    --transition: all 0.3s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-main);
    background-color: var(--light-bg);
    color: var(--text-dark);
    line-height: 1.6;
}

a {
    text-decoration: none;
    color: inherit;
    transition: var(--transition);
}

ul {
    list-style: none;
}

img {
    max-width: 100%;
    display: block;
}

/* Common Section Headers styled like image.png */
section h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 2rem;
    position: relative;
    letter-spacing: 1px;
}

/* ==========================================================================
   2. HEADER & NAVIGATION
   ========================================================================== */
header {
    background-color: var(--dark-bg);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 5%;
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.logo h2 {
    color: var(--text-light);
    font-weight: 700;
    font-size: 1.5rem;
    letter-spacing: 1px;
}

.logo span {
    color: var(--primary-gold);
}

nav ul {
    display: flex;
    gap: 2rem;
}

nav a {
    color: var(--text-light);
    font-size: 0.9rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
}

nav a:hover {
    color: var(--primary-gold);
}

.call-btn {
    background-color: var(--primary-gold);
    color: var(--dark-bg);
    padding: 0.6rem 1.5rem;
    font-weight: 600;
    border-radius: 4px;
    text-transform: uppercase;
    font-size: 0.85rem;
}

.call-btn:hover {
    background-color: var(--primary-gold-hover);
}

/* ==========================================================================
   3. HERO SECTION
   ========================================================================== */
.hero {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.75)), 
                url('images/gallery4.jpg') no-repeat center center/cover;
    height: 85vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--text-light);
    padding: 0 1rem;
}

.hero .overlay {
    max-width: 800px;
    width: 100%;
}

.hero h1 {
    font-size: 3.5rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 0.5rem;
}

.hero h2 {
    color: var(--primary-gold);
    border: 2px solid var(--primary-gold);
    display: inline-block;
    padding: 0.5rem 2rem;
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 3px;
    margin: 1.5rem 0;
    background: rgba(0, 0, 0, 0.4);
}

.hero p {
    font-size: 1.2rem;
    letter-spacing: 4px;
    font-weight: 300;
    margin-bottom: 2.5rem;
}

/* Hero Action Buttons */
.hero .btn, .hero .btn2 {
    display: inline-block;
    padding: 0.8rem 2rem;
    font-weight: 600;
    border-radius: 4px;
    text-transform: uppercase;
    font-size: 0.9rem;
    margin: 0 0.5rem;
    min-width: 180px;
}

.hero .btn {
    background-color: var(--primary-gold);
    color: var(--dark-bg);
}

.hero .btn:hover {
    background-color: var(--primary-gold-hover);
}

.hero .btn2 {
    background-color: transparent;
    color: var(--text-light);
    border: 2px solid var(--text-light);
}

.hero .btn2:hover {
    background-color: var(--text-light);
    color: var(--dark-bg);
}

/* ==========================================================================
   4. SERVICES & CARDS GRID
   ========================================================================== */
#services {
    padding: 5rem 5%;
    max-width: 1200px;
    margin: 0 auto;
}

#services .service {
    background: var(--text-light);
    padding: 2rem;
    border-radius: 6px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    text-align: center;
    border-bottom: 3px solid transparent;
    transition: var(--transition);
    display: inline-block;
    width: calc(25% - 1.5rem);
    margin: 0.75rem;
    vertical-align: top;
}

/* Layout fixing for the services elements matching standard block flows */
@document url-prefix() { #services { display: block; } } /* Fallback safeguard */
#services {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
}

#services .service {
    width: calc(33.333% - 1rem); /* Standardizes layout width */
    margin: 0;
}

#services .service:hover {
    transform: translateY(-5px);
    border-bottom-color: var(--primary-gold);
}

.service h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
}

.service p {
    color: var(--primary-gold);
    font-size: 1.5rem;
    font-weight: 700;
}

/* Special styling for VIP Package Card */
.service:last-child {
    width: 100%;
    background-color: var(--dark-card);
    color: var(--text-light);
}

.service:last-child small {
    display: block;
    margin-top: 0.5rem;
    color: #aaa;
    font-size: 0.9rem;
}

/* ==========================================================================
   5. PRICE LIST TABLE
   ========================================================================== */
#prices {
    padding: 5rem 5%;
    background-color: var(--text-light);
}

#prices table {
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    border-collapse: collapse;
}

#prices th, #prices td {
    padding: 1rem;
    text-align: left;
}

#prices th {
    background-color: var(--dark-bg);
    color: var(--text-light);
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 1px;
}

#prices tr:nth-child(even) {
    background-color: var(--light-bg);
}

#prices td:last-child {
    color: var(--primary-gold);
    font-weight: 700;
    text-align: right;
}

#prices tr {
    border-bottom: 1px solid var(--border-color);
}

/* ==========================================================================
   6. LOYALTY CARD SECTION
   ========================================================================== */
.loyalty {
    background-color: var(--dark-bg);
    color: var(--text-light);
    text-align: center;
    padding: 5rem 5%;
}

.loyalty h2 {
    color: var(--primary-gold);
}

.loyalty p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.loyalty .btn {
    display: inline-block;
    background-color: var(--primary-gold);
    color: var(--dark-bg);
    padding: 0.8rem 2.5rem;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 4px;
}

/* ==========================================================================
   7. TEAM MEMBERS SECTION
   ========================================================================== */
#team {
    padding: 5rem 5%;
    max-width: 1200px;
    margin: 0 auto;
}

.team {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
}

.member {
    background-color: var(--dark-card);
    color: var(--text-light);
    padding: 2.5rem 2rem;
    text-align: center;
    border-radius: 6px;
    width: calc(33.333% - 1.5rem);
    min-width: 250px;
    border-top: 4px solid var(--primary-gold);
}

.member h3 {
    font-size: 1.4rem;
    color: var(--primary-gold);
    margin-bottom: 0.25rem;
}

.member p {
    font-size: 0.9rem;
    color: #ccc;
}

/* ==========================================================================
   8. OPENING HOURS & REVIEWS
   ========================================================================== */
.hours, .reviews {
    padding: 5rem 5%;
    text-align: center;
}

.hours {
    background-color: var(--text-light);
}

.hours ul {
    max-width: 500px;
    margin: 0 auto;
    background: var(--light-bg);
    padding: 2rem;
    border-radius: 6px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.02);
}

.hours li {
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 0;
    border-bottom: 1px dashed var(--border-color);
    font-weight: 500;
}

.hours li:last-child {
    border: none;
}

/* Reviews Box Styling */
.review-box {
    background-color: var(--text-light);
    max-width: 500px;
    margin: 0 auto;
    padding: 3rem 2rem;
    border-radius: 6px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
}

.review-box h3 {
    color: #ffcc00;
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.review-box p {
    color: var(--text-muted);
    margin-bottom: 2rem;
}

.review-box .btn {
    display: inline-block;
    background-color: var(--dark-bg);
    color: var(--text-light);
    padding: 0.75rem 2rem;
    font-weight: 500;
    border-radius: 4px;
}

.review-box .btn:hover {
    background-color: var(--primary-gold);
    color: var(--dark-bg);
}

/* ==========================================================================
   9. GALLERY GRID
   ========================================================================== */
.gallery {
    padding: 5rem 5%;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    max-width: 1200px;
    margin: 0 auto;
}

.gallery-grid img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 6px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.08);
    transition: var(--transition);
}

.gallery-grid img:hover {
    transform: scale(1.03);
}

/* ==========================================================================
   10. CONTACT SECTION & FOOTER
   ========================================================================== */
#contact {
    padding: 5rem 5%;
    background-color: var(--text-light);
    text-align: center;
}

#contact p {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
}

#contact a {
    color: var(--primary-gold-hover);
    font-weight: 600;
}

.social {
    margin: 2rem 0;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
}

.social a {
    display: inline-block;
    padding: 0.6rem 2rem;
    background-color: var(--dark-bg);
    color: var(--text-light);
    border-radius: 4px;
    font-weight: 500;
}

.social a:hover {
    background-color: var(--primary-gold);
    color: var(--dark-bg);
}

#contact .btn {
    display: inline-block;
    background-color: var(--primary-gold);
    color: var(--dark-bg);
    padding: 0.8rem 2.5rem;
    font-weight: 600;
    border-radius: 4px;
    margin-top: 1rem;
}

footer {
    background-color: var(--dark-bg);
    color: #888888;
    text-align: center;
    padding: 2rem 5%;
    font-size: 0.9rem;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
}

/* ==========================================================================
   11. RESPONSIVE MEDIA QUERIES
   ========================================================================== */
@media (max-width: 992px) {
    #services .service, .member {
        width: calc(50% - 1rem);
    }
    .hero h1 {
        font-size: 2.75rem;
    }
}

@media (max-width: 768px) {
    header {
        flex-direction: column;
        gap: 1rem;
        padding: 1.5rem;
    }
    
    nav ul {
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
    }
    
    .hero h1 {
        font-size: 2.2rem;
    }
    
    .hero h2 {
        font-size: 1.1rem;
        padding: 0.5rem 1rem;
    }
    
    .hero .btn, .hero .btn2 {
        width: 100%;
        margin: 0.5rem 0;
    }
    
    #services .service, .member {
        width: 100%;
    }
}
