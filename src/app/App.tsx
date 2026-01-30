import { Mail, Phone, MapPin, Linkedin, Github, FolderGit2, GraduationCap, BookOpen, Code } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Badge } from "@/app/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Separator } from "@/app/components/ui/separator";

export default function App() {
  const projects = [
    
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "PTIT (Posts and Telecommunications Institute of Technology)",
      period: "2023 - 2027 (Expected)",
      details: "Currently pursuing degree with focus on Software Engineering and Web Development",
      gpa: "GPA: 2.5/4.0"
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "Java", "C", "C++", "HTML/CSS"],
    "Frameworks & Libraries": ["React", "Node.js"],
    "Tools & Technologies": ["Git", "GitHub", "VS Code", "Figma"]
  };

  const coursework = [
    "Data Structures and Algorithms",
    "Database Management Systems",
    "Web Development",
    "Object-Oriented Programming",
    "Computer Networks",
    "Software Engineering"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <ImageWithFallback
              src=""
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl mb-2">Lê Quang Minh</h1>
              <p className="text-xl text-blue-100 mb-4">Computer Science Student</p>
              <p className="text-blue-50 mb-6 max-w-2xl">
                Motivated Computer Science student at PTIT with a passion for web development and software engineering. 
                Currently learning modern technologies like React, Node.js, and building projects to strengthen my programming skills. 
                Eager to apply my knowledge in real-world applications and contribute to innovative projects.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a href="mailto:MinhLQ.B23CN550@stu.ptit.edu.vn" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>MinhLQ.B23CN550@stu.ptit.edu.vn</span>
                </a>
                <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+84 917 343 010</span>
                </a>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>Hanoi, Vietnam</span>
                </div>
              </div>
              <div className="flex gap-4 mt-6 justify-center md:justify-start">
                <a href="https://github.com/Izim-24/Izim.github.io" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Projects Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <FolderGit2 className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl">Projects</h2>
          </div>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <p className="text-blue-600 mt-1">{project.type}</p>
                    </div>
                    <Badge variant="outline" className="self-start md:self-center">
                      {project.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Education Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl">Education</h2>
          </div>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <p className="text-blue-600 mt-1">{edu.school}</p>
                    </div>
                    <Badge variant="outline" className="self-start md:self-center">
                      {edu.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{edu.details}</p>
                  <p className="text-gray-600">{edu.gpa}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Skills Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Code className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl">Skills</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Coursework Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl">Coursework</h2>
          </div>
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {coursework.map((course, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">{course}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2026 Your Name. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-2">Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}