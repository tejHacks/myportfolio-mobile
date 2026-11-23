import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Generated Open Graph / Twitter card. */
export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#09090B", color: "#F8FAFC", fontFamily: "sans-serif", position: "relative" }}>
        <div style={{ position: "absolute", top: -200, left: -150, width: 700, height: 700, borderRadius: 9999, background: "radial-gradient(circle, rgba(37,99,235,0.45), transparent 65%)" }} />
        <div style={{ position: "absolute", bottom: -260, right: -120, width: 700, height: 700, borderRadius: 9999, background: "radial-gradient(circle, rgba(16,185,129,0.35), transparent 65%)" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 56, height: 56, borderRadius: 14, background: "linear-gradient(120deg,#2563EB,#10B981)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 700 }}>OO</div>
          <div style={{ fontSize: 24, color: "#A1A1AA" }}>{site.role}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>{site.name}</div>
          <div style={{ marginTop: 24, fontSize: 36, color: "#A1A1AA" }}>{site.statement}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 22, color: "#34D399" }}>
          <div style={{ width: 12, height: 12, borderRadius: 9999, background: "#10B981" }} />
          Building from {site.location}
        </div>
      </div>
    ),
    size,
  );
}
