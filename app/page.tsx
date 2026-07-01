"use client";

import Image from "next/image";
import { useState } from "react";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby-vwj5Rfp5KS9E19EYivdH1DjUAz_fIU9HV1veJhZsIi4jvUMctlFdcu55vA1hGBMA/exec";

function TryoutForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim()) return;
    setStatus("loading");
    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      });
      setStatus("success");
      setName("");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-[#0B2F4A] py-24">
      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="uppercase tracking-[0.25em] text-[#6CB4E4] font-semibold mb-4 text-sm">
            Join the Team
          </p>
          <h2 className="text-4xl font-bold text-white mb-6">Tryouts open next year.</h2>
          <p className="text-slate-300 leading-8 text-lg">
            We will be holding tryouts for the upcoming season. Drop your email and we will reach out when dates are confirmed — no commitment required.
          </p>
        </div>
        <div className="bg-white/8 border border-white/10 rounded-2xl p-8">
          {status === "success" ? (
            <div className="flex flex-col items-center text-center py-6 gap-4">
              <div className="w-12 h-12 rounded-full bg-[#6CB4E4]/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#6CB4E4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-white font-semibold">You are on the list.</p>
              <p className="text-slate-400 text-sm">We will reach out when tryout dates are set.</p>
            </div>
          ) : (
            <>
              <p className="text-white font-semibold mb-6">Get notified when tryouts open</p>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Parent name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/10 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#6CB4E4]/60"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/10 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#6CB4E4]/60"
                />
                <button
                  onClick={handleSubmit}
                  disabled={status === "loading" || !name.trim() || !email.trim()}
                  className="w-full bg-[#6CB4E4] text-[#0B2F4A] py-3 rounded-lg font-semibold text-sm hover:bg-[#6CB4E4]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Submitting..." : "Join the Interest List"}
                </button>
                {status === "error" && (
                  <p className="text-red-400 text-xs">Something went wrong. Please try again.</p>
                )}
              </div>
              <p className="text-slate-500 text-xs mt-4">No spam. Just one email when tryouts are announced.</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function FlipCard({ coach }: { coach: { name: string; fullName: string; role: string; bio: string; flipImage: string } }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className="snap-start shrink-0 w-72 md:w-80 cursor-pointer"
      style={{ height: "380px", perspective: "1000px" }}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s ease",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
          className="absolute inset-0 bg-white/8 border border-white/10 rounded-2xl p-8 flex flex-col gap-5"
        >
          <div className="w-14 h-14 rounded-full bg-[#6CB4E4]/15 border border-[#6CB4E4]/30 flex items-center justify-center text-[#6CB4E4] text-lg font-bold">
            {coach.name.split(" ")[1]?.[0] ?? coach.name[0]}
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">{coach.name}</h3>
            <p className="text-slate-300 text-xs mt-0.5">{coach.fullName}</p>
            <p className="text-[#6CB4E4] text-xs font-semibold uppercase tracking-wider mt-2">
              {coach.role}
            </p>
          </div>
          <p className="text-slate-400 leading-7 text-sm">{coach.bio}</p>
          <p className="text-slate-500 text-xs mt-auto">Tap to flip →</p>
        </div>

        {/* Back */}
        <div
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          className="absolute inset-0 rounded-2xl overflow-hidden"
        >
          <Image
            src={coach.flipImage}
            alt={coach.name}
            fill
            className="object-cover"
          />
          <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">
            Tap to flip back
          </div>
        </div>
      </div>
    </div>
  );
}

const SectionIntro = ({
  eyebrow,
  heading,
  body,
}: {
  eyebrow: string;
  heading: string;
  body?: string;
}) => (
  <div>
    <p className="uppercase tracking-[0.25em] text-[#6CB4E4] font-semibold mb-4 text-sm">
      {eyebrow}
    </p>
    <h2 className="text-4xl font-bold mb-6 text-[#0B2F4A]">{heading}</h2>
    {body && <p className="text-lg text-slate-500 leading-8">{body}</p>}
  </div>
);

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#standard", label: "Standard" },
    { href: "#philosophy", label: "Philosophy" },
    { href: "#coach", label: "Coach" },
    { href: "#results", label: "Results" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  const standards = [
    ["Brotherhood", "We put the team first, support each other, and build trust on and off the field."],
    ["Commitment", "We show up prepared, work hard, and give consistent effort even when it is difficult."],
    ["Communication", "We talk, encourage, organize, and bring positive energy to every training session and match."],
    ["Competitive Spirit", "We compete with confidence, resilience, and purpose while respecting the game."],
    ["Soccer Intelligence", "We learn to read the game, make smart decisions, and solve problems together."],
    ["Character", "We use soccer to build discipline, accountability, humility, and resilience."],
  ];

  const coaches = [
    {
      name: "Coach Sam",
      fullName: "Sam Jaggi",
      role: "Head Coach",
      bio: "Sam believes soccer is 80% mind. He builds disciplined, coachable players who are students of the game—hungry to improve every single day.",
      flipImage: "/images/Sam_flip.png",
    },
    {
      name: "Coach Mark",
      fullName: "Mark Jaggi",
      role: "Assistant Coach",
      bio: "Mark emphasizes technical development and team culture. He helps players build confidence, resilience, and a deep understanding of the game.",
      flipImage: "/images/Mark_flip.png",
    },
    {
      name: "Coach Cole",
      fullName: "Cole LeRoy",
      role: "Skills & Development",
      bio: "Cole runs individual skill sessions and helps players refine their technique, decision-making, and movement patterns at every position.",
      flipImage: "/images/Cole_flip.png",
    },
    {
      name: "GK Coach",
      fullName: "Goalkeeper Coach",
      role: "Goalkeeper Coach",
      bio: "Works exclusively with the team's goalkeepers on shot-stopping, distribution, positioning, and the mental side of playing the position.",
      flipImage: "/images/Goal_Keeper_Coach.png",
    },
  ];

  const galleryItems = [
    { label: "Team Photo", src: "/images/gallery1.jpeg" },
    { label: "Game Highlights", src: "/images/gallery2.jpg" },
    { label: "Tournament Weekend", src: "/images/gallery3.jpeg" },
    { label: "Training Session", src: "/images/gallery4.jpeg" },
    { label: "Team Events", src: "/images/gallery5.jpeg" },
    { label: "Season Moments", src: "/images/gallery6.jpeg" },
    { label: "Season Moments", src: "/images/gallery7.jpeg" },
    { label: "Season Moments", src: "/images/gallery8.jpeg" },
  ];

  const testimonials = [
    {
      quote: "This program has done more for my son's confidence and love of the game than anything else we've tried.",
      name: "Parent, Man City FC",
    },
    {
      quote: "The coaches genuinely care about developing the whole player — not just wins. We've seen real growth.",
      name: "Parent, Man City FC",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#0B2F4A]">

      {/* Navigation */}
      <nav className="bg-white border-b border-[#0B2F4A]/10 flex items-center justify-between px-8 md:px-12 py-4 relative z-40">
        <div className="flex items-center gap-3">
          <Image src="/images/logo.PNG" alt="Man City FC Logo" width={52} height={52} />
          <div>
            <div className="text-xl font-bold text-[#0B2F4A] leading-tight">Man City FC</div>
            <div className="text-xs text-slate-400 tracking-wide">Utah Youth Soccer · U12</div>
          </div>
        </div>

        <div className="hidden md:flex gap-8 font-medium text-sm text-[#0B2F4A]">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className="hover:text-[#6CB4E4] transition-colors">
              {label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className={`block w-6 h-0.5 bg-[#0B2F4A] transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#0B2F4A] transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#0B2F4A] transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-[#0B2F4A]/10 flex flex-col z-50 shadow-md">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="px-8 py-4 text-sm font-medium text-[#0B2F4A] border-b border-[#0B2F4A]/10 hover:bg-slate-50 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="bg-[#0B2F4A]">
        <div className="max-w-6xl mx-auto px-8 py-28 md:py-36 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#6CB4E4]/15 text-[#6CB4E4] text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-8">
              Utah Youth Soccer · U12
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">
              Play brave.<br />
              Play smart.<br />
              Play together.
            </h1>
            <p className="text-lg text-slate-300 leading-8 mb-10">
              WWhen players love the game, they keep learning, keep competing, and keep growing. Every session is designed to build that love—and the skill, character, and confidence to go with it.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#about" className="bg-[#6CB4E4] text-[#0B2F4A] px-6 py-3 rounded-lg font-semibold hover:bg-[#6CB4E4]/90 transition-colors">
                Learn More
              </a>
              <a href="#contact" className="border border-white/20 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <Image src="/images/logo.PNG" alt="Man City FC Crest" width={340} height={340} className="opacity-95" />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
          <SectionIntro
            eyebrow="About"
            heading="A team built on discipline, intelligence, and growth."
          />
          <p className="text-lg text-slate-500 leading-8">
            Man City FC is a U12 club where players are developed as athletes and as people. We build students of the game—young men who compete with confidence, think on their feet, and carry what they learn here long after the final whistle.
          </p>
        </div>
      </section>

      {/* Standards */}
      <section id="standard" className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-8">
          <p className="uppercase tracking-[0.25em] text-[#6CB4E4] font-semibold mb-4 text-sm">
            Team Values
          </p>
          <h2 className="text-4xl font-bold mb-4 text-[#0B2F4A]">The Man City Standard</h2>
          <p className="text-lg text-slate-500 max-w-2xl mb-14">
            Our culture is built on effort, communication, courage, soccer intelligence, character, and a genuine love for the game.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {standards.map(([title, text]) => (
              <div key={title} className="bg-white rounded-2xl border border-[#0B2F4A]/8 p-8">
                <div className="w-6 h-1 rounded-full bg-[#6CB4E4] mb-5" />
                <h3 className="text-lg font-bold mb-3 text-[#0B2F4A]">{title}</h3>
                <p className="text-slate-500 leading-7 text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
          <SectionIntro eyebrow="Philosophy" heading="The game is 80% mind." />
          <p className="text-lg text-slate-500 leading-8">
            We train the mental side of soccer just as hard as the physical side. Players who thrive here are students of the game—always learning, always improving, always looking to understand the deeper details. Success isn’t only about winning. It’s about dominating through intelligence, decision-making, and technical ability.
          </p>
        </div>
      </section>

      {/* Coaches */}
      <section id="coach" className="bg-[#0B2F4A] py-24">
        <div className="max-w-6xl mx-auto px-8 mb-12">
          <p className="uppercase tracking-[0.25em] text-[#6CB4E4] font-semibold mb-4 text-sm">
            Coaching Staff
          </p>
          <h2 className="text-4xl font-bold text-white">Led with full effort.</h2>
        </div>

        <div className="pl-8 md:pl-[calc((100vw-72rem)/2+2rem)]">
          <div className="flex gap-6 overflow-x-auto pb-6 pr-8 snap-x snap-mandatory">
            {coaches.map((coach) => (
              <FlipCard key={coach.name} coach={coach} />
            ))}
          </div>
        </div>
        <p className="text-slate-500 text-xs px-8 md:px-[calc((100vw-72rem)/2+2rem)] mt-3">
          Tap a card to flip · Scroll to see all coaches →
        </p>
      </section>

      {/* Parents */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-8">
          <p className="uppercase tracking-[0.25em] text-[#6CB4E4] font-semibold mb-4 text-sm">
            For Parents
          </p>
          <h2 className="text-4xl font-bold mb-14 text-[#0B2F4A]">What to expect</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              ["Clear Communication", "Important updates, schedules, and expectations shared clearly and consistently."],
              ["Positive Challenge", "Players are pushed to grow while being supported as people, not just athletes."],
              ["Team-First Culture", "Players are expected to compete hard, respect the game, and support every teammate."],
            ].map(([title, text]) => (
              <div key={title}>
                <div className="w-6 h-1 rounded-full bg-[#6CB4E4] mb-5" />
                <h3 className="font-bold text-lg mb-3 text-[#0B2F4A]">{title}</h3>
                <p className="text-slate-500 leading-7 text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Gallery */}
      <section id="gallery" className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-8 mb-10">
          <p className="uppercase tracking-[0.25em] text-[#6CB4E4] font-semibold mb-4 text-sm">
            Gallery
          </p>
          <h2 className="text-4xl font-bold text-[#0B2F4A]">Team Moments</h2>
        </div>

        <div className="pl-8 md:pl-[calc((100vw-72rem)/2+2rem)]">
          <div className="flex gap-5 overflow-x-auto pb-6 pr-8 snap-x snap-mandatory">
            {galleryItems.map(({ label, src }) => (
              <div
                key={label}
                className="snap-start shrink-0 w-72 md:w-72 aspect-square rounded-2xl bg-slate-50 border border-[#0B2F4A]/8 overflow-hidden flex items-center justify-center"
              >
                {src ? (
                  <Image src={src} alt={label} width={288} height={288} className="object-cover w-full h-full" />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-slate-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 19.5h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    <span className="text-xs">{label}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <p className="text-slate-400 text-xs px-8 md:px-[calc((100vw-72rem)/2+2rem)] mt-3">
          Scroll to see more →
        </p>

        <div className="max-w-6xl mx-auto px-8 mt-10">
          <a
            href="https://www.youtube.com/channel/UCl_79NNg9ze7DN4FSiEeocQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#0B2F4A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0B2F4A]/90 transition-colors text-sm"
          >
            Watch Videos on YouTube
          </a>
        </div>
      </section>

      {/* Tryout Interest */}

      {/* Results */}
      <section id="results" className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-8">
          <p className="uppercase tracking-[0.25em] text-[#6CB4E4] font-semibold mb-4 text-sm">
            Results
          </p>
          <h2 className="text-4xl font-bold mb-4 text-[#0B2F4A]">Season Results</h2>
          <p className="text-slate-500 mb-14 text-lg">Match results will be posted here throughout the season.</p>

          <div className="bg-white rounded-2xl border border-[#0B2F4A]/8 p-16 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-[#6CB4E4]/10 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#6CB4E4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0B2F4A] mb-3">Coming Soon</h3>
            <p className="text-slate-400 text-sm max-w-sm leading-7">
              Results from our matches will appear here as the season gets underway. Check back soon.
            </p>
          </div>
        </div>
      </section>


      <TryoutForm />

      {/* Testimonials */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-8">
          <p className="uppercase tracking-[0.25em] text-[#6CB4E4] font-semibold mb-4 text-sm">
            From the Sidelines
          </p>
          <h2 className="text-4xl font-bold mb-14 text-[#0B2F4A]">What families are saying</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl border border-[#0B2F4A]/8 p-10">
                <div className="text-[#6CB4E4] text-4xl font-serif leading-none mb-4">"</div>
                <p className="text-[#0B2F4A] text-lg leading-8 mb-6">{t.quote}</p>
                <p className="text-slate-400 text-sm font-medium">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer id="contact" className="bg-white border-t border-[#0B2F4A]/10 py-16 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/images/logo.PNG" alt="Man City FC Logo" width={44} height={44} />
              <div>
                <div className="font-bold text-[#0B2F4A]">Man City FC</div>
                <div className="text-xs text-slate-400">Utah Youth Soccer · U12</div>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-7">
              Building better players, better teammates, and better young men through the game of soccer.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[#0B2F4A] mb-4 text-sm">Get in Touch</h3>
            <a href="mailto:mancityfcutah@gmail.com" className="text-slate-500 text-sm hover:text-[#0B2F4A] transition-colors block mb-2">
              mancityfcutah@gmail.com
            </a>
            <p className="text-slate-400 text-xs leading-6">
              Questions about the team, schedule, or upcoming events? Reach out and we will get back to you.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[#0B2F4A] mb-4 text-sm">Follow Along</h3>
            <div className="flex gap-4">
              {/* YouTube */}
              <a
                href="https://www.youtube.com/channel/UCl_79NNg9ze7DN4FSiEeocQ"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-lg border border-[#0B2F4A]/10 flex items-center justify-center text-slate-400 hover:text-[#0B2F4A] hover:border-[#0B2F4A]/30 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg border border-[#0B2F4A]/10 flex items-center justify-center text-slate-400 hover:text-[#0B2F4A] hover:border-[#0B2F4A]/30 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-[#0B2F4A]/8">
          <p className="text-slate-400 text-xs">© {new Date().getFullYear()} Man City FC · Utah Youth Soccer</p>
          <p className="text-slate-400 text-xs mt-2">Man City FC is an independent youth soccer club and is not affiliated with or endorsed by Manchester City Football Club.</p>
        </div>
      </footer>
    </main>
  );
}
