import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { format } from "date-fns";
import ProjectImage from "./ProjectImage";

export default function ProjectModal({ project, isOpen, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Reset index and pause state when modal opens or project changes
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
      setIsPaused(false);
    }
  }, [isOpen, project]);

  // Effect for auto-rotating images
  useEffect(() => {
    if (isOpen && !isPaused && project?.images?.length > 1) {
      const timer = setTimeout(() => {
        nextImage();
      }, 4000); // Change image every 4 seconds

      return () => clearTimeout(timer);
    }
  }, [isOpen, currentImageIndex, project, isPaused]);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images?.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images?.length - 1 : prev - 1
    );
  };

  const togglePause = () => {
    setIsPaused(prev => !prev);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #a78bfa;
          border-radius: 10px;
          border: 2px solid #f1f5f9;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #8b5cf6;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #a78bfa #f1f5f9;
        }
      `}</style>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto custom-scrollbar bg-white border-gray-200">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image Gallery */}
          {project.images && project.images.length > 0 &&
            <div>
              <div className="flex items-center space-x-2">
                {project.images.length > 1 &&
                  <Button
                    variant="ghost"
                    size="icon" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground h-10 w-10 rounded-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50 flex-shrink-0"
                    onClick={prevImage}>
                    <ChevronLeft className="w-5 h-5" style={{ strokeWidth: '2px' }} />
                  </Button>
                }
                <div className="relative flex-grow">
                  <ProjectImage
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-auto object-contain rounded-lg max-h-[60vh]"
                    fallbackSrc="https://images.unsplash.com/photo-1607434472257-d9f8e57a643d?w=800" />
                </div>
                {project.images.length > 1 &&
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50 flex-shrink-0"
                    onClick={nextImage}>
                    <ChevronRight className="w-5 h-5" style={{ strokeWidth: '2px' }} />
                  </Button>
                }
              </div>

              {project.images.length > 1 &&
                <div className="flex justify-center items-center space-x-4 mt-4">
                  <div className="flex items-center space-x-2">
                    {project.images.map((_, index) =>
                      <button
                        key={index}
                        className={`w-2.5 h-2.5 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-purple-600' : 'bg-gray-400 hover:bg-gray-500'}`
                        }
                        onClick={() => {
                          setCurrentImageIndex(index);
                          setIsPaused(true); // Pause slideshow on manual navigation
                        }} />
                    )}
                  </div>
                  <Button variant="ghost" size="icon" onClick={togglePause} className="h-8 w-8 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-800">
                    <span className="sr-only">{isPaused ? "Play" : "Pause"}</span>
                    {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                  </Button>
                </div>
              }
            </div>
          }

          {/* Project Info */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Description</h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-justify">{project.description}</p>

              {project.technologies &&
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) =>
                      <Badge key={index} variant="outline" className="border-gray-300 text-gray-700">
                        {tech}
                      </Badge>
                    )}
                  </div>
                </div>
              }
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-3">Project Details</h4>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-gray-500">Category</span>
                    <Badge variant="secondary" className="ml-2 capitalize bg-gray-100 text-gray-700">
                      {project.category?.replace(/_/g, ' ')}
                    </Badge>
                  </div>

                  {project.completion_date &&
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Completed</span>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3 text-gray-400" />
                        <span className="text-sm font-medium text-gray-900">
                          {format(new Date(project.completion_date), "MMMM yyyy")}
                        </span>
                      </div>
                    </div>
                  }

                  {project.featured &&
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Status</span>
                      <Badge className="bg-yellow-100 text-yellow-800">
                        Featured Project
                      </Badge>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}