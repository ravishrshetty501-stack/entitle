import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

export default function AnimatedCounter({ value, duration = 1.2, suffix = "" }) {
    const num = parseInt(value, 10) || 0;
    const [displayVal, setDisplayVal] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    useEffect(() => {
        if (!isInView || num === 0) {
            if (num === 0) setDisplayVal(0);
            return;
        }

        let startTimestamp = null;
        const totalMs = duration * 1000;

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / totalMs, 1);
            // Quartic ease-out for realistic decelerating count
            const easeOut = 1 - Math.pow(1 - progress, 4);
            setDisplayVal(Math.floor(easeOut * num));

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                setDisplayVal(num);
            }
        };

        requestAnimationFrame(step);
    }, [isInView, num, duration]);

    return (
        <span ref={ref}>
            {displayVal}{suffix}
        </span>
    );
}
