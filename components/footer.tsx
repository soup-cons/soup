export function Footer() {
  return (
    <footer className="bg-foreground py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex flex-col items-start leading-none">
              <span className="font-sans text-2xl font-extrabold tracking-tight text-accent lowercase">
                soup<span className="text-accent">.</span>
              </span>
              <span className="text-[0.5rem] font-bold uppercase tracking-[0.15em] text-background/50 mt-[-2px]">
                Consulting Agency
              </span>
            </div>
            <p className="mt-4 text-sm text-background/60 leading-relaxed max-w-md">
              Sports Oriented Understanding People. Bridging the gap between data,
              strategy, and execution to enhance athlete experience across the globe.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/80 mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About", href: "#about" },
                { label: "Values", href: "#values" },
                { label: "Services", href: "#services" },
                { label: "Case Studies", href: "#case-studies" },
                { label: "Team", href: "#team" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-background/50 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/80 mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@soupagency.com"
                  className="text-sm text-background/50 hover:text-background transition-colors"
                >
                  contact@soupagency.com
                </a>
              </li>
              <li className="text-sm text-background/50">Paris, France</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col items-center justify-center gap-2 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 w-full">
            <p className="text-xs text-background/40">
              SOUP Consulting Agency LLC. All rights reserved.
            </p>
            <span className="hidden md:inline text-background/20">•</span>
            <p className="text-xs text-background/40">
              Incorporated in Paris, France
            </p>
          </div>
          <p className="text-[10px] text-background/30 max-w-2xl mt-1">
            Disclaimer: SOUP Consulting Agency is a fictitious entity created for demonstration purposes only. It is not a real company, and any resemblance to actual entities or organizations is purely coincidental.
          </p>
        </div>
      </div>
    </footer>
  )
}
