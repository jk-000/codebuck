'use client'

import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [notification, setNotification] = useState<string | null>(null)
  const [notificationType, setNotificationType] = useState<'success' | 'error' | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/mdkgewen', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
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
    <section className="bg-white py-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Contact Me</h2>
        <p className="mb-8 text-gray-600">Feel free to get in touch using the form below.</p>
        
        {/* Notification */}
        {notification && (
          <div
            className={`mb-4 px-4 py-3 rounded-md text-white ${
              notificationType === 'success' ? 'bg-green-600' : 'bg-red-600'
            }`}
          >
            {notification}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          {/* Name Field */}
          <div className="relative">
            <label htmlFor="name" className="text-sm text-gray-600">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 px-4 py-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-blue-500"
              required
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <label htmlFor="email" className="text-sm text-gray-600">
              Your Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 px-4 py-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-blue-500"
              required
            />
          </div>

          {/* Message Field */}
          <div className="relative">
            <label htmlFor="message" className="text-sm text-gray-600">
              Your Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 px-4 py-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-blue-600 text-white px-6 py-3 rounded-md transition-all focus:outline-none focus:ring-4 focus:ring-blue-300 ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}
