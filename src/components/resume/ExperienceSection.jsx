import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Graduate Research Assistant",
      company: "University of Minnesota Murphy Engine Research Lab",
      location: "Minneapolis, MN",
      duration: "Dec 2021 - Present",
      description: "Leading research on the design, characterization, and deployment of power-dense, fuel-flexible ammonia combustors for clean energy applications.",
      achievements: [
        "Designed, prototyped, and deployed novel jet-swirl burner concepts for NH3-Air combustion at 120kW.",
        "Submitted two provisional patents for low-emission, power-dense ammonia combustor designs.",
        "Optimized combustor geometry to achieve the lowest combined NOx and NH3 emissions of any reported NH3-air combustor.",
        "Converted a small batch grain dryer from propane to NH3-H2 fuel, creating a 360kW modular cyclone combustor.",
      ],
      technologies: ["SolidWorks", "Cantera", "FTIR Spectroscopy", "Scanning Mobility Particle Sizer", "Chemiluminescence", "Particle Image Velocimetry"]
    },
    {
      title: "Graduate Research Assistant",
      company: "University of Minnesota Automotive Propulsion Lab",
      location: "Minneapolis, MN", 
      duration: "Aug 2020 - Dec 2021",
      description: "Developed and implemented advanced control strategies and hardware/software integration for multi-fuel diesel engines.",
      achievements: [
        "Implemented a cutting-edge feedforward control algorithm to regulate multi-fuel engine operation.",
        "Developed a robust process for programming and troubleshooting Field Programmable Gate Array (FPGA) software.",
        "Interfaced with partner universities to ensure seamless integration of controller with target engine hardware.",
      ],
      technologies: ["FPGA", "dSPACE", "Real-time Control", "Hardware Integration", "Technical Documentation"]
    },
    {
      title: "Building Optimization Co-Op",
      company: "Heapy Engineering",
      location: "Columbus, OH",
      duration: "May 2019 - May 2020", 
      description: "Contributed to MEP designs, LEED certification, retro-commissioning, and energy conservation projects for large-scale commercial buildings.",
      achievements: [
        "Saved over 100 man-hours across two months by automating file systems for energy projects.",
        "Identified failed equipment during energy audits, resulting in over $1000/yr in client savings.",
        "Corrected a critical LEED credit for the Columbus Convention Center, ensuring client goals were met.",
      ],
      technologies: ["LEED Certification", "MEP Design", "Energy Audits", "Retro-commissioning", "Automation Scripts"]
    }
  ];

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Experience</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Progressive career growth with increasing responsibilities in mechanical design and engineering leadership.
        </p>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="border-gray-200 bg-white hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <CardTitle className="text-xl text-gray-900 mb-2">{exp.title}</CardTitle>
                  <div className="flex flex-wrap items-center gap-4 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Building className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{exp.description}</p>
              
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-red-700 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs border-gray-300 text-gray-700">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}