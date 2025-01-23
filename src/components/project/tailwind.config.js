module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"], // Adjust based on your project structure
    theme: {
      extend: {
        animation: {
          fadeIn: "fadeIn 1s ease-in-out",
          zoomIn: "zoomIn 1s ease-in-out",
        },
        keyframes: {
          fadeIn: {
            "0%": { opacity: 0, transform: "translateY(20px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
          zoomIn: {
            "0%": { transform: "scale(0.8)", opacity: 0 },
            "100%": { transform: "scale(1)", opacity: 1 },
          },
        },
      },
    },
    plugins: [],
  };
  