import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

const HookIntro: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax effect for background
            gsap.to(bgRef.current, {
                yPercent: 30,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });

            // Text fade out on scroll
            gsap.to(textRef.current, {
                opacity: 0,
                y: -50,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'center center',
                    end: 'bottom top',
                    scrub: true,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            style={{
                height: '100vh',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff'
            }}
        >
            {/* Background */}
            <div
                ref={bgRef}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '120%', // Taller for parallax
                    background: 'linear-gradient(to bottom, #000000, #1a1a1a)',
                    zIndex: -1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {/* Placeholder for factory silhouette or code rain */}
                <div style={{
                    fontSize: '20rem',
                    opacity: 0.05,
                    fontWeight: 'bold',
                    whiteSpace: 'nowrap'
                }}>
                    01010101
                </div>
            </div>

            {/* Content */}
            <div ref={textRef} style={{ textAlign: 'center', maxWidth: '800px', padding: '2rem', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                >
                    <div style={{
                        display: 'inline-block',
                        marginBottom: '1rem',
                        padding: '0.5rem 1rem',
                        background: 'rgba(255, 68, 68, 0.2)',
                        border: '1px solid rgba(255, 68, 68, 0.5)',
                        borderRadius: '4px',
                        color: '#ff4444',
                        fontSize: '0.8rem',
                        letterSpacing: '2px',
                        textTransform: 'uppercase'
                    }}>
                        Systemfeil
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(3rem, 8vw, 6rem)',
                        marginBottom: '1.5rem',
                        lineHeight: 1.1
                    }}>
                        Natten da alt<br />gikk i svart
                    </h1>

                    <p style={{
                        fontSize: '1.5rem',
                        opacity: 0.8,
                        lineHeight: 1.6,
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        Et vanlig nattskift. En skjerm som fryser. Så kaos.
                    </p>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    x: '-50%',
                    opacity: 0.5
                }}
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                ↓ Scroll for å utforske
            </motion.div>
        </section>
    );
};

export default HookIntro;
