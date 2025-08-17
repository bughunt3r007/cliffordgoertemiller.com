import React from "react";
import { Mail, Phone, MapPin, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { createPageUrl } from "@/utils";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const resumeUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ad8ea8493_CG_RESUME.pdf";

  return (
    <section className="bg-white border-b border-gray-100">
      <style>{`
        @keyframes rock {
          0%, 100% { transform: rotate(0deg) translateY(0px); }
          25% { transform: rotate(-2deg) translateY(-2px); }
          75% { transform: rotate(2deg) translateY(-2px); }
        }
        
        .rock-animation {
          animation: rock 2s ease-in-out infinite;
        }
        
        .rock-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Profile Image */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/535e8877e_IMG_5407.jpg"
                  alt="Clifford Goertemiller"
                  className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                Clifford Goertemiller
              </h1>
              <p className="text-2xl font-medium text-red-700 mb-6">PhD Candidate | Mechanical Engineer</p>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed text-justify">
                Passionate mechanical engineer with expertise in design, development, installation, and troubleshooting of combustion equipment for alternative fuels and hydrocarbons. Specialist experience with innovative application of optical diagnostics, emissions measurement and geometry optimization to overcome stabilization and power density challenges associated with use of less reactive and calorically poor alternative fuels.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 bg-red-700 hover:bg-red-800 flex items-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Download Resume</span>
                  </Button>
                </a>
                <Link to={createPageUrl("portfolio")}>
                  <Button variant="outline" className="rock-animation flex items-center space-x-2 text-purple-600 border-purple-600 border-2 hover:bg-purple-50 hover:text-purple-700">
                    <ExternalLink className="w-4 h-4" />
                    <span>View Portfolio</span>
                  </Button>
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <Card className="border-gray-200 bg-white">
              <CardContent className="p-6 ">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-red-700" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Email</div>
                      <div className="font-medium text-gray-900">Goert023@umn.edu</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-green-700" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Phone</div>
                      <div className="font-medium text-gray-900">(937) 422-5411</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-purple-700" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Location</div>
                      <div className="font-medium text-gray-900">Saint Paul, MN</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}