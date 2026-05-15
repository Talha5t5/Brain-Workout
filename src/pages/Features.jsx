import { COLORS } from "../constants.js";

function MiniSudoku() {
    const colors4 = ['#FF4E8A', '#FFD166', '#4CAF7D', '#3DBEF5'];
    const grid4 = [[1, 0, 2, 3], [3, 0, 4, 1], [4, 1, 3, 2], [2, 3, 0, 4]];
    return (
        <div className="mini-sudoku" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {grid4.map((row, r) => row.map((v, c) => (
                <div key={`${r}-${c}`} className="ms-cell" style={{
                    background: v === 0 ? 'rgba(255,255,255,0.06)' : colors4[v - 1],
                    color: 'white'
                }}>{v || ''}</div>
            )))}
        </div>
    );
}

export default function Features() {
    const features = [
        {
            num: '01', title: '100+ Handcrafted Levels', reverse: false, color: COLORS.purple,
            desc: 'Progress through carefully designed puzzles that gradually increase in difficulty. Each level is handcrafted to ensure a unique and satisfying challenge.',
            pills: ['Easy Levels', 'Medium Levels', 'Hard Levels', 'Expert Mode'],
            visual: (
                <div style={{ width: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {[{ label: 'Level 31', col: '#4CAF7D', done: true }, { label: 'Level 32', col: '#FFD166', done: false }, { label: 'Level 33', col: 'rgba(255,255,255,0.06)', done: false, locked: true }].map((l, i) => (
                            <div key={i} style={{ padding: '16px 20px', borderRadius: 14, background: l.col, display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: l.locked ? 0.5 : 1 }}>
                                <span style={{ fontWeight: 800, color: l.locked ? 'rgba(255,255,255,0.4)' : 'white' }}>{l.label}</span>
                                <span>{l.done ? '✓' : l.locked ? '🔒' : '▶'}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            num: '02', title: 'Multiple Grid Sizes', reverse: true, color: COLORS.orange,
            desc: 'Choose between 4×4, 6×6, and classic 9×9 grids. Start small for quick mental warm-ups or dive into the full 9×9 challenge.',
            pills: ['4×4 Grids', '6×6 Grids', '9×9 Classic'],
            visual: <MiniSudoku />
        },
        {
            num: '03', title: 'Score & Progress Tracking', reverse: false, color: COLORS.pink,
            desc: 'Track your improvement with detailed score tracking, personal best times, and streak counters. Watch yourself improve day by day.',
            pills: ['Score System', 'Best Times', 'Daily Streaks', 'Leaderboard'],
            visual: (
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {[{ label: 'Score', val: '1,945', col: COLORS.yellow }, { label: 'Best Time', val: '00:42', col: COLORS.blue }, { label: 'Streak', val: '7 days', col: COLORS.pink }].map((s, i) => (
                        <div key={i} style={{ padding: '16px 20px', borderRadius: 14, background: 'rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', borderLeft: `3px solid ${s.col}` }}>
                            <span style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>{s.label}</span>
                            <span style={{ color: s.col, fontWeight: 800, fontFamily: 'Poppins, sans-serif' }}>{s.val}</span>
                        </div>
                    ))}
                </div>
            )
        },
        {
            num: '04', title: 'Hints & Tutorials', reverse: true, color: COLORS.teal,
            desc: 'Never get stuck with our smart hint system. Learn advanced Sudoku strategies through interactive tutorials, from basic elimination to advanced techniques.',
            pills: ['Hints System', 'Step-by-Step Guide', 'Strategy Tips'],
            visual: (
                <div style={{ width: '100%' }}>
                    {[
                        { icon: '💡', text: 'Look for cells with only one possible number' },
                        { icon: '🔍', text: 'Check rows, columns, and boxes for missing numbers' },
                        { icon: '❌', text: 'Use the process of elimination' },
                        { icon: '⭐', text: 'Start with easier numbers that have fewer possibilities' },
                    ].map((tip, i) => (
                        <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '10px 0', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.06)' : '' }}>
                            <span style={{ fontSize: '1.2rem' }}>{tip.icon}</span>
                            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.5 }}>{tip.text}</span>
                        </div>
                    ))}
                </div>
            )
        },
    ];

    return (
        <div>
            <div className="features-hero">
                <div className="section-tag" style={{ background: 'rgba(61,190,245,0.15)', color: COLORS.blue, display: 'inline-block', marginBottom: 16 }}>✦ All Features</div>
                <h1>Built for <span style={{ background: `linear-gradient(135deg, ${COLORS.blue}, ${COLORS.teal})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Puzzle Lovers</span></h1>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', maxWidth: 500, margin: '16px auto 0' }}>
                    Every feature crafted to make Sudoku more enjoyable, rewarding, and accessible.
                </p>
            </div>

            <div className="big-features">
                {features.map((f, i) => (
                    <div key={i} className={`big-feature${f.reverse ? ' reverse' : ''}`}>
                        <div className="big-feature-visual">{f.visual}</div>
                        <div className="big-feature-text">
                            <div className="feature-num" style={{ color: f.color }}>{f.num}</div>
                            <h2>{f.title}</h2>
                            <p>{f.desc}</p>
                            <div className="feature-pills">
                                {f.pills.map((p, j) => (
                                    <span key={j} className="pill" style={{ borderColor: `${f.color}44`, color: f.color }}>{p}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
