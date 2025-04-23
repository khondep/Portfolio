"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const workExperience = [
  {
    title: "Full Stack Developer",
    company: "Ekatva Groups",
    location: "Mumbai, India",
    date: "January 2024 – July 2024",
    responsibilities: [
      "Developed responsive and dynamic web interfaces using HTML, CSS, and JavaScript frameworks",
      "Collaborated in Agile sprint planning and delivered web solutions aligned with client specifications",
      "Improved UI/UX performance and code modularity to enhance user experience",
    ],
    icon: "💻",
  },
  {
    title: "Intern",
    company: "Aasua Engineering Solutions Pvt. Ltd.",
    location: "Nashik, India",
    date: "June 2023 – December 2023",
    responsibilities: [
      "Designed and developed user-friendly web applications, improving user experience by 25%",
      "Implemented responsive layouts ensuring seamless compatibility across multiple devices",
      "Reduced load times by 15% through performance optimizations",
    ],
    icon: "🚀",
  },
  {
    title: "Intern",
    company: "VidyarthiMitra Org.",
    location: "Pune, India",
    date: "March 2022 – June 2022",
    responsibilities: [
      "Automated data processing tasks using Python, reducing manual workload by 40%",
      "Developed custom automation tools, improving operational efficiency by 30%",
      "Enhanced database performance, increasing data retrieval speeds by 20%",
    ],
    icon: "🔧",
  },
]

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">Professional Journey</h1>
        <div className="space-y-8 sm:space-y-12">
          {workExperience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                      {job.icon}
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 sm:gap-2 mb-1 sm:mb-2">
                        <h3 className="text-lg sm:text-xl font-semibold text-primary">{job.title}</h3>
                        <span className="text-xs sm:text-sm text-muted-foreground">{job.date}</span>
                      </div>
                      <p className="text-base sm:text-lg text-muted-foreground mb-1 sm:mb-2">{job.company}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{job.location}</p>
                      <ul className="list-disc list-inside text-xs sm:text-sm text-gray-300 space-y-1 sm:space-y-2">
                        {job.responsibilities.map((responsibility, idx) => (
                          <li key={idx}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {index < workExperience.length - 1 && (
                <div className="h-8 sm:h-12 w-0.5 bg-gray-600 mx-auto my-1 sm:my-2" />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
