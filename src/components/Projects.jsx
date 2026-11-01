import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: 'E-Commerce Website',
        category: 'Full Stack Development',
        description:
            'A modern e-commerce platform with product management, shopping cart, checkout and admin dashboard.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=85',
        technologies: ['React', 'Laravel', 'MySQL', 'Tailwind CSS'],
        live: '#',
        github: '#',
    },
    {
        title: 'Portfolio Website',
        category: 'Frontend Development',
        description:
            'A professional and responsive developer portfolio with modern UI, smooth animations and clean design.',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=85',
        technologies: ['React', 'Tailwind CSS', 'JavaScript'],
        live: '#',
        github: '#',
    },
    {
        title: 'Dashboard Application',
        category: 'Web Application',
        description: 'A clean dashboard interface for managing business information, analytics and application data.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85',
        technologies: ['React', 'JavaScript', 'CSS'],
        live: '#',
        github: '#',
    },
];

function Projects() {
    return (
        <section id="projects" className="bg-slate-950 px-6 py-24">
            <div className="mx-auto max-w-7xl">
                <div className="mb-14 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-blue-400">My Recent Work</p>

                    <h2 className="text-4xl font-bold text-white md:text-5xl">
                        My <span className="text-blue-500">Projects</span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
                        Some projects that showcase my development skills, creativity and passion for building web
                        applications.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <article
                            key={project.title}
                            className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900 transition duration-300 hover:-translate-y-2 hover:border-blue-500/50"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-slate-950/20 transition group-hover:bg-slate-950/0"></div>
                            </div>

                            <div className="p-7">
                                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-400">
                                    {project.category}
                                </p>

                                <h3 className="mb-3 text-xl font-bold text-white">{project.title}</h3>

                                <p className="mb-6 min-h-20 text-sm leading-7 text-slate-400">{project.description}</p>

                                <div className="mb-7 flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-5 border-t border-white/10 pt-5">
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 text-sm font-semibold text-white transition hover:text-blue-400"
                                    >
                                        Live Demo <ArrowUpRight size={17} />
                                    </a>

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-blue-400"
                                    >
                                        <span className="font-bold">GH</span>
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
