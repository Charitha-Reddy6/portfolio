export default function Certifications() {
    const certifications = [
        {
            title: "AWS Certified Solutions Architect – Associate",
            issuer: "Amazon Web Services (AWS)",
            link: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
        },
        {
            title: "Microsoft Certified: Azure Fundamentals",
            issuer: "Microsoft",
            link: "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-10">
            <h1 className="text-4xl font-bold text-center mb-6">Certifications</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                    <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold">{cert.title}</h2>
                        <p className="text-gray-600">{cert.issuer}</p>
                        <a
                            href={cert.link}
                            target="_blank"
                            className="mt-3 inline-block px-4 py-2 bg-blue-500 text-white rounded-md"
                        >
                            View Certification
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
