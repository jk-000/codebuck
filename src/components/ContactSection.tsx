'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [notification, setNotification] = useState<string | null>(null)
  const [notificationType, setNotificationType] = useState<'success' | 'error' | null>(null)

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null)
        setNotificationType(null)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [notification])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await fetch('https://formspree.io/f/xeogkvlj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setNotification('Message sent successfully!')
        setNotificationType('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setNotification('Failed to send message. Please try again.')
        setNotificationType('error')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setNotification('Something went wrong. Please try again.')
      setNotificationType('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Toast Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: 50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -20, x: 50 }}
            transition={{ duration: 0.4 }}
            className={`fixed top-6 right-6 z-50 px-6 py-4 rounded-lg shadow-lg text-white font-medium ${
              notificationType === 'success' ? 'bg-green-600' : 'bg-red-600'
            }`}
          >
            {notification}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Section */}
      <motion.section
        className="bg-gradient-to-br from-white to-white py-12 px-4 sm:px-6 md:pt-10 pt-30"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-2xl flex flex-col md:grid md:grid-cols-2 gap-6">

          {/* Left: Form */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-medium text-blue-600 mb-2">Contact Me</h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">Feel free to reach out — I&apos;d love to hear from you.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full mt-1 border border-gray-300 rounded-md px-4 py-2 sm:py-3 shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full mt-1 border border-gray-300 rounded-md px-4 py-2 sm:py-3 shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  className="w-full mt-1 border border-gray-300 rounded-md px-4 py-2 shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full cursor-pointer py-3 rounded-md bg-blue-600 text-white font-medium transition-all shadow-md ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </div>

          {/* Right: Info */}
          <div className="bg-blue-50 rounded-xl p-5 flex flex-col justify-center space-y-4 text-sm sm:text-base">
            <h3 className="text-lg sm:text-xl font-semibold text-blue-600">Contact Information</h3>
            <p className="text-gray-700">
              📧 <span className="font-medium">Email:</span> info.codebuck@gmail.com
            </p>
            <p className="text-gray-700">
              📞 <span className="font-medium">Phone:</span> +91 932 757 1142
            </p>
            <p className="text-gray-700">
              📍 <span className="font-medium">Address:</span> Punagam, Surat, GJ - 395010
            </p>
          </div>
        </div>
      </motion.section>
    </>
  )
}
