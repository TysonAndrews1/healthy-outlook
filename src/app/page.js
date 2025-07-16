import Image from "next/image";

// pages/index.tsx or index.js
export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Row 1: Title */}
      <section className="w-full bg-gray-800 text-white py-16 px-8 text-center">
        <h1 className="text-4xl font-bold">Healthy Outlook</h1>
        <p className="mt-4 text-lg">Massage Therepy & Health Services</p>
        <a target="_blank" href="https://healthyoutlookmassageinc.noterro.com">book now</a>
        <p>Release, Relax, Unwind</p>
      </section>

 

      {/* Row 2: About / Content */}
      <section className="w-full bg-gray-100 py-16 px-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p>
        Hi, I am Sherri Andrews <br/><br/>
        
        I have been a Registered Massage Therapist with NHPC since 2002. I am very passionate about helping my clients through progressive therapy that is individualized to them.
        </p>
      </section>

           {/* Row 3: Reviews */}
           <section className="w-full bg-white py-16 px-8 text-center">
        <h2 className="text-3xl font-semibold mb-4  ">What People Are Saying</h2>
        <p>⭐️⭐️⭐️⭐️⭐️ - Absolutely amazing!</p>
        <p className="mt-2">⭐️⭐️⭐️⭐️ - Would recommend to a friend.</p>
      </section>

      {/* Row 4: Gallery or Feature */}
      <section className="w-full bg-white py-16 px-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Gallery</h2>
        <div className="flex justify-center gap-4 flex-wrap">
          <div className="w-40 h-40 bg-gray-300 rounded-md"></div>
          <div className="w-40 h-40 bg-gray-300 rounded-md"></div>
          <div className="w-40 h-40 bg-gray-300 rounded-md"></div>
        </div>
      </section>

      {/* Row 5: Contact Info */}
      <section className="w-full bg-gray-800 text-white py-16 px-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p>Email: sherri.andrews7@gmail.com</p>
        <p>Phone: +1 (403) 870-1900</p>
        <p className="mt-2">74 brightonwoods green, Calgary, Alberta, Canada</p>
      </section>
    </div>
  );
}