export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="font-mono text-muted-foreground mb-4">{">"} cat about.txt</div>
          <h2 className="text-2xl font-bold mb-6">About</h2>
        </div>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            I'm Micah Winters, a passionate cybersecurity enthusiast with a BSc in Computer and Information Sciences and a Minor in Cybersecurity. I specialize in penetration testing and application security, with a strong background in C# backend development and database administration.
          </p>
          <p>Currently buildng my workout planner app in my spare time.</p>
        </div>
      </div>
<p className="text-xl p-3 text-center text-foreground mb-8 max-w-xl mx-auto text-balance"><a href="Software_Engineer_Resume.pdf">[Resume]</a></p>

    </section>
  )
}
