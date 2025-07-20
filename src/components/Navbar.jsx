import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiMenu, HiX, HiDownload } from 'react-icons/hi'
import { MdEmail } from 'react-icons/md'
import { FaSun, FaMoon } from 'react-icons/fa'

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [theme, setTheme] = useState('dark')

  // Handle theme toggle
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id)
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-surface/40 backdrop-blur-xl border-b border-border/50 shadow-2xl shadow-black/10' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <motion.button 
            onClick={() => scrollToSection('home')}
            className="group relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl font-black bg-gradient-to-r from-accent via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Samed
            </span>
            <span className="text-2xl font-black text-primary ml-1">
              Ertürk
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-blue-500 group-hover:w-full transition-all duration-300"></div>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-6 py-3 text-sm font-semibold transition-all duration-300 rounded-xl ${
                  activeSection === item.id
                    ? 'text-accent bg-accent/10 border border-accent/20'
                    : 'text-secondary hover:text-primary hover:bg-surface/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent/5 to-blue-500/5 rounded-xl"
                    layoutId="activeSection"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
            
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="ml-4 px-4 py-3 bg-surface/30 border border-border/50 rounded-xl text-secondary hover:text-accent hover:border-accent transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {theme === 'dark' ? <FaSun size={16} /> : <FaMoon size={16} />}
            </motion.button>
            
            {/* CTA Button */}
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="ml-4 px-6 py-3 bg-gradient-to-r from-accent to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <MdEmail size={16} />
              <span>Let's Work</span>
            </motion.button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <motion.button
            className="md:hidden relative p-3 rounded-xl bg-surface/50 border border-border text-secondary hover:text-accent hover:border-accent transition-all duration-300"
            onClick={toggleMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </motion.div>
          </motion.button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <motion.div
          className={`md:hidden overflow-hidden ${isOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isOpen ? 1 : 0, 
            height: isOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="px-4 pt-4 pb-6 bg-surface/30 backdrop-blur-xl border border-border/50 rounded-2xl mt-4 mx-2">
            <div className="space-y-3">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-accent bg-accent/10 border border-accent/20'
                      : 'text-secondary hover:bg-background hover:text-primary'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 4 }}
                >
                  {item.name}
                </motion.button>
              ))}
              
              {/* Mobile Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="w-full text-left px-4 py-3 rounded-xl font-medium text-secondary hover:bg-background hover:text-primary transition-all duration-300 flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ x: 4 }}
              >
                {theme === 'dark' ? <FaSun className="mr-2" /> : <FaMoon className="mr-2" />}
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </motion.button>
              
              {/* Mobile CTA */}
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-accent to-blue-500 text-white font-semibold rounded-xl flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MdEmail size={16} />
                <span>Get In Touch</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar 