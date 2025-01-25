import React, { useState } from "react";

const VideoSection = () => {
  const [selectedCourse, setSelectedCourse] = useState(null); // Track the current selected course
  const [comments, setComments] = useState([]); // Track the comments for the course videos
  const [newComment, setNewComment] = useState(""); // Track the new comment being typed

  const courses = {
    Python: [
      {
        title: "Python Basics",
        url: "https://drive.google.com/uc?export=download&id=FILE_ID1",
      },
      {
        title: "Advanced Python",
        url: "https://drive.google.com/uc?export=download&id=FILE_ID2",
      },
    ],
    Java: [
      {
        title: "Java Introduction",
        url: "https://drive.google.com/file/d/1QGC7Zh5Ua-Ud48yJoJ3t4FZzLYtPg-CU/preview",
      },
      {
        title: "Java Development Kit Setup",
        url: "https://drive.google.com/file/d/1a4I9JziAwgQftjlzmhKHCriROD4Z5Rw_/preview",
      },
      {
        title: "First Code in Java",
        url: "https://drive.google.com/file/d/1x0tUN8A-NbgAvA0odblDQRIpMAtzK5wp/preview",
      },
      {
        title: "How Java Works",
        url: "https://drive.google.com/file/d/1VTPATXJjS4Xzq2gH5A6nifh3edRk903b/preview",
      },
      {
        title: "Variables in Java",
        url: "https://drive.google.com/file/d/1a4I9JziAwgQftjlzmhKHCriROD4Z5Rw_/preview",
      },
    ],
    CSS: [
      {
        title: "CSS Fundamentals",
        url: "https://drive.google.com/uc?export=download&id=FILE_ID5",
      },
      {
        title: "Advanced CSS Techniques",
        url: "https://drive.google.com/uc?export=download&id=FILE_ID6",
      },
    ],
    PHP: [
      {
        title: "Getting Started with PHP",
        url: "https://drive.google.com/uc?export=download&id=FILE_ID7",
      },
      {
        title: "PHP for Web Development",
        url: "https://drive.google.com/uc?export=download&id=FILE_ID8",
      },
    ],
    HTML: [
      {
        title: "HTML Basics",
        url: "https://drive.google.com/uc?export=download&id=FILE_ID9",
      },
      {
        title: "HTML5 Features",
        url: "https://drive.google.com/uc?export=download&id=FILE_ID10",
      },
    ],
    JavaScript: [
      {
        title: "JavaScript Essentials",
        url: "https://drive.google.com/uc?export=download&id=FILE_ID11",
      },
      {
        title: "Advanced JavaScript",
        url: "https://drive.google.com/uc?export=download&id=FILE_ID12",
      },
    ],
  };

  // Handle course selection
  const handleCourseSelect = (course) => {
    setSelectedCourse(course); // Update the current course
  };

  // Handle new comment submission
  const handleCommentSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    if (newComment.trim()) {
      setComments([...comments, newComment]); // Add new comment to the list
      setNewComment(""); // Clear the input field
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Learn with Us
      </h1>

      {/* Course Selection */}
      {!selectedCourse && (
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.keys(courses).map((course) => (
            <button
              key={course}
              className="px-6 py-2 rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-600"
              onClick={() => handleCourseSelect(course)} // Select course on click
            >
              {course}
            </button>
          ))}
        </div>
      )}

      {/* Video List */}
      {selectedCourse && (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Videos in {selectedCourse}
          </h2>
          <ul className="space-y-4">
            {courses[selectedCourse].map((video, index) => (
              <li key={index}>
                {/* Embed video in iframe */}
                <div className="mb-4">
                  <iframe
                    src={video.url}
                    title={video.title} // Title for accessibility
                    width="100%" // Full width of container
                    height="315px" // Fixed height for consistency
                    frameBorder="0"
                    allowFullScreen
                    className="rounded-lg border"
                  ></iframe>
                </div>
                {/* Video title */}
                <p className="text-blue-600">{video.title}</p>
              </li>
            ))}
          </ul>

          {/* Comment Section */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Comments</h3>

            {/* Comment input form */}
            <form onSubmit={handleCommentSubmit} className="mb-6">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)} // Update comment as user types
                placeholder="Share your thoughts..."
                className="w-full p-4 rounded-lg border border-gray-300"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="mt-2 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Post Comment
              </button>
            </form>

            {/* Display existing comments */}
            <div className="space-y-4">
              {comments.map((comment, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg">
                  <p>{comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoSection;
