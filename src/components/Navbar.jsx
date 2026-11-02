import { Code2, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
    { name: 'Home', to: '/home' },
    { name: 'About', to: '/about' },
    { name: 'Skills', to: '/skills' },
    { name: 'Projects', to: '/projects' },
    { name: 'Contact', to: '/contact' },
];

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
                <Link to="/home" className="flex items-center gap-2 text-2xl font-bold text-white">
                    <Code2 className="text-blue-500" size={30} />
                    Dev<span className="text-blue-500">Portfolio</span>
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            className={`text-sm font-medium transition ${
                                location.pathname === link.to ? 'text-blue-400' : 'text-slate-300 hover:text-blue-400'
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <Link
                    to="/contact"
                    className="hidden rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 md:block"
                >
                    Let's Talk
                </Link>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white md:hidden"
                    aria-label="Toggle navigation menu"
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {isOpen && (
                <div className="border-t border-white/10 bg-slate-950 px-6 py-5 md:hidden">
                    <div className="flex flex-col gap-5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                onClick={() => setIsOpen(false)}
                                className="font-medium text-slate-300 transition hover:text-blue-400"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}

export default Navbar;
