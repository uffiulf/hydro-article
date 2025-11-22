import React, { type ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="layout">
            <header style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                padding: '1rem 2rem',
                zIndex: 1000,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mixBlendMode: 'difference',
                color: 'white'
            }}>
                <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>HYDRO ANGREPET</div>
                <nav>
                    {/* Navigation items could go here */}
                </nav>
            </header>

            <main>
                {children}
            </main>

            <footer style={{
                padding: '4rem 2rem',
                textAlign: 'center',
                opacity: 0.5,
                fontSize: '0.9rem'
            }}>
                <p>&copy; {new Date().getFullYear()} Scrollytelling Prosjekt</p>
            </footer>
        </div>
    );
};

export default Layout;
