import { Link } from "react-router-dom";
import { LOGO_SRC, COLORS, CELL_COLORS } from "../constants.js";

function FloatingGrid() {
    const cells = [
        { n: '1', c: 0 }, { n: '4', c: 2 }, { n: '2', c: 3 }, { n: '3', c: 1 }, { n: '6', c: 4 }, { n: '', c: -1 },
        { n: '', c: -1 }, { n: '2', c: 5 }, { n: '6', c: 2 }, { n: '', c: -1 }, { n: '', c: -1 }, { n: '', c: -1 },
        { n: '4', c: 3 }, { n: '6', c: 5 }, { n: '2', c: 0 }, { n: '', c: -1 }, { n: '', c: -1 }, { n: '', c: -1 },
        { n: '', c: -1 }, { n: '5', c: 1 }, { n: '3', c: 2 }, { n: '', c: -1 }, { n: '6', c: 4 }, { n: '', c: -1 },
        { n: '3', c: 2 }, { n: '', c: -1 }, { n: '', c: -1 }, { n: '6', c: 5 }, { n: '1', c: 0 }, { n: '', c: -1 },
        { n: '', c: -1 }, { n: '4', c: 3 }, { n: '1', c: 0 }, { n: '', c: -1 }, { n: '2', c: 1 }, { n: '5', c: 4 },
    ];
    return (
        <div className="floating-grid">
            {cells.map((cell, i) => (
                <div key={i} className="grid-cell" style={{
                    background: cell.c >= 0 ? CELL_COLORS[cell.c] : 'rgba(255,255,255,0.06)',
                    color: cell.c >= 0 ? 'white' : 'transparent',
                }}>{cell.n}</div>
            ))}
        </div>
    );
}

