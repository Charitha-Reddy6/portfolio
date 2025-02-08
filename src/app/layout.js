import Link from "next/link";
import "./globals.css";

export default function Layout({ children }) {
    return (
        <html lang="en">
            <body>
                <nav className="p-4 bg-white shadow-md flex justify-center space-x-6">
                    <Link href="/" className="text-lg font-semibold">Home</Link>
                    <Link href="/projects" className="text-lg font-semibold">Projects</Link>
                    <Link href="/certifications" className="text-lg font-semibold">Certifications</Link>
                </nav>
                <main>{children}</main>
            </body>
        </html>
    );
}
