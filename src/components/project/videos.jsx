import React, { useState } from "react";

const VideoSection = () => {
  // Sections with related videos
  const sections = {
    Python: [
      { title: "Python Basics", url: "https://drive.google.com/uc?export=download&id=FILE_ID1" },
      { title: "Advanced Python", url: "https://drive.google.com/uc?export=download&id=FILE_ID2" },
    ],
    Java: [
      { title: "Java Introduction", url: "https://drive.google.com/file/d/1QGC7Zh5Ua-Ud48yJoJ3t4FZzLYtPg-CU/preview" },
      { title: "Java Development Kit Setup", url: "https://drive.google.com/file/d/1a4I9JziAwgQftjlzmhKHCriROD4Z5Rw_/preview" },
      { title: "First Code in Java", url: "https://drive.google.com/file/d/1x0tUN8A-NbgAvA0odblDQRIpMAtzK5wp/preview" },
      { title: "How Java Works", url: "https://drive.google.com/file/d/1VTPATXJjS4Xzq2gH5A6nifh3edRk903b/preview" },
      { title: "Variables in Java", url: "https://drive.google.com/file/d/1a4I9JziAwgQftjlzmhKHCriROD4Z5Rw_/preview" },
    ],
    CSS: [
      { title: "CSS Fundamentals", url: "https://drive.google.com/uc?export=download&id=FILE_ID5" },
      { title: "Advanced CSS Techniques", url: "https://drive.google.com/uc?export=download&id=FILE_ID6" },
    ],
    PHP: [
      { title: "Getting Started with PHP", url: "https://drive.google.com/uc?export=download&id=FILE_ID7" },
      { title: "PHP for Web Development", url: "https://drive.google.com/uc?export=download&id=FILE_ID8" },
    ],
    HTML: [
      { title: "HTML Basics", url: "https://drive.google.com/uc?export=download&id=FILE_ID9" },
      { title: "HTML5 Features", url: "https://drive.google.com/uc?export=download&id=FILE_ID10" },
    ],
    JavaScript: [
      { title: "JavaScript Essentials", url: "https://drive.google.com/uc?export=download&id=FILE_ID11" },
      { title: "Advanced JavaScript", url: "https://drive.google.com/uc?export=download&id=FILE_ID12" },
    ],
  };

  const [selectedSection, setSelectedSection] = useState(null); // Current section

  const handleSectionSelect = (section) => {
    setSelectedSection(section);
  };

  const handleVideoSelect = (video) => {
    // Open video URL in a new tab
    window.open(video.url, "_blank");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Course Videos</h1>

      {/* Section Buttons */}
      <div className="flex flex-wrap gap-4 mb-6">
        {Object.keys(sections).map((section) => (
          <button
            key={section}
            className={`px-4 py-2 rounded-lg ${selectedSection === section ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            onClick={() => handleSectionSelect(section)}
          >
            {section}
          </button>
        ))}
      </div>

      {/* Video List */}
      {selectedSection && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Videos in {selectedSection}</h2>
          <ul className="space-y-2">
            {sections[selectedSection].map((video, index) => (
              <li key={index}>
                <button
                  className="text-blue-600 hover:underline"
                  onClick={() => handleVideoSelect(video)}
                >
                  {video.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default VideoSection;
