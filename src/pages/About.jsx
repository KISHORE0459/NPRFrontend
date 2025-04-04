import Nav from "../components/Nav";
import { HiMiniXMark } from "react-icons/hi2";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);
  return (
    <div>
      <Nav />
      <div className="w-full md:w-[80%] flex flex-col gap-10 items-center mx-auto p-5">
        <div className="w-full flex flex-col gap-5" data-aos="fade-up">
          <h2 className="w-full text-center text-xl md:text-4xl text-[#1E40AF]">
            Smart Parking and Payment System
          </h2>
          <h4 className="text-justify">
            The Smart Parking System is an advanced solution designed to enhance
            parking management using automated number plate recognition (ANPR)
            and real-time communication. The system utilizes image processing
            and machine learning to accurately detect vehicle number plates and
            cross-reference them with a centralized MongoDB database.
          </h4>
        </div>
        <div className="w-full flex flex-col gap-3" data-aos="fade-up">
          <h2 className="text-[16px] md:text-2xl font-semibold">
            Tools And Technologies Used :
          </h2>
          <div className="w-full flex flex-row flex-wrap gap-5 md:m-3">
            {ToolsAndTech.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 w-[300px] shadow shadow-gray-400 p-3 rounded-xl bg-gray-100"
              >
                <h2 className=" text-[15px] md:text-xl text-[#21729b]">
                  {tech?.title}
                </h2>
                <div className="flex flex-row gap-4 items-center flex-wrap">
                  {tech?.tools.map((tool, index) => (
                    <div
                      key={index}
                      className="w-fit p-1 border border-[#b8b8b8] shadow-md shadow-gray-300 flex flex-row gap-1 items-center rounded"
                    >
                      <HiMiniXMark className="text-red-400" />
                      <h3>{tool}</h3>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col gap-4" data-aos="fade-up">
          <h2 className="text-[16px] md:text-xl font-semibold">
            Number Plate Recognition Model :
          </h2>
          <div className="w-full flex flex-row flex-wrap gap-4 m-2 justify-start items-start">
            <div className="w-[400px] flex flex-col gap-2">
              <h3 className="text-[18px] text-[#21729b]">
                License Plate Detection
              </h3>
              <h4>
                Identifying the region where the number plate is located using
                object detection techniques (YOLO).
              </h4>
            </div>
            <div className="w-[400px] flex flex-col gap-2">
              <h3 className="text-[18px] text-[#21729b]">
                Character Recognition
              </h3>
              <h4>
                Using Optical Character Recognition (OCR) (e.g., Tesseract OCR,
                CRNN) to decode alphanumeric characters.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ToolsAndTech = [
  {
    title: "Front End",
    tools: [
      "React JS",
      "Tailwind CSS",
      " Material UI",
      "React Query(tanstack Query)",
    ],
  },
  {
    title: "Backend",
    tools: ["Flask", "Python"],
  },
  {
    title: "Number Plate Recognition Model",
    tools: ["YOLO v8", "easy OCR", "pymongo"],
  },
  {
    title: "DataBase",
    tools: ["mongoDB", "MongoDB Atlas"],
  },
];

export default About;
