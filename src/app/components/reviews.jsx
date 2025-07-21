import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


const testimonials = [
  { name: "Farissa Saeeda", body: "Sherri is wonderful, her experience shows in her massage. She also tries to understand what we are going through physically, mentally and help recover through her massage. I went for postpartum massage for myself and knee pain for my mom. It was amazing experience. She would be my first go to person for massage." },
  { name: "Kara Alan", body: "Sherri is compassionate, genuine, and (no exaggeration!) provides the most healing, beneficial massages I have ever received. Additionally, my husband will not book with anyone else. Highly recommend." },
  { name: "Kim Westlund", body: "I have been a regular massage client for quite a few years and have been to many different providers. Sherri is by far the most incredible massage therapist I've ever been to! She made me feel right at home and I would rate the quality of massage at the top of the scale. She is incredibly flexible and professional with great communication. I would give Sherri my highest recommendation!" },
  { name: "Echo A", body: "Sherri is incredibly professional and knowledgeable! She's the ONLY massage therapist I've ever seen more than once because she knows what she's doing. I've even got my husband (who was very skeptical) going and getting relief after she's worked her magic. You won't be disappointed if you book with her!" },
  { name: "Jade Mahon", body: "Sherri Andrews treats her clients as individual people - pays attention to needs of the muscles, based on what's going on/with the person. She's my personal fitness trainer as well as my registered massage therapist - she knows what she's doing, how to get the muscles working optimally, and how to stay healthy! She provides solutions through simple exercises, various stretches and even our thought processes. Sherri cares about her client's whole life balance - and works on those solutions together. No one is an island - no one is left to drift alone. She is always available to coach her client's through the pain to come through the other side! She is amazing - you needn't take only my word for it. She's had a successful massage business for 20+ years for a reason!"},
  { name: "Kimberley Lipszyc", body: "Sherri has been my massage therapist for many years. I have a chronic medical condition which requires frequent massage for relief and Sherri has always been very accomodating to my schedule. She assesses my needs at each visit and modifies my treatment accordingly. She is an effective communicator and wants what is best for her clients. I feel lucky to have her in my corner on my wellness journey. :)"},
  { name: "Lance Storm", body: "I’ve been a client of Healthy Outlook Massage for years. As a professional athlete (now former) my body is/was my livelihood. Sherri has helped me recover from, as well as manage many chronic injuries. She has helped me through back, hip, neck and shoulder injuries. There is no one I trust more with my physical health."},
  { name: "Arianne F", body: "Sherri is wonderful person and RMT. She has helped alleviate my aches/pains during pre-natal and post-partum. I cannot recommend her enough!"},
  { name: "Chris Quick", body: "I cannot rate these services higher, Sherri is fantastic! Her knowledge of muscular skeletal system means that any type of tightness or muscle soreness is treated directly and often without the need for multiple visits."},
  { name: "Virginia", body: "Phenomenal Massage, will be a return client. Clean, inviting and professional."},
];

export default function ReviewSection() {
   const [index, setIndex] = useState(0);
  const [autoCycle, setAutoCycle] = useState(true);

  useEffect(() => {
    if (!autoCycle) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [autoCycle]);

  const handlePrev = () => {
    setAutoCycle(false);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoCycle(false);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative flex items-center justify-center h-64 bg-gray-100 p-8 rounded-lg shadow-md overflow-hidden">
        
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow hover:bg-gray-200"
      >
        <ChevronLeft size={24} />
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-5xl"
        >
          <p className="text-xl italic mb-4">&quot;{testimonials[index].body}&quot;</p>
          <span className="text-lg font-semibold">- {testimonials[index].name}</span>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow hover:bg-gray-200"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
}