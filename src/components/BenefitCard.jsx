function BenefitCard({ icon, iconBg, title, description }) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6">
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${iconBg}`}
      >
        {icon}
      </div>

      <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>
      <p className="mt-3 text-slate-400">{description}</p>
    </div>
  )
}

export default BenefitCard