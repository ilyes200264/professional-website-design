"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react"
import TestimonialCard from "@/components/testimonial-card"
import ServiceCard from "@/components/service-card"
import ExpertiseCard from "@/components/expertise-card"
import ContactForm from "@/components/contact-form"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Home() {
  const [videoError, setVideoError] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Video Background or Fallback Image */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {!videoError ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute w-full h-full object-cover"
              onError={() => {
                console.log("Erreur lors du chargement de la vidéo")
                setVideoError(true)
              }}
              onLoadedData={() => {
                console.log("Vidéo chargée avec succès")
                setVideoLoaded(true)
              }}
            >
              <source
  src="https://videos.pexels.com/video-files/15887128/15887128-uhd_2560_1440_30fps.mp4"
  type="video/mp4"
/>
              Votre navigateur ne prend pas en charge la lecture de vidéos.
            </video>
          ) : (
            <Image
              src="/images/modern-kitchen.png"
              alt="Group C.M.R Background"
              fill
              className="object-cover"
              priority
            />
          )}
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        <div className="container relative z-20 mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            CMR Renovation & Design
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Expertly Designed. Flawlessly Built.
          </motion.p>
          <motion.h2
            className="text-2xl md:text-4xl font-medium text-white mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Kitchen & Bathroom Renovation Specialists
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
          >
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 hover:text-black">
              <Link href="/quote">Get A Free Quote</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  slug={service.slug}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/modern-kitchen.png"
                alt="Luxury Kitchen"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-[500px]"
              />
            </motion.div>
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About GROUP C.M.R</h2>
              <h3 className="text-xl font-medium mb-4">60 Years of Combined Expertise in Kitchen Remodeling</h3>
              <p className="text-gray-700 mb-6">
                CMR Renovation & Design brings 60 years of combined expertise in kitchen remodeling. We offer high-quality countertops
                and cabinets, delivering exceptional value at the best prices. Let us transform your kitchen with
                unbeatable quality, style, and affordability.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 border border-gray-200 rounded-lg"
                    whileHover={{ y: -5, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="font-medium mb-2">{stat.value}</h4>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <Button className="w-full md:w-auto">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reste du code inchangé... */}
      {/* Expertise Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Expertise
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <ExpertiseCard title={item.title} description={item.description} number={item.number} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Client Testimonials
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
              >
                <TestimonialCard quote={testimonial.quote} author={testimonial.author} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Work
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-[300px] hover:opacity-90 transition-opacity"
                />
              </motion.div>
            ))}
          </div>
          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <Button variant="outline" size="lg">
              <Link href="/gallery" className="flex items-center">
                View Full Gallery <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50" id="contact">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h2>
          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ContactForm />
            </motion.div>
            <motion.div
              className="lg:w-1/2 flex flex-col justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-medium">Address</h3>
                </div>
                <p className="text-gray-700 ml-9">427 RUE CHAMPLAIN, JOLIETTE</p>
              </div>
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-medium">Email</h3>
                </div>
                <p className="text-gray-700 ml-9">info@groupcmr.com</p>
              </div>
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-medium">Phone</h3>
                </div>
                <p className="text-gray-700 ml-9">514-583-3465</p>
              </div>
              <div className="mt-8">
                <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                  <Image
                    src="/images/interior-design.png"
                    alt="Office Location"
                    width={500}
                    height={300}
                    className="rounded-lg object-cover w-full h-[300px]"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">Group C.M.R</h2>
              <p className="text-gray-400">Kitchen & House Remodeling Experts</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <Link href="/" className="hover:text-gray-300 transition-colors">
                HOME
              </Link>
              <Link href="/about" className="hover:text-gray-300 transition-colors">
                ABOUT US
              </Link>
              <Link href="/services" className="hover:text-gray-300 transition-colors">
                SERVICES
              </Link>
              <Link href="/careers" className="hover:text-gray-300 transition-colors">
                CAREERS
              </Link>
              <Link href="/contact" className="hover:text-gray-300 transition-colors">
                CONTACT
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2023 by Group C.M.R. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const services = [
  {
    title: "Kitchen Remodeling",
    description:
      "CMR Renovation & Design brings 60 years of combined expertise in kitchen remodeling. We offer high-quality countertops and cabinets, delivering exceptional value at the best prices.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_huda6f97f0d3c02a210c242ae1377bb3d0_13926954_2000x0_resize_q75_h2_lanczos-PHGUPTuM1xtEXMH9nWAt8vlD7jCAVC.webp",
    slug: "kitchen-remodeling",
  },
  {
    title: "Countertops",
    description:
      "Explore our wide range of high-quality countertops and cabinets designed to elevate the aesthetics and functionality of your kitchen.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_hu0dbc26e62ba825c13a485aa2c3a878b6_25806228_1000x0_resize_q90_h2_lanczos_3-wLKF88Pl9hhRikokpbVws9lTA3ux2l.webp",
    slug: "countertops-cabinets",
  },
  {
    title: "Flooring Solutions",
    description:
      "Discover our premium flooring solutions that combine elegance and durability. From hardwood to laminate, we offer diverse selection options.",
    image: "/images/flooring-samples.png",
    slug: "flooring-solutions",
  },
  {
    title: "Bathroom Renovation",
    description:
      "Experience luxury and comfort with our custom bathroom renovation services. We ensure that every aspect of your bathroom exudes elegance.",
    image: "/images/modern-bathroom.png",
    slug: "bathroom-renovation",
  },
]

const stats = [
  { value: "60 Years", label: "of Combined Expertise" },
  { value: "Exceptional", label: "Value" },
  { value: "Unbeatable", label: "Quality" },
]

const expertise = [
  {
    title: "Project Planning",
    description:
      "From meticulous pre-construction planning to efficient design-build scheduling and precise estimating & budgeting, we lay the foundation for a successful remodeling project.",
    number: "01",
  },
  {
    title: "Construction Excellence",
    description:
      "With a focus on quality control, safety management, and subcontractor coordination, we ensure that the construction phase progresses seamlessly with superior workmanship.",
    number: "02",
  },
  {
    title: "Project Completion",
    description:
      "Upon project completion, we provide the necessary documentation including the certificate of occupancy, as-built documentation, and warranty, ensuring the highest standards.",
    number: "03",
  },
]

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

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_huda6f97f0d3c02a210c242ae1377bb3d0_13926954_2000x0_resize_q75_h2_lanczos-PHGUPTuM1xtEXMH9nWAt8vlD7jCAVC.webp",
    alt: "Kitchen Design",
  },
  {
    src: "/images/modern-kitchen.png",
    alt: "Modern Kitchen Design",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2_huf29b621bda1ff3cde227c3f265269e47_12946539_1000x0_resize_q90_h2_lanczos-c0WhlSd0a5RKD9bDJPQdbtIVYMvaFd.webp",
    alt: "Kitchen Design",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PDG_6037_38_39_40_41_Natural-1536x1025.jpg-2GEoxwmeuFbkwr370V7VfOcL2YDnkY.jpeg",
    alt: "Kitchen Design",
  },
  {
    src: "/images/interior-design.png",
    alt: "Interior Design",
  },
  {
    src: "/images/modern-bathroom.png",
    alt: "Modern Bathroom Design",
  },
]
