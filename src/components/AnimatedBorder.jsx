import { motion } from 'framer-motion'

export default function AnimatedBorder({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative p-1 rounded-xl bg-gradient-to-r from-primary to-secondary"
        >
            <div className="bg-gray-900 rounded-lg p-8">
                {children}
            </div>
        </motion.div>
    )
}