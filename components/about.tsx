export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent mb-4">
            About Us
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
            Founded to put people at the heart of sport
          </h2>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: story & image */}
          <div className="space-y-8">
            <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-2xl border border-border">
              <img
                src="/images/about-hero.png"
                alt="SOUP Holistic Support"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20" />
            </div>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Throughout history, athletes have been measured solely by their sporting
                achievements, sometimes treated like machines expected to meet the demands
                of the public and stakeholders without consideration for the context
                surrounding them.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                With the aim of providing support to athletes by giving them tools that
                complement their sport, Derya Ucpinar founded SOUP Consulting Agency in
                2019 in Paris, France. Since then, we have worked with athletes from all
                continents to help them with mental health, financial education, and dual
                career planning.
              </p>
              <div className="pt-4 flex items-center gap-4">
                <div className="h-px flex-1 bg-border" />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  Est. 2019 - Paris, France
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>
            </div>
          </div>

          {/* Right: mission / vision / purpose cards */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="font-serif text-xl font-bold text-card-foreground mb-3">
                Our Purpose
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Bridging the gap between data, strategy, and execution to enhance
                athlete experience.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="font-serif text-xl font-bold text-card-foreground mb-3">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To work in partnership with sports federations, clubs, and
                organizations to provide comprehensive training to athletes, relying on
                data analysis and specialized plans that help young athletes achieve
                balance between high performance, personal well-being, and exponential
                professional growth.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="font-serif text-xl font-bold text-card-foreground mb-3">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Building a new era of excellence for Federations by providing them the
                strategic roadmap and expert implementation required to build a holistic
                support system around the world{"'"}s young-elite athletes.
              </p>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-12">
          {[
            { value: "7+", label: "Years of Experience" },
            { value: "4", label: "Continents Served" },
            { value: "30", label: "Professionals" },
            { value: "6", label: "Partners" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-4xl md:text-5xl font-bold text-accent">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
