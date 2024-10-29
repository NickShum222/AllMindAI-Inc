"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const About = () => {
  const [active, setActive] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      select((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, [active]);

  const progress = {
    initial: {
      width: "0%",
    },
    enter: {
      width: "100%",
    },
  };
  const duration = 5000;
  const controls = useAnimation();
  const select = (i) => {
    setActive(i);
    controls.stop();
    controls.set("initial");
    controls.start("enter");
  }




  return (
    <>
      <div className="max-w-7xl mx-auto px-4 pt-14 w-full">
        <div className="hidden md:block space-y-16">
          <div>
            <p className="tracking-[-0.015em] text-lg">What is Aviato?</p>
            <h2 className="mt-4 text-5xl max-w-2xl text-pretty text-left tracking-[-0.04em] leading-[58px]">
              The most comprehensive view on private markets there is, made
              accessible to you
            </h2>
          </div>
          <div className="flex flex-row gap-16">
            <div className="w-[40%] flex flex-col justify-between shrink-0 ">
              <div className="space-y-8">
                <div className="space-y-8">
                  <div className="h-0.5 bg-neutral-200 relative">
                    <motion.div
                      className={`absolute inset-0 w-0 bg-aviato_purple h-full ${
                        active === 0 ? "opacity-100" : "opacity-0"
                      }`}
                      animate = {controls}
                      variants={progress}
                      initial="initial"
                      transition = {{
                        duration: duration / 1000,
                      }}
                      // animate={{ width: progress + "%" }}
                      // style={{ width: 0, opacity: 1 }}
                    ></motion.div>
                  </div>
                  <button
                    className={`tracking-[-0.04em] text-2xl transition-opacity duration-500 ${
                      active == 0 ? "opacity-100" : "opacity-30"
                    }`}
                    onClick={() => select(0)}
                  >
                    Save hundreds of hours on research
                  </button>
                </div>
                <div className="space-y-8">
                  <div className="h-0.5 bg-neutral-200 relative">
                  <motion.div
                      className={`absolute inset-0 w-0 bg-aviato_purple h-full ${
                        active === 1 ? "opacity-100" : "opacity-0"
                      }`}
                      animate = {controls}
                      variants={progress}
                      initial="initial"
                      transition = {{
                        duration: duration / 1000,
                      }}
                      // animate={{ width: progress + "%" }}
                      // style={{ width: 0, opacity: 1 }}
                    ></motion.div>
                  </div>
                  <button
                    className={`tracking-[-0.04em] text-2xl transition-opacity duration-500 ${
                      active == 1 ? "opacity-100" : "opacity-30"
                    }`}
                    onClick={() => select(1)}
                  >
                    Be the first to find top talent &amp; founders
                  </button>
                </div>
                <div className="space-y-8">
                  <div className="h-0.5 bg-neutral-200 relative">
                  <motion.div
                      className={`absolute inset-0 w-0 bg-aviato_purple h-full ${
                        active === 2 ? "opacity-100" : "opacity-0"
                      }`}
                      animate = {controls}
                      variants={progress}
                      initial="initial"
                      transition = {{
                        duration: duration / 1000,
                      }}
                      // animate={{ width: progress + "%" }}
                      // style={{ width: 0, opacity: 1 }}
                    ></motion.div>
                  </div>
                  <button
                    className={`tracking-[-0.04em] text-2xl transition-opacity duration-500 ${
                      active == 2 ? "opacity-100" : "opacity-30"
                    }`}
                    onClick={() => select(2)}
                  >
                    Track your portfolio in one place
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-lg tracking-[-0.015em] leading-6">
                  Get exclusive data on any private <br /> company you can
                  imagine
                </p>
                <button
                  className="px-4 py-2.5 rounded-md font-medium leading-none bg-black text-white"
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="radix-:R19iefn3a:"
                  data-state="closed"
                >
                  Try it
                </button>
              </div>
            </div>
            <div className="rounded-l-3xl bg-aviato_green col-span-4 p-[4.5rem] overflow-x-hidden h-[500px] overflow-y-hidden relative w-full">
              {active === 0 && (
                <img
                  src="images/About/screenshot-1.png"
                  className="block shrink-0 rounded-xl absolute h-[609px] aspect-[101/76] resize-none object-cover object-left-top"
                  alt="screenshot"
                ></img>
              )}
              {active === 1 && (
                <img
                  src="images/About/screenshot-2.png"
                  className="block shrink-0 rounded-xl absolute h-[609px] aspect-[101/76] resize-none object-cover object-left-top"
                  alt="screenshot"
                ></img>
              )}
              {active === 2 && (
                <img
                  src="images/About/screenshot-3.png"
                  className="block shrink-0 rounded-xl absolute h-[609px] aspect-[101/76] resize-none object-cover object-left-top"
                  alt="screenshot"
                ></img>
              )}
            </div>
          </div>
        </div>
        <div className="md:hidden block space-y-16 text-center">
          <div>
            <p className="tracking-[-0.015em] text-lg">What is Aviato?</p>
            <h2 className="mt-2 text-3xl max-w-2xl text-balance text-center tracking-[-0.045em] leading-[38px]">
              The most comprehensive view on private markets there is, made
              accessible to you
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 text-left">
            <div className="space-y-5 py-8 border-t border-t-[#B9BDCC]">
              <h3 className="text-2xl tracking-[-0.045em]">
                Save hundreds of hours on research
              </h3>
              <img
                src="images/About/screenshot-1.png"
                className="w-full rounded-xl relative"
                alt="screenshot"
                style={{ opacity: 1 }}
              ></img>

              <button
                className="px-4 py-2.5 rounded-md font-medium leading-none bg-black text-white"
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-:Rdkefn3a:"
                data-state="closed"
              >
                Try it
              </button>
            </div>
            <div className="space-y-5 py-8 border-t border-t-[#B9BDCC]">
              <h3 className="text-2xl tracking-[-0.045em]">
                Be the first to find top talent &amp; founders
              </h3>
              <img
                src="images/About/screenshot-2.png"
                className="w-full rounded-xl relative"
                alt="screenshot"
                style={{ opacity: 1 }}
              ></img>
              <button
                className="px-4 py-2.5 rounded-md font-medium leading-none bg-black text-white"
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-:Rekefn3a:"
                data-state="closed"
              >
                Try it
              </button>
            </div>
            <div className="space-y-5 py-8 border-t border-t-[#B9BDCC]">
              <h3 className="text-2xl tracking-[-0.045em]">
                Track your portfolio in one place
              </h3>
              <img
                src="images/About/screenshot-3.png"
                className="w-full rounded-xl relative"
                alt="screenshot"
                style={{ opacity: 1 }}
              ></img>
              <button
                className="px-4 py-2.5 rounded-md font-medium leading-none bg-black text-white"
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-:Rfkefn3a:"
                data-state="closed"
              >
                Try it
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Purple Section */}
      <div className="max-w-7xl mx-auto md:px-4 mt-20">
        <div className="hidden md:flex rounded-3xl bg-aviato_purple p-12 text-white relative overflow-x-hidden">
          <div className="w-[55%]">
            <h3 className="text-3xl tracking-[-0.02em]">
              Work wherever you work with our API
            </h3>
            <p className="mt-2 text-balance text-lg leading-6 tracking-[-0.015em]">
              Aviato connects seamlessly with top CRMs and tools. Powerful API
              enables an easy transition to data-driven choices, no process
              disruption.
            </p>
            <button
              className="px-4 py-2.5 rounded-md font-medium leading-none bg-white text-black mt-6"
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:R3aifn3a:"
              data-state="closed"
            >
              Try it
            </button>
          </div>
          <div className="absolute left-[57%] bottom-0 h-full flex items-center justify-start gap-x-6">
            <img
              className="h-48 rounded-[96px]"
              src="images/About/api-cta-1.png"
              alt="woman working on laptop"
            ></img>
            <img
              className="h-48 rounded-[96px]"
              src="images/About/api-cta-2.png"
              alt="man working on laptop"
            ></img>
            <img
              className="h-48 rounded-[96px]"
              src="images/About/api-cta-3.png"
              alt="woman working on laptop"
            ></img>
            <img
              className="h-48 rounded-[96px]"
              src="images/About/api-cta-4.png"
              alt="woman working on laptop"
            ></img>
          </div>
        </div>
        <div className="flex md:hidden px-4 bg-aviato_purple py-12 text-white relative overflow-x-hidden flex-col items-start justify-start text-center">
          <div className="h-full flex items-center -translate-x-[12%] justify-start gap-x-6">
            <img
              className="h-48 rounded-[96px]"
              src="images/About/api-cta-1.png"
              alt="woman working on laptop"
            ></img>
            <img
              className="h-48 rounded-[96px]"
              src="images/About/api-cta-2.png"
              alt="man working on laptop"
            ></img>
            <img
              className="h-48 rounded-[96px]"
              src="images/About/api-cta-3.png"
              alt="woman working on laptop"
            ></img>
            <img
              className="h-48 rounded-[96px]"
              src="images/About/api-cta-4.png"
              alt="woman working on laptop"
            ></img>
          </div>
          <div className="w-full pt-12">
            <h3 className="text-3xl tracking-[-0.02em] text-balance">
              Work wherever you work with our API
            </h3>
            <p className="mt-2 text-balance md:text-lg text-base leading-6 tracking-[-0.015em]">
              Aviato connects seamlessly with top CRMs and tools. Powerful API
              enables an easy transition to data-driven choices, no process
              disruption.
            </p>
            <button
              className="px-4 py-2.5 rounded-md font-medium leading-none bg-white text-black mt-6"
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:R3kifn3a:"
              data-state="closed"
            >
              Try it
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
