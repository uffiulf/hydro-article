import React from 'react';
import { motion } from 'framer-motion';
import Footnote from '../components/Footnote';

const QuoteBlock: React.FC<{ text: string; author: string; role: string }> = ({ text, author, role }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.8 }}
        style={{
            margin: '4rem 0',
            padding: '3rem',
            borderLeft: '4px solid #00509e',
            background: 'rgba(255,255,255,0.05)'
        }}
    >
        <p style={{ fontSize: '1.8rem', fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: 1.4 }}>"{text}"</p>
        <div>
            <strong style={{ display: 'block', fontSize: '1.2rem' }}>{author}</strong>
            <span style={{ opacity: 0.6 }}>{role}</span>
        </div>
    </motion.div>
);

const HumanStories: React.FC = () => {
    return (
        <section style={{ padding: '6rem 2rem', backgroundColor: '#050505', color: '#fff' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center' }}>Stemmer fra gulvet</h2>

                <QuoteBlock
                    text="Vi er utsatt for et kraftig cyberangrep og dette er ingen øvelse!"
                    author="Kollega til Hilde Merete Aasheim"
                    role="Klokken 04:00, 19. mars"
                />

                <div style={{ height: '400px', margin: '4rem 0', borderRadius: '8px', overflow: 'hidden' }}>
                    <img 
                        src="/arbeidere-manuelle-verktoy.jpg" 
                        alt="Foto av arbeidere som bruker manuelle verktøy"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>

                <QuoteBlock
                    text="Ingen ler av papirarkivene etter dataangrepet."
                    author="Jan 'Dino-Star' Verslyppe"
                    role="Hydro-ansatt som reddet dagen med papirutskrifter"
                />
                <div style={{ textAlign: 'right', marginTop: '-2rem', marginBottom: '4rem', opacity: 0.5 }}><Footnote id={2} /></div>
            </div>
        </section>
    );
};

export default HumanStories;
