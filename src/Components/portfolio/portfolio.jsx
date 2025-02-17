import React from 'react';
import { ArrowRight, Mail, Copy, FileText } from 'lucide-react';

const Portfolio = () => {
  const companies = [
    { name: "National Bank", logo: "/api/placeholder/120/40" },
    { name: "Mattered", logo: "/api/placeholder/120/40" },
    { name: "Adobe", logo: "/api/placeholder/120/40" },
    { name: "Academy", logo: "/api/placeholder/120/40" },
  ];

  const services = [
    {
      title: "UX & UI",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M9 12h6" stroke="currentColor" strokeWidth="2"/>
      </svg>,
      description: "Designing interfaces that are intuitive, efficient, and enjoyable to use"
    },
    {
      title: "Web & Mobile App",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 18h.01" stroke="currentColor" strokeWidth="2"/>
      </svg>,
      description: "Transforming ideas into exceptional web and mobile app experiences"
    },
    {
      title: "Design & Creative",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2"/>
      </svg>,
      description: "Crafting visually stunning designs that connect with your audience"
    },
    {
      title: "Development",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="currentColor" strokeWidth="2"/>
      </svg>,
      description: "Bringing your vision to life with the latest technology and development tools"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="w-full px-8 py-4 bg-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-sm text-gray-600">kenzryvxl@gmail.com</div>
          <div className="flex gap-4">
            <button className="px-4 py-2 text-sm bg-gray-100 rounded-full flex items-center gap-2">
              <Copy size={16} />
              Copy
            </button>
            <button className="px-4 py-2 text-sm bg-gray-100 rounded-full flex items-center gap-2">
              <FileText size={16} />
              CV
            </button>
          </div>
          <div className="flex gap-4 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">LinkedIn</a>
            <a href="#" className="hover:text-gray-900">Dribbble</a>
            <a href="#" className="hover:text-gray-900">Instagram</a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 space-y-16">
            {/* Hero Section */}
            <div className="space-y-8">
              <div className="relative w-24 h-24">
                <img
                  src="https://img.freepik.com/free-photo/portrait-young-woman-with-natural-make-up_23-2149084942.jpg"
                  alt="Profile"
                  className="rounded-full"
                />
                <div className="absolute -right-2 -top-2 bg-white px-2 py-1 rounded-full text-sm">
                  Kenzie Shrook
                </div>
              </div>
              
              <h1 className="text-4xl font-semibold">
                Building digital<br />
                products, brands, and<br />
                experience.
              </h1>

              <button className="px-6 py-3 bg-black text-white rounded-full flex items-center gap-2">
                Latest Work
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Companies */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {companies.map((company, index) => (
                <img
                  key={index}
                  src={company.logo}
                  alt={company.name}
                  className="h-8 object-contain"
                />
              ))}
            </div>

            {/* Services Section */}
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold">
                Collaborate with brands and agencies<br />
                to create impactful results.
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="space-y-4">
                    <div className="text-gray-800">
                      {service.icon}
                    </div>
                    <h3 className="font-medium">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Responsive Preview */}
          <div className="w-full lg:w-1/2 bg-white rounded-3xl p-8 shadow-sm">
            <div className="aspect-[9/16] bg-gray-100 rounded-2xl overflow-hidden">
              {/* Mobile Preview Content */}
              <div className="p-6 space-y-8">
                <div className="flex items-center gap-4">
                  <img
                    src="/api/placeholder/48/48"
                    alt="Profile"
                    className="rounded-full w-12 h-12"
                  />
                  <div className="text-sm">Kenzie Shrook</div>
                </div>
                <h2 className="text-xl font-medium">
                  Building digital products, brands, and experience.
                </h2>
                <button className="px-4 py-2 bg-black text-white text-sm rounded-full">
                  Latest Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;