'use client';

import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Activity, Target, BarChart2, Trophy, Dumbbell, TrendingUp } from 'lucide-react'

export default function Component() {
  const [email, setEmail] = useState('')
  const { scrollYProgress } = useScroll()
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-70 backdrop-filter backdrop-blur-lg"
        style={{ opacity: headerOpacity }}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-green-400 flex items-center">
              <Activity className="w-6 h-6 mr-2" />
              Fitbet
            </h1>
            <button className="bg-green-500 bg-opacity-80 text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-50 shadow-lg">
              Get Started
            </button>
          </div>
        </nav>
      </motion.header>

      <main className="pt-24 pb-12">
        <section className="container mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 text-white">
              Bet on Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Fitness Future</span>
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-300">
              Set ambitious goals, track your progress, and win big with Fitbet. Your journey to a healthier, stronger you starts here.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Set Goals", icon: Target, description: "Define clear, achievable fitness objectives." },
                { title: "Track Progress", icon: BarChart2, description: "Monitor your journey with data-driven insights." },
                { title: "Win Rewards", icon: Trophy, description: "Achieve milestones and earn real rewards." }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg p-8 rounded-xl shadow-xl"
                >
                  <feature.icon className="w-12 h-12 mb-4 text-green-400" />
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-green-500 bg-opacity-10 backdrop-filter backdrop-blur-sm"></div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-8 text-white">Ready to Bet on Yourself?</h2>
              <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-200">
                Join Fitbet today and start your journey towards a healthier, more rewarding lifestyle.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full md:w-auto px-6 py-3 rounded-full bg-gray-700 bg-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 backdrop-filter backdrop-blur-sm"
                  required
                />
                <button
                  type="submit"
                  className="w-full md:w-auto bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:from-green-500 hover:to-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-50 shadow-lg flex items-center justify-center"
                >
                  Start Betting
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-12 text-white">How Fitbet Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { title: "Set Your Stakes", icon: Dumbbell, description: "Choose your fitness goals and set your bet amount." },
                { title: "Track & Improve", icon: BarChart2, description: "Use our app to log workouts and monitor your progress." },
                { title: "Compete & Win", icon: TrendingUp, description: "Join challenges and compete with others for bigger rewards." },
                { title: "Cash Out", icon: Trophy, description: "Achieve your goals and win real money or exciting prizes." }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg p-8 rounded-xl shadow-xl text-left"
                >
                  <feature.icon className="w-12 h-12 mb-4 text-green-400" />
                  <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg text-gray-400 py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg mb-4">&copy; 2023 Fitbet. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-green-400 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-green-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-green-400 transition-colors duration-300">Responsible Gambling</a>
          </div>
        </div>
      </footer>
    </div>
  )
}