import { useState } from "react"
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi"
const inputClass =
  "mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"

const contactInfo = [
  { icon: <FiPhone className="text-indigo-500" />, label: "Phone", value: "+1 (555) 123-4567" },
{ icon: <FiMail className="text-indigo-500" />, label: "Email", value: "hello@airevolution.com" },
{ icon: <FiMapPin className="text-indigo-500" />, label: "Office", value: "123 AI Boulevard, Tech City, TC 10001" },
]

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section
      id="contact"
      className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2"
    >
      <div>
        <p className="font-medium text-indigo-500">Get in Touch</p>
        <h2 className="mt-2 text-4xl font-bold text-gray-900">
          Ready to{" "}
          <span className="bg-linear-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
            Transform
          </span>{" "}
          Your Business with AI?
        </h2>
        <p className="mt-4 text-gray-600">
          Our team of AI experts is ready to help you implement cutting-edge
          solutions tailored to your specific needs. Contact us today to
          schedule a consultation.
        </p>

        <ul className="mt-8 space-y-6">
          {contactInfo.map((item) => (
            <li key={item.label} className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-xl">
                {item.icon}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{item.label}</p>
                <p className="text-gray-600">{item.value}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl bg-white p-8 shadow-lg"
      >
        <div>
          <label htmlFor="name" className="font-medium text-gray-700">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div className="mt-5">
          <label htmlFor="email" className="font-medium text-gray-700">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div className="mt-5">
          <label htmlFor="subject" className="font-medium text-gray-700">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div className="mt-5">
          <label htmlFor="message" className="font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded-lg bg-indigo-500 py-3 font-medium text-white shadow-lg hover:bg-indigo-600"
        >
          Send Message
        </button>
      </form>
    </section>
  )
}

export default Contact