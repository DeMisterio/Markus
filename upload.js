const selectionKey = "markusSelectedCoursework";
const storedSelection = localStorage.getItem(selectionKey);

if (!storedSelection) {
    window.location.href = "selection.html";
}

const selection = JSON.parse(storedSelection || "{}");

const dom = {
    subtitle: document.getElementById("upload-subtitle"),
    pills: document.getElementById("selection-pills"),
    bubbleTitle: document.getElementById("bubble-title"),
    bubbleDescription: document.getElementById("bubble-description"),
    bubbleInstruction: document.getElementById("bubble-instruction"),
    bubbleAction: document.getElementById("bubble-action"),
    bubbleTextarea: document.getElementById("bubble-textarea"),
    bubbleFootnote: document.getElementById("bubble-footnote"),
    bubble: document.getElementById("upload-bubble"),
    bubbleInner: document.getElementById("bubble-inner"),
    fileInput: document.getElementById("file-input"),
    hintSection: document.getElementById("hint-section"),
    acknowledgeHint: document.getElementById("acknowledge-hint"),
    uploadsSection: document.getElementById("uploads-section"),
    fileList: document.getElementById("file-list"),
    categoriesSection: document.getElementById("categories-section"),
    addCategory: document.getElementById("add-category"),
    finishCategories: document.getElementById("finish-categories"),
    categoryList: document.getElementById("category-list"),
    categoryDialog: document.getElementById("category-dialog"),
    categoryNameInput: document.getElementById("category-name"),
    cancelCategory: document.getElementById("cancel-category"),
    confirmCategory: document.getElementById("confirm-category"),
    finaliseSection: document.getElementById("finalise-section"),
    createPackage: document.getElementById("create-package"),
    packageStatus: document.getElementById("package-status"),
    previewOverlay: document.getElementById("preview-overlay"),
    closePreview: document.getElementById("close-preview"),
    previewContent: document.getElementById("preview-content"),
    previewCaption: document.getElementById("preview-caption")
};

const acceptedExtensions = (selection.accepts || []).map((ext) => ext.toLowerCase());
const isTextMode = Boolean(selection.supportsTextEntry);
const isImageMode = Boolean(selection.allowCapture);
const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

const state = {
    queue: [],
    isProcessing: false,
    uploadedFiles: [],
    fileCounter: 0,
    categories: [],
    activeCategoryId: null,
    hinted: false,
    packageReady: false
};

const randomColor = (() => {
    const palette = [
        "#ff5770",
        "#4a79ff",
        "#27c59a",
        "#f2b544",
        "#7a5cff",
        "#ff8a4a"
    ];
    let index = 0;
    return () => {
        const color = palette[index % palette.length];
        index += 1;
        return color;
    };
})();

const toExt = (filename) => {
    const parts = filename.toLowerCase().split(".");
    if (parts.length <= 1) return "";
    return `.${parts.pop()}`;
};

const isExtensionAllowed = (extension) => {
    if (!acceptedExtensions.length) return true;
    return acceptedExtensions.includes(extension);
};

const createInfoPill = (label, value) => {
    const pill = document.createElement("span");
    pill.className = "info-pill";
    pill.innerHTML = `<strong>${label}:</strong> ${value}`;
    return pill;
};

const setBubbleState = (stateName) => {
    dom.bubble.dataset.state = stateName;
};

const updateBubbleText = (instruction, description) => {
    if (instruction) dom.bubbleInstruction.textContent = instruction;
    if (description) dom.bubbleDescription.textContent = description;
};

const showElement = (element) => {
    element.classList.remove("is-hidden");
};

const hideElement = (element) => {
    element.classList.add("is-hidden");
};

const configureHero = () => {
    dom.subtitle.textContent = `${selection.programmeLabel} · ${selection.courseTitle}`;
    dom.pills.innerHTML = "";
    dom.pills.appendChild(createInfoPill("Programme", selection.programmeLabel));
    dom.pills.appendChild(createInfoPill("Course", selection.courseTitle));
    dom.pills.appendChild(createInfoPill("Exam board", selection.examBoard));
    dom.pills.appendChild(createInfoPill("Accepted", acceptedExtensions.join(", ")));
};

