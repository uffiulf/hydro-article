import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import TermExplainer from '../components/TermExplainer';
import Footnote from '../components/Footnote';

const RansomwareExplainer: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);
    const vizRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate cards staggering in
            gsap.from(".explainer-card", {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: "top 80%",
                }
            });

            // Network Infection Animation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: vizRef.current, // Use the container as trigger
                    start: "top 75%", // Start when top of container is at 75% of viewport height
                    toggleActions: "play none none reset" // Reset on scroll back up so it plays again
                }
            });

            // Step 1: Patient 0 gets infected
            tl.to(".patient-0 circle", { fill: "#ff4444", duration: 0.5 })
                .to(".patient-0", { scale: 1.2, duration: 0.2, yoyo: true, repeat: 1 });

            // Step 2: Spread to Admin
            tl.to(".connection.p0-admin", { stroke: "#ff4444", strokeWidth: 4, duration: 1 })
                .to(".admin-server rect", { fill: "#ff4444", duration: 0.5 })
                .to(".admin-server", { scale: 1.1, duration: 0.2, yoyo: true, repeat: 1 });

            // Step 3: Global spread (simultaneous)
            tl.to(".connection.admin-f1, .connection.admin-f2, .connection.admin-f3, .connection.admin-f4",
                { stroke: "#ff4444", strokeWidth: 3, duration: 0.8, stagger: 0.1 })
                .to(".factory circle", { fill: "#ff4444", duration: 0.5, stagger: 0.1 }, "-=0.5");

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} style={{ padding: '6rem 2rem', backgroundColor: '#0a0a0a', color: '#fff' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center' }}
                >
                    Hva er LockerGoga?
                </motion.h2>

                <div ref={cardsRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {/* Card 1 */}
                    <div className="explainer-card" style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '8px', border: '1px solid #333' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem', color: '#ff4444' }}>📩</div>
                        <h3 style={{ marginBottom: '1rem' }}>Inntrengningen</h3>
                        <p style={{ lineHeight: 1.6, opacity: 0.8 }}>
                            Alt startet med en e-post fra en betrodd kunde. Et legitimt vedlegg var utstyrt med en <TermExplainer term="trojaner" explanation="Et dataprogram som utgir seg for å være nyttig (f.eks. et dokument), men som i hemmelighet slipper inn hackere.">trojaner</TermExplainer> som ga hackerne fotfeste i februar 2019.<Footnote id={16} />
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="explainer-card" style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '8px', border: '1px solid #333' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem', color: '#ff4444' }}>🔐</div>
                        <h3 style={{ marginBottom: '1rem' }}>LockerGoga</h3>
                        <p style={{ lineHeight: 1.6, opacity: 0.8 }}>
                            Et sjeldent <TermExplainer term="løsepengevirus" explanation="Også kalt ransomware. Skadevare som låser filene dine og krever penger for å låse dem opp igjen.">løsepengevirus</TermExplainer> som ikke "ringer hjem" til hackerne (ingen <TermExplainer term="C&C-server" explanation="Command & Control-server. En sentral server hackere bruker for å styre infiserte maskiner. LockerGoga trengte ikke denne kontakten, noe som gjorde det vanskeligere å oppdage.">C&C-server</TermExplainer>). Det brukte gyldige sertifikater for å lure sikkerhetssystemer og endret passord på alle brukere.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="explainer-card" style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '8px', border: '1px solid #333' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem', color: '#ff4444' }}>🌍</div>
                        <h3 style={{ marginBottom: '1rem' }}>Konsekvensen</h3>
                        <p style={{ lineHeight: 1.6, opacity: 0.8 }}>
                            22 000 datamaskiner i 40 land ble rammet. Produksjonslinjer stoppet, og ansatte måtte gå over til manuell drift med penn og papir.
                        </p>
                    </div>
                </div>

                {/* Animated Network Visualization */}
                <div ref={vizRef} style={{ marginTop: '6rem', textAlign: 'center', position: 'relative' }}>
                    <h3 style={{ marginBottom: '2rem', opacity: 0.7 }}>Simulering: Fra én e-post til global stopp</h3>
                    <svg width="100%" height="300" viewBox="0 0 800 300" style={{ overflow: 'visible' }}>
                        {/* Connections */}
                        <g stroke="#333" strokeWidth="2">
                            {/* From Patient 0 to Admin */}
                            <line className="connection p0-admin" x1="100" y1="150" x2="400" y2="50" />

                            {/* From Admin to Factories */}
                            <line className="connection admin-f1" x1="400" y1="50" x2="250" y2="250" />
                            <line className="connection admin-f2" x1="400" y1="50" x2="400" y2="250" />
                            <line className="connection admin-f3" x1="400" y1="50" x2="550" y2="250" />
                            <line className="connection admin-f4" x1="400" y1="50" x2="700" y2="150" />
                        </g>

                        {/* Nodes */}
                        {/* Patient 0 */}
                        <g className="node patient-0">
                            <circle cx="100" cy="150" r="30" fill="#333" stroke="#555" strokeWidth="2" />
                            <text x="100" y="155" textAnchor="middle" fill="#fff" fontSize="20">📧</text>
                            <text x="100" y="200" textAnchor="middle" fill="#888" fontSize="12">Pasient 0</text>
                        </g>

                        {/* Admin Server */}
                        <g className="node admin-server">
                            <rect x="360" y="20" width="80" height="60" rx="5" fill="#333" stroke="#555" strokeWidth="2" />
                            <text x="400" y="55" textAnchor="middle" fill="#fff" fontSize="24">🖥️</text>
                            <text x="400" y="100" textAnchor="middle" fill="#888" fontSize="12">Hovedserver</text>
                        </g>

                        {/* Factory Nodes */}
                        <g className="node factory f1">
                            <circle cx="250" cy="250" r="20" fill="#333" />
                            <text x="250" y="285" textAnchor="middle" fill="#888" fontSize="10">Fabrikk A</text>
                        </g>
                        <g className="node factory f2">
                            <circle cx="400" cy="250" r="20" fill="#333" />
                            <text x="400" y="285" textAnchor="middle" fill="#888" fontSize="10">Fabrikk B</text>
                        </g>
                        <g className="node factory f3">
                            <circle cx="550" cy="250" r="20" fill="#333" />
                            <text x="550" y="285" textAnchor="middle" fill="#888" fontSize="10">Fabrikk C</text>
                        </g>
                        <g className="node factory f4">
                            <circle cx="700" cy="150" r="20" fill="#333" />
                            <text x="700" y="185" textAnchor="middle" fill="#888" fontSize="10">USA</text>
                        </g>
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default RansomwareExplainer;
