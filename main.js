/* ═══════════════════════════════════════════════
   TIMELESS EVENTS — main.js
   Features:
   ✦ Page loader
   ✦ Navbar scroll + mobile menu
   ✦ Scroll reveal animations
   ✦ Theme category data + dynamic decor gallery
   ✦ Smooth scroll with offset
   ✦ Contact form feedback
═══════════════════════════════════════════════ */

'use strict';

/* ─────────────────────────────────────────────
   1. DECOR DATA
   Add / update image paths here as you add local
   images to your /images folder.
───────────────────────────────────────────────*/
const decorData = {
  birthday: {
    label:  'Birthday Celebrations',
    eyebrow: 'Birthday Theme',
    desc:   'From neon balloon walls to elegant floral setups — every birthday deserves its own magic.',
    images: [
      { src: 'images/birthday1.jpg', label: 'Balloon Wonderland' },
      { src: 'images/birthday2.jpg', label: 'Neon Party Vibes' },
      { src: 'images/birthday3.jpg', label: 'Floral Table Spread' },
      { src: 'images/birthday4.jpg', label: 'Glitter & Gold' },
      { src: 'images/birthday5.jpg', label: 'Pastel Dreams' },
      { src: 'images/birthday6.jpg', label: 'Milestone 50th' },
    ],
  },
  wedding: {
    label:  'Wedding Grandeur',
    eyebrow: 'Wedding Theme',
    desc:   'Mandaps, fairy-light ceilings, garden ceremonies and aisle magic — your perfect wedding awaits.',
    images: [
      { src: 'images/wedding1.jpg', label: 'Garden Ceremony' },
      { src: 'images/wedding2.jpg', label: 'Grand Mandap' },
      { src: 'images/wedding3.jpg', label: 'Fairy Light Ceiling' },
      { src: 'images/wedding4.jpg', label: 'Floral Aisle' },
      { src: 'images/wedding5.jpg', label: 'Royal Reception' },
      { src: 'images/wedding6.jpg', label: 'Poolside Sangeet' },
    ],
  },
  engagement: {
    label:  'Engagement Soirée',
    eyebrow: 'Engagement Theme',
    desc:   'Romantic arches, petal floors and candle-lit settings — the perfect backdrop for your yes.',
    images: [
      { src: 'images/engagement1.jpg', label: 'Rose Arch' },
      { src: 'images/engagement2.jpg', label: 'Candlelit Dinner' },
      { src: 'images/engagement3.jpg', label: 'Petal Floor Setup' },
      { src: 'images/engagement4.jpg', label: 'Terrace Twilight' },
      { src: 'images/engagement5.jpg', label: 'Balloon Backdrop' },
      { src: 'images/engagement6.jpg', label: 'Intimate Lounge' },
    ],
  },
  babyshower: {
    label:  'Baby Shower Magic',
    eyebrow: 'Baby Shower Theme',
    desc:   'Dreamy pastels, balloon clouds and whimsical forest themes — celebrating new beginnings.',
    images: [
      { src: 'images/babyshower1.jpg', label: 'Balloon Cloud' },
      { src: 'images/babyshower2.jpg', label: 'Pastel Rainbow' },
      { src: 'images/babyshower3.jpg', label: 'Enchanted Forest' },
      { src: 'images/babyshower4.jpg', label: 'Oh Baby!' },
      { src: 'images/babyshower5.jpg', label: 'Teddy Bear Garden' },
      { src: 'images/babyshower6.jpg', label: 'Stars & Moon' },
    ],
  },
  anniversary: {
    label:  'Anniversary Elegance',
    eyebrow: 'Anniversary Theme',
    desc:   'Timeless décor for silver, gold and milestone anniversary galas — love, celebrated beautifully.',
    images: [
      { src: 'images/anniversary1.jpg', label: 'Silver Jubilee' },
      { src: 'images/anniversary2.jpg', label: 'Golden Gala' },
      { src: 'images/anniversary3.jpg', label: 'Rooftop Romance' },
      { src: 'images/anniversary4.jpg', label: 'Floral Infinity' },
      { src: 'images/anniversary5.jpg', label: 'Classic Black Tie' },
      { src: 'images/anniversary6.jpg', label: 'Garden Anniversary' },
    ],
  },
  corporate: {
    label:  'Corporate Events',
    eyebrow: 'Corporate Theme',
    desc:   'Sleek conference setups, award nights and galas — your brand, elevated with refined aesthetics.',
    images: [
      { src: 'images/corporate1.jpg', label: 'Annual Gala' },
      { src: 'images/corporate2.jpg', label: 'Conference Setup' },
      { src: 'images/corporate3.jpg', label: 'Award Ceremony' },
      { src: 'images/corporate4.jpg', label: 'Product Launch' },
      { src: 'images/corporate5.jpg', label: 'Team Celebration' },
      { src: 'images/corporate6.jpg', label: 'Summit Branding' },
    ],
  },
};

/* ─────────────────────────────────────────────
   2. PAGE LOADER
───────────────────────────────────────────────*/
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (!loader) return;
  // Hide after animation completes (~2.2s)
  setTimeout(() => loader.classList.add('hidden'), 2200);
});

