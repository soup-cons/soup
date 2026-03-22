const team = [
  {
    name: "Derya Ucpinar",
    role: "CEO & Founder",
    share: "32%",
    description:
      "Founded SOUP in 2019 with a vision to support athletes holistically. Leads overall strategy and client relationships across five continents.",
    image: "/images/hero-derya.jpg",
  },
  {
    name: "Zineb",
    role: "Head of Strategy & Governance",
    share: "14%",
    description:
      "Oversees project strategy and stakeholder management, bringing deep expertise in sports governance and athlete welfare frameworks.",
    image: "/images/hero-zineb.jpg",
  },
  {
    name: "Felicia",
    role: "Head of Athlete Wellbeing",
    share: "14%",
    description:
      "Leads the dual-career pathway and athlete wellbeing programmes, ensuring every initiative is athlete-centred and evidence-based.",
    image: "/images/hero-felicia.jpg",
  },
  {
    name: "Santiago",
    role: "Head of Partnerships & Delivery",
    share: "14%",
    description:
      "Manages commercial partnerships and programme delivery, with extensive experience across Latin American and European federations.",
    image: "/images/hero-santiago.jpg",
  },
  {
    name: "Elena",
    role: "Head of Safeguarding",
    share: "14%",
    description:
      "Heads the governance and safeguarding consulting practice, specializing in athlete representation and code of conduct development.",
    image: "/images/hero-elena.jpg",
  },
  {
    name: "Saad",
    role: "Finance & Data Lead",
    share: "12%",
    description:
      "Leads the finance and data analytics team. SAP Sports One certified, delivering real-time performance analytics and financial strategy.",
    image: "/images/hero-saad.jpg",
  },
]

export function Team() {
  return (
    <section id="team" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent mb-4">
            Our Team
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
            Meet the people behind SOUP
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Six partners with proven expertise across sports management, data analytics,
            governance, and athlete welfare.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="group rounded-2xl border border-border bg-card p-8 hover:shadow-lg hover:border-accent/30 transition-all text-center"
            >
              <div className="mx-auto h-28 w-28 rounded-full overflow-hidden border-[3px] border-border group-hover:border-accent/40 transition-colors">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <h3 className="mt-6 font-heading text-xl font-bold text-card-foreground">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-accent mt-1">{member.role}</p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
