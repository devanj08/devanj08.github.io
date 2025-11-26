// ===========================
// PORTFOLIO WEBSITE SCRIPT
// ===========================
// Handles all dynamic rendering and interactivity

document.addEventListener('DOMContentLoaded', function() {
  // Render all sections
  renderHero();
  renderArgonne();
  renderCreche();
  renderUChicago();
  renderLeadership();
  renderContact();
  
  // Initialize interactivity
  initNavigation();
  initMobileMenu();
  initVideoPlayers();
  
  // Set current year
  document.getElementById('current-year').textContent = new Date().getFullYear();
});

// ===========================
// RENDER FUNCTIONS
// ===========================

/**
 * Render Hero Section
 */
function renderHero() {
  document.getElementById('hero-name').textContent = siteData.hero.name;
  document.getElementById('hero-title').textContent = siteData.hero.title;
  document.getElementById('hero-subtitle').textContent = siteData.hero.subtitle;
  document.getElementById('cta-resume').href = siteData.hero.resumeUrl;
}

/**
 * Render Argonne Section
 */
function renderArgonne() {
  // NewsRadar
  document.getElementById('newsradar-description').innerHTML = siteData.argonne.newsradar.description;
  
  // Battery
  document.getElementById('battery-description').innerHTML = siteData.argonne.battery.description;
  
  // UAV
  document.getElementById('uav-description').innerHTML = siteData.argonne.uav.description;
}

/**
 * Render Creche Section
 */
