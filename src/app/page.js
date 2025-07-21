"use client"

import Footer from "./components/footer";
import ReviewSection from "./components/reviews";


// pages/index.tsx or index.js
export default function HomePage() {
  return (


    
   <div className="min-h-screen flex flex-col">

  {/* Row 1: Hero Section */}
  <section
    className="bg-cover bg-center bg-no-repeat min-h-screen flex flex-col items-center justify-center text-black text-center"
    style={{ backgroundImage: "url('/logos/sunset-beach-Home.jpg')" }}
  >
    <h1 className="text-6xl font-bold">Healthy Outlook Wellness</h1>
    <a
      target="_blank"
      href="https://healthyoutlookmassageinc.noterro.com"
      className="inline-block bg-amber-300 text-5xl underline font-semibold py-6 px-12 rounded-lg shadow-md hover:bg-amber-400 transition my-1.5"
    >
      Book Now
    </a>
    <p className="text-3xl font-bold py-5">Release, Relax, Unwind</p>
  </section>

  {/* Gradient-wrapped content from Row 2 onward */}
  <div className="w-full bg-gradient-to-b from-amber-100 via-orange-100 to-rose-100 text-brown-800">
    {/* Row 2: About Section */}
    <section className="py-20 px-8 text-center">
      <h2 className="text-4xl font-bold mb-4 tracking-wide">About Me</h2>
      <p className="max-w-3xl mx-auto text-lg leading-relaxed">
        Hi, I am <span className="font-semibold text-brown-900">Sherri Andrews</span>.
        <br /><br />
        I have been a Registered Massage Therapist with NHPC since 2002.
        I am deeply committed to helping my clients heal through progressive, personalized therapy designed for their unique needs.
      </p>
    </section>

    {/* Row 3: Reviews */}
    <section className="py-16 px-8 text-center">

      <ReviewSection />
    </section>

    {/* Row 4: Direct Billing */}
    <section className="py-10 px-8 text-center bg-gray-100 rounded-xl mx-8 shadow-xl">
      <h2 className="text-3xl font-semibold mb-4">Direct Billing</h2>
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <img src="/logos/sunlife.png" alt="Sunlife" className="h-12" />
        <img src="/logos/BlueCross.webp" alt="BlueCross" className="h-12" />
        <img src="/logos/greenShield.png" alt="GreenShield" className="h-12" />
        <img src="/logos/EClaim.jpg" alt="Telus E Claim" className="h-12" />
        <img src="/logos/CanadaLife.png" alt="Canada Life" className="h-12" />
        <img src="/logos/Equitable.jpg" alt="Equitable Life" className="h-12" />
        <img src="/logos/Industrial.png" alt="Industrial Alliance" className="h-12" />
      </div>
    </section>

    {/* Row 5: Contact Info */}
  </div>
</div>

  );
}