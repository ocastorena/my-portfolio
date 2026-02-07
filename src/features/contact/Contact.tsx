import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/config/site";
import { Mail, Download } from "lucide-react";

export function Contact() {
  const resumeUrl = `${import.meta.env.BASE_URL}${SITE_CONFIG.resumeFileName}`;

  async function handleResumeDownload() {
    try {
      const response = await fetch(resumeUrl, { cache: "no-store" });

      if (!response.ok) {
        throw new Error("Resume file is not available.");
      }

      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = SITE_CONFIG.resumeFileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(objectUrl);
    } catch {
      window.open(resumeUrl, "_blank", "noopener,noreferrer");
    }
  }

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
          <Button asChild className="transition-transform hover:scale-105" variant="ghost">
            <a href={`mailto:${SITE_CONFIG.email}`}>
              <Mail className="mr-2 h-4 w-4" />
              Email Me
            </a>
          </Button>
          <Button
            className="transition-transform hover:scale-105"
            variant="ghost"
            type="button"
            onClick={() => {
              void handleResumeDownload();
            }}
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
