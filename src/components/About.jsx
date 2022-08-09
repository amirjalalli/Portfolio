import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20 text-center">
          Throughout my career as a front-end developer, I've emphasized the
          importance of scalable and well-documented code. I enjoy working
          collaboratively but can also run with projects on my own. Excited
          about the prospect of joining a product-driven company like Acme Corp.
        </p>

        <br />

        <p className="text-xl text-center">
          Experienced front-end developer who is comfortable working with
          JavaScript, HTML/CSS to deliver exceptional customer experiences.
          Looking for an opportunity to work at a company like Acme Corp with a
          positive social mission to democratize online payments
        </p>
      </div>
    </div>
  );
};

export default About;
