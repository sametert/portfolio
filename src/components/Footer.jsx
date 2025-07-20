import { FaGithub, FaLinkedin, FaReact, FaHeart } from 'react-icons/fa'
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface/50 border-t border-border/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-accent/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-l from-purple-500/5 to-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FaReact className="text-accent text-2xl" />
              <h3 className="text-xl font-bold bg-gradient-to-r from-accent via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Samed Ertürk
              </h3>
            </div>
            <p className="text-secondary text-sm leading-relaxed max-w-md">
              Frontend Developer & E-commerce Specialist passionate about creating modern, 
              responsive web applications with cutting-edge technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-primary font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-secondary hover:text-accent transition-colors text-sm">
                Home
              </a>
              <a href="#about" className="block text-secondary hover:text-accent transition-colors text-sm">
                About
              </a>
              <a href="#projects" className="block text-secondary hover:text-accent transition-colors text-sm">
                Projects
              </a>
              <a href="#contact" className="block text-secondary hover:text-accent transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-primary font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MdEmail className="text-accent" />
                <span className="text-secondary text-sm">samederturk55@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MdPhone className="text-accent" />
                <span className="text-secondary text-sm">05079887217</span>
              </div>
              <div className="flex items-center space-x-3">
                <MdLocationOn className="text-accent" />
                <span className="text-secondary text-sm">Ankara, Turkey</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="flex items-center space-x-2 text-secondary text-sm">
            <span>© {currentYear} Samed Ertürk. All rights reserved.</span>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            <motion.a
              href="https://github.com/sametert"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-surface border border-border rounded-lg flex items-center justify-center text-secondary hover:text-accent hover:border-accent transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub size={18} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/sametert"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-surface border border-border rounded-lg flex items-center justify-center text-secondary hover:text-accent hover:border-accent transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin size={18} />
            </motion.a>
            <motion.a
              href="mailto:samederturk55@gmail.com"
              className="w-10 h-10 bg-surface border border-border rounded-lg flex items-center justify-center text-secondary hover:text-accent hover:border-accent transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <MdEmail size={18} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 