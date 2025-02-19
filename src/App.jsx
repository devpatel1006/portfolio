import { motion } from 'framer-motion'
import Hero from './components/Hero'
import ProjectGrid from './components/ProjectGrid'
import ContactForm from './components/ContactForm'
import Navbar from './components/Navbar'
import About from './components/About'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen overflow-x-hidden">
      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <ProjectGrid />
        {/* <ContactForm /> */}
      </motion.main>
      <Footer />
    </div>
  )
}