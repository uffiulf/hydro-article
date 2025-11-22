import React from 'react';

interface FootnoteProps {
    id: number;
}

const Footnote: React.FC<FootnoteProps> = ({ id }) => {
    const scrollToSource = (e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById(`source-${id}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            // Highlight effect
            element.style.backgroundColor = 'rgba(77, 166, 255, 0.2)';
            setTimeout(() => {
                element.style.backgroundColor = 'transparent';
                element.style.transition = 'background-color 1s';
            }, 2000);
        }
    };

    return (
        <sup style={{ marginLeft: '2px' }}>
            <a
                href={`#source-${id}`}
                onClick={scrollToSource}
                style={{
                    color: '#4da6ff',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                }}
            >
                [{id}]
            </a>
        </sup>
    );
};

export default Footnote;
