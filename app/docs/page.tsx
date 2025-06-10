export default function Docs() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-6 text-center">Documentation</h1>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Docker Commands</h2>
          <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md mb-6">
            <p className="font-mono">docker compose up -d</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Starts the container in the background
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md mb-6">
            <p className="font-mono">docker compose down</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Stops and removes the container
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md mb-6">
            <p className="font-mono">docker compose logs -f</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Shows the container logs
            </p>
          </div>
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
