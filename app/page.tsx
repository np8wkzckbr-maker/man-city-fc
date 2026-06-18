"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const standards = [
    ["Competitive Spirit", "We embrace challenges and compete with confidence, resilience, and purpose."],
    ["Commitment", "We show up prepared, work hard, and give consistent effort for the team."],
    ["Communication", "We talk, encourage, organize, and bring positive energy to every match."],
    ["Brotherhood", "We put the team first, support each other, and build trust on and off the field."],
    ["Soccer Intelligence", "We learn to read the game, make smart decisions, and solve problems together."],
    ["Love of the Game", "We train hard, compete hard, and never lose the joy of playing soccer."],
  ];

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Standard", href: "#standard" },
    { label: "Coaches", href: "#coach" },
    { label: "Gallery", href: "#gallery" },
    { label: "YouTube", href: "https://www.youtube.com/channel/UCl_79NNg9ze7DN4FSiEeocQ", external: true },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <main className="min-h-screen bg-[#F7F3EA] text-[#0B2F4A]">
      <nav className="relative flex items-center justify-between px-8 md:px-12 py-5 border-b border-[#0B2F4A]/10">
        <div className="flex items-center gap-4">
          <Image src="/images/logo.PNG" alt="Man City FC Logo" width={64} height={64} />
          <div>
            <div className="text-2xl font-bold">Man City FC</div>
            <div className="text-sm text-slate-500">Utah Youth Soccer</div>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 font-medium">
          {navLinks.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#0B2F4A] transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#0B2F4A] transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#0B2F4A] transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#F7F3EA] border-b border-[#0B2F4A]/10 flex flex-col py-4 px-8 gap-5 font-medium z-50 md:hidden">
            {navLinks.map(({ label, href, external }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>

      <section className="max-w-6xl mx-auto px-8 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="uppercase tracking-[0.3em] text-[#D8B44A] font-semibold mb-6">
            Utah Youth Soccer
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Better Every Day.
          </h1>

          <p className="text-xl text-slate-600 mb-10 leading-8">
            We believe soccer is more than a game. Through purposeful training,
            competitive soccer, and a team-first culture, we develop players,
            build character, and create brotherhood.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#about" className="bg-[#0B2F4A] text-white px-6 py-3 rounded-lg font-medium">
              Learn More
            </a>
            <a href="#contact" className="border border-[#0B2F4A] px-6 py-3 rounded-lg font-medium">
              Contact Us
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <Image src="/images/logo.PNG" alt="Man City FC Crest" width={360} height={360} />
        </div>
      </section>

      <section id="about" className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-12">
          <div>
            <p className="uppercase tracking-[0.25em] text-[#D8B44A] font-semibold mb-4">
              About
            </p>
            <h2 className="text-4xl font-bold mb-6">
              Building players for the game—and for life.
            </h2>
          </div>

          <p className="text-lg text-slate-600 leading-8">
            Man City FC provides a positive, competitive environment where
            players are challenged to improve every day. We focus on developing
            skill, confidence, leadership, and character while fostering a
            culture built on trust, accountability, and teamwork.
          </p>
        </div>
      </section>

      <section id="standard" className="py-24">
        <div className="max-w-6xl mx-auto px-8">
          <p className="uppercase tracking-[0.25em] text-[#D8B44A] font-semibold mb-4">
            Team Values
          </p>

          <h2 className="text-4xl font-bold mb-6">
            The Man City Standard
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mb-12">
            Our culture is built on effort, communication, courage, soccer
            intelligence, brotherhood, and a genuine love for the game.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {standards.map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-[#0B2F4A]/10 bg-white p-8">
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-slate-600 leading-7">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="coach" className="py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="max-w-3xl mb-14">
            <p className="uppercase tracking-[0.25em] text-[#D8B44A] font-semibold mb-4">
              Coaching
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The game matters. The player matters more.
            </h2>

            <p className="text-lg text-slate-600 leading-8">
              Meet the coaches helping players grow through competition,
              character, and a love for the game.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-[#0B2F4A]/10 shadow-sm">
              <Image
                src="/images/Sam.jpg"
                alt="Coach Sam"
                width={700}
                height={800}
                className="rounded-xl mb-8 w-full h-[420px] object-cover object-top"
              />

              <h3 className="text-3xl font-bold mb-5">Coach Sam</h3>

              <blockquote className="text-2xl italic leading-9 mb-6 text-[#0B2F4A]">
                "My goal is simple: help every player love soccer more than
                they did when they arrived. When players love the game, they'll
                keep learning, keep competing, and keep growing."
              </blockquote>

              <p className="text-slate-600 leading-8">
                Sam believes the best development happens when players genuinely
                enjoy the game. Through challenging training, positive
                relationships, and competitive soccer, he works to build
                confident players who love showing up, working hard, and getting
                better every day.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#0B2F4A]/10 shadow-sm">
              <Image
                src="/images/Mark.jpeg"
                alt="Coach Mark"
                width={700}
                height={800}
                className="rounded-xl mb-8 w-full h-[420px] object-cover object-top"
              />

              <h3 className="text-3xl font-bold mb-5">Coach Mark</h3>

              <blockquote className="text-2xl italic leading-9 mb-6 text-[#0B2F4A]">
                "The lessons players learn through soccer often last longer
                than the results of any game. Every challenge is an opportunity
                to build character, strengthen resilience, and become a better
                teammate."
              </blockquote>

              <p className="text-slate-600 leading-8">
                Mark believes soccer is one of life's greatest teachers.
                Through accountability, perseverance, teamwork, and consistent
                effort, he helps players develop skills and character that
                extend far beyond the field.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-8">
          <p className="uppercase tracking-[0.25em] text-[#D8B44A] font-semibold mb-4">
            Parents
          </p>

          <h2 className="text-4xl font-bold mb-10">
            What parents can expect
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-3">Clear Communication</h3>
              <p className="text-slate-600">
                Important updates, schedules, and expectations shared clearly.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-3">Positive Challenge</h3>
              <p className="text-slate-600">
                Players are pushed to grow while being supported as people.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-3">Team-First Culture</h3>
              <p className="text-slate-600">
                Players are expected to compete hard, respect the game, and
                support teammates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24">
        <div className="max-w-6xl mx-auto px-8">
          <p className="uppercase tracking-[0.25em] text-[#D8B44A] font-semibold mb-4">
            Gallery
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Team Photos & Highlights
          </h2>

          <p className="text-lg text-slate-600 mb-10 max-w-3xl">
            Follow our season through game photos, training moments, and team
            highlights.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {[
              { src: "/images/gallery1.jpeg", alt: "Players battling for the ball" },
              { src: "/images/gallery2.jpeg", alt: "Scrimmage action" },
              { src: "/images/gallery3.jpeg", alt: "Player defending" },
              { src: "/images/gallery4.jpeg", alt: "Player at halftime" },
              { src: "/images/gallery5.jpeg", alt: "Player resting after practice" },
            ].map(({ src, alt }) => (
              <div key={src} className="aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src={src}
                  alt={alt}
                  width={600}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <a
            href="https://www.youtube.com/channel/UCl_79NNg9ze7DN4FSiEeocQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#0B2F4A] text-white px-6 py-3 rounded-lg font-medium"
          >
            Watch Videos on YouTube
          </a>
        </div>
      </section>

      <footer id="contact" className="py-16 px-8 border-t border-[#0B2F4A]/10 text-center">
        <h2 className="text-2xl font-bold mb-3">Man City FC</h2>
        <p className="text-slate-600 mb-6">
          Questions about the team, schedule, or upcoming events? Reach out to
          the coaching staff.
        </p>
        <a
          href="mailto:amylsessions@gmail.com"
          className="inline-block bg-[#0B2F4A] text-white px-6 py-3 rounded-lg font-medium"
        >
          Email the Coaches
        </a>
      </footer>
    </main>
  );
}
