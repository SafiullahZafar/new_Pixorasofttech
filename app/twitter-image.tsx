import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "PIXORASOFTTECH — Premium Software, Web & Mobile Development";
export const size = { width: 1200, height: 600 };
export const contentType = "image/png";

export default async function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "600px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #030014 0%, #0d0025 50%, #030014 100%)",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(139,92,246,0.18)",
            filter: "blur(70px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            right: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(236,72,153,0.12)",
            filter: "blur(70px)",
          }}
        />

        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
          <span style={{ fontSize: "52px", fontWeight: 900, color: "rgba(255,255,255,0.92)", letterSpacing: "-2px" }}>
            PIXORA
          </span>
          <span style={{ fontSize: "52px", fontWeight: 900, color: "#8b5cf6", letterSpacing: "-2px" }}>
            SOFTTECH
          </span>
        </div>

        {/* Tagline */}
        <p style={{ fontSize: "20px", color: "rgba(255,255,255,0.45)", fontWeight: 300, margin: "0 0 36px 0", textAlign: "center" }}>
          Building the Future of Tech
        </p>

        {/* Services pills */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center", maxWidth: "800px" }}>
          {["Web Dev", "Mobile Apps", "Software", "UI/UX", "Cloud", "Security"].map((s) => (
            <div
              key={s}
              style={{
                background: "rgba(139,92,246,0.12)",
                border: "1px solid rgba(139,92,246,0.25)",
                borderRadius: "999px",
                padding: "6px 18px",
                color: "#a78bfa",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              {s}
            </div>
          ))}
        </div>

        <p style={{ position: "absolute", bottom: "24px", fontSize: "13px", color: "rgba(255,255,255,0.18)", letterSpacing: "1px" }}>
          www.pixorasofttech.com
        </p>
      </div>
    ),
    { ...size }
  );
}
