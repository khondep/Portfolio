"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const skills = {
  programmingLanguages: [
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
  ],
  webTechnologies: [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
  ],
  databases: [
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  ],
  cloudPlatforms: [
    {
      name: "AWS",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Xl4XycpuIIwexOgP8wWCNz2wmVZh4c.png",
    },
    { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  ],
  tools: [
    { name: "JIRA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  ],
}

const educationData = [
  {
    school: "Northeastern University",
    location: "Boston",
    degree: "MS. Information Systems",
    date: "Expected 2026",
    gpa: "3.13 / 4",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JXF5iC2CLXisukiKGr6nDdY9oVInRP.png",
  },
  {
    school: "Dr. Vishwanath Karad MIT World Peace University (MIT-WPU)",
    location: "Pune, India",
    degree: "B.TECH in Computer Science and Engineering",
    date: "June 2023",
    gpa: "7.70 / 10",
    logo: "/placeholder.svg?height=80&width=200",
  },
]

const activitiesData = {
  workshops: [
    {
      title: "Management of Information Systems",
      date: "May 2023 – July 2023",
      icon: "📊",
    },
    {
      title: "The Data Analyst Course: Complete Data Analyst Bootcamp",
      date: "August 2023 – November 2023",
      icon: "📈",
    },
    {
      title: "Solid Works – MITWPU",
      date: "June 2023 – August 2023",
      icon: "🔧",
    },
  ],
  extracurricular: [
    {
      title: "Protothon 7.0 Winner - UX Designer",
      organization: "Aspiring Product Managers Club @ Northeastern University",
      date: "March 2025",
      description: "Contributed UX design expertise to the winning team in the Protothon 7.0 competition",
      icon: "🏆",
    },
    {
      title: "PR Department Head - VASUNDHARA (College Official Fest)",
      organization: "MIT-WPU",
      date: "2019 - 2023",
      description: "Led public relations initiatives for the college's flagship event",
      icon: "🎭",
    },
    {
      title: "Volunteer - AAROHAN (College Unofficial Fest)",
      organization: "MIT-WPU",
      date: "2020",
      description: "Contributed to event organization and management",
      icon: "🎪",
    },
    {
      title: "Fundraising Volunteer",
      organization: "Muskhurahat Foundation – NGO",
      date: "July 2019 – August 2019",
      description: "Participated in fundraising campaigns for social causes",
      icon: "💝",
    },
    {
      title: "Teaching Volunteer",
      organization: "Bhumi Org. – NGO",
      date: "2019",
      description: "Taught underprivileged students during the pandemic",
      icon: "📚",
    },
  ],
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row items-center mb-6 sm:mb-8"
      >
        <div className="relative w-[200px] h-[250px] sm:w-[250px] sm:h-[350px] md:w-[300px] md:h-[400px] mb-4 md:mb-0 md:mr-8">
          <Image
            src="/images/design-mode/80B4C15B-0104-487C-AE14-C7641D9662C4_1_105_c.jpeg"
            alt="Purvang Khonde"
            fill
            className="rounded-xl object-cover object-top"
            priority
          />
        </div>
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-center md:text-left">Purvang Khonde</h1>
          <p className="text-lg sm:text-xl text-muted-foreground text-center md:text-left">Full Stack Developer</p>
        </div>
      </motion.div>

      <Tabs defaultValue="about" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 overflow-x-auto">
          <TabsTrigger value="about" className="text-xs sm:text-sm">
            About
          </TabsTrigger>
          <TabsTrigger value="skills" className="text-xs sm:text-sm">
            Skills
          </TabsTrigger>
          <TabsTrigger value="education" className="text-xs sm:text-sm">
            Education
          </TabsTrigger>
          <TabsTrigger value="activities" className="text-xs sm:text-sm">
            Activities
          </TabsTrigger>
        </TabsList>

        <TabsContent value="about">
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">About Me</h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                I am a passionate Full Stack Developer with over 6 years of experience designing and building scalable
                web applications. With a strong background in both frontend and backend technologies, I specialize in
                crafting efficient, user-friendly digital experiences. Currently pursuing my Master's in Information
                Systems at Northeastern University, I am constantly expanding my expertise in software development,
                cloud computing, and data management.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills">
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="space-y-6 sm:space-y-8">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 capitalize">
                      {category.replace(/([A-Z])/g, " $1").trim()}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                      {skillList.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex flex-col items-center p-3 sm:p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-colors"
                        >
                          <div className="w-10 h-10 sm:w-16 sm:h-16 relative mb-2 flex items-center justify-center">
                            <Image
                              src={skill.icon || "/placeholder.svg"}
                              alt={skill.name}
                              width={36}
                              height={36}
                              className="object-contain"
                            />
                          </div>
                          <span className="text-xs sm:text-sm text-gray-300">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="education">
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Education</h2>
              <div className="space-y-6 sm:space-y-8">
                {educationData.map((edu, index) => (
                  <div key={index} className="relative">
                    {/* Timeline connector */}
                    {index !== educationData.length - 1 && (
                      <div className="absolute left-6 sm:left-8 top-14 sm:top-16 bottom-0 w-0.5 bg-gray-600" />
                    )}

                    <div className="flex gap-4 sm:gap-6">
                      {/* Logo */}
                      <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 rounded-full bg-gray-800/50 overflow-hidden">
                        <Image
                          src={edu.logo || "/placeholder.svg"}
                          alt={edu.school}
                          fill
                          className="object-contain p-2"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 sm:gap-2">
                          <h3 className="text-base sm:text-xl font-semibold text-primary">{edu.school}</h3>
                          <span className="text-xs sm:text-sm text-muted-foreground">{edu.date}</span>
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground mt-1">{edu.location}</p>
                        <div className="mt-2 space-y-1">
                          <p className="text-sm sm:text-base font-medium">{edu.degree}</p>
                          <p className="text-xs sm:text-sm text-muted-foreground">GPA: {edu.gpa}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activities">
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="space-y-8 sm:space-y-10">
                {/* Workshops & Courses Section */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center gap-2">
                    <span>Workshops & Courses</span>
                    <span className="text-primary">📚</span>
                  </h2>
                  <div className="space-y-4 sm:space-y-6">
                    {activitiesData.workshops.map((workshop, index) => (
                      <div key={index} className="relative">
                        {/* Timeline connector */}
                        {index !== activitiesData.workshops.length - 1 && (
                          <div className="absolute left-5 sm:left-6 top-12 sm:top-14 bottom-0 w-0.5 bg-gray-600" />
                        )}

                        <div className="flex gap-4 sm:gap-6">
                          {/* Icon */}
                          <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-full bg-gray-800/50 flex items-center justify-center text-xl sm:text-2xl">
                            {workshop.icon}
                          </div>

                          {/* Content */}
                          <div className="flex-1">
                            <h3 className="text-base sm:text-lg font-semibold text-primary">{workshop.title}</h3>
                            <p className="text-xs sm:text-sm text-muted-foreground mt-1">{workshop.date}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Extra-curricular Activities Section */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center gap-2">
                    <span>Extra-curricular Activities & Social Services</span>
                    <span className="text-primary">🌟</span>
                  </h2>
                  <div className="space-y-4 sm:space-y-6">
                    {activitiesData.extracurricular.map((activity, index) => (
                      <div key={index} className="relative">
                        {/* Timeline connector */}
                        {index !== activitiesData.extracurricular.length - 1 && (
                          <div className="absolute left-5 sm:left-6 top-12 sm:top-14 bottom-0 w-0.5 bg-gray-600" />
                        )}

                        <div className="flex gap-4 sm:gap-6">
                          {/* Icon */}
                          <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-full bg-gray-800/50 flex items-center justify-center text-xl sm:text-2xl">
                            {activity.icon}
                          </div>

                          {/* Content */}
                          <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 sm:gap-2">
                              <h3 className="text-base sm:text-lg font-semibold text-primary">{activity.title}</h3>
                              <span className="text-xs sm:text-sm text-muted-foreground">{activity.date}</span>
                            </div>
                            <p className="text-xs sm:text-sm text-muted-foreground mt-1">{activity.organization}</p>
                            <p className="text-xs sm:text-sm text-muted-foreground mt-2">{activity.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