export default function Home() {
    return (
        <div>
            {/* Hero */}
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-badge">
                        <img src={LOGO_SRC} alt="logo" style={{ width: 20, height: 20, borderRadius: 5, objectFit: 'cover' }} />
                        Brain Training App
                    </div>
                    <h1>Daily Brain <span>Workout</span></h1>
                    <p className="hero-sub">Build a daily habit of mental exercise. Challenge yourself with Sudoku puzzles, track your progress, and become a puzzle master.</p>
                    <div className="hero-actions">
                        <a className="btn-primary" href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                            <span>▶</span> Get on Play Store
                        </a>
                        <Link className="btn-secondary" to="/features">Explore Features</Link>
                    </div>
                    <div className="hero-stats">
                        <div className="stat"><div className="stat-num" style={{ color: COLORS.pink }}>100+</div><div className="stat-label">Levels</div></div>
                        <div className="stat"><div className="stat-num" style={{ color: COLORS.purple }}>3</div><div className="stat-label">Grid Sizes</div></div>
                        <div className="stat"><div className="stat-num" style={{ color: COLORS.blue }}>Free</div><div className="stat-label">To Play</div></div>
                    </div>
                </div>
                <div className="hero-visual"><FloatingGrid /></div>
            </section>

            {/* Features */}
            <section className="section">
                <div className="section-header">
                    <div className="section-tag" style={{ background: 'rgba(255,78,138,0.15)', color: COLORS.pink }}>✦ Features</div>
                    <h2>Everything You Need to <span style={{ background: `linear-gradient(135deg, ${COLORS.pink}, ${COLORS.purple})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Master Sudoku</span></h2>
                    <p className="section-sub">Packed with features designed to make your puzzle journey fun, rewarding, and addictive.</p>
                </div>
                <div className="features-grid">
                    {[
                        { icon: '🧠', color: COLORS.pink, title: 'Daily Challenges', desc: 'Fresh puzzles every day to keep your brain sharp and engaged.', grad: COLORS.pink },
                        { icon: '📈', color: COLORS.purple, title: 'Progress Tracking', desc: 'Monitor your solving speed and improvement over time.', grad: COLORS.purple },
                        { icon: '🎯', color: COLORS.blue, title: '3 Difficulty Levels', desc: 'Easy, Medium, and Hard puzzles for every skill level.', grad: COLORS.blue },
                        { icon: '⏱️', color: COLORS.teal, title: 'Speed Timer', desc: 'Race against the clock and beat your personal best times.', grad: COLORS.teal },
                        { icon: '💡', color: COLORS.yellow, title: 'Hints & Tutorials', desc: 'Interactive guides help you learn strategies from beginner to expert.', grad: COLORS.yellow },
                        { icon: '🎨', color: COLORS.orange, title: 'Beautiful Design', desc: 'Vibrant colors and smooth animations for a delightful experience.', grad: COLORS.orange },
                    ].map((f, i) => (
                        <div key={i} className="feature-card">
                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${f.grad}, transparent)` }} />
                            <div className="feature-icon" style={{ background: `${f.color}22` }}>{f.icon}</div>
                            <h3>{f.title}</h3>
                            <p>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Grid Sizes */}
            <section className="grids-section">
                <div className="section-header">
                    <div className="section-tag" style={{ background: 'rgba(123,92,245,0.15)', color: COLORS.purple }}>⊞ Grid Sizes</div>
                    <h2>Choose Your <span style={{ background: `linear-gradient(135deg, ${COLORS.purple}, ${COLORS.blue})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Challenge</span></h2>
                    <p className="section-sub">Three grid sizes to match your mood and skill level.</p>
                </div>
                <div className="grid-cards">
                    {[
                        { size: '4×4', diff: 'Easy', col: COLORS.green, desc: 'Perfect for quick sessions and beginners learning the basics.', preview: 4 },
                        { size: '6×6', diff: 'Medium', col: COLORS.orange, desc: 'A balanced challenge with more numbers and complexity.', preview: 6 },
                        { size: '9×9', diff: 'Hard', col: COLORS.pink, desc: 'The classic Sudoku experience for true puzzle masters.', preview: 9 },
                    ].map((g, i) => (
                        <div key={i} className="grid-card" style={{ background: `linear-gradient(135deg, ${g.col}15, ${g.col}08)`, borderColor: `${g.col}33` }}>
                            <div className="grid-preview" style={{ gridTemplateColumns: `repeat(${g.preview === 9 ? 4 : g.preview === 6 ? 3 : 2}, 1fr)` }}>
                                {Array(g.preview === 9 ? 16 : g.preview === 6 ? 9 : 4).fill(0).map((_, idx) => (
                                    <div key={idx} className="gp-cell" style={{ aspectRatio: '1', borderRadius: '3px', background: idx % 3 === 0 ? g.col : `${g.col}33` }} />
                                ))}
                            </div>
                            <h3 style={{ color: g.col }}>{g.size}</h3>
                            <div className="grid-diff" style={{ color: g.col }}>{g.diff}</div>
                            <p>{g.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* How It Works */}
            <section className="section">
                <div className="section-header">
                    <div className="section-tag" style={{ background: 'rgba(61,190,245,0.15)', color: COLORS.blue }}>▷ How It Works</div>
                    <h2>Start Playing in <span style={{ background: `linear-gradient(135deg, ${COLORS.blue}, ${COLORS.teal})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>3 Steps</span></h2>
                </div>
                <div className="steps">
                    {[
                        { n: '01', color: COLORS.pink, title: 'Download & Install', desc: 'Get the app free from the Google Play Store in seconds.' },
                        { n: '02', color: COLORS.purple, title: 'Pick Your Level', desc: 'Choose from 100+ levels across Easy, Medium, and Hard difficulties.' },
                        { n: '03', color: COLORS.teal, title: 'Play & Improve', desc: 'Solve daily puzzles, earn scores, and track your progress.' },
                    ].map((s, i) => (
                        <div key={i} className="step">
                            <div className="step-num" style={{ background: `${s.color}20`, color: s.color }}>{s.n}</div>
                            <h3>{s.title}</h3>
                            <p>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <div className="cta-banner">
                <h2>Ready to Train Your Brain?</h2>
                <p>Join thousands of players improving their minds every day. It's free!</p>
                <div className="cta-buttons">
                    <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="btn-white">▶ Download on Play Store</a>
                    <Link className="btn-secondary" to="/privacy" style={{ borderColor: 'rgba(255,255,255,0.4)' }}>Privacy Policy</Link>
                </div>
            </div>
            <div style={{ height: 80 }} />
        </div>
    );
}
