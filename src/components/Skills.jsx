const skillGroups = [
    {
        title: 'Frontend Development',
        skills: [
            { name: 'HTML5', level: 90 },
            { name: 'CSS3', level: 85 },
            { name: 'JavaScript', level: 75 },
            { name: 'React.js', level: 80 },
            { name: 'Tailwind CSS', level: 85 },
        ],
    },
    {
        title: 'Backend Development',
        skills: [
            { name: 'PHP', level: 75 },
            { name: 'Laravel', level: 80 },
            { name: 'MySQL', level: 75 },
        ],
    },
    {
        title: 'Tools & Technologies',
        skills: [
            { name: 'Git & GitHub', level: 80 },
            { name: 'VS Code', level: 90 },
            { name: 'REST API', level: 70 },
        ],
    },
];

function Skills() {
    return (
        <section id="skills" className="bg-slate-900 px-6 py-24">
            <div className="mx-auto max-w-7xl">
                <div className="mb-14 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-blue-400">My Expertise</p>

                    <h2 className="text-4xl font-bold text-white md:text-5xl">
                        My <span className="text-blue-500">Skills</span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
                        Technologies and tools I use to build modern, responsive and professional web applications.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {skillGroups.map((group) => (
                        <div
                            key={group.title}
                            className="rounded-2xl border border-white/10 bg-slate-950 p-7 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-blue-500/50"
                        >
                            <h3 className="mb-8 text-xl font-bold text-white">{group.title}</h3>

                            <div className="space-y-7">
                                {group.skills.map((skill) => (
                                    <div key={skill.name}>
                                        <div className="mb-3 flex items-center justify-between">
                                            <span className="font-medium text-slate-300">{skill.name}</span>

                                            <span className="text-sm font-semibold text-blue-400">{skill.level}%</span>
                                        </div>

                                        <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                                            <div
                                                className="h-full rounded-full bg-linear-to-r from-blue-500 to-purple-500"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
