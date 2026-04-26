import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "PIXORASOFTTECH — Premium Software, Web & Mobile Development";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
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
        {/* Background glow blobs */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(139,92,246,0.15)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(236,72,153,0.10)",
            filter: "blur(80px)",
          }}
        />

        {/* Top badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(139,92,246,0.15)",
            border: "1px solid rgba(139,92,246,0.3)",
            borderRadius: "999px",
            padding: "8px 20px",
            marginBottom: "32px",
          }}
        >
          <span style={{ color: "#a78bfa", fontSize: "14px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase" }}>
            Premium Software Development
          </span>
        </div>

        {/* Logo / Brand name */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <span style={{ fontSize: "56px", fontWeight: 900, color: "rgba(255,255,255,0.92)", letterSpacing: "-2px" }}>
            PIXORA
          </span>
          <span style={{ fontSize: "56px", fontWeight: 900, color: "#8b5cf6", letterSpacing: "-2px" }}>
            SOFTTECH
          </span>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: "22px",
            color: "rgba(255,255,255,0.5)",
            fontWeight: 300,
            textAlign: "center",
            maxWidth: "700px",
            lineHeight: 1.6,
            margin: "0 0 48px 0",
          }}
        >
          Web · Mobile · Software · UI/UX · Cloud · Security
        </p>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: "40px",
          }}
        >
          {[
            { value: "1,000+", label: "Projects" },
            { value: "500+", label: "Clients" },
            { value: "99%", label: "Success Rate" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                padding: "20px 32px",
              }}
            >
              <span style={{ fontSize: "32px", fontWeight: 800, color: "#a78bfa" }}>
                {stat.value}
              </span>
              <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.35)", letterSpacing: "1px", textTransform: "uppercase", marginTop: "4px" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom URL */}
        <p
          style={{
            position: "absolute",
            bottom: "28px",
            fontSize: "14px",
            color: "rgba(255,255,255,0.2)",
            letterSpacing: "1px",
          }}
        >
          www.pixorasofttech.com
        </p>
      </div>
    ),
    { ...size }
  );
}
