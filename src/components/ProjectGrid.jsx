// src/components/ProjectGrid.jsx
import { motion } from 'framer-motion'
import AnimatedBorder from './AnimatedBorder'
import project1 from '../assets/eCommerce.jpg'
import project2 from '../assets/socialMedia.jpg'
import project3 from '../assets/taskManager.jpg'

const projects = [
    {
        title: 'E-commerce Platform',
        tech: 'MERN Stack',
        image: project1
    },
    {
        title: 'Social Media App',
        tech: 'React, Node, PostgreSQL',
        image: project2
    },
    {
        title: 'Task Manager',
        tech: 'Next.js, Firebase',
        image: project3
    },
]

export default function ProjectGrid() {
    return (
        <section id="projects" className="py-20 px-8 bg-dark">
            <div className="max-w-6xl mx-auto">
                <h3 className="text-4xl font-bold mb-12 bg-secondary bg-clip-text text-transparent">
                    Projects
                </h3>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <AnimatedBorder key={i}>
                            <motion.div
                                className="space-y-4"
                                whileHover={{ y: -10 }}
                            >
                                <div className="h-48 bg-gray-800 rounded-lg overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h4 className="text-xl font-semibold text-light">{project.title}</h4>
                                <p className="text-secondary font-mono">{project.tech}</p>
                            </motion.div>
                        </AnimatedBorder>
                    ))}
                </div>
            </div>
        </section>
    )
}