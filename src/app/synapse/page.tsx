import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const SynapseLandingPage = () => {
  return (
    <div className={`${spaceGrotesk.className} min-h-screen bg-[#050705] text-[#f1f5f9] selection:bg-[#4ade80] selection:text-[#052e16]`}>
      <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-[#1e293b]/40 bg-[#050705]/80 px-8 py-4 backdrop-blur-md">
        <div className="flex items-center gap-2 text-2xl font-bold uppercase tracking-tighter text-[#4ade80]">
          <span>▣</span>
          Synapse
        </div>
        <div className="hidden items-center space-x-12 md:flex">
          <a className="text-[0.7rem] font-bold uppercase tracking-widest text-[#4ade80]" href="#">Features</a>
          <a className="text-[0.7rem] font-bold uppercase tracking-widest text-[#94a3b8] transition-colors hover:text-[#4ade80]" href="#">Solutions</a>
          <a className="text-[0.7rem] font-bold uppercase tracking-widest text-[#94a3b8] transition-colors hover:text-[#4ade80]" href="#">Docs</a>
          <a className="text-[0.7rem] font-bold uppercase tracking-widest text-[#94a3b8] transition-colors hover:text-[#4ade80]" href="#">Pricing</a>
        </div>
        <a href="http://localhost:3000" className="btn-gradient px-6 py-2 text-[0.7rem] font-bold uppercase tracking-widest active:scale-95 inline-block">
          Launch Editor
        </a>
      </nav>

      <main className="pt-32">
        <section className="mb-32 px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-12 bg-[#4ade80]" />
                <span className="block text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#4ade80]">Kinetic Monolith v2.0</span>
              </div>
              <h1 className="mb-8 text-6xl font-bold uppercase leading-[0.85] tracking-tighter md:text-[5.5rem]">
                The Cloud <br /> Is Your <br />
                <span style={{ WebkitTextStroke: "1.5px #4ade80" }} className="text-transparent">
                  Compiler
                </span>
              </h1>
              <p className="mb-12 max-w-xl text-lg font-light leading-relaxed text-[#94a3b8]">
                Synapse is a sentient development environment hosted in the obsidian void. Zero setup. Infinite compute. AI orchestration that builds architecture while you think.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="http://localhost:3000" className="btn-gradient group flex items-center gap-3 px-10 py-5 font-bold uppercase tracking-widest">
                  Launch Editor <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <button className="border border-[#334155] px-10 py-5 font-bold uppercase tracking-widest text-[#4ade80] transition-all hover:bg-[#0d110e]">
                  View Demo
                </button>
              </div>
            </div>

            <div className="hidden lg:col-span-6 lg:block">
              <div className="glass hud-border overflow-hidden rounded-lg shadow-2xl">
                <div className="flex items-center justify-between border-b border-[#1e293b]/30 bg-[#0d110e] px-4 py-2">
                  <div className="flex gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-[#d53d18] opacity-50" />
                    <div className="h-2 w-2 rounded-full bg-[#064e3b] opacity-50" />
                    <div className="h-2 w-2 rounded-full bg-[#4ade80] opacity-50" />
                  </div>
                  <div className="text-[0.6rem] uppercase tracking-widest text-[#4ade80]/40">Project_V2.run</div>
                </div>
                <div className="flex h-100 bg-[#020302]">
                  <div className="w-1/2 border-r border-[#1e293b]/30 p-6 font-mono text-[0.65rem] leading-relaxed">
                    <div className="text-[#0eeafd]">export default function</div>
                    <span className="text-[#4ade80]"> Hero</span>() {'{'}
                    <br />
                    <span className="ml-4 text-[#0eeafd]">return</span> (
                    <br />
                    <span className="ml-8 text-[#94a3b8]/60">&lt;section className="grid gap-8"&gt;</span>
                    <br />
                    <span className="ml-12 text-[#94a3b8]/60">&lt;h1 className="text-6xl"&gt;</span>
                    <br />
                    <span className="ml-16">Kinetic Power</span>
                    <br />
                    <span className="ml-12 text-[#94a3b8]/60">&lt;/h1&gt;</span>
                    <br />
                    <span className="ml-8 text-[#94a3b8]/60">&lt;/section&gt;</span>
                    <br />
                    <span className="ml-4">);</span>
                    <br />
                    {'}'}
                  </div>
                  <div className="relative flex w-1/2 flex-col bg-[#050705]">
                    <div className="flex items-center gap-2 border-b border-[#1e293b]/30 px-3 py-1.5">
                      <div className="flex flex-1 items-center gap-2 rounded border border-[#1e293b]/20 bg-[#0d110e] px-2 py-0.5">
                        <span className="text-[0.55rem] text-[#94a3b8]">localhost:3000</span>
                      </div>
                    </div>
                    <div className="group relative flex flex-1 flex-col items-center justify-center overflow-hidden p-8">
                      <div className="relative z-10 space-y-4 text-center transition-transform duration-700 group-hover:scale-105">
                        <div className="mb-2 text-3xl font-bold uppercase leading-none tracking-tighter">
                          Kinetic<br />
                          <span className="text-[#4ade80]">Power</span>
                        </div>
                        <div className="inline-block border border-[#4ade80] px-4 py-2 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#4ade80] transition-all hover:bg-[#4ade80] hover:text-[#052e16]">
                          Get Started
                        </div>
                      </div>
                      <div className="absolute inset-0 animate-pulse bg-[#4ade80]/5" />
                      <div className="absolute bottom-4 right-4 flex items-center gap-2 opacity-60">
                        <div className="h-1.5 w-1.5 animate-ping rounded-full bg-[#4ade80]" />
                        <span className="text-[0.5rem] font-bold uppercase tracking-widest text-[#4ade80]">Live</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#1e293b]/30 bg-[#080b09]/50 py-32">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-24 px-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-5xl font-bold uppercase leading-[1.1] tracking-tighter">
                Architectural <br /> <span className="text-[#4ade80]">Orchestration</span>
              </h2>
              <p className="mb-12 text-lg font-light leading-relaxed text-[#94a3b8]">
                Prompt Synapse to build. Watch as the AI agent instantiates your entire folder structure, configures your environment variables, and scaffolds your boilerplate in real-time.
              </p>
              <div className="space-y-6">
                <div className="border border-[#1e293b]/30 bg-[#0d110e] p-6">
                  <div className="mb-1 text-xs font-bold uppercase tracking-widest text-[#4ade80]">Natural Language Entry</div>
                  <div className="text-sm text-[#94a3b8]">&quot;Create a Next.js project with Tailwind and Prisma.&quot;</div>
                </div>
                <div className="border border-[#1e293b]/30 bg-[#0d110e] p-6">
                  <div className="mb-1 text-xs font-bold uppercase tracking-widest text-[#4ade80]">Automated Scaffolding</div>
                  <div className="text-sm text-[#94a3b8]">Synthetic generation of complex file trees and configs.</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="hud-border overflow-hidden border border-[#1e293b]/40 bg-[#020302] p-6 shadow-xl">
                <div className="mb-6 flex items-center justify-between border-b border-[#1e293b]/20 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#4ade80]" />
                    <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#4ade80]">Synapse Agent: Executing Scaffolding</span>
                  </div>
                  <span className="text-[0.6rem] text-[#94a3b8]">Task #941</span>
                </div>
                <div className="space-y-1.5 font-mono text-[0.65rem]">
                  <div className="text-[#4ade80]">/src</div>
                  <div className="ml-4 text-[#4ade80]/70">/app</div>
                  <div className="ml-8 text-[#4ade80]/50">page.tsx DONE</div>
                  <div className="ml-8 text-[#4ade80]/50">layout.tsx DONE</div>
                  <div className="ml-4 text-[#4ade80]/70">/components GENERATING...</div>
                  <div className="ml-4 text-[#4ade80]/70">/lib</div>
                </div>
              </div>
              <div className="absolute -right-12 -top-12 -z-10 h-64 w-64 rounded-full bg-[#4ade80]/10 blur-[100px]" />
            </div>
          </div>
        </section>

        <section className="px-8 py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-24 flex items-end gap-6">
              <h2 className="text-4xl font-bold uppercase tracking-tighter">Technical Prowess</h2>
              <div className="mb-2 h-px flex-1 bg-[#1e293b]/30" />
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="border border-[#1e293b]/30 bg-[#080b09] p-10 transition-all duration-500 hover:border-[#4ade80]/30">
                <h3 className="mb-4 text-lg font-bold uppercase tracking-widest">Cloud Native</h3>
                <p className="text-sm font-light leading-relaxed text-[#94a3b8]">No downloads. No sync issues. Your development environment lives on the edge, accessible with zero-latency input.</p>
              </div>
              <div className="relative overflow-hidden border border-[#1e293b]/30 bg-[#080b09] p-10 transition-all duration-500 hover:border-[#4ade80]/30 md:col-span-2">
                <h3 className="mb-4 text-lg font-bold uppercase tracking-widest">Select &amp; Fix</h3>
                <p className="mb-6 text-sm font-light leading-relaxed text-[#94a3b8]">Highlight any block of logic, press a hotkey, and watch Synapse refactor or debug your code with surgical precision.</p>
                <div className="rounded border border-[#1e293b]/30 bg-[#020302] p-4 font-mono text-[0.65rem]">
                  <div className="text-[#4ade80]/60">function process(data) {'{'}</div>
                  <div className="text-[#4ade80]/60">  return data.map(x =&gt; x * 2);</div>
                  <div className="text-[#4ade80]/60">{'}'}</div>
                  <div className="mt-4 font-bold text-[#4ade80]">// REFACTORED:</div>
                  <div className="mt-1 text-[#7aeb9d]">const process = (data: number[]) =&gt; data.map(v =&gt; v * 2);</div>
                </div>
              </div>
              <div className="border border-[#1e293b]/30 bg-[#080b09] p-10 transition-all duration-500 hover:border-[#4ade80]/30">
                <h3 className="mb-4 text-lg font-bold uppercase tracking-widest">Sync Teams</h3>
                <p className="text-sm font-light leading-relaxed text-[#94a3b8]">Real-time pair programming with AI assistance. Share a live link and code together in an obsidian-powered room.</p>
              </div>
              <div className="border border-[#1e293b]/30 bg-[#080b09] p-10 transition-all duration-500 hover:border-[#4ade80]/30">
                <h3 className="mb-4 text-lg font-bold uppercase tracking-widest">Observability</h3>
                <p className="text-sm font-light leading-relaxed text-[#94a3b8]">Built-in terminals, logs, and performance metrics integrated directly into the editor&apos;s core logic.</p>
              </div>
              <div className="border border-[#1e293b]/30 bg-[#080b09] p-10 transition-all duration-500 hover:border-[#4ade80]/30">
                <h3 className="mb-4 text-lg font-bold uppercase tracking-widest">Obsidian Vault</h3>
                <p className="text-sm font-light leading-relaxed text-[#94a3b8]">Your code never trains public models. Enterprise-grade isolation with SOC2 compliance baked into the kernel.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-[#1e293b]/30 px-8 py-48">
          <div className="relative z-10 mx-auto max-w-7xl text-center">
            <h2 className="mb-12 text-6xl font-bold uppercase tracking-tighter md:text-8xl">
              Ready for the <br /> <span className="text-[#4ade80]">New Era?</span>
            </h2>
            <p className="mx-auto mb-16 max-w-2xl text-lg font-light text-[#94a3b8]">
              Stop building on local machines. The future of software engineering is ephemeral, AI-orchestrated, and globally distributed.
            </p>
            <div className="flex flex-col justify-center gap-6 md:flex-row">
              <a href="http://localhost:3000" className="btn-gradient glow-primary px-12 py-6 text-lg font-bold uppercase tracking-[0.2em] inline-block">Launch Synapse Now</a>
              <button className="border border-[#334155] px-12 py-6 text-lg font-bold uppercase tracking-[0.2em] text-[#4ade80] hover:bg-[#080b09]">Contact Sales</button>
            </div>
          </div>
          <div className="absolute inset-0 bg-[#4ade80]/5 mask-[radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />
          <div className="absolute -bottom-1/2 left-1/2 h-125 w-full -translate-x-1/2 rounded-full bg-[#4ade80]/5 blur-[120px]" />
        </section>
      </main>

      <footer className="w-full border-t border-[#1e293b]/30 bg-[#020302] px-8 py-16">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between md:flex-row">
          <div className="mb-8 md:mb-0">
            <div className="mb-4 flex items-center gap-2 text-2xl font-bold uppercase tracking-tighter text-[#4ade80]">
              <span>▣</span>
              Synapse
            </div>
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-[#94a3b8]/60">© 2024 Synapse Systems. Engineered for the Kinetic Monolith.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-12">
            <a className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#94a3b8] transition-colors hover:text-[#4ade80]" href="#">Security</a>
            <a className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#94a3b8] transition-colors hover:text-[#4ade80]" href="#">Privacy</a>
            <a className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#94a3b8] transition-colors hover:text-[#4ade80]" href="#">Status</a>
            <a className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#94a3b8] transition-colors hover:text-[#4ade80]" href="#">Github</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SynapseLandingPage;
