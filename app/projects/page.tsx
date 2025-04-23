"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"

const projects = [
  {
    title: "Husky Sniffs",
    date: "2025",
    description: [
      "Designed and developed an AI-powered lost and found mobile platform using SwiftUI, enabling over 100 users to report, search, and match items based on title, category, location, and image similarity with 85% accuracy in test cases.",
      "Integrated Core Data for offline support and implemented a real-time chat system with avatar previews, timestamps, and unread message filtering, reducing resolution time by 60% between item owners and finders.",
      "Led user research through surveys and persona creation, uncovering key usability pain points and informing UI decisions that improved task completion rates by 40% during A/B testing cycles.",
      "Applied accessibility and design system standards with dynamic text support, screen reader compatibility, and Northeastern-themed branding, ensuring inclusive and consistent user experience across devices.",
    ],
    image: "/images/husky-sniffs-logo.png",
    tags: [
      "AI Matching",
      "UX Design",
      "SwiftUI",
      "Core Data",
      "Mobile App",
      "Lost & Found",
      "User Research",
      "Chat System",
      "Prototyping",
      "Accessibility",
      "Design Systems",
      "iOS Development",
      "Data Persistence",
      "Campus App",
      "Usability Testing",
      "Human-Centered Design",
      "Information Architecture",
    ],
  },
  {
    title: "Husky Match",
    date: "2024",
    description: [
      "Designed an AI-driven mentorship platform to connect Northeastern students and alumni for personalized career guidance, enhancing accessibility and engagement through intelligent matchmaking.",
      "Focused on user experience, crafting intuitive swipe-based interactions, network visualization, and AI-powered mentor matching to streamline the connection process.",
      "Conducted user research, developed detailed personas, and optimized engagement strategies based on survey insights, ensuring the platform met diverse student and alumni needs.",
      "Collaborated with cross-functional teams to refine the UI/UX, improve information architecture, and enhance usability, driving seamless navigation and interaction.",
      "Integrated accessibility considerations and iterative usability testing to ensure an inclusive and frictionless experience for all users.",
    ],
    image: "/images/husky-match-logo.png",
    tags: ["UX Design", "AI", "User Research", "Prototyping", "Mentorship Platform"],
  },
  {
    title: "Comprehensive Insurance Management Ecosystem",
    date: "2024",
    description: [
      "Developed an integrated solution to enhance efficiency in the insurance industry by centralizing data management, streamlining workflows, and enabling advanced visualization",
      "Employee Directory Management: Tracks workflows, hierarchies, and activities",
      "SQL-Driven Data Management: Efficiently stores and processes policies, claims, and customer data",
      "Insurance Processing System: Scalable solution for policy creation and claims handling",
      "Visualization Tools: Depicts stakeholder relationships for informed decision-making",
      "Trustify App: A user-friendly interface for policy exploration and claims processing",
    ],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-02-20%2019.35.19%20-%20A%20professional%20logo%20for%20'Comprehensive%20Insurance%20Management%20Ecosystem'.%20The%20design%20should%20feature%20a%20modern%20shield%20symbolizing%20protection%20and%20security,-B1b2vZpqDSE9KfkTuk8m4GZ75vRXHg.webp",
    tags: ["SQL", "React.js", "Node.js", "Express.js", "Middleware Integration"],
  },
  {
    title: "Health360",
    date: "Nov 2024 – Dec 2024",
    description: [
      "Built a Progressive Web Application (PWA) for healthcare and insurance management",
      "Integrated WHO Disease Outbreak Tracker using RESTful APIs with interactive maps",
      "Developed a scalable backend using Node.js, Express, and MongoDB, with a React-based UI",
      "Implemented offline access, multi-language support, and secure payment processing",
    ],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Health%20360.jpg-dv2gnvMLgLMXYPcccoGlm8Itu4EbrM.jpeg",
    tags: ["React", "Node.js", "MongoDB", "PWA"],
  },
  {
    title: "Traffic Sign Classification Using CNN",
    date: "Nov 2022 – May 2023",
    description: [
      "Collected datasets, trained models, and conducted rigorous project testing",
      "Played a crucial role in all phases of development, ensuring project success",
      "Achieved an impressive 98% accuracy through strategic model enhancements",
    ],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-r0Z5eMV7hLANH6j9ItRulBZQnbt7MP.png",
    tags: ["Python", "TensorFlow", "CNN", "Computer Vision"],
  },
  {
    title: "Netflix Home Page Clone",
    date: "",
    description: [
      "Utilized HTML, CSS, and JavaScript to meticulously construct a high-fidelity reproduction of the Netflix homepage",
      "Replicated the original site's dynamic layout, responsive design, and interactive features",
      "Illustrated expertise in UI/UX design, frontend frameworks, and web responsiveness",
    ],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QXa0Io34xvlW96w1ajP10yXpfLyADj.png",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
  {
    title: "Phone Rating System",
    date: "November 2021 – March 2022",
    description: [
      "Employed the K-means algorithm to establish a phone rating system, utilizing Python for algorithm implementation",
      "Demonstrated adeptness in Python programming, machine learning techniques, and data analysis",
      "Applied expertise to implement an algorithm that intelligently categorizes and ranks phones",
    ],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gOaCWfGLRy2cAFeKLx6qWqmhPjXzEf.png",
    tags: ["Python", "Machine Learning", "K-means", "Data Analysis"],
  },
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="bg-gray-900/50 border-gray-800 overflow-hidden hover:border-gray-600 transition-colors h-full flex flex-col">
                <div className="relative h-32 sm:h-40 w-full">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <CardHeader className="space-y-1 p-3 sm:p-4 pb-0">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">{project.title}</h3>
                  </div>
                  {project.date && <p className="text-xs sm:text-sm text-gray-400">{project.date}</p>}
                </CardHeader>
                <CardContent className="p-3 sm:p-4 pt-2 flex-grow flex flex-col">
                  <ul className="list-disc list-inside text-xs sm:text-sm text-gray-300 space-y-1 sm:space-y-2 mb-auto">
                    {project.description.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-800 text-gray-300 rounded-md text-[10px] sm:text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
