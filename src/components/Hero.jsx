import { ArrowRight, Code2, Download, Sparkles } from 'lucide-react';

function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-6 pb-16 pt-32"
        >
            {/* Background Effects */}
            <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
            <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />

            <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
                {/* Left Content */}
                <div>
                    <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-300">
                        <Sparkles size={16} />
                        Available for new opportunities
                    </div>

                    <h1 className="text-5xl leading-tight font-bold tracking-tight text-white md:text-7xl">
                        Building
                        <span className="block bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Digital
                        </span>
                        Experiences.
                    </h1>

                    <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
                        Hi, I'm a Creative Developer. I design and build modern, responsive and user-friendly digital
                        experiences with passion and creativity.
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-700"
                        >
                            View My Projects
                            <ArrowRight size={19} />
                        </a>

                        <a
                            href="/resume.pdf"
                            download
                            className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-8 py-4 font-semibold text-white transition hover:border-blue-500 hover:text-blue-400"
                        >
                            Download CV
                            <Download size={19} />
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="mt-12 flex items-center gap-5">
                        <span className="text-sm text-slate-500">Follow me</span>

                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm font-medium text-slate-400 transition hover:text-white"
                        >
                            GitHub
                        </a>

                        <a
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm font-medium text-slate-400 transition hover:text-blue-400"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

                {/* Right Visual */}
                <div className="relative mx-auto w-full max-w-md">
                    <div className="absolute -inset-5 rounded-[40px] bg-linear-to-r from-blue-600 to-purple-600 opacity-20 blur-2xl" />

                    <div className="relative rounded-[30px] border border-white/10 bg-slate-900 p-5 shadow-2xl">
                        {/* Card Header */}
                        <div className="flex items-center justify-between border-b border-white/10 pb-5">
                            <div className="flex gap-2">
                                <span className="h-3 w-3 rounded-full bg-red-500" />
                                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                                <span className="h-3 w-3 rounded-full bg-green-500" />
                            </div>

                            <span className="text-xs text-slate-500">developer.jsx</span>

                            <Code2 className="text-blue-400" size={20} />
                        </div>

                        {/* Code Card */}
                        <div className="py-8 font-mono text-sm leading-8">
                            <p className="text-purple-400">
                                const <span className="text-blue-300">developer</span> = {'{'}
                            </p>

                            <p className="pl-5 text-slate-300">
                                name: <span className="text-green-400">'Creative Developer'</span>,
                            </p>

                            <p className="pl-5 text-slate-300">skills: [</p>

                            <p className="pl-10 text-green-400">'React',</p>

                            <p className="pl-10 text-green-400">'Tailwind CSS',</p>

                            <p className="pl-10 text-green-400">'JavaScript'</p>

                            <p className="pl-5 text-slate-300">],</p>

                            <p className="pl-5 text-slate-300">
                                passion: <span className="text-green-400">'Creating'</span>
                            </p>

                            <p className="text-purple-400">{'};'}</p>
                        </div>

                        {/* Card Footer */}
                        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-800/70 p-4">
                            <div>
                                <p className="text-xs text-slate-500">CURRENT STATUS</p>

                                <p className="mt-1 font-semibold text-white">Building something great</p>
                            </div>

                            <span className="h-3 w-3 animate-pulse rounded-full bg-green-400" />
                        </div>
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute -right-4 -bottom-7 rounded-2xl border border-white/10 bg-slate-800 px-5 py-4 shadow-xl md:-right-8">
                        <p className="text-sm font-semibold text-white">
                            <Sparkles className="mr-2 inline text-yellow-400" size={16} />
                            Creative & Modern
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
