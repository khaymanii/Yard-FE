"use client";

import { MessageCircle } from "lucide-react";

function Hero() {
  return (
    <section className="w-full bg-black text-white pt-16 pb-20 md:pt-20 md:pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 flex flex-col md:flex-row items-center justify-around gap-16">
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Find Your Next Home
            <br />
            <span className="text-[#fa343a]">Right on WhatsApp.</span>
          </h1>

          <p className="text-gray-300 mt-5 text-base sm:text-lg md:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed">
            No apps. No agents stress. Simply chat with our AI-powered housing
            agent to find available houses near you — fast, simple, and
            reliable.
          </p>

          <a
            href="https://wa.me/2340000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto mt-7 bg-[#fa343a] text-white px-6 py-3 rounded-xl text-sm sm:text-base font-semibold 
            hover:bg-[#e30a11] transition shadow-sm hover:shadow-lg flex justify-center items-center gap-2"
          >
            Talk To Yard on WhatsApp
            <MessageCircle />{" "}
          </a>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-sm sm:max-w-md bg-[#1a1a1a] rounded-2xl p-5 sm:p-6 shadow-xl border border-[#fa343a25]">
            <p className="text-gray-300 text-xs sm:text-sm">
              Example Conversation
            </p>

            <div className="mt-4 space-y-3">
              <div className="bg-[#fa343a] text-white p-3 rounded-xl w-fit text-xs sm:text-sm shadow">
                “Hi, I'm looking for a mini-flat in Lekki Phase 1.”
              </div>

              <div className="bg-[#222] p-3 rounded-xl text-xs sm:text-sm w-fit ml-auto shadow">
                “Got it! What's your budget for the mini-flat?”
              </div>

              <div className="bg-[#fa343a] text-white p-3 rounded-xl w-fit text-xs sm:text-sm shadow">
                “My budget is between 1.5M and 2M.”
              </div>

              <div className="bg-[#222] p-3 rounded-xl text-xs sm:text-sm w-fit ml-auto shadow">
                “I found 4 available listings:
                <br />• Admiralty — ₦1.8M
                <br />• Fola Osibo — ₦1.7M
                <br />• Wole Olateju — ₦1.6M
                <br />
                Want to see pictures?”
              </div>

              <div className="bg-[#fa343a] text-white p-3 rounded-xl w-fit text-xs sm:text-sm shadow">
                “Yes, send pictures and location of the nearest one.”
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
