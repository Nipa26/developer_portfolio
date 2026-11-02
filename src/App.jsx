import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-slate-950">
                <Navbar />

                <Routes>
                    <Route path="/" element={<Navigate to="/home" replace />} />
                    <Route path="/home" element={<Hero />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>

                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
