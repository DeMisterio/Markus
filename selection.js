const curriculumData = {
    "high-school": {
        label: "High School (GCSE)",
        formats: [
            {
                id: "text",
                label: "Text-based Coursework",
                description: "Essays, reports, investigations, reflective writing.",
                accept: [".docx", ".txt", ".pdf"],
                supportsTextEntry: true,
                items: [
                    {
                        id: "gcse-english-literature",
                        title: "GCSE English Literature – essay comparing set texts or themes.",
                        examBoards: ["AQA", "OCR", "Edexcel", "Eduqas", "Cambridge IGCSE"]
                    },
                    {
                        id: "gcse-english-language",
                        title: "GCSE English Language (Creative Writing / IGCSE NEA) – original writing and commentary.",
                        examBoards: ["AQA", "OCR", "Edexcel", "Eduqas", "Cambridge IGCSE"]
                    },
                    {
                        id: "gcse-geography",
                        title: "GCSE Geography (Fieldwork Report / NEA) – analysis and data presentation.",
                        examBoards: ["AQA", "OCR", "Edexcel", "Eduqas", "Cambridge IGCSE"]
                    },
                    {
                        id: "gcse-history",
                        title: "GCSE History (Controlled Assessment / IGCSE Coursework) – historical enquiry essay.",
                        examBoards: ["AQA", "OCR", "Edexcel", "Eduqas", "Cambridge IGCSE"]
                    },
                    {
                        id: "gcse-business",
                        title: "GCSE Business Studies (Applied Task / Project) – research and written analysis.",
                        examBoards: ["AQA", "OCR", "Edexcel", "Eduqas"]
                    },
                    {
                        id: "gcse-media",
                        title: "GCSE Media Studies – written commentary / portfolio planning.",
                        examBoards: ["AQA", "OCR", "Edexcel", "Eduqas"]
                    }
                ]
            },
            {
                id: "image",
                label: "Image-based Coursework",
                description: "Visual portfolios, sketches, photography, textile work.",
                accept: [".jpg", ".jpeg", ".png", ".pdf"],
                allowCapture: true,
                items: [
                    {
                        id: "gcse-art",
                        title: "GCSE Art & Design (Fine Art) – creative visual portfolio.",
                        examBoards: ["AQA", "OCR", "Edexcel", "Eduqas"]
                    },
                    {
                        id: "gcse-graphic-communication",
                        title: "GCSE Graphic Communication – digital portfolio (logos, branding, layouts).",
                        examBoards: ["AQA", "OCR", "Edexcel", "Eduqas"]
                    },
                    {
                        id: "gcse-photography",
                        title: "GCSE Photography (Lens-based Media) – photographic project.",
                        examBoards: ["AQA", "OCR", "Edexcel", "Eduqas"]
                    },
                    {
                        id: "gcse-textiles",
                        title: "GCSE Textile Design – portfolio of textile or fashion designs.",
                        examBoards: ["AQA", "OCR", "Edexcel", "Eduqas"]
                    },
                    {
                        id: "gcse-3d-design",
                        title: "GCSE Art & Design (3D Design / Product Design) – annotated 3D portfolio.",
                        examBoards: ["AQA", "OCR", "Edexcel", "Eduqas"]
                    }
                ]
            },
            {
                id: "code",
                label: "Code-based Coursework",
                description: "Programming projects, digital builds, technical documentation.",
                accept: [".zip", ".rar"],
                items: [
                    {
                        id: "gcse-computer-science",
                        title: "GCSE Computer Science – programming project.",
                        examBoards: ["AQA", "OCR", "Edexcel", "Eduqas"]
                    },
                    {
                        id: "gcse-ict",
                        title: "GCSE ICT (Level 2 Certificate) – website, data system, or digital project.",
                        examBoards: ["OCR", "Edexcel", "Eduqas"]
                    }
                ]
            }
        ]
    },
    "a-level": {
        label: "A Level",
        formats: [
            {
                id: "text",
                label: "🧠 Text-based (essays, reports, analysis)",
                description: "Upload .docx / .txt / .pdf or paste your text on mobile.",
                accept: [".docx", ".txt", ".pdf"],
                supportsTextEntry: true,
                items: [
                    {
                        id: "alevel-english-literature",
                        title: "English Literature – essay comparing literary works (NEA).",
                        examBoards: ["AQA", "OCR", "Edexcel", "Eduqas"]
                    },
                    {
                        id: "alevel-english-language",
                        title: "English Language – language investigation + creative writing.",
                        examBoards: ["AQA", "OCR", "Edexcel", "Eduqas"]
                    },
                    {
                        id: "alevel-english-combined",
                        title: "English Language & Literature (Combined) – NEA portfolio (essay + writing).",
                        examBoards: ["AQA", "Edexcel"]
                    },
                    {
                        id: "alevel-history",
                        title: "History (Modern / Early Modern / Medieval & Warfare) – extended research essay.",
                        examBoards: ["AQA", "OCR", "Edexcel", "Eduqas"]
                    },
                    {
                        id: "alevel-geography",
                        title: "Geography – fieldwork report with text, maps, and graphs.",
                        examBoards: ["AQA", "OCR", "Edexcel", "Eduqas"]
                    },
                    {
                        id: "alevel-art-history",
                        title: "Art History (History of Art) – analytical writing about visual art.",
                        examBoards: ["Edexcel"]
                    },
                    {
                        id: "alevel-criminology",
                        title: "Criminology (Applied General) – written reports and controlled assessments.",
                        examBoards: ["Eduqas"]
                    },
                    {
                        id: "alevel-business-applied",
                        title: "Business (Applied) – analytical reports, case studies, written projects.",
                        examBoards: ["Eduqas", "Pearson BTEC", "OCR"]
                    },
                    {
                        id: "alevel-health-social-care",
                        title: "Health & Social Care (BTEC) – reports and reflective written work.",
                        examBoards: ["Pearson BTEC", "Eduqas"]
                    },
                    {
                        id: "alevel-media-studies",
                        title: "Media Studies – written analysis and commentary.",
                        examBoards: ["AQA", "OCR", "Edexcel", "Eduqas"]
                    }
                ]
            },
            {
                id: "image",
                label: "🎨 Image-based (visual projects, digital portfolios)",
                description: "Upload .jpg / .jpeg / .png / .pdf or snap photos on mobile.",
                accept: [".jpg", ".jpeg", ".png", ".pdf"],
                allowCapture: true,
                items: [
                    {
                        id: "alevel-fine-art",
                        title: "Fine Art – sketches, paintings, visual experiments.",
                        examBoards: ["AQA", "OCR", "Edexcel", "Eduqas"]
                    },
                    {
                        id: "alevel-graphic-design",
                        title: "Graphic Design – digital designs, layouts, posters.",
                        examBoards: ["AQA", "OCR", "Edexcel", "Eduqas"]
                    },
                    {
                        id: "alevel-textiles",
                        title: "Textiles – design sketches, fabric photography.",
                        examBoards: ["AQA", "OCR", "Edexcel", "Eduqas"]
                    },
                    {
                        id: "alevel-photography",
                        title: "Photography – digital images, edited visuals, contact sheets.",
                        examBoards: ["AQA", "OCR", "Edexcel", "Eduqas"]
                    },
                    {
                        id: "alevel-product-design",
                        title: "Product Design (3D / Resistant Materials) – prototypes, CAD renders, process images.",
                        examBoards: ["AQA", "OCR", "Edexcel", "Eduqas"]
                    }
                ]
            },
            {
                id: "code",
                label: "💻 Code-based (programming / technical projects)",
                description: "Upload a zipped folder or drag & drop your project directory.",
                accept: [".zip", ".rar"],
                items: [
                    {
                        id: "alevel-computer-science",
                        title: "Computer Science – coding project (design, implementation, evaluation).",
                        examBoards: ["AQA", "OCR", "Edexcel", "Eduqas"]
                    },
                    {
                        id: "alevel-information-technology",
                        title: "Information Technology – system design, code snippets, documentation.",
                        examBoards: ["OCR", "Pearson BTEC", "Eduqas"]
                    },
                    {
                        id: "alevel-electronics",
                        title: "Electronics – circuit code (Arduino, logic design), diagrams, reports.",
                        examBoards: ["Eduqas"]
                    }
                ]
            }
        ]
    },
    "btec": {
        label: "BTEC",
        formats: [
            {
                id: "text",
                label: "🧠 Text-based Projects",
                description: "Applied research, reflective journals, written evaluations.",
                accept: [".docx", ".txt", ".pdf"],
                supportsTextEntry: true,
                items: [
                    {
                        id: "btec-business",
                        title: "Business (Applied) – analytical reports, case studies, written projects.",
                        examBoards: ["Pearson BTEC", "Eduqas", "OCR"]
                    },
                    {
                        id: "btec-health-social-care",
                        title: "Health & Social Care – reflective logs, placement evidence, written analysis.",
                        examBoards: ["Pearson BTEC", "Eduqas"]
                    },
                    {
                        id: "btec-media",
                        title: "Creative Media Production – scripts, treatments, production logs.",
                        examBoards: ["Pearson BTEC", "OCR"]
                    }
                ]
            },
            {
                id: "image",
                label: "🎨 Visual & Portfolio Work",
                description: "Design sheets, portfolio spreads, visual experiments.",
                accept: [".jpg", ".jpeg", ".png", ".pdf"],
                allowCapture: true,
                items: [
                    {
                        id: "btec-graphics",
                        title: "Graphic Design – briefs, posters, branding outputs.",
                        examBoards: ["Pearson BTEC", "OCR"]
                    },
                    {
                        id: "btec-photography",
                        title: "Photography – curated sets, development boards, edited imagery.",
                        examBoards: ["Pearson BTEC", "OCR"]
                    },
                    {
                        id: "btec-fashion",
                        title: "Fashion & Textiles – garment development, textile samples, styled shoots.",
                        examBoards: ["Pearson BTEC"]
                    }
                ]
            },
            {
                id: "code",
                label: "💻 Technical Builds",
                description: "Software development, IT systems, digital integration projects.",
                accept: [".zip", ".rar"],
                items: [
                    {
                        id: "btec-it",
                        title: "Information Technology – system builds, code snippets, documentation.",
                        examBoards: ["Pearson BTEC"]
                    },
                    {
                        id: "btec-engineering",
                        title: "Engineering (Digital) – automation scripts, CAD integrations, technical reports.",
                        examBoards: ["Pearson BTEC"]
                    }
                ]
            }
        ]
    }
};

