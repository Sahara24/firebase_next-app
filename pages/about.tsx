import React from "react";
import toast from "react-hot-toast";

const About = () => {
  return (
    <div className="aboutPage">
      <button
        onClick={() => {
          toast.success("Toaster working");
        }}
      >
        Toast
      </button>
    </div>
  );
};
export default About;
