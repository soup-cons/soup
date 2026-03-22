import { CheckCircle2 } from "lucide-react"

export function WorldGymnastics() {
  return (
    <section id="world-gymnastics" className="py-24 lg:py-32 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent mb-4">
            Latest Initiative
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
            Mixed Flow Gymnastics
          </h2>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
            Protect the athlete, empower the coach, and reinvent the gymnastics experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main content - 2 columns wide on large screens */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Introduction */}
            <div className="space-y-4">
              <div className="h-64 sm:h-80 w-full relative rounded-2xl overflow-hidden mb-6 border border-border">
                <img src="/images/gymnastics_intro_v2_1773844783081.png" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" alt="Gymnastics Introduction" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-foreground">Introduction</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                SOUP Consulting was founded to help international sports organizations better understand the evolving relationship between athletes, culture, and society. Having offices across all five continents (Africa, Americas, Asia, Europe, and Oceania) where we bring together experts, our team reflects true global diversity and specializes in athlete development, sport governance, and youth engagement.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The era of Generation Alpha has arrived. For sports organizations, adaptation is a requirement for survival; failure to evolve risks total irrelevance. WG sits at a crossroads. While the sport connects with this demographic, it faces a looming star vacuum.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As SOUP, we recommend Mixed Flow Gymnastics under the Artistic discipline. By merging technical mastery with the raw creativity of Generation Alpha, this format fosters a youth-first future. Mixed Flow balances athlete diversity with competitive excellence, ensuring a high-performance stage that transforms gymnastics from a rigid tradition into a vibrant, media-dynamic powerhouse.
              </p>
            </div>

            {/* Governing */}
            <div className="space-y-4">
              <div className="h-64 sm:h-80 w-full relative rounded-2xl overflow-hidden mb-6 border border-border">
                <img src="/images/gymnastics_governing_v2_1773844802219.png" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" alt="Governing and Safeguarding" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-foreground">Governing & Structure</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Scandals have revealed serious failures within elite gymnastics, demonstrating the need for stronger global protection. The first pillar focuses on strengthening safeguarding worldwide through a mandatory WG digital learning platform yielding a Global Youth Coaching License. This is reinforced by a global eligibility register closing safeguarding gaps.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                The second pillar focuses on wellbeing. We propose a Global Injury and Training Load Reporting System to track training hours and early signs of burnout. This is supported by an International Coach Buddy System to promote peer learning, accountability, and better decision-making in athlete development.
              </p>
            </div>

            {/* Format (Mixed Flow) */}
            <div className="space-y-4">
              <div className="w-full relative rounded-2xl overflow-hidden mb-6 border border-border shadow-2xl bg-black">
                <video 
                  src="/videos/gymnastics_demo.mp4" 
                  className="w-full h-auto" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  controls 
                  aria-label="Mixed Flow Gymnastics Format Demonstration"
                />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-foreground">Format</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Under the Artistic discipline, Mixed Flow Gymnastics merges technical mastery with raw creativity, aiming at Generation Alpha. The format features direct confrontations between two mixed teams of four (2w/2m) across four rounds. In Round 1 (60s), athletes perform a pre-determined routine on certified apparatus (floor, trampette, low bar structure, rapid horizontal bar). In Round 2 (60s), the focus shifts to creativity and urban/artistic choreography. Athletes must use all 4 apparatus and begin with the final movement of the previous team. Scoring components are:
              </p>
              <ul className="grid sm:grid-cols-2 gap-4 mt-4">
                {[
                  "Technical execution (40%)",
                  "Creativity and flow (40%)",
                  "Team interaction (20%)"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 bg-background p-4 rounded-xl border border-border">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trail Blazers */}
            <div className="space-y-8 pb-12">
              <div className="space-y-4">
                <h3 className="font-heading text-2xl font-semibold text-foreground">Trail Blazers: Dakar 2026 Show</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The proposed athlete lineup combines globally recognized stars and emerging talents, ensuring a balance between media appeal, technical excellence, and innovation potential.
                </p>
              </div>

              {/* Teams Grid */}
              <div className="space-y-12">
                {/* Team A */}
                <div>
                  <h4 className="font-heading text-xl font-bold text-accent mb-6 flex items-center gap-2">
                    Team A – Brazil / Americas
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-background border border-border rounded-2xl overflow-hidden flex flex-col group">
                      <div className="h-48 relative overflow-hidden">
                        <img src="/images/athlete_rebeca_1773845120530.png" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" alt="Rebeca Andrade" />
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <h5 className="font-bold text-lg text-foreground">Rebeca Andrade</h5>
                        <span className="text-xs font-bold text-accent uppercase tracking-wide mb-3">Team leader & anchor</span>
                        <p className="text-sm text-muted-foreground leading-relaxed flex-1">Multiple Olympic & World Championship medalist. Combines elite performance, global recognition, and strong artistic expression.</p>
                      </div>
                    </div>
                    <div className="bg-background border border-border rounded-2xl overflow-hidden flex flex-col group">
                      <div className="h-48 relative overflow-hidden">
                        <img src="/images/athlete_arthur_1773845136154.png" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" alt="Arthur Nory" />
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <h5 className="font-bold text-lg text-foreground">Arthur Nory</h5>
                        <span className="text-xs font-bold text-accent uppercase tracking-wide mb-3">Charismatic performance leader</span>
                        <p className="text-sm text-muted-foreground leading-relaxed flex-1">Olympic & World medalist. Known for expressiveness and showmanship, highly suitable for a performance-driven competition.</p>
                      </div>
                    </div>
                    <div className="bg-background border border-border rounded-2xl overflow-hidden flex flex-col group">
                      <div className="h-48 relative overflow-hidden">
                        <img src="/images/athlete_julia_1773845155424.png" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" alt="Julia Soares" />
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <h5 className="font-bold text-lg text-foreground">Julia Soares</h5>
                        <span className="text-xs font-bold text-accent uppercase tracking-wide mb-3">Emerging performer</span>
                        <p className="text-sm text-muted-foreground leading-relaxed flex-1">Represents the next generation, with potential in both technical execution and artistic choreography integration.</p>
                      </div>
                    </div>
                    <div className="bg-background border border-border rounded-2xl overflow-hidden flex flex-col group">
                      <div className="h-48 relative overflow-hidden">
                        <img src="/images/athlete_diogo_1773845171527.png" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" alt="Diogo Soares" />
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <h5 className="font-bold text-lg text-foreground">Diogo Soares</h5>
                        <span className="text-xs font-bold text-accent uppercase tracking-wide mb-3">Technical all-around specialist</span>
                        <p className="text-sm text-muted-foreground leading-relaxed flex-1">Participant at Olympic Games (Tokyo 2020) and Youth Olympic medalist. Brings versatility and consistency to adapting dynamic competition formats.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Team B */}
                <div>
                  <h4 className="font-heading text-xl font-bold text-accent mb-6 flex items-center gap-2">
                    Team B – USA / North America
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-background border border-border rounded-2xl overflow-hidden flex flex-col group">
                      <div className="h-48 relative overflow-hidden">
                        <img src="/images/athlete_simone_1773845192878.png" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" alt="Simone Biles" />
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <h5 className="font-bold text-lg text-foreground">Simone Biles</h5>
                        <span className="text-xs font-bold text-accent uppercase tracking-wide mb-3">Global ambassador & team leader</span>
                        <p className="text-sm text-muted-foreground leading-relaxed flex-1">The most decorated gymnast in history. Guarantees maximum global visibility, credibility, and immense media impact.</p>
                      </div>
                    </div>
                    <div className="bg-background border border-border rounded-2xl overflow-hidden flex flex-col group">
                      <div className="h-48 relative overflow-hidden">
                        <img src="/images/athlete_fred_1773845210850.png" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" alt="Fred Richard" />
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <h5 className="font-bold text-lg text-foreground">Fred Richard</h5>
                        <span className="text-xs font-bold text-accent uppercase tracking-wide mb-3">Digital ambassador & motivator</span>
                        <p className="text-sm text-muted-foreground leading-relaxed flex-1">World Bronze Medalist. Combines high-level performance and dynamic routines that inspire the next generation.</p>
                      </div>
                    </div>
                    <div className="bg-background border border-border rounded-2xl overflow-hidden flex flex-col group">
                      <div className="h-48 relative overflow-hidden">
                        <img src="/images/athlete_asher_1773845232657.png" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" alt="Asher Hong" />
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <h5 className="font-bold text-lg text-foreground">Asher Hong</h5>
                        <span className="text-xs font-bold text-accent uppercase tracking-wide mb-3">Power specialist</span>
                        <p className="text-sm text-muted-foreground leading-relaxed flex-1">World Championships medalist and NCAA Champion. Adds raw power, execution quality, and competitive credibility.</p>
                      </div>
                    </div>
                    <div className="bg-background border border-border rounded-2xl overflow-hidden flex flex-col group">
                      <div className="h-48 relative overflow-hidden">
                        <img src="/images/athlete_hezly_1773845248419.png" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" alt="Hezly Rivera" />
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <h5 className="font-bold text-lg text-foreground">Hezly Rivera</h5>
                        <span className="text-xs font-bold text-accent uppercase tracking-wide mb-3">Youth representative</span>
                        <p className="text-sm text-muted-foreground leading-relaxed flex-1">Promising young talent with numerous international junior/senior podiums. Aligning strongly with the Youth Olympic focus.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>



          </div>

          {/* Sidebar / Extra info - 1 column wide on large screens */}
          <div className="space-y-8">



            {/* Infrastructure Efforts */}
            <div className="bg-card border border-border rounded-3xl p-8">
              <div className="h-48 w-full relative rounded-xl overflow-hidden mb-6 border border-border">
                <img src="/images/gymnastics_infrastructure_v2_1773844837358.png" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" alt="Modern Gymnastics Infrastructure" />
              </div>
              <h3 className="font-heading text-xl font-bold text-card-foreground mb-4">Infrastructure & Ecosystem</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Five continental educational hubs will serve as centers for knowledge sharing. Gymnova, Spieth Gymnastics, Taishan Sports, and Senoh provide equipment and facility support. International finance flow will be handled by Corpay, while Olympic Solidarity and the Gymnastics Ethics Foundation will oversee coach education. Our approach is based on the 5&apos;C coaching model by Boldly: Connection, Clarity, Commitment, Challenge, and Change.
              </p>
              <div className="space-y-3">
                <div className="bg-background rounded-xl p-4 border border-border">
                  <span className="block text-sm font-semibold text-foreground mb-1">Equipment Partners</span>
                  <span className="text-sm text-muted-foreground">Gymnova, Spieth, Taishan, Senoh</span>
                </div>
                <div className="bg-background rounded-xl p-4 border border-border">
                  <span className="block text-sm font-semibold text-foreground mb-1">Coaching & Governance</span>
                  <span className="text-sm text-muted-foreground">Olympic Solidarity, GymnEthics Foundation, Boldly</span>
                </div>
                <div className="bg-background rounded-xl p-4 border border-border">
                  <span className="block text-sm font-semibold text-foreground mb-1">Finance Partner</span>
                  <span className="text-sm text-muted-foreground">Corpay</span>
                </div>
              </div>
            </div>

            {/* Trail Blazers Reasoning */}
            <div className="bg-card border border-border rounded-3xl p-8">
              <h3 className="font-heading text-xl font-bold text-card-foreground mb-4">Scouting: Why Brazil & USA?</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The selection of these epicenters is highly strategic:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Relevance:</strong> Top-performing nations ensuring technical excellence.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Entertainment:</strong> US global visibility mixed with Brazil’s artistic performance culture.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Diversity:</strong> Naturally reflects distinct backgrounds and strong gender balance.</span>
                </li>
              </ul>
            </div>

            {/* Feasibility */}
            <div className="bg-card border border-border rounded-3xl p-8">
              <h3 className="font-heading text-xl font-bold text-card-foreground mb-4">Feasibility Roadmap</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our expert Finance team has thoroughly examined the projected cost. WG certification and development costs stand at 450,000 Euro. We estimate a discounted cash flow of 1,005,000 Euro over five years (2030-2035) from New Sponsorship, Digital Media Rights, Licensing, and Asset Terminal Value.
              </p>
              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b border-border pb-4">
                  <span className="text-sm font-medium text-foreground">Initial Cost</span>
                  <span className="text-lg font-bold text-accent">€450,000</span>
                </li>
                <li className="flex justify-between items-center border-b border-border pb-4">
                  <span className="text-sm font-medium text-foreground">Estimated ROI</span>
                  <span className="text-lg font-bold text-emerald-500">~14%</span>
                </li>
                <li className="flex justify-between items-center border-b border-border pb-4">
                  <span className="text-sm font-medium text-foreground">SROI Constraint</span>
                  <span className="text-lg font-bold text-emerald-500">€0.44 / viewer</span>
                </li>
                <li className="flex justify-between items-center pt-2">
                  <span className="text-sm font-medium text-foreground">Projected 2030 Audience</span>
                  <span className="text-lg font-bold text-emerald-500">2M Gen Alpha</span>
                </li>
              </ul>
            </div>

            {/* Conclusion */}
            <div className="relative mt-8 overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-background via-background to-accent/10 p-8 md:p-12 shadow-2xl">
              <div className="absolute top-0 right-0 -mr-12 -mt-12 w-64 h-64 bg-accent/20 blur-[100px] rounded-full pointer-events-none"></div>
              <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
                <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent text-sm font-bold tracking-wider uppercase mb-2">The Future</span>
                <h3 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground pb-2">The Vision</h3>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                  Adopting <strong className="text-foreground font-semibold">Mixed Flow Gymnastics</strong> is essential to transcend current crossroads. Despite rising geopolitical tensions presenting significant implementation challenges, this inclusive format offers a unique platform to foster <span className="text-accent font-semibold">global unity and peace</span> through the Olympic spirit. 
                </p>
                <div className="w-24 h-1 bg-accent/50 mx-auto rounded-full my-8"></div>
                <h4 className="font-heading text-2xl md:text-4xl font-bold text-foreground leading-tight">
                  &quot;The future of gymnastics isn&apos;t something we predict. <br/>
                  <span className="text-accent">It&apos;s something we build together.</span>&quot;
                </h4>
              </div>
            </div>

          </div>
        </div>

        {/* Revamped Full-Width Implementation Plan */}
        <div className="space-y-12 pt-20 mt-12 border-t border-border">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">Strategic Map</p>
            <h3 className="font-heading text-3xl md:text-5xl font-bold text-foreground font-balance">Implementation Plan</h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A meticulously crafted 5-phase approach ensuring operational viability, global sustainability, and peak efficiency across five continents.
            </p>
          </div>

          <div className="w-full relative rounded-3xl overflow-hidden border border-border shadow-2xl bg-white p-2">
            <img src="/images/implementation-map.png" className="w-full h-auto object-contain rounded-2xl" alt="5-Phase Implementation Strategic Map" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "Kickoff Phase", phase: "1", desc: "Legends Show (Dakar 2026). Showcasing technical excellence and innovation potential to lay the baseline for future development.", icon: "🚀" },
              { title: "Seed Phase", phase: "2", desc: "Q4 2026 – Q2 2027: Building operational staff, creating 5 continental hubs, and accrediting international coaches/judges.", icon: "🌱" },
              { title: "Pilot Phase", phase: "3", desc: "Lima 2027 (Pan Am & Parapan Games): 5 teams representing the rings. Targeting 90% positive athlete feedback on operational safety.", icon: "🎯" },
              { title: "Expansion Phase", phase: "4", desc: "2028–2029: Distribute global ruleset & accredit 100+ international judges and 500+ coaches via train-the-trainer hubs.", icon: "🌍" },
              { title: "Roll-Out Phase", phase: "5", desc: "2029–2030: Final integration into the 2030 YOG program as a permanent Mixed-Gender Team Discipline for both able-bodied and para-athletes.", icon: "🏆" }
            ].map((item) => (
              <div key={item.phase} className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden group hover:border-accent transition-colors flex flex-col">
                <div className="text-4xl mb-4 relative z-10">{item.icon}</div>
                <div className="absolute -top-4 -right-4 text-8xl font-black text-muted/10 group-hover:text-accent/10 transition-colors pointer-events-none">
                  {item.phase}
                </div>
                <h4 className="font-bold text-lg text-foreground mb-2 relative z-10">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
