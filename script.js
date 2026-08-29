const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const galleryGrid = document.getElementById('galleryGrid');
if (galleryGrid) {
  const galleryPhotos = [
        "495486530_122150352368522069_8029968753177175894_n.jpg",
        "495552444_122150352428522069_7124282124088259244_n.jpg",
        "495686727_122150352506522069_9032817216599991083_n.jpg",
        "497474457_122150352410522069_1055373039797307047_n.jpg",
        "497494518_122150352476522069_6936825225317363310_n.jpg",
        "499863531_122152328942522069_327717107657098947_n.jpg",
        "513916842_122158247168522069_8115615987239562429_n.jpg",
        "514100501_122158247246522069_506109405643796598_n.jpg",
        "514105636_122158247264522069_3676055035074869947_n.jpg",
        "514167339_122158247054522069_5106173339838611787_n.jpg",
        "514173760_122158247180522069_7714399121983884626_n.jpg",
        "514182469_122158247066522069_2547842412175837561_n.jpg",
        "514186124_122158247000522069_7355449636523503968_n.jpg",
        "514343883_122158247042522069_1384898832158339758_n.jpg",
        "514349055_122158247198522069_5088282675736830015_n.jpg",
        "514506388_122158247114522069_4090241402046013880_n.jpg",
        "514615434_122158247234522069_635305908110649918_n.jpg",
        "514658883_122158247012522069_377747165476027584_n.jpg",
        "683211879_122195461400522069_2985562922981426159_n.jpg",
        "692694154_122196424298522069_1120363250422419029_n.jpg",
        "709101481_122198759516522069_6735892679424052461_n.jpg",
        "710625343_122198759384522069_4362816111392581401_n.jpg",
        "711425757_122198759480522069_6208349419624959530_n.jpg",
        "711473858_122198759378522069_1808834130719708658_n.jpg",
        "711602163_122198759372522069_7696402507558341940_n.jpg",
        "773562526_122206181978522069_2036255967064875092_n.jpg",
        "774088279_122206182098522069_1274440782127826406_n.jpg",
        "774118095_122206181900522069_1741345467556345638_n.jpg",
        "775244266_122206181636522069_5584150485432307163_n.jpg",
        "775777922_122206181906522069_4888525804245585400_n.jpg",
        "776224173_122206181912522069_6743661842256168313_n.jpg",
        "778157290_122206182062522069_1503381917274966401_n.jpg",
        "IMG_0339-2048x1152.jpg",
        "WhatsApp Image 2026-08-29 at 01.08.01.jpeg",
        "WhatsApp Image 2026-08-29 at 01.08.01 (1).jpeg",
        "WhatsApp Image 2026-08-29 at 01.08.01 (2).jpeg",
        "WhatsApp Image 2026-08-29 at 01.08.01 (3).jpeg",
        "WhatsApp Image 2026-08-29 at 01.08.02.jpeg",
        "WhatsApp Image 2026-08-29 at 01.08.02 (1).jpeg",
        "WhatsApp Image 2026-08-29 at 01.08.02 (2).jpeg",
        "WhatsApp Image 2026-08-29 at 01.08.02 (3).jpeg",
        "WhatsApp Image 2026-08-29 at 01.08.02 (4).jpeg",
        "WhatsApp Image 2026-08-29 at 01.08.03.jpeg",
        "WhatsApp Image 2026-08-29 at 01.08.03 (1).jpeg",
        "WhatsApp Image 2026-08-29 at 01.09.49.jpeg",
        "WhatsApp Image 2026-08-29 at 01.09.49 (1).jpeg",
        "WhatsApp Image 2026-08-29 at 01.09.49 (2).jpeg",
        "WhatsApp Image 2026-08-29 at 01.09.49 (3).jpeg",
        "WhatsApp Image 2026-08-29 at 01.09.49 (4).jpeg",
        "WhatsApp Image 2026-08-29 at 01.09.50.jpeg"
  ];

  galleryGrid.innerHTML = galleryPhotos
    .map(
      (file) => `
        <figure class="photo-card">
          <img src="assets/gallery/${encodeURIComponent(file)}" alt="The Istirit Band live" loading="lazy" />
        </figure>`
    )
    .join('');
}

