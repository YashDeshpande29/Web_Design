"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { navigationData } from "@/data/navigation-data"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 font-lato ${scrolled
          ? "bg-white/70 backdrop-blur-md shadow-md"
          : "bg-white shadow-md"
        }` && `md:mb-4`}
    >
      <div className="container mx-auto px-4">
        {/* Top utility bar */}
        <div className="flex justify-end items-center py-2 text-sm border-b text-gray-600">
          <Link
            href="/company#contact"
            className="flex items-center mr-4 hover:text-black transition-colors duration-200"
          >
            <Phone size={16} className="mr-1" />
            <span>Contact Us</span>
          </Link>
          <Link
            href="#request-demo"
            className="hover:text-black transition-colors duration-200"
          >
            Support
          </Link>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-5">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold text-gray-900 ml-3 tracking-wide">
              Company Name
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navigationData.mainNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative group font-semibold text-gray-800 text-lg tracking-wide transition duration-200 hover:text-blue-600"
              >
                <span className="pb-1 border-b-2 border-transparent group-hover:border-blue-600 transition-all">
                  {item.label}
                </span>
              </Link>
            ))}
            {/* Request Demo Button */}
            <Link href="#request-demo" className="btn-primary">
              Request Your Demo
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t transition-all ease-in-out duration-300">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navigationData.mainNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-900 font-semibold text-lg py-2 border-b border-gray-100 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {/* Request Demo Button */}
              <Link
                href="#request-demo"
                className="btn-primary text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Request Your Demo
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
