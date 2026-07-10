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
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Istanbul Barbers | Premium Barber Shop in Derby</title>
    <meta name="description" content="Istanbul Barbers - Professional Haircuts, Skin Fades, Beard Trims and Hot Towel Shaves in Chellaston, Derby. No Appointment Needed - Just Walk In.">
    
    <!-- Stylesheets -->
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
</head>
<body>

    <!-- TOP INFO BAR -->
    <div class="top-bar">
        <div class="top-info">
            <span><i class="fa-solid fa-phone"></i> 07429 928263</span>
            <span><i class="fa-solid fa-location-dot"></i> Unit 2, Royal Glen Park, Chellaston, Derby DE73 5XE</span>
        </div>
        <div class="top-social">
            <a href="https://www.facebook.com" target="_blank"><i class="fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com" target="_blank"><i class="fa-brands fa-instagram"></i></a>
        </div>
    </div>

    <!-- MAIN HEADER -->
    <header>
        <div class="logo">
            <h2>ISTANBUL <span>BARBER</span></h2>
        </div>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#prices">Pricing</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#gift-cards">Gift Cards</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#hours">Hours</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        <a class="call-btn" href="tel:07429928263"><i class="fa-solid fa-phone"></i> Call Now</a>
    </header>

    <!-- HERO SECTION WITH SLIDER STYLING -->
    <section id="home" class="hero">
        <div class="slider-arrow left-arrow"><i class="fa-solid fa-chevron-left"></i></div>
        <div class="overlay">
            <span class="welcome-text">Welcome To</span>
            <h1>ISTANBUL <span>BARBER</span></h1>
            <p class="sub-hero">PREMIUM BARBER SHOP IN CHELLASTON, DERBY</p>
            
            <div class="badge-walk-in">
                <h3>NO APPOINTMENT NEEDED</h3>
                <p>JUST WALK IN</p>
            </div>

            <div class="hero-buttons">
                <a href="tel:07429928263" class="btn"><i class="fa-solid fa-phone"></i> 07429 928263</a>
                <a href="https://maps.app.goo.gl/EmcsAdHsv8gG1CDE6" target="_blank" class="btn2"><i class="fa-solid fa-location-dot"></i> Get Directions</a>
            </div>
            
            <div class="slider-dots">
                <span class="dot active"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            </div>
        </div>
        <div class="slider-arrow right-arrow"><i class="fa-solid fa-chevron-right"></i></div>
    </section>

    <!-- FLOATING ACTIONS (WHATSAPP & PHONE) -->
    <div class="floating-actions">
        <a href="https://wa.me/07429928263" class="float-btn whatsapp" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
        <a href="tel:07429928263" class="float-btn phone"><i class="fa-solid fa-phone"></i></a>
    </div>

    <!-- OUR SERVICES (ICONS GRID) -->
    <section id="services">
        <div class="section-title-wrap">
            <h2>Our Services</h2>
        </div>
        <div class="services-grid">
            <div class="service-card">
                <i class="fa-solid fa-scissors gold-icon"></i>
                <h3>Haircut</h3>
                <p>Classic & modern haircut for men</p>
            </div>
            <div class="service-card">
                <div class="icon-src-placeholder"><i class="fa-solid fa-user"></i></div>
                <h3>Skin Fade</h3>
                <p>Professional skin fade style</p>
            </div>
            <div class="service-card">
                <i class="fa-solid fa-font-awesome gold-icon"></i>
                <h3>Beard Trim</h3>
                <p>Beard shaping & detailing</p>
            </div>
            <div class="service-card">
                <i class="fa-solid fa-soap gold-icon"></i>
                <h3>Hot Towel Shave</h3>
                <p>Relaxing hot towel wet shave</p>
            </div>
            <div class="service-card">
                <i class="fa-solid fa-child gold-icon"></i>
                <h3>Kids Haircut</h3>
                <p>Haircut for boys of all ages</p>
            </div>
            <div class="service-card">
                <i class="fa-solid fa-shower gold-icon"></i>
                <h3>Hair Wash</h3>
                <p>Hair wash & styling</p>
            </div>
        </div>
    </section>

    <!-- 3-COLUMN ROW: ABOUT, PRICE LIST, GALLERY -->
    <div class="main-info-row">
        
        <!-- ABOUT US -->
        <section id="about" class="info-column-3">
            <h2>About Us</h2>
            <p>At Istanbul Barber, we combine traditional techniques with modern styles to give you the perfect look. Our barbers are passionate, experienced and committed to providing the best service in a friendly environment.</p>
            <div class="signature">Istanbul Barber</div>
            <a href="#services" class="dark-btn">Learn More</a>
        </section>

        <!-- PRICE LIST -->
        <section id="prices" class="info-column-3">
            <h2>Price List</h2>
            <table class="minimal-table">
                <tr><td>Haircut</td><td class="price-gold">£13</td></tr>
                <tr><td>Skin Fade</td><td class="price-gold">£15</td></tr>
                <tr><td>Beard Trim</td><td class="price-gold">£12</td></tr>
                <tr><td>Hot Towel Shave</td><td class="price-gold">£12</td></tr>
                <tr><td>Kids Haircut (Under 12)</td><td class="price-gold">£10</td></tr>
                <tr><td>Hair Wash</td><td class="price-gold">£6</td></tr>
                <tr><td>Haircut & Beard</td><td class="price-gold">£24</td></tr>
                <tr class="highlight-row"><td>Full Package <small>(Haircut + Beard + Shave)</small></td><td class="price-gold">£30</td></tr>
            </table>
            <a href="#prices" class="gold-block-btn">View All Prices</a>
        </section>

        <!-- GALLERY -->
        <section id="gallery" class="info-column-3">
            <h2>Gallery</h2>
            <div class="gallery-compact-grid">
                <img src="images/gallery1.jpg" alt="Haircut">
                <img src="images/gallery2.jpg" alt="Skin Fade">
                <img src="images/gallery3.jpg" alt="Beard Trim">
                <img src="images/gallery4.jpg" alt="Barber Shop">
                <img src="images/gallery5.jpg" alt="Style">
                <img src="images/shop-front.jpg" alt="Shop Front">
            </div>
            <a href="#gallery" class="dark-btn text-center">View Full Gallery</a>
        </section>
    </div>

    <!-- 3-COLUMN ROW 2: GIFT CARDS, TEAM, OPENING HOURS -->
    <div class="main-info-row secondary-row">
        
        <!-- GIFT CARDS -->
        <section id="gift-cards" class="info-column-3 card-promo">
            <div class="promo-box">
                <h3>GIFT CARDS</h3>
                <div class="card-graphic">
                    <img src="images/shop-front.jpg" style="display:none;" alt="Placeholder Card">
                    <div class="virtual-card">
                        <i class="fa-solid fa-crown"></i>
                        <span>ISTANBUL BARBER</span>
                    </div>
                </div>
                <p>Looking for the perfect gift? Treat your friends and family to a professional grooming experience.</p>
                <a href="tel:07429928263" class="gold-block-btn">Buy Gift Card</a>
            </div>
        </section>

        <!-- OUR TEAM -->
        <section id="team" class="info-column-3">
            <h2>Our Team</h2>
            <div class="team-flex">
                <div class="team-member-card">
                    <div class="avatar-placeholder"><i class="fa-solid fa-user-tie"></i></div>
                    <h4>Ali</h4>
                    <span class="role-gold">Senior Barber</span>
                    <p>10+ years of experience in modern and classic haircuts.</p>
                </div>
                <div class="team-member-card">
                    <div class="avatar-placeholder"><i class="fa-solid fa-user-tie"></i></div>
                    <h4>Mehmet</h4>
                    <span class="role-gold">Fade Specialist</span>
                    <p>Expert in Skin Fades, Beard Styling and Hot Towel Shaves.</p>
                </div>
                <div class="team-member-card">
                    <div class="avatar-placeholder"><i class="fa-solid fa-user-tie"></i></div>
                    <h4>Ahmed</h4>
                    <span class="role-gold">Barber</span>
                    <p>Professional haircuts for adults and children.</p>
                </div>
            </div>
            <a href="#team" class="dark-btn">Meet The Team</a>
        </section>

        <!-- OPENING HOURS -->
        <section id="hours" class="info-column-3">
            <h2>Opening Hours</h2>
            <ul class="hours-list">
                <li><span><i class="fa-regular fa-clock"></i> Monday</span> <span>9:00 AM - 7:00 PM</span></li>
                <li><span><i class="fa-regular fa-clock"></i> Tuesday</span> <span>9:00 AM - 7:00 PM</span></li>
                <li><span><i class="fa-regular fa-clock"></i> Wednesday</span> <span>9:00 AM - 7:00 PM</span></li>
                <li><span><i class="fa-regular fa-clock"></i> Thursday</span> <span>9:00 AM - 7:00 PM</span></li>
                <li><span><i class="fa-regular fa-clock"></i> Friday</span> <span>9:00 AM - 7:00 PM</span></li>
                <li><span><i class="fa-regular fa-clock"></i> Saturday</span> <span>9:00 AM - 6:00 PM</span></li>
                <li class="closed-day"><span><i class="fa-regular fa-clock"></i> Sunday</span> <span class="gold-text">Closed</span></li>
            </ul>
        </section>
    </div>

    <!-- TESTIMONIALS SECTION -->
    <section class="testimonials">
        <h2>What Our Customers Say</h2>
        <div class="reviews-grid">
            <div class="review-card">
                <div class="stars">⭐⭐⭐⭐⭐</div>
                <p>"Best barber in Derby! Always leave with a fresh cut and great vibes."</p>
                <div class="reviewer-info"><strong>James T.</strong></div>
            </div>
            <div class="review-card">
                <div class="stars">⭐⭐⭐⭐⭐</div>
                <p>"Professional service, friendly staff and perfect fades every time."</p>
                <div class="reviewer-info"><strong>Ahmed R.</strong></div>
            </div>
            <div class="review-card">
                <div class="stars">⭐⭐⭐⭐⭐</div>
                <p>"No appointment needed, just walk in and get the best haircut in town!"</p>
                <div class="reviewer-info"><strong>Michael B.</strong></div>
            </div>
        </div>
        <div class="follow-us">
            <h3>Follow Us</h3>
            <div class="social-icons-large">
                <a href="#" class="insta-color"><i class="fa-brands fa-instagram"></i></a>
                <a href="#" class="fb-color"><i class="fa-brands fa-facebook"></i></a>
                <a href="#" class="wa-color"><i class="fa-brands fa-whatsapp"></i></a>
            </div>
        </div>
    </section>

    <!-- CONTACT US & MAP SECTION -->
    <section id="contact" class="contact-section">
        <div class="contact-container">
            <div class="contact-details">
                <h2>Contact Us</h2>
                <p><i class="fa-solid fa-phone gold-icon"></i> 07429 928263</p>
                <p><i class="fa-solid fa-location-dot gold-icon"></i> Unit 2, Royal Glen Park, Chellaston, Derby DE73 5XE</p>
                <p><i class="fa-solid fa-envelope gold-icon"></i> info@istanbulbarber.co.uk</p>
            </div>
            
            <div class="contact-form-wrap">
                <form action="#" class="contact-form">
                    <div class="form-row">
                        <input type="text" placeholder="Your Name" required>
                        <input type="email" placeholder="Your Email" required>
                    </div>
                    <div class="form-row">
                        <input type="text" placeholder="Phone Number">
                        <input type="text" placeholder="Subject">
                    </div>
                    <textarea placeholder="Your Message" rows="4" required></textarea>
                    <button type="submit" class="gold-block-btn">Send Message</button>
                </form>
            </div>

            <div class="map-wrap">
                <!-- Embedded Google Map Placeholder matching image.png layout -->
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2405.748301148813!2d-1.4294002!3d52.871239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879f6cf3376df17%3A0x6b4c3e809df63de1!2sRoyal%20Glen%20Park!5e0!3m2!1sen!2suk!4v1710000000000!5m2!1sen!2suk" width="100%" height="250" style="border:0; border-radius: 6px;" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    </section>

    <!-- DEEP COMPLEX FOOTER -->
    <footer>
        <div class="footer-columns">
            <div class="footer-col">
                <h3 class="logo-text">ISTANBUL <span>BARBER</span></h3>
                <p class="footer-desc">Premium grooming experience for modern gentlemen.</p>
            </div>
            <div class="footer-col">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#prices">Pricing</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Our Services</h4>
                <ul>
                    <li><a href="#services">Haircut</a></li>
                    <li><a href="#services">Skin Fade</a></li>
                    <li><a href="#services">Beard Trim</a></li>
                    <li><a href="#services">Hot Towel Shave</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Contact</h4>
                <p><i class="fa-solid fa-phone"></i> 07429 928263</p>
                <p><i class="fa-solid fa-location-dot"></i> Unit 2, Royal Glen Park, DE73 5XE</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 Istanbul Barber. All Rights Reserved.</p>
            <p class="dev-by">Designed with <i class="fa-solid fa-heart" style="color:red;"></i> for our customers</p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
