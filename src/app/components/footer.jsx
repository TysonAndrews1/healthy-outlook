import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-rose-100 text-black py-8 px-8 text-center">
      <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
      <p>Email: <a href="mailto:HealthyOutlookMassage@gmail.com" className="underline hover:text-rose-500">HealthyOutlookMassage@gmail.com</a></p>
      <p>Text at: <a href="sms:+14038701900" className="underline hover:text-rose-500">+1 (403) 870-1900</a></p>
      <p className="mt-2">74 Brightonwoods Green, Calgary, Alberta, Canada</p>

      <div className="flex justify-center gap-6 mt-6 text-2xl">
        <a
          href="https://www.instagram.com/healthy_outlookwellness/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-rose-500 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/HealthyOutlookWellness/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-rose-500 transition"
        >
          <FaFacebookF />
        </a>
      </div>

      <p className="mt-6 text-sm">© 2025 Healthy Outlook Massage</p>
    </footer>
  );
};

export default Footer;
