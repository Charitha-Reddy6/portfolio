export default function Home() {
  return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Charitha Namireddy</h1>
          <p className="text-lg text-gray-700 mb-6">Software Developer | Full Stack Engineer</p>
          <div className="flex space-x-6">
              <a 
                  href="https://github.com/Charitha-Reddy6" 
                  target="_blank" 
                  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition"
              >
                  GitHub
              </a>
              <a 
                  href="https://linkedin.com/in/YOUR-LINKEDIN" 
                  target="_blank" 
                  className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-md shadow-md hover:bg-gray-900 transition"
              >
                  LinkedIn
              </a>
          </div>
      </div>
  );
}
