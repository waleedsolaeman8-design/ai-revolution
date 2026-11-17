import { useState } from "react"
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6"
const socials = [
  { name: "Facebook", icon: <FaFacebookF /> },
  { name: "X", icon: <FaXTwitter /> },
  { name: "Instagram", icon: <FaInstagram /> },
  { name: "LinkedIn", icon: <FaLinkedinIn /> },
]

const linkGroups = [
  {
    title: "Explore",
    links: ["About Us", "AI Technologies", "Case Studies", "Contact Us", "Careers"],
  },
  {
    title: "Resources",
    links: ["Documentation", "API Reference", "Community Forum", "Blog & News", "Help Center"],
  },
]

function Footer() {
  const [email, setEmail] = useState("")

  function handleSubscribe(e) {
    e.preventDefault()
    console.log(email)
    setEmail("")
  }

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <h3 className="text-2xl font-bold bg-linear-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            AI Revolution
          </h3>
          <p className="mt-4 max-w-xs">
            Pioneering AI solutions for tomorrow's challenges. We empower
            businesses with cutting-edge artificial intelligence.
          </p>

          <div className="mt-6 flex gap-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href="#"
                aria-label={social.name}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 font-bold text-slate-300 hover:bg-indigo-500 hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <h4 className="mt-10 text-lg font-semibold text-white">Stay Updated</h4>
          <p className="mt-2">
            Subscribe to our newsletter for the latest AI insights and company news.
          </p>
          <form onSubmit={handleSubscribe} className="mt-4 flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg bg-slate-800 px-4 py-2 text-white outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="rounded-lg bg-indigo-500 px-4 py-2 font-medium text-white hover:bg-indigo-600"
            >
              Subscribe
            </button>
          </form>
        </div>

        {linkGroups.map((group) => (
          <div key={group.title}>
            <h4 className="text-lg font-semibold text-white">{group.title}</h4>
            <ul className="mt-4 space-y-3">
              {group.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white">
                    › {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-800 py-6 text-center text-sm">
        © 2026 AI Revolution. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer