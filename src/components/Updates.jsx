import React, { useState, useEffect } from "react";
import gsap from "gsap";

const Updates = () => {
  const [activeTab, setActiveTab] = useState(0);

  const socialLinks = [
    {
      name: "Youtube",
      icon: "ri-youtube-fill",
      color: "bg-red-600",
      links: [
        { name: "Channel 1", url: "https://www.youtube.com/@RockstarGames" },
        { name: "Channel 2", url: "https://www.youtube.com/@PlayStation" },
        { name: "Channel 3", url: "https://www.youtube.com/@GTA6Videos_" },
      ],
    },
    {
      name: "Twitter",
      icon: "ri-twitter-fill",
      color: "bg-blue-500",
      links: [
        { name: "Profile 1", url: "https://x.com/GTA6Newswire" },
        { name: "Profile 2", url: "https://x.com/GTASeries" },
        { name: "Profile 3", url: "https://x.com/RockstarGames" },
      ],
    },
    {
      name: "Reddit",
      icon: "ri-reddit-fill",
      color: "bg-orange-500",
      links: [
        { name: "Channel 1", url: "https://www.reddit.com/r/GTA6/" },
        { name: "Channel 2", url: "https://www.reddit.com/r/GTA_6__/" },
        { name: "Channel 3", url: "https://www.reddit.com/r/GTA/" },
      ],
    },
  ];

  useEffect(() => {
  
    gsap.fromTo(
      ".updates-header",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
    );
    gsap.fromTo(
      ".updates-description",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, delay: 0.3, ease: "power3.out" }
    );
    gsap.fromTo(
      ".social-icons",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, delay: 0.5, ease: "elastic.out(1, 0.5)" }
    );
  }, []);

  useEffect(() => {
    // Animate links container when tab changes
    gsap.fromTo(
      ".social-links-container",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
  }, [activeTab]);

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-black py-20 md:py-28">
      <div className="container mx-auto px-4 text-center">
        <h2 className="updates-header text-6xl md:text-8xl text-white font-bold mb-8">
          Updates
        </h2>
        <p className="updates-description text-1xl md:text-3xl text-gray-300 mb-10">
          Stay updated with sneak peeks and leaks! Check out these social handles.
        </p>
        {/* Social Media Icons */}
        <div className="social-icons flex flex-wrap justify-center gap-16 mb-16">
          {socialLinks.map((platform, index) => (
            <button
              key={index}
              className={`group relative flex flex-col items-center transition-transform duration-300 hover:scale-125 ${
                activeTab === index ? "scale-125" : ""
              }`}
              onClick={() => setActiveTab(index)}
              aria-label={`View ${platform.name} links`}
            >
              <div
                className={`w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center ${
                  activeTab === index ? platform.color : "bg-gray-800"
                } transition-colors duration-300 group-hover:${platform.color}`}
              >
                <i
                  className={`${platform.icon} text-5xl md:text-6xl text-white`}
                ></i>
              </div>
              <span className="mt-4 text-xl md:text-2xl text-white">
                {platform.name}
              </span>
            </button>
          ))}
        </div>
        {/* Social Media Links */}
        <div className="social-links-container bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-xl p-8 md:p-10 shadow-xl border border-gray-800">
          <h3 className="text-4xl md:text-5xl text-white mb-8 flex items-center justify-center">
            <i
              className={`${socialLinks[activeTab].icon} text-primary mr-4`}
            ></i>
            {socialLinks[activeTab].name} Channels
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {socialLinks[activeTab].links.map((link, linkIndex) => (
              <a
                key={linkIndex}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-black bg-opacity-50 rounded-lg p-5 flex items-center transition-all duration-300 hover:bg-primary hover:bg-opacity-20 border border-transparent hover:border-primary"
              >
                <div className="w-12 h-12 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mr-4 group-hover:bg-opacity-30 transition-all duration-300">
                  <i className="ri-link text-10xl text-primary"></i>
                </div>
                <span className="text-xl text-white group-hover:text-primary transition-colors duration-300">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Updates;