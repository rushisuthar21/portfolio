(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/FloatingNavbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const sections = [
    {
        id: "about",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaUserAlt"], {}, void 0, false, {
            fileName: "[project]/app/components/FloatingNavbar.tsx",
            lineNumber: 15,
            columnNumber: 24
        }, ("TURBOPACK compile-time value", void 0)),
        label: "About"
    },
    {
        id: "toolkit",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTools"], {}, void 0, false, {
            fileName: "[project]/app/components/FloatingNavbar.tsx",
            lineNumber: 16,
            columnNumber: 26
        }, ("TURBOPACK compile-time value", void 0)),
        label: "Toolkit"
    },
    {
        id: "experience",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaBriefcase"], {}, void 0, false, {
            fileName: "[project]/app/components/FloatingNavbar.tsx",
            lineNumber: 17,
            columnNumber: 29
        }, ("TURBOPACK compile-time value", void 0)),
        label: "Experience"
    },
    {
        id: "projects",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCode"], {}, void 0, false, {
            fileName: "[project]/app/components/FloatingNavbar.tsx",
            lineNumber: 18,
            columnNumber: 27
        }, ("TURBOPACK compile-time value", void 0)),
        label: "Projects"
    },
    {
        id: "education",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaGraduationCap"], {}, void 0, false, {
            fileName: "[project]/app/components/FloatingNavbar.tsx",
            lineNumber: 19,
            columnNumber: 28
        }, ("TURBOPACK compile-time value", void 0)),
        label: "Education"
    },
    {
        id: "contact",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPaperPlane"], {}, void 0, false, {
            fileName: "[project]/app/components/FloatingNavbar.tsx",
            lineNumber: 20,
            columnNumber: 26
        }, ("TURBOPACK compile-time value", void 0)),
        label: "Contact"
    }
];
const FloatingNavbar = ()=>{
    _s();
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [hideBar, setHideBar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FloatingNavbar.useEffect": ()=>{
            const handleScroll = {
                "FloatingNavbar.useEffect.handleScroll": ()=>{
                    let currentSection = "";
                    sections.forEach({
                        "FloatingNavbar.useEffect.handleScroll": (section)=>{
                            const el = document.getElementById(section.id);
                            if (el) {
                                const rect = el.getBoundingClientRect();
                                if (rect.top <= 200 && rect.bottom >= 200) {
                                    currentSection = section.id;
                                }
                            }
                        }
                    }["FloatingNavbar.useEffect.handleScroll"]);
                    setActiveSection(currentSection);
                }
            }["FloatingNavbar.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "FloatingNavbar.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["FloatingNavbar.useEffect"];
        }
    }["FloatingNavbar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FloatingNavbar.useEffect": ()=>{
            const footer = document.querySelector("footer");
            if (!footer) return;
            const observer = new IntersectionObserver({
                "FloatingNavbar.useEffect": (entries)=>{
                    entries.forEach({
                        "FloatingNavbar.useEffect": (entry)=>{
                            setHideBar(entry.isIntersecting);
                        }
                    }["FloatingNavbar.useEffect"]);
                }
            }["FloatingNavbar.useEffect"], {
                root: null,
                threshold: 0.1
            });
            observer.observe(footer);
            return ({
                "FloatingNavbar.useEffect": ()=>observer.disconnect()
            })["FloatingNavbar.useEffect"];
        }
    }["FloatingNavbar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].nav, {
                className: "fixed right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-1 z-50 p-2 rounded-2xl bg-[var(--ink-soft)]/80 backdrop-blur-xl border border-[var(--line)]",
                animate: {
                    transform: hideBar ? "translateY(-50%) translateX(150%)" : "translateY(-50%) translateX(0%)"
                },
                transition: {
                    duration: 0.3
                },
                children: sections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>document.getElementById(section.id)?.scrollIntoView({
                                behavior: "smooth"
                            }),
                        title: section.label,
                        className: `group relative w-11 h-11 flex items-center justify-center rounded-xl text-lg transition-all duration-200 ${activeSection === section.id ? "bg-[var(--mint)] text-[var(--ink)]" : "text-[var(--muted)] hover:text-[var(--mint)] hover:bg-[var(--ink)]"}`,
                        children: [
                            section.icon,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "pointer-events-none absolute right-full mr-3 px-2 py-1 rounded-md bg-[var(--ink)] border border-[var(--line)] text-xs font-mono-ui text-[var(--paper)] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity",
                                children: section.label
                            }, void 0, false, {
                                fileName: "[project]/app/components/FloatingNavbar.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, section.id, true, {
                        fileName: "[project]/app/components/FloatingNavbar.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/app/components/FloatingNavbar.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].nav, {
                className: "fixed bottom-4 left-1/2 -translate-x-1/2 flex md:hidden items-center gap-2 bg-[var(--ink-soft)]/90 backdrop-blur-xl px-3 py-2.5 rounded-full z-50 border border-[var(--line)] shadow-2xl",
                animate: {
                    transform: hideBar ? "translateX(-50%) translateY(120%)" : "translateX(-50%) translateY(0%)"
                },
                transition: {
                    duration: 0.3
                },
                children: sections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        onClick: ()=>document.getElementById(section.id)?.scrollIntoView({
                                behavior: "smooth"
                            }),
                        className: `w-10 h-10 flex items-center justify-center rounded-full text-base transition-all duration-200 ${activeSection === section.id ? "bg-[var(--mint)] text-[var(--ink)]" : "text-[var(--muted)] hover:text-[var(--mint)]"}`,
                        whileTap: {
                            scale: 0.9
                        },
                        children: section.icon
                    }, section.id, false, {
                        fileName: "[project]/app/components/FloatingNavbar.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/app/components/FloatingNavbar.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(FloatingNavbar, "+i0oVIPY/CTggDdn3Q/QRI/TGFI=");
_c = FloatingNavbar;
const __TURBOPACK__default__export__ = FloatingNavbar;
var _c;
__turbopack_context__.k.register(_c, "FloatingNavbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_components_FloatingNavbar_tsx_019sdzq._.js.map