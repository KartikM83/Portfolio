import React from "react";
import Tech from "./Tech";
import Tech2 from "./Tech2";
import Tech3 from "./Tech3";

// Import images for data
import javaImg from './assets/java.png';
import htmlImg from './assets/html.png';
import cssImg from './assets/css.png';
import jsImg from './assets/javascript.png';
import pythonImg from './assets/python.png';

// Import images for data2
import springImg from './assets/Spring.png';
import reactImg from './assets/react.png';
import mysqlImg from './assets/mysql.png';

// Import images for data3
import postmanImg from './assets/postman.png';
import jdbcImg from './assets/JDBC.png';
import mavenImg from './assets/Maven2.png';
import hibernateImg from './assets/hibernate.png';


function TechStack() {
 const data = [
  { Name: "Java Core", img: javaImg },
  { Name: "HTML", img: htmlImg },
  { Name: "CSS", img: cssImg },
  { Name: "JavaScript", img: jsImg },
  { Name: "Python", img: pythonImg },
];

const data2 = [
  { Name1: "Spring Boot", img1: springImg },
  { Name1: "React", img1: reactImg },
  { Name1: "MYSQL", img1: mysqlImg },
];

const data3 = [
  { Name2: "postman", img2: postmanImg },
  { Name2: "jdbc", img2: jdbcImg },
  { Name2: "maven", img2: mavenImg },
  { Name2: "hibernate", img2: hibernateImg },
  { Name2: "postman", img2: postmanImg },
];

  

  return (
    <div id="techstack" className="w-full h-full text-white bg-zinc-900 pt-[5vw]">
      {/* Header Section */}
      {/* <div className="w-full h-[15vh] md:h-[20vh] lg:h-[25vh] text-white flex justify-top items-center md:items-center flex-col pt-[2vh] px-[6.65vw] ">
        <h2 className="text-[6vw] md:text-[5vw] font-exo font-bold uppercase mb-[0.2vw]">
          Tech Stack
        </h2>
        <div className="w-[45%] h-[2.5px] rounded-full bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 mb-[2vw]"></div>
      </div> */}

<div className="w-full h-[15vh] xxs:h-[18vw] xs:h-[17vw] sm:h-[16vw] md:h-[11vw] xl:h-[8.5vw]  text-white   flex justify-top items-center md:items-center flex-col  pt-[2vh] px-[6.65vw]  " >
                <h2 className="text-[9vw] md:text-[5vw] xl:text-[5vw] font-exo  font-bold uppercase mb-[0.2vw] xxs:text-center xxs:leading-none text-shadow">Tech Stack</h2>
                <div className="w-[45%] h-[2.5px] rounded-full bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 mb-[2vw]"></div>
            </div>

      {/* Main Tech Stack Section */}
      <div className="w-full lg:h-[75vh] md:h-[80vh] h-[85vh] flex flex-col">
        <div className="w-full h-full  flex flex-col justify-center items-center xxs:px-[0vw]px-[14.6vw]">
          {/* Section Title */}
          <div className="xxs:w-[70%] w-full h-[30%]  flex justify-center items-center">
            <h2 className="text-[6vw] xs:text-[25px] sm:text-[25px] md:text-[28px] lg:text-[30px] xl:text-4xl font-exo font-semibold uppercase   xxs:text-center xxs:leading-none">
              Programming Languages
            </h2>
          </div>

          {/* Tech Logos Section */}

          <div className="xxs:w-[87%] xs:w-[87%] sm:w-[87%] md:w-[90%] lg:w-[70%] xl:w-[70%] 2xl:w-[70%] h-[50%] whitespace-nowrap overflow-x-hidden overflow-y-hidden ">
            <div className=" h-[100%] inline-block  py-[3vh] animate-swipe  ">
              {data.map((items, index) => (
                <Tech key={index} values1={items} />
              ))}
            </div>

              <div className=" h-[100%] inline-block  py-[3vh] animate-swipe">
                {data.map((items, index) => (
                  <Tech key={index} values1={items} />
                ))}
              </div>
          </div>
        </div>


        <div className="w-full h-full  flex flex-col justify-center items-center xxs:px-[0vw]px-[14.6vw]">
          {/* Section Title */}
          {/* <div className="xxs:w-[70%] w-full h-[30%]  flex justify-center items-center">
            <h2 className="text-[7vw] xs:text-[25px] sm:text-[25px] md:text-[28px] lg:text-[30px] xl:text-4xl font-exo font-semibold uppercase xxs:text-center xxs:leading-none">
              Framework/libraries/database
            </h2>
          </div> */}

          <div className="xxs:w-[70%] w-full h-[30%]  flex justify-center items-center">
            <h2 className="text-[6vw] xs:text-[25px] sm:text-[25px] md:text-[28px] lg:text-[30px] xl:text-4xl font-exo font-semibold uppercase   xxs:text-center xxs:leading-none">
            Framework/ libraries/ database
            </h2>
          </div>

          {/* Tech Logos Section */}

          <div className="xxs:w-[87%] xs:w-[87%] sm:w-[87%] md:w-[90%] lg:w-[70%] xl:w-[70%] 2xl:w-[70%] h-[50%] whitespace-nowrap overflow-x-hidden overflow-y-hidden">
            <div className=" h-[100%] inline-block  py-[3vh] animate-swipe1  ">
              {data2.map((items, index) => (
                <Tech2 key={index} values2={items} />
              ))}
               {data2.map((items, index) => (
                <Tech2 key={index} values2={items} />
              ))}
            </div>

              <div className=" h-[100%] inline-block  py-[3vh] animate-swipe1">
                {data2.map((items, index) => (
                  <Tech2 key={index} values2={items} />
                ))}
                 {data2.map((items, index) => (
                <Tech2 key={index} values2={items} />
              ))}
              </div>
          </div>
        </div>



        <div className="w-full h-full  flex flex-col justify-center items-center xxs:px-[0vw]px-[14.6vw]">
          {/* Section Title */}
          {/* <div className="w-full h-[30%]  flex justify-center items-center">
            <h2 className="text-[5vw] xs:text-[25px] sm:text-[25px] md:text-[28px] lg:text-[30px] xl:text-4xl font-exo font-semibold uppercase">
              Tools
            </h2>
          </div> */}


        <div className="xxs:w-[70%] w-full h-[30%]  flex justify-center items-center">
            <h2 className="text-[6vw] xs:text-[25px] sm:text-[25px] md:text-[28px] lg:text-[30px] xl:text-4xl font-exo font-semibold uppercase   xxs:text-center xxs:leading-none">
           Tools
            </h2>
          </div>
          {/* Tech Logos Section */}

          <div className="xxs:w-[87%] xs:w-[87%] sm:w-[87%] md:w-[90%] lg:w-[70%] xl:w-[70%] 2xl:w-[70%] h-[50%] whitespace-nowrap overflow-x-hidden overflow-y-hidden">
            <div className=" h-[100%] inline-block  py-[3vh] animate-swipe  ">
              {data3.map((items, index) => (
                <Tech3 key={index} values3={items} />
              ))}
            </div>

              <div className=" h-[100%] inline-block  py-[3vh] animate-swipe">
                {data3.map((items, index) => (
                  <Tech3 key={index} values3={items} />
                ))}
              </div>
          </div>
        </div>

        {/* Additional Sections */}
        {/* <div className="w-full h-full bg-red-500 flex flex-col justify-center items-center"></div>
        <div className="w-full h-full bg-blue-500 flex flex-col justify-center items-center"></div> */}
      </div>
    </div>
  );
}

export default TechStack;
