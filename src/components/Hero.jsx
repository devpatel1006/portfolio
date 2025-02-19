import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import devImage from "../assets/dev-patel.jpg"

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
    const comp = useRef()

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.hero-text', {
                y: 100,
                opacity: 0,
                stagger: 0.1,
                duration: 1,
                ease: 'power4.out'
            })

            gsap.from('.hero-image', {
                scale: 0.8,
                opacity: 0,
                duration: 1.5,
                ease: 'elastic.out(1, 0.5)'
            })
        }, comp)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={comp} className="min-h-screen flex items-center justify-center px-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        className="hero-image relative rounded-full overflow-hidden border-8 border-secondary"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                    >
                        <img
                            src={devImage}
                            alt="Dev Patel"
                            className="w-64 h-64 object-cover rounded-full"
                        />
                    </motion.div>

                    <div className="space-y-6">
                        <h1 className="hero-text text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-secondary">
                            Dev Patel
                        </h1>
                        <h2 className="hero-text text-3xl md:text-4xl font-semibold text-gray-300">
                            Fullstack Developer
                        </h2>
                        <motion.p
                            className="hero-text text-lg text-gray-400 max-w-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                        >
                            Crafting digital experiences with the MERN stack and beyond
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    )
}