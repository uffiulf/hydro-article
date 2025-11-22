import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { motion } from 'framer-motion';
import Footnote from '../components/Footnote';

const costData = [
    { name: 'Uke 1', cost: 325 },
    { name: 'Q1', cost: 425 },
    { name: 'Q2', cost: 600 },
    { name: 'Total', cost: 800 },
];

const productionData = [
    { name: 'Dag 1', value: 0 },
    { name: 'Dag 3', value: 50 },
    { name: 'Dag 7', value: 75 },
    { name: 'Dag 17', value: 90 },
    { name: 'Dag 60', value: 100 },
];

const ImpactData: React.FC = () => {
    return (
        <section style={{ padding: '6rem 2rem', backgroundColor: '#111', color: '#fff' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center' }}>Prisen for stillhet</h2>

                <div style={{ display: 'grid', gap: '6rem' }}>
                    {/* Chart 1: Financial Impact */}
                    <div>
                        <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>Estimert økonomisk tap (Millioner NOK)</h3>
                        <div style={{ height: '400px', width: '100%' }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={costData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                                    <XAxis dataKey="name" stroke="#888" />
                                    <YAxis stroke="#888" />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#222', border: 'none', color: '#fff' }}
                                        cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }}
                                    />
                                    <Bar dataKey="cost" fill="#ff4444" animationDuration={2000} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Chart 2: Production Drop */}
                    <div>
                        <h4 style={{ marginBottom: '1rem', color: '#4da6ff' }}>Produksjonskapasitet (Bygg- og industriprofiler)</h4>
                        <p style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: '1.5rem' }}>
                            Dette er avdelingen som lager ferdige aluminiumsdeler til biler, bygninger og industri. Det var her konsekvensene var størst, fordi maskinene er avhengige av digitale styringssystemer.
                        </p>
                        <div style={{ height: '400px', width: '100%' }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={productionData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                                    <XAxis dataKey="name" stroke="#888" />
                                    <YAxis stroke="#888" />
                                    <Tooltip contentStyle={{ backgroundColor: '#222', border: 'none', color: '#fff' }} />
                                    <Line type="monotone" dataKey="value" stroke="#00509e" strokeWidth={3} dot={{ r: 6 }} animationDuration={3000} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        style={{ fontSize: '4rem', fontWeight: 'bold', color: '#ff4444' }}
                    >
                        800 MNOK
                    </motion.div>
                    <p style={{ opacity: 0.6 }}>Totalt estimert økonomisk tap<Footnote id={6} /></p>
                </div>

                {/* Market and Sales Impact */}
                <div style={{ marginTop: '6rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                    {/* Market Reaction */}
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '8px' }}>
                        <h3 style={{ marginBottom: '1.5rem', color: '#4da6ff' }}>Markedsreaksjon</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>
                                <span>Hydro-aksjen (åpning)</span>
                                <span style={{ color: '#ff4444', fontWeight: 'bold' }}>-3.4%</span>
                            </li>
                            <li style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>
                                <span>Hydro-aksjen (kl 14:38)</span>
                                <span style={{ color: '#ff4444', fontWeight: 'bold' }}>-0.8%</span>
                            </li>
                            <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>Aluminiumspris</span>
                                <span style={{ color: '#00ff00', fontWeight: 'bold' }}>+1.2%</span>
                            </li>
                        </ul>
                        <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.7 }}>
                            "Første gang et cyberangrep har påvirket prisen på en global råvare."
                        </p>
                    </div>

                    {/* Sales Impact */}
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '8px' }}>
                        <h3 style={{ marginBottom: '1.5rem', color: '#4da6ff' }}>Konsekvenser for Salg</h3>
                        <div style={{ display: 'flex', alignItems: 'flex-end', marginBottom: '1rem' }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>333k</div>
                            <div style={{ marginBottom: '0.5rem', marginLeft: '0.5rem', opacity: 0.6 }}>tonn (Q1)</div>
                        </div>
                        <p style={{ opacity: 0.8, marginBottom: '1rem' }}>
                            Ned fra <strong>362k tonn</strong>. En betydelig reduksjon i salgsvolum som følge av produksjonsstans og manuell drift.
                        </p>
                        <div style={{ height: '4px', background: '#333', borderRadius: '2px', overflow: 'hidden' }}>
                            <div style={{ width: '92%', height: '100%', background: '#ff4444' }}></div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', fontSize: '0.8rem', opacity: 0.5 }}>
                            <span>Q1 2019</span>
                            <span>-8% volum</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ImpactData;
