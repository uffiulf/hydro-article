import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface TermExplainerProps {
    term: string;
    explanation: string;
    children?: React.ReactNode;
}

const TermExplainer: React.FC<TermExplainerProps> = ({ term, explanation, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const containerRef = useRef<HTMLSpanElement>(null);
    const popupRef = useRef<HTMLDivElement>(null);

    // Calculate position when opening
    useEffect(() => {
        if (isOpen && containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const scrollY = window.scrollY;
            const scrollX = window.scrollX;

            setPosition({
                top: rect.top + scrollY - 10, // Slightly above the element
                left: rect.left + scrollX + (rect.width / 2)
            });
        }
    }, [isOpen]);

    // Close if clicked outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Check if click is outside both the trigger and the popup
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node) &&
                popupRef.current &&
                !popupRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            // Also update position on scroll/resize if open (optional but good)
            window.addEventListener('scroll', () => setIsOpen(false)); // Close on scroll for simplicity
            window.addEventListener('resize', () => setIsOpen(false));
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', () => setIsOpen(false));
            window.removeEventListener('resize', () => setIsOpen(false));
        };
    }, [isOpen]);

    return (
        <>
            <span
                ref={containerRef}
                style={{ position: 'relative', display: 'inline-block', cursor: 'pointer' }}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span style={{
                    borderBottom: '1px dashed #4da6ff',
                    color: '#4da6ff',
                    fontWeight: 'bold'
                }}>
                    {children || term}
                </span>
            </span>

            {/* Portal for the popup */}
            {createPortal(
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            ref={popupRef}
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            style={{
                                position: 'absolute',
                                top: position.top,
                                left: position.left,
                                transform: 'translate(-50%, -100%)', // Center horizontally, move up
                                width: '350px',
                                backgroundColor: '#000000',
                                border: '1px solid #4da6ff',
                                borderRadius: '8px',
                                padding: '1.5rem',
                                zIndex: 9999, // Very high z-index
                                boxShadow: '0 10px 40px rgba(0,0,0,0.9)',
                                color: '#fff',
                                fontSize: '1rem',
                                lineHeight: 1.6,
                                textAlign: 'left',
                                pointerEvents: 'auto'
                            }}
                        >
                            <div style={{ marginBottom: '0.5rem', fontWeight: 'bold', color: '#4da6ff' }}>
                                {term}
                            </div>
                            {explanation}
                            {/* Arrow */}
                            <div style={{
                                position: 'absolute',
                                top: '100%',
                                left: '50%',
                                marginLeft: '-8px',
                                borderWidth: '8px',
                                borderStyle: 'solid',
                                borderColor: '#000000 transparent transparent transparent'
                            }} />
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
};

export default TermExplainer;
