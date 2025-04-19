import Link from "next/link";
import Image from "next/image";
import { navigationData } from "@/data/navigation-data";

export default function Footer() {
  const { socialLinks, legalLinks } = navigationData;

  return (
    <footer className="bg-white text-[#003A63] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Top Row: Logo, Name & Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
            <span className="text-2xl font-semibold text-gray-800">
              Company Name
            </span>
          </Link>

          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                className="text-[#003A63] hover:text-blue-500 transition text-2xl"
                aria-label={link.label}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-800 my-6 w-full" />

        {/* Bottom Row: Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#003A63]">
          <p className="text-center md:text-left mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} <span className="font-medium">Company Name</span> — All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-blue-600 transition"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
