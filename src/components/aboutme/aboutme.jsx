import "./aboutme.css"
import React, { useEffect } from "react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

function Aboutme() {
    // useEffect(() => {
    //     AOS.init({ duration: 1000 });
    //   }, []);
  return (
    <main className=" data-aos = zoom-in ">
    <div className=" w-screen h-screen">
      <div className=" flex w-full pt-[250px] pb-[100px] flex-col justify-start gap-14px">
        <div className=" flex p-10 pb-[1px] jsutify-start gap-50px ">
          <div className=" pr-[0px]  pl-[15px]  justify-center items-center gap-10px">
            <div className="flex items-center gap-10px">
              <p
                className="font-bold"
                style={{
                  color: "var(--Global-primary, #6C5CCC)",
                }}
              >
                ---------------
              </p>
              <div className="  pl-[10px]">
                <p className=" text4  text-violet-600  font-[ Space Grotesk] text-[15px] font-bold uppercase">
                  ABOUT ME
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="  flex pl-200 mr-200 m-auto  flex-space   p-10  justify-start ">
          <div className="  max-w-[800px]">
            <div className="pb-0 pt-0">
            <p className=" container font-bold     text-4xl  ">
              Passionate Full Stack Developer <br />& Machine Learning
              Enthusiast | Web APIs to Embedded Systems 🚀
            </p>
            </div>
          </div>
          <div className=" text-2xl  mr-30  pb-0 pt-0 m-auto max-w-[500px] p-10">
            <p>
              Hi, I'm Piyush Sinha, a passionate Full Stack Developer with a
              knack for turning ideas into digital solutions. Crafting
              sleek user interfaces, I enjoy
              the creative challenge of programming. Beyond coding, I'm a
              Machine Learning enthusiast, exploring the intersection of
              technology and innovation. 
              <p></p>Let's build something amazing together!
              <div className="bg-violet-600 border-bold mt-10 w-[550px] shrink-0 h-px my-auto" />
            </p>
          </div>
        </div>
      </div>
    </div>
    </main>
  );
}

export default Aboutme;