const configureBubble = () => {
    dom.fileInput.accept = acceptedExtensions.join(",");
    if (isImageMode && !isCoarsePointer) {
        dom.bubbleFootnote.textContent = "Tip: On mobile you can capture fresh images — on desktop please upload files.";
    } else if (acceptedExtensions.length) {
        dom.bubbleFootnote.textContent = `Drag & drop or use the button. Accepted: ${acceptedExtensions.join(", ")}`;
    }

    if (isTextMode) {
        dom.bubbleTitle.textContent = "Paste or write your coursework";
        dom.bubbleDescription.textContent = "Markus will convert your text into a clean submission.";
        hideElement(dom.bubbleInstruction);
        showElement(dom.bubbleTextarea);
        showElement(dom.bubbleAction);
        dom.bubbleAction.textContent = "Save text entry";
        dom.bubbleTextarea.addEventListener("input", () => {
            dom.bubbleAction.disabled = dom.bubbleTextarea.value.trim().length === 0;
        });
        dom.bubbleAction.disabled = true;
    } else {
        dom.bubbleTitle.textContent = "Upload your coursework files";
        dom.bubbleDescription.textContent = "Drag files here or use the button below.";
        dom.bubbleInstruction.textContent = "Drop your work (sequential uploads guaranteed).";
        showElement(dom.bubbleInstruction);
        showElement(dom.bubbleAction);
        dom.bubbleAction.textContent = "Choose files";
    }

    if (isImageMode && isCoarsePointer) {
        dom.fileInput.setAttribute("capture", "environment");
    }
};

const queueFile = (file, metadata = {}) => {
    state.queue.push({ file, metadata });
    processQueue();
};

const createVirtualTextFile = (content) => {
    const timeStamp = new Date()
        .toISOString()
        .slice(0, 19)
        .replace(/[-:T]/g, "");
    const fileName = `typed-entry-${timeStamp}.txt`;
    const blob = new Blob([content], { type: "text/plain" });
    return new File([blob], fileName, { type: "text/plain" });
};

const handleTextSubmission = () => {
    const value = dom.bubbleTextarea.value.trim();
    if (!value) return;
    const virtualFile = createVirtualTextFile(value);
    queueFile(virtualFile, { textContent: value, kind: "text-entry" });
    dom.bubbleTextarea.value = "";
    dom.bubbleAction.disabled = true;
    updateBubbleText("Processing your entry...", null);
};

const processQueue = () => {
    if (state.isProcessing || state.queue.length === 0) return;
    const nextItem = state.queue.shift();
    state.isProcessing = true;
    setBubbleState("uploading");
    dom.bubbleInner.style.transform = "scale(0.96)";
    updateBubbleText(`Uploading item ${state.fileCounter + 1}...`);

    const simulatedDuration = 700 + Math.random() * 800;

    setTimeout(async () => {
        await registerUploadedFile(nextItem.file, nextItem.metadata);
        state.isProcessing = false;
        dom.bubbleInner.style.transform = "";
        if (state.queue.length) {
            processQueue();
        } else {
            setBubbleState("idle");
            onUploadsDrained();
        }
    }, simulatedDuration);
};

const registerUploadedFile = async (file, metadata = {}) => {
    state.fileCounter += 1;
    const extension = toExt(file.name);
    const fileNumber = state.fileCounter;
    const baseName = `File ${fileNumber}`;
    const storageName = `${fileNumber}${extension || ""}`;

    const isImage = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".pdf"].includes(extension);
    const previewableImage = [".jpg", ".jpeg", ".png", ".gif", ".webp"].includes(extension);

    let previewUrl = null;
    if (previewableImage) {
        previewUrl = URL.createObjectURL(file);
    } else if (metadata.kind === "text-entry") {
        previewUrl = metadata.textContent;
    }

    state.uploadedFiles.push({
        id: `file-${fileNumber}`,
        order: fileNumber,
        originalName: file.name,
        displayName: baseName,
        storageName,
        file,
        extension,
        previewUrl,
        previewKind: previewableImage ? "image" : metadata.kind === "text-entry" ? "text" : null,
        textContent: metadata.textContent || null,
        categoryIds: new Set(),
        dots: new Map()
    });

    renderFileList();
    showElement(dom.uploadsSection);
};

const onUploadsDrained = () => {
    updateBubbleText("All uploads processed.", "You can now organise your files.");
    setBubbleState("complete");
    if (!state.hinted) {
        showElement(dom.hintSection);
        state.hinted = true;
    }
};

