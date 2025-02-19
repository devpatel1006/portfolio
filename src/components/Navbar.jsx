// src/components/Navbar.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiCode } from 'react-icons/fi'
import { Link } from 'react-scroll'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const navItems = [
        { name: 'Home', to: '#hero' },
        { name: 'About', to: '#about' },
        { name: 'Projects', to: '#projects' },
    ]

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'circOut' }}
            className="fixed w-full top-0 z-50 bg-dark/80 backdrop-blur-sm border-b border-gray-800"
        >
            <div className="max-w-6xl mx-auto px-8">
                <div className="flex justify-between items-center h-20">
                    <a
                        href="/"
                        smooth={true}
                        className="flex items-center gap-2 group cursor-pointer"
                    >
                        <FiCode className="w-8 h-8" />
                        <span className="text-2xl font-bold bg-secondary bg-clip-text text-transparent">
                            Dev Patel
                        </span>
                    </a>

                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.to}
                                href={item.to}
                                smooth={true}
                                offset={-100}
                                className="relative px-4 py-2 cursor-pointer group"
                            >
                                <motion.span
                                    whileHover={{ color: '#DB2777' }}
                                    className="text-light text-lg font-medium transition-colors"
                                >
                                    {item.name}
                                </motion.span>
                                <motion.div
                                    className="absolute bottom-0 left-0 h-[2px] bg-primary w-0 group-hover:w-full transition-all duration-300"
                                    initial={{ width: 0 }}
                                    whileHover={{ width: '100%' }}
                                />
                            </a>
                        ))}
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-light hover:text-primary transition-colors"
                    >
                        {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                    </button>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="md:hidden absolute w-full bg-dark/95 backdrop-blur-lg border-b border-gray-800"
                        >
                            <div className="px-8 py-6 space-y-6">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.to}
                                        to={item.to}
                                        smooth={true}
                                        offset={-100}
                                        onClick={() => setIsOpen(false)}
                                        className="block"
                                    >
                                        <motion.div
                                            whileHover={{ x: 10 }}
                                            className="text-light text-xl font-medium py-2 border-l-2 border-transparent hover:border-primary px-4"
                                        >
                                            {item.name}
                                        </motion.div>
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <motion.div
                className="h-[2px] bg-primary/30 absolute bottom-0 left-0"
                style={{ width: '100%' }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2, ease: 'linear' }}
            />
        </motion.nav>
    )
}