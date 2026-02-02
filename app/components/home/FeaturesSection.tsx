import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Quick Scanning",
    copy: "Point and shoot to instantly verify product authenticity with our AI.",
    icon: "📱",
  },
  {
    title: "Serial Number Verification",
    copy: "Cross-reference with manufacturer databases to ensure legitimacy.",
    icon: "🔎",
  },
  {
    title: "Security Alerts",
    copy: "Real-time notifications about counterfeit threats near you.",
    icon: "🛡️",
  },
  {
    title: "Global Database",
    copy: "Comprehensive verified products database worldwide.",
    icon: "🌍",
  },
  {
    title: "Smart Integration",
    copy: "Works with your favorite shopping and inventory apps.",
    icon: "⚙️",
  },
];

export default function FeaturesSection() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-[#008AFF]">
            Feature preview
          </p>
          <h2 className="text-3xl font-semibold text-gray-900">Powerful Features</h2>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((item) => (
          <FeatureCard
            key={item.title}
            title={item.title}
            copy={item.copy}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
}
