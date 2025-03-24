"use client"

import * as lucide from "lucide-react"
import React from "react"

const CyberpunkResume = () => {
  const [activeSection, setActiveSection] = React.useState("about")
  const perspectiveRef = React.useRef(null)

  // Update perspective effect on mouse move
  React.useEffect(() => {
    const handleMouseMove = (e) => {
      if (!perspectiveRef.current) return

      const { clientX, clientY } = e
      const { left, top, width, height } = perspectiveRef.current.getBoundingClientRect()

      const x = (clientX - left) / width - 0.5
      const y = (clientY - top) / height - 0.5

      perspectiveRef.current.style.transform = `perspective(1000px) rotateX(${y * 2}deg) rotateY(${x * -2}deg)`
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Initialize Lucide icons
  React.useEffect(() => {
    lucide.createIcons()
  }, [])

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        {/* Header with grid background */}
        <header className="relative border-2 border-black mb-8 overflow-hidden">
          <div className="absolute inset-0 grid-perspective">
            {/* Perspective grid */}
            <div className="absolute inset-0">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={`vertical-${i}`}
                  className="absolute border-r border-black opacity-30"
                  style={{
                    left: `${(i + 1) * 8}%`,
                    top: "0",
                    height: "100%",
                  }}
                />
              ))}
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={`horizontal-${i}`}
                  className="absolute border-t border-black opacity-30 w-full"
                  style={{
                    top: `${(i + 1) * 12.5}%`,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
            <div className="mb-6 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">JACK PHILLIPS-MARINO</h1>
              <div className="flex flex-col md:flex-row md:items-center mt-2 text-sm gap-2 md:gap-0">
                <div className="flex items-center">
                  <i data-lucide="map-pin" className="w-4 h-4 mr-1"></i>
                  <span>6403 N Davis Rd, Evansville WI</span>
                </div>
                <span className="hidden md:block mx-2">•</span>
                <div className="flex items-center">
                  <i data-lucide="phone" className="w-4 h-4 mr-1"></i>
                  <span>608-490-3126</span>
                </div>
                <span className="hidden md:block mx-2">•</span>
                <a
                  href="mailto:jphillipsmarino@gmail.com"
                  className="flex items-center hover:text-orange-500 transition-colors"
                >
                  <i data-lucide="mail" className="w-4 h-4 mr-1"></i>
                  jphillipsmarino@gmail.com
                </a>
              </div>
              <p className="mt-4 max-w-md">
                Database Developer and IT Youth Apprentice with experience in website design, documentation writing, and
                programming. Skilled in critical thinking and organization.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {/* Profile Picture Box */}
              <div className="relative border-2 border-black p-1 mb-4 w-48 h-48 mx-auto">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-orange-500 -mt-1 -mr-1 z-0"></div>
                {/* Grid overlay */}
                <div className="absolute inset-0 z-5 pointer-events-none">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={`pic-v-${i}`}
                      className="absolute border-r border-black opacity-30"
                      style={{
                        left: `${(i + 1) * 25}%`,
                        top: "0",
                        height: "100%",
                      }}
                    />
                  ))}
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={`pic-h-${i}`}
                      className="absolute border-t border-black opacity-30 w-full"
                      style={{
                        top: `${(i + 1) * 25}%`,
                      }}
                    />
                  ))}
                </div>
                {/* Profile image */}
                <div className="relative w-full h-full z-10 bg-gray-100 overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8432%281%29.JPG-MoVHAXWSvHHmFID8OQSMQ6jjM7ir4B.jpeg"
                    alt="Jack Phillips-Marino"
                    className="w-full h-full object-cover object-top z-20"
                  />
                </div>
              </div>

              <button className="border-2 border-black hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors py-2 px-4 rounded flex items-center justify-center">
                <i data-lucide="mail" className="w-4 h-4 mr-2"></i> Contact Me
              </button>
              <div className="flex justify-center space-x-4">
                <a
                  href="mailto:jphillipsmarino@gmail.com"
                  className="p-2 border-2 border-black rounded-full hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors"
                  aria-label="Email me"
                  title="Send me an email"
                >
                  <i data-lucide="mail" className="w-5 h-5"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/jack-phillips-marino-9a980a340/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border-2 border-black rounded-full hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors"
                >
                  <i data-lucide="linkedin" className="w-5 h-5"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Vertical RESUME text */}
          <div
            className="absolute right-4 top-1/2 -translate-y-1/2 text-6xl font-bold opacity-10"
            style={{ writingMode: "vertical-rl" }}
          >
            RESUME
          </div>
        </header>

        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Navigation */}
          <nav className="md:col-span-3 border-2 border-black p-4">
            <div className="space-y-2">
              {[
                { id: "about", label: "ABOUT" },
                { id: "experience", label: "EXPERIENCE" },
                { id: "skills", label: "SKILLS" },
                { id: "education", label: "EDUCATION" },
                { id: "projects", label: "PROJECTS" },
                { id: "personal", label: "PERSONAL" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full text-left p-2 border-l-4 transition-colors ${
                    activeSection === item.id
                      ? "border-orange-500 bg-gray-100"
                      : "border-transparent hover:border-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>

          {/* Main content area */}
          <main className="md:col-span-9 border-2 border-black">
            <div ref={perspectiveRef} className="transition-transform duration-300 ease-out">
              {/* About section */}
              <section className={`p-6 ${activeSection === "about" ? "block" : "hidden"}`}>
                <h2 className="text-2xl font-bold mb-6 border-b-2 border-orange-500 pb-2 inline-block">ABOUT ME</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="mb-4">
                      I'm a Database Developer and IT Youth Apprentice currently working at Dane County School
                      Consortium. I specialize in website development, database management, and documentation writing.
                    </p>
                    <p className="mb-4">
                      With experience in both technical and customer service roles, I've developed strong skills in
                      problem-solving, communication, and organization. I'm particularly interested in AI development,
                      automation, and sustainable technology solutions.
                    </p>
                  </div>

                  <div className="border-2 border-black p-4 bg-gray-50 relative">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-orange-500 -mt-2 -mr-2 z-0"></div>
                    <div className="relative z-10">
                      <h3 className="text-lg font-bold mb-3">CORE COMPETENCIES</h3>
                      <ul className="grid grid-cols-2 gap-2 text-sm">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-orange-500 mr-2"></div>
                          Database Management
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-orange-500 mr-2"></div>
                          Website Design
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-orange-500 mr-2"></div>
                          Documentation Writing
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-orange-500 mr-2"></div>
                          C# Programming
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-orange-500 mr-2"></div>
                          AI Development
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-orange-500 mr-2"></div>
                          Customer Service
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-orange-500 mr-2"></div>
                          Critical Thinking
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-orange-500 mr-2"></div>
                          Organization
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-orange-500 mr-2"></div>
                          Communication
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-orange-500 mr-2"></div>
                          Learning Quickly
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-orange-500 mr-2"></div>
                          Planning
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-orange-500 mr-2"></div>
                          Proactive and Self-motivated
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Experience section */}
              <section className={`p-6 ${activeSection === "experience" ? "block" : "hidden"}`}>
                <h2 className="text-2xl font-bold mb-6 border-b-2 border-orange-500 pb-2 inline-block">
                  WORK EXPERIENCE
                </h2>

                <div className="space-y-8">
                  <div className="relative pl-6 border-l-2 border-gray-200">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-orange-500"></div>
                    <div className="mb-1 flex justify-between">
                      <h3 className="text-lg font-bold">Database Developer / General IT Youth Apprentice</h3>
                      <span className="text-sm bg-gray-100 px-2 py-1 rounded">Jan 2024 - Present</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">Dane County School Consortium</div>
                    <p>
                      Updating company website with new information/developments, maintaining and improving company
                      internal software, managing, editing, and adding to the company database, writing all
                      documentation for general IT procedures, as well as database documentation, resolve user issues in
                      an efficient manner, schedule projects, take feedback and use it to improve company website and
                      internal software, and communicate with team on projects.
                    </p>
                  </div>

                  <div className="relative pl-6 border-l-2 border-gray-200">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-orange-500"></div>
                    <div className="mb-1 flex justify-between">
                      <h3 className="text-lg font-bold">Tech Specialty Associate</h3>
                      <span className="text-sm bg-gray-100 px-2 py-1 rounded">Nov 2023 - Jul 2024</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">Target</div>
                    <p>
                      I kept track of inventory, stock shelves, communicate with tech team on goals and tasks, give
                      customers specific recommendations based on their needs, and solve any issues with products
                      customers may have.
                    </p>
                  </div>

                  <div className="relative pl-6 border-l-2 border-gray-200">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-orange-500"></div>
                    <div className="mb-1 flex justify-between">
                      <h3 className="text-lg font-bold">Cashier</h3>
                      <span className="text-sm bg-gray-100 px-2 py-1 rounded">Jan 2022 - Nov 2023</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">Piggly Wiggly</div>
                    <p>
                      Provided customer service by assisting shoppers, restocking shelves, and maintaining a clean store
                      environment. Processed transactions efficiently, managed inventory, and collaborated with team
                      members to ensure smooth daily operations.
                    </p>
                  </div>

                  <div className="relative pl-6 border-l-2 border-gray-200">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-orange-500"></div>
                    <div className="mb-1 flex justify-between">
                      <h3 className="text-lg font-bold">Interior House Plant Expert</h3>
                      <span className="text-sm bg-gray-100 px-2 py-1 rounded">Feb 2023 - Aug 2023 (2023 Season)</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">Pleasant Prairie Greenhouse</div>
                    <p>
                      I would keep an inventory of all the house plants, plan out the care needed for plants under my
                      watch, solve any issues regarding plants under my watch, provide customers with recommendations
                      based on their needs, as well as fix any issues customers had with their plants they had
                      purchased.
                    </p>
                  </div>
                </div>
              </section>

              {/* Skills section */}
              <section className={`p-6 ${activeSection === "skills" ? "block" : "hidden"}`}>
                <h2 className="text-2xl font-bold mb-6 border-b-2 border-orange-500 pb-2 inline-block">
                  SKILLS & TECHNOLOGIES
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="border-2 border-black p-4">
                    <h3 className="text-lg font-bold mb-3">TECHNICAL SKILLS</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "C# Programming",
                        "Website Design",
                        "Database Management",
                        "Documentation Writing",
                        "Microsoft Office",
                        "Excel",
                        "PowerPoint",
                        "Word",
                        "Outlook",
                      ].map((skill) => (
                        <div
                          key={skill}
                          className="border border-black p-2 text-center text-sm hover:bg-orange-500 hover:text-white transition-colors"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-2 border-black p-4">
                    <h3 className="text-lg font-bold mb-3">SOFT SKILLS</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "Critical Thinking",
                        "Organization",
                        "Communication",
                        "Planning",
                        "Learning Quickly",
                        "Proactive",
                        "Self-motivated",
                        "Problem Solving",
                        "Customer Service",
                      ].map((skill) => (
                        <div
                          key={skill}
                          className="border border-black p-2 text-center text-sm hover:bg-orange-500 hover:text-white transition-colors"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Education section */}
              <section className={`p-6 ${activeSection === "education" ? "block" : "hidden"}`}>
                <h2 className="text-2xl font-bold mb-6 border-b-2 border-orange-500 pb-2 inline-block">EDUCATION</h2>

                <div className="space-y-6">
                  <div className="border-2 border-black p-4 relative">
                    <div className="absolute top-0 right-0 border-l-[20px] border-b-[20px] border-l-transparent border-b-orange-500"></div>
                    <div className="mb-1 flex justify-between">
                      <h3 className="text-lg font-bold">Evansville Highschool</h3>
                      <span className="text-sm bg-gray-100 px-2 py-1 rounded">2021 - 2025</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">High School Diploma (Expected)</div>
                    <p>Currently attending high school while participating in the Youth Apprenticeship program.</p>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-bold mb-3">CERTIFICATIONS</h3>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                      <div className="flex items-center p-3 border border-black">
                        <div className="w-3 h-3 bg-orange-500 mr-3"></div>
                        <div>
                          <div className="font-bold">Microsoft Office Specialist Certification - Associate</div>
                          <div className="text-xs text-gray-600">Excel, PowerPoint, Word, Outlook</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Projects section */}
              <section className={`p-6 ${activeSection === "projects" ? "block" : "hidden"}`}>
                <h2 className="text-2xl font-bold mb-6 border-b-2 border-orange-500 pb-2 inline-block">PROJECTS</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border-2 border-black group hover:border-orange-500 transition-colors">
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-orange-500 transition-colors">
                        AI Thaddius Assistant
                      </h3>
                      <p className="mb-3">
                        AI task scheduling agent that communicates in natural language, takes the users to-do list and
                        finds time in their google calendar.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">AI</span>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">Natural Language</span>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">Google Calendar</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-2 border-black group hover:border-orange-500 transition-colors">
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-orange-500 transition-colors">
                        SAGE AI Education Assistant
                      </h3>
                      <p className="mb-3">
                        A specialized AI agent hosted on a server on my local machine, SAGE gives specialized responses
                        to help the user learn based off of past material provided by the user.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">AI</span>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">Education</span>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">Local Server</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-2 border-black group hover:border-orange-500 transition-colors">
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-orange-500 transition-colors">
                        Internal Data Management Application
                      </h3>
                      <p className="mb-3">
                        Built a WinForms C# application and designed its underlying SQL database to enable non-technical
                        internal users to view, edit, and update company data through a user-friendly GUI.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">C#</span>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">SQL</span>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">WinForms</span>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">Database Design</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-2 border-black group hover:border-orange-500 transition-colors">
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-orange-500 transition-colors">
                        Automatic Hydroponics
                      </h3>
                      <p className="mb-3">
                        Designed an automatic hydroponics system, using Raspberry Pi Pico W, I would be able to see the
                        nutrient in a hydroponics setup, and have it automatically, graph, log and dispense nutrient.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">Raspberry Pi</span>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">Hydroponics</span>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">Automation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Personal section */}
              <section className={`p-6 ${activeSection === "personal" ? "block" : "hidden"}`}>
                <h2 className="text-2xl font-bold mb-6 border-b-2 border-orange-500 pb-2 inline-block">
                  BEYOND THE OFFICE
                </h2>

                {/* Community Involvement Section */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <i data-lucide="heart" className="text-orange-500 mr-2 w-5 h-5"></i>
                    COMMUNITY INVOLVEMENT
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Donation Garden */}
                    <div className="border-2 border-black p-4 relative h-full flex flex-col">
                      <div className="absolute top-0 right-0 w-12 h-12 bg-orange-500 -mt-1 -mr-1 z-0"></div>
                      <div className="relative z-10 flex flex-col h-full">
                        <h4 className="text-lg font-bold mb-2">Donation Garden</h4>
                        <p className="text-sm mb-4">
                          Helped establish and maintain a community garden that donates fresh produce to local food
                          banks. Coordinated volunteer efforts and implemented sustainable growing practices.
                        </p>
                        <div className="mt-auto border border-black w-48 h-48 bg-gray-100 relative overflow-hidden">
                          {/* Grid overlay - moved before the image */}
                          <div className="absolute inset-0 pointer-events-none z-0">
                            {Array.from({ length: 4 }).map((_, i) => (
                              <div
                                key={`garden-v-${i}`}
                                className="absolute border-r border-black opacity-30"
                                style={{
                                  left: `${(i + 1) * 25}%`,
                                  top: "0",
                                  height: "100%",
                                }}
                              />
                            ))}
                            {Array.from({ length: 4 }).map((_, i) => (
                              <div
                                key={`garden-h-${i}`}
                                className="absolute border-t border-black opacity-30 w-full"
                                style={{
                                  top: `${(i + 1) * 25}%`,
                                }}
                              />
                            ))}
                          </div>
                          <img
                            src="images/donation-garden.jpeg"
                            alt="Jack holding bags of produce from the donation garden"
                            className="w-full h-full object-cover object-center relative z-10"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Environmental Club */}
                    <div className="border-2 border-black p-4 relative h-full flex flex-col">
                      <div className="absolute top-0 right-0 w-12 h-12 bg-orange-500 -mt-1 -mr-1 z-0"></div>
                      <div className="relative z-10 flex flex-col h-full">
                        <h4 className="text-lg font-bold mb-2">Environmental Club</h4>
                        <p className="text-sm mb-4">
                          Active member of the local environmental club, participating in conservation efforts,
                          educational workshops, and community clean-up events to promote sustainability.
                        </p>
                        <div className="mt-auto border border-black aspect-square h-48 bg-gray-100 relative overflow-hidden">
                          {/* Grid overlay - moved before the image */}
                          <div className="absolute inset-0 pointer-events-none z-0">
                            {Array.from({ length: 4 }).map((_, i) => (
                              <div
                                key={`env-v-${i}`}
                                className="absolute border-r border-black opacity-30"
                                style={{
                                  left: `${(i + 1) * 25}%`,
                                  top: "0",
                                  height: "100%",
                                }}
                              />
                            ))}
                            {Array.from({ length: 4 }).map((_, i) => (
                              <div
                                key={`env-h-${i}`}
                                className="absolute border-t border-black opacity-30 w-full"
                                style={{
                                  top: `${(i + 1) * 25}%`,
                                }}
                              />
                            ))}
                          </div>
                          <img
                            src="images/environmental-grant.png"
                            alt="Jack receiving an environmental grant"
                            className="w-full h-full object-cover relative z-10"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Passion Projects Section */}
                <div>
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <i data-lucide="camera" className="text-orange-500 mr-2 w-5 h-5"></i>
                    PASSION PROJECTS
                  </h3>

                  <div className="grid grid-cols-1 gap-4">
                    {/* Butterfingers */}
                    <div className="border-2 border-black p-4 relative">
                      <div className="absolute top-0 right-0 w-12 h-12 bg-orange-500 -mt-1 -mr-1 z-0"></div>
                      <div className="relative z-10">
                        <h4 className="text-lg font-bold mb-2">Butterfingers</h4>
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="md:w-2/3">
                            <p className="text-sm">
                              Developed a specialized grip-enhancing glove prototype designed to help people with
                              limited dexterity or hand strength. The project combines ergonomic design with innovative
                              materials to improve quality of life for users with mobility challenges.
                            </p>
                          </div>
                          <div className="md:w-1/3">
                            <div className="border border-black aspect-square h-48 bg-gray-100 relative overflow-hidden">
                              {/* Grid overlay - moved before the image */}
                              <div className="absolute inset-0 pointer-events-none z-0">
                                {Array.from({ length: 4 }).map((_, i) => (
                                  <div
                                    key={`bf-v-${i}`}
                                    className="absolute border-r border-black opacity-30"
                                    style={{
                                      left: `${(i + 1) * 25}%`,
                                      top: "0",
                                      height: "100%",
                                    }}
                                  />
                                ))}
                                {Array.from({ length: 4 }).map((_, i) => (
                                  <div
                                    key={`bf-h-${i}`}
                                    className="absolute border-t border-black opacity-30 w-full"
                                    style={{
                                      top: `${(i + 1) * 25}%`,
                                    }}
                                  />
                                ))}
                              </div>
                              <img
                                src="C:\Users\jlpm1\Desktop\ProfessionalWebsite\images\butterfingers-hand.JPG"
                                alt="Butterfingers robotic hand prototype"
                                className="w-full h-full object-cover relative z-10"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Wind Turbine */}
                    <div className="border-2 border-black p-4 relative">
                      <div className="absolute top-0 right-0 w-12 h-12 bg-orange-500 -mt-1 -mr-1 z-0"></div>
                      <div className="relative z-10">
                        <h4 className="text-lg font-bold mb-2">Wind Turbine</h4>
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="md:w-2/3">
                            <p className="text-sm">
                              Designed and built a small-scale vertical axis wind turbine for residential use. The
                              project focuses on maximizing energy generation in low-wind conditions while maintaining a
                              compact and aesthetically pleasing design suitable for urban environments.
                            </p>
                          </div>
                          <div className="md:w-1/3">
                            <div className="border border-black aspect-square h-48 bg-gray-100 relative overflow-hidden">
                              {/* Grid overlay - moved before the image */}
                              <div className="absolute inset-0 pointer-events-none z-0">
                                {Array.from({ length: 4 }).map((_, i) => (
                                  <div
                                    key={`wind-v-${i}`}
                                    className="absolute border-r border-black opacity-30"
                                    style={{
                                      left: `${(i + 1) * 25}%`,
                                      top: "0",
                                      height: "100%",
                                    }}
                                  />
                                ))}
                                {Array.from({ length: 4 }).map((_, i) => (
                                  <div
                                    key={`wind-h-${i}`}
                                    className="absolute border-t border-black opacity-30 w-full"
                                    style={{
                                      top: `${(i + 1) * 25}%`,
                                    }}
                                  />
                                ))}
                              </div>
                              <img
                                src="C:\Users\jlpm1\Desktop\ProfessionalWebsite\images\wind-turbine.jpg"
                                alt="Vertical axis wind turbine project"
                                className="w-full h-full object-cover relative z-10"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Plastic Bottle Recycler */}
                    <div className="border-2 border-black p-4 relative">
                      <div className="absolute top-0 right-0 w-12 h-12 bg-orange-500 -mt-1 -mr-1 z-0"></div>
                      <div className="relative z-10">
                        <h4 className="text-lg font-bold mb-2">Plastic Bottle Recycler</h4>
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="md:w-2/3">
                            <p className="text-sm">
                              Created a DIY machine that converts plastic bottles into 3D printer filament. This project
                              addresses plastic waste by providing a practical way to reuse common household plastic
                              items, turning them into valuable material for creative projects and prototyping.
                            </p>
                          </div>
                          <div className="md:w-1/3">
                            <div className="border border-black aspect-square h-48 bg-gray-100 relative overflow-hidden">
                              {/* Grid overlay - moved before the image */}
                              <div className="absolute inset-0 pointer-events-none z-0">
                                {Array.from({ length: 4 }).map((_, i) => (
                                  <div
                                    key={`recycle-v-${i}`}
                                    className="absolute border-r border-black opacity-30"
                                    style={{
                                      left: `${(i + 1) * 25}%`,
                                      top: "0",
                                      height: "100%",
                                    }}
                                  />
                                ))}
                                {Array.from({ length: 4 }).map((_, i) => (
                                  <div
                                    key={`recycle-h-${i}`}
                                    className="absolute border-t border-black opacity-30 w-full"
                                    style={{
                                      top: `${(i + 1) * 25}%`,
                                    }}
                                  />
                                ))}
                              </div>
                              <img
                                src="C:\Users\jlpm1\Desktop\ProfessionalWebsite\images\plastic-bottle.JPG"
                                alt="Plastic bottle recycler machine"
                                className="w-full h-full object-cover relative z-10"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>

        {/* Footer */}
        <footer className="mt-8 border-t-2 border-black pt-6">
          <div className="grid grid-cols-10 gap-0">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={`color-${i}`} className={`h-2 ${i >= 5 ? "bg-orange-500" : "bg-gray-200"}`} />
            ))}
          </div>
          <div className="flex justify-between items-center mt-4 text-sm">
            <div>© {new Date().getFullYear()} Jack Phillips-Marino</div>
            <div className="flex items-center">
              <span className="mx-1 text-orange-500">♦</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default CyberpunkResume

