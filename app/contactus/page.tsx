
'use client';

import Image from 'next/image';
import Header from '../components/Header';
import { useState } from 'react';

const ArrowUpRightIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={`h-4 w-4 ${className || ''}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M7 17L17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={`h-4 w-4 ${className || ''}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
   <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
  </svg>
);

export default function ContactUsPage() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  const openModal = () => {
    // Add modal functionality here
    console.log('Opening modal...');
  };

  return (
    <div className="bg-[#f5f3f3]">
      <div className="bg-[#f5f3f3] p-4">
        <Header />

        <section className="relative overflow-hidden rounded-2xl">
          <div className="relative h-[260px] w-full md:h-[420px]">
            <Image
              src="/images/bg3.png"
              alt="Contact banner"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>

          <div className="absolute inset-0 flex items-center">
            <div className="w-full px-6">
              <div className="mx-auto w-full max-w-7xl">
                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                  <div className="max-w-3xl">
                    <div className="text-sm font-semibold tracking-[0.2em] text-[#ffee50]">
                      Home / Contact us
                    </div>
                    <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
                      Contact us
                    </h1>
                  </div>

                  <div className="md:justify-self-end">
                    <div className="max-w-md rounded-2xl bg-black/70 p-8">
                      <h2 className="text-4xl font-semibold leading-tight text-white">Get in touch</h2>
                      <p className="mt-6 text-base leading-relaxed text-white/80">
                       Thanks for reaching out to Sunbrilo Technologies. Share your requirements and we’ll connect you with the right expert to help you.
                      </p>
                         <button
              type="button"
              onClick={openModal}
              onMouseEnter={handleMouseEnter}
              className="group relative hidden overflow-hidden rounded-full bg-[#ffee50] px-2 py-1.5 text-[14px] font-semibold text-[#3B3808]  transition-all md:block cursor-pointer"
            >
              <span
                className="absolute z-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B3808] transition-transform duration-700 delay-100 ease-[cubic-bezier(0.19,1,0.22,1)] scale-0 group-hover:scale-[4]"
                style={{
                  left: "var(--mouse-x, 50%)",
                  top: "var(--mouse-y, 50%)",
                  width: "100px",
                  height: "100px",
                }}
              />
              <div className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-[#FFEE50] ">
                <span className="ml-2">Get Started</span>
                <span className="relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#3B3808] text-[#ffee50] transition-colors duration-500 group-hover:bg-[#ffee50] group-hover:text-[#3B3808] md:h-[42px] md:w-[42px]">
                  <ArrowUpRightIcon className="group-hover:hidden" />
                  <ArrowRightIcon className="hidden group-hover:block" />
                </span>
              </div>
            </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
