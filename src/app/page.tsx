'use client';
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, BarChart2, Target, Zap } from 'lucide-react'

export default function Component() {
  const [scrollY, setScrollY] = useState(0)
  const [email, setEmail] = useState('')

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission here
    console.log('Email submitted:', email)
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 text-white">
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Fitbet</h1>
            <button className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
              Get Started
            </button>
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-12">
        <section className="container mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Invest in Your Future Self
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Set ambitious goals, track your progress, and unlock your full potential with Fitbet.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-stretch space-y-4 md:space-y-0 md:space-x-4">
              <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-6 flex-1 max-w-sm">
                <h3 className="text-2xl font-semibold mb-4">Did you know?</h3>
                <p className="text-lg">
                  People who regularly set and track their fitness goals are 42% more likely to achieve them.
                </p>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-6 flex-1 max-w-sm">
                <h3 className="text-2xl font-semibold mb-4">Challenge yourself</h3>
                <p className="text-lg">
                  Only 23% of adults meet the recommended guidelines for both aerobic and strength-training activities.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="container mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-center mb-12">How Fitbet Empowers You</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Target, title: "Set Ambitious Goals", description: "Define your health objectives and create a roadmap for success." },
                { icon: BarChart2, title: "Track Your Progress", description: "Monitor your achievements and stay motivated with real-time updates." },
                { icon: Zap, title: "Achieve Results", description: "Celebrate your successes and unlock rewards for your hard work." }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-6"
                >
                  <feature.icon className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="container mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Life?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join Fitbet today and start your journey towards a healthier, more accomplished you.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full md:w-auto px-6 py-3 rounded-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="w-full md:w-auto bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </section>
      </main>

      <footer className="bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2023 Fitbet. All rights reserved.</p>
        </div>
      </footer>

      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${scrollY % window.innerWidth}px ${scrollY % window.innerHeight}px, rgba(255,255,255,0.1) 0%, transparent 10%)`,
        }}
      />
    </div>
  )
}