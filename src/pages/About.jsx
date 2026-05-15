import { Link } from "react-router-dom";
import { LOGO_SRC, COLORS } from "../constants.js";

export default function About() {
    return (
        <div>
            <div className="about-hero">
                <div className="section-tag" style={{ background: 'rgba(255,140,66,0.15)', color: COLORS.orange, display: 'inline-block', marginBottom: 16 }}>✦ About Us</div>
                <h1>About <span style={{ background: `linear-gradient(135deg, ${COLORS.orange}, ${COLORS.pink})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Daily Brain Workout</span></h1>
                <p>We believe a sharp mind is built through daily practice. Our mission is to make brain training fun, accessible, and rewarding for everyone.</p>
            </div>

            <div className="about-content">
                <div className="mission-card">
                    <div className="quote-icon">
                        <img src={LOGO_SRC} alt="logo" style={{ width: 64, height: 64, borderRadius: 16, objectFit: 'cover', marginBottom: 8 }} />
                    </div>
                    <p>"We set out to create the Sudoku app we always wanted — beautiful, challenging, and genuinely fun to play every single day."</p>
                </div>

                <div style={{ marginBottom: 48 }}>
                    <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.8rem', fontWeight: 800, marginBottom: 16 }}>Our Story</h2>
                    <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 16 }}>Daily Brain Workout started with a simple observation: most Sudoku apps are either too plain, too complicated, or just not fun enough to keep coming back to. We wanted to change that.</p>
                    <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 16 }}>We combined beautifully crafted puzzles, a vibrant design system, and smart progression mechanics to create an app that genuinely makes you want to play every day.</p>
                    <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8 }}>From 4×4 grids for quick warm-ups to 9×9 masterpieces that test every Sudoku skill you have, we've put love and care into every single puzzle.</p>
                </div>

                <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.8rem', fontWeight: 800, marginBottom: 24 }}>Our Values</h2>
                <div className="values-grid">
                    {[
                        { emoji: '🎮', title: 'Fun First', desc: 'Every decision starts with: does this make the game more enjoyable?' },
                        { emoji: '🧠', title: 'Brain Health', desc: 'We genuinely believe puzzles improve cognitive function and daily wellbeing.' },
                        { emoji: '🔒', title: 'Privacy Focused', desc: 'We collect only what we need and never sell your personal data.' },
                        { emoji: '🌍', title: 'Accessible', desc: 'Free to play, available to everyone, suitable for all ages and skill levels.' },
                        { emoji: '✨', title: 'Quality Design', desc: 'Every pixel matters. We obsess over details so you have a beautiful experience.' },
                        { emoji: '📈', title: 'Continuous Improvement', desc: 'We listen to feedback and constantly improve the app with new updates.' },
                    ].map((v, i) => (
                        <div key={i} className="value-card">
                            <div className="value-emoji">{v.emoji}</div>
                            <h3>{v.title}</h3>
                            <p>{v.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="download-section">
                    <h2>Download Free Today</h2>
                    <p>Available on Android. Start your daily brain training journey.</p>
                    <div className="store-buttons">
                        <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="store-btn">
                            <span className="store-icon">▶</span>
                            <div className="store-text">
                                <small>GET IT ON</small>
                                <span>Google Play</span>
                            </div>
                        </a>
                    </div>
                    <div style={{ marginTop: 32, display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/privacy" style={{ background: 'none', border: 'none', color: COLORS.blue, cursor: 'pointer', fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none' }}>Privacy Policy</Link>
                        <Link to="/" style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)', cursor: 'pointer', fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none' }}>Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
