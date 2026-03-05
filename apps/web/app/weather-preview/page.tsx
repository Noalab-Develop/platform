const WEATHERS = [
  { key: "clear", label: "☀️ Dia claro" },
  { key: "clouds", label: "☁️ Nublado" },
  { key: "rain", label: "🌧️ Chuva" },
  { key: "sunrise", label: "🌅 Amanhecer" },
  { key: "sunset", label: "🌇 Entardecer" },
  { key: "night", label: "🌙 Noite" },
] as const;

function WeatherCard({ weatherKey, label }: { weatherKey: string; label: string }) {
  const showClouds = weatherKey === "clouds" || weatherKey === "rain";

  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-semibold text-white">{label}</span>
      <div className={`hero hero-${weatherKey} relative rounded-xl overflow-hidden`} style={{ height: 220 }}>
        <div className="hero-sky z-10" />
        {showClouds && (
          <>
            <div className="hero-clouds-layer clouds-slow z-20" />
            <div className="hero-clouds-layer clouds-fast z-20" />
          </>
        )}
        <div className="hero-effects z-30" />
        <div className="hero-overlay z-40" />
        <div className="hero-content z-50">
          <p className="text-sm font-medium text-white/80">{label}</p>
        </div>
      </div>
    </div>
  );
}

export default function WeatherPreviewPage() {
  return (
    <main className="min-h-screen bg-[#0A2540] px-6 py-10">
      <h1 className="mb-8 text-2xl font-semibold text-white">
        Preview — Estados do Hero Banner
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {WEATHERS.map(({ key, label }) => (
          <WeatherCard key={key} weatherKey={key} label={label} />
        ))}
      </div>
    </main>
  );
}
