

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { User, Briefcase, Menu, X, ArrowUp, ExternalLink, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const resumeUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ad8ea8493_CG_RESUME.pdf";

  const navigationItems = [
  {
    title: "Resume",
    url: createPageUrl("resume"),
    icon: User
  },
  {
    title: "Portfolio",
    url: createPageUrl("portfolio"),
    icon: Briefcase
  }];

  useEffect(() => {
    document.title = "About - Clifford Goertemiller";

    const favicon = document.querySelector("link[rel*='icon']") || document.createElement('link');
    favicon.type = 'image/png';
    favicon.rel = 'shortcut icon';
    favicon.href = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/0ce4a9cb1_favicon-16x16.png';
    document.getElementsByTagName('head')[0].appendChild(favicon);

    const appleTouchIcon = document.createElement('link');
    appleTouchIcon.rel = 'apple-touch-icon';
    appleTouchIcon.sizes = '180x180';
    appleTouchIcon.href = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/79a1dbe8b_apple-touch-icon.png';
    document.getElementsByTagName('head')[0].appendChild(appleTouchIcon);

    const favicon32 = document.createElement('link');
    favicon32.rel = 'icon';
    favicon32.type = 'image/png';
    favicon32.sizes = '32x32';
    favicon32.href = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/25a0b9617_favicon-32x32.png';
    document.getElementsByTagName('head')[0].appendChild(favicon32);

    const androidIcon192 = document.createElement('link');
    androidIcon192.rel = 'icon';
    androidIcon192.type = 'image/png';
    androidIcon192.sizes = '192x192';
    androidIcon192.href = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/0f7b4fd8e_android-chrome-192x192.png';
    document.getElementsByTagName('head')[0].appendChild(androidIcon192);

    const androidIcon512 = document.createElement('link');
    androidIcon512.rel = 'icon';
    androidIcon512.type = 'image/png';
    androidIcon512.sizes = '512x512';
    androidIcon512.href = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/66ab59a06_android-chrome-512x512.png';
    document.getElementsByTagName('head')[0].appendChild(androidIcon512);

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="min-h-screen bg-slate-50" style={{ fontFamily: '"M PLUS Rounded 1c", sans-serif' }}>
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
        .animated-designer-link {
          position: relative;
          border: 1px solid #0369a1; /* Changed from transparent to #0369a1 */
        }
        .animated-designer-link::before {
          content: '';
          position: absolute;
          inset: -1px; /* Adjust as needed for border thickness */
          border-radius: inherit;
          border: 2px solid #38bdf8; /* Blue color for the animated border */
          clip-path: polygon(0% 100%, 0% 100%, 0% 100%, 0% 100%, 0% 100%, 0% 100%);
          transition: clip-path 0.4s ease-in-out;
          pointer-events: none; /* Allows clicks to pass through the pseudo-element */
        }
        .animated-designer-link:hover::before {
          /* Animates the clip-path to reveal the border */
          clip-path: polygon(0% 100%, 0% 0%, 100% 0%, 100% 100%, 0% 100%, 1px 100%);
        }
        .nav-toggle {
          position: relative;
          background: rgba(243, 244, 246, 0.8);
          border-radius: 50px;
          padding: 4px;
          backdrop-filter: blur(10px);
        }
        .nav-toggle::before {
          content: '';
          position: absolute;
          top: 4px;
          left: 4px;
          width: calc(50% - 4px);
          height: calc(100% - 8px);
          background: white;
          border-radius: 50px;
          transition: transform 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        .nav-toggle.portfolio::before {
          transform: translateX(100%);
        }
      `}</style>
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/80 ">
        <div className="max-w-6xl mx-auto px-6 py-2">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to={createPageUrl("resume")} className="flex items-center space-x-2 group">
              <div className="w-8 h-8 rounded-lg overflow-hidden transform group-hover:scale-105 transition-transform duration-200">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/79a1dbe8b_apple-touch-icon.png"
                  alt="Clifford Goertemiller"
                  className="w-full h-full object-cover" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-gray-900">
                  Clifford Goertemiller
                </h1>
                <p className="text-xs text-gray-500">
                  Mechanical Engineer
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center">
              <div className={`nav-toggle flex ${location.pathname === createPageUrl("portfolio") ? 'portfolio' : ''}`}>
                <Link
                  to={createPageUrl("resume")}
                  className={`flex-1 flex justify-center items-center space-x-2 px-6 py-2 rounded-full font-medium transition-all duration-300 relative z-10 ${
                  location.pathname === createPageUrl("resume") ?
                  "text-red-700" :
                  "text-gray-600 hover:text-gray-900"}`
                  }>
                  <User className="w-4 h-4" />
                  <span>Resume</span>
                </Link>
                <Link
                  to={createPageUrl("portfolio")}
                  className={`flex-1 flex justify-center items-center space-x-2 px-6 py-2 rounded-full font-medium transition-all duration-300 relative z-10 ${
                  location.pathname === createPageUrl("portfolio") ?
                  "text-red-700" :
                  "text-gray-600 hover:text-gray-900"}`
                  }>
                  <Briefcase className="w-4 h-4" />
                  <span>Portfolio</span>
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-600 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen &&
        <div className="md:hidden border-t bg-white border-gray-100">
            <nav className="max-w-6xl mx-auto px-6 py-2 space-y-1">
              {navigationItems.map((item) =>
            <Link
              key={item.title}
              to={item.url}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center space-x-3 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
              location.pathname === item.url ?
              "bg-red-50 text-red-700" :
              "text-gray-600 hover:bg-gray-50"}`
              }>
                  <item.icon className="w-5 h-5" />
                  <span>{item.title}</span>
                </Link>
            )}
            </nav>
          </div>
        }
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-100 border-t border-slate-200 mt-20 h-35 relative">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Action Buttons - Left Side */}
            {currentPageName === 'resume' &&
            <div className="flex flex-col gap-3 order-2 md:order-1">
                <Link
                to={createPageUrl("portfolio")}
                className="rock-animation flex items-center justify-center space-x-2 text-purple-600 border-purple-600 border-2 hover:bg-purple-50 hover:text-purple-700 px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 shadow-sm hover:shadow-md whitespace-nowrap">

                  <ExternalLink className="w-4 h-4" />
                  <span>Portfolio</span>
                </Link>
                <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 text-white px-4 py-2 text-sm font-medium rounded-full border border-purple-600 hover:bg-purple-700 transition-all duration-300 whitespace-nowrap shadow-sm hover:shadow-md flex items-center justify-center space-x-2">

                  <Download className="w-4 h-4" />
                  <span>Resume</span>
                </a>
              </div>
            }

            {/* Action Buttons for Portfolio Page - Left Side */}
            {currentPageName === 'portfolio' &&
            <div className="flex flex-col gap-3 order-2 md:order-1">
                <Link
                to={createPageUrl("resume")}
                className="flex items-center justify-center space-x-2 text-purple-600 border-purple-600 border-2 hover:bg-purple-50 hover:text-purple-700 px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 shadow-sm hover:shadow-md whitespace-nowrap">
                  <User className="w-4 h-4" />
                  <span>View Resume</span>
                </Link>
              </div>
            }

            {/* Center Content */}
            <div className="text-center order-1 md:order-2">
              <h3 className="text-3xl mb-2 font-semibold no-underline capitalize">Clifford Goertemiller</h3>
              <div className="flex justify-center space-x-4">
                <Link to={createPageUrl("resume")} className="text-red-700 hover:text-red-800 font-medium">
                  Resume
                </Link>
                <span className="text-gray-300">•</span>
                <Link to={createPageUrl("portfolio")} className="text-red-700 hover:text-red-800 font-medium">
                  Portfolio
                </Link>
              </div>
            </div>
            
            {/* Designer Credit - Right Side */}
            <div className="order-3">
               <a
                href="https://adipatil.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="animated-designer-link bg-slate-50 text-[#000000] px-4 py-2 text-xs font-medium backdrop-blur-md rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl">
                Designed by Aditya Patil
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop &&
      <Button
        onClick={scrollToTop} className="bg-red-600 text-white text-sm font-medium inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 fixed bottom-12 right-6 h-9 w-9 rounded-full hover:bg-red-800 shadow-lg z-50 transition-opacity duration-300"

        size="icon"
        aria-label="Scroll to top">

          <ArrowUp className="h-6 w-6" />
        </Button>
      }
    </div>);
}
