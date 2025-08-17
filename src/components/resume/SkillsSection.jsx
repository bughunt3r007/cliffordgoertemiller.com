import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench, Monitor, Brain, Code } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Design & CAD",
      icon: Wrench,
      color: "bg-red-50 text-red-700",
      skills: ["SolidWorks", "AutoCAD", "Fusion 360", "CATIA", "Creo", "Inventor", "CAD/CAM"]
    },
    {
      title: "Analysis & Simulation",
      icon: Monitor,
      color: "bg-green-50 text-green-700", 
      skills: ["ANSYS", "MATLAB", "FEA", "CFD", "Cantera", "DEFORM FEM", "SolidWorks Simulation"]
    },
    {
      title: "Fabrication",
      icon: Brain,
      color: "bg-purple-50 text-purple-700",
      skills: ["CNC Machining", "Manual Machining", "TIG Welding", "Wire EDM", "Waterjet", "Laser Cutter", "Sheet Metal"]
    },
    {
      title: "Software & Control",
      icon: Code,
      color: "bg-orange-50 text-orange-700",
      skills: ["Python", "C++", "Java", "dSPACE", "FPGA", "VBA", "Optimal & Robust Control"]
    }
  ];

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Skills</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Comprehensive expertise across the mechanical engineering workflow, from initial concept to final production.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index} className="border-gray-200 bg-white hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${category.color}`}>
                  <category.icon className="w-5 h-5" />
                </div>
                <CardTitle className="text-lg text-gray-900">{category.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}