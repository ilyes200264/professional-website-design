"use client"

import type React from "react"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"

export default function ContactForm() {
  const pathname = usePathname()
  const isFrench = pathname.startsWith("/fr")
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Translation labels
  const labels = {
    firstName: isFrench ? "Prénom" : "First name",
    lastName: isFrench ? "Nom" : "Last name", 
    email: isFrench ? "Courriel" : "Email",
    phone: isFrench ? "Téléphone" : "Phone",
    address: isFrench ? "Adresse" : "Address",
    message: isFrench ? "Message" : "Message",
    submit: isFrench ? "Envoyer" : "Submit",
    submitting: isFrench ? "Envoi en cours..." : "Submitting...",
    successTitle: isFrench ? "Message envoyé avec succès !" : "Message sent successfully!",
    successMessage: isFrench 
      ? "Merci pour votre message. Nous vous répondrons dans les plus brefs délais."
      : "Thank you for your message. We'll get back to you as soon as possible.",
    required: isFrench ? "obligatoire" : "required",
    errorMessage: isFrench 
      ? "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer."
      : "An error occurred while sending the message. Please try again."
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.firstName + " " + formData.lastName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          message: formData.message,
          subject: isFrench ? "Soumission de formulaire de contact" : "Contact Form Submission"
        })
      })
      if (!res.ok) throw new Error(labels.errorMessage)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        message: "",
      })
      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (err) {
      alert(labels.errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {isSubmitted ? (
        <motion.div
          className="text-center p-8 bg-green-50 rounded-lg border border-green-200"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>
          <h3 className="text-xl font-semibold text-green-800 mb-2">
            {labels.successTitle}
          </h3>
          <p className="text-green-700">
            {labels.successMessage}
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Label htmlFor="firstName">{labels.firstName}</Label>
              <Input 
                id="firstName" 
                name="firstName" 
                value={formData.firstName} 
                onChange={handleChange} 
                required 
              />
            </motion.div>
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Label htmlFor="lastName">{labels.lastName}</Label>
              <Input 
                id="lastName" 
                name="lastName" 
                value={formData.lastName} 
                onChange={handleChange} 
                required 
              />
            </motion.div>
          </div>
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Label htmlFor="email">{labels.email}*</Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </motion.div>
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Label htmlFor="phone">{labels.phone}</Label>
            <Input 
              id="phone" 
              name="phone" 
              type="tel" 
              value={formData.phone} 
              onChange={handleChange} 
            />
          </motion.div>
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Label htmlFor="address">{labels.address}</Label>
            <Input 
              id="address" 
              name="address" 
              value={formData.address} 
              onChange={handleChange} 
            />
          </motion.div>
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <Label htmlFor="message">{labels.message}</Label>
            <Textarea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              rows={4} 
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  {labels.submitting}
                </span>
              ) : (
                labels.submit
              )}
            </Button>
          </motion.div>
        </form>
      )}
    </>
  )
}