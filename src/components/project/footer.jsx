import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#333333] py-5 px-10 border-t border-gray-300 font-sans">
      <div className="flex justify-between flex-wrap gap-5">
        {/* Section 1: Links */}
        <div className="flex-1 min-w-[200px]">
          <h4 className="text-2xl text-white mb-2">About</h4>
          <ul className="list-none p-0">
            <li className="mb-2 text-sm text-gray-300 cursor-pointer hover:text-blue-400 transition-colors">About Us</li>
            <li className="mb-2 text-sm text-gray-300 cursor-pointer hover:text-blue-400 transition-colors">Careers</li>
            <li className="mb-2 text-sm text-gray-300 cursor-pointer hover:text-blue-400 transition-colors">Press</li>
            <li className="mb-2 text-sm text-gray-300 cursor-pointer hover:text-blue-400 transition-colors">Blog</li>
          </ul>
        </div>

        <div className="flex-1 min-w-[200px]">
          <h4 className="text-2xl text-white mb-2">Support</h4>
          <ul className="list-none p-0">
            <li className="mb-2 text-sm text-gray-300 cursor-pointer hover:text-blue-400 transition-colors">Help Center</li>
            <li className="mb-2 text-sm text-gray-300 cursor-pointer hover:text-blue-400 transition-colors">Contact Us</li>
            <li className="mb-2 text-sm text-gray-300 cursor-pointer hover:text-blue-400 transition-colors">Refund Policy</li>
            <li className="mb-2 text-sm text-gray-300 cursor-pointer hover:text-blue-400 transition-colors">Terms of Use</li>
          </ul>
        </div>

        <div className="flex-1 min-w-[200px]">
          <h4 className="text-2xl text-white mb-2">Teach</h4>
          <ul className="list-none p-0">
            <li className="mb-2 text-sm text-gray-300 cursor-pointer hover:text-blue-400 transition-colors">Become an Instructor</li>
            <li className="mb-2 text-sm text-gray-300 cursor-pointer hover:text-blue-400 transition-colors">Instructor Guide</li>
            <li className="mb-2 text-sm text-gray-300 cursor-pointer hover:text-blue-400 transition-colors">Affiliate Program</li>
            <li className="mb-2 text-sm text-gray-300 cursor-pointer hover:text-blue-400 transition-colors">Partnerships</li>
          </ul>
        </div>

        {/* Section 2: Social Media */}
        <div className="flex-1 min-w-[200px]">
          <h4 className="text-2xl text-white mb-2">Follow Us</h4>
          <div className="flex gap-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
              className="w-8 cursor-pointer hover:scale-110 transition-transform"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
              alt="Twitter"
              className="w-8 cursor-pointer hover:scale-110 transition-transform"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
              alt="LinkedIn"
              className="w-8 cursor-pointer hover:scale-110 transition-transform"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733590.png"
              alt="Instagram"
              className="w-8 cursor-pointer hover:scale-110 transition-transform"
            />
          </div>
        </div>
      </div>

      {/* Section 3: Copyright */}
      <div className="text-center mt-5 text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Udemy Clone. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
