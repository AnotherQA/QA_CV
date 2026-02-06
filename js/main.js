import translations from './translations.js';

// DOM Elements
const html = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');

// Mobile Elements
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
const mobileLangToggle = document.getElementById('mobile-lang-toggle');

// State
let currentLang = 'es';
let currentProjectIndex = null; // Track open project

// --- Helper Functions ---
function getNestedTranslation(obj, key) {
    return key.split('.').reduce((o, i) => (o ? o[i] : null), obj);
}

// --- Theme Logic ---
const savedTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemTheme)) {
    html.classList.add('dark');
} else {
    html.classList.remove('dark');
}

const toggleTheme = () => {
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
};

if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
if (mobileThemeToggle) mobileThemeToggle.addEventListener('click', toggleTheme);

// --- Mobile Menu Logic ---
if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// --- Language Logic ---
const updateLanguageContent = (lang) => {
    currentLang = lang;
    const buttonText = lang === 'es' ? 'EN' : 'ES'; // If current is ES, button shows option to switch to EN

    if (langToggle) langToggle.textContent = buttonText;
    if (mobileLangToggle) mobileLangToggle.textContent = buttonText;

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedTranslation(translations[lang], key);

        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.hasAttribute('placeholder')) {
                    element.placeholder = translation;
                }
            } else {
                element.textContent = translation;
            }
        }
    });

    // Hide bug hunt feedback on language switch to avoid mixed languages
    const bugFeedback = document.getElementById('bug-feedback');
    if (bugFeedback) {
        bugFeedback.classList.add('hidden');
        bugFeedback.textContent = '';
    }

    // Refresh Modal if open
    if (currentProjectIndex !== null) {
        openProjectModal(currentProjectIndex);
    }
};

const toggleLanguage = () => {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    updateLanguageContent(newLang);
};

if (langToggle) langToggle.addEventListener('click', toggleLanguage);
if (mobileLangToggle) mobileLangToggle.addEventListener('click', toggleLanguage);

// Initialize Language
updateLanguageContent(currentLang);

// --- Contact Form Handling ---
const contactForm = document.getElementById('contact-form');
const successModal = document.getElementById('success-modal');

// Modal Helpers
function showModal() {
    if (!successModal) return;
    successModal.classList.remove('opacity-0', 'pointer-events-none');
    successModal.querySelector('div.relative').classList.remove('scale-95');
    successModal.querySelector('div.relative').classList.add('scale-100');
}

function hideModal() {
    if (!successModal) return;
    successModal.classList.add('opacity-0', 'pointer-events-none');
    successModal.querySelector('div.relative').classList.add('scale-95');
    successModal.querySelector('div.relative').classList.remove('scale-100');
}

if (successModal) {
    successModal.addEventListener('click', (e) => {
        if (e.target === successModal) hideModal();
    });
    // Close buttons inside modal
    const closeBtns = successModal.querySelectorAll('button');
    closeBtns.forEach(btn => btn.addEventListener('click', hideModal));
}

if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;

        submitBtn.disabled = true;
        submitBtn.textContent = "Enviando...";

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                form.reset();
                showModal();
            } else {
                alert("Hubo un error al enviar el mensaje. Por favor intenta de nuevo.");
            }
        } catch (error) {
            alert("Hubo un error de conexión.");
        } finally {
            submitBtn.disabled = false;
            // Restore text based on current lang
            if (translations[currentLang] && translations[currentLang].contact && translations[currentLang].contact.form) {
                submitBtn.textContent = translations[currentLang].contact.form.send;
            } else {
                submitBtn.textContent = originalBtnText;
            }
        }
    });
}

// --- Bug Hunt Logic ---
const btnBugVerify = document.getElementById('btn-bug-verify');
const inputBugEmail = document.getElementById('bug-email');
const feedbackBug = document.getElementById('bug-feedback');

if (btnBugVerify && inputBugEmail && feedbackBug) {
    btnBugVerify.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent accidental submit
        const val = inputBugEmail.value.trim();
        const current = translations[currentLang].bughunt;

        // Reset classes
        feedbackBug.className = 'text-sm p-3 rounded-lg text-left mt-2 block';

        // Logic Validator
        if (!val.includes('@')) {
            // Error: No @
            feedbackBug.textContent = current.error_at;
            feedbackBug.classList.add('bg-red-50', 'text-red-700', 'dark:bg-red-900/20', 'dark:text-red-400');
        } else if (val.includes('.') && val.split('.').pop().length >= 2) {
            // "Valid" email (e.g. test@test.com) -> FAIL (System shouldn't accept just any valid email, we want the BUG)
            feedbackBug.textContent = current.fail;
            feedbackBug.classList.add('bg-red-50', 'text-red-700', 'dark:bg-red-900/20', 'dark:text-red-400');
        } else {
            // Has @ but NO valid domain extension -> BUG FOUND!
            feedbackBug.textContent = current.success;
            feedbackBug.classList.add('bg-green-50', 'text-green-700', 'dark:bg-green-900/20', 'dark:text-green-400');
        }
    });
}

