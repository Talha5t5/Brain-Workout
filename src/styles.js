const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Poppins:wght@400;500;600;700;800;900&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --pink: #FF4E8A; --purple: #7B5CF5; --blue: #3DBEF5;
    --teal: #1DD8B4; --orange: #FF8C42; --green: #4CAF7D; --yellow: #FFD166;
    --dark: #0D0D1A; --card-bg: rgba(255,255,255,0.06);
    --text: #ffffff; --text-muted: rgba(255,255,255,0.6);
  }

  html { scroll-behavior: smooth; }
  body { font-family: 'Nunito', sans-serif; background: var(--dark); color: var(--text); overflow-x: hidden; }

  .nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    padding: 18px 48px; display: flex; align-items: center; justify-content: space-between;
    background: rgba(13,13,26,0.85); backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255,255,255,0.08);
  }
  .nav-logo {
    display: flex; align-items: center; gap: 12px;
    font-family: 'Poppins', sans-serif; font-weight: 800; font-size: 1.4rem;
    background: linear-gradient(135deg, var(--pink), var(--purple));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    text-decoration: none;
  }
  .nav-links { display: flex; gap: 36px; list-style: none; }
  .nav-links a {
    text-decoration: none; color: var(--text-muted);
    font-weight: 600; font-size: 0.95rem; transition: color 0.2s; cursor: pointer;
  }
  .nav-links a:hover, .nav-links a.active { color: var(--text); }
  .nav-cta {
    padding: 10px 24px; border-radius: 50px;
    background: linear-gradient(135deg, var(--pink), var(--purple));
    color: white; font-weight: 700; font-size: 0.9rem;
    border: none; cursor: pointer; font-family: 'Nunito', sans-serif;
    text-decoration: none; transition: transform 0.2s, box-shadow 0.2s;
  }
  .nav-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(255,78,138,0.4); }
  .menu-toggle { display: none; background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer; }

  .hero {
    min-height: 100vh;
    background: radial-gradient(ellipse at 20% 50%, rgba(123,92,245,0.2) 0%, transparent 60%),
                radial-gradient(ellipse at 80% 20%, rgba(255,78,138,0.15) 0%, transparent 50%),
                radial-gradient(ellipse at 60% 80%, rgba(61,190,245,0.1) 0%, transparent 50%), var(--dark);
    display: flex; align-items: center; padding: 120px 48px 80px; position: relative; overflow: hidden;
  }
  .hero-content { max-width: 580px; z-index: 1; }
  .hero-badge {
    display: inline-flex; align-items: center; gap: 8px; padding: 8px 18px; border-radius: 50px;
    background: rgba(255,78,138,0.15); border: 1px solid rgba(255,78,138,0.3);
    font-size: 0.85rem; font-weight: 700; color: var(--pink); margin-bottom: 24px;
    animation: fadeUp 0.6s ease both;
  }
  .hero h1 {
    font-family: 'Poppins', sans-serif; font-size: clamp(3rem, 6vw, 4.5rem);
    font-weight: 900; line-height: 1.1; margin-bottom: 20px; animation: fadeUp 0.6s 0.1s ease both;
  }
  .hero h1 span { background: linear-gradient(135deg, var(--pink), var(--purple), var(--blue)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  .hero-sub { font-size: 1.15rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 40px; animation: fadeUp 0.6s 0.2s ease both; }
  .hero-actions { display: flex; gap: 16px; flex-wrap: wrap; animation: fadeUp 0.6s 0.3s ease both; }
  .btn-primary {
    display: flex; align-items: center; gap: 10px; padding: 16px 32px; border-radius: 50px;
    background: linear-gradient(135deg, var(--pink), var(--purple)); color: white;
    font-weight: 800; font-size: 1rem; border: none; cursor: pointer; text-decoration: none;
    transition: transform 0.2s, box-shadow 0.2s; font-family: 'Nunito', sans-serif;
  }
  .btn-primary:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(255,78,138,0.4); }
  .btn-secondary {
    display: flex; align-items: center; gap: 10px; padding: 16px 32px; border-radius: 50px;
    background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15);
    color: white; font-weight: 700; font-size: 1rem; cursor: pointer; text-decoration: none;
    transition: all 0.2s; font-family: 'Nunito', sans-serif;
  }
  .btn-secondary:hover { background: rgba(255,255,255,0.12); transform: translateY(-2px); }
  .hero-visual { flex: 1; display: flex; justify-content: center; align-items: center; position: relative; z-index: 1; }
  .floating-grid {
    width: 280px; height: 280px; background: rgba(255,255,255,0.05); border-radius: 24px;
    border: 1px solid rgba(255,255,255,0.1); display: grid; grid-template-columns: repeat(6, 1fr);
    gap: 6px; padding: 16px; box-shadow: 0 40px 80px rgba(0,0,0,0.4);
    animation: float 6s ease-in-out infinite; backdrop-filter: blur(10px);
  }
  .grid-cell { border-radius: 6px; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 0.9rem; aspect-ratio: 1; }
  @keyframes float { 0%,100% { transform: translateY(0) rotate(-3deg); } 50% { transform: translateY(-20px) rotate(-3deg); } }
  @keyframes fadeUp { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
  .hero-stats { display: flex; gap: 48px; margin-top: 48px; animation: fadeUp 0.6s 0.4s ease both; }
  .stat { text-align: center; }
  .stat-num { font-family: 'Poppins', sans-serif; font-size: 2rem; font-weight: 900; }
  .stat-label { font-size: 0.8rem; color: var(--text-muted); font-weight: 600; margin-top: 2px; }

  .section { padding: 100px 48px; }
  .section-header { text-align: center; margin-bottom: 64px; }
  .section-tag { display: inline-block; padding: 6px 16px; border-radius: 50px; font-size: 0.8rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 16px; }
  .section h2 { font-family: 'Poppins', sans-serif; font-size: clamp(2rem, 4vw, 3rem); font-weight: 900; margin-bottom: 16px; }
  .section-sub { color: var(--text-muted); font-size: 1.1rem; max-width: 560px; margin: 0 auto; }

  .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; max-width: 1200px; margin: 0 auto; }
  .feature-card { padding: 32px; border-radius: 20px; background: var(--card-bg); border: 1px solid rgba(255,255,255,0.08); transition: transform 0.3s, box-shadow 0.3s; position: relative; overflow: hidden; }
  .feature-card:hover { transform: translateY(-8px); box-shadow: 0 24px 48px rgba(0,0,0,0.3); }
  .feature-icon { width: 56px; height: 56px; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 1.6rem; margin-bottom: 20px; }
  .feature-card h3 { font-family: 'Poppins', sans-serif; font-size: 1.2rem; font-weight: 700; margin-bottom: 10px; }
  .feature-card p { color: var(--text-muted); line-height: 1.6; font-size: 0.95rem; }

  .grids-section { background: radial-gradient(ellipse at 50% 0%, rgba(123,92,245,0.15) 0%, transparent 60%); padding: 100px 48px; }
  .grid-cards { display: flex; gap: 24px; justify-content: center; flex-wrap: wrap; max-width: 900px; margin: 0 auto; }
  .grid-card { flex: 1; min-width: 220px; max-width: 260px; padding: 36px 28px; border-radius: 24px; text-align: center; border: 1px solid rgba(255,255,255,0.1); transition: transform 0.3s; }
  .grid-card:hover { transform: translateY(-8px); }
  .grid-preview { width: 80px; height: 80px; margin: 0 auto 20px; display: grid; gap: 4px; padding: 8px; border-radius: 12px; background: rgba(255,255,255,0.08); }
  .gp-cell { border-radius: 3px; }
  .grid-card h3 { font-family: 'Poppins', sans-serif; font-size: 1.4rem; font-weight: 800; margin-bottom: 6px; }
  .grid-card .grid-diff { font-size: 0.8rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 12px; }
  .grid-card p { color: var(--text-muted); font-size: 0.9rem; line-height: 1.5; }

  .steps { display: flex; gap: 0; max-width: 900px; margin: 0 auto; position: relative; }
  .step { flex: 1; text-align: center; padding: 0 24px; position: relative; }
  .step::after { content: '→'; position: absolute; right: -12px; top: 28px; font-size: 1.5rem; color: var(--text-muted); z-index: 1; }
  .step:last-child::after { display: none; }
  .step-num { width: 64px; height: 64px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: 'Poppins', sans-serif; font-size: 1.5rem; font-weight: 900; margin: 0 auto 20px; }
  .step h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 8px; }
  .step p { color: var(--text-muted); font-size: 0.9rem; line-height: 1.5; }

  .cta-banner { margin: 0 48px; padding: 64px 48px; border-radius: 32px; background: linear-gradient(135deg, var(--pink), var(--purple), var(--blue)); text-align: center; position: relative; overflow: hidden; }
  .cta-banner h2 { font-family: 'Poppins', sans-serif; font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 900; margin-bottom: 16px; position: relative; }
  .cta-banner p { font-size: 1.1rem; color: rgba(255,255,255,0.85); margin-bottom: 36px; position: relative; }
  .cta-buttons { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; position: relative; }
  .btn-white { padding: 16px 36px; border-radius: 50px; background: white; color: var(--purple); font-weight: 800; font-size: 1rem; border: none; cursor: pointer; font-family: 'Nunito', sans-serif; transition: transform 0.2s, box-shadow 0.2s; display: flex; align-items: center; gap: 8px; text-decoration: none; }
  .btn-white:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,0,0,0.2); }

  .features-hero { padding: 160px 48px 80px; text-align: center; background: radial-gradient(ellipse at 50% 30%, rgba(61,190,245,0.15) 0%, transparent 60%), var(--dark); }
  .features-hero h1 { font-family: 'Poppins', sans-serif; font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 900; margin-bottom: 16px; }
  .big-features { max-width: 1100px; margin: 0 auto; padding: 80px 48px; display: flex; flex-direction: column; gap: 80px; }
  .big-feature { display: flex; gap: 64px; align-items: center; }
  .big-feature.reverse { flex-direction: row-reverse; }
  .big-feature-visual { flex: 1; border-radius: 24px; overflow: hidden; background: var(--card-bg); border: 1px solid rgba(255,255,255,0.1); padding: 32px; min-height: 300px; display: flex; align-items: center; justify-content: center; }
  .big-feature-text { flex: 1; }
  .big-feature-text .feature-num { font-family: 'Poppins', sans-serif; font-size: 5rem; font-weight: 900; opacity: 0.08; line-height: 1; margin-bottom: -20px; }
  .big-feature-text h2 { font-family: 'Poppins', sans-serif; font-size: 2rem; font-weight: 800; margin-bottom: 16px; }
  .big-feature-text p { color: var(--text-muted); line-height: 1.7; margin-bottom: 24px; }
  .feature-pills { display: flex; flex-wrap: wrap; gap: 10px; }
  .pill { padding: 6px 16px; border-radius: 50px; font-size: 0.85rem; font-weight: 700; border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.06); }
  .mini-sudoku { display: grid; gap: 5px; padding: 16px; border-radius: 16px; background: rgba(255,255,255,0.05); }
  .ms-cell { width: 42px; height: 42px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; }

  .privacy-hero { padding: 160px 48px 60px; background: radial-gradient(ellipse at 30% 50%, rgba(78,205,196,0.12) 0%, transparent 60%), var(--dark); text-align: center; }
  .privacy-hero h1 { font-family: 'Poppins', sans-serif; font-size: clamp(2.5rem, 5vw, 3.5rem); font-weight: 900; margin-bottom: 12px; }
  .privacy-container { max-width: 820px; margin: 0 auto; padding: 60px 48px 100px; }
  .privacy-toc { padding: 28px 32px; border-radius: 20px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); margin-bottom: 48px; }
  .privacy-toc h3 { font-size: 1rem; font-weight: 700; margin-bottom: 16px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.08em; }
  .privacy-toc ol { padding-left: 20px; display: flex; flex-direction: column; gap: 8px; }
  .privacy-toc li { color: var(--blue); font-weight: 600; font-size: 0.95rem; cursor: pointer; }
  .privacy-toc li:hover { text-decoration: underline; }
  .privacy-section { margin-bottom: 52px; padding-bottom: 52px; border-bottom: 1px solid rgba(255,255,255,0.06); }
  .privacy-section:last-child { border-bottom: none; }
  .privacy-section h2 { font-family: 'Poppins', sans-serif; font-size: 1.5rem; font-weight: 800; margin-bottom: 20px; display: flex; align-items: center; gap: 12px; }
  .privacy-section h2 .section-icon { width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1rem; }
  .privacy-section p { color: var(--text-muted); line-height: 1.8; margin-bottom: 16px; font-size: 0.98rem; }
  .privacy-section ul, .privacy-section ol { padding-left: 20px; color: var(--text-muted); display: flex; flex-direction: column; gap: 10px; margin-bottom: 16px; font-size: 0.98rem; line-height: 1.7; }
  .privacy-section strong { color: var(--text); }
  .highlight-box { padding: 20px 24px; border-radius: 14px; border-left: 3px solid var(--teal); background: rgba(29,216,180,0.07); margin: 20px 0; }
  .highlight-box p { margin: 0; color: rgba(255,255,255,0.8); }
  .contact-box { padding: 28px 32px; border-radius: 20px; background: linear-gradient(135deg, rgba(123,92,245,0.15), rgba(255,78,138,0.1)); border: 1px solid rgba(255,255,255,0.1); margin-top: 20px; }
  .contact-box h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 12px; }
  .contact-box p { color: var(--text-muted); margin: 0; font-size: 0.95rem; }
  .contact-box a { color: var(--blue); text-decoration: none; font-weight: 600; }

  .about-hero { padding: 160px 48px 80px; background: radial-gradient(ellipse at 70% 30%, rgba(255,140,66,0.12) 0%, transparent 60%), var(--dark); text-align: center; }
  .about-hero h1 { font-family: 'Poppins', sans-serif; font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 900; margin-bottom: 16px; }
  .about-hero p { color: var(--text-muted); font-size: 1.1rem; max-width: 560px; margin: 0 auto; }
  .about-content { max-width: 1000px; margin: 0 auto; padding: 80px 48px; }
  .mission-card { padding: 48px; border-radius: 28px; background: linear-gradient(135deg, rgba(255,78,138,0.1), rgba(123,92,245,0.1)); border: 1px solid rgba(255,255,255,0.1); margin-bottom: 60px; text-align: center; }
  .mission-card .quote-icon { font-size: 3rem; margin-bottom: 16px; }
  .mission-card p { font-size: 1.3rem; font-weight: 600; line-height: 1.7; color: rgba(255,255,255,0.9); max-width: 600px; margin: 0 auto; }
  .values-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 60px; }
  .value-card { padding: 28px; border-radius: 20px; background: var(--card-bg); border: 1px solid rgba(255,255,255,0.08); text-align: center; }
  .value-card .value-emoji { font-size: 2rem; margin-bottom: 12px; }
  .value-card h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 8px; }
  .value-card p { color: var(--text-muted); font-size: 0.9rem; line-height: 1.5; }
  .download-section { text-align: center; padding: 60px 0; border-top: 1px solid rgba(255,255,255,0.06); }
  .download-section h2 { font-family: 'Poppins', sans-serif; font-size: 2rem; font-weight: 800; margin-bottom: 12px; }
  .download-section p { color: var(--text-muted); margin-bottom: 32px; }
  .store-buttons { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
  .store-btn { display: flex; align-items: center; gap: 12px; padding: 14px 28px; border-radius: 14px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); cursor: pointer; transition: all 0.2s; font-family: 'Nunito', sans-serif; text-decoration: none; color: white; }
  .store-btn:hover { background: rgba(255,255,255,0.12); transform: translateY(-2px); }
  .store-btn .store-icon { font-size: 1.8rem; }
  .store-btn .store-text { text-align: left; }
  .store-btn .store-text small { display: block; font-size: 0.7rem; color: var(--text-muted); font-weight: 600; }
  .store-btn .store-text span { font-size: 1rem; font-weight: 800; }

  footer { padding: 48px; border-top: 1px solid rgba(255,255,255,0.06); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; }
  .footer-logo { font-family: 'Poppins', sans-serif; font-weight: 800; font-size: 1.2rem; background: linear-gradient(135deg, var(--pink), var(--purple)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  .footer-links { display: flex; gap: 32px; }
  .footer-links a { color: var(--text-muted); text-decoration: none; font-size: 0.9rem; font-weight: 600; cursor: pointer; transition: color 0.2s; }
  .footer-links a:hover { color: var(--text); }
  .footer-copy { color: var(--text-muted); font-size: 0.85rem; }

  @media (max-width: 768px) {
    .nav { padding: 16px 24px; }
    .nav-links { display: none; }
    .menu-toggle { display: block; }
    .hero { flex-direction: column; padding: 100px 24px 60px; gap: 48px; text-align: center; }
    .hero-visual { display: none; }
    .hero-stats { justify-content: center; }
    .section { padding: 60px 24px; }
    .features-grid { grid-template-columns: 1fr; }
    .big-feature, .big-feature.reverse { flex-direction: column; }
    .grids-section { padding: 60px 24px; }
    .cta-banner { margin: 0 24px; padding: 48px 28px; }
    .steps { flex-direction: column; gap: 32px; }
    .step::after { display: none; }
    .privacy-container { padding: 40px 24px 80px; }
    .about-content { padding: 40px 24px; }
    footer { flex-direction: column; text-align: center; padding: 32px 24px; }
    .footer-links { flex-wrap: wrap; justify-content: center; gap: 20px; }
    .big-features { padding: 40px 24px; }
    .features-hero, .about-hero, .privacy-hero { padding: 120px 24px 40px; }
  }
`;

export default styles;
