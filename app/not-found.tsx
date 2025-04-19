import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 text-gray-800 font-normal">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6 text-gray-700">Page Not Found</h2>
      <p className="text-center text-base text-gray-600 max-w-md leading-relaxed mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 btn-primary text-white rounded-md  transition"
      >
        Return to Homepage
      </Link>
    </div>
  )
}
