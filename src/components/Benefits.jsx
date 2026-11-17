import BenefitCard from './BenefitCard'
import { FiZap, FiCloud, FiBookOpen } from "react-icons/fi"
const benefits = [
  {
    icon: <FiZap className="text-indigo-400" />,
    iconBg: "bg-indigo-500/20",
    title: "Energy Efficiency",
    description:
      "AI optimizes energy consumption in industries and homes, reducing waste and environmental impact.",
  },
  {
    icon: <FiCloud className="text-sky-400" />,
    iconBg: "bg-sky-500/20",
    title: "Climate Solutions",
    description:
      "AI models help predict climate patterns and develop strategies to combat climate change.",
  },
  {
    icon: <FiBookOpen className="text-pink-400" />,
    iconBg: "bg-pink-500/20",
    title: "Education Access",
    description:
      "AI-powered platforms provide personalized learning experiences to students worldwide.",
  },
]

function Benefits() {
  return (
    <section id="benefits" className="mx-auto max-w-7xl px-6 py-10">
      <div className="rounded-3xl bg-slate-900 px-8 py-16 md:px-12">
        <div className="text-center">
          <p className="font-medium text-indigo-400">Benefits</p>
          <h2 className="mt-2 text-4xl font-bold text-white">
            How AI Is Changing the World
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {benefits.map((benefit) => (
            <BenefitCard
              key={benefit.title}
              icon={benefit.icon}
              iconBg={benefit.iconBg}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits