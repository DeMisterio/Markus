(() => {
    const metricConfig = {
        grammar: {
            label: "Grammar bar",
            value: 78,
            comment: "Perfect! Only two run-on sentences remain.",
            detail: {
                title: "Grammar stats",
                comment: "Clauses vary smoothly. Continue highlighting how feedback shaped the rewrite.",
                trend: [58, 63, 70, 78, 84],
                structure: {
                    value: 82,
                    note: "Varied openers remove monotony across evaluations."
                },
                tense: {
                    value: 74,
                    note: "Past tense slips into present while quoting interviews."
                },
                ai: {
                    value: 88,
                    note: "Responses clearly cite rubric evidence before concluding."
                }
            }
        },
        aiCheck: {
            label: "AI check bar",
            value: 12,
            comment: "Human voice detected — only gentle smoothing suggested.",
            detail: {
                title: "Authenticity check",
                comment: "Stylistic fingerprints stay consistent with earlier submissions.",
                trend: [18, 16, 14, 12, 10],
                structure: {
                    value: 68,
                    note: "Maintain personal anecdotes to keep tone anchored."
                },
                tense: {
                    value: 70,
                    note: "Stable voice; keep contractions where natural."
                },
                ai: {
                    value: 92,
                    note: "Confidence high that text is self-authored."
                }
            }
        },
        lexical: {
            label: "Lexical density",
            value: 64,
            comment: "Rich descriptive verbs support your analysis.",
            detail: {
                title: "Lexical precision",
                comment: "Vocabulary expands chapter-by-chapter, especially around lighting analysis.",
                trend: [44, 52, 58, 64, 69],
                structure: {
                    value: 72,
                    note: "Key terminology introduced before being applied."
                },
                tense: {
                    value: 66,
                    note: "Definition sentences occasionally overuse passive voice."
                },
                ai: {
                    value: 80,
                    note: "AI suggests swapping two repeated adjectives for impact."
                }
            }
        },
        repetition: {
            label: "Repetition bar",
            value: 32,
            comment: "Needs fixing at chapter three captions.",
            detail: {
                title: "Repetition insights",
                comment: "Caption set three reuses identical phrasing—replace two summary lines.",
                trend: [46, 44, 38, 32, 28],
                structure: {
                    value: 58,
                    note: "Sentence starters repeat across reflection entries."
                },
                tense: {
                    value: 64,
                    note: "Verb sequences stay consistent even when phrasing loops."
                },
                ai: {
                    value: 54,
                    note: "AI suggests merging overlapping paragraphs into one."
                }
            }
        },
        handwriting: {
            label: "Hand-writing bar",
            value: 71,
            comment: "Scan quality steady; two pages slightly faint.",
            detail: {
                title: "Handwriting clarity",
                comment: "Marker pen outlines keep feedback readable; rescan page 14 for contrast.",
                trend: [60, 63, 67, 71, 76],
                structure: {
                    value: 74,
                    note: "Letter shapes stay consistent across annotations."
                },
                tense: {
                    value: 68,
                    note: "Handwritten tense usage mirrors typed sections."
                },
                ai: {
                    value: 62,
                    note: "Upload detects two blurred photo notes worth rewriting digitally."
                }
            }
        },
        plagiarism: {
            label: "Plagiat risk",
            value: 9,
            comment: "Perfect! Citations cover all quotations.",
            detail: {
                title: "Originality report",
                comment: "Matches mostly in references list—narrative commentary remains unique.",
                trend: [18, 15, 12, 11, 9],
                structure: {
                    value: 88,
                    note: "Citation formatting consistent with coursework brief."
                },
                tense: {
                    value: 80,
                    note: "Quoted materials clearly signposted in past tense."
                },
                ai: {
                    value: 94,
                    note: "AI reinforces low similarity confidence."
                }
            }
        }
    };

    const trendSeries = [
        {
            pages: 10,
            grade: 58,
            label: "C",
            note: "Initial plan lacked evaluation of lighting choices.",
            metrics: {
                plagiarism: 20,
                lexical: 48,
                aiCheck: 12,
                repetition: 46,
                handwriting: 62
            }
        },
        {
            pages: 20,
            grade: 63,
            label: "C+",
            note: "Added primary research reflection — keep citing photographer influences.",
            metrics: {
                plagiarism: 18,
                lexical: 52,
                aiCheck: 10,
                repetition: 40,
                handwriting: 65
            }
        },
        {
            pages: 30,
            grade: 67,
            label: "B-",
            note: "Applied rule-of-thirds analysis lifted composition rationale.",
            metrics: {
                plagiarism: 14,
                lexical: 56,
                aiCheck: 8,
                repetition: 38,
                handwriting: 66
            }
        },
        {
            pages: 45,
            grade: 72,
            label: "B",
            note: "Comparison tables clarify progress — tighten summary writing.",
            metrics: {
                plagiarism: 12,
                lexical: 60,
                aiCheck: 6,
                repetition: 34,
                handwriting: 68
            }
        },
        {
            pages: 60,
            grade: 74,
            label: "B",
            note: "Evaluator praised iterative test shots and annotated lighting diagrams.",
            metrics: {
                plagiarism: 10,
                lexical: 64,
                aiCheck: 6,
                repetition: 30,
                handwriting: 70
            }
        },
        {
            pages: 75,
            grade: 78,
            label: "B+",
            note: "Chapter three captions still repeat — otherwise reflection improving.",
            metrics: {
                plagiarism: 9,
                lexical: 67,
                aiCheck: 5,
                repetition: 28,
                handwriting: 72
            }
        },
        {
            pages: 90,
            grade: 82,
            label: "A-",
            note: "Final shoot evaluation aligns to rubric language. Finish with confidence statement.",
            metrics: {
                plagiarism: 8,
                lexical: 70,
                aiCheck: 4,
                repetition: 24,
                handwriting: 74
            }
        },
        {
            pages: 100,
            grade: 86,
            label: "A-",
            note: "Submission ready. Only tighten technical captions to secure the next grade.",
            metrics: {
                plagiarism: 7,
                lexical: 72,
                aiCheck: 4,
                repetition: 22,
                handwriting: 76
            }
        }
    ];

    const metricLabels = {
        plagiarism: "Plagiat risk",
        lexical: "Lexical density",
        aiCheck: "AI check",
        repetition: "Repetition",
        handwriting: "Hand-writing"
    };

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

    const mainChartFrame = {
        width: 200,
        height: 110,
        padding: {
            top: 18,
            right: 14,
            bottom: 28,
            left: 22
        }
    };

    const METRIC_TONES = {
        grammar: "positive",
        handwriting: "positive",
        lexical: "positive",
        aiCheck: "negative",
        repetition: "negative",
        plagiarism: "negative"
    };

    const POSITIVE_PALETTE = [
        { min: 60, max: 100, hex: "#d7f9e3" },
        { min: 40, max: 59, hex: "#fff5cc" },
        { min: 20, max: 39, hex: "#ffe0b3" },
        { min: 0, max: 19, hex: "#ffd6d6" }
    ];

    const NEGATIVE_PALETTE = [
        { min: 0, max: 19, hex: "#d7f9e3" },
        { min: 20, max: 39, hex: "#fff5cc" },
        { min: 40, max: 59, hex: "#ffe0b3" },
        { min: 60, max: 100, hex: "#ffd6d6" }
    ];

    const hexToRgb = (hex) => {
        const value = hex.replace('#', '');
        const bigint = parseInt(value, 16);
        return {
            r: (bigint >> 16) & 255,
            g: (bigint >> 8) & 255,
            b: bigint & 255
        };
    };

    const lightenRgb = (rgb, amount) => ({
        r: Math.round(rgb.r + (255 - rgb.r) * amount),
        g: Math.round(rgb.g + (255 - rgb.g) * amount),
        b: Math.round(rgb.b + (255 - rgb.b) * amount)
    });

    const toRgba = (rgb, alpha) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;

    const selectPaletteHex = (value, palette) => {
        for (const swatch of palette) {
            if (value >= swatch.min && value <= swatch.max) return swatch.hex;
        }
        return palette[palette.length - 1].hex;
    };

    const getMetricColors = (metricKey, value) => {
        const tone = METRIC_TONES[metricKey] || "positive";
        const palette = tone === "negative" ? NEGATIVE_PALETTE : POSITIVE_PALETTE;
        const safeValue = clamp(Number(value) || 0, 0, 100);
        const hex = selectPaletteHex(safeValue, palette);
        const rgb = hexToRgb(hex);
        const hoverRgb = lightenRgb(rgb, 0.1);
        return {
            tone,
            base: toRgba(rgb, 0.15),
            hover: toRgba(hoverRgb, 0.22),
            active: toRgba(hoverRgb, 0.26),
            border: toRgba(rgb, 0.38),
            borderBase: toRgba(rgb, 0.24),
            detail: toRgba(rgb, 0.2),
            card: toRgba(rgb, 0.18)
        };
    };

    const detailChartFrame = {
        width: 200,
        height: 110,
        padding: {
            top: 18,
            right: 18,
            bottom: 30,
            left: 24
        }
    };

    const applySpeedometerValue = (node, value) => {
        if (!node) return;
        const safeValue = clamp(Number(value) || 0, 0, 100);
        node.style.setProperty("--speedometer", safeValue);
        node.dataset.speed = String(safeValue);
    };

    const metricCards = Array.from(document.querySelectorAll(".metric-card"));
    const analysisBoard = document.querySelector(".analysis-board");
    const metricDetail = analysisBoard?.querySelector(".metric-detail");
    const detailTitle = metricDetail?.querySelector(".metric-detail__title");
    const detailTotal = metricDetail?.querySelector("[data-detail-total]");
    const detailComment = metricDetail?.querySelector(".metric-detail__comment");
    const detailClose = metricDetail?.querySelector(".metric-detail__close");
    const detailSvg = metricDetail?.querySelector(".metric-detail__chart svg");
    const detailLine = detailSvg?.querySelector(".metric-detail__line");
    const detailPoints = detailSvg?.querySelector(".metric-detail__points");
    const detailAxisX = detailSvg?.querySelector(".metric-detail__axis--x");
    const detailAxisY = detailSvg?.querySelector(".metric-detail__axis--y");
    const getDetailCard = (key) => {
        if (!metricDetail) return null;
        const root = metricDetail.querySelector(`.detail-card[data-key="${key}"]`);
        if (!root) return null;
        return {
            root,
            value: root.querySelector(".detail-card__value"),
            note: root.querySelector(".detail-card__note"),
            gauge: root.querySelector(".speedometer")
        };
    };
    const detailCards = metricDetail
        ? {
              structure: getDetailCard("structure"),
              tense: getDetailCard("tense"),
              ai: getDetailCard("ai")
          }
        : null;

    let activeMetricCard = null;
    let detailLock = false;

    const buildDetailChart = (series = []) => {
        if (!detailLine || !detailPoints || !detailAxisX || !detailAxisY) return;

        detailPoints.innerHTML = "";
        detailAxisX.innerHTML = "";
        detailAxisY.innerHTML = "";

        if (!series.length) {
            detailLine.setAttribute("d", "");
            return;
        }

        const frame = detailChartFrame;
        const usableWidth = frame.width - frame.padding.left - frame.padding.right;
        const usableHeight = frame.height - frame.padding.top - frame.padding.bottom;
        const baselineY = frame.height - frame.padding.bottom;
        const values = series.length > 1 ? series : [series[0], series[0]];
        const lastIndex = values.length - 1 || 1;
        const labelCount = Math.max(series.length, 1);
        const labelLastIndex = Math.max(labelCount - 1, 1);

        const coords = values.map((value, index) => {
            const ratio = lastIndex === 0 ? 0 : index / lastIndex;
            const x = frame.padding.left + ratio * usableWidth;
            const y = baselineY - (clamp(value, 0, 100) / 100) * usableHeight;
            return { x, y };
        });

        const instructions = coords
            .map((coord, index) => `${index === 0 ? "M" : "L"} ${coord.x} ${coord.y}`)
            .join(" ");

        detailLine.setAttribute("d", instructions);
        detailLine.setAttribute("vector-effect", "non-scaling-stroke");

        coords.forEach(({ x, y }) => {
            const point = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            point.setAttribute("cx", String(x));
            point.setAttribute("cy", String(y));
            point.setAttribute("r", "2.6");
            point.setAttribute("vector-effect", "non-scaling-stroke");
            detailPoints.appendChild(point);
        });

        const baseline = document.createElementNS("http://www.w3.org/2000/svg", "line");
        baseline.setAttribute("x1", String(frame.padding.left));
        baseline.setAttribute("x2", String(frame.padding.left + usableWidth));
        baseline.setAttribute("y1", String(baselineY));
        baseline.setAttribute("y2", String(baselineY));
        baseline.setAttribute("vector-effect", "non-scaling-stroke");
        detailAxisX.appendChild(baseline);

        for (let i = 0; i < labelCount; i += 1) {
            const ratio = labelCount === 1 ? 0 : i / labelLastIndex;
            const x = frame.padding.left + ratio * usableWidth;
            const tick = document.createElementNS("http://www.w3.org/2000/svg", "line");
            tick.setAttribute("x1", String(x));
            tick.setAttribute("x2", String(x));
            tick.setAttribute("y1", String(baselineY));
            tick.setAttribute("y2", String(baselineY + 4));
            tick.setAttribute("vector-effect", "non-scaling-stroke");
            detailAxisX.appendChild(tick);

            const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute("x", String(x));
            text.setAttribute("y", String(baselineY + 11));
            text.setAttribute("text-anchor", "middle");
            text.textContent = String(i + 1);
            detailAxisX.appendChild(text);
        }

        const leftAxis = document.createElementNS("http://www.w3.org/2000/svg", "line");
        leftAxis.setAttribute("x1", String(frame.padding.left));
        leftAxis.setAttribute("x2", String(frame.padding.left));
        leftAxis.setAttribute("y1", String(frame.padding.top));
        leftAxis.setAttribute("y2", String(baselineY));
        leftAxis.setAttribute("vector-effect", "non-scaling-stroke");
        detailAxisY.appendChild(leftAxis);

        [100, 80, 60, 40, 20].forEach((mark) => {
            const y = baselineY - (mark / 100) * usableHeight;
            const grid = document.createElementNS("http://www.w3.org/2000/svg", "line");
            grid.setAttribute("x1", String(frame.padding.left));
            grid.setAttribute("x2", String(frame.padding.left + usableWidth));
            grid.setAttribute("y1", String(y));
            grid.setAttribute("y2", String(y));
            grid.setAttribute("vector-effect", "non-scaling-stroke");
            detailAxisY.appendChild(grid);

            const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute("x", String(frame.padding.left - 4));
            text.setAttribute("y", String(y + 2));
            text.setAttribute("text-anchor", "end");
            text.textContent = String(mark);
            detailAxisY.appendChild(text);
        });
    };

    const applyDetailTransform = (card) => {
        if (!metricDetail || !card) return;

        metricDetail.style.setProperty("--detail-translate-x", "0px");
        metricDetail.style.setProperty("--detail-translate-y", "0px");
        metricDetail.style.setProperty("--detail-scale-x", "1");
        metricDetail.style.setProperty("--detail-scale-y", "1");

        const detailRect = metricDetail.getBoundingClientRect();
        const cardRect = card.getBoundingClientRect();

        const translateX = cardRect.left + cardRect.width / 2 - (detailRect.left + detailRect.width / 2);
        const translateY = cardRect.top + cardRect.height / 2 - (detailRect.top + detailRect.height / 2);
        const scaleX = cardRect.width / detailRect.width;
        const scaleY = cardRect.height / detailRect.height;

        metricDetail.style.setProperty("--detail-translate-x", `${translateX}px`);
        metricDetail.style.setProperty("--detail-translate-y", `${translateY}px`);
        metricDetail.style.setProperty("--detail-scale-x", scaleX);
        metricDetail.style.setProperty("--detail-scale-y", scaleY);
    };

    const closeMetricDetail = ({ immediate = false } = {}) => {
        if (!metricDetail || !metricDetail.classList.contains("is-visible") || detailLock) {
            return;
        }

        const card = activeMetricCard;

        const finalize = () => {
            metricDetail.classList.remove("is-visible");
            metricDetail.classList.remove("is-active");
            metricDetail.style.removeProperty("--detail-translate-x");
            metricDetail.style.removeProperty("--detail-translate-y");
            metricDetail.style.removeProperty("--detail-scale-x");
            metricDetail.style.removeProperty("--detail-scale-y");
            metricDetail.style.removeProperty("--metric-detail-bg");
            metricDetail.style.removeProperty("--metric-detail-border");
            if (detailTotal) detailTotal.textContent = "";
            if (detailCards) {
                Object.values(detailCards).forEach((slot) => {
                    slot?.root?.style.removeProperty("--detail-card-bg");
                });
            }
            analysisBoard?.classList.remove("analysis-board--dimmed");
            if (card) {
                card.classList.remove("metric-card--active");
                card.setAttribute("aria-expanded", "false");
                card.focus({ preventScroll: true });
            }
            detailLock = false;
            activeMetricCard = null;
        };

        if (!card) {
            finalize();
            return;
        }

        if (immediate) {
            finalize();
            return;
        }

        detailLock = true;
        applyDetailTransform(card);
        metricDetail.classList.remove("is-active");

        const handle = (event) => {
            if (event.target !== metricDetail || event.propertyName !== "transform") return;
            metricDetail.removeEventListener("transitionend", handle);
            finalize();
        };

        metricDetail.addEventListener("transitionend", handle);
    };

    const openMetricDetail = (metricKey, card) => {
        if (!metricDetail || !detailTitle || !detailComment || !detailCards || detailLock) {
            return;
        }

        if (activeMetricCard === card && metricDetail.classList.contains("is-active")) {
            closeMetricDetail();
            return;
        }

        if (activeMetricCard && activeMetricCard !== card) {
            closeMetricDetail({ immediate: true });
        }

        const config = metricConfig[metricKey];
        if (!config) return;

        const colors = getMetricColors(metricKey, config.value);

        activeMetricCard = card;
        card.classList.add("metric-card--active");
        card.setAttribute("aria-expanded", "true");

        const { detail } = config;
        detailTitle.textContent = detail.title;
        if (detailTotal) {
            detailTotal.textContent = `${clamp(config.value, 0, 100)}%`;
        }
        detailComment.textContent = detail.comment;
        buildDetailChart(detail.trend);

        const structureCard = detailCards.structure;
        if (structureCard && detail.structure) {
            if (structureCard.value) structureCard.value.textContent = `${clamp(detail.structure.value, 0, 100)}%`;
            if (structureCard.note) structureCard.note.textContent = detail.structure.note;
            applySpeedometerValue(structureCard.gauge, detail.structure.value);
        }

        const tenseCard = detailCards.tense;
        if (tenseCard && detail.tense) {
            if (tenseCard.value) tenseCard.value.textContent = `${clamp(detail.tense.value, 0, 100)}%`;
            if (tenseCard.note) tenseCard.note.textContent = detail.tense.note;
            applySpeedometerValue(tenseCard.gauge, detail.tense.value);
        }

        const aiCard = detailCards.ai;
        if (aiCard && detail.ai) {
            if (aiCard.note) aiCard.note.textContent = detail.ai.note;
            if (aiCard.value) aiCard.value.textContent = `${clamp(detail.ai.value || 0, 0, 100)}%`;
            if (aiCard.gauge) applySpeedometerValue(aiCard.gauge, detail.ai.value || 0);
        }

        metricDetail.classList.add("is-visible");
        metricDetail.classList.remove("is-active");

        metricDetail.style.setProperty("--metric-detail-bg", colors.detail);
        metricDetail.style.setProperty("--metric-detail-border", colors.border);
        Object.values(detailCards).forEach((slot) => {
            if (slot?.root) slot.root.style.setProperty("--detail-card-bg", colors.card);
        });

        requestAnimationFrame(() => {
            applyDetailTransform(card);
            requestAnimationFrame(() => {
                analysisBoard?.classList.add("analysis-board--dimmed");
                metricDetail.classList.add("is-active");
                detailClose?.focus({ preventScroll: true });
            });
        });
    };

    metricCards.forEach((card) => {
        const metricKey = card.dataset.metric;
        const speedo = card.querySelector(".speedometer");
        const hint = card.querySelector(".metric-card__hint");
        const data = metricConfig[metricKey];

        if (data) {
            applySpeedometerValue(speedo, data.value);
            if (hint) {
                hint.textContent = data.comment;
            }
            const colors = getMetricColors(metricKey, data.value);
            card.style.setProperty("--metric-bg", colors.base);
            card.style.setProperty("--metric-bg-hover", colors.hover);
            card.style.setProperty("--metric-bg-active", colors.active);
            card.style.setProperty("--metric-border", colors.borderBase);
            card.style.setProperty("--metric-border-active", colors.border);
            card.dataset.metricTone = colors.tone;
        }

        card.addEventListener("click", () => openMetricDetail(metricKey, card));
        card.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openMetricDetail(metricKey, card);
            }
        });
    });

    detailClose?.addEventListener("click", () => closeMetricDetail());
    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMetricDetail();
        }
    });

    analysisBoard?.addEventListener("click", (event) => {
        if (!metricDetail?.classList.contains("is-active")) return;
        if (metricDetail.contains(event.target)) return;
        if (event.target.closest(".metric-card")) return;
        closeMetricDetail();
    });

    /* Trend chart */
    const trendChart = document.querySelector(".trend-chart");
    if (trendChart) {
        const svg = trendChart.querySelector("svg");
        const path = svg?.querySelector(".trend-line");
        const pointsGroup = svg?.querySelector(".trend-points");
        const xAxisGroup = svg?.querySelector(".trend-axis--x");
        const yAxisGroup = svg?.querySelector(".trend-axis--y");
        const insight = trendChart.parentElement?.querySelector(".trend-insight");
        const insightTitle = insight?.querySelector("[data-trend-title]");
        const insightList = insight?.querySelector("[data-trend-list]");
        const insightNote = insight?.querySelector("[data-trend-note]");
        const insightClose = insight?.querySelector(".trend-insight__close");
        const defaultInsightTitle = insightTitle?.textContent || "";
        let lockedIndex = null;

        const frame = mainChartFrame;
        const usableWidth = frame.width - frame.padding.left - frame.padding.right;
        const usableHeight = frame.height - frame.padding.top - frame.padding.bottom;
        const baselineY = frame.height - frame.padding.bottom;
        const maxPages = Math.max(...trendSeries.map((point) => point.pages));

        const clearInsight = () => {
            if (!insight) return;
            insight.dataset.state = "idle";
            if (insightTitle) insightTitle.textContent = defaultInsightTitle;
            if (insightList) insightList.innerHTML = "";
            if (insightNote) insightNote.textContent = "";
            lockedIndex = null;
        };

        const setInsight = (point, index, persist = false) => {
            if (!insight || !insightTitle || !insightList || !insightNote) return;
            insight.dataset.state = "active";
            insightTitle.textContent = `${point.label} grade — ${point.pages} pages`;
            insightList.innerHTML = "";
            Object.entries(point.metrics).forEach(([key, value]) => {
                const item = document.createElement("li");
                item.textContent = `${metricLabels[key]}: ${value}%`;
                insightList.appendChild(item);
            });
            insightNote.textContent = point.note;
            if (persist) lockedIndex = index;
        };

        if (path && pointsGroup && xAxisGroup && yAxisGroup) {
            pointsGroup.innerHTML = "";
            xAxisGroup.innerHTML = "";
            yAxisGroup.innerHTML = "";

            const coords = trendSeries.map((point, index) => {
                const xRatio = maxPages === 0 ? 0 : point.pages / maxPages;
                const x = frame.padding.left + xRatio * usableWidth;
                const y = baselineY - (clamp(point.grade, 0, 100) / 100) * usableHeight;
                return { point, index, x, y };
            });

            const instructions = coords
                .map(({ x, y }, index) => `${index === 0 ? "M" : "L"} ${x} ${y}`)
                .join(" ");
            path.setAttribute("d", instructions);
            path.setAttribute("vector-effect", "non-scaling-stroke");

            coords.forEach(({ point, index, x, y }) => {
                const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                circle.setAttribute("cx", String(x));
                circle.setAttribute("cy", String(y));
                circle.setAttribute("r", "2.8");
                circle.setAttribute("vector-effect", "non-scaling-stroke");
                circle.setAttribute("tabindex", "0");
                circle.setAttribute("role", "button");
                circle.dataset.index = String(index);
                pointsGroup.appendChild(circle);
            });

            const bottomAxis = document.createElementNS("http://www.w3.org/2000/svg", "line");
            bottomAxis.setAttribute("x1", String(frame.padding.left));
            bottomAxis.setAttribute("x2", String(frame.padding.left + usableWidth));
            bottomAxis.setAttribute("y1", String(baselineY));
            bottomAxis.setAttribute("y2", String(baselineY));
            bottomAxis.setAttribute("vector-effect", "non-scaling-stroke");
            xAxisGroup.appendChild(bottomAxis);

            const tickCount = 10;
            for (let i = 0; i <= tickCount; i += 2) {
                const ratio = tickCount === 0 ? 0 : i / tickCount;
                const x = frame.padding.left + ratio * usableWidth;
                const tick = document.createElementNS("http://www.w3.org/2000/svg", "line");
                tick.setAttribute("x1", String(x));
                tick.setAttribute("x2", String(x));
                tick.setAttribute("y1", String(baselineY));
                tick.setAttribute("y2", String(baselineY + 4));
                tick.setAttribute("vector-effect", "non-scaling-stroke");
                xAxisGroup.appendChild(tick);

                const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
                label.setAttribute("x", String(x));
                label.setAttribute("y", String(baselineY + 11));
                label.setAttribute("text-anchor", "middle");
                label.textContent = String(Math.round(ratio * maxPages));
                xAxisGroup.appendChild(label);
            }

            const gradeTicks = [
                { value: 100, label: "A*" },
                { value: 90, label: "A" },
                { value: 80, label: "B" },
                { value: 70, label: "C" },
                { value: 60, label: "D" },
                { value: 50, label: "E" },
                { value: 40, label: "F" }
            ];

            gradeTicks.forEach((grade) => {
                const y = baselineY - (grade.value / 100) * usableHeight;
                const grid = document.createElementNS("http://www.w3.org/2000/svg", "line");
                grid.setAttribute("x1", String(frame.padding.left));
                grid.setAttribute("x2", String(frame.padding.left + usableWidth));
                grid.setAttribute("y1", String(y));
                grid.setAttribute("y2", String(y));
                grid.setAttribute("vector-effect", "non-scaling-stroke");
                yAxisGroup.appendChild(grid);

                const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
                label.setAttribute("x", String(frame.padding.left - 4));
                label.setAttribute("y", String(y + 2));
                label.setAttribute("text-anchor", "end");
                label.textContent = grade.label;
                yAxisGroup.appendChild(label);
            });

            const circles = pointsGroup.querySelectorAll("circle");
            const mediaQuery = window.matchMedia("(max-width: 900px)");

            circles.forEach((circle) => {
                circle.addEventListener("mouseenter", () => {
                    if (mediaQuery.matches) return;
                    const index = Number(circle.dataset.index);
                    const point = trendSeries[index];
                    setInsight(point, index, false);
                });

                circle.addEventListener("mouseleave", () => {
                    if (mediaQuery.matches) return;
                    if (lockedIndex === null) clearInsight();
                });

                circle.addEventListener("focus", () => {
                    const index = Number(circle.dataset.index);
                    const point = trendSeries[index];
                    setInsight(point, index, false);
                });

                circle.addEventListener("blur", () => {
                    if (lockedIndex === null) clearInsight();
                });

                circle.addEventListener("click", (event) => {
                    const index = Number(circle.dataset.index);
                    const point = trendSeries[index];
                    if (lockedIndex === index) {
                        clearInsight();
                    } else {
                        setInsight(point, index, true);
                    }
                    event.stopPropagation();
                });
            });
        }

        insightClose?.addEventListener("click", () => {
            clearInsight();
        });

        trendChart.addEventListener("mouseleave", () => {
            if (lockedIndex === null) clearInsight();
        });

        document.addEventListener("click", (event) => {
            if (!insight || lockedIndex === null) return;
            if (trendChart.contains(event.target) || insight.contains(event.target)) return;
            clearInsight();
        });
    }

    /* Rate panel */
    const rateTrigger = document.querySelector(".rate-trigger");
    const ratePanel = document.querySelector(".rate-panel");
    const rateSlider = document.querySelector(".rate-slider");
    const rateValue = document.querySelector("[data-rate-label]");
    const gradeSteps = ["F", "E", "D", "C", "B", "A"];

    const updateRateValue = () => {
        if (!rateSlider || !rateValue) return;
        const index = clamp(Number(rateSlider.value) || 0, 0, gradeSteps.length - 1);
        const label = gradeSteps[index];
        rateValue.textContent = label;
    };

    rateTrigger?.addEventListener("click", () => {
        if (!ratePanel) return;
        const isHidden = ratePanel.hidden;
        ratePanel.hidden = !isHidden;
        rateTrigger.setAttribute("aria-expanded", String(isHidden));
        if (isHidden) {
            ratePanel.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });

    rateSlider?.addEventListener("input", updateRateValue);
    updateRateValue();

    const rateNoteInput = document.querySelector(".rate-note");
    const rateSendButton = document.querySelector(".rate-send");
    rateSendButton?.addEventListener("click", () => {
        if (!rateSendButton.disabled) {
            rateSendButton.disabled = true;
            const previous = rateSendButton.textContent;
            rateSendButton.textContent = "Sent!";
            setTimeout(() => {
                rateSendButton.disabled = false;
                rateSendButton.textContent = previous || "Send";
                if (rateNoteInput) rateNoteInput.value = rateNoteInput.value.trim();
            }, 1800);
        }
    });

    /* Download button */
    const downloadTrigger = document.querySelector(".download-trigger");
    downloadTrigger?.addEventListener("click", () => {
        const minimalPdf = `%PDF-1.3
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R >>
endobj
4 0 obj
<< /Length 0 >>
stream
endstream
endobj
xref
0 5
0000000000 65535 f 
0000000010 00000 n 
0000000060 00000 n 
0000000114 00000 n 
0000000194 00000 n 
trailer
<< /Size 5 /Root 1 0 R >>
startxref
240
%%EOF`;
        const blob = new Blob([minimalPdf], { type: "application/pdf" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "see-you-soon.pdf";
        document.body.appendChild(link);
        link.click();
        setTimeout(() => {
            URL.revokeObjectURL(link.href);
            link.remove();
        }, 200);
    });

    /* Complain panel */
    const complainTrigger = document.querySelector(".complain-trigger");
    const complainPanel = document.querySelector(".complain-panel");
    const complainTextarea = complainPanel?.querySelector("textarea");
    const complainSend = complainPanel?.querySelector(".complain-send");
    const complainChat = complainPanel?.querySelector(".complain-panel__chat");

    complainTrigger?.addEventListener("click", () => {
        if (!complainPanel) return;
        const isHidden = complainPanel.hidden;
        complainPanel.hidden = !isHidden;
        complainTrigger.setAttribute("aria-expanded", String(isHidden));
        if (isHidden) {
            complainPanel.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });

    const escapeHtml = (value) =>
        value
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");

    complainSend?.addEventListener("click", () => {
        if (!complainTextarea || !complainChat) return;
        const message = complainTextarea.value.trim();
        if (!message) return;
        complainTextarea.value = "";

        const userBubble = document.createElement("div");
        userBubble.className = "chat-bubble chat-bubble--user";
        userBubble.innerHTML = `<p>${escapeHtml(message)}</p>`;
        complainChat.appendChild(userBubble);
        userBubble.scrollIntoView({ behavior: "smooth", block: "end" });

        setTimeout(() => {
            const aiReply = document.createElement("div");
            aiReply.className = "chat-bubble chat-bubble--ai";
            aiReply.innerHTML =
                "<p>Thanks for flagging this. I have logged your concern so a human examiner can re-check the report within 24 hours.</p>";
            complainChat.appendChild(aiReply);
            aiReply.scrollIntoView({ behavior: "smooth", block: "end" });
        }, 900);
    });

    /* Mobile metric arrangement */
    const leftStack = document.querySelector(".metric-stack--left");
    const rightStack = document.querySelector(".metric-stack--right");
    const metricCardOrigins = new Map(metricCards.map((card) => [card, card.parentElement]));
    const responsiveMetricsMedia = window.matchMedia("(max-width: 1024px)");

    const syncMetricStacks = (event) => {
        if (!leftStack || !rightStack) return;
        if (event.matches) {
            metricCards.forEach((card) => {
                if (metricCardOrigins.get(card) === rightStack) {
                    leftStack.appendChild(card);
                }
            });
            rightStack.classList.add("is-hidden");
        } else {
            metricCards.forEach((card) => {
                const home = metricCardOrigins.get(card);
                if (home && card.parentElement !== home) {
                    home.appendChild(card);
                }
            });
            rightStack.classList.remove("is-hidden");
        }
    };

    responsiveMetricsMedia.addEventListener("change", syncMetricStacks);
    syncMetricStacks(responsiveMetricsMedia);
})();
