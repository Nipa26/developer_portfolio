import { ArrowUpRight, BriefcaseBusiness, Code2, GraduationCap, Laptop, Rocket, Target } from 'lucide-react';

const highlights = [
    {
        icon: Code2,
        title: 'Clean Code',
        description: 'Writing clean, reusable and maintainable code.',
    },
    {
        icon: Laptop,
        title: 'Responsive Design',
        description: 'Creating beautiful experiences on every device.',
    },
    {
        icon: Rocket,
        title: 'Modern Technology',
        description: 'Building applications with modern web technologies.',
    },
    {
        icon: Target,
        title: 'Problem Solving',
        description: 'Turning ideas and challenges into practical solutions.',
    },
];

function About() {
    return (
        <section id="about" className="relative overflow-hidden bg-slate-900 px-6 py-24 md:py-32">
            <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl">
                {/* Section Heading */}
                <div className="mb-16 text-center">
                    <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
                        Get To Know Me
                    </span>

                    <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
                        About <span className="text-blue-500">Me</span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
                        Passionate about creating modern digital experiences and building solutions that make a
                        difference.
                    </p>
                </div>

                <div className="grid items-center gap-14 lg:grid-cols-2">
                    {/* Left Content */}
                    <div>
                        <h3 className="text-3xl leading-snug font-bold text-white md:text-4xl">
                            I Build Digital
                            <span className="block bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                Experiences That Matter.
                            </span>
                        </h3>

                        <p className="mt-7 leading-8 text-slate-400">
                            Hello! I'm a passionate developer who loves transforming creative ideas into functional and
                            beautiful web applications.
                        </p>

                        <p className="mt-5 leading-8 text-slate-400">
                            I enjoy learning new technologies, solving challenging problems and building user-friendly
                            websites with clean and efficient code.
                        </p>

                        <div className="mt-9 grid gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-5">
                                <GraduationCap size={28} className="text-blue-400" />
                                <h4 className="mt-4 font-semibold text-white">Continuous Learning</h4>
                                <p className="mt-2 text-sm leading-6 text-slate-400">
                                    Always improving my development skills.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-5">
                                <BriefcaseBusiness size={28} className="text-purple-400" />
                                <h4 className="mt-4 font-semibold text-white">My Work</h4>
                                <p className="mt-2 text-sm leading-6 text-slate-400">
                                    Focused on practical projects and real solutions.
                                </p>
                            </div>
                        </div>

                        <a
                            href="#contact"
                            className="mt-9 inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-700"
                        >
                            Let's Connect
                            <ArrowUpRight size={19} />
                        </a>
                    </div>

                    {/* Right Highlights */}
                    <div className="grid gap-5 sm:grid-cols-2">
                        {highlights.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="group rounded-2xl border border-white/10 bg-slate-950/70 p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5"
                                >
                                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition group-hover:bg-blue-600 group-hover:text-white">
                                        <Icon size={28} />
                                    </div>

                                    <h4 className="mt-6 text-xl font-semibold text-white">{item.title}</h4>

                                    <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
