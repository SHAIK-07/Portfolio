// Custom JavaScript for Shaik Hidaythulla's Portfolio

// Project Data Store for In-Depth Case Studies & Architectural Deep Dives
const projectData = {
    stocktics: {
        title: "Stocktics",
        tagline: "Quantitative Equity Research & ML Forecasting Platform",
        image: "images/proj_stocktics.png",
        badges: ["Python / FastAPI", "Jetpack Compose", "PyTorch / XGBoost", "Supabase / pgvector", "NSE / BSE / US"],
        problem: "Retail investors face fragmented tools—essential market data, deep forensic analysis, DCF valuation, and predictive signals are scattered across expensive institutional terminals (like Bloomberg) or siloed tools. Moreover, mainstream generative AI tools hallucinate financial figures and lack quantitative, backtested mathematical rigor.",
        solution: "Engineered an institutional-grade, end-to-end stock research and forecasting system for Indian (NSE/BSE) and US equities. Designed a disciplined 4-stage decision pipeline (Explore → Watchlist → Buy Pipeline → Sell/Exit Engine), forensic health checks (Beneish M-Score, Altman Z-Score), dynamic DCF valuation, and walk-forward backtested ML models (XGBoost, LSTM, Chronos) running on a FastAPI compute backend with a reactive Kotlin Jetpack Compose Android client.",
        features: [
            "Walk-forward backtested ML price & trend forecasting models (XGBoost, LSTM, Chronos).",
            "Automated forensic accounting scans (Beneish M-Score, Piotroski F-Score, Altman Z-Score).",
            "Interactive Discounted Cash Flow (DCF) & reverse DCF valuation models.",
            "Vector search over earnings call transcripts and quarterly filings via Supabase pgvector.",
            "Real-time CDC push notifications for watchlist scores, breakouts, and exit triggers."
        ],
        isPrivate: true,
        apkUrl: "assets/stocktics.apk",
        githubUrl: null,
        demoUrl: null
    },
    codepulse: {
        title: "CodePulse",
        tagline: "Real-Time Code Change Intelligence & Agent Visualization",
        image: "images/proj_codepulse.png",
        badges: ["Tree-sitter AST", "Python 3.11", "FastAPI", "React Flow", "WebSockets", "VS Code Extension"],
        problem: "As software engineers increasingly employ autonomous AI coding agents (Claude Code, Cursor, Codex, Antigravity), agents perform sweeping multi-file edits across complex codebases. Developers lack real-time visibility into what symbols mutated, why changes were made, and their downstream blast radius on existing tests and dependencies before committing.",
        solution: "Developed an open-source, local-first code change intelligence platform. Combines Tree-sitter AST parsing across Python, JS/TS, and Java to track symbol-level mutations, NetworkX for multi-hop blast-radius impact analysis, a React Flow interactive visual DAG, and a lightweight VS Code extension with safe rollback capabilities.",
        features: [
            "Language-agnostic Tree-sitter structural AST parser extracting functions, classes, and call graphs.",
            "Deterministic symbol-level diffing isolated from superficial formatting changes.",
            "Real-time blast-radius calculation computing impacted tests and risk scores (Low to Critical).",
            "Evidence-grounded 3-part change explanations (What changed, Why, Impact).",
            "Surgical Git rollback restoring rejected symbols while preserving unrelated manual edits."
        ],
        isPrivate: false,
        githubUrl: "https://github.com/TestAccount-04/codepulse",
        demoUrl: null,
        apkUrl: null
    },
    bvdashboard: {
        title: "AuthPost Studio (bv-dashboard)",
        tagline: "Autonomous Short-Form Video Ops & Multi-Platform Publisher",
        image: "images/proj_bvdashboard.png",
        badges: ["Next.js 14", "Prisma ORM", "BullMQ", "YouTube Data API v3", "Meta Graph API", "Model Context Protocol (MCP)"],
        problem: "Running a high-cadence media network across multiple brand channels on YouTube Shorts and Instagram Reels requires manual scripting, video rendering, thumbnailing, and scheduling. Third-party SaaS automation tools impose strict rate limits and lack human-in-the-loop quality guardrails before AI media goes live.",
        solution: "Architected a self-hosted, autonomous media operations platform powering 4 distinct channel brands. Built around a Human-in-the-Loop (HITL) philosophy where Claude drafts high-retention video scripts via MCP, a human director inspects and approves 9:16 previews in the web dashboard, and native YouTube and Meta API dispatchers handle direct video publishing and analytics tracking.",
        features: [
            "Operates 4 synchronized channel brands across 8 authenticated YouTube & Instagram accounts.",
            "Human-in-the-Loop Approval Center (/approvals) ensuring 100% human oversight before broadcast.",
            "Native zero-SaaS direct dispatchers for YouTube Data API v3 and Meta Graph API.",
            "Automated video generation pipeline with voice synthesis and subtitle transcription.",
            "Real-time retention curve and engagement analytics coaching future content generation."
        ],
        isPrivate: true,
        githubUrl: null,
        demoUrl: null,
        apkUrl: null
    },
    aihub: {
        title: "AI-HUB",
        tagline: "AI Tool Intelligence & Decision Platform",
        image: "images/proj_aihub.png",
        badges: ["FastAPI", "React", "React Native / Expo", "Supabase", "PostgreSQL", "Tailwind CSS"],
        problem: "With thousands of AI tools launching each month, developers and businesses struggle with marketing hype, paid directory rankings, and sponsored reviews. Finding which AI tool genuinely solves a specific production problem requires costly trial and error.",
        solution: "Built a decision-first platform that replaces marketing hype with verified use cases, transparent benchmark scores, and community-tested evaluations. Offers both a responsive React web portal and an Expo React Native mobile application powered by a FastAPI and Supabase backend.",
        features: [
            "Objective evaluation matrix categorizing tools by real capability, speed, and cost efficiency.",
            "Community-driven review verification preventing fake and sponsored ratings.",
            "Interactive decision funnel guiding users step-by-step to the best tool for their exact workflow.",
            "Cross-platform support across Web, Android, and iOS via a unified FastAPI backend."
        ],
        isPrivate: true,
        githubUrl: null,
        demoUrl: null,
        apkUrl: null
    },
    dayflow: {
        title: "DayFlow",
        tagline: "Offline-First Daily Routine & Timeline Operating System",
        image: "images/proj_dayflow.png",
        badges: ["Android", "Kotlin", "Jetpack Compose", "Room DB", "Glance AppWidgets", "Storage Access Framework (SAF)"],
        problem: "Most habit and routine tracking apps require mandatory cloud subscriptions, frequently lose historical records upon app updates, and lack interactive home-screen widgets for quick 1-tap task execution throughout the day.",
        solution: "Created an offline-first, native Android daily planning and routine operating system using Kotlin and Jetpack Compose. Features interactive Glance AppWidgets for live timeline tracking and habit streaks, zero cloud dependencies for total user privacy, and automated backup/restore using Android Storage Access Framework (SAF).",
        features: [
            "Offline-first local architecture using Room DB and DataStore with zero data collection.",
            "Interactive Jetpack Glance Home-Screen Widgets with live task countdowns and 1-tap completion.",
            "Automated scheduled SAF backups safe against accidental app uninstalls.",
            "Habit streak consistency metrics, timeline pacing, and routine completion tracking."
        ],
        isPrivate: true,
        apkUrl: "assets/dayflow.apk",
        githubUrl: null,
        demoUrl: null
    },
    finapp: {
        title: "FinApp",
        tagline: "AI-Powered Mobile Financial Co-Pilot",
        image: "images/finapp_hero.png",
        badges: ["React Native", "Expo", "Groq AI / LLM", "Android SAF", "SMS Automation"],
        problem: "Manual expense logging is tedious, causing users to abandon personal finance trackers within weeks. Meanwhile, cloud-hosted finance apps raise significant user privacy concerns by transmitting sensitive bank SMS and expense data to remote servers.",
        solution: "Engineered a local-first mobile personal finance application with automated Android SMS transaction parsing, local categorization, Groq-powered contextual spending advice, and automated SAF daily backups.",
        features: [
            "Automated background SMS transaction detection and smart expense classification.",
            "Privacy-first on-device transaction parsing with zero cloud leakage of bank data.",
            "Groq-powered high-speed AI financial assistant providing budget coaching and alerts.",
            "Automated daily SAF backups for easy restore."
        ],
        isPrivate: true,
        apkUrl: "https://github.com/SHAIK-07/Portfolio/releases/latest/download/fin-app-pre.apk",
        githubUrl: null,
        demoUrl: null
    },
    askrepo: {
        title: "Ask-Repo",
        tagline: "AI-Powered Repository Comprehension & Code Q&A",
        image: "images/proj_7.png",
        badges: ["Google Gemini LLM", "Python", "LangChain", "Streamlit", "GitHub API"],
        problem: "Understanding large, unfamiliar GitHub codebases requires developers to manually parse dozens of files, trace call stacks, and decipher inconsistent documentation.",
        solution: "Developed an AI-powered code analysis tool leveraging Google's Gemini LLM and LangChain. Scans GitHub repositories, generates semantic embeddings of source files, and allows developers to query the codebase conversationally in plain English.",
        features: [
            "One-click GitHub repository cloning, ingestion, and AST-aware chunking.",
            "Gemini LLM semantic retrieval answering complex architectural and logic questions.",
            "Interactive Streamlit web interface with real-time streaming responses."
        ],
        isPrivate: false,
        githubUrl: "https://github.com/SHAIK-07/Ask-Repo",
        demoUrl: null,
        apkUrl: null
    },
    movierecommender: {
        title: "Movie Recommender System",
        tagline: "Content-Based Similarity Recommendation Engine",
        image: "images/proj_3.webp",
        badges: ["Python", "Machine Learning", "NLP Cosine Similarity", "Streamlit", "TMDB API"],
        problem: "Users spend significant time searching for films matching specific narrative themes, character dynamics, and director styles, which broad genre categories fail to capture.",
        solution: "Built a content-based recommendation system that analyzes textual features (tags, cast, director, plot overviews) using vectorization and cosine similarity, augmented with real-time TMDB API metadata and poster rendering on Streamlit.",
        features: [
            "NLP text preprocessing and vector cosine similarity scoring.",
            "Dynamic poster and rating retrieval via TMDB API integration.",
            "Deployed interactive web application on Streamlit Cloud."
        ],
        isPrivate: false,
        githubUrl: "https://github.com/SHAIK-07/movie-recommendation-/blob/main/README.md",
        demoUrl: "https://movie-recommendation-m.streamlit.app/",
        apkUrl: null
    },
    sunmax: {
        title: "Sunmax Renewables Management System",
        tagline: "Integrated Solar Business Operations & ERP Suite",
        image: "images/proj_6.png",
        badges: ["Python", "ERP Architecture", "SQL Database", "PDF Invoicing", "Lead Management"],
        problem: "Rapidly growing solar and renewable energy companies face operational bottlenecks when managing field equipment inventory, tracking customer pipeline leads, and generating GST-compliant quotations across disjointed spreadsheets.",
        solution: "Created an end-to-end business management application specifically designed for solar installation firms. Streamlines customer inquiry tracking, inventory control, automated quotation generation, and official GST invoice generation.",
        features: [
            "Solar panel and inverter hardware inventory management with low-stock alerts.",
            "Automated quotation generator calculating solar capacity, battery backups, and costs.",
            "GST-compliant PDF invoice creation and payment tracking.",
            "Customer inquiry pipeline and follow-up management."
        ],
        isPrivate: false,
        githubUrl: "https://github.com/SHAIK-07/tool",
        demoUrl: null,
        apkUrl: null
    },
    mlsuperapp: {
        title: "ML_SUPER_APP",
        tagline: "No-Code Automated Machine Learning Platform",
        image: "images/proj_1.webp",
        badges: ["Python", "AutoML", "Scikit-learn", "Streamlit", "Pandas"],
        problem: "Data analysts and domain experts often lack the deep data science coding background required to clean datasets, benchmark multiple algorithms, tune hyperparameters, and deploy predictive models.",
        solution: "Built a full-featured AutoML platform on Streamlit that guides users from raw CSV/Excel upload through automated data profiling, feature encoding, algorithm benchmarking (Classification & Regression), and one-click model evaluation.",
        features: [
            "Automated EDA with correlation heatmaps, missing value imputation, and distribution plots.",
            "Automated model tournament training multiple algorithms (RandomForest, XGBoost, Logistic Regression, etc.).",
            "Model evaluation dashboards with ROC-AUC, confusion matrices, and feature importance.",
            "Interactive prediction playground for live testing with new inputs."
        ],
        isPrivate: false,
        githubUrl: "https://github.com/SHAIK-07/ML_SUPER_APP/blob/main/README.md",
        demoUrl: "https://mlsuperapp-nwx5guce9masdhsycxzchu.streamlit.app/",
        apkUrl: null
    },
    nlpsuperapp: {
        title: "NLP_SUPER_APP",
        tagline: "Multi-Functional Natural Language Processing Workbench",
        image: "images/proj_2.webp",
        badges: ["Python", "NLP", "NLTK", "Spacy", "Transformers", "Streamlit"],
        problem: "Developers and researchers frequently need to perform disparate NLP tasks (sentiment analysis, named entity extraction, summarization, keyword extraction) and must write repetitive boilerplate code for each.",
        solution: "Engineered an all-in-one NLP application unifying major language processing tasks into a clean, modern web interface. Built with NLTK, Spacy, and transformer pipelines deployed on Streamlit.",
        features: [
            "Sentiment analysis with polarity and subjectivity scoring.",
            "Named Entity Recognition (NER) highlighting people, organizations, and dates.",
            "Extractive and abstractive text summarization.",
            "Word cloud generation and linguistic token analysis."
        ],
        isPrivate: false,
        githubUrl: "https://github.com/SHAIK-07/NLP-Super-APP/blob/main/README.md",
        demoUrl: "https://nlp-super-app-ditdbcfptlgwd7ee4crsth.streamlit.app/",
        apkUrl: null
    },
    socialmedia: {
        title: "Social Media Data Analysis",
        tagline: "Relational Analytics & User Engagement Modeling",
        image: "images/proj_4.jpeg",
        badges: ["SQL", "Relational Database Design", "Window Functions", "Data Modeling"],
        problem: "Social media networks generate complex relational schemas (users, posts, follows, comments, hashtags). Deriving actionable metrics on retention, engagement drop-offs, and viral content patterns requires advanced query optimization.",
        solution: "Designed and queried a simulated multi-table social media schema to extract deep behavioral analytics. Utilized CTEs, window functions, and multi-table joins to isolate engagement trends and identify bot activity.",
        features: [
            "Cohort analysis tracking user registration cohorts and long-term engagement.",
            "Hashtag virality and engagement rate calculations.",
            "Bot detection algorithms identifying users with abnormal activity patterns.",
            "Optimized query execution plans for multi-table relational joins."
        ],
        isPrivate: false,
        githubUrl: "https://github.com/SHAIK-07/Social-Media-Data-Analysis-Using-SQL/blob/main/README.md",
        demoUrl: null,
        apkUrl: null
    },
    amazonsales: {
        title: "Amazon Sales Analysis",
        tagline: "E-Commerce Business Intelligence & RFM Segmentation",
        image: "images/proj_5.jpeg",
        badges: ["SQL", "Power BI", "Business Intelligence", "RFM Segmentation", "Retail Analytics"],
        problem: "Large e-commerce sales datasets contain hundreds of thousands of transactions. Retail executives need clear answers on top-performing product categories, customer lifetime value, and seasonal revenue trends to optimize procurement.",
        solution: "Conducted an in-depth analytical study of Amazon retail sales data using SQL and Power BI. Engineered RFM customer segmentation queries, identified profit drivers across product categories, and created executive BI dashboards.",
        features: [
            "RFM customer segmentation categorizing buyers into loyal, high-spenders, and at-risk cohorts.",
            "Revenue trend analysis identifying peak seasonal sales periods and geographic hotspots.",
            "Product margin and return rate correlation analysis.",
            "Interactive data visualizations modeling key business KPIs."
        ],
        isPrivate: false,
        githubUrl: "https://github.com/SHAIK-07/Amazon-Sales-Analysis-Project-using-SQL.git",
        demoUrl: null,
        apkUrl: null
    }
};

