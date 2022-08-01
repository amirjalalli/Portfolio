import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-8 max-auto flex flex-col justify-center w-full h-full md:pl-20">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          quaerat optio aut fugit sunt consequuntur voluptate modi impedit qui
          molestias quas et corrupti debitis sit, illum accusantium aliquam
          nihil illo? Inventore atque sit officia nemo quae
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          illum culpa ipsum rerum excepturi! Omnis ipsum id veritatis molestiae
          accusantium consequatur dolorem esse quia doloremque, nobis reiciendis
          repellat illum sapiente recusandae assumenda iure tenetur quis error
          molestias culpa fugit eos illo? Sint quia veritatis placeat accusamus,
          accusantium voluptatem consequuntur molestiae?
        </p>
      </div>
    </div>
  );
};

export default About;
