import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Features from "./pages/Features.jsx";
import Privacy from "./pages/Privacy.jsx";
import About from "./pages/About.jsx";
import styles from "./styles.js";

export default function App() {
    return (
        <BrowserRouter>
            <style>{styles}</style>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}
