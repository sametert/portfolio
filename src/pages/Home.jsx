import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaPhone, FaReact, FaNodeJs, FaShopify, FaCss3Alt, FaHtml5, FaGitAlt, FaFigma, FaAws } from 'react-icons/fa'
import { MdEmail, MdLocationOn, MdWork, MdSchool } from 'react-icons/md'
import { HiArrowDown, HiExternalLink } from 'react-icons/hi'
import { SiNextdotjs, SiTailwindcss, SiJavascript, SiTypescript, SiMongodb, SiExpress, SiPostgresql, SiRedux, SiSass, SiVite } from 'react-icons/si'
import { useState, useEffect } from 'react'
import emailjs from 'emailjs-com'

// Import images
import fameImg from '../assets/fame.png'
import gionaraImg from '../assets/gionara.png'
import peraImg from '../assets/pera.png'

// Import project screenshots
import moviesAppImg from '../assets/movies-app.png'
import weatherAppImg from '../assets/weather-app.png'
import quizAppImg from '../assets/quizApp.png'

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)

  const jobTitles = [
    "Frontend Developer",
    "Shopify Developer", 
    "Entrepreneur",
    "E-commerce Specialist",
    "Digital Innovator",
    "Product Creator"
  ]

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init('01YwAsimHvBJBMaea')
  }, [])

  // Animated job title effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => 
        prevIndex === jobTitles.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // EmailJS configuration
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        reply_to: formData.email, // This ensures replies go to the sender
        user_email: formData.email,
        sender_email: formData.email,
        from: formData.email,
        message: formData.message,
        to_email: 'samederturk55@gmail.com',
        to_name: 'Samed Ertürk',
        reply_email: formData.email // Additional parameter for template
      }

      // Using EmailJS service with dynamic sender
      await emailjs.send(
        'service_zve7o1s',
        'template_47keb9m',
        templateParams,
        '01YwAsimHvBJBMaea'
      )

      // Alternative method if the above doesn't work:
      // Create a temporary form element and use sendForm
      // const form = document.createElement('form')
      // form.innerHTML = `
      //   <input type="text" name="from_name" value="${formData.name}">
      //   <input type="email" name="from_email" value="${formData.email}">
      //   <input type="text" name="message" value="${formData.message}">
      // `
      // await emailjs.sendForm('service_zve7o1s', 'template_47keb9m', form, '01YwAsimHvBJBMaea')

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Email send error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const experiences = [
    {
      title: "Shopify Developer & E-commerce Specialist",
      company: "Fame Rugs",
      period: "10/2024 – present",
      description: [
        "Customized Shopify themes and sections using Liquid, enhancing user experience and implementing modern UI/UX principles",
        "Designed collection pages with dynamic recommendations and integrated third-party tools like Yotpo for customer reviews",
        "Created and managed email marketing campaigns using Klaviyo, including holiday promotions and automated welcome flows",
        "Implemented SEO optimizations, campaign-specific popups, and tiered pricing strategies to increase conversions"
      ],
      type: "Full-time",
      icon: FaShopify,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      tools: ["Shopify", "Liquid", "Klaviyo", "Yotpo", "Canva", "SEO"]
    },
    {
      title: "Frontend Developer Intern",
      company: "makromusic",
      period: "03/2024 – 06/2024",
      description: [
        "Developed and enhanced features using Next.js, React.js, and Tailwind CSS technologies",
        "Fixed existing bugs, added new features, and improved existing functionality through code refactoring",
        "Collaborated effectively with Backend and Product teams, enhancing cross-functional communication skills",
        "Participated in code reviews and implemented feedback to maintain high code quality"
      ],
      type: "Internship",
      icon: FaReact,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      tools: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Git", "Agile", "Zustand"]
    },
    {
      title: "UI Developer Intern",
      company: "Jotform",
      period: "08/2023 – 09/2023",
      description: [
        "Developed rich user interfaces using React and modern CSS techniques",
        "Worked closely with expert mentors, receiving valuable feedback that accelerated professional growth",
        "Collaborated with product managers and UX designers to transform project requirements into intuitive interfaces",
        "Gained hands-on experience in a fast-paced, professional development environment"
      ],
      type: "Internship",
      icon: SiJavascript,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/20",
      tools: ["React", "JavaScript", "CSS3", "UI/UX", "Figma", "Version Control"]
    }
  ]

  const projects = [
    {
      title: "Movies App",
      description: "A Netflix-inspired movie website built with TMDB API, featuring trending movies, search functionality, and detailed movie information with trailers and cast details.",
      technologies: ["HTML", "CSS", "JavaScript", "TMDB API", "Fetch API", "Bootstrap"],
      link: "https://sametert.github.io/movies-App/",
      github: "https://github.com/sametert/movies-App",
      image: moviesAppImg
    },
    {
      title: "Quiz App",
      description: "Interactive quiz application built with TypeScript and React, featuring dynamic questions, score tracking, and modern UI design.",
      technologies: ["React", "TypeScript", "CSS", "JavaScript", "Create React App"],
      link: "#",
      github: "https://github.com/sametert/quizApp-Typescript",
      image: quizAppImg
    },
    {
      title: "Weather App",
      description: "Real-time weather application using OpenWeatherMap API, providing current weather information for cities worldwide with responsive design.",
      technologies: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API", "Fetch API"],
      link: "https://sametert.github.io/weather-app/",
      github: "https://github.com/sametert/weather-app",
      image: weatherAppImg
    }
  ]

  // Basit animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 px-6">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          {/* Animated gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-purple-500/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-accent/5 to-blue-500/5 rounded-full blur-3xl"></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        </div>

        <div className="container mx-auto relative z-10 max-w-6xl">
          <motion.div
            className="text-center mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-8"
              variants={fadeInUp}
            >
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Available for work
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-black mb-10 leading-tight"
              variants={fadeInUp}
            >
              <span className="block text-primary/80 mb-4">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-accent via-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                Samed Ertürk
              </span>
            </motion.h1>

            {/* Animated Job Title */}
            <motion.div
              className="mb-10"
              variants={fadeInUp}
            >
              <div className="relative h-16 md:h-20 flex items-center justify-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary absolute">
                  {jobTitles[currentTitleIndex].split('').map((char, index) => (
                    <motion.span
                      key={`${currentTitleIndex}-${index}`}
                      initial={{ 
                        opacity: 0, 
                        x: -50,
                        rotateY: -90,
                        filter: "blur(10px)"
                      }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        rotateY: 0,
                        filter: "blur(0px)"
                      }}
                      exit={{ 
                        opacity: 0, 
                        y: -100,
                        scale: 0.5,
                        rotateZ: 360,
                        filter: "blur(20px) brightness(2)"
                      }}
                      transition={{ 
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        type: "spring",
                        stiffness: 100
                      }}
                      className="inline-block"
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                  ))}
                </div>
                
                {/* Glow effect behind text */}
                <motion.div
                  key={`glow-${currentTitleIndex}`}
                  className="absolute inset-0 bg-gradient-to-r from-accent/20 via-blue-500/20 to-purple-500/20 rounded-xl blur-xl"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.5 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-accent to-blue-500 mx-auto mt-4 rounded-full"></div>
            </motion.div>

            {/* Enhanced Description */}
            <motion.p
              className="text-base md:text-lg text-secondary mb-12 max-w-4xl mx-auto leading-relaxed font-light"
              variants={fadeInUp}
            >
              I craft <span className="text-accent font-semibold">modern, responsive</span> web applications using 
              <span className="text-primary font-semibold"> React, Next.js</span>, and cutting-edge technologies, 
              specializing in <span className="text-accent font-semibold">e-commerce solutions</span> and 
              <span className="text-primary font-semibold"> user experience optimization</span>, while my 
              <span className="text-accent font-semibold"> entrepreneurial spirit</span> drives me to bring 
              <span className="text-primary font-semibold"> innovative concepts to life</span> and transform them into 
              <span className="text-accent font-semibold"> impactful digital solutions</span>.
            </motion.p>

            {/* Stats Cards */}
            <motion.div
              className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mb-12"
              variants={fadeInUp}
            >
              <div className="text-center p-4 bg-surface/30 border border-border/50 rounded-xl backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-bold text-accent">3+</div>
                <div className="text-sm text-secondary">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-surface/30 border border-border/50 rounded-xl backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-bold text-accent">10+</div>
                <div className="text-sm text-secondary">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-surface/30 border border-border/50 rounded-xl backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-bold text-accent">100%</div>
                <div className="text-sm text-secondary">Client Satisfaction</div>
              </div>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
              variants={fadeInUp}
            >
              <button 
                onClick={() => scrollToSection('contact')} 
                className="group relative px-8 py-4 bg-accent text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center">
                  <MdEmail className="mr-2" />
                  Get In Touch
                </span>
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="group px-8 py-4 bg-surface border-2 border-border text-primary font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:border-accent hover:bg-accent/5"
              >
                <span className="flex items-center justify-center">
                  <HiExternalLink className="mr-2" />
                  View My Work
                </span>
              </button>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div
              className="flex flex-wrap justify-center gap-6 mb-16"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-3 px-4 py-2 bg-surface/30 border border-border/50 rounded-lg backdrop-blur-sm">
                <MdEmail className="text-accent text-lg" />
                <span className="text-sm text-secondary">samederturk55@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 bg-surface/30 border border-border/50 rounded-lg backdrop-blur-sm">
                <FaPhone className="text-accent text-lg" />
                <span className="text-sm text-secondary">05079887217</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 bg-surface/30 border border-border/50 rounded-lg backdrop-blur-sm">
                <MdLocationOn className="text-accent text-lg" />
                <span className="text-sm text-secondary">Ankara, Turkey</span>
              </div>
            </motion.div>

            {/* Enhanced Social Links with more spacing */}
            <motion.div
              className="flex justify-center space-x-8 mb-16"
              variants={fadeInUp}
            >
              <a
                href="https://github.com/sametert"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-16 h-16 bg-surface border border-border rounded-xl flex items-center justify-center text-secondary transition-all duration-300 hover:scale-110 hover:text-accent hover:border-accent hover:shadow-lg hover:shadow-accent/25"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="https://linkedin.com/in/sametert"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-16 h-16 bg-surface border border-border rounded-xl flex items-center justify-center text-secondary transition-all duration-300 hover:scale-110 hover:text-accent hover:border-accent hover:shadow-lg hover:shadow-accent/25"
              >
                <FaLinkedin size={28} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-surface/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="bg-surface/20 rounded-2xl p-8 backdrop-blur-sm">
                  <p className="text-secondary leading-relaxed text-lg mb-6">
                    I'm a passionate <span className="text-accent font-semibold">frontend developer</span> and 
                    <span className="text-primary font-semibold"> digital innovator</span> with experience in modern web technologies. 
                    I bring both technical expertise and entrepreneurial mindset to every project, specializing in creating 
                    <span className="text-accent font-semibold"> innovative digital solutions</span> that drive business growth.
                  </p>
                  <p className="text-secondary leading-relaxed text-lg">
                    Driven by <span className="text-accent font-semibold">innovation</span>, I'm constantly exploring new opportunities to create value in the digital space. 
                    My vision is to build <span className="text-primary font-semibold">scalable digital solutions</span> that solve real-world problems and 
                    <span className="text-accent font-semibold"> empower businesses</span> to thrive in the digital economy through 
                    <span className="text-primary font-semibold"> cutting-edge technology</span> and strategic thinking.
                  </p>
                </div>
              </div>
            </div>

            {/* Animated Skills Section */}
            <div className="relative flex items-center justify-center mb-20">
              <div className="relative w-96 h-96 mx-auto bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-indigo-500/5 border border-blue-500/30 rounded-full backdrop-blur-sm">
                {/* Central Skills Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-accent via-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                      My Skills
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-accent to-blue-500 mx-auto rounded-full"></div>
                  </div>
                </div>

                {/* Floating Skill Icons */}
                {[
                  { icon: SiJavascript, color: '#F7DF1E', name: 'JavaScript', angle: 0 },
                  { icon: FaReact, color: '#61DAFB', name: 'React', angle: 30 },
                  { icon: SiNextdotjs, color: '#000000', name: 'Next.js', angle: 60 },
                  { icon: SiTypescript, color: '#3178C6', name: 'TypeScript', angle: 90 },
                  { icon: SiTailwindcss, color: '#06B6D4', name: 'Tailwind', angle: 120 },
                  { icon: FaNodeJs, color: '#339933', name: 'Node.js', angle: 150 },
                  { icon: SiMongodb, color: '#47A248', name: 'MongoDB', angle: 180 },
                  { icon: FaHtml5, color: '#E34F26', name: 'HTML5', angle: 210 },
                  { icon: FaCss3Alt, color: '#1572B6', name: 'CSS3', angle: 240 },
                  { icon: FaShopify, color: '#7AB55C', name: 'Shopify', angle: 270 },
                  { icon: SiRedux, color: '#764ABC', name: 'Liquid', angle: 300 },
                  { icon: SiSass, color: '#CC6699', name: 'Zustand', angle: 330 }
                ].map((skill, index) => {
                  const radius = 160
                  
                  return (
                    <motion.div
                      key={skill.name}
                      className="absolute w-16 h-16 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                      style={{
                        left: '50%',
                        top: '50%',
                      }}
                      initial={{ 
                        opacity: 0, 
                        scale: 0,
                        x: Math.cos((skill.angle * Math.PI) / 180) * radius - 32,
                        y: Math.sin((skill.angle * Math.PI) / 180) * radius - 32,
                      }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        x: [
                          Math.cos((skill.angle * Math.PI) / 180) * radius - 32,
                          Math.cos(((skill.angle + 360) * Math.PI) / 180) * radius - 32,
                        ],
                        y: [
                          Math.sin((skill.angle * Math.PI) / 180) * radius - 32,
                          Math.sin(((skill.angle + 360) * Math.PI) / 180) * radius - 32,
                        ],
                        rotate: [0, 360]
                      }}
                      transition={{
                        opacity: { delay: index * 0.1, duration: 0.5 },
                        scale: { delay: index * 0.1, duration: 0.5 },
                        x: {
                          duration: 12 + index * 1,
                          repeat: Infinity,
                          ease: "linear"
                        },
                        y: {
                          duration: 12 + index * 1,
                          repeat: Infinity,
                          ease: "linear"
                        },
                        rotate: {
                          duration: 5,
                          repeat: Infinity,
                          ease: "linear"
                        }
                      }}
                      whileHover={{ 
                        scale: 1.3, 
                        backgroundColor: skill.color + '20',
                        borderColor: skill.color + '60',
                        boxShadow: `0 0 20px ${skill.color}40`
                      }}
                    >
                      <skill.icon 
                        size={28} 
                        style={{ color: skill.color }}
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                      
                      {/* Tooltip */}
                      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                        <div className="bg-background/90 backdrop-blur-sm text-primary text-xs font-medium px-3 py-2 rounded-lg border border-border/50 whitespace-nowrap shadow-lg">
                          {skill.name}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}

                {/* Background Effects */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/5 via-blue-500/5 to-purple-500/5 animate-pulse"></div>
                <div className="absolute inset-8 rounded-full border border-accent/20 animate-spin" style={{ animationDuration: '15s' }}></div>
                <div className="absolute inset-16 rounded-full border border-blue-500/20 animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Education section removed */}
            </div>

            {/* Experience */}
            <div className="mt-12">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <MdWork className="text-accent text-2xl mr-3" />
                  <h3 className="text-2xl font-semibold">Professional Experience</h3>
                </div>
                <p className="text-secondary max-w-2xl mx-auto">
                  My journey in web development, from internships to professional roles,
                  showcasing growth and hands-on experience in modern technologies.
                </p>
              </div>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="card group hover:border-accent/30 transition-all duration-300 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-indigo-500/5 border border-blue-500/30 shadow-lg hover:shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Icon Column */}
                      <div className="md:w-16">
                        <div className={`w-16 h-16 rounded-xl ${exp.bgColor} ${exp.borderColor} border flex items-center justify-center shadow-lg`}>
                          <exp.icon className={`text-2xl ${exp.color}`} />
                        </div>
                      </div>

                      {/* Content Column */}
                      <div className="flex-1">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <div>
                            <h4 className="font-semibold text-primary text-lg mb-1">{exp.title}</h4>
                            <div className="flex items-center gap-3">
                              <span className="text-accent font-medium">{exp.company}</span>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${exp.bgColor} ${exp.color}`}>
                                {exp.type}
                              </span>
                            </div>
                          </div>
                          <span className="text-secondary text-sm mt-2 md:mt-0">{exp.period}</span>
                        </div>

                        {/* Description */}
                        {Array.isArray(exp.description) ? (
                          <ul className="space-y-2 mb-4">
                            {exp.description.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent/80 mt-2 mr-3 flex-shrink-0"></div>
                                <p className="text-secondary leading-relaxed">{item}</p>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-secondary leading-relaxed mb-4">{exp.description}</p>
                        )}

                        {/* Tools & Technologies */}
                        {exp.tools && (
                          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-blue-500/30">
                            {exp.tools.map((tool, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border border-blue-500/30"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Featured E-commerce Projects */}
            <div className="mt-16">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <FaShopify className="text-accent text-3xl mr-3" />
                  <h3 className="text-3xl md:text-4xl font-bold">Live E-commerce Projects</h3>
                </div>
                <p className="text-secondary max-w-2xl mx-auto">
                  Currently developed and optimized e-commerce platforms at Fame Rugs, 
                  featuring modern design, SEO optimization, and enhanced user experience.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Fame Rugs",
                    url: "www.famerugs.com",
                    fullUrl: "https://www.famerugs.com",
                    description: "Premium rug collection with optimized performance and SEO",
                    features: ["SEO Optimization", "Performance Enhancement", "User Experience", "Mobile Responsive"],
                    gradient: "from-orange-500 to-red-500",
                    image: fameImg
                  },
                  {
                    name: "Gionara",
                    url: "www.gionara.com", 
                    fullUrl: "https://www.gionara.com",
                    description: "Elegant home decor platform with modern design",
                    features: ["Modern Design", "E-commerce Integration", "Product Showcase", "Brand Identity"],
                    gradient: "from-purple-500 to-pink-500",
                    image: gionaraImg
                  },
                  {
                    name: "Perahali",
                    url: "www.perahali.com",
                    fullUrl: "https://www.perahali.com", 
                    description: "Sophisticated carpet collection with enhanced UX",
                    features: ["Luxury Design", "Catalog Management", "Search Optimization", "Customer Journey"],
                    gradient: "from-blue-500 to-cyan-500",
                    image: peraImg
                  }
                ].map((site, index) => (
                  <motion.div
                    key={site.name}
                    className="group relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    {/* Main Card */}
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-indigo-500/5 border border-blue-500/30 backdrop-blur-sm hover:border-accent/50 transition-all duration-500 group-hover:scale-105 h-[600px] flex flex-col shadow-xl hover:shadow-2xl hover:shadow-blue-500/20">
                      {/* Image Header */}
                      <div className="relative h-72 overflow-hidden">
                        {/* Frame Design */}
                        <div className="absolute inset-4 border-2 border-blue-500/40 rounded-xl z-10"></div>
                        
                        {/* Background Image */}
                        <div 
                          className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500 p-4"
                        >
                          <div className="w-full h-full rounded-xl overflow-hidden relative">
                            <img 
                              src={site.image} 
                              alt={site.name}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80"></div>
                          </div>
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-end">
                          <div className="bg-black/70 backdrop-blur-sm p-4 rounded-xl border border-blue-500/40">
                            <h4 className="text-white font-bold text-2xl mb-2">{site.name}</h4>
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                              <span className="text-white/90 font-mono text-sm">{site.url}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        {/* Description */}
                        <p className="text-secondary text-sm mb-4 leading-relaxed flex-grow">
                          {site.description}
                        </p>

                        {/* Features */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {site.features.map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              className="px-2 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>

                        {/* Visit Button */}
                        <motion.a
                          href={site.fullUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-full py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/40 rounded-xl text-blue-400 font-medium hover:bg-gradient-to-r hover:from-accent hover:to-blue-500 hover:text-white transition-all duration-300 mt-auto"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <HiExternalLink className="mr-2" />
                          Visit Website
                        </motion.a>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="absolute -top-3 -right-3 z-10">
                      <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        LIVE
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats Section */}
              <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent mb-1">3</div>
                    <div className="text-sm text-secondary">Live Websites</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent mb-1">100%</div>
                    <div className="text-sm text-secondary">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent mb-1">SEO</div>
                    <div className="text-sm text-secondary">Optimized</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                My <span className="gradient-text">Projects</span>
              </h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-secondary leading-relaxed text-lg">
                  Here are some of the projects I've worked on, showcasing my skills in frontend development, 
                  e-commerce optimization, and modern web technologies.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="card group hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-indigo-500/5 border border-blue-500/30 shadow-lg hover:shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
                    <div className="flex space-x-2">
                      {project.link !== "#" && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary hover:text-accent transition-colors"
                        >
                          <HiExternalLink size={18} />
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary hover:text-accent transition-colors"
                      >
                        <FaGithub size={18} />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-secondary mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80 transition-colors text-sm font-medium flex items-center"
                      >
                        Live Demo →
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-accent transition-colors text-sm font-medium flex items-center"
                    >
                      View Code →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-surface/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Get In <span className="gradient-text">Touch</span>
              </h2>
              <div className="max-w-2xl mx-auto">
                <p className="text-secondary leading-relaxed text-lg">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about technology and development.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="card bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-indigo-500/5 border border-blue-500/30 shadow-lg">
                  <div className="flex items-center space-x-4">
                    <MdEmail className="text-accent text-2xl" />
                    <div>
                      <h3 className="font-semibold text-primary">Email</h3>
                      <p className="text-secondary">samederturk55@gmail.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="card bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-indigo-500/5 border border-blue-500/30 shadow-lg">
                  <div className="flex items-center space-x-4">
                    <FaPhone className="text-accent text-2xl" />
                    <div>
                      <h3 className="font-semibold text-primary">Phone</h3>
                      <p className="text-secondary">05079887217</p>
                    </div>
                  </div>
                </div>
                
                <div className="card bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-indigo-500/5 border border-blue-500/30 shadow-lg">
                  <div className="flex items-center space-x-4">
                    <MdLocationOn className="text-accent text-2xl" />
                    <div>
                      <h3 className="font-semibold text-primary">Location</h3>
                      <p className="text-secondary">Ankara, Turkey</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="card bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-indigo-500/5 border border-blue-500/30 shadow-lg">
                  <h3 className="font-semibold text-primary mb-4">Connect with me</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/sametert"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full flex items-center justify-center text-blue-400 hover:text-accent hover:border-accent transition-all duration-300"
                    >
                      <FaGithub size={18} />
                    </a>
                    <a
                      href="https://linkedin.com/in/sametert"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full flex items-center justify-center text-blue-400 hover:text-accent hover:border-accent transition-all duration-300"
                    >
                      <FaLinkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="card bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-indigo-500/5 border border-blue-500/30 shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-background border border-blue-500/30 rounded-lg focus:outline-none focus:border-accent transition-colors text-primary"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-background border border-blue-500/30 rounded-lg focus:outline-none focus:border-accent transition-colors text-primary"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1">Message</label>
                    <textarea
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-background border border-blue-500/30 rounded-lg focus:outline-none focus:border-accent transition-colors text-primary resize-none"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>
                  
                  <button type="submit" className="btn btn-primary w-full py-2" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="text-center text-green-500 mt-2 text-sm">
                      Message sent successfully!
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="text-center text-red-500 mt-2 text-sm">
                      Failed to send message. Please try again later.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 