const buildFileListItem = (file) => {
    const li = document.createElement("li");
    li.className = "file-item";
    li.dataset.fileId = file.id;

    const preview = document.createElement("div");
    preview.className = "file-preview";
    if (file.previewKind === "image" && file.previewUrl) {
        preview.innerHTML = `<img src="${file.previewUrl}" alt="${file.displayName} preview">`;
    } else {
        preview.innerHTML = `<span class="file-icon">${file.extension.replace(".", "").toUpperCase() || "FILE"}</span>`;
    }

    const meta = document.createElement("div");
    meta.className = "file-meta";
    meta.innerHTML = `
        <span class="file-name">${file.displayName}</span>
        <span class="file-original">${file.originalName}</span>
    `;

    const tags = document.createElement("div");
    tags.className = "file-tags";
    tags.dataset.fileId = file.id;

    const actions = document.createElement("div");
    actions.className = "file-actions";
    if (file.previewKind) {
        const previewBtn = document.createElement("button");
        previewBtn.className = "ghost-button preview-button";
        previewBtn.textContent = "Preview";
        previewBtn.dataset.fileId = file.id;
        actions.appendChild(previewBtn);
    }

    li.appendChild(preview);
    li.appendChild(meta);
    li.appendChild(tags);
    li.appendChild(actions);
    return li;
};

const renderFileList = () => {
    dom.fileList.innerHTML = "";
    state.uploadedFiles.forEach((file) => {
        const element = buildFileListItem(file);
        dom.fileList.appendChild(element);
        renderFileDots(file.id);
    });
};

const renderFileDots = (fileId) => {
    const file = state.uploadedFiles.find((item) => item.id === fileId);
    if (!file) return;
    const tagContainer = dom.fileList.querySelector(`.file-tags[data-file-id="${fileId}"]`);
    if (!tagContainer) return;
    tagContainer.innerHTML = "";
    file.categoryIds.forEach((categoryId) => {
        const category = state.categories.find((cat) => cat.id === categoryId);
        if (!category) return;
        const dot = document.createElement("span");
        dot.className = "category-dot finalized";
        dot.style.background = category.color;
        dot.title = category.name;
        tagContainer.appendChild(dot);
    });
    if (state.activeCategoryId && file.dots.has(state.activeCategoryId)) {
        const cat = state.categories.find((c) => c.id === state.activeCategoryId);
        if (cat) {
            const pendingDot = document.createElement("span");
            pendingDot.className = "category-dot pending";
            pendingDot.style.background = cat.color;
            pendingDot.title = `${cat.name} (pending)`;
            tagContainer.appendChild(pendingDot);
        }
    }
};

const handleFileClick = (event) => {
    const listItem = event.target.closest(".file-item");
    if (!listItem) return;
    const fileId = listItem.dataset.fileId;
    const isPreviewButton = event.target.matches(".preview-button");
    if (isPreviewButton) {
        event.stopPropagation();
        openPreview(fileId);
        return;
    }
    if (!state.activeCategoryId) return;
    toggleFileForActiveCategory(fileId);
};

const ensureUploadsExist = () => state.uploadedFiles.length > 0;

const toggleFileForActiveCategory = (fileId) => {
    const category = state.categories.find((cat) => cat.id === state.activeCategoryId);
    if (!category || category.status !== "pending") return;
    const file = state.uploadedFiles.find((item) => item.id === fileId);
    if (!file) return;

    if (category.pendingFiles.has(fileId)) {
        category.pendingFiles.delete(fileId);
        file.dots.delete(category.id);
    } else {
        category.pendingFiles.add(fileId);
        file.dots.set(category.id, true);
    }
    renderFileDots(fileId);
    renderCategories();
};

const showCategoryDialog = () => {
    dom.categoryNameInput.value = "";
    dom.categoryDialog.classList.remove("is-hidden");
    dom.categoryNameInput.focus();
};

const hideCategoryDialog = () => {
    dom.categoryDialog.classList.add("is-hidden");
};

const addCategory = () => {
    const name = dom.categoryNameInput.value.trim();
    if (!name) {
        dom.categoryNameInput.focus();
        return;
    }
    const id = `cat-${Date.now()}`;
    const color = randomColor();
    state.categories.push({
        id,
        name,
        color,
        pendingFiles: new Set(),
        assignedFiles: new Set(),
        status: "pending"
    });
    state.activeCategoryId = id;
    hideCategoryDialog();
    renderCategories();
};