// Global Modal Open & Close Functions
window.openProjectModal = function (projectId) {
    const data = projectData[projectId];
    if (!data) return;

    const modal = document.getElementById('projectModal');
    if (!modal) return;

    // Populate data
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalTagline').textContent = data.tagline;
    document.getElementById('modalImage').src = data.image;
    document.getElementById('modalImage').alt = data.title;
    document.getElementById('modalProblem').textContent = data.problem;
    document.getElementById('modalSolution').textContent = data.solution;

    // Badges
    const badgesContainer = document.getElementById('modalBadges');
    badgesContainer.innerHTML = '';
    data.badges.forEach(badge => {
        const span = document.createElement('span');
        span.className = 'tech-badge';
        span.textContent = badge;
        badgesContainer.appendChild(span);
    });

    // Features
    const featuresList = document.getElementById('modalFeatures');
    featuresList.innerHTML = '';
    data.features.forEach(feat => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-check-circle"></i> <span>${feat}</span>`;
        featuresList.appendChild(li);
    });

    // Actions
    const actionsContainer = document.getElementById('modalActions');
    actionsContainer.innerHTML = '';

    // Public GitHub vs Private Repo Indicator
    if (data.isPrivate) {
        const privateBadge = document.createElement('span');
        privateBadge.className = 'private-repo-pill';
        privateBadge.innerHTML = '<i class="fas fa-lock"></i> Proprietary / Enterprise Codebase';
        actionsContainer.appendChild(privateBadge);
    } else if (data.githubUrl) {
        const ghBtn = document.createElement('a');
        ghBtn.href = data.githubUrl;
        ghBtn.target = '_blank';
        ghBtn.rel = 'noopener';
        ghBtn.className = 'btn btn-secondary';
        ghBtn.innerHTML = '<i class="fab fa-github mr-2"></i>View GitHub';
        actionsContainer.appendChild(ghBtn);
    }

    // APK Download
    if (data.apkUrl) {
        const apkBtn = document.createElement('a');
        apkBtn.href = data.apkUrl;
        apkBtn.download = '';
        apkBtn.className = 'btn btn-primary';
        apkBtn.innerHTML = '<i class="fas fa-download mr-2"></i>Download APK';
        actionsContainer.appendChild(apkBtn);
    }

    // Live Demo
    if (data.demoUrl) {
        const demoBtn = document.createElement('a');
        demoBtn.href = data.demoUrl;
        demoBtn.target = '_blank';
        demoBtn.rel = 'noopener';
        demoBtn.className = 'btn btn-primary';
        demoBtn.innerHTML = '<i class="fas fa-external-link-alt mr-2"></i>Live Demo';
        actionsContainer.appendChild(demoBtn);
    }

    // Contact CTA Button for everyone, especially private repos
    const contactBtn = document.createElement('a');
    contactBtn.href = '#contact-section';
    contactBtn.className = 'btn btn-discuss-build';
    contactBtn.innerHTML = '<i class="fas fa-handshake mr-2"></i>Discuss or Build Similar Project';
    contactBtn.onclick = function () {
        window.closeProjectModal();
    };
    actionsContainer.appendChild(contactBtn);

    // Show modal & prevent background scroll
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
};

