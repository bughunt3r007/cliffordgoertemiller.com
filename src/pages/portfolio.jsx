
import React, { useState, useEffect, useRef } from "react";
import { Project } from "@/api/entities";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Grid, List, Filter, FlaskConical, Star } from "lucide-react";

import ProjectGrid from "../components/portfolio/ProjectGrid";
import ProjectModal from "../components/portfolio/ProjectModal";
import FilterBar from "../components/portfolio/FilterBar";
import LabSection from "../components/portfolio/LabSection";
import FloatingIndex from "../components/portfolio/FloatingIndex";

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState("list"); // Changed default view mode to "list"
  const [activeFilter, setActiveFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  // Refs for scrolling
  const overviewRef = useRef(null);
  const featuredRef = useRef(null);
  const labRef = useRef(null);

  const indexSections = [
    { id: 'overview', label: 'Overview', ref: overviewRef },
    { id: 'featured', label: 'Featured Projects', ref: featuredRef },
    { id: 'research', label: 'Research & Engineering', ref: labRef },
  ];

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    setIsLoading(true);
    const data = await Project.list("-completion_date");
    setProjects(data);
    setIsLoading(false);
  };

  const filteredProjects = activeFilter === "all" ?
  projects :
  projects.filter((project) => project.category === activeFilter);

  // Separate featured projects from lab work
  const featuredProjects = filteredProjects.filter((project) => project.featured);
  const labProjects = filteredProjects.filter((project) => !project.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <FloatingIndex sections={indexSections} />
      {/* Header Section */}
      <section ref={overviewRef} className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Engineering Portfolio
            </h1>
            <p className="text-justify mx-auto text-lg leading-relaxed text-gray-600" style={{ maxWidth: 'calc(48rem + 120px)' }}>Over the past three years, I have researched, fabricated and improved on over a dozen atmospheric pressure combustor designs for ammonia, ammonia blends, and hydrocarbon fuels. This process was based on extensive literature review, spectroscopic emissions characterization, blowoff tests, and optical diagnosis. Some of these designs and key elements are showcased below. Beginning with a 3kW swirl combustor, my work scaled the ammonia combustor to over 6MW, a 2000x increase. Challenges regarding flame stability, air entrainment, fuel vaporization, combustor operation, flow patterns, and NOx emissions were overcome. The output of this R&D campaign is a 6MW combustor with 10:1 turndown, capable of providing process heat for industrial or combined heat and power applications while meeting NOx limits using ammonia, natural gas, propane or a combination of these fuels.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-700 mb-2">{projects.length}+</div>
              <div className="text-gray-600">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-700 mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-700 mb-2">50+</div>
              <div className="text-gray-600">Designs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-700 mb-2">10+</div>
              <div className="text-gray-600">Technologies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 bg-gray-50 rounded-lg shadow-sm">
        {/* Filter and View Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

          <div className="flex items-center space-x-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="flex items-center space-x-2">
              <Grid className="w-4 h-4" />
              <span>Grid</span>
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="flex items-center space-x-2">
              <List className="w-4 h-4" />
              <span>List</span>
            </Button>
          </div>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 &&
        <div ref={featuredRef} className="mb-16 pt-8 -mt-8">
            <div className="flex flex-col items-center space-y-3 mb-8">
              <div className="flex items-center space-x-3">
                <Star className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">Featured Projects</h2>
              </div>
              <Badge variant="outline" className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-purple-700 border-purple-700">
                Key Accomplishments
              </Badge>
            </div>
            <ProjectGrid
            projects={featuredProjects}
            viewMode={viewMode}
            isLoading={isLoading && featuredProjects.length === 0}
            onProjectClick={setSelectedProject} />

          </div>
        }

        {/* Laboratory & Research Section */}
        {labProjects.length > 0 &&
        <div ref={labRef} className="pt-8 -mt-8">
            <div className="flex flex-col items-center space-y-3 mb-8">
              <div className="flex items-center space-x-3">
                <FlaskConical className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">Research & Engineering Projects</h2>
              </div>
              <Badge variant="outline" className="text-purple-700 border-purple-700">
                Experimental Work
              </Badge>
            </div>
            <LabSection
            projects={labProjects}
            viewMode={viewMode}
            isLoading={isLoading && labProjects.length === 0}
            onProjectClick={setSelectedProject} />

          </div>
        }
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)} />

    </div>);

}