const renderCategories = () => {
    dom.categoryList.innerHTML = "";
    state.categories.forEach((category) => {
        const card = document.createElement("div");
        card.className = "category-card";
        if (category.status === "pending") card.classList.add("is-active");
        card.dataset.categoryId = category.id;
        const countLabel =
            category.status === "pending"
                ? `${category.pendingFiles.size} selected (not saved yet)`
                : `${category.assignedFiles.size} files assigned`;
        card.innerHTML = `
            <div class="category-details">
                <span class="category-dot finalized" style="background:${category.color}"></span>
                <div>
                    <div class="category-name">${category.name}</div>
                    <div class="category-count">${countLabel}</div>
                </div>
            </div>
            <div class="category-actions">
                ${category.status === "pending" ? `<button class="ghost-button finish-category" data-category-id="${category.id}">Finish ${category.name}</button>` : ""}
                <button class="ghost-button danger remove-category" data-category-id="${category.id}">✕</button>
            </div>
        `;
        dom.categoryList.appendChild(card);
    });
};

const finalizeActiveCategory = (categoryId) => {
    const category = state.categories.find((cat) => cat.id === categoryId);
    if (!category || category.status !== "pending") return;
    if (category.pendingFiles.size === 0) {
        alert("Select at least one file for this category.");
        return;
    }
    category.pendingFiles.forEach((fileId) => {
        const file = state.uploadedFiles.find((item) => item.id === fileId);
        if (!file) return;
        file.categoryIds.add(category.id);
        file.dots.delete(category.id);
        category.assignedFiles.add(fileId);
        renderFileDots(fileId);
    });
    category.pendingFiles.clear();
    category.status = "completed";
    state.activeCategoryId = null;
    updateFileNamesWithCategories();
    renderCategories();
};

const updateFileNamesWithCategories = () => {
    state.uploadedFiles.forEach((file) => {
        const assignedNames = Array.from(file.categoryIds)
            .map((categoryId) => {
                const category = state.categories.find((cat) => cat.id === categoryId);
                return category ? category.name : null;
            })
            .filter(Boolean);
        file.displayName = assignedNames.length
            ? `File ${file.order} — ${assignedNames.join(", ")}`
            : `File ${file.order}`;
    });
    renderFileList();
};

const removeCategory = (categoryId) => {
    const index = state.categories.findIndex((cat) => cat.id === categoryId);
    if (index === -1) return;
    const category = state.categories[index];
    category.assignedFiles.forEach((fileId) => {
        const file = state.uploadedFiles.find((item) => item.id === fileId);
        if (file) {
            file.categoryIds.delete(categoryId);
            renderFileDots(fileId);
        }
    });
    state.categories.splice(index, 1);
    if (state.activeCategoryId === categoryId) {
        state.activeCategoryId = null;
    }
    updateFileNamesWithCategories();
    renderCategories();
};

const maybeEnableFinalSection = () => {
    showElement(dom.finaliseSection);
    state.packageReady = true;
};

const openPreview = (fileId) => {
    const file = state.uploadedFiles.find((item) => item.id === fileId);
    if (!file || !file.previewKind) return;
    dom.previewContent.innerHTML = "";
    if (file.previewKind === "image") {
        const img = document.createElement("img");
        img.src = file.previewUrl;
        img.alt = file.displayName;
        dom.previewContent.appendChild(img);
    } else if (file.previewKind === "text") {
        const pre = document.createElement("pre");
        pre.textContent = file.textContent || "No text available.";
        dom.previewContent.appendChild(pre);
    }
    dom.previewCaption.textContent = file.displayName;
    dom.previewOverlay.classList.remove("is-hidden");
};

const closePreview = () => {
    dom.previewOverlay.classList.add("is-hidden");
    dom.previewContent.innerHTML = "";
};

const downloadBlob = (blob, filename) => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 1500);
};

const buildMetadata = (folderName) => {
    return {
        graduate: selection.programmeLabel,
        course: selection.courseTitle,
        examBoard: selection.examBoard,
        data: folderName,
        files: state.uploadedFiles.map((file) => ({
            name: file.displayName,
            storedAs: file.storageName,
            original: file.originalName,
            categories: Array.from(file.categoryIds)
                .map((catId) => {
                    const category = state.categories.find((cat) => cat.id === catId);
                    return category ? category.name : null;
                })
                .filter(Boolean)
        }))
    };
};

