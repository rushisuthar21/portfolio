(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/useTypewriter.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useTypewriter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useTypewriter(text) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _s();
    const { speed = 100, delay = 0 } = options;
    const [displayText, setDisplayText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTypewriter.useEffect": ()=>{
            let index = 0;
            const start = setTimeout({
                "useTypewriter.useEffect.start": ()=>{
                    const interval = setInterval({
                        "useTypewriter.useEffect.start.interval": ()=>{
                            if (index < text.length) {
                                setDisplayText({
                                    "useTypewriter.useEffect.start.interval": (prev)=>prev + text.charAt(index)
                                }["useTypewriter.useEffect.start.interval"]);
                                index++;
                            } else {
                                clearInterval(interval);
                            }
                        }
                    }["useTypewriter.useEffect.start.interval"], speed);
                    return ({
                        "useTypewriter.useEffect.start": ()=>clearInterval(interval)
                    })["useTypewriter.useEffect.start"];
                }
            }["useTypewriter.useEffect.start"], delay);
            return ({
                "useTypewriter.useEffect": ()=>clearTimeout(start)
            })["useTypewriter.useEffect"];
        }
    }["useTypewriter.useEffect"], [
        text,
        speed,
        delay
    ]);
    return displayText;
}
_s(useTypewriter, "BGTT0ZOxBvRs7gc2sT314jlRoZs=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$useTypewriter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/useTypewriter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/si/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const floatingIcons = [
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaReact"], {
            className: "text-blue-300 text-4xl"
        }, void 0, false, {
            fileName: "[project]/app/components/Hero.tsx",
            lineNumber: 25,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaNodeJs"], {
            className: "text-green-400 text-4xl"
        }, void 0, false, {
            fileName: "[project]/app/components/Hero.tsx",
            lineNumber: 26,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaDatabase"], {
            className: "text-yellow-400 text-4xl"
        }, void 0, false, {
            fileName: "[project]/app/components/Hero.tsx",
            lineNumber: 27,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaJs"], {
            className: "text-yellow-500 text-4xl"
        }, void 0, false, {
            fileName: "[project]/app/components/Hero.tsx",
            lineNumber: 28,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaHtml5"], {
            className: "text-orange-500 text-4xl"
        }, void 0, false, {
            fileName: "[project]/app/components/Hero.tsx",
            lineNumber: 29,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCss3Alt"], {
            className: "text-blue-500 text-4xl"
        }, void 0, false, {
            fileName: "[project]/app/components/Hero.tsx",
            lineNumber: 30,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiExpress"], {
            className: "text-gray-300 text-4xl"
        }, void 0, false, {
            fileName: "[project]/app/components/Hero.tsx",
            lineNumber: 31,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaJava"], {
            className: "text-red-500 text-4xl"
        }, void 0, false, {
            fileName: "[project]/app/components/Hero.tsx",
            lineNumber: 32,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiFirebase"], {
            className: "text-yellow-500 text-4xl"
        }, void 0, false, {
            fileName: "[project]/app/components/Hero.tsx",
            lineNumber: 33,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiMongodb"], {
            className: "text-green-500 text-4xl"
        }, void 0, false, {
            fileName: "[project]/app/components/Hero.tsx",
            lineNumber: 34,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPhp"], {
            className: "text-indigo-400 text-4xl"
        }, void 0, false, {
            fileName: "[project]/app/components/Hero.tsx",
            lineNumber: 35,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    }
];
const Hero = ()=>{
    _s();
    const displayText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$useTypewriter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Hii! I'm Rushi 👋", {
        speed: 170
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "block absolute inset-0 pointer-events-none z-0",
                children: floatingIcons.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute opacity-60",
                        initial: {
                            x: Math.random() * 800 - 400,
                            y: Math.random() * 600 - 300
                        },
                        animate: {
                            x: [
                                Math.random() * 900 - 450,
                                Math.random() * 900 - 450,
                                Math.random() * 900 - 450
                            ],
                            y: [
                                Math.random() * 700 - 350,
                                Math.random() * 700 - 350,
                                Math.random() * 700 - 350
                            ]
                        },
                        transition: {
                            duration: 12,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        },
                        style: {
                            top: "".concat(Math.random() * 100, "%"),
                            left: "".concat(Math.random() * 100, "%")
                        },
                        children: item.icon
                    }, index, false, {
                        fileName: "[project]/app/components/Hero.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/app/components/Hero.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute -top-32 -left-32 w-96 h-96 rounded-full bg-purple-300 dark:bg-purple-600 blur-3xl opacity-40 z-0",
                animate: {
                    scale: [
                        1,
                        1.2,
                        1
                    ]
                },
                transition: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }, void 0, false, {
                fileName: "[project]/app/components/Hero.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute bottom-0 right-0 w-80 h-80 bg-red-300 dark:bg-red-500 rounded-full blur-3xl opacity-30 z-0",
                animate: {
                    scale: [
                        1,
                        1.15,
                        1
                    ]
                },
                transition: {
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }, void 0, false, {
                fileName: "[project]/app/components/Hero.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:w-1/2 text-center md:text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                className: "text-5xl sm:text-6xl font-bold font-sarala text-gray-900 dark:text-white leading-tight",
                                initial: {
                                    opacity: 0,
                                    y: -40
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 1
                                },
                                children: displayText
                            }, void 0, false, {
                                fileName: "[project]/app/components/Hero.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                className: "mt-6 text-xl text-gray-700 dark:text-gray-300 font-quicksand max-w-lg",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 1,
                                    delay: 0.3
                                },
                                children: [
                                    "A ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-yellow-500 font-semibold",
                                        children: "Full-Stack Developer"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Hero.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " skilled in crafting responsive web apps, creative designing, and data-driven digital marketing."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Hero.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "mt-8 flex gap-4 justify-center md:justify-start",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 1,
                                    delay: 0.6
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/Rushi-Suthar-Resume.pdf",
                                    download: true,
                                    className: "px-6 py-3 rounded-xl bg-yellow-600 text-white shadow-lg hover:bg-red-600 transition font-medium",
                                    children: "Download My Resume"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Hero.tsx",
                                    lineNumber: 125,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/Hero.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Hero.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "mt-10 md:mt-0 md:w-1/3 flex justify-center relative",
                        initial: {
                            opacity: 0,
                            scale: 0.8
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            duration: 0.8,
                            delay: 0.7
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute w-60 h-60 md:w-72 md:h-72 rounded-full bg-gradient-to-tr from-purple-400 to-red-400 blur-2xl opacity-40"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Hero.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-70 h-70 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/profilepic.png",
                                    alt: "Profile",
                                    width: 350,
                                    height: 350,
                                    className: "object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Hero.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/Hero.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Hero.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Hero.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute bottom-10 inset-x-0 mx-auto flex flex-col items-center w-fit",
                animate: {
                    y: [
                        0,
                        30,
                        0
                    ]
                },
                transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-10 w-10 text-gray-700 dark:text-gray-300",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        strokeWidth: 2,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M19 9l-7 7-7-7"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Hero.tsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Hero.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 dark:text-gray-400 text-sm mt-2 font-delius",
                        children: "Scroll down to explore more"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Hero.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Hero.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Hero.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Hero, "K/7DYm6C/NQqM/vI2D/gSsJvh8g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$useTypewriter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Hero;
const __TURBOPACK__default__export__ = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Projects.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const floatingIcons = [
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaReact"], {
            className: "text-blue-300 text-3xl"
        }, void 0, false, {
            fileName: "[project]/app/components/Projects.tsx",
            lineNumber: 16,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaNodeJs"], {
            className: "text-green-400 text-3xl"
        }, void 0, false, {
            fileName: "[project]/app/components/Projects.tsx",
            lineNumber: 17,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaDatabase"], {
            className: "text-yellow-400 text-3xl"
        }, void 0, false, {
            fileName: "[project]/app/components/Projects.tsx",
            lineNumber: 18,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaJs"], {
            className: "text-yellow-500 text-3xl"
        }, void 0, false, {
            fileName: "[project]/app/components/Projects.tsx",
            lineNumber: 19,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaHtml5"], {
            className: "text-orange-500 text-3xl"
        }, void 0, false, {
            fileName: "[project]/app/components/Projects.tsx",
            lineNumber: 20,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCss3Alt"], {
            className: "text-blue-500 text-3xl"
        }, void 0, false, {
            fileName: "[project]/app/components/Projects.tsx",
            lineNumber: 21,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCloud"], {
            className: "text-blue-300 text-3xl"
        }, void 0, false, {
            fileName: "[project]/app/components/Projects.tsx",
            lineNumber: 22,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    }
];
const projects = [
    {
        id: 1,
        title: "Nutri Serve",
        description: "A smart nutrition tracking app that helps users log their meals, monitor calories, and get personalized diet recommendations.",
        video: "https://portfolio-chandrika-projects.s3.us-east-1.amazonaws.com/nutriserve.mp4",
        liveLink: "https://your-live-project.com",
        githubLink: "https://github.com/2024-Winter-ITE-5425-0NA/project-react-client-webdriver",
        tech: [
            "React",
            "Node.js",
            "MongoDB"
        ]
    },
    {
        id: 2,
        title: "MFLIX",
        video: "https://portfolio-chandrika-projects.s3.us-east-1.amazonaws.com/MFLIX.mp4",
        description: "A full-stack movie platform where users can search, filter and explore movies backed by a database-driven backend.",
        liveLink: "",
        githubLink: "https://github.com/chandrikakillada/MFLIX",
        tech: [
            "Express",
            "MongoDB",
            "Node.js"
        ]
    },
    {
        id: 3,
        title: "Omnifood",
        video: "https://user-images.githubusercontent.com/37527885/128391666-0c4a4021-f22c-4519-9d8e-7d3a712e9889.mp4",
        description: "A responsive food ordering platform showcasing an elegant UI and smooth user experience built with modern vanilla JS.",
        liveLink: "https://bright-bonbon-9d881a.netlify.app/",
        githubLink: "https://github.com/chandrikakillada/Omnifood",
        tech: [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    }
];
const Projects = ()=>{
    _s();
    const [showTech, setShowTech] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Projects.useEffect": ()=>{
            setTimeout({
                "Projects.useEffect": ()=>setShowTech(true)
            }["Projects.useEffect"], 500);
        }
    }["Projects.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "projects",
        className: "font-quicksand relative overflow-hidden py-20 bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute -top-32 -left-32 w-96 h-96 rounded-full bg-purple-300 dark:bg-purple-600 blur-3xl opacity-40",
                animate: {
                    scale: [
                        1,
                        1.2,
                        1
                    ]
                },
                transition: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }, void 0, false, {
                fileName: "[project]/app/components/Projects.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute bottom-0 right-0 w-80 h-80 bg-red-300 dark:bg-red-500 rounded-full blur-3xl opacity-30",
                animate: {
                    scale: [
                        1,
                        1.15,
                        1
                    ]
                },
                transition: {
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }, void 0, false, {
                fileName: "[project]/app/components/Projects.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "block z-50",
                children: floatingIcons.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute z-50",
                        initial: {
                            x: Math.random() * 600 - 300,
                            y: Math.random() * 600 - 300
                        },
                        animate: {
                            x: [
                                Math.random() * 700 - 350,
                                Math.random() * 700 - 350,
                                Math.random() * 700 - 350
                            ],
                            y: [
                                Math.random() * 500 - 250,
                                Math.random() * 500 - 250,
                                Math.random() * 500 - 250
                            ]
                        },
                        transition: {
                            duration: 10,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        },
                        style: {
                            top: "".concat(Math.random() * 100, "%"),
                            left: "".concat(Math.random() * 100, "%")
                        },
                        children: item.icon
                    }, index, false, {
                        fileName: "[project]/app/components/Projects.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/app/components/Projects.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center relative text-xl font-bold text-center pb-2 font-sarala mt-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "relative text-4xl md:text-5xl font-bold text-gray-900 dark:text-white",
                    children: [
                        "Projects That Define My Journey 🚀",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute inset-x-0 bottom-[-6px] h-5 bg-red-200 opacity-70 rounded-md hidden md:block blur-md"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Projects.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Projects.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/Projects.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-20 max-w-6xl mx-auto px-6 space-y-20 relative z-10",
                children: projects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 50
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.7,
                            delay: index * 0.3
                        },
                        className: "flex flex-col md:flex-row bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-red-300 shadow-xl rounded-2xl p-10 gap-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full md:w-1/2 flex flex-col space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold text-red-700 dark:text-red-400",
                                        children: project.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Projects.tsx",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-900 dark:text-gray-200 leading-relaxed",
                                        children: project.description
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Projects.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    showTech && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-3 mt-2",
                                        children: project.tech.map((tech, techIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                initial: {
                                                    x: 40,
                                                    opacity: 0
                                                },
                                                animate: {
                                                    x: 0,
                                                    opacity: 1
                                                },
                                                transition: {
                                                    delay: techIndex * 0.15
                                                },
                                                className: "bg-red-500 text-white px-4 py-1 text-sm font-semibold rounded-lg shadow",
                                                children: tech
                                            }, techIndex, false, {
                                                fileName: "[project]/app/components/Projects.tsx",
                                                lineNumber: 158,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Projects.tsx",
                                        lineNumber: 156,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4 mt-8 flex-wrap",
                                        children: [
                                            project.liveLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: project.liveLink,
                                                target: "_blank",
                                                className: "px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md text-sm font-semibold transition",
                                                children: "View Live"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Projects.tsx",
                                                lineNumber: 174,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: project.githubLink,
                                                target: "_blank",
                                                className: "px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg shadow-md text-sm font-semibold transition",
                                                children: "GitHub"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Projects.tsx",
                                                lineNumber: 182,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Projects.tsx",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Projects.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full md:w-1/2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                    src: project.video,
                                    className: "w-full h-[260px] sm:h-[320px] md:h-[350px] object-cover rounded-xl shadow-lg",
                                    autoPlay: true,
                                    loop: true,
                                    muted: true
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Projects.tsx",
                                    lineNumber: 194,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/Projects.tsx",
                                lineNumber: 193,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, project.id, true, {
                        fileName: "[project]/app/components/Projects.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/app/components/Projects.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Projects.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Projects, "awDCYfX6MIqnpOlTfYOMpXzx8Fs=");
_c = Projects;
const __TURBOPACK__default__export__ = Projects;
var _c;
__turbopack_context__.k.register(_c, "Projects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/About.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
;
const About = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "relative py-28 px-6 md:px-12 lg:px-24 overflow-hidden bg-gradient-to-br from-purple-100 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute -top-20 right-0 w-72 h-72 bg-blue-300 dark:bg-blue-600 rounded-full blur-3xl opacity-30",
                animate: {
                    scale: [
                        1,
                        1.2,
                        1
                    ]
                },
                transition: {
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }, void 0, false, {
                fileName: "[project]/app/components/About.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute bottom-0 left-0 w-80 h-80 bg-purple-300 dark:bg-purple-700 rounded-full blur-3xl opacity-30",
                animate: {
                    scale: [
                        1,
                        1.15,
                        1
                    ]
                },
                transition: {
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }, void 0, false, {
                fileName: "[project]/app/components/About.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "md:w-3/4 text-center md:text-left",
                        initial: {
                            opacity: 0,
                            x: -50
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: 0.8,
                            delay: 0.3
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative inline-block pb-3 mt-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl font-bold font-sarala text-gray-900 dark:text-white relative inline-block heading",
                                    children: [
                                        "About Me 👩",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute inset-x-0 bottom-[-6px] h-4 bg-red-300 blur-md opacity-40 rounded-md"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/About.tsx",
                                            lineNumber: 37,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/About.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/About.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-quicksand max-w-xl",
                                children: "Hello again! Thanks for scrolling this far! My portfolio—just like my code—is always a work in progress. I love learning, building, and occasionally breaking things (the fun part 😆)."
                            }, void 0, false, {
                                fileName: "[project]/app/components/About.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "mt-5 text-lg text-gray-700 dark:text-gray-300 list-disc pl-6 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "💻 ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Grinding LeetCode"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/About.tsx",
                                                lineNumber: 51,
                                                columnNumber: 18
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " because solving problems is my version of fun."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/About.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "🛠️ ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Building side projects"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/About.tsx",
                                                lineNumber: 55,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " to explore creativity & new tech."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/About.tsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "🎮 ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Gaming"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/About.tsx",
                                                lineNumber: 59,
                                                columnNumber: 18
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " (and yes, I rage-quit sometimes)."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/About.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/About.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/About.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "w-full md:w-1/3 flex justify-center relative",
                        initial: {
                            opacity: 0,
                            scale: 0.8
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            duration: 0.8,
                            delay: 0.6
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full bg-gradient-to-tr from-purple-400 to-blue-400 blur-2xl opacity-40"
                            }, void 0, false, {
                                fileName: "[project]/app/components/About.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-44 h-44 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white dark:ring-gray-700",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/prf.png",
                                    alt: "",
                                    width: 400,
                                    height: 400,
                                    className: "object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/About.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/About.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/About.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/About.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/About.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = About;
const __TURBOPACK__default__export__ = About;
var _c;
__turbopack_context__.k.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ToolKit.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
;
const skills = [
    {
        name: "Java",
        icon: "/java-original.svg"
    },
    {
        name: "JavaScript",
        icon: "/javascript-plain.svg"
    },
    {
        name: "MongoDB",
        icon: "/mongodb-original.svg"
    },
    {
        name: "MySQL",
        icon: "/mysql-original.svg"
    },
    {
        name: "Node.js",
        icon: "/nodejs-original.svg"
    },
    {
        name: "React",
        icon: "/react-original.svg"
    },
    {
        name: "Redux",
        icon: "/redux-original.svg"
    },
    {
        name: "Angular",
        icon: "/angular-original.svg"
    },
    {
        name: "Express.js",
        icon: "/express-original.svg"
    },
    {
        name: "Next.js",
        icon: "/nextjs-original.svg"
    }
];
const Toolkit = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "toolkit",
        className: "relative py-24 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-black font-sarala",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute top-0 left-0 w-72 h-72 bg-red-300 dark:bg-red-600 rounded-full blur-3xl opacity-30",
                animate: {
                    scale: [
                        1,
                        1.15,
                        1
                    ]
                },
                transition: {
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }, void 0, false, {
                fileName: "[project]/app/components/ToolKit.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute bottom-0 right-0 w-72 h-72 bg-purple-300 dark:bg-purple-700 rounded-full blur-3xl opacity-30",
                animate: {
                    scale: [
                        1,
                        1.2,
                        1
                    ]
                },
                transition: {
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }, void 0, false, {
                fileName: "[project]/app/components/ToolKit.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-6xl mx-auto px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                            className: "relative inline-block text-4xl font-bold text-gray-900 dark:text-white font-sarala",
                            initial: {
                                opacity: 0,
                                y: -30
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.8
                            },
                            children: [
                                "My Toolkit 🖥️",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute left-1/2 -bottom-2 w-[110%] h-4 rounded-md bg-red-200 dark:bg-red-500 opacity-40 blur-sm -translate-x-1/2"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ToolKit.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/ToolKit.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/ToolKit.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 justify-center font-quicksand",
                        children: skills.map((skill, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "flex flex-col items-center p-4 rounded-xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl shadow-md hover:shadow-xl transition-all hover:scale-110 border border-white/30 dark:border-gray-700/40",
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.5,
                                    delay: index * 0.1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        animate: {
                                            y: [
                                                0,
                                                -6,
                                                0
                                            ]
                                        },
                                        transition: {
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: skill.icon,
                                            alt: skill.name,
                                            width: 55,
                                            height: 55
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ToolKit.tsx",
                                            lineNumber: 66,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ToolKit.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-3 text-sm font-medium text-gray-800 dark:text-gray-200",
                                        children: skill.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ToolKit.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, index, true, {
                                fileName: "[project]/app/components/ToolKit.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/app/components/ToolKit.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ToolKit.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ToolKit.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Toolkit;
const __TURBOPACK__default__export__ = Toolkit;
var _c;
__turbopack_context__.k.register(_c, "Toolkit");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Contact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$emailjs$2d$com$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/emailjs-com/es/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const Contact = ()=>{
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        success: false,
        error: false
    });
    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setStatus({
                success: false,
                error: true
            });
            return;
        }
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$emailjs$2d$com$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].send("service_bl0rvio", "template_0zhanl5", {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message
            }, "64b2-KnLKskmMlVNU");
            setStatus({
                success: true,
                error: false
            });
            setFormData({
                name: "",
                email: "",
                message: ""
            });
        } catch (error) {
            console.error("Error sending email:", error);
            setStatus({
                success: false,
                error: true
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "relative py-32 overflow-hidden bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute top-10 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full blur-3xl opacity-40",
                animate: {
                    scale: [
                        1,
                        1.15,
                        1
                    ]
                },
                transition: {
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }, void 0, false, {
                fileName: "[project]/app/components/Contact.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute bottom-0 right-0 w-80 h-80 bg-red-300 dark:bg-red-500 rounded-full blur-3xl opacity-30",
                animate: {
                    scale: [
                        1,
                        1.2,
                        1
                    ]
                },
                transition: {
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }, void 0, false, {
                fileName: "[project]/app/components/Contact.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-5xl mx-auto px-6 font-sarala z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "relative text-4xl font-bold inline-block heading text-gray-900 dark:text-white",
                            children: [
                                "Let's Connect! 💌",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute inset-x-0 bottom-[-6px] h-6 bg-red-200 dark:bg-red-500 blur-sm opacity-40 rounded-md translate-y-2"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Contact.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Contact.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Contact.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row items-center justify-between font-quicksand gap-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "md:w-1/2 text-center md:text-left",
                                initial: {
                                    opacity: 0,
                                    x: -40
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    duration: 0.8,
                                    delay: 0.3
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg text-gray-700 dark:text-gray-300 leading-relaxed",
                                        children: "Let’s build something amazing together! Whether it’s coding, designing, or collaborating on creative ideas — I’m always excited to connect. Drop a message and let’s get started! ✨"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Contact.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8 flex justify-center md:justify-start space-x-8 text-red-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                                whileHover: {
                                                    scale: 1.2
                                                },
                                                whileTap: {
                                                    scale: 0.9
                                                },
                                                href: "https://linkedin.com/in/chandrikakillada",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "transition",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLinkedin"], {
                                                    size: 34,
                                                    className: "hover:text-pink-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Contact.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Contact.tsx",
                                                lineNumber: 93,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                                whileHover: {
                                                    scale: 1.2
                                                },
                                                whileTap: {
                                                    scale: 0.9
                                                },
                                                href: "https://github.com/chandrikakillada",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "transition",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaGithub"], {
                                                    size: 34,
                                                    className: "hover:text-pink-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Contact.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Contact.tsx",
                                                lineNumber: 104,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                                whileHover: {
                                                    scale: 1.2
                                                },
                                                whileTap: {
                                                    scale: 0.9
                                                },
                                                href: "mailto:chandrikakvenu@email.com",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "transition",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEnvelope"], {
                                                    size: 34,
                                                    className: "hover:text-pink-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Contact.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Contact.tsx",
                                                lineNumber: 115,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Contact.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Contact.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "md:w-1/2",
                                initial: {
                                    opacity: 0,
                                    x: 40
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    duration: 0.8,
                                    delay: 0.5
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSubmit,
                                    className: "backdrop-blur-xl bg-white/40 dark:bg-gray-800/40 p-6 rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            name: "name",
                                            value: formData.name,
                                            onChange: handleChange,
                                            placeholder: "Your Name",
                                            className: "w-full p-3 bg-white/70 dark:bg-gray-900/40 border border-red-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 mb-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Contact.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            name: "email",
                                            value: formData.email,
                                            onChange: handleChange,
                                            placeholder: "Your Email",
                                            className: "w-full p-3 bg-white/70 dark:bg-gray-900/40 border border-red-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 mb-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Contact.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            name: "message",
                                            value: formData.message,
                                            onChange: handleChange,
                                            placeholder: "Your Message",
                                            rows: 4,
                                            className: "w-full p-3 bg-white/70 dark:bg-gray-900/40 border border-red-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 mb-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Contact.tsx",
                                            lineNumber: 155,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "w-full bg-red-500 hover:bg-red-600 text-white font-semibold p-3 rounded-xl transition shadow-md",
                                            children: "SEND MESSAGE"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Contact.tsx",
                                            lineNumber: 164,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        status.success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-green-500 mt-3 text-center font-medium",
                                            children: "✅ Message sent successfully!"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Contact.tsx",
                                            lineNumber: 172,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        status.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-500 mt-3 text-center font-medium",
                                            children: "❌ Failed to send message. Try again later."
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Contact.tsx",
                                            lineNumber: 177,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Contact.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/Contact.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Contact.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Contact.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Contact.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Contact, "Hf+5DKoygs4N8bZWJT3EtbpTPSc=");
_c = Contact;
const __TURBOPACK__default__export__ = Contact;
var _c;
__turbopack_context__.k.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Experience.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
const floatingIcons = [
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCode"], {
            className: "text-blue-300 text-2xl"
        }, void 0, false, {
            fileName: "[project]/app/components/Experience.tsx",
            lineNumber: 15,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaRocket"], {
            className: "text-blue-400 text-2xl"
        }, void 0, false, {
            fileName: "[project]/app/components/Experience.tsx",
            lineNumber: 16,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLaptopCode"], {
            className: "text-blue-400 text-2xl"
        }, void 0, false, {
            fileName: "[project]/app/components/Experience.tsx",
            lineNumber: 17,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaDatabase"], {
            className: "text-blue-500 text-2xl"
        }, void 0, false, {
            fileName: "[project]/app/components/Experience.tsx",
            lineNumber: 18,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaServer"], {
            className: "text-blue-400 text-2xl"
        }, void 0, false, {
            fileName: "[project]/app/components/Experience.tsx",
            lineNumber: 19,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCloud"], {
            className: "text-blue-300 text-2xl"
        }, void 0, false, {
            fileName: "[project]/app/components/Experience.tsx",
            lineNumber: 20,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    }
];
const experiences = [
    {
        title: "Full Stack Developer - Co-op",
        company: "Credwise Financial Inc.",
        date: "May 2025 - Aug 2025",
        description: [
            "🚀 Collaborated with the RewardsX Internal Applications Team to enhance and maintain the Live Module using Next.js, React.js, Redux, and Tailwind CSS.",
            "🛠️ Designed, developed, tested, and deployed full-stack features with Node.js, PL/SQL, and MongoDB.",
            "⚡ Optimized performance and user experience, achieving 30% performance improvement and 40% reduction in bug reports.",
            "📈 Improved product impact with 20% higher user retention and 15% boost in UX ratings."
        ],
        techStack: [
            "Next.js",
            "React.js",
            "Redux",
            "Tailwind CSS",
            "PL/SQL",
            "MongoDB"
        ],
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaBriefcase"], {
            className: "text-red-500 text-xl"
        }, void 0, false, {
            fileName: "[project]/app/components/Experience.tsx",
            lineNumber: 42,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "Digital Marketing Intern",
        company: "21Twelve Interactive LLP",
        date: "May 2023 - Nov 2023",
        description: [
            "🚀 Created SEO-optimized content for social media, blogs, and websites, increasing organic traffic by 78% in 2–3 months.",
            "🔍 Managed on-page and off-page SEO, including meta optimization, keyword research, internal linking, and competitor analysis.",
            "🔗 Built quality backlinks through guest posting, business listings, broken links, social bookmarking, and Quora engagement.",
            "📊 Tracked and improved SEO performance using Google Analytics, Search Console, SEMrush, Ahrefs, Screaming Frog, and Keyword Planner."
        ],
        techStack: [
            "Google Analytics",
            "Google Search Console",
            "SEMrush",
            "Ahrefs",
            "Screaming Frog",
            "Google Keyword Planner",
            "SEO",
            "Content Marketing"
        ],
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaBriefcase"], {
            className: "text-red-500 text-xl"
        }, void 0, false, {
            fileName: "[project]/app/components/Experience.tsx",
            lineNumber: 64,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "Web Developer",
        company: "Shivaay Software Solutions",
        date: "May 2022 - Apr 2023",
        description: [
            "🚀 Collaborated with the development team to build and maintain responsive web applications using HTML, CSS, JavaScript, React.js, Node.js, and jQuery.",
            "⚡ Optimized website performance, improving load times by 30% through efficient coding, testing, and asset optimization.",
            "🛠️ Reduced API call errors by 20% and increased transaction success rates by 15%, enhancing overall system reliability.",
            "📱 Ensured seamless cross-browser and multi-device compatibility, delivering intuitive and consistent user experiences."
        ],
        techStack: [
            "Node.js",
            "React.js",
            "HTML",
            "CSS",
            "JavaScript",
            "jQuery"
        ],
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaBriefcase"], {
            className: "text-red-500 text-xl"
        }, void 0, false, {
            fileName: "[project]/app/components/Experience.tsx",
            lineNumber: 84,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    }
];
const Experience = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "experience",
        className: "relative overflow-hidden bg-gradient-to-br  from-white via-blue-50 to-purple-50  dark:from-gray-900 dark:via-gray-800 dark:to-black  py-20 font-quicksand",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute -top-20 -left-20 w-72 h-72 bg-purple-300  dark:bg-purple-600 rounded-full blur-3xl opacity-40 z-0",
                animate: {
                    scale: [
                        1,
                        1.15,
                        1
                    ]
                },
                transition: {
                    duration: 10,
                    repeat: Infinity
                }
            }, void 0, false, {
                fileName: "[project]/app/components/Experience.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute bottom-0 right-0 w-80 h-80 bg-red-300  dark:bg-red-500 rounded-full blur-3xl opacity-30 z-0",
                animate: {
                    scale: [
                        1,
                        1.25,
                        1
                    ]
                },
                transition: {
                    duration: 12,
                    repeat: Infinity
                }
            }, void 0, false, {
                fileName: "[project]/app/components/Experience.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "block z-30 absolute inset-0 pointer-events-none",
                children: floatingIcons.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            x: Math.random() * 800 - 400,
                            y: Math.random() * 800 - 400
                        },
                        animate: {
                            x: [
                                Math.random() * 500 - 250,
                                Math.random() * 500 - 250
                            ],
                            y: [
                                Math.random() * 500 - 250,
                                Math.random() * 500 - 250
                            ]
                        },
                        transition: {
                            duration: 12,
                            repeat: Infinity,
                            ease: "easeInOut",
                            repeatType: "reverse"
                        },
                        className: "absolute opacity-60",
                        style: {
                            top: "".concat(Math.random() * 100, "%"),
                            left: "".concat(Math.random() * 100, "%")
                        },
                        children: item.icon
                    }, i, false, {
                        fileName: "[project]/app/components/Experience.tsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/app/components/Experience.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative text-center mb-12 px-4 z-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-4xl md:text-5xl font-bold font-sarala  text-gray-900 dark:text-white inline-block relative",
                    children: [
                        "Professional Experience 💼",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute inset-x-0 bottom-[-10px] h-4  bg-red-300 opacity-50 blur-md rounded-lg -z-10"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Experience.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Experience.tsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/Experience.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-6 md:px-10 relative z-20",
                children: experiences.map((exp, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 40
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.6,
                            delay: index * 0.2
                        },
                        viewport: {
                            once: true
                        },
                        className: "mb-10 flex flex-col md:flex-row items-center md:items-start z-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-semibold text-gray-600 dark:text-gray-300 md:w-1/4 text-center md:text-right px-4",
                                children: exp.date
                            }, void 0, false, {
                                fileName: "[project]/app/components/Experience.tsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-white dark:bg-gray-800 shadow-lg rounded-full border border-red-400 mx-6",
                                children: exp.icon
                            }, void 0, false, {
                                fileName: "[project]/app/components/Experience.tsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full md:w-3/4 bg-white/70 dark:bg-gray-800/60  backdrop-blur-xl p-6 rounded-2xl shadow-xl  border border-red-300/40 z-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold text-red-700 dark:text-red-400",
                                        children: exp.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Experience.tsx",
                                        lineNumber: 177,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-lg font-semibold text-red-500 dark:text-red-300 mt-1",
                                        children: exp.company
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Experience.tsx",
                                        lineNumber: 180,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 space-y-2 text-gray-800 dark:text-gray-200",
                                        children: exp.description.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: d
                                            }, i, false, {
                                                fileName: "[project]/app/components/Experience.tsx",
                                                lineNumber: 186,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Experience.tsx",
                                        lineNumber: 184,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2 mt-4",
                                        children: exp.techStack.map((tech, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 py-1 bg-red-500 text-white text-sm rounded-lg font-semibold shadow-sm",
                                                children: tech
                                            }, i, false, {
                                                fileName: "[project]/app/components/Experience.tsx",
                                                lineNumber: 192,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Experience.tsx",
                                        lineNumber: 190,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Experience.tsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, index, true, {
                        fileName: "[project]/app/components/Experience.tsx",
                        lineNumber: 155,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/app/components/Experience.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Experience.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Experience;
const __TURBOPACK__default__export__ = Experience;
var _c;
__turbopack_context__.k.register(_c, "Experience");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "w-full bg-gray-900 text-white text-center py-6 px-4 font-sarala",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm sm:text-base",
            children: [
                "Made by ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold",
                    children: "Rushi Suthar"
                }, void 0, false, {
                    fileName: "[project]/app/components/Footer.tsx",
                    lineNumber: 5,
                    columnNumber: 17
                }, this),
                " | 2025"
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Footer.tsx",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/Footer.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Projects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Projects.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/About.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ToolKit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ToolKit.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Contact.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Experience$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Experience.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Footer.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.6
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 50
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: true,
                    amount: 0.2
                },
                transition: {
                    duration: 0.6
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Experience$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 50
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: true,
                    amount: 0.2
                },
                transition: {
                    duration: 0.6,
                    delay: 0.3
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Projects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 50
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: true,
                    amount: 0.2
                },
                transition: {
                    duration: 0.6,
                    delay: 0.5
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 50
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: true,
                    amount: 0.2
                },
                transition: {
                    duration: 0.6,
                    delay: 0.7
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ToolKit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 50
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: true,
                    amount: 0.2
                },
                transition: {
                    duration: 0.6,
                    delay: 0.9
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Contact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: 0.5,
                    delay: 1
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_bd59fff0._.js.map