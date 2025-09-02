export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="font-mono text-muted-foreground mb-4">{">"} cat contact.txt</div>
          <h2 className="text-2xl font-bold mb-6">Contact</h2>
        </div>

        <div className="space-y-4 text-muted-foreground">
          <div className="font-mono text-sm space-y-2">
            <div>xicer029@gmail.com</div>
            <div><a href="https://github.com/Micahaha">[github.com/Micahaha]</a></div>
            <div><a href="https://www.linkedin.com/in/micahahawinters/">[https://www.linkedin.com/in/micahahawinters/]</a></div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="font-mono text-muted-foreground text-sm">{">"} echo "Thanks for visiting"</div>
        </div>
      </div>
    </section>
  )
}
