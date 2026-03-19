const partners = [
  {
    name: "PwC",
    description: "Financial audit partner since 2023, providing unqualified reports affirming our financial integrity.",
    category: "Audit & Finance",
    image: "/images/partner-finance.png",
  },
  {
    name: "SAP",
    description: "Technology partner providing SAP Sports One, Analytics Cloud, and Sustainability Control Tower.",
    category: "Technology & Analytics",
    image: "/images/partner-tech.png",
  },
  {
    name: "Bird & Bird",
    description: "Legal partner supporting contract drafting, NDAs, partnership agreements, and data protection advisory.",
    category: "Legal",
    image: "/images/partner-legal.png",
  },
  {
    name: "Australian Institute of Sport",
    description: "Strategic research partner since 2020, providing expertise in sports science, performance psychology, and innovation.",
    category: "Research & Development",
    image: "/images/partner-research.png",
  },
]

const certifications = [
  "ISO 9001 - Quality Management",
  "ISO 27001 - Information Security",
  "GDPR Compliance Certified",
  "CSMP - Certified Sports Management (EASM)",
  "SAP Sports One Certified",
  "WADA Anti-Doping Compliance",
]

export function Partners() {
  return (
    <section id="partners" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent mb-4">
            Partners & Certifications
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary-foreground leading-tight text-balance">
            Backed by world-class partners
          </h2>
        </div>

        {/* Partners grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card hover:shadow-lg transition-all"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={partner.image}
                  alt={partner.category}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-6 left-8">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1.5 rounded-full backdrop-blur-md">
                    {partner.category}
                  </span>
                </div>
              </div>
              <div className="p-8 pt-6 flex-1 flex flex-col">
                <h3 className="font-heading text-2xl font-bold text-card-foreground">
                  {partner.name}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed flex-1">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 rounded-2xl border border-border bg-card p-10">
          <h3 className="font-heading text-2xl font-bold text-card-foreground text-center mb-8">
            Our Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-3 rounded-xl bg-secondary p-4 hover:bg-secondary/80 transition-colors cursor-default"
              >
                <div className="h-2 w-2 rounded-full bg-accent shrink-0" />
                <span className="text-sm font-medium text-secondary-foreground">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
