export default function Projects() {
    const projects = [
        {
            title: "Full-Stack Blog App",
            description: "A simple blog application built with Next.js, Node.js, and MongoDB.",
            link: "https://github.com/Charitha-Reddy6/full-stack-blog",
        },
        {
            title: "Portfolio Website",
            description: "The portfolio site you're viewing right now, built with Next.js and Tailwind CSS.",
            link: "https://github.com/Charitha-Reddy6/portfolio",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-10">
            <h1 className="text-4xl font-bold text-center mb-6">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold">{project.title}</h2>
                        <p className="text-gray-600">{project.description}</p>
                        <a
                            href={project.link}
                            target="_blank"
                            className="mt-3 inline-block px-4 py-2 bg-blue-500 text-white rounded-md"
                        >
                            View on GitHub
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
