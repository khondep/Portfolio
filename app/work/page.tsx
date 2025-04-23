"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function WorkPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-white mb-8">Work Experience</h1>
        <div className="space-y-6">
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white">Full Stack Developer | Ekatva Groups</h3>
              <p className="text-gray-400 mt-1">Mumbai, India • January 2024 – July 2024</p>
              <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                <li>Developed responsive and dynamic web interfaces using HTML, CSS, and JavaScript frameworks</li>
                <li>
                  Collaborated in Agile sprint planning and delivered web solutions aligned with client specifications
                </li>
                <li>Improved UI/UX performance and code modularity to enhance user experience</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white">Intern | Aasua Engineering Solutions Pvt. Ltd.</h3>
              <p className="text-gray-400 mt-1">Nashik, India • June 2023 – December 2023</p>
              <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                <li>Designed and developed user-friendly web applications, improving user experience by 25%</li>
                <li>Implemented responsive layouts ensuring seamless compatibility across multiple devices</li>
                <li>Reduced load times by 15% through performance optimizations</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white">Intern | VidyarthiMitra Org.</h3>
              <p className="text-gray-400 mt-1">Pune, India • March 2022 – June 2022</p>
              <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                <li>Automated data processing tasks using Python, reducing manual workload by 40%</li>
                <li>Developed custom automation tools, improving operational efficiency by 30%</li>
                <li>Enhanced database performance, increasing data retrieval speeds by 20%</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  )
}
