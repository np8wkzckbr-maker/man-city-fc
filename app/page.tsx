import Image from "next/image";

export default function Home() {
  const standards = [
    ["Brotherhood", "We put the team first, support each other, and build trust on and off the field."],
    ["Commitment", "We show up prepared, work hard, and give consistent effort for the team."],
    ["Communication", "We talk, encourage, organize, and bring positive energy to every match."],
    ["Competitive Spirit", "We embrace challenges and compete with confidence, resilience, and purpose."],
    ["Soccer Intelligence", "We learn to read the game, make smart decisions, and solve problems together."],
    ["Love of the Game", "We train hard, compete hard, and never lose the joy of playing soccer."],
  ];

  return (
    <main className="min-h-screen bg-[#F7F3EA] text-[#0B2F4A]">
      <nav className="flex items-center justify-between px-8 md:px-12 py-5 border-b border-[#0B2F4A]/10">
        <div className="flex items-center gap-4">
          <Image src="/images/logo.PNG" alt="Man City FC Logo" width={64} height={64} />
          <div>
            <div className="text-2xl font-bold">Man City FC</div>
            <div className="text-sm text-slate-500">Utah Youth Soccer</div>
          </div>
        </div>

     <div className="hidden md:flex gap-8 font-medium">
  <a href="#about">About</a>
  <a href="#standard">Standard</a>
  <a href="#coach">Coach</a>
  <a href="#gallery">Gallery</a>
  <a
    href="https://www.youtube.com/channel/UCl_79NNg9ze7DN4FSiEeocQ"
    target="_blank"
    rel="noopener noreferrer"
  >
    YouTube
  </a>
  <a href="#contact">Contact</a>
</div>
      </nav>

      <section className="max-w-6xl mx-auto px-8 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="uppercase tracking-[0.3em] text-[#D8B44A] font-semibold mb-6">
            Utah Youth Soccer
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Building Better Players.
            <br />
            Building Better Teammates.
          </h1>

          <p className="text-xl text-slate-600 mb-10">
            Man City FC develops skilled, confident, and resilient players through purposeful training, competitive soccer, and a team-first culture.
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
            <p className="uppercase tracking-[0.25em] text-[#D8B44A] font-semibold mb-4">About</p>
            <h2 className="text-4xl font-bold mb-6">A team built on development, effort, and brotherhood.</h2>
          </div>
          <p className="text-lg text-slate-600 leading-8">
            Man City FC is a youth soccer team focused on helping players grow as athletes, teammates, and young men. We believe players develop best in an environment that is challenging, positive, organized, and rooted in trust.
          </p>
        </div>
      </section>

      <section id="standard" className="py-24">
        <div className="max-w-6xl mx-auto px-8">
          <p className="uppercase tracking-[0.25em] text-[#D8B44A] font-semibold mb-4">Team Values</p>
          <h2 className="text-4xl font-bold mb-6">The Man City Standard</h2>
          <p className="text-lg text-slate-600 max-w-3xl mb-12">
            Our culture is built on effort, communication, courage, soccer intelligence, and a genuine love for the game.
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

      <section id="coach" className="bg-[#0B2F4A] text-white py-24">
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-12">
          <div>
            <p className="uppercase tracking-[0.25em] text-[#D8B44A] font-semibold mb-4">Coaching</p>
            <h2 className="text-4xl font-bold mb-6">Led with purpose.</h2>
          </div>
          <p className="text-lg text-slate-200 leading-8">
            Coach Sam’s focus is to create a team that competes with intensity, communicates constantly, plays with confidence, and supports each other like brothers. The goal is to help every player improve while building a team culture players are proud to be part of.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-8">
          <p className="uppercase tracking-[0.25em] text-[#D8B44A] font-semibold mb-4">Parents</p>
          <h2 className="text-4xl font-bold mb-10">What parents can expect</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-3">Clear Communication</h3>
              <p className="text-slate-600">Important updates, schedules, and expectations shared clearly.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">Positive Challenge</h3>
              <p className="text-slate-600">Players are pushed to grow while being supported as people.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">Team-First Culture</h3>
              <p className="text-slate-600">Players are expected to compete hard, respect the game, and support teammates.</p>
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

    <p className="text-lg text-slate-600 mb-12 max-w-3xl">
      Follow our season through game photos, tournament highlights,
      team events, and training moments.
    </p>

    <div className="grid md:grid-cols-3 gap-6">
      <div className="aspect-video bg-slate-200 rounded-2xl flex items-center justify-center">
        Team Photo
      </div>

      <div className="aspect-video bg-slate-200 rounded-2xl flex items-center justify-center">
        Game Highlights
      </div>

      <div className="aspect-video bg-slate-200 rounded-2xl flex items-center justify-center">
        Tournament Weekend
      </div>

      <div className="aspect-video bg-slate-200 rounded-2xl flex items-center justify-center">
        Training Session
      </div>

      <div className="aspect-video bg-slate-200 rounded-2xl flex items-center justify-center">
        Team Event
      </div>

      <div className="aspect-video bg-slate-200 rounded-2xl flex items-center justify-center">
        Season Highlights
      </div>
    </div>

    <div className="mt-10">
      <a
        href="https://www.youtube.com/channel/UCl_79NNg9ze7DN4FSiEeocQ"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#0B2F4A] text-white px-6 py-3 rounded-lg"
      >
        Watch Videos on YouTube
      </a>
    </div>
  </div>
</section>
      <footer id="contact" className="py-12 px-8 border-t border-[#0B2F4A]/10 text-center">
        <h2 className="text-2xl font-bold mb-3">Man City FC</h2>
        <p className="text-slate-600">Questions about the team, schedule, or upcoming events? Contact the coaching staff.</p>
      </footer>
    </main>
  );
}