const posterGrid = document.getElementById('posterGrid');
if (posterGrid) {
  const posterPhotos = [
        "510530437_122157271058522069_8457401580208111734_n.jpg",
        "666884388_122193415244522069_8525446735865513744_n.jpg",
        "678930003_122194795598522069_4347792233601542783_n.jpg",
        "702589525_122197657178522069_2508819526418245430_n.jpg",
        "749161388_122203276508522069_8226494373518000257_n.jpg",
        "767301367_122205383834522069_5565059019757970901_n (1).jpg",
        "784619414_122207083520522069_7546756460447288121_n.jpg"
  ];

  posterGrid.innerHTML = posterPhotos
    .map(
      (file) => `
        <figure class="photo-card">
          <img src="assets/locandine/${encodeURIComponent(file)}" alt="Locandina concerto The Istirit Band" loading="lazy" />
        </figure>`
    )
    .join('');
}

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

if (lightbox && lightboxImg && lightboxClose) {
  document.querySelectorAll('.photo-card img').forEach((img) => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('is-open');
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('is-open');
    lightboxImg.src = '';
  };

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeLightbox();
    }
  });
}

// --- Musica di sottofondo continua tra le pagine ---
const siteAudio = document.getElementById('siteAudio');
const audioToggle = document.getElementById('audioToggle');

if (siteAudio && audioToggle) {
  const STATE_KEY = 'istiritAudioState'; // 'playing' | 'paused'
  const TIME_KEY = 'istiritAudioTime';

  const savedTime = parseFloat(sessionStorage.getItem(TIME_KEY) || '0');
  const savedState = sessionStorage.getItem(STATE_KEY);
  // Di default, dopo la prima interazione dell'utente, la musica riparte da sola.
  const shouldPlay = savedState === 'playing';

  const setToggleUI = (isPlaying) => {
    audioToggle.classList.toggle('is-playing', isPlaying);
    audioToggle.setAttribute('aria-pressed', String(isPlaying));
    audioToggle.title = isPlaying ? 'Disattiva musica' : 'Attiva musica';
  };

  const restoreTime = () => {
    if (savedTime > 0 && Number.isFinite(savedTime)) {
      try {
        siteAudio.currentTime = savedTime;
      } catch (err) {
        /* ignora se non ancora seekable */
      }
    }
  };

  if (siteAudio.readyState >= 1) {
    restoreTime();
  } else {
    siteAudio.addEventListener('loadedmetadata', restoreTime, { once: true });
  }

  if (shouldPlay) {
    const tryPlay = () => {
      siteAudio.play().then(() => setToggleUI(true)).catch(() => setToggleUI(false));
    };
    tryPlay();
  } else {
    setToggleUI(false);
  }

  audioToggle.addEventListener('click', () => {
    if (siteAudio.paused) {
      siteAudio.play()
        .then(() => {
          setToggleUI(true);
          sessionStorage.setItem(STATE_KEY, 'playing');
        })
        .catch(() => setToggleUI(false));
    } else {
      siteAudio.pause();
      setToggleUI(false);
      sessionStorage.setItem(STATE_KEY, 'paused');
    }
  });

  // Salva continuamente la posizione così il cambio pagina riprende da lì.
  siteAudio.addEventListener('timeupdate', () => {
    sessionStorage.setItem(TIME_KEY, String(siteAudio.currentTime));
  });

  window.addEventListener('pagehide', () => {
    sessionStorage.setItem(TIME_KEY, String(siteAudio.currentTime));
    sessionStorage.setItem(STATE_KEY, siteAudio.paused ? 'paused' : 'playing');
  });
}

const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = form.querySelector('button');
    if (button) {
      button.textContent = 'Richiesta inviata';
      button.disabled = true;
    }
  });
}
