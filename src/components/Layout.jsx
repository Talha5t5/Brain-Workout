import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LOGO_SRC } from "../constants.js";

export default function Layout({ children }) {
    const location = useLocation();
    const path = location.pathname;
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [['/', 'Home'], ['/features', 'Features'], ['/about', 'About'], ['/privacy', 'Privacy']];

    return (
        <>
            <nav className="nav">
                <Link to="/" className="nav-logo" style={{ WebkitTextFillColor: 'white', background: 'none' }}>
                    <img src={LOGO_SRC} alt="Brain Workout" style={{ width: 40, height: 40, borderRadius: 10, objectFit: 'cover' }} />
                    Brain Workout
                </Link>
                <ul className="nav-links">
                    {navLinks.map(([p, l]) => (
                        <li key={p}>
                            <Link className={path === p ? 'active' : ''} to={p}>{l}</Link>
                        </li>
                    ))}
                </ul>
                <a className="nav-cta" href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                    Download App
                </a>
                <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
            </nav>

            {menuOpen && (
                <div style={{ position: 'fixed', top: 72, left: 0, right: 0, background: 'rgba(13,13,26,0.97)', zIndex: 99, padding: '24px', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    {navLinks.map(([p, l]) => (
                        <div key={p} onClick={() => setMenuOpen(false)} style={{ padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', cursor: 'pointer', fontWeight: 700, color: path === p ? 'white' : 'rgba(255,255,255,0.6)' }}>
                            <Link to={p} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>{l}</Link>
                        </div>
                    ))}
                </div>
            )}

            <main>
                {children}
            </main>

            <footer>
                <div className="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <img src={LOGO_SRC} alt="logo" style={{ width: 32, height: 32, borderRadius: 8, objectFit: 'cover' }} />
                    Brain Workout
                </div>
                <div className="footer-links">
                    <Link to="/">Home</Link>
                    <Link to="/features">Features</Link>
                    <Link to="/about">About</Link>
                    <Link to="/privacy">Privacy Policy</Link>
                </div>
                <div className="footer-copy">© 2026 Daily Brain Workout. All rights reserved.</div>
            </footer>
        </>
    );
}
