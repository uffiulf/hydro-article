import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

import TermExplainer from '../components/TermExplainer';

interface TimelineEvent {
    time: string;
    title: string;
    description: React.ReactNode;
}

const events: TimelineEvent[] = [
    { time: "Feb 2019", title: "Inntrengningen", description: "En ansatt åpner et infisert e-postvedlegg fra en betrodd kunde. Hackerne får fotfeste." },
    { time: "18. Mars 23:00", title: "Angrepet starter", description: <><TermExplainer term="Krypteringen" explanation="Prosessen med å gjøre informasjon uleselig for alle som ikke har nøkkelen.">Krypteringen</TermExplainer> begynner. Første tegn på problemer ved et anlegg i USA.</> },
    { time: "19. Mars 00:00", title: "Oppdagelsen", description: <>IT-ansatte ser unormal aktivitet. Servere låses av <TermExplainer term="LockerGoga" explanation="Navnet på det spesifikke løsepengeviruset som angrep Hydro. Kjent for å være tregt men grundig."><span className="glitch-text" data-text="LockerGoga">LockerGoga</span></TermExplainer>-viruset og filer får endelsen .locked.</> },
    { time: "19. Mars 04:00", title: "Krisealarm", description: "Ledelsen vekkes. 'Dette er ingen øvelse'. Beslutning om å koble fra hele nettverket." },
    { time: "19. Mars 07:30", title: "Offentliggjøring", description: "Hydro sender børsmelding og varsler markedet om angrepet." },
];

const TimelineAttack: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate the vertical line growing
            gsap.from(lineRef.current, {
                height: 0,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top center",
                    end: "bottom center",
                    scrub: 1
                }
            });

            // Animate events appearing
            const eventElements = gsap.utils.toArray<HTMLElement>('.timeline-event');
            eventElements.forEach((el, i) => {
                gsap.from(el, {
                    opacity: 0,
                    x: i % 2 === 0 ? -50 : 50,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        onEnter: () => setActiveIndex(i),
                        onLeaveBack: () => setActiveIndex(Math.max(0, i - 1))
                    }
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} style={{ padding: '6rem 2rem', backgroundColor: '#111', color: '#fff', position: 'relative', overflow: 'hidden' }}>
            <h2 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '4rem' }}>Angrepet time for time</h2>

            <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                {/* Central Line */}
                <div ref={lineRef} style={{
                    position: 'absolute',
                    left: '50%',
                    top: 0,
                    bottom: 0,
                    width: '2px',
                    background: 'linear-gradient(to bottom, #ff4444, #444)',
                    transform: 'translateX(-50%)'
                }} />

                {/* Events */}
                {events.map((event, index) => (
                    <div key={index} className="timeline-event" style={{
                        display: 'flex',
                        justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
                        marginBottom: '4rem',
                        position: 'relative'
                    }}>
                        {/* Dot on the line */}
                        <div style={{
                            position: 'absolute',
                            left: '50%',
                            top: '0',
                            width: '16px',
                            height: '16px',
                            background: activeIndex >= index ? '#ff4444' : '#444',
                            borderRadius: '50%',
                            transform: 'translate(-50%, 0)',
                            zIndex: 2,
                            transition: 'background 0.3s ease'
                        }} />

                        {/* Content Card */}
                        <div style={{
                            width: '45%',
                            padding: '1.5rem',
                            background: '#222',
                            borderRadius: '8px',
                            border: `1px solid ${activeIndex === index ? '#ff4444' : '#333'}`,
                            transition: 'border-color 0.3s ease'
                        }}>
                            <div style={{ color: '#ff4444', fontWeight: 'bold', marginBottom: '0.5rem' }}>{event.time}</div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{event.title}</h3>
                            <div style={{ opacity: 0.8, lineHeight: 1.6 }}>{event.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TimelineAttack;
