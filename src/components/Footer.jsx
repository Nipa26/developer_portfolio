import { ArrowUp, Code2, Mail } from 'lucide-react';
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
                <a
                    href="#contact"
                    className="mb-10 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-600 to-purple-600 px-7 py-3 font-semibold text-white transition hover:scale-105"
                >
                    <Mail size={18} />
                    Let's Talk
                </a>

                {/* Divider */}
                <div className="mb-7 h-px w-full bg-white/10"></div>

                {/* Copyright */}
                <p className="text-sm text-slate-500">
                    © {new Date().getFullYear()} DevPortfolio. All rights reserved.
                </p>

                {/* Back to Top */}
                <a
                    href="#home"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition hover:text-blue-300"
                >
                    Back to Top
                    <ArrowUp size={16} />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