const createFolderOnDisk = async () => {
    const date = new Date();
    const today = date.toISOString().slice(0, 10);
    const folderName = `MarkusCoursework_${today}`;
    const jsonName = `Coursework(${today}).json`;
    const metadata = buildMetadata(folderName);
    const jsonBlob = new Blob([JSON.stringify(metadata, null, 2)], { type: "application/json" });

    if ("showDirectoryPicker" in window) {
        try {
            dom.packageStatus.textContent = "Select a folder to store your coursework package...";
            const dirHandle = await window.showDirectoryPicker({ mode: "readwrite" });
            const folderHandle = await dirHandle.getDirectoryHandle(folderName, { create: true });

            for (const file of state.uploadedFiles) {
                const handle = await folderHandle.getFileHandle(file.storageName, { create: true });
                const writable = await handle.createWritable();
                await writable.write(file.file);
                await writable.close();
            }

            const metaHandle = await folderHandle.getFileHandle(jsonName, { create: true });
            const metaWritable = await metaHandle.createWritable();
            await metaWritable.write(jsonBlob);
            await metaWritable.close();

            dom.packageStatus.textContent = `Package saved in ${folderName}.`;
        } catch (error) {
            console.error(error);
            dom.packageStatus.textContent = "Folder creation cancelled. You can try again.";
        }
    } else {
        downloadBlob(jsonBlob, jsonName);
        dom.packageStatus.textContent =
            "JSON downloaded. Browser cannot write folders directly — upload to Markus manually.";
    }
};

const bindEvents = () => {
    dom.bubbleAction.addEventListener("click", () => {
        if (isTextMode) {
            handleTextSubmission();
        } else {
            dom.fileInput.value = "";
            dom.fileInput.click();
        }
    });

    dom.fileInput.addEventListener("change", (event) => {
        const files = Array.from(event.target.files || []);
        ingestFiles(files);
    });

    ["dragenter", "dragover"].forEach((eventName) => {
        dom.bubble.addEventListener(eventName, (event) => {
            event.preventDefault();
            event.stopPropagation();
            setBubbleState("hover");
        });
    });

    ["dragleave", "drop"].forEach((eventName) => {
        dom.bubble.addEventListener(eventName, (event) => {
            event.preventDefault();
            event.stopPropagation();
            if (eventName === "drop" && !isTextMode) {
                const files = Array.from(event.dataTransfer.files || []);
                ingestFiles(files);
            }
            setBubbleState("idle");
        });
    });

    dom.fileList.addEventListener("click", handleFileClick);

    dom.acknowledgeHint.addEventListener("click", () => {
        hideElement(dom.hintSection);
        showElement(dom.categoriesSection);
        showElement(dom.finishCategories);
    });

    dom.addCategory.addEventListener("click", () => {
        if (!ensureUploadsExist()) {
            alert("Upload files first.");
            return;
        }
        showCategoryDialog();
    });

    dom.cancelCategory.addEventListener("click", hideCategoryDialog);
    dom.confirmCategory.addEventListener("click", addCategory);

    dom.categoryList.addEventListener("click", (event) => {
        const finishBtn = event.target.closest(".finish-category");
        const removeBtn = event.target.closest(".remove-category");
        if (finishBtn) {
            finalizeActiveCategory(finishBtn.dataset.categoryId);
        }
        if (removeBtn) {
            removeCategory(removeBtn.dataset.categoryId);
        }
    });

    dom.finishCategories.addEventListener("click", () => {
        maybeEnableFinalSection();
    });

    dom.createPackage.addEventListener("click", async () => {
        if (!state.packageReady) return;
        if (!state.uploadedFiles.length) {
            dom.packageStatus.textContent = "Upload at least one file before packaging.";
            return;
        }
        dom.packageStatus.textContent = "Creating your coursework package...";
        await createFolderOnDisk();
    });

    dom.closePreview.addEventListener("click", closePreview);
    dom.previewOverlay.addEventListener("click", (event) => {
        if (event.target === dom.previewOverlay) closePreview();
    });
};

const ingestFiles = (files) => {
    if (!files.length) return;
    const rejected = [];
    files.forEach((file) => {
        const ext = toExt(file.name);
        if (!isExtensionAllowed(ext)) {
            rejected.push(file.name);
            return;
        }
        queueFile(file);
    });
    if (rejected.length) {
        alert(`Some files were skipped (unsupported type):\n${rejected.join("\n")}`);
    }
};

configureHero();
configureBubble();
setBubbleState("idle");
bindEvents();

window.addEventListener("beforeunload", () => {
    state.uploadedFiles.forEach((file) => {
        if (file.previewKind === "image" && file.previewUrl) {
            URL.revokeObjectURL(file.previewUrl);
        }
    });
});
