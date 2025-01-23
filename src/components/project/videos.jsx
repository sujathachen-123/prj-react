import React, { useState } from "react";

const VideoSection = () => {
  // Sections with related videos
  const sections = {
    Python: [
      { title: "Python Basics", url: "https://drive.google.com/uc?export=download&id=FILE_ID1" },
      { title: "Advanced Python", url: "https://drive.google.com/uc?export=download&id=FILE_ID2" },
    ],
    Java: [
      { title: "Java intoduction", url:" https://drive.google.com/file/d/1QGC7Zh5Ua-Ud48yJoJ3t4FZzLYtPg-CU/preview" },
      { title: "Java Developing kit setup", url: "https://drive.google.com/file/d/1a4I9JziAwgQftjlzmhKHCriROD4Z5Rw_/view?usp=sharing" },
      { title: "First Code in java", url: "https://drive.google.com/file/d/1x0tUN8A-NbgAvA0odblDQRIpMAtzK5wp/preview" },
      { title: "How Java Works", url: "https://drive.google.com/uc?export=download&id=1VTPATXJjS4Xzq2gH5A6nifh3edRk903b" },
      { title: "Variables in java", url: "https://drive.google.com/uc?export=download&id=1a4I9JziAwgQftjlzmhKHCriROD4Z5Rw_" },
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
  const [selectedVideo, setSelectedVideo] = useState(null); // Current video

  const handleSectionSelect = (section) => {
    setSelectedSection(section);
    setSelectedVideo(null); // Reset video selection
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Course Videos</h1>

      {/* Section Buttons */}
      <div className="flex space-x-4 mb-6">
        {Object.keys(sections).map((section) => (
          <button
            key={section}
            className={`px-4 py-2 rounded-lg ${
              selectedSection === section ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
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

      {/* Video Player (iframe) */}
      {selectedVideo && (
         <div>
         <h3 className="text-lg font-semibold mb-2">Now Playing: {selectedVideo.title}</h3>
         <iframe
           src={`https://drive.google.com/file/d/${selectedVideo.url.split('/d/')[1].split('/')[0]}/preview?autoplay=1`}
           width="600"
           height="400"
           allow="autoplay; fullscreen" // This enables fullscreen and autoplay on the iframe
           className="border rounded-lg"
         ></iframe>
       </div>
      )}
    </div>
  );
};

export default VideoSection;