const stages = {
    level: document.querySelector('[data-stage="level"]'),
    format: document.querySelector('[data-stage="format"]'),
    course: document.querySelector('[data-stage="course"]'),
    examBoard: document.querySelector('[data-stage="exam-board"]'),
    summary: document.querySelector('[data-stage="summary"]')
};

const formatContainer = document.getElementById("format-options");
const courseContainer = document.getElementById("course-options");
const boardContainer = document.getElementById("board-options");

const summaryProgramme = document.getElementById("summary-programme");
const summaryFormat = document.getElementById("summary-format");
const summaryCourse = document.getElementById("summary-course");
const summaryBoard = document.getElementById("summary-board");
const summaryAccepts = document.getElementById("summary-accepts");
const continueButton = document.getElementById("continue-to-upload");

const selectionState = {
    level: null,
    format: null,
    course: null,
    board: null
};

const formatLookup = () => {
    if (!selectionState.level || !selectionState.format) return null;
    return curriculumData[selectionState.level].formats.find(
        (fmt) => fmt.id === selectionState.format
    );
};

const courseLookup = () => {
    const fmt = formatLookup();
    if (!fmt || !selectionState.course) return null;
    return fmt.items.find((item) => item.id === selectionState.course);
};

const resetStage = (stageName) => {
    if (stageName === "format") {
        selectionState.format = null;
        selectionState.course = null;
        selectionState.board = null;
        formatContainer.innerHTML = "";
        courseContainer.innerHTML = "";
        boardContainer.innerHTML = "";
    }
    if (stageName === "course") {
        selectionState.course = null;
        selectionState.board = null;
        courseContainer.innerHTML = "";
        boardContainer.innerHTML = "";
    }
    if (stageName === "examBoard") {
        selectionState.board = null;
        boardContainer.innerHTML = "";
    }
};

