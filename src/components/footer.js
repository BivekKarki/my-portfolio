"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Twitter, Heart } from "lucide-react"
// import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com", label: "Twitter" },
  ]

  return (
    <footer className="bg-muted/10 border-t border-border/50 py-12">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <span className="text-xl font-semibold">
                <span className="text-primary">Bivek</span>
                <span className="text-secondary">Karki</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Building innovative web solutions with a focus on user experience, performance, and accessibility.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link) => (
                <button
                  key={link.label}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="rounded-full hover:bg-primary/10 hover:text-primary"
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                    {link.icon}
                  </a>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>San Francisco, CA</li>
              <li>
                <a href="mailto:alex@example.com" className="hover:text-primary transition-colors duration-200">
                  alex@example.com
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="hover:text-primary transition-colors duration-200">
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© {currentYear} Alex Smith. All rights reserved.</p>
          <motion.p
            className="text-sm text-muted-foreground mt-2 md:mt-0 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="inline-block mx-1 text-accent"
            >
              <Heart className="h-4 w-4 fill-current" />
            </motion.span>
            and Next.js
          </motion.p>
        </div>
      </div>
    </footer>
  )
}

