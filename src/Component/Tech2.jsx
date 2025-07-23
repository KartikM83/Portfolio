import React from "react";

function Tech2({values2}){

    const{Name1 ,img1} =values2;

    return (
    //     <div className="inline-block px-4">
    //     <div className=" HTML w-[100%] px-[2vw] py-[0.7vw] shrink-[0]  rounded-fulls flex justify-start items-center border  rounded-full gap-[1vw]">
    //     <div className="Tech1 w-[6vw] h-[6vw] xs:w-[4vw] xs:h-[4vw] sm:w-[30px] sm:h-[30px] md:w-[30px] md:h-[30px] lg:w-[30px] lg:h-[30px] xl:w-[30px] xl:h-[30px] rounded-full">
    //         <img src={img} alt="" />
    //     </div>
    //     <h3 className="xs: sm: md: lg: xl: 2xl:text-xl font-exo  font-semibold uppercase">{Name}</h3>
    // </div>
    // </div>

    <div className="inline-block px-4">
    <div className="w-full px-[2vw] py-[1vh] rounded-full border-2 flex justify-center items-center gap-[1vw]">
      
      {/* Icon Section */}
      <div className="w-[30px] h-[30px] h-auto rounded-full">
        <img className="w-full h-auto object-cover" src={img1} alt="" />
      </div>
  
      {/* Text Section */}
      <div>
        <h2 className="font-exo font-semibold uppercase text-xl">
          {Name1}
        </h2>
      </div>
  
    </div>
  </div>
   
    )
}

export default Tech2;