const showStage = (stageName) => {
    Object.entries(stages).forEach(([key, element]) => {
        if (key === stageName) {
            element.classList.remove("is-hidden");
        } else if (key === "level") {
            // Keep the initial stage visible for reselection
            return;
        } else {
            element.classList.add("is-hidden");
        }
    });
};

const renderFormats = () => {
    const { level } = selectionState;
    if (!level) return;
    resetStage("format");

    const formats = curriculumData[level].formats;
    formatContainer.innerHTML = "";

    formats.forEach((format) => {
        const button = document.createElement("button");
        button.className = "choice-card";
        button.dataset.format = format.id;
        button.innerHTML = `
            <span class="choice-title">${format.label}</span>
            <span class="choice-subtitle">${format.description}</span>
            <span class="choice-meta">Accepted: ${format.accept.join(", ")}</span>
        `;
        button.addEventListener("click", () => {
            selectionState.format = format.id;
            document
                .querySelectorAll('[data-stage="format"] .choice-card')
                .forEach((card) => card.classList.remove("is-active"));
            button.classList.add("is-active");
            renderCourses();
            showStage("course");
        });
        formatContainer.appendChild(button);
    });
    showStage("format");
};

const renderCourses = () => {
    const format = formatLookup();
    if (!format) return;
    resetStage("course");
    courseContainer.innerHTML = "";

    format.items.forEach((item) => {
        const card = document.createElement("article");
        card.className = "course-card";
        card.dataset.course = item.id;
        card.innerHTML = `
            <div class="course-title">${item.title}</div>
            <div class="course-boards">${item.examBoards.join(" · ")}</div>
        `;
        card.addEventListener("click", () => {
            selectionState.course = item.id;
            document
                .querySelectorAll(".course-card")
                .forEach((node) => node.classList.remove("is-active"));
            card.classList.add("is-active");
            renderBoards(item.examBoards);
            showStage("examBoard");
        });
        courseContainer.appendChild(card);
    });
};

