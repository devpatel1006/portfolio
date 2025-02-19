import { motion } from 'framer-motion'

export default function ContactForm() {
    return (
        <section className="py-20 px-8">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gray-800 rounded-2xl p-8 shadow-xl"
                >
                    <h3 className="text-4xl font-bold mb-8">Get in Touch</h3>

                    <form className="space-y-6">
                        <div className="space-y-1">
                            <label className="text-gray-400">Your Email</label>
                            <motion.input
                                whileFocus={{ scale: 1.02 }}
                                className="w-full bg-gray-900 rounded-lg p-4 focus:ring-2 focus:ring-primary"
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full bg-gradient-to-r from-primary to-secondary py-4 rounded-lg font-bold"
                        >
                            Send Message
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    )
}