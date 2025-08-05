"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

export default function EnhancedNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isMenuOpen])

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  // Animation variants
  const navContainerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  }

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4 }
    },
    scroll: {
      scale: 0.95,
      transition: { duration: 0.4 }
    }
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.4,
        ease: [0.65, 0, 0.35, 1]
      }
    }
  }

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    },
    hover: {
      x: 5,
      transition: { duration: 0.2 }
    },
    exit: {
      opacity: 0,
      x: -10,
      transition: { duration: 0.2 }
    }
  }

  const dropdownVariants = {
    hidden: { opacity: 0, y: -5, pointerEvents: "none" as const },
    visible: {
      opacity: 1,
      y: 0,
      pointerEvents: "auto" as const,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        delayChildren: 0.05
      }
    },
    exit: {
      opacity: 0,
      y: -5,
      pointerEvents: "none" as const,
      transition: { duration: 0.2 }
    }
  }

  const dropdownItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    },
    hover: {
      x: 5,
      transition: { duration: 0.2 }
    }
  }

  // Add subtle decoration elements for kitchen theme
  const Decoration = () => (
    <motion.div 
      className="absolute left-0 right-0 mx-auto z-0 bottom-0 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent"
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ 
        scaleX: 1, 
        opacity: isScrolled ? 0 : 0.6 
      }}
      transition={{ duration: 0.8 }}
    />
  )

  const isFrench = pathname.startsWith("/fr")

  // Labels dynamiques selon la langue
  const navLabels = {
    home: isFrench ? "ACCUEIL" : "HOME",
    about: isFrench ? "À PROPOS" : "ABOUT",
    services: isFrench ? "SERVICES" : "SERVICES",
    gallery: isFrench ? "GALERIE" : "GALLERY",
    careers: isFrench ? "CARRIÈRES" : "CAREERS",
    quote: isFrench ? "Obtenir une soumission gratuite" : "Get A Free Quote",
    // Sous-menu services
    kitchen: isFrench ? "Rénovation de cuisine" : "Kitchen Remodeling",
    countertops: isFrench ? "Comptoirs" : "Countertops",
    bathroom: isFrench ? "Rénovation de salle de bain" : "Bathroom Renovation",
    flooring: isFrench ? "Solutions de plancher" : "Flooring Solutions",
  }

  // FIXED: Services menu items now use language-specific paths
  const servicesItems = [
    { 
      name: navLabels.kitchen, 
      path: isFrench ? "/fr/services/kitchen-remodeling" : "/services/kitchen-remodeling" 
    },
    { 
      name: navLabels.countertops, 
      path: isFrench ? "/fr/services/countertops-cabinets" : "/services/countertops-cabinets" 
    },
    { 
      name: navLabels.bathroom, 
      path: isFrench ? "/fr/services/bathroom-renovation" : "/services/bathroom-renovation" 
    },
    { 
      name: navLabels.flooring, 
      path: isFrench ? "/fr/services/flooring-solutions" : "/services/flooring-solutions" 
    }
  ]

  // Calculate header height based on scroll state
  const headerHeight = isScrolled ? "h-16" : "h-20";

  // FIXED: Enhanced list of translated pages including service pages
  const frPages = ["about", "services", "gallery", "careers", "contact"]
  const servicePages = ["kitchen-remodeling", "countertops-cabinets", "bathroom-renovation", "flooring-solutions"]

  // FIXED: Enhanced French link generation
  let frLink = "/fr"
  if (pathname === "/") {
    frLink = "/fr"
  } else {
    const match = pathname.match(/^\/(\w+)/)
    if (match && frPages.includes(match[1])) {
      frLink = `/fr/${match[1]}`
    } else {
      // Handle service pages
      const serviceMatch = pathname.match(/^\/services\/(.+)/)
      if (serviceMatch && servicePages.includes(serviceMatch[1])) {
        frLink = `/fr/services/${serviceMatch[1]}`
      }
    }
  }

  // FIXED: Enhanced English link generation
  let enLink = "/"
  if (pathname.startsWith("/fr")) {
    if (pathname === "/fr") {
      enLink = "/"
    } else {
      const match = pathname.match(/^\/fr\/(\w+)/)
      if (match && frPages.includes(match[1])) {
        enLink = `/${match[1]}`
      } else {
        // Handle French service pages
        const serviceMatch = pathname.match(/^\/fr\/services\/(.+)/)
        if (serviceMatch && servicePages.includes(serviceMatch[1])) {
          enLink = `/services/${serviceMatch[1]}`
        }
      }
    }
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled 
          ? "bg-white bg-opacity-95 backdrop-blur-sm shadow-md py-2" 
          : "bg-black bg-opacity-40 backdrop-blur-sm py-4"
      } flex items-center`}
      initial="hidden"
      animate="visible"
      variants={navContainerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo Area - Modified for larger logo without increasing header size */}
          <motion.div
            variants={logoVariants}
            animate={isScrolled ? "scroll" : "visible"}
            className="pr-0 md:pr-0 flex-shrink-0 -my-2 relative" // Negative margin to allow overflow
            style={{ 
              zIndex: 10 // Ensure logo is above other elements
            }}
          >
            <Link href={isFrench ? "/fr" : "/"} className="flex items-center">
              <div className="relative">
                <AnimatePresence mode="wait">
                  {isScrolled ? (
                    <motion.div
                      key="scrolled"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="h-12 w-auto"
                    >
                      <Image
                        src="/images/cmr-logo-black.png"
                        alt="Group C.M.R"
                        width={120}
                        height={48}
                        className="h-12 w-auto object-contain"
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="normal"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="h-16 w-auto"
                    >
                      <Image
                        src="/images/cmr-logo-white.png"
                        alt="Group C.M.R"
                        width={140}
                        height={64}
                        className="h-16 w-auto object-contain"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <motion.div variants={navItemVariants}>
              <Link
                href={isFrench ? "/fr" : "/"}
                className={`font-medium transition-colors ${
                  isScrolled ? "text-black hover:text-gray-700" : "text-white hover:text-gray-200"
                }`}
              >
                {navLabels.home}
              </Link>
            </motion.div>
            <motion.div variants={navItemVariants}>
              <Link
                href={isFrench ? "/fr/about" : "/about"}
                className={`font-medium transition-colors ${
                  isScrolled ? "text-black hover:text-gray-700" : "text-white hover:text-gray-200"
                }`}
              >
                {navLabels.about}
              </Link>
            </motion.div>
            
            {/* Services Dropdown */}
            <motion.div 
              className="relative" 
              variants={navItemVariants}
              ref={dropdownRef}
            >
              <motion.button
                className={`font-medium transition-colors flex items-center ${
                  isScrolled ? "text-black hover:text-gray-700" : "text-white hover:text-gray-200"
                }`}
                onClick={() => toggleDropdown("SERVICES")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {navLabels.services}
                <motion.div
                  animate={{ rotate: activeDropdown === "SERVICES" ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="ml-1 w-4 h-4" />
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {activeDropdown === "SERVICES" && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {servicesItems.map((item, index) => (
                      <motion.div key={index} variants={dropdownItemVariants}>
                        <Link
                          href={item.path}
                          className="block px-6 py-4 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors font-medium border-b border-gray-50 last:border-0"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <motion.div
                            whileHover="hover"
                            variants={dropdownItemVariants}
                            className="flex items-center justify-between"
                          >
                            <span>{item.name}</span>
                            <ChevronRight className="w-4 h-4 opacity-50" />
                          </motion.div>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div variants={navItemVariants}>
              <Link
                href={isFrench ? "/fr/gallery" : "/gallery"}
                className={`font-medium transition-colors ${
                  isScrolled ? "text-black hover:text-gray-700" : "text-white hover:text-gray-200"
                }`}
              >
                {navLabels.gallery}
              </Link>
            </motion.div>
            <motion.div variants={navItemVariants}>
              <Link
                href={isFrench ? "/fr/careers" : "/careers"}
                className={`font-medium transition-colors ${
                  isScrolled ? "text-black hover:text-gray-700" : "text-white hover:text-gray-200"
                }`}
              >
                {navLabels.careers}
              </Link>
            </motion.div>

            {/* Quote Button */}
            <motion.div variants={navItemVariants}>
              <Link href={isFrench ? "/fr/get-a-quote" : "/get-a-quote"}>
                <Button 
                  className={`relative overflow-hidden group ${
                    isScrolled
                      ? "bg-black text-white hover:bg-gray-800"
                      : "bg-white text-black hover:bg-gray-50"
                  }`}
                >
                  <motion.span
                    whileHover={{ y: -30 }}
                    className="block transition-transform duration-300"
                  >
                    {navLabels.quote}
                  </motion.span>
                  <motion.span
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ y: 30 }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {navLabels.quote}
                  </motion.span>
                </Button>
              </Link>
            </motion.div>

            {/* Language Switcher */}
            <motion.div variants={navItemVariants} className="pl-2 flex items-center">
              <Link
                href={frLink}
                className={`font-medium text-xs px-2 py-1 rounded transition-colors ${isScrolled ? "text-black hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
              >
                FR
              </Link>
              <span className={`mx-1 ${isScrolled ? "text-gray-400" : "text-white/60"}`}>|</span>
              <Link
                href={enLink}
                className={`font-medium text-xs px-2 py-1 rounded transition-colors ${isScrolled ? "text-black hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
              >
                EN
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden z-20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            variants={navItemVariants}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className={`w-6 h-6 ${isScrolled ? "text-black" : "text-white"}`} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className={`w-6 h-6 ${isScrolled ? "text-black" : "text-white"}`} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="md:hidden absolute top-full left-0 right-0 bg-white bg-opacity-95 backdrop-blur-md shadow-xl overflow-hidden z-40"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex flex-col p-6 max-h-[80vh] overflow-y-auto">
              {[
                { name: navLabels.home, path: isFrench ? "/fr" : "/" },
                { name: navLabels.about, path: isFrench ? "/fr/about" : "/about" },
                { name: navLabels.gallery, path: isFrench ? "/fr/gallery" : "/gallery" },
                { name: navLabels.careers, path: isFrench ? "/fr/careers" : "/careers" },
              ].map((item, i) => (
                <motion.div
                  key={item.name}
                  variants={menuItemVariants}
                  whileHover="hover"
                  className="border-b border-gray-100 last:border-0"
                >
                  <Link
                    href={item.path}
                    className="font-medium text-black py-4 flex items-center justify-between"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{item.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </Link>
                </motion.div>
              ))}

              {/* Services with expandable submenu */}
              <motion.div
                variants={menuItemVariants}
                className="border-b border-gray-100"
              >
                <motion.button
                  className="font-medium text-black py-4 w-full flex items-center justify-between"
                  onClick={() => toggleDropdown("MOBILE_SERVICES")}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{navLabels.services}</span>
                  <motion.div
                    animate={{ rotate: activeDropdown === "MOBILE_SERVICES" ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4 opacity-50" />
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {activeDropdown === "MOBILE_SERVICES" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pb-2 space-y-1">
                        {servicesItems.map((item, index) => (
                          <Link
                            key={index}
                            href={item.path}
                            className="block font-medium text-gray-600 hover:text-black transition-colors py-2"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Language Switcher for Mobile */}
              <motion.div variants={menuItemVariants} className="py-4 flex items-center justify-center space-x-4">
                <Link
                  href={frLink}
                  className="font-medium text-black px-4 py-2 border border-gray-300 rounded transition-colors hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FR
                </Link>
                <Link
                  href={enLink}
                  className="font-medium text-black px-4 py-2 border border-gray-300 rounded transition-colors hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  EN
                </Link>
              </motion.div>

              {/* Quote Button for Mobile */}
              <motion.div variants={menuItemVariants} className="pt-4">
                <Link href={isFrench ? "/fr/get-a-quote" : "/get-a-quote"} onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-black text-white hover:bg-gray-800">
                    {navLabels.quote}
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <Decoration />
    </motion.header>
  )
}