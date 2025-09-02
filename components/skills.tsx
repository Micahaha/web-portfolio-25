const skillCategories = [
  {
    title: "Security Tools",
    skills: ["Nmap", "Metasploit", "Burp Suite", "Wireshark", "John the Ripper", "Hashcat"],
  },
  {
    title: "Programming",
    skills: ["Python", "C/C++", "C#", "Bash", "PowerShell", "SQL" ],
  },
  {
    title: "Operating Systems",
    skills: ["Kali Linux", "Ubuntu", "Windows", "macOS", "Arch Linux"],
  },
  {
    title: "Frameworks & Technologies",
    skills: ["Docker", "Git", "SQL", "React", "ASP.NET", "MongoDB", "AWS", "Azure"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="font-mono text-muted-foreground mb-4">{">"} ls -la /skills/</div>
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
        </div>

        <div className="space-y-6">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="font-mono text-lg mb-3">{category.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="text-sm text-muted-foreground font-mono">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
