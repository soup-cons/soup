import {
  Brain,
  GraduationCap,
  BarChart3,
  Shield,
  Smartphone,
  Users,
} from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "Athlete Wellbeing & Mental Health",
    description:
      "We design digital wellbeing platforms, peer support spaces, and confidential mental health resources for athletes to thrive both on and off the field.",
    image: "/images/service-wellbeing.png",
  },
  {
    icon: GraduationCap,
    title: "Dual-Career Pathway Programmes",
    description:
      "Integrating mentorship networks, online learning, and academic partnerships to help athletes balance sport and education.",
    image: "/images/service-education.png",
  },
  {
    icon: BarChart3,
    title: "Data Analysis & Performance Insights",
    description:
      "Utilizing SAP Sports One and Analytics Cloud to deliver real-time data analysis and evidence-based performance insights.",
    image: "/images/service-data.png",
  },
  {
    icon: Shield,
    title: "Governance & Safeguarding Consulting",
    description:
      "Establishing athlete voice frameworks, safeguarding policies, and representation councils within sports federations.",
    image: "/images/service-governance.png",
  },
  {
    icon: Smartphone,
    title: "Digital Hub & Platform Design",
    description:
      "Creating digital platforms that provide 24/7 access to personal development resources, media management, and financial literacy tools.",
    image: "/images/service-digital.png",
  },
  {
    icon: Users,
    title: "Elite Athlete Camps",
    description:
      "Designing and delivering immersive camp experiences with physical training, psychological preparation, media skills, and networking events.",
    image: "/images/service-camps.png",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent mb-4">
            What We Do
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
            Our collection of services spans every stage of athlete development
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Explore how we help federations and organizations create holistic support
            systems.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card hover:border-accent/30 hover:shadow-lg transition-all"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-6 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary shadow-lg">
                  <service.icon className="h-5 w-5 text-accent" />
                </div>
              </div>
              <div className="p-8 pt-6 flex-1 flex flex-col">
                <h3 className="font-serif text-xl font-bold text-card-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed flex-1">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
