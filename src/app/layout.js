import Link from "next/link";
import "./globals.css";

export default function Layout({ children }) {
    return (
        <html lang="en">
            <body className="bg-gray-100 text-gray-900">
                <nav className="p-4 bg-white shadow-md flex justify-center space-x-8">
                    <Link href="/" className="text-lg font-semibold hover:text-blue-600 transition">Home</Link>
                    <Link href="/projects" className="text-lg font-semibold hover:text-blue-600 transition">Projects</Link>
                    <Link href="/certifications" className="text-lg font-semibold hover:text-blue-600 transition">Certifications</Link>
                </nav>
                <main>{children}</main>
            </body>
        </html>
    );
}
