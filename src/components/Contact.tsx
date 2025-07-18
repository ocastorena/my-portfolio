import { Button } from "./ui/button";
import { Mail, Download } from "lucide-react";

export function Contact() {
  return (
    <section className="py-16 px-4 bg-zinc-900 text-white text-center">
      <div className="max-w-xl mx-auto space-y-6">
        <h2 className="text-4xl font-bold">Let's Work Together</h2>
        <p className="text-zinc-400 text-lg">
          Whether you're hiring, looking to collaborate, or just want to say hi
          — feel free to reach out.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="mailto:you@example.com" className="inline-flex items-center">
            <Button className="transition-transform hover:scale-105" variant="default">
              <Mail className="mr-2 h-4 w-4" />
              Email Me
            </Button>
          </a>
          <a href="/resume.pdf" download className="inline-flex items-center">
            <Button className="transition-transform hover:scale-105" variant="secondary">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
