import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
    const socialLinks = [
        {
            icon: <FaLinkedin className="w-6 h-6" />,
            url: "https://www.linkedin.com/in/dev-patel-9227941bb",
            label: "LinkedIn"
        },
        {
            icon: <FaGithub className="w-6 h-6" />,
            url: "https://www.github.com/devpatel1006",
            label: "GitHub"
        },
        {
            icon: <FaInstagram className="w-6 h-6" />,
            url: "https://www.instagram.com/its_d.ev1064",
            label: "Instagram"
        },
        {
            icon: <FaEnvelope className="w-6 h-6" />,
            url: "mailto:devvpatel1006@gmail.com",
            label: "Email"
        }
    ]

    return (
        <footer className="bg-dark border-t border-gray-800">
            <div className="max-w-6xl mx-auto px-8 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Social Links */}
                    <div className="flex gap-6">
                        {socialLinks.map((link, i) => (
                            <motion.a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -5, color: '#DB2777' }}
                                className="text-light hover:text-secondary transition-colors"
                                aria-label={link.label}
                            >
                                {link.icon}
                            </motion.a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gray-400 text-center"
                    >
                        &copy; {new Date().getFullYear()} Dev Patel. All rights reserved.
                    </motion.p>

                    {/* Back to Top */}
                    <motion.a
                        href="/"
                        whileHover={{ y: -5 }}
                        className="text-light hover:text-primary flex items-center gap-2"
                    >
                        <span>Back to Top</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 10l7-7m0 0l7 7m-7-7v18"
                            />
                        </svg>
                    </motion.a>
                </div>
            </div>
        </footer>
    )
}