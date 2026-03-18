"use client"

import { Mail, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent mb-4">
              Contact
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground leading-tight text-balance">
              Ready to elevate your athletes{"'"} potential?
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed">
              Whether you are a sports federation, club, or organization looking to
              build a holistic support system for your athletes, we are here to help.
              Let{"'"}s start planning.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
                  <Mail className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Email</p>
                  <a
                    href="mailto:contact@soupagency.com"
                    className="text-primary-foreground font-medium hover:text-accent transition-colors"
                  >
                    contact@soupagency.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
                  <MapPin className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Office</p>
                  <p className="text-primary-foreground font-medium">Paris, France</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 p-8 lg:p-10">
            <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-8">
              Get in touch
            </h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-primary-foreground/70 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    className="w-full rounded-lg border border-primary-foreground/20 bg-transparent px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-primary-foreground/70 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    className="w-full rounded-lg border border-primary-foreground/20 bg-transparent px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-primary-foreground/70 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-lg border border-primary-foreground/20 bg-transparent px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  placeholder="you@organization.com"
                />
              </div>
              <div>
                <label
                  htmlFor="organization"
                  className="block text-sm font-medium text-primary-foreground/70 mb-2"
                >
                  Organization
                </label>
                <input
                  id="organization"
                  type="text"
                  className="w-full rounded-lg border border-primary-foreground/20 bg-transparent px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  placeholder="Your federation, club, or organization"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-primary-foreground/70 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-lg border border-primary-foreground/20 bg-transparent px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