// --- Smooth Scrolling & Back to Top ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const backToTopBtn = document.getElementById('back-to-top');
if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        } else {
            backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// --- Project Details Modal Logic ---
const projectModal = document.getElementById('project-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalPurposeTitle = document.getElementById('modal-purpose-title');
const modalPurposeText = document.getElementById('modal-purpose-text');
const modalBasicTitle = document.getElementById('modal-basic-title');
const modalBasicText = document.getElementById('modal-basic-text');
const modalScopeTitle = document.getElementById('modal-scope-title');
const modalScopeList = document.getElementById('modal-scope-list');
const modalVideoTitle = document.getElementById('modal-video-title');
const modalVideoDesc = document.getElementById('modal-video-desc');
const modalVideoFrame = document.getElementById('modal-video-frame');
const modalEvidenceTitle = document.getElementById('modal-evidence-title');
const modalEvidenceText = document.getElementById('modal-evidence-text');

function openProjectModal(index) {
    currentProjectIndex = index;
    const projectData = translations[currentLang].projects.items[index];
    if (!projectData) return;

    // Populate content
    modalTitle.textContent = projectData.title;
    modalDesc.innerHTML = projectData.long_desc; // Use innerHTML for potential bolding if needed, though mostly text

    modalPurposeTitle.textContent = projectData.purpose_title;
    modalPurposeText.innerHTML = projectData.purpose_text;

    modalBasicTitle.textContent = projectData.basic_title;
    modalBasicText.innerHTML = projectData.basic_text;

    modalScopeTitle.textContent = projectData.scope_title;
    // Clear and rebuild scope list
    modalScopeList.innerHTML = '';
    if (projectData.scope_items && Array.isArray(projectData.scope_items)) {
        projectData.scope_items.forEach(item => {
            const li = document.createElement('li');
            li.className = 'flex items-start bg-gray-50 dark:bg-gray-800 p-3 rounded-lg text-sm text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-gray-700';
            li.innerHTML = `<span class="mr-2 text-green-500">✓</span> ${item}`;
            modalScopeList.appendChild(li);
        });
    }

    modalVideoTitle.textContent = projectData.video_title;
    modalVideoDesc.textContent = projectData.video_desc;
    // TODO: Set actual video URL when available. For now, empty or placeholder.
    // modalVideoFrame.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?si=..."; 
    modalVideoFrame.src = ""; // Keep empty for now or use a placeholder if preferred

    modalEvidenceTitle.textContent = projectData.evidence_title;

    // Render Downloads Buttons
    modalEvidenceText.innerHTML = '';
    if (projectData.downloads && Array.isArray(projectData.downloads)) {
        const btnContainer = document.createElement('div');
        btnContainer.className = 'flex flex-wrap gap-4';

        projectData.downloads.forEach(dl => {
            const btn = document.createElement('a');
            btn.href = dl.url;
            btn.className = 'inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors text-gray-700 dark:text-gray-200 shadow-sm';
            btn.innerHTML = `<i data-lucide="${dl.icon}" class="w-4 h-4"></i> ${dl.text}`;
            btnContainer.appendChild(btn);
        });
        modalEvidenceText.appendChild(btnContainer);

        // Re-init icons for new elements
        if (window.lucide) window.lucide.createIcons();
    } else {
        modalEvidenceText.innerHTML = projectData.evidence_text || '';
    }

    // Show Modal
    if (projectModal) {
        projectModal.classList.remove('opacity-0', 'pointer-events-none');
        projectModal.querySelector('div.relative').classList.remove('scale-95');
        projectModal.querySelector('div.relative').classList.add('scale-100');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeProjectModal() {
    currentProjectIndex = null;
    if (projectModal) {
        projectModal.classList.add('opacity-0', 'pointer-events-none');
        projectModal.querySelector('div.relative').classList.add('scale-95');
        projectModal.querySelector('div.relative').classList.remove('scale-100');
        document.body.style.overflow = ''; // Restore scrolling

        // Stop video
        if (modalVideoFrame) modalVideoFrame.src = "";
    }
}

// Event Listeners
document.querySelectorAll('.js-view-demo').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const index = e.currentTarget.getAttribute('data-project-index');
        openProjectModal(parseInt(index));
    });
});

if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);

if (projectModal) {
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) closeProjectModal();
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !projectModal.classList.contains('opacity-0')) {
            closeProjectModal();
        }
    });
}