/* ─────────────────────────────────────────────
   3. NAVBAR — scroll state + mobile hamburger
───────────────────────────────────────────────*/
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

// Scroll: toggle .scrolled class
window.addEventListener('scroll', () => {
  if (!navbar) return;
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// Mobile menu toggle
hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

// Close menu when a link is clicked
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ─────────────────────────────────────────────
   4. SMOOTH SCROLL with navbar offset
───────────────────────────────────────────────*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const targetId = anchor.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (!target) return;
    e.preventDefault();
    const offset = navbar ? navbar.offsetHeight + 16 : 80;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ─────────────────────────────────────────────
   5. SCROLL REVEAL
───────────────────────────────────────────────*/
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger siblings in the same parent
        const siblings = [...entry.target.parentElement.querySelectorAll('.reveal')];
        const idx = siblings.indexOf(entry.target);
        setTimeout(() => entry.target.classList.add('visible'), idx * 90);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ─────────────────────────────────────────────
   6. DYNAMIC DECOR GALLERY
───────────────────────────────────────────────*/
const decorGallery = document.getElementById('decorGallery');
const decorGrid    = document.getElementById('decorGrid');
const decorTitle   = document.getElementById('decorTitle');
const decorEyebrow = document.getElementById('decorEyebrow');
const decorDesc    = document.getElementById('decorDesc');
const decorClose   = document.getElementById('decorClose');

let activeCategory = null;

/**
 * Build and show the sub-theme gallery for a given category key.
 * Falls back to a styled placeholder card if the image fails to load.
 */
function openDecorGallery(category) {
  const data = decorData[category];
  if (!data) return;

  // If same category is clicked again while open → close it
  if (activeCategory === category && decorGallery.classList.contains('open')) {
    closeDecorGallery();
    return;
  }

  activeCategory = category;

  // Update header text
  decorEyebrow.textContent = data.eyebrow;
  decorTitle.innerHTML     = `${data.label.split(' ')[0]} <em>Décor</em>`;
  decorDesc.textContent    = data.desc;

  // Build image grid
  decorGrid.innerHTML = '';
  data.images.forEach(({ src, label }) => {
    const card = document.createElement('div');
    card.className = 'decor-img-card';
    card.setAttribute('data-label', label);

    const img = document.createElement('img');
    img.alt = label;
    img.loading = 'lazy';
    img.src = src;

    // Handle missing images gracefully
    img.onerror = () => {
      card.classList.add('placeholder');
      card.innerHTML = `
        <div class="ph-icon">◈</div>
        <div class="ph-label">${label}</div>
      `;
    };

    card.appendChild(img);
    decorGrid.appendChild(card);
  });

  // Open section
  decorGallery.classList.add('open');

  // Scroll to gallery after it begins opening
  setTimeout(() => {
    const offset = navbar ? navbar.offsetHeight + 16 : 80;
    const top = decorGallery.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }, 100);
}

function closeDecorGallery() {
  decorGallery.classList.remove('open');
  activeCategory = null;

  // Scroll back up to themes section
  setTimeout(() => {
    const themesSection = document.getElementById('themes');
    if (!themesSection) return;
    const offset = navbar ? navbar.offsetHeight + 16 : 80;
    const top = themesSection.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }, 100);
}

// Attach click listeners to all "View Décor" buttons
document.querySelectorAll('.btn-view').forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.getAttribute('data-category');
    openDecorGallery(category);
  });
});

// Close button
decorClose?.addEventListener('click', closeDecorGallery);

// "Book This Theme" button inside gallery scrolls to contact
document.querySelector('.decor-book')?.addEventListener('click', e => {
  e.preventDefault();
  closeDecorGallery();
  setTimeout(() => {
    const contact = document.getElementById('contact');
    if (!contact) return;
    const offset = navbar ? navbar.offsetHeight + 16 : 80;
    const top = contact.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }, 500);
});

/* ─────────────────────────────────────────────
   7. CONTACT FORM — success feedback
───────────────────────────────────────────────*/
function handleSubmit(e) {
  e.preventDefault();
  const form    = e.target;
  const success = document.getElementById('formSuccess');
  const btn     = form.querySelector('.btn-submit');

  btn.textContent = 'Sending…';
  btn.disabled    = true;

  // Simulate async submission
  setTimeout(() => {
    if (success) success.classList.add('show');
    btn.textContent = 'Sent ✓';
    form.reset();

    // Reset after 5s
    setTimeout(() => {
      success?.classList.remove('show');
      btn.textContent = 'Send Enquiry →';
      btn.disabled    = false;
    }, 5000);
  }, 1200);
}

// Expose to inline onsubmit
window.handleSubmit = handleSubmit;

/* ─────────────────────────────────────────────
   8. SUBTLE PARALLAX on hero background
───────────────────────────────────────────────*/
const heroBg = document.querySelector('.hero-bg');
if (heroBg && window.matchMedia('(min-width: 769px)').matches) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    heroBg.style.transform = `translateY(${scrollY * 0.28}px)`;
  }, { passive: true });
}