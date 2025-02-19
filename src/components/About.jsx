import { motion } from 'framer-motion'
import { FaCode, FaDatabase, FaServer } from 'react-icons/fa'

export default function About() {
    const skills = [
        {
            icon: <FaCode className="w-8 h-8 text-primary" />,
            title: "Frontend Development",
            description: "Expertise in React, Tailwind CSS, and modern JavaScript"
        },
        {
            icon: <FaServer className="w-8 h-8 text-secondary" />,
            title: "Backend Development",
            description: "Proficient in Node.js, Express, and REST API design"
        },
        {
            icon: <FaDatabase className="w-8 h-8 text-accent" />,
            title: "Database Management",
            description: "Experience with MongoDB, MySQL, and PostgreSQL"
        }
    ]

    return (
        <section className="py-20 px-8 bg-dark" id='about'>
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold bg-secondary bg-clip-text text-transparent">
                            About Me
                        </h2>
                        <p className="text-light text-lg">
                            Hi, I'm Dev Patel, a passionate full-stack developer currently pursuing my
                            Computer Engineering degree at Pandit Deendayal Energy University.
                            I specialize in building modern web applications using the MERN stack
                            and have experience working with both SQL and NoSQL databases.
                        </p>
                        <p className="text-light text-lg">
                            When I'm not coding, you can find me exploring new technologies,
                            contributing to open-source projects, or working on personal projects
                            that challenge my skills.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {skills.map((skill, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.2 }}
                                className="flex items-start gap-6 p-6 bg-gray-800 rounded-xl"
                            >
                                <div className="flex-shrink-0">
                                    {skill.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-light">{skill.title}</h3>
                                    <p className="text-gray-400">{skill.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}