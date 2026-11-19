import Link from "next/link";
import { ButtonLink } from "@/components/shared/ui";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
      <p className="text-gradient font-mono text-8xl font-bold tracking-tighter md:text-9xl">404</p>
      <h1 className="mt-6 text-3xl font-bold tracking-tight md:text-4xl">This screen hasn&apos;t been built yet.</h1>
      <p className="mt-4 max-w-md text-muted">
        “Thy word is a lamp unto my feet, and a light unto my path.” <span className="font-mono text-xs text-subtle">— Psalm 119:105</span>
      </p>
      <p className="mt-2 text-sm text-subtle">Let&apos;s get you back on the path.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/">Back home</ButtonLink>
        <ButtonLink href="/projects" variant="secondary">See projects</ButtonLink>
      </div>
      <Link href="/contact" className="mt-6 text-xs text-subtle underline-offset-4 hover:underline">Report a broken link</Link>
    </section>
  );
}
