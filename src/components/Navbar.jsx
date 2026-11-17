function Navbar(){
    const links = [
    { name: "Home", href: "#home" },
    { name: "AI Types", href: "#ai-types" },
    { name: "Benefits", href: "#benefits" },
    { name: "Contact", href: "#contact" },
  ]
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-white shadow sticky top-0 z-50">
            <h1 className="text-2xl font-bold text-indigo-500">AI Revolution</h1>
            <ul className="flex gap-8">
        {links.map((link) => (
          <li key={link.name}>
            <a href={link.href} className="hover:text-indigo-500">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
            <button className="bg-indigo-500 text-white rounded-lg px-4 py-2">Get Started</button>
        </nav>
    )
}
export default Navbar