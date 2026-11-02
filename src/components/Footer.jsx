import { ArrowUp, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
const footerLinks = [{ name: 'Contact', to: '/contact' }];

function Footer() {
    return (
        <footer className="border-t border-white/10 bg-slate-950 px-6 py-16">
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
                {/* Logo */}
                <a href="#home" className="mb-5 inline-flex items-center gap-2 text-3xl font-bold text-white">
                    <Code2 className="text-blue-500" size={32} />
                    Dev<span className="text-blue-500">Portfolio</span>
                </a>

                {/* Description */}
                <p className="mb-8 max-w-xl leading-7 text-slate-400">
                    Creating modern, responsive and meaningful digital experiences through creativity and technology.
                </p>

                {/* Contact Button */}
                <Link
                    to="/contact"
                    className="hidden rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 md:block"
                >
                    Let's Talk
                </Link>

                {/* Divider */}
                <div className="mb-7 h-px w-full bg-white/10"></div>

                {/* Copyright */}
                <p className="text-sm text-slate-500">
                    © {new Date().getFullYear()} DevPortfolio. All rights reserved.
                </p>

                {/* Back to Top */}
                <Link
                    to="/home"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition hover:text-blue-300"
                >
                    Back to Top
                    <ArrowUp size={16} />
                </Link>
            </div>
        </footer>
    );
}

export default Footer;
