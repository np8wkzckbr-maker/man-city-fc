import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F3EA]">
      <nav className="flex items-center justify-between px-10 py-5 border-b border-slate-200 bg-[#F7F3EA]">
        <div className="flex items-center gap-4">
          <Image
            src="/images/logo.PNG"
            alt="Man City FC Logo"
            width={64}
            height={64}
          />

          <div>
            <div className="text-2xl font-bold text-[#0B2F4A]">
              Man City FC
            </div>
            <div className="text-sm text-slate-500">
              Utah Youth Soccer
            </div>
          </div>
        </div>

        <div className="hidden md:flex gap-8 text-[#0B2F4A] font-medium">
          <a href="#">About</a>
          <a href="#">Coaches</a>
          <a href="#">Team</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-8 py-28">
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.3em] text-[#D8B44A] font-semibold mb-6">
            Utah Youth Soccer
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-[#0B2F4A] leading-tight mb-8">
            Building Better Players.
            <br />
            Building Better Teammates.
          </h1>

          <p className="text-xl text-slate-600 max-w-2xl mb-10">
            Man City FC develops skilled, confident, and resilient players
            through purposeful training, competitive soccer, and a team-first
            culture.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-[#0B2F4A] text-white px-6 py-3 rounded-lg font-medium">
              Learn More
            </button>

            <button className="border border-[#0B2F4A] text-[#0B2F4A] px-6 py-3 rounded-lg font-medium">
              Meet The Team
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-[#0B2F4A] mb-6">
            The Man City Standard
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mb-12">
            Our team culture is built on effort, communication, brotherhood,
            soccer intelligence, and a genuine love for the game.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Brotherhood",
                text: "We put the team first and support one another through every challenge.",
              },
              {
                title: "Commitment",
                text: "Growth comes from effort, consistency, and showing up ready to work.",
              },
              {
                title: "Competitive Spirit",
                text: "We embrace challenges and strive to reach our full potential.",
              },
              {
                title: "Communication",
                text: "Great teams talk, encourage, organize, and bring energy to the field.",
              },
              {
                title: "Soccer Intelligence",
                text: "We learn to read the game, make smart decisions, and solve problems.",
              },
              {
                title: "Love of the Game",
                text: "We train hard, compete hard, and never lose the joy of playing soccer.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 p-8 bg-[#F7F3EA]"
              >
                <h3 className="text-xl font-bold text-[#0B2F4A] mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}