import { ArrowDown } from "lucide-react"

const heroTeam = [
  { name: "Derya Ucpinar", role: "CEO & Founder", image: "/images/hero-derya.jpg" },
  { name: "Zineb", role: "Department Head", image: "/images/hero-zineb.jpg" },
  { name: "Felicia", role: "Department Head", image: "/images/hero-felicia.jpg" },
  { name: "Elena", role: "Department Head", image: "/images/hero-elena.jpg" },
  { name: "Saad", role: "Finance & Data Lead", image: "/images/hero-saad.jpg" },
  { name: "Santiago", role: "Department Head", image: "/images/hero-santiago.jpg" },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 text-center py-24">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary-foreground/70 mb-6">
          Sports Oriented Understanding People
        </p>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] text-primary-foreground text-balance">
          Bridging the Gap Between Data, Strategy
          <span className="text-accent"> & Excellence</span>
        </h1>
        <p className="mt-8 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed text-pretty">
          We partner with sports federations, clubs, and organizations to provide
          comprehensive training to athletes, going beyond athletic development.
        </p>

        {/* Team portraits row */}
        <a href="#team" className="mt-12 flex items-center justify-center gap-[-8px] group/link cursor-pointer">
          <div className="flex items-center -space-x-3">
            {heroTeam.map((member, index) => (
              <div
                key={member.name}
                className="group relative"
                style={{ zIndex: heroTeam.length - index }}
              >
                <div className="relative h-14 w-14 md:h-16 md:w-16 rounded-full overflow-hidden border-[3px] border-primary-foreground/20 transition-all duration-300 group-hover:scale-110 group-hover:border-accent group-hover:z-50">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                {/* Tooltip */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="whitespace-nowrap rounded-md bg-background/90 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-foreground shadow-lg">
                    {member.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <span className="ml-4 text-sm text-primary-foreground/60 font-medium group-hover/link:text-primary-foreground transition-colors">
            Meet our team →
          </span>
        </a>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border-2 border-primary-foreground/30 px-8 py-3.5 text-base font-semibold text-primary-foreground hover:border-primary-foreground/60 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ArrowDown className="h-5 w-5 text-primary-foreground/60" />
      </div>
    </section>
  )
}
