
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, Eye, ArrowRight } from "lucide-react";
import { format }                       from "date-fns";
import ProjectImage                     from "./ProjectImage";

export default function ProjectGrid({ projects, viewMode, isLoading, onProjectClick }) {
  if (isLoading) {
    return (
      <div className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-6"}>
        {Array(6).fill(0).map((_, index) => (
          <Card key={index} className="overflow-hidden">
            <Skeleton className="h-48 w-full" />
            <CardHeader>
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-20 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Eye className="w-12 h-12 text-gray-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No Projects Found</h3>
        <p className="text-gray-600">Try adjusting your filters or check back later for new projects.</p>
      </div>
    );
  }

  if (viewMode === "list") {
    return (
      <div className="space-y-6">
        <style>{`
          .animated-border-card {
            position: relative;
            border: 1px solid #9ca3af; /* Default 1px dark gray border */
          }
          .animated-border-card::before {
            content: '';
            position: absolute;
            inset: -1px; /* Adjust for 1px parent border */
            border-radius: inherit;
            border: 3px solid #8b5cf6; /* 3px purple for animation */
            clip-path: polygon(0% 100%, 0% 100%, 0% 100%, 0% 100%, 0% 100%, 0% 100%);
            transition: clip-path 0.5s ease-in-out;
            pointer-events: none;
          }
          .animated-border-card:hover::before {
            clip-path: polygon(0% 100%, 0% 0%, 100% 0%, 100% 100%, 0% 100%, 2px 100%);
          }
        `}</style>
        {projects.map((project) => (
          <Card 
            key={project.id} 
            className="animated-border-card overflow-hidden transition-all duration-300 cursor-pointer group bg-white shadow-lg hover:shadow-xl"
            onClick={() => onProjectClick(project)}
          >
            <div className="md:flex">
              <div className="md:w-1/3">
                <ProjectImage
                  src={project.images?.[0]}
                  alt={project.title}
                  className="w-full h-48 md:h-full object-cover transition-transform duration-300"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-700 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <Badge variant="secondary" className="capitalize bg-gray-100 text-gray-700">
                        {project.category?.replace(/_/g, ' ')}
                      </Badge>
                      {project.completion_date && (
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{format(new Date(project.completion_date), "MMM yyyy")}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-red-700 transition-colors" />
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-3 text-justify">{project.description}</p>
                
                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs border-gray-300 text-gray-700">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs border-gray-300 text-gray-700">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
       <style>{`
          .animated-border-card {
            position: relative;
            border: 1px solid #9ca3af; /* Default 1px dark gray border */
          }
          .animated-border-card::before {
            content: '';
            position: absolute;
            inset: -1px; /* Adjust for 1px parent border */
            border-radius: inherit;
            border: 3px solid #8b5cf6; /* 3px purple for animation */
            clip-path: polygon(0% 100%, 0% 100%, 0% 100%, 0% 100%, 0% 100%, 0% 100%);
            transition: clip-path 0.5s ease-in-out;
            pointer-events: none;
          }
          .animated-border-card:hover::before {
            clip-path: polygon(0% 100%, 0% 0%, 100% 0%, 100% 100%, 0% 100%, 2px 100%);
          }
        `}</style>
      {projects.map((project) => (
        <Card 
          key={project.id} 
          className="animated-border-card overflow-hidden transition-all duration-300 cursor-pointer group bg-white shadow-lg hover:shadow-xl"
          onClick={() => onProjectClick(project)}
        >
          <div className="relative">
            <ProjectImage
              src={project.images?.[0]}
              alt={project.title}
              className="w-full h-48 object-cover transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {project.featured && (
              <Badge className="absolute top-3 left-3 bg-yellow-500 text-yellow-900">
                Featured
              </Badge>
            )}
          </div>
          
          <CardHeader className="pb-3">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-700 transition-colors">
              {project.title}
            </h3>
            <div className="flex items-center justify-between">
              <Badge variant="secondary" className="capitalize text-xs bg-gray-100 text-gray-700">
                {project.category?.replace(/_/g, ' ')}
              </Badge>
              {project.completion_date && (
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <Calendar className="w-3 h-3" />
                  <span>{format(new Date(project.completion_date), "MMM yyyy")}</span>
                </div>
              )}
            </div>
          </CardHeader>
          
          <CardContent>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3 text-justify">{project.description}</p>
            
            {project.technologies && (
              <div className="flex flex-wrap gap-1">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline" className="text-xs border-gray-300 text-gray-700">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 3 && (
                  <Badge variant="outline" className="text-xs border-gray-300 text-gray-700">
                    +{project.technologies.length - 3}
                  </Badge>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
