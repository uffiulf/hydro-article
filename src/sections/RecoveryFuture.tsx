import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Footnote from '../components/Footnote';


const RecoveryFuture: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate background from dark to light/blue
            gsap.fromTo(bgRef.current,
                { backgroundColor: '#000000' },
                {
                    backgroundColor: '#001a33', // Dark blueish
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top center",
                        end: "center center",
                        scrub: true,
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} style={{ position: 'relative', minHeight: '100vh', color: '#fff', overflow: 'hidden' }}>
            <div ref={bgRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />

            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '8rem 2rem', textAlign: 'center' }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '3rem' }}>Å snu tidevannet</h2>

                <div style={{ marginBottom: '4rem' }}>
                    <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#4da6ff' }}>Tre avgjørende valg</h3>
                    <p style={{ fontSize: '1.2rem', lineHeight: 1.6 }}>
                        Morgenen 19. mars tok ledelsen tre valg som definerte veien videre: <strong>Ingen løsepenger</strong>, tilkalle eksperter (Microsoft DART), og full åpenhet.
                    </p>
                </div>

                <div style={{ marginBottom: '4rem' }}>
                    <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#4da6ff' }}>The Gold Standard</h3>
                    <p style={{ fontSize: '1.2rem', lineHeight: 1.6 }}>
                        Hydros håndtering ble hyllet internasjonalt som "The Gold Standard". Ved å være åpne hjalp de andre selskaper å beskytte seg, og politiet fikk verdifull informasjon som førte til arrestasjoner i 2021 og 2023.
                    </p>
                </div>

                <div style={{ padding: '3rem', background: 'rgba(255,255,255,0.1)', borderRadius: '12px', marginTop: '6rem' }}>
                    <h3 style={{ marginBottom: '1rem' }}>Lærdommer</h3>
                    <ul style={{ textAlign: 'left', lineHeight: 1.8, listStyleType: 'circle', paddingLeft: '2rem' }}>
                        <li>Åpenhet bygger tillit, selv i krise.<Footnote id={14} /></li>
                        <li>Offline backuper er den ultimate forsikringen.</li>
                        <li>Cybersikkerhet er ikke bare IT, det er virksomhetens overlevelse.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default RecoveryFuture;
