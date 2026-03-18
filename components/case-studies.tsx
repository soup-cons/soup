import { ArrowRight } from "lucide-react"

const caseStudies = [
  {
    client: "Swiss Tennis Federation & On",
    year: "2022",
    title: "Elite Tennis Camp for Athletes with Special Education Needs",
    description:
      "A two-week residential camp in the Swiss Mountains for 200 young athletes, focusing on personal branding, nutrition, dual-career planning, and financial literacy.",
    outcomes: [
      "9/10 participants reported increased confidence in their identity beyond sport",
      "8.5/10 athletes indicated improved social connectedness",
      "Scaled into an annual programme with ongoing federation support",
    ],
    image: "/images/case-tennis.jpg",
  },
  {
    client: "Colombian Swimming Federation",
    year: "2021",
    title: "Dual-Career Pathway Programme in Swimming",
    description:
      "A comprehensive dual-career program integrating mentorship networks, online learning, and academic partnerships for junior and elite swimmers.",
    outcomes: [
      "Improved athlete retention across the federation",
      "Stronger collaboration between educational institutions and sport",
      "Framework adopted by regional swimming bodies",
    ],
    image: "/images/case-swimming.jpg",
  },
  {
    client: "German Athletics Association (DLV)",
    year: "2023",
    title: "Athlete Representation Framework in Athletics",
    description:
      "Stakeholder consultations, policy development workshops, and council training sessions to create an Athlete Voice Framework.",
    outcomes: [
      "Improved athlete involvement in governance decisions",
      "Template adopted by other European sport organizations",
      "Enhanced transparency in federation decision-making",
    ],
    image: "/images/case-athletics.jpg",
  },
  {
    client: "Italian Sports Federation",
    year: "2024",
    title: "Athlete Wellbeing Digital Hub",
    description:
      "A digital platform providing 24/7 access to mental healthcare, personal development resources, and confidential peer support spaces.",
    outcomes: [
      "Accessible anywhere, anytime for young elite athletes",
      "Interactive modules on media management, finance, and recovery",
      "Confidential environment driving higher athlete engagement",
    ],
    image: "/images/case-digital.jpg",
  },
]

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent mb-4">
            Case Studies
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary-foreground leading-tight text-balance">
            Real impact across international sport
          </h2>
        </div>

        <div className="mt-16 space-y-8">
          {caseStudies.map((study, i) => (
            <div
              key={study.title}
              className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div
                className={`grid lg:grid-cols-2 ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
              >
                {/* Image */}
                <div className={`relative h-64 lg:h-auto ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img
                    src={study.image}
                    alt={`${study.client} project`}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/20" />
                </div>

                {/* Content */}
                <div className={`p-8 lg:p-12 flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {study.year}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {study.client}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-card-foreground">
                    {study.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {study.description}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {study.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <ArrowRight className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
