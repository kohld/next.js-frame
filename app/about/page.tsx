export default function About() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-6 text-center">About Us!</h1>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <p className="mb-4">
            This is a sample project built with Next.js and Docker Compose. It
            serves as a starting point for your development.
          </p>
          <p>
            This project uses the Next.js App Router and is configured for local
            development with Docker.
          </p>
        </div>

        <div className="text-center mt-8">
          <a
            href="/"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