const renderBoards = (boards) => {
    resetStage("examBoard");
    boardContainer.innerHTML = "";
    boards.forEach((board) => {
        const button = document.createElement("button");
        button.className = "choice-card small";
        button.dataset.board = board;
        button.innerHTML = `
            <span class="choice-title">${board}</span>
        `;
        button.addEventListener("click", () => {
            selectionState.board = board;
            document
                .querySelectorAll('[data-stage="exam-board"] .choice-card')
                .forEach((node) => node.classList.remove("is-active"));
            button.classList.add("is-active");
            renderSummary();
            showStage("summary");
        });
        boardContainer.appendChild(button);
    });
};

const renderSummary = () => {
    const programme = curriculumData[selectionState.level];
    const format = formatLookup();
    const course = courseLookup();
    const board = selectionState.board;

    if (!programme || !format || !course || !board) return;

    summaryProgramme.textContent = programme.label;
    summaryFormat.textContent = format.label.replace(/^[^A-Za-z]+/u, "").trim();
    summaryCourse.textContent = course.title;
    summaryBoard.textContent = board;
    summaryAccepts.textContent = format.accept.join(", ");
};

const persistSelection = () => {
    const format = formatLookup();
    const course = courseLookup();
    if (!format || !course) return;

    const payload = {
        programmeId: selectionState.level,
        programmeLabel: curriculumData[selectionState.level].label,
        formatId: selectionState.format,
        formatLabel: format.label,
        accepts: format.accept,
        supportsTextEntry: Boolean(format.supportsTextEntry),
        allowCapture: Boolean(format.allowCapture),
        courseId: course.id,
        courseTitle: course.title,
        examBoard: selectionState.board,
        timestamp: new Date().toISOString()
    };
    localStorage.setItem("markusSelectedCoursework", JSON.stringify(payload));
};

document
    .querySelectorAll('[data-stage="level"] .choice-card[data-level]')
    .forEach((button) => {
        button.addEventListener("click", () => {
            const level = button.dataset.level;
            selectionState.level = level;
            button.focus();
            document
                .querySelectorAll('[data-stage="level"] .choice-card[data-level]')
                .forEach((node) => node.classList.remove("is-active"));
            button.classList.add("is-active");
            renderFormats();
        });
    });

continueButton.addEventListener("click", () => {
    persistSelection();
    window.location.href = "upload.html";
});
