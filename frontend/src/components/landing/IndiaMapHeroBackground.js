import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CITIES = [
    { id: "delhi", name: "New Delhi", state: "Central HQ", x: 530, y: 275, major: true, region: "north", delay: 0.3 },
    { id: "bengaluru", name: "Bengaluru", state: "Karnataka", x: 525, y: 635, major: true, region: "south", delay: 0.5 },
    { id: "mumbai", name: "Mumbai", state: "Maharashtra", x: 440, y: 510, major: true, region: "west", delay: 0.6 },
    { id: "chennai", name: "Chennai", state: "Tamil Nadu", x: 580, y: 665, major: true, region: "south", delay: 0.7 },
    { id: "hyderabad", name: "Hyderabad", state: "Telangana & AP", x: 550, y: 550, major: true, region: "south", delay: 0.8 },
    { id: "kolkata", name: "Kolkata", state: "West Bengal", x: 735, y: 430, major: true, region: "east", delay: 0.9 },
    { id: "jaipur", name: "Jaipur", state: "Rajasthan", x: 470, y: 315, major: false, region: "west", delay: 1.0 },
    { id: "lucknow", name: "Lucknow", state: "Uttar Pradesh", x: 605, y: 310, major: false, region: "north", delay: 1.1 }
];

const ROUTES = [
    { from: CITIES[0], to: CITIES[1], path: "M 530 275 Q 515 450 525 635", id: "delhi-blr", delay: 0.8 },
    { from: CITIES[0], to: CITIES[2], path: "M 530 275 Q 460 380 440 510", id: "delhi-mum", delay: 1.0 },
    { from: CITIES[0], to: CITIES[5], path: "M 530 275 Q 630 330 735 430", id: "delhi-kol", delay: 1.2 },
    { from: CITIES[0], to: CITIES[6], path: "M 530 275 Q 495 290 470 315", id: "delhi-jpr", delay: 1.3 },
    { from: CITIES[0], to: CITIES[7], path: "M 530 275 Q 570 285 605 310", id: "delhi-lko", delay: 1.4 },
    { from: CITIES[2], to: CITIES[1], path: "M 440 510 Q 470 580 525 635", id: "mum-blr", delay: 1.5 },
    { from: CITIES[2], to: CITIES[4], path: "M 440 510 Q 500 520 550 550", id: "mum-hyd", delay: 1.6 },
    { from: CITIES[1], to: CITIES[3], path: "M 525 635 Q 555 645 580 665", id: "blr-chn", delay: 1.7 },
    { from: CITIES[4], to: CITIES[3], path: "M 550 550 Q 575 610 580 665", id: "hyd-chn", delay: 1.8 },
    { from: CITIES[7], to: CITIES[5], path: "M 605 310 Q 675 365 735 430", id: "lko-kol", delay: 1.9 }
];

