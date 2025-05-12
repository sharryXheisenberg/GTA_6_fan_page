import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import Updates from "./components/Updates";

function App() {
  let [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.05,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.05,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });


     gsap.to(".character", {
      scale: 1,
      x: "-50%",
      bottom: "-80%", // Adjusted to position below the "grand theft auto" text
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 20;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="clamp(150px, 20vw, 250px)"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-5deg] scale-[1.2]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-6 px-6">
              <div className="logo flex gap-5">
                <div className="lines flex flex-col gap-[4px]">
                  <div className="line w-10 h-1.5 bg-white"></div>
                  <div className="line w-6 h-1.5 bg-white"></div>
                  <div className="line w-4 h-1.5 bg-white"></div>
                </div>
                <h3 className="text-3xl -mt-[6px] leading-none text-white">
                  Rockstar
                </h3>
              </div>
            </div>

            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img
                className="absolute sky scale-[1.3] rotate-[-10deg] top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="absolute scale-[1.5] rotate-[-3deg] bg top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />
              <div className="text text-white flex flex-col gap-3 absolute top-20 left-1/2 -translate-x-1/2 scale-[1] rotate-[-10deg]">
                <h1 className="text-[7rem] leading-none -ml-40">grand</h1>
                <h1 className="text-[7rem] leading-none ml-20">theft</h1>
                <h1 className="text-[7rem] leading-none -ml-40">auto</h1>
              </div>
              <img
                className="absolute character -bottom-[50%] left-1/2 -translate-x-1/2 scale-[1.5] rotate-[-10deg]"
                src="./girlbg.png"
                alt=""
              />
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-10 px-6 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-3 items-center">
                <i className="text-3xl ri-arrow-down-line"></i>
                <h3 className="text-lg font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div>
              <img
                className="absolute h-[40px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-screen flex items-center justify-center bg-black">
            <div className="cntnr flex text-white w-full h-[90%]">
              <div className="limg relative w-1/2 h-full">
                <img
                  className="absolute scale-[1.1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="rg w-[40%] py-20">
                <h1 className="text-[clamp(4rem, 6vw, 8rem)] font-bold text-white leading-tight">
                  Still Running,
                </h1>
                <h1 className="text-[clamp(4rem, 6vw, 8rem)] font-bold text-white leading-tight">
                  Not Hunting
                </h1>
                <div className="mt-8">
                  <p className="text-[clamp(1.5rem, 2.5vw, 4rem)] font-bold text-yellow-500 leading-snug">
                    Everyone's
                  </p>
                  <p className="text-[clamp(1.5rem, 2.5vw, 4rem)] font-bold text-yellow-500 leading-snug">
                    Last Wish of Life Is
                  </p>
                  <p className="text-[clamp(1.5rem, 2.5vw, 4rem)] font-bold text-yellow-500 leading-snug">
                    Survive Until GTA 6 Releases
                  </p>
                </div>
                <div className="mt-8">
                  <a
                    href="https://www.rockstargames.com/VI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-500 px-8 py-4 text-black text-[clamp(1.5rem, 2vw, 4rem)] font-bold rounded-lg shadow-lg hover:bg-yellow-600 transition-all duration-300 block text-center"
                  >
                    Download Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Updates />
        </div>
      )}
    </>
  );
}

export default App;