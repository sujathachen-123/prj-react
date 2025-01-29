import React, { useState,useRef } from "react";
import Code from "../images/code.jpg"; 

const VideoSection = () => {
  const [selectedCourse, setSelectedCourse] = useState(null); // Track the current selected course
  const [comments, setComments] = useState([]); // Track the comments for the course videos
  const [newComment, setNewComment] = useState(""); // Track the new comment being typed
  const videoSectionRef = useRef(null); // Define useRef

  const courses = {
    Python: [
      { title: "Python Basics",url: "https://drive.google.com/uc?export=download&id=FILE_ID1", },
      { title: "Advanced Python", url: "https://drive.google.com/uc?export=download&id=FILE_ID2",},
      { title: "Advanced Python", url: "https://drive.google.com/uc?export=download&id=FILE_ID2",},
      { title: "Advanced Python", url: "https://drive.google.com/uc?export=download&id=FILE_ID2",},
      { title: "Advanced Python", url: "https://drive.google.com/uc?export=download&id=FILE_ID2",},
      { title: "Advanced Python", url: "https://drive.google.com/uc?export=download&id=FILE_ID2",},
      { title: "Advanced Python", url: "https://drive.google.com/uc?export=download&id=FILE_ID2",},
      { title: "Advanced Python", url: "https://drive.google.com/uc?export=download&id=FILE_ID2",},
      { title: "Advanced Python", url: "https://drive.google.com/uc?export=download&id=FILE_ID2",},
      { title: "Advanced Python", url: "https://drive.google.com/uc?export=download&id=FILE_ID2",},
    ],
    Java: [
      { title: "Java Introduction",url: "https://drive.google.com/file/d/1QGC7Zh5Ua-Ud48yJoJ3t4FZzLYtPg-CU/preview",},
      { title: "Java Development Kit Setup", url: "https://drive.google.com/file/d/1a4I9JziAwgQftjlzmhKHCriROD4Z5Rw_/preview",},
      { title: "First Code in Java", url: "https://drive.google.com/file/d/1x0tUN8A-NbgAvA0odblDQRIpMAtzK5wp/preview",},
      { title: "How Java Works", url: "https://drive.google.com/file/d/1VTPATXJjS4Xzq2gH5A6nifh3edRk903b/preview", },
      { title: "Variables in Java", url: "https://drive.google.com/file/d/1a4I9JziAwgQftjlzmhKHCriROD4Z5Rw_/preview",},
    ],
    CSS: [
      {title: "CSS Fundamentals", url: "https://drive.google.com/uc?export=download&id=FILE_ID5",},
      { title: "Advanced CSS Techniques", url: "https://drive.google.com/uc?export=download&id=FILE_ID6",},
      { title: "Advanced CSS Techniques", url: "https://drive.google.com/uc?export=download&id=FILE_ID6",},
      { title: "Advanced CSS Techniques", url: "https://drive.google.com/uc?export=download&id=FILE_ID6",},
      { title: "Advanced CSS Techniques", url: "https://drive.google.com/uc?export=download&id=FILE_ID6",},
      { title: "Advanced CSS Techniques", url: "https://drive.google.com/uc?export=download&id=FILE_ID6",},
      { title: "Advanced CSS Techniques", url: "https://drive.google.com/uc?export=download&id=FILE_ID6",},
      { title: "Advanced CSS Techniques", url: "https://drive.google.com/uc?export=download&id=FILE_ID6",},
      { title: "Advanced CSS Techniques", url: "https://drive.google.com/uc?export=download&id=FILE_ID6",},
      { title: "Advanced CSS Techniques", url: "https://drive.google.com/uc?export=download&id=FILE_ID6",},
    ],
    PHP: [
      {title: "Getting Started with PHP",url: "https://drive.google.com/uc?export=download&id=FILE_ID7", },
      { title: "PHP for Web Development", url: "https://drive.google.com/uc?export=download&id=FILE_ID8",},
    ],
    HTML: [
      { title: "HTML Basics",url: "https://drive.google.com/uc?export=download&id=FILE_ID9", },
      { title: "HTML5 Features",url: "https://drive.google.com/uc?export=download&id=FILE_ID10",},
    ],
    JavaScript: [
      {title: "JavaScript Essentials",url: "https://drive.google.com/uc?export=download&id=FILE_ID11", },
      { title: "Advanced JavaScript",url: "https://drive.google.com/uc?export=download&id=FILE_ID12", },
    ],
    Angular: [
      {title: "Angular Essentials",url: "https://drive.google.com/uc?export=download&id=FILE_ID11", },
      { title: "Advanced angular",url: "https://drive.google.com/uc?export=download&id=FILE_ID12", },
    ],
    React: [
      {title: "React Essentials",url: "https://drive.google.com/uc?export=download&id=FILE_ID11", },
      { title: "Advanced React",url: "https://drive.google.com/uc?export=download&id=FILE_ID12", },
    ],
    Sql: [
      {title: "Sql Essentials",url: "https://drive.google.com/uc?export=download&id=FILE_ID11", },
      { title: "Advanced Sql",url: "https://drive.google.com/uc?export=download&id=FILE_ID12", },
    ],
  };

  const handleCourseSelect = (course) => {
    setSelectedCourse(course); // Update the current course
    setTimeout(() => {
      if (videoSectionRef.current) {
        videoSectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
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
    <div className="relative min-h-screen">
      <div className="relative w-full h-screen">
        <img src={Code} alt="Learning Banner" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Learn with Us</h1>
          {!selectedCourse && (
            <div className="flex flex-wrap justify-center gap-4">
              {Object.keys(courses).map((course) => (
                <button
                  key={course}
                  className="px-6 py-2 rounded-lg shadow-md bg-blue-500 hover:bg-blue-600"
                  onClick={() => handleCourseSelect(course)}
                >
                  {course}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      {selectedCourse && (
        <div ref={videoSectionRef} className="p-6" mt-6>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Videos in {selectedCourse}</h2>
          <ul className="space-y-4">
            {courses[selectedCourse].map((video, index) => (
              <li key={index}>
                <div className="mb-4">
                  <iframe
                    src={video.url}
                    title={video.title}
                    width="100%"
                    height="315px"
                    frameBorder="0"
                    allowFullScreen
                    className="rounded-lg border"
                  ></iframe>
                </div>
                <p className="text-blue-600">{video.title}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Comments</h3>
            <form onSubmit={handleCommentSubmit} className="mb-6">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
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
