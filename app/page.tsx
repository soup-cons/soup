import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Values } from "@/components/values"
import { Services } from "@/components/services"
import { CaseStudies } from "@/components/case-studies"
import { Team } from "@/components/team"
import { Partners } from "@/components/partners"
import { WorldGymnastics } from "@/components/world-gymnastics"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Values />
        <Services />
        <CaseStudies />
        <Team />
        <Partners />
        <WorldGymnastics />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
