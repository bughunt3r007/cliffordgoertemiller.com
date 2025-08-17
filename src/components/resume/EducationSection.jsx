import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, FileText } from "lucide-react";

export default function EducationSection() {
  const education = [
    {
      degree: "MS & PhD, Mechanical Engineering",
      school: "University of Minnesota",
      location: "Minneapolis, MN",
      year: "2025 (Expected)",
      gpa: "3.61/4.0",
      focus: "PhD Thesis: Design and Characterization of Power-Dense Fuel Flexible Ammonia Combustors",
    },
    {
      degree: "B.S. Mechanical Engineering",
      school: "The Ohio State University",
      location: "Columbus, OH", 
      year: "2020",
      gpa: "3.74/4.0",
      focus: "Summa Cum Laude",
    },
    {
      degree: "B.A. Environmental Science and Public Policy",
      school: "Harvard University",
      location: "Cambridge, MA", 
      year: "2017",
      gpa: "3.48/4.0",
      focus: "Focus on sustainable systems",
    }
  ];

  const patents = [
    {
      name: "System and Method for Controlling a Compression Ignition Engine",
      issuer: "US Patent: 12,056,967",
    },
    {
      name: "NH3-H2-Air Flow-Through Cyclone Combustor",
      issuer: "Provisional Patent Filed",
    },
    {
      name: "Vortex Tube Burner for Ammonia-Air Combustion",
      issuer: "Provisional Patent Filed",
    },
    {
       name: "NH3-Air Jet-Swirl Burner Architecture",
       issuer: "In Process",
    }
  ];

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Education & Patents</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Strong academic foundation from leading institutions, complemented by innovative, patented research.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Education */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
            <GraduationCap className="w-5 h-5 text-red-700" />
            <span>Education</span>
          </h3>
          
          {education.map((edu, index) => (
            <Card key={index} className="border-gray-200 bg-white">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-gray-900">{edu.degree}</CardTitle>
                <div className="text-gray-600">
                  <div className="font-medium">{edu.school}</div>
                  <div className="text-sm flex items-center justify-between mt-1">
                    <span>{edu.location}</span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{edu.year}</span>
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-4 mb-2">
                  <Badge variant="outline" className="text-green-700 border-green-700">
                    GPA: {edu.gpa}
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                    {edu.focus}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Patents */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
            <FileText className="w-5 h-5 text-gold-500" />
            <span>Patents</span>
          </h3>
          
          <div className="space-y-4">
            {patents.map((cert, index) => (
              <Card key={index} className="border-gray-200 bg-white">
                <CardContent className="p-4">
                  <h4 className="font-medium text-gray-900 mb-2">{cert.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{cert.issuer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}