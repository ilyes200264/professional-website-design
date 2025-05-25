"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Phone, Mail, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function GetAQuotePage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    projectType: "kitchen",
    budget: "10k-25k",
    startTime: "1-3-months",
    projectDescription: "",
    hearAbout: "referral",
    terms: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          name: formData.firstName + " " + formData.lastName,
          subject: "Quote Request Submission"
        })
      })
      if (!res.ok) throw new Error("Erreur lors de l'envoi du message.")
      setFormSubmitted(true)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        projectType: "kitchen",
        budget: "10k-25k",
        startTime: "1-3-months",
        projectDescription: "",
        hearAbout: "referral",
        terms: false,
      })
    } catch (err) {
      alert("Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2_huf29b621bda1ff3cde227c3f265269e47_12946539_1000x0_resize_q90_h2_lanczos-c0WhlSd0a5RKD9bDJPQdbtIVYMvaFd.webp"
            alt="Luxury Kitchen Design"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get A Free Quote
          </motion.h1>
          <motion.p
            className="text-xl text-white mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Take the first step towards your dream kitchen or home renovation. Fill out the form below and our experts
            will provide you with a detailed, no-obligation quote.
          </motion.p>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <motion.h2
                className="text-3xl font-bold mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Request Your Free Quote
              </motion.h2>

              {formSubmitted ? (
                <motion.div
                  className="bg-green-50 border border-green-200 rounded-lg p-8 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-green-800 mb-4">Thank You for Your Request!</h3>
                  <p className="text-green-700 mb-6">
                    We've received your quote request and our team will review it promptly. We'll get back to you within
                    24-48 hours with a detailed, personalized quote.
                  </p>
                  <Button onClick={() => setFormSubmitted(false)}>Submit Another Request</Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <motion.div
                    className="bg-gray-50 p-8 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold mb-6">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name*</Label>
                        <Input id="firstName" name="firstName" placeholder="Enter your first name" required value={formData.firstName} onChange={handleInputChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name*</Label>
                        <Input id="lastName" name="lastName" placeholder="Enter your last name" required value={formData.lastName} onChange={handleInputChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address*</Label>
                        <Input id="email" name="email" type="email" placeholder="Enter your email" required value={formData.email} onChange={handleInputChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number*</Label>
                        <Input id="phone" name="phone" type="tel" placeholder="Enter your phone number" required value={formData.phone} onChange={handleInputChange} />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" name="address" placeholder="Enter your address" value={formData.address} onChange={handleInputChange} />
                      </div>
                    </div>
                  </motion.div>

                  {/* Project Details */}
                  <motion.div
                    className="bg-gray-50 p-8 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h3 className="text-xl font-semibold mb-6">Project Details</h3>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label>What type of project are you planning?*</Label>
                        <RadioGroup value={formData.projectType} onValueChange={v => handleRadioChange("projectType", v)} className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="kitchen" id="kitchen" />
                            <Label htmlFor="kitchen" className="cursor-pointer">Kitchen Remodeling</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="bathroom" id="bathroom" />
                            <Label htmlFor="bathroom" className="cursor-pointer">Bathroom Renovation</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="countertops" id="countertops" />
                            <Label htmlFor="countertops" className="cursor-pointer">Countertops</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="flooring" id="flooring" />
                            <Label htmlFor="flooring" className="cursor-pointer">Flooring Solutions</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="interior" id="interior" />
                            <Label htmlFor="interior" className="cursor-pointer">Interior Design</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="other" id="other" />
                            <Label htmlFor="other" className="cursor-pointer">Other</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label>What is your estimated budget?*</Label>
                        <RadioGroup value={formData.budget} onValueChange={v => handleRadioChange("budget", v)} className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="under-10k" id="under-10k" />
                            <Label htmlFor="under-10k" className="cursor-pointer">Under $10,000</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="10k-25k" id="10k-25k" />
                            <Label htmlFor="10k-25k" className="cursor-pointer">$10,000 - $25,000</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="25k-50k" id="25k-50k" />
                            <Label htmlFor="25k-50k" className="cursor-pointer">$25,000 - $50,000</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="50k-plus" id="50k-plus" />
                            <Label htmlFor="50k-plus" className="cursor-pointer">$50,000+</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label>When would you like to start your project?*</Label>
                        <RadioGroup value={formData.startTime} onValueChange={v => handleRadioChange("startTime", v)} className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="immediately" id="immediately" />
                            <Label htmlFor="immediately" className="cursor-pointer">Immediately</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="1-3-months" id="1-3-months" />
                            <Label htmlFor="1-3-months" className="cursor-pointer">1-3 Months</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="3-6-months" id="3-6-months" />
                            <Label htmlFor="3-6-months" className="cursor-pointer">3-6 Months</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="6-plus-months" id="6-plus-months" />
                            <Label htmlFor="6-plus-months" className="cursor-pointer">6+ Months</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="projectDescription">Project Description*</Label>
                        <Textarea
                          id="projectDescription"
                          name="projectDescription"
                          placeholder="Please describe your project in detail, including any specific requirements or ideas you have."
                          rows={6}
                          required
                          value={formData.projectDescription}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>How did you hear about us?</Label>
                        <RadioGroup value={formData.hearAbout} onValueChange={v => handleRadioChange("hearAbout", v)} className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="referral" id="referral" />
                            <Label htmlFor="referral" className="cursor-pointer">Referral</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="google" id="google" />
                            <Label htmlFor="google" className="cursor-pointer">Google Search</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="social" id="social" />
                            <Label htmlFor="social" className="cursor-pointer">Social Media</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="other-source" id="other-source" />
                            <Label htmlFor="other-source" className="cursor-pointer">Other</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" name="terms" className="mt-1" required checked={formData.terms} onCheckedChange={checked => setFormData(prev => ({ ...prev, terms: !!checked }))} />
                        <Label htmlFor="terms" className="text-sm">
                          I agree to receive communications from Group C.M.R. I understand my information will be used
                          in accordance with the privacy policy.
                        </Label>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button type="submit" size="lg" className="w-full md:w-auto px-8" disabled={isSubmitting}>
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
                          Submitting...
                        </span>
                      ) : (
                        "Submit Quote Request"
                      )}
                    </Button>
                  </motion.div>
                </form>
              )}
            </div>

            <div className="lg:w-1/3">
              <div className="sticky top-24">
                <motion.h2
                  className="text-3xl font-bold mb-8"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Contact Information
                </motion.h2>
                <div className="space-y-6 mb-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <MapPin className="w-6 h-6 text-black mt-1" />
                          <div>
                            <h3 className="font-semibold text-lg mb-2">Our Location</h3>
                            <p className="text-gray-600">427 RUE CHAMPLAIN, JOLIETTE, QC</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <Phone className="w-6 h-6 text-black mt-1" />
                          <div>
                            <h3 className="font-semibold text-lg mb-2">Phone</h3>
                            <p className="text-gray-600">438-923-8941</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <Mail className="w-6 h-6 text-black mt-1" />
                          <div>
                            <h3 className="font-semibold text-lg mb-2">Email</h3>
                            <p className="text-gray-600">info@groupcmr.com</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <Clock className="w-6 h-6 text-black mt-1" />
                          <div>
                            <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                            <p className="text-gray-600">
                              Monday - Friday: 9:00 AM - 5:00 PM
                              <br />
                              Saturday: 10:00 AM - 2:00 PM
                              <br />
                              Sunday: 10:00 AM - 2:00 PM
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Interactive Map */}
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <h3 className="text-xl font-semibold mb-4">Find Us</h3>
                  <div className="h-[300px] bg-gray-100 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2773.9661323275!2d-73.44042492392826!3d46.02307397109892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc8b9b0a7e2a9a9%3A0x1e7c9d8c7c9d9d9d!2s427%20Rue%20Champlain%2C%20Joliette%2C%20QC!5e0!3m2!1sen!2sca!4v1684345678901!5m2!1sen!2sca"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Group C.M.R Location"
                    ></iframe>
                  </div>
                </motion.div>

                {/* Why Choose Us */}
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <h3 className="text-xl font-semibold mb-4">Why Choose Us</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-black mr-2 mt-1" />
                      <span>60 years of combined expertise</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-black mr-2 mt-1" />
                      <span>Free, detailed quotes with no obligation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-black mr-2 mt-1" />
                      <span>Designer services included at no extra cost</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-black mr-2 mt-1" />
                      <span>Premium materials and exceptional craftsmanship</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-black mr-2 mt-1" />
                      <span>Transparent pricing with no hidden fees</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What Our Clients Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-md h-full">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="flex items-center space-x-2 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic flex-grow">{testimonial.quote}</p>
                    <p className="font-medium">{testimonial.author}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Transform Your Space?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Contact us today for a free consultation. Our team is ready to bring your vision to life!
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Get Started Now
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const testimonials = [
  {
    quote:
      "CMR Renovation & Design transformed our kitchen into a stunning space that exceeded our expectations. Their attention to detail and quality craftsmanship is unmatched.",
    author: "B. GAGNON",
  },
  {
    quote:
      "We are thrilled with the outcome of our kitchen remodel. CMR Renovation & Design's professionalism and dedication to customer satisfaction are truly commendable.",
    author: "K. HENNAULT",
  },
  {
    quote:
      "We highly recommend CMR Renovation & Design for their top-notch service and affordable yet stylish kitchen solutions. It has been a pleasure working with them.",
    author: "F. LEVESQUE",
  },
]