export default function IndiaMapHeroBackground() {
    const { scrollY } = useScroll();
    // Parallax: gently shifts up and fades as hero scrolls out
    const mapY = useTransform(scrollY, [0, 500], [0, 50]);
    const mapOpacity = useTransform(scrollY, [0, 400], [1, 0]);

    const [activeRegion, setActiveRegion] = useState("south");
    useEffect(() => {
        const regions = ["south", "north", "west", "east"];
        let idx = 0;
        const interval = setInterval(() => {
            idx = (idx + 1) % regions.length;
            setActiveRegion(regions[idx]);
        }, 5500);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            style={{ y: mapY, opacity: mapOpacity }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0"
            aria-hidden="true"
        >
            {/* White gradient overlays ensuring content is 100% legible */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/90 sm:via-white/70 to-transparent" />
            <div className="absolute inset-x-0 top-0 h-24 z-10 bg-gradient-to-b from-white to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-32 z-10 bg-gradient-to-t from-white to-transparent" />

            <svg
                viewBox="0 0 1000 850"
                preserveAspectRatio="xMidYMid slice"
                className="w-full h-full opacity-85"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    {/* Micro-grid pattern */}
                    <pattern id="geoGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                        <circle cx="15" cy="15" r="0.8" fill="#059669" fillOpacity="0.18" />
                    </pattern>

                    {/* Regional ambient glow */}
                    <radialGradient id="glowSouth" cx="530" cy="620" r="180" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#10B981" stopOpacity="0.18" />
                        <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="glowNorth" cx="540" cy="280" r="160" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#059669" stopOpacity="0.16" />
                        <stop offset="100%" stopColor="#059669" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="glowWest" cx="440" cy="460" r="150" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#0D9488" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#0D9488" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="glowEast" cx="740" cy="420" r="150" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#059669" stopOpacity="0.16" />
                        <stop offset="100%" stopColor="#059669" stopOpacity="0" />
                    </radialGradient>
                </defs>

                {/* Region Glow Highlights */}
                <circle cx="530" cy="620" r="190" fill="url(#glowSouth)" className={`transition-opacity duration-1000 ${activeRegion === "south" ? "opacity-100" : "opacity-20"}`} />
                <circle cx="540" cy="280" r="170" fill="url(#glowNorth)" className={`transition-opacity duration-1000 ${activeRegion === "north" ? "opacity-100" : "opacity-20"}`} />
                <circle cx="440" cy="460" r="160" fill="url(#glowWest)" className={`transition-opacity duration-1000 ${activeRegion === "west" ? "opacity-100" : "opacity-20"}`} />
                <circle cx="740" cy="420" r="160" fill="url(#glowEast)" className={`transition-opacity duration-1000 ${activeRegion === "east" ? "opacity-100" : "opacity-20"}`} />

                {/* INDIA MAINLAND GEOGRAPHICAL OUTLINE */}
                <motion.g
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    <path
                        d="M 515 90 
                           C 540 85, 565 105, 580 135 
                           C 590 155, 615 175, 605 200 
                           C 585 220, 570 235, 610 245 
                           C 650 255, 695 250, 725 280 
                           C 750 300, 790 305, 830 300 
                           C 855 290, 895 290, 915 315 
                           C 935 340, 910 380, 870 395 
                           C 835 405, 800 380, 785 415 
                           C 765 445, 750 475, 745 515 
                           C 730 545, 700 575, 680 610 
                           C 655 655, 625 700, 595 745 
                           C 575 780, 555 815, 535 830 
                           C 530 835, 520 835, 515 825 
                           C 500 790, 480 750, 470 705 
                           C 460 660, 440 615, 430 575 
                           C 418 540, 400 505, 380 475 
                           C 360 455, 325 450, 310 425 
                           C 290 395, 315 365, 350 355 
                           C 380 345, 405 350, 430 320 
                           C 440 300, 440 270, 455 235 
                           C 470 200, 485 155, 500 120 
                           Z"
                        fill="url(#geoGrid)"
                        stroke="#059669"
                        strokeWidth="1.8"
                        strokeOpacity="0.45"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                    />

                    {/* Subtle internal state boundaries */}
                    <path d="M 450 240 Q 510 250 560 230" fill="none" stroke="#059669" strokeWidth="0.8" strokeOpacity="0.25" strokeDasharray="3 4" />
                    <path d="M 460 325 Q 580 325 715 315" fill="none" stroke="#059669" strokeWidth="0.8" strokeOpacity="0.25" strokeDasharray="4 4" />
                    <path d="M 370 375 Q 440 400 535 390" fill="none" stroke="#059669" strokeWidth="0.8" strokeOpacity="0.25" strokeDasharray="3 4" />
                    <path d="M 405 475 Q 515 480 670 480" fill="none" stroke="#059669" strokeWidth="0.8" strokeOpacity="0.25" strokeDasharray="4 4" />
                    <path d="M 445 615 Q 525 610 630 635" fill="none" stroke="#059669" strokeWidth="0.8" strokeOpacity="0.25" strokeDasharray="3 4" />
                    <path d="M 660 520 Q 615 590 565 685" fill="none" stroke="#059669" strokeWidth="0.8" strokeOpacity="0.25" strokeDasharray="3 4" />
                    <path d="M 760 310 Q 800 335 845 310" fill="none" stroke="#059669" strokeWidth="0.8" strokeOpacity="0.25" strokeDasharray="3 4" />
                </motion.g>

                {/* ANIMATED WELFARE ROUTE CONNECTION ARCS */}
                <g>
                    {ROUTES.map((route, idx) => (
                        <motion.g
                            key={route.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: route.delay }}
                        >
                            <path
                                d={route.path}
                                fill="none"
                                stroke="#CBD5E1"
                                strokeWidth="1.2"
                                strokeDasharray="4 5"
                                strokeOpacity="0.6"
                            />

                            <path
                                d={route.path}
                                fill="none"
                                stroke="#059669"
                                strokeWidth="1.8"
                                strokeDasharray="14 140"
                                strokeOpacity="0.9"
                                style={{
                                    animation: `dashTravel ${5 + (idx % 4)}s linear infinite`,
                                    animationDelay: `${idx * 0.4}s`
                                }}
                            />
                        </motion.g>
                    ))}
                </g>

                {/* LUMINOUS PARTICLES */}
                <circle r="2.8" fill="#059669" opacity="0.95">
                    <animateMotion path="M 530 275 Q 515 450 525 635" dur="6s" repeatCount="indefinite" />
                </circle>

                <circle r="2.4" fill="#0D9488" opacity="0.95">
                    <animateMotion path="M 440 510 Q 500 520 550 550 Q 575 610 580 665" dur="7.5s" repeatCount="indefinite" />
                </circle>

                <circle r="2.4" fill="#059669" opacity="0.95">
                    <animateMotion path="M 530 275 Q 630 330 735 430" dur="6.8s" repeatCount="indefinite" />
                </circle>

                {/* STAGGERED CITY MARKERS */}
                {CITIES.map((c) => (
                    <motion.g
                        key={c.id}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: c.delay, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* Outer pulsing ring */}
                        <circle
                            cx={c.x}
                            cy={c.y}
                            r={c.major ? "14" : "9"}
                            fill="#059669"
                            fillOpacity="0.14"
                            className="animate-ping"
                            style={{ animationDuration: c.major ? "3s" : "4.2s" }}
                        />

                        {/* City Halo */}
                        <circle
                            cx={c.x}
                            cy={c.y}
                            r={c.major ? "6" : "4"}
                            fill="white"
                            stroke="#059669"
                            strokeWidth="1.4"
                        />

                        {/* City Center Node */}
                        <circle
                            cx={c.x}
                            cy={c.y}
                            r={c.major ? "3.5" : "2.5"}
                            fill={c.major ? "#059669" : "#090D16"}
                        />

                        {/* City Label */}
                        <text
                            x={c.x + (c.id === "mumbai" ? -10 : c.id === "chennai" ? 10 : 8)}
                            y={c.y + 4}
                            textAnchor={c.id === "mumbai" ? "end" : "start"}
                            fontSize="11"
                            fontWeight="700"
                            fill="#0F172A"
                            fillOpacity="0.9"
                            className="font-sans select-none drop-shadow-2xs"
                        >
                            {c.name}
                        </text>
                    </motion.g>
                ))}
            </svg>

            <style>{`
                @keyframes dashTravel {
                    0% { stroke-dashoffset: 180; }
                    100% { stroke-dashoffset: 0; }
                }
            `}</style>
        </motion.div>
    );
}