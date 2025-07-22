import { Button } from "./ui/button";
import { Mail, Download } from "lucide-react";
import resume from "../../public/omar-castorena-resume.pdf";

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-surface text-surface-foreground px-4 py-16 text-center"
    >
      <div className="mx-auto max-w-xl space-y-6">
        <h2 className="text-4xl font-bold">Let's Work Together</h2>
        <p className="text-muted-foreground text-lg">
          Whether you're hiring, looking to collaborate, or just want to say hi
          — feel free to reach out.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:omarcastorena11@gmail.com"
            className="inline-flex items-center"
          >
            <Button
              className="transition-transform hover:scale-105"
              variant="ghost"
            >
              <Mail className="mr-2 h-4 w-4" />
              Email Me
            </Button>
          </a>
          <a href={resume} download className="inline-flex items-center">
            <Button
              className="transition-transform hover:scale-105"
              variant="ghost"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
