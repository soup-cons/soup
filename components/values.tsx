import { Handshake, Target, Leaf } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Accountability",
    description:
      "We conduct post-analysis sessions two weeks, six months, and one year after every engagement, ensuring our impact is measurable and that progress is tracked at every stage.",
    image: "/images/value-accountability.png",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    description:
      "By connecting federations, clubs, and brand partners, we build an ecosystem that benefits every element. From coaches to data analysts, everyone plays a part in sustainable growth.",
    image: "/images/value-collaboration.png",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We provide athletes the opportunity to develop competencies that help them long after their competitive years. A sustainable career is about more than winning -- it is the art of learning how to evolve.",
    image: "/images/value-sustainability.png",
  },
]

export function Values() {
  return (
    <section id="values" className="py-24 lg:py-32 bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent mb-4">
            Our Values
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground leading-tight text-balance">
            The principles that guide everything we do
          </h2>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={value.image}
                  alt={value.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-4 left-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent shadow-lg">
                  <value.icon className="h-6 w-6 text-accent-foreground" />
                </div>
              </div>
              <div className="p-8 pt-6 flex-1 flex flex-col">
                <h3 className="font-heading text-2xl font-bold text-primary-foreground">
                  {value.title}
                </h3>
                <p className="mt-4 text-primary-foreground/70 leading-relaxed flex-1">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