function renderCreche() {
  const container = document.getElementById('creche-projects');
  
  container.innerHTML = siteData.creche.projects.map(project => `
    <div class="creche-project-item">
      <div class="project-image">
        <img src="${project.imagePath}" alt="${project.title}">
      </div>
      <div class="project-content">
        <h4>${project.title}</h4>
        <p>${project.description}</p>
        <div class="project-tech">
          ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

/**
 * Render UChicago Section
 */
function renderUChicago() {
  // Physics - Gamma Lab
  document.getElementById('gamma-description').innerHTML = siteData.uchicago.physics.gammaLab.description;
  
  // Physics - Advanced Math
  document.getElementById('math-description').innerHTML = siteData.uchicago.physics.advancedMath.description;
  
  // Render Coursework
  const courseworkGrid = document.getElementById('physics-coursework');
  courseworkGrid.innerHTML = siteData.uchicago.physics.advancedMath.coursework.map(course => `
    <div class="course-card">
      <h5>${course.code}</h5>
      <p><strong>${course.name}</strong></p>
      <p>${course.description}</p>
    </div>
  `).join('');
  
  // Data Science - NBA
  document.getElementById('nba-description').innerHTML = siteData.uchicago.dataScience.nba.description;
  
  // Data Science - Altair
  document.getElementById('altair-description').innerHTML = siteData.uchicago.dataScience.altair.description;
  
  
}

/**
 * Render Leadership & Athletics Section
 */
function renderLeadership() {
  // Fraternity Roles
  const fraternityRoles = document.getElementById('fraternity-roles');
  fraternityRoles.innerHTML = siteData.leadership.fraternity.roles.map(role => `
    <div class="role-item">
      <div class="role-position">
        ${role.position}
        ${role.current ? '<span class="role-badge">Current</span>' : ''}
      </div>
      <div class="role-duration">${role.duration}</div>
    </div>
  `).join('');
  
  // Fraternity Description
  document.getElementById('fraternity-description').innerHTML = siteData.leadership.fraternity.description;
  
  // Baseball Achievements
  const baseballAchievements = document.getElementById('baseball-achievements');
  baseballAchievements.innerHTML = siteData.leadership.baseball.achievements.map(achievement => `
    <div class="achievement-item">
      <strong>${achievement.title}</strong>
      <p style="margin: 0.25rem 0 0 0; color: var(--color-text-light);">${achievement.description}</p>
    </div>
  `).join('');
  
  // Baseball Certifications
  const baseballCertifications = document.getElementById('baseball-certifications');
  baseballCertifications.innerHTML = siteData.leadership.baseball.certifications.map(cert => `
    <div class="certification-badge">
      <span>${cert.name} - ${cert.organization}</span>
    </div>
  `).join('');
  
  // Baseball Description
  document.getElementById('baseball-description').innerHTML = siteData.leadership.baseball.description;
}

/**
 * Render Contact Section
 */
function renderContact() {
  const emailLink = document.getElementById('contact-email');
  emailLink.textContent = siteData.contact.email;
  emailLink.href = `mailto:${siteData.contact.email}`;
  
  document.getElementById('contact-location').textContent = siteData.contact.location;
  
  const socialLinks = document.getElementById('social-links');
  socialLinks.innerHTML = siteData.contact.socialLinks.map(link => `
    <a href="${link.url}" class="social-link" target="_blank" rel="noopener">${link.label}</a>
  `).join('');
}

// ===========================
// INTERACTIVITY FUNCTIONS
// ===========================

/**
 * Initialize Navigation
 */
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Smooth scrolling
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        document.querySelector('.nav-links').classList.remove('active');
        document.querySelector('.mobile-menu-toggle').classList.remove('active');
      }
    });
  });
  
  // Highlight active section on scroll
  window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('.section, .hero');
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      
      if (window.pageYOffset >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
  
  // Experience card navigation
  const experienceCards = document.querySelectorAll('.experience-card');
  experienceCards.forEach(card => {
    card.addEventListener('click', function(e) {
      e.preventDefault();
      const targetHref = this.getAttribute('href');
      const targetSection = document.querySelector(targetHref);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Initialize Mobile Menu
 */
function initMobileMenu() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
}

/**
 * Initialize Video Players
 */
function initVideoPlayers() {
  const modal = document.getElementById('video-modal');
  const modalClose = document.querySelector('.modal-close');
  const modalOverlay = document.querySelector('.modal-overlay');
  
  // Video player click handlers
  const videoPlayers = document.querySelectorAll('.video-player');
  
  videoPlayers.forEach(player => {
    player.addEventListener('click', function() {
      const videoId = this.getAttribute('data-video-id');
      
      // Get video data based on ID
      let videoData = null;
      
      if (videoId === 'newsradar-video') {
        videoData = {
          title: siteData.argonne.newsradar.title,
          description: siteData.argonne.newsradar.description,
          videoType: siteData.argonne.newsradar.videoType,
          videoUrl: siteData.argonne.newsradar.videoUrl
        };
      }
      
      if (videoData) {
        openVideoModal(videoData);
      }
    });
  });
  
  // Close modal handlers
  modalClose.addEventListener('click', closeVideoModal);
  modalOverlay.addEventListener('click', closeVideoModal);
  
  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeVideoModal();
    }
  });
}

/**
 * Open Video Modal
 */
function openVideoModal(videoData) {
  const modal = document.getElementById('video-modal');
  
  // Set title and description
  document.getElementById('modal-title').textContent = videoData.title;
  document.getElementById('modal-description').innerHTML = videoData.description;
  
  // Set video
  const videoContainer = document.getElementById('modal-video-container');
  let videoHTML = '';
  
  if (videoData.videoType === 'youtube' || videoData.videoType === 'vimeo') {
    videoHTML = `<iframe src="${videoData.videoUrl}" allowfullscreen></iframe>`;
  } else if (videoData.videoType === 'file') {
    videoHTML = `<video src="${videoData.videoUrl}" controls></video>`;
  }
  
  videoContainer.innerHTML = videoHTML;
  
  // Show modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/**
 * Close Video Modal
 */
function closeVideoModal() {
  const modal = document.getElementById('video-modal');
  const videoContainer = document.getElementById('modal-video-container');
  
  // Clear video
  videoContainer.innerHTML = '';
  
  // Hide modal
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// ===========================
// UTILITY FUNCTIONS
// ===========================

/**
 * Smooth scroll to element
 */
function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}