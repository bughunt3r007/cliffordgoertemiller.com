import React, { useRef } from "react";
import { Mail, Phone, MapPin, Calendar, Award, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import HeroSection from "../components/resume/HeroSection";
import SkillsSection from "../components/resume/SkillsSection";
import ExperienceSection from "../components/resume/ExperienceSection";
import EducationSection from "../components/resume/EducationSection";
import FloatingIndex from "../components/resume/FloatingIndex";

export default function Resume() {
  const overviewRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);

  const indexSections = [
    { id: 'overview', label: 'Overview', ref: overviewRef },
    { id: 'skills', label: 'Technical Skills', ref: skillsRef },
    { id: 'experience', label: 'Experience', ref: experienceRef },
    { id: 'education', label: 'Education & Patents', ref: educationRef },
  ];

  return (
    <div className="pt-12">
      <FloatingIndex sections={indexSections} />
      
      {/* Hero Section */}
      <div ref={overviewRef}>
        <HeroSection />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* Skills Section */}
        <div ref={skillsRef}>
          <SkillsSection />
        </div>

        {/* Experience Section */}
        <div ref={experienceRef}>
          <ExperienceSection />
        </div>

        {/* Education Section */}
        <div ref={educationRef}>
          <EducationSection />
        </div>
      </div>
    </div>
  );
}