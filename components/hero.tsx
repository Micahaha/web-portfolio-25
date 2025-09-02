export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-8">
          <div className="font-mono text-muted-foreground mb-4">{">"} whoami</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">Micah Winters</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto text-pretty">
           BSc in Computer and information Sciences with a
           Minor in Cyberseurity 
          </p>
        </div>

        <div className="font-mono text-sm text-muted-foreground text-left max-w-sm mx-auto space-y-1">
          <div>• Penetration Testing </div>
          <div>• Application Security </div>
          <div>• C# Backend Development </div>
          <div>• Database Administration </div>
        </div>
      </div>
      
    </section>
  )
}
