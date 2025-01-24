import React, { useState } from "react";
// import { FaArrowLeft } from "react-icons/fa"; // Importing a back arrow icon

const VideoSection = () => {
  const [selectedSection, setSelectedSection] = useState(null); // Track the current selected section

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

  const handleSectionSelect = (section) => {
    setSelectedSection(section); // Update the current section
  };

  // const goBack = () => {
  //   setSelectedSection(null); // Reset the selected section
  // };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Go Back Button
      {selectedSection && (
        <button
          className="flex items-center text-blue-600 mb-6"
          onClick={goBack}
        >
          <FaArrowLeft className="mr-2" /> Go Back
        </button>
      )} */}

      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Learn with Us</h1>

      {/* Section Buttons */}
      {!selectedSection && (
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.keys(sections).map((section) => (
            <button
              key={section}
              className="px-6 py-2 rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-600"
              onClick={() => handleSectionSelect(section)}
            >
              {section}
            </button>
          ))}
        </div>
      )}

      {/* Video List */}
      {selectedSection && (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Videos in {selectedSection}
          </h2>
          <ul className="space-y-4">
            {sections[selectedSection].map((video, index) => (
              <li key={index}>
                {/* Embed video in a smaller iframe */}
                <div className="mb-4">
                  <iframe
                    src={video.url}
                    title={video.title}
                    width="100%" // Adjusted width
                    height="100%" // Adjusted height
                    // frameBorder="0"
                    allowFullScreen
                    className="rounded-lg border"
                  ></iframe>
                </div>
                <p className="text-blue-600">{video.title}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default VideoSection;
