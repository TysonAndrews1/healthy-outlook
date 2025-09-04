
const Header = () =>{
    return(
            <header className="w-full fixed top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
  <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-brown-900">
    <div className="text-2xl font-bold">Healthy Outlook</div>
    <ul className="flex space-x-6 text-lg font-medium">
      <li>
        <a href="/" className="hover:text-orange-500 transition">Home</a>
      </li>
      <li>
        <a href="/about" className="hover:text-orange-500 transition">About Me</a>
      </li>
      {/* <li>
        <a href="/services" className="hover:text-orange-500 transition">Additional Services</a>
      </li> */}
    </ul>
  </nav>
</header>
    )
}
export default Header