window.closeProjectModal = function () {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
};

window.handleBackdropClick = function (e) {
    if (e.target && e.target.id === 'projectModal') {
        window.closeProjectModal();
    }
};

// Keyboard escape key listener
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        window.closeProjectModal();
    }
});

// DOMContentLoaded Initializations
document.addEventListener('DOMContentLoaded', function () {
    // 1. Initialize progress bars if any
    const progressBars = document.querySelectorAll('.progress-bar[data-width]');
    progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
    });

    // 2. Initialize project carousel
    if ($('.project-carousel').length > 0) {
        $('.project-carousel').owlCarousel({
            center: false,
            loop: true,
            items: 1,
            margin: 25,
            stagePadding: 0,
            autoplay: true,
            autoplayTimeout: 60000, // 1 minute in milliseconds
            autoplayHoverPause: true,
            nav: true,
            navText: [
                '<i class="fas fa-chevron-left"></i>',
                '<i class="fas fa-chevron-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    dots: true
                },
                768: {
                    items: 2,
                    nav: true,
                    dots: true
                },
                1024: {
                    items: 3,
                    nav: true,
                    dots: true
                }
            }
        });
    }

    // 3. Initialize project card images with correct extensions
    const projectImages = document.querySelectorAll('.block-20[data-bg]');
    projectImages.forEach(image => {
        const bgName = image.getAttribute('data-bg');
        let extension = 'jpeg';

        if (bgName === 'proj_1' || bgName === 'proj_2' || bgName === 'proj_3') {
            extension = 'webp';
        } else if (bgName === 'proj_4' || bgName === 'proj_5') {
            extension = 'jpeg';
        } else {
            extension = 'png';
        }

        image.style.backgroundImage = `url('images/${bgName}.${extension}')`;
    });

    // 4. Staggered subtle animation for tech badges
    const techBadges = document.querySelectorAll('.tech-badge');
    techBadges.forEach((badge, index) => {
        badge.style.animationDelay = `${index * 0.05}s`;
    });

    // 5. Back to top button visibility and smooth scroll
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 400) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 6. Mobile navbar: auto-close collapse on link click
    $('.navbar-nav .nav-link').on('click', function () {
        if ($('.navbar-collapse').hasClass('show')) {
            $('.navbar-collapse').collapse('hide');
            $('.js-fh5co-nav-toggle').removeClass('active');
        }
    });

    // 7. Smooth scrolling for internal anchor links (excluding # alone)
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 8. Active class sync on scroll for nav items
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.pageYOffset + 220;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.navbar-nav a.nav-link').forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href && href === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});
