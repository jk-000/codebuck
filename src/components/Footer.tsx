'use client'

import { Instagram, Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold mb-2">CodeBuck</h2>
          <p className="text-gray-400">Innovating digital solutions for <br /> web, mobile, and beyond.</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/technology">Technology</Link></li>
            <li><Link href="/team">Team</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow CodeBuck</h3>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <a href="https://instagram.com/codebuck" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
              <Instagram />
            </a>
            <a href="https://github.com/codebuck" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
              <Github />
            </a>
            <a href="https://linkedin.com/company/codebuck" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} CodeBuck. All rights reserved.
      </div>
    </footer>
  )
}
