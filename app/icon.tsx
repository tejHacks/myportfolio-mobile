import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Favicon: "OO" monogram on the blue → emerald gradient. */
export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", borderRadius: 8, background: "linear-gradient(120deg,#2563EB,#10B981)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, letterSpacing: -0.5 }}>
        OO
      </div>
    ),
    size,
  );
}
