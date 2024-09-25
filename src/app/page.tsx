'use client';

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, BarChart2, Target, Zap, ChevronDown } from 'lucide-react'

export default function Component() {
  const [email, setEmail] = useState('')
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white overflow-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-10 backdrop-filter backdrop-blur-lg">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold tracking-tighter">Fitbet</h1>
            <button className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
              Get Started
            </button>
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-12">
        <section className="container mx-auto px-6 py-24 relative">
          <motion.div
            style={{ opacity, scale }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Invest in Your <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">Future Self</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Set ambitious goals, track your progress, and unlock your full potential with Fitbet. Your journey to a healthier, stronger you starts here.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col md:flex-row justify-center items-stretch space-y-4 md:space-y-0 md:space-x-6"
            >
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-8 flex-1 max-w-sm transform transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-semibold mb-4">Did you know?</h3>
                <p className="text-lg">
                  People who regularly set and track their fitness goals are 42% more likely to achieve them.
                </p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-8 flex-1 max-w-sm transform transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-semibold mb-4">Challenge yourself</h3>
                <p className="text-lg">
                  Only 23% of adults meet the recommended guidelines for both aerobic and strength-training activities.
                </p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </section>

        <section className="container mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-center mb-16">How Fitbet Empowers You</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { icon: Target, title: "Set Ambitious Goals", description: "Define your health objectives and create a roadmap for success." },
                { icon: BarChart2, title: "Track Your Progress", description: "Monitor your achievements and stay motivated with real-time updates." },
                { icon: Zap, title: "Achieve Results", description: "Celebrate your successes and unlock rewards for your hard work." }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-8 transform transition-all duration-300 hover:scale-105"
                >
                  <feature.icon className="w-16 h-16 mb-6 text-yellow-400" />
                  <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-lg">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="container mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl font-bold mb-8">Ready to Transform Your Life?</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              Join Fitbet today and start your journey towards a healthier, more accomplished you.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full md:w-auto px-6 py-4 rounded-full bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-white text-lg"
                required
              />
              <button
                type="submit"
                className="w-full md:w-auto bg-gradient-to-r from-yellow-400 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-lg flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-6 h-6" />
              </button>
            </form>
          </motion.div>
        </section>
      </main>

      <footer className="bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg">&copy; 2023 Fitbet. All rights reserved.</p>
        </div>
      </footer>

      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 opacity-50" />
        <div className="absolute inset-0" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }} />
      </div>
    </div>
  )
}