"use client"
import ServiceCard from "../components/serviceCard";


export default function servicePage(){
const services = [
    {
      imageSrc: "/logos/RedlightTherapy.jpg",
      title: "Redlight Therapy",
      description:
        "",
    },
    // {
    //   imageSrc: "/services/reflexology.jpg",
    //   title: "Reflexology",
    //   description:
    //     "A deeply relaxing technique that focuses on pressure points in the feet to promote whole-body healing and balance.",
    // },
    // {
    //   imageSrc: "/services/active-release.jpg",
    //   title: "Active Release Therapy",
    //   description:
    //     "Combines movement with targeted pressure to break up scar tissue and restore range of motion.",
    // },
    // {
    //   imageSrc: "/services/prenatal.jpg",
    //   title: "Pre & Postnatal Massage",
    //   description:
    //     "Gentle, effective therapy for mothers to relieve stress, reduce swelling, and ease discomfort during or after pregnancy.",
    // },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 via-orange-100 to-rose-100 py-16 px-4 flex flex-col items-center gap-12">
      <h1 className="text-5xl font-bold text-center text-brown-800 mb-4">Additional Services</h1>
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          imageSrc={service.imageSrc}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
}