/**
 * Site-wide identity, navigation and contact details.
 */
export const site = {
  name: "Olateju Olamide Emmanuel",
  shortName: "Olateju",
  role: "Mobile Developer & ML Engineer",
  url: "https://tejusportfolio.vercel.app",
  description:
    "Building beautiful, performant mobile experiences with React Native. 3+ years creating web and mobile applications. Passionate about machine learning, Linux, open-source, and technical writing.",
  statement: "I build things that move from idea to reality.",
  subStatement:
    "Mobile products, intelligent systems, and software built with curiosity, discipline, and an unreasonable willingness to figure things out.",
  location: "Ibadan, Nigeria",
  email: "olateju202@gmail.com",
  phone: "+234 808 697 6247",
  phoneHref: "tel:+2348086976247",
  resume: "/resume.pdf",
  /** What the home "terminal" card types out. */
  currentFocus: [
    "shipping CribDoc — on-device ONNX jaundice screening",
    "polishing Ankara Blocks for launch",
    "teaching Flow to turn chaos into three tasks",
    "recording sermons with Scribe",
    "building AidNow — first aid for any emergency",
  ],
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/contact", label: "Contact" },
] as const;

export const socials = [
  { name: "Email", icon: "mail", href: "mailto:olateju202@gmail.com", username: "olateju202@gmail.com", description: "Best way to reach me directly", external: false, copyable: true },
  { name: "GitHub", icon: "github", href: "https://github.com/tejHacks", username: "@tejHacks", description: "Projects, experiments & open source", external: true, copyable: true },
  { name: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/olateju-olamide-22314a292/", username: "Olateju Olamide", description: "Professional network & career", external: true, copyable: false },
  { name: "X / Twitter", icon: "twitter", href: "https://x.com/OlatejuOlamid10", username: "@OlatejuOlamid10", description: "Tech, thoughts & occasional chaos", external: true, copyable: false },
  { name: "Medium", icon: "medium", href: "https://medium.com/@olateju202/", username: "@olateju202", description: "Technical writing & developer stories", external: true, copyable: false },
] as const;
