"use client"



export default function aboutPage(){
return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-100 via-orange-100 to-rose-100 px-4 py-16">
    <div className="max-w-6xl w-full bg-gray-200 border-4 border-orange-300 shadow-lg rounded-2xl overflow-hidden p-8 md:flex md:gap-12">
      
      {/* Image */}
      <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center items-center">
        <img
          src="\logos\SherriAboutme.jpg"
          alt="Sherri Andrews"
          className="rounded-xl shadow-md max-h-[500px] w-full object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="md:w-1/2 text-brown-800">
        <h2 className="text-4xl font-bold mb-4 text-center md:text-left">Meet Sherri Andrews</h2>
        <p className="text-lg leading-relaxed">
          I graduated from Mount Royal College and have been a Registered Massage Therapist with NHPC since 2002.
          I am very passionate about helping my clients through progressive therapy that is individualized to them. I specialize in, but am not limited to, deep tissue techniques focusing on postural issues.
          <br /><br />
          My typical treatment incorporates massage with myofascial release, deep tissue work, joint mobilizations, and trigger point therapy. I am also certified in Cupping, Reflexology, and Active Release.
          Combining these techniques helps relieve tight muscles, pain, stress, and overuse injuries.
          <br /><br />
          I strongly believe in preventative maintenance—assessing and treating the body to identify problem areas before injury and degeneration occur.
          <br /><br />
          I am excited to work with new clients and help them improve and maintain their health. Areas of specialization include Pre and Postnatal care, Sciatic relief, Headaches, and TMJ.
          <br /><br />
          In my spare time, I enjoy outdoor adventures. My favorite things are traveling, yoga, hiking, and camping with my family, friends, and dog.
        </p>
      </div>
    </div>
  </div>
);

}
// \logos\SherriAboutme.jpg