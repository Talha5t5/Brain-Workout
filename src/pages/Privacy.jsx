import { COLORS } from "../constants.js";

export default function Privacy() {
    const sections = [
        { id: 'info', icon: '📋', title: '1. Information We Collect', color: COLORS.blue },
        { id: 'use', icon: '🎯', title: '2. How We Use Information', color: COLORS.purple },
        { id: 'share', icon: '🤝', title: '3. Information Sharing', color: COLORS.teal },
        { id: 'storage', icon: '💾', title: '4. Data Storage & Security', color: COLORS.orange },
        { id: 'children', icon: '👶', title: "5. Children's Privacy", color: COLORS.pink },
        { id: 'rights', icon: '⚖️', title: '6. Your Rights', color: COLORS.green },
        { id: 'ads', icon: '📢', title: '7. Advertising', color: COLORS.yellow },
        { id: 'changes', icon: '🔄', title: '8. Changes to This Policy', color: COLORS.purple },
        { id: 'contact', icon: '📬', title: '9. Contact Us', color: COLORS.pink },
    ];

    return (
        <div>
            <div className="privacy-hero">
                <div className="section-tag" style={{ background: 'rgba(29,216,180,0.15)', color: COLORS.teal, display: 'inline-block', marginBottom: 16 }}>🔒 Legal</div>
                <h1>Privacy Policy</h1>
                <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: 8 }}>Last updated: April 11, 2026</p>
                <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: 8, maxWidth: 500, margin: '12px auto 0' }}>
                    We are committed to protecting your privacy. Please read this policy carefully to understand how we handle your information.
                </p>
            </div>

            <div className="privacy-container">
                <div className="privacy-toc">
                    <h3>Table of Contents</h3>
                    <ol>
                        {sections.map(s => (
                            <li key={s.id} onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })}>
                                {s.title}
                            </li>
                        ))}
                    </ol>
                </div>

                <div className="highlight-box">
                    <p><strong>Summary:</strong> Daily Brain Workout is designed with your privacy in mind. We collect minimal data necessary to run the app, do not sell your personal information, and give you control over your data.</p>
                </div>

                <div id="info" className="privacy-section">
                    <h2><span className="section-icon" style={{ background: `${COLORS.blue}22` }}>📋</span> 1. Information We Collect</h2>
                    <p>Daily Brain Workout ("the App") collects limited information to provide and improve the app experience.</p>
                    <p><strong>1.1 Information You Provide</strong></p>
                    <ul>
                        <li>Game progress and high scores stored locally on your device</li>
                        <li>Preferences and settings you configure within the app</li>
                    </ul>
                    <p><strong>1.2 Automatically Collected Information</strong></p>
                    <ul>
                        <li><strong>Device information:</strong> Device type, operating system version, and unique device identifiers</li>
                        <li><strong>Usage data:</strong> How you interact with the app, features used, levels played, and session duration</li>
                        <li><strong>Crash reports:</strong> Error logs and crash data to help us fix bugs and improve stability</li>
                        <li><strong>Analytics data:</strong> Aggregated, anonymized data about how users engage with the app</li>
                    </ul>
                    <p><strong>1.3 What We Do NOT Collect</strong></p>
                    <ul>
                        <li>Your name, email address, or any contact information (unless you contact us directly)</li>
                        <li>Your location data</li>
                        <li>Your contacts, photos, or other sensitive device content</li>
                        <li>Payment information (the app is free)</li>
                    </ul>
                </div>

                <div id="use" className="privacy-section">
                    <h2><span className="section-icon" style={{ background: `${COLORS.purple}22` }}>🎯</span> 2. How We Use Information</h2>
                    <p>We use the information we collect for the following purposes:</p>
                    <ul>
                        <li><strong>To operate the app:</strong> Providing core functionality, saving your game progress, and maintaining your settings</li>
                        <li><strong>To improve the app:</strong> Analyzing usage patterns to enhance features, fix bugs, and improve user experience</li>
                        <li><strong>To ensure stability:</strong> Diagnosing crashes and technical issues to provide a reliable experience</li>
                        <li><strong>To serve advertisements:</strong> Displaying relevant ads through our advertising partners (see Section 7)</li>
                        <li><strong>To comply with legal obligations:</strong> Meeting our legal responsibilities and enforcing our Terms of Service</li>
                    </ul>
                </div>

                <div id="share" className="privacy-section">
                    <h2><span className="section-icon" style={{ background: `${COLORS.teal}22` }}>🤝</span> 3. Information Sharing</h2>
                    <p>We do not sell, rent, or trade your personal information. We may share limited information with:</p>
                    <ul>
                        <li><strong>Analytics providers:</strong> Services like Google Analytics for Firebase (data is anonymized)</li>
                        <li><strong>Advertising partners:</strong> Ad networks that serve advertisements in the app</li>
                        <li><strong>Crash reporting services:</strong> Tools that help us identify and fix technical issues</li>
                        <li><strong>Legal authorities:</strong> When required by law, court order, or to protect our rights</li>
                    </ul>
                    <div className="highlight-box">
                        <p>🛡️ <strong>We never sell your personal data to third parties</strong> for marketing purposes or any other commercial use.</p>
                    </div>
                </div>

                <div id="storage" className="privacy-section">
                    <h2><span className="section-icon" style={{ background: `${COLORS.orange}22` }}>💾</span> 4. Data Storage & Security</h2>
                    <p>Your game progress and preferences are primarily stored locally on your device. We implement appropriate technical and organizational measures to protect your data, including:</p>
                    <ul>
                        <li>Encryption of data in transit using SSL/TLS protocols</li>
                        <li>Secure storage practices following industry standards</li>
                        <li>Limited access controls — only authorized personnel access data</li>
                        <li>Regular security assessments and updates</li>
                    </ul>
                    <p><strong>Data Retention:</strong> We retain collected data only for as long as necessary to provide our services, or as required by law.</p>
                </div>

                <div id="children" className="privacy-section">
                    <h2><span className="section-icon" style={{ background: `${COLORS.pink}22` }}>👶</span> 5. Children's Privacy</h2>
                    <p>Daily Brain Workout is suitable for all ages. We comply with COPPA and similar regulations worldwide.</p>
                    <ul>
                        <li>We do not knowingly collect personally identifiable information from children under 13</li>
                        <li>The app does not require account creation or personal information to play</li>
                        <li>Advertisements shown to users under 13 are non-personalized, child-directed ads only</li>
                        <li>We do not serve behavioral advertising to children</li>
                    </ul>
                    <p>If you are a parent or guardian and believe your child has provided us with personal information, please contact us and we will promptly delete such information.</p>
                </div>

                <div id="rights" className="privacy-section">
                    <h2><span className="section-icon" style={{ background: `${COLORS.green}22` }}>⚖️</span> 6. Your Rights</h2>
                    <p>Depending on your location, you may have the following rights regarding your data:</p>
                    <ul>
                        <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                        <li><strong>Correction:</strong> Request that we correct inaccurate data</li>
                        <li><strong>Deletion:</strong> Request that we delete your personal data</li>
                        <li><strong>Restriction:</strong> Request that we restrict processing of your data</li>
                        <li><strong>Portability:</strong> Request your data in a portable format</li>
                        <li><strong>Opt-out of personalized ads:</strong> Use device settings or in-app options to opt out</li>
                    </ul>
                    <p>To exercise any of these rights, please contact us using the information in Section 9. We will respond within 30 days.</p>
                </div>

                <div id="ads" className="privacy-section">
                    <h2><span className="section-icon" style={{ background: `${COLORS.yellow}22` }}>📢</span> 7. Advertising</h2>
                    <p>Daily Brain Workout is free to play and is supported by advertising. We use Google AdMob to serve ads.</p>
                    <ul>
                        <li>Ads may be personalized based on your interests and device information</li>
                        <li>You can opt out of personalized ads in your device settings</li>
                        <li>We comply with all applicable advertising regulations and platform policies</li>
                        <li>Child-directed ads are non-personalized and comply with COPPA</li>
                    </ul>
                </div>

                <div id="changes" className="privacy-section">
                    <h2><span className="section-icon" style={{ background: `${COLORS.purple}22` }}>🔄</span> 8. Changes to This Policy</h2>
                    <p>We may update this Privacy Policy from time to time. When we make significant changes, we will:</p>
                    <ul>
                        <li>Update the "Last updated" date at the top of this policy</li>
                        <li>Notify you through an in-app notification for significant changes</li>
                        <li>Post the updated policy on our website and within the app</li>
                    </ul>
                    <p>Your continued use of the app after changes are posted constitutes your acceptance of the updated policy.</p>
                </div>

                <div id="contact" className="privacy-section" style={{ borderBottom: 'none' }}>
                    <h2><span className="section-icon" style={{ background: `${COLORS.pink}22` }}>📬</span> 9. Contact Us</h2>
                    <p>If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:</p>
                    <div className="contact-box">
                        <h3>Daily Brain Workout — Privacy Team</h3>
                        <p>📧 Email: <a href="mailto:privacy@dailybrainworkout.app">privacy@dailybrainworkout.app</a></p>
                        <p style={{ marginTop: 8 }}>We aim to respond to all inquiries within <strong>5 business days</strong>.</p>
                        <p style={{ marginTop: 8, fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>This Privacy Policy was last reviewed and updated on April 11, 2026.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
