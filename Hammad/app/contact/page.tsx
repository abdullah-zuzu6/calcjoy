"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Linkedin, Mail, Phone, Send } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  const contactInfo = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/hammad-masood",
      href: "https://linkedin.com/in/hammad-masood",
    },
    {
      icon: Mail,
      label: "Email",
      value: "hammad.masood@gmail.com",
      href: "mailto:hammad.masood@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 318 4264113",
      href: "+92 318 4264113",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to transform your digital presence? Let's discuss how I can help you achieve your goals and take your
            business to new heights.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-3">Free Consultation Available</h2>
          <p className="text-muted-foreground leading-relaxed">
            Book a free 30-minute consultation to discuss your project. I'll provide honest feedback, actionable
            insights, and a clear roadmap for success. No obligations, just valuable advice to help you make informed
            decisions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Feel free to reach out through any of these channels. I typically respond within 24 hours and look
                forward to learning about your project.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    target={info.icon === Linkedin ? "_blank" : undefined}
                    rel={info.icon === Linkedin ? "noopener noreferrer" : undefined}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary transition-colors group"
                  >
                    <div className="bg-primary/20 text-primary rounded-lg p-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                )
              })}
            </motion.div>

            <motion.div variants={itemVariants} className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-bold mb-3">Availability</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Currently accepting new projects. Average response time: 12-24 hours. Available for calls Monday-Friday
                9 AM - 6 PM.
              </p>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </div>
  )
}
