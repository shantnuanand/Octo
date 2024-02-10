import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 mx-auto h-auto flex flex-col items-center justify-center">
      <h1 className="text-6xl text-white font-bold m-16">About Us</h1>

      <div className="flex flex-wrap justify-center">

      {/* Creative Lead */}
      <div className="bg-white p-8 m-4 rounded-md shadow-md w-72 flex flex-col items-center justify-center">
          <img
            src="https://img.freepik.com/free-photo/man-white_1368-3544.jpg"
            alt="Creative Lead Profile"
            className="rounded-full h-32 w-32 mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Our Creative Lead</h2>
          <p className="text-center">
            Vestibulum varius felis id fermentum posuere. Quisque hendrerit
            purus eget justo cursus, nec ultrices sem aliquet. Ut suscipit augue
            nec erat imperdiet, vel blandit libero varius.
          </p>
        </div>

        
        <div className="bg-white p-8 m-4 rounded-md shadow-md w-72 flex flex-col items-center justify-center">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/031/569/297/small/a-positive-young-man-with-a-beard-wearing-a-casual-sweater-and-glasses-png.png"
            alt="Director Profile"
            className="rounded-full h-32 w-32 mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Meet Our Director</h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            nisi vel efficitur euismod. Suspendisse potenti. Duis non ex sit
            amet nisl tincidunt tincidunt. Donec id dui ac ex vehicula mattis.
          </p>
        </div>

        

        {/* Technical Guru */}
        <div className="bg-white p-8 m-4 rounded-md shadow-md w-72 flex flex-col items-center justify-center">
          <img
            src="https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_10094380.png"
            alt="Technical Guru Profile"
            className="rounded-full h-32 w-32 mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Technical Guru</h2>
          <p className="text-center">
            Proin imperdiet, odio vel ultricies congue, orci ligula rhoncus ex,
            vitae tristique mauris urna ac augue. Nam euismod, urna ac sagittis
            tristique, orci mi aliquet nisi, sit amet posuere risus metus nec
            libero.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
