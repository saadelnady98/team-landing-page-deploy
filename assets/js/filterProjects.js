document.addEventListener("DOMContentLoaded", () => {

    const projects = [
        {
            title: "Seven Continents ",
            description: { ar: "شركة وساطة عقارية رائدة في دبي، تقدم خدمات احترافية للعقارات السكنية والتجارية.", en: "A leading Dubai real estate brokerage offering expert services across residential and commercial properties. " },
            image: "assets/images/seven continents.png",
            category: "Web Development",
            type: "web",
            link: "https://sevencontinentsuae.com/en"
        },
        {
            title: "Luxury Living Homes ",
            description: { ar: "شركة عقارية في دبي متخصصة في العقارات الفاخرة، وتقدم حلولًا مخصصة للعملاء.", en: "A luxury-focused real estate brokerage in Dubai delivering personalized, high-end property solutions." },
            image: "assets/images/luxury.png",
            category: "Web Development",
            type: "web",
            link: "https://luxurylivinghomes.ae/en"
        },
        {
            title: "Paradise Group ",
            description: { ar: "مجموعة ضيافة سعودية تدير فنادق متميزة للحجاج والمسافرين، بخبرة تتجاوز 15 عامًا.", en: "A Saudi hospitality group managing premium hotels for pilgrims and travelers with over 15 years of experience. " },
            image: "assets/images/paradise.png",
            category: "Web Development",
            type: "web",
            link: ""
        },
        {
            title: "Nawaya Al Khair ",
            description: { ar: "مؤسسة سعودية توفر أثاثًا مدرسيًا حديثًا وعالي الجودة لمختلف المراحل التعليمية.", en: "A Saudi company providing modern, high-quality school furniture for all educational stages. " },
            image: "assets/images/nawaya.png",
            category: "Web Development",
            type: "web",
            link: "https://nawayaalkhair.com/"
        },
        {
            title: "Opus Glass ",
            description: { ar: "شركة إماراتية متخصصة في حلول أفلام الزجاج المتطورة والعصرية.", en: "A UAE company specializing in advanced and stylish glass film solutions. " },
            image: "assets/images/opus.png",
            category: "Web Development",
            type: "web",
            link: ""
        },
        {
            title: "Roia Glass",
            description: { ar: "علامة تجارية متخصصة في حلول أفلام الزجاج الذكية والمبتكرة.", en: " A smart film brand delivering innovative digital glass film solutions." },
            image: "assets/images/roia.png",
            category: "Web Development",
            type: "web",
            link: "https://roia.ae/"
        },
        {
            title: "Takarli & Co",
            description: { ar: "شركة عقارية في دبي تقدم خدمات موثوقة للعقارات السكنية والتجارية.", en: " A Dubai real estate company offering reliable residential and commercial property services" },
            image: "assets/images/takarli.png",
            category: "Web Development",
            type: "web",
            link: "https://takarli.ae/"
        },
        {
            title: "Agilova",
            description: { ar: "منصة عقارية في دبي تقدم حلولًا حديثة وسهلة الاستخدام للعقارات.", en: "  A Dubai-based real estate platform offering modern and user-friendly property solutions." },
            image: "assets/images/agilova.png",
            category: "Web Development",
            type: "web",
            link: "https://agilova.com/"
        },
        {
            title: "Dorra Taiba",
            description: { ar: "علامة ضيافة سعودية فاخرة توفر إقامة مريحة وخدمات ضيافة متميزة.", en: "A premium Saudi hospitality brand offering comfortable stays and excellent guest services." },
            image: "assets/images/dorra-taiba.png",
            category: "Web Development",
            type: "web",
            link: "https://dorrattaybah.com/en"
        },
        {
            title: "R&H Capital",
            description: { ar: "شركة عقارية في دبي تقدم خدمات احترافية وتجربة معاملات عقارية سلسة.", en: "A Dubai real estate company delivering professional services and smooth property transactions." },
            image: "assets/images/rh_capital.png",
            category: "Web Development",
            type: "web",
            link: "https://rhcapital.ae/en"
        },
        // ============================================== Mobile application
        {
            title: "Remontada FC ",
            description: { ar: " تطبيق تعليمي ترفيهي لكرة القدم في السعودية، يساعد اللاعبين الشباب على تطوير مهاراتهم الكروية.", en: "A fun educational football app in Saudi Arabia that helps young players develop their skills." },
            image: "assets/images/work4.jpg",
            category: "Mobile application",
            type: "mobile",
            link: "https://remontadafc.com/"
        },
        {
            title: "Motawef ",
            description: { ar: "تطبيق خدمي لدعم الحجاج الدوليين، يسهّل تنسيق وإدارة رحلتهم خلال موسم الحج.", en: " A service app supporting international pilgrims with seamless coordination during Hajj. " },
            image: "assets/images/work4.jpg",
            category: "Mobile application",
            type: "mobile",
            link: "https://play.google.com/store/apps/details?id=com.almotawefeen1"
        },
        {
            title: "Muslim",
            description: { ar: "تطبيق إسلامي شامل يدعم العبادة اليومية والنمو الروحي.", en: " An all-in-one Islamic app supporting daily worship and spiritual growth." },
            image: "assets/images/work4.jpg",
            category: "Mobile application",
            type: "mobile",
            link: "https://play.google.com/store/apps/details?id=com.muslim2.muslim"
        },
    ];

    const container = document.getElementById("projectsContainer");
    let currentFilter = "all"; // Track current filter

    function renderProjects(filter = "all") {
        container.innerHTML = "";
        currentFilter = filter; // Update current filter

        // Read current language dynamically each time we render
        const lang = document.documentElement.lang || "en"; // ar | en

        const filtered =
            filter === "all"
                ? projects
                : projects.filter(p => p.type === filter);

        filtered.forEach(project => {
            container.innerHTML += `
                <div class="col-md-6 col-xl-4 portfolio-item">
                    <a href="${project.link}" target="_blank">
                        <div class="portfolio-box">
                            <img src="${project.image}" alt="${project.title}">
                            <span class="portfolio-category">${project.category}</span>
                            <div class="portfolio-caption">
                                <h3>${project.title}</h3>
                                <p class="my-3">${project.description[lang]}</p>
                                <a href="${project.link}" target="_blank" class="theme-btn mt-5">${i18next.t('showProject')}</a>
                            </div>
                        </div>
                    </a>
                </div>
            `;
        });
    }

    // filters
    document.querySelectorAll(".project-filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".project-filter-btn")
                .forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            renderProjects(btn.dataset.filter);
        });
    });

    renderProjects("all");

    // Expose function globally so it can be called when language changes
    window.rerenderProjects = function () {
        renderProjects(currentFilter);
    };
});
