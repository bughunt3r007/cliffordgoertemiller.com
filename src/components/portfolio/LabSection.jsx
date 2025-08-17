
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, Eye, ArrowRight, FlaskConical } from "lucide-react";
import { format } from "date-fns";
import ProjectImage from "./ProjectImage";

export default function LabSection({ projects, viewMode, isLoading, onProjectClick }) {
  if (isLoading) {
    return (
      <div className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-6"}>
        {Array(6).fill(0).map((_, index) =>
        <Card key={index} className="overflow-hidden">
            <Skeleton className="h-40 w-full" />
            <CardHeader>
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-16 w-full" />
            </CardContent>
          </Card>
        )}
      </div>);

  }

  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <FlaskConical className="w-10 h-10 text-purple-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">No Lab Work Found</h3>
        <p className="text-gray-600">Check back later for laboratory research updates.</p>
      </div>);

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
        {projects.map((project) =>
        <Card
          key={project.id}
          className="animated-border-card overflow-hidden transition-all duration-300 cursor-pointer group bg-white shadow-lg hover:shadow-xl"
          onClick={() => onProjectClick(project)}>

            <div className="md:flex">
              <div className="md:w-1/3">
                <div className="relative h-48 md:h-full">
                  <ProjectImage
                  src={project.images?.[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-0 transition-opacity duration-300" />
                  <div className="absolute top-3 left-3">
                    <FlaskConical className="w-5 h-5 text-white drop-shadow-lg" />
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <Badge variant="outline" className="capitalize border-purple-200 text-purple-700">
                        {project.category?.replace(/_/g, ' ')}
                      </Badge>
                      {project.completion_date &&
                    <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{format(new Date(project.completion_date), "MMM yyyy")}</span>
                        </div>
                    }
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-700 transition-colors" />
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-3 text-justify">{project.description}</p>
                
                {project.technologies &&
              <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, techIndex) =>
                <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                )}
                    {project.technologies.length > 4 &&
                <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 4} more
                      </Badge>
                }
                  </div>
              }
              </div>
            </div>
          </Card>
        )}
      </div>);

  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      {projects.map((project) =>
      <Card
        key={project.id}
        className="animated-border-card overflow-hidden transition-all duration-300 cursor-pointer group bg-white shadow-lg hover:shadow-xl"
        onClick={() => onProjectClick(project)}>

          <div className="relative h-56">
            <ProjectImage
            src={project.images?.[0]}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-3 left-3">
              <FlaskConical className="w-5 h-5 text-white drop-shadow-lg" />
            </div>
          </div>
          
          <CardHeader className="pb-3">
            <h3 className="text-base font-semibold text-gray-900 group-hover:text-purple-700 transition-colors line-clamp-2">
              {project.title}
            </h3>
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="capitalize text-xs border-purple-200 text-purple-700">
                {project.category?.replace(/_/g, ' ')}
              </Badge>
              {project.completion_date &&
            <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <Calendar className="w-3 h-3" />
                  <span>{format(new Date(project.completion_date), "MMM yyyy")}</span>
                </div>
            }
            </div>
          </CardHeader>
          
          <CardContent>
            <p className="text-gray-600 text-sm mb-3 line-clamp-3 text-justify">{project.description}</p>
            
            {project.technologies &&
          <div className="flex flex-wrap gap-1">
                {project.technologies.slice(0, 2).map((tech, techIndex) =>
            <Badge key={techIndex} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
            )}
                {project.technologies.length > 2 &&
            <Badge variant="secondary" className="text-xs">
                    +{project.technologies.length - 2}
                  </Badge>
            }
              </div>
          }
          </CardContent>
        </Card>
      )}
    </div>);

}
