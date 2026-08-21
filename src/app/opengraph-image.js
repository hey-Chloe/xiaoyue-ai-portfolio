import { ImageResponse } from "next/og";

export const alt = "Xiaoyue — AI Systems Builder";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#070910",
          color: "#eef2ff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 620,
            height: 620,
            borderRadius: 999,
            left: -180,
            top: -230,
            background:
              "radial-gradient(circle, rgba(154,123,255,0.35), rgba(154,123,255,0))",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 680,
            height: 680,
            borderRadius: 999,
            right: -210,
            bottom: -330,
            background:
              "radial-gradient(circle, rgba(112,226,255,0.30), rgba(112,226,255,0))",
          }}
        />

        {[0, 1, 2].map((index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              display: "flex",
              width: 480,
              height: 310,
              right: 74 + index * 26,
              top: 150 - index * 18,
              borderRadius: 40,
              border: "1px solid rgba(255,255,255,0.13)",
              background:
                index === 0
                  ? "linear-gradient(145deg, rgba(28,35,58,0.96), rgba(9,12,22,0.98))"
                  : "rgba(15,20,34,0.66)",
              transform: `rotate(${(index - 1) * 2.2}deg)`,
              boxShadow: "0 32px 80px rgba(0,0,0,0.35)",
            }}
          />
        ))}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "70px 72px 66px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              color: "#70e2ff",
              fontSize: 18,
              letterSpacing: 5,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 999,
                background: "#70e2ff",
                boxShadow: "0 0 24px #70e2ff",
              }}
            />
            AI SYSTEMS PORTFOLIO
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 88,
                lineHeight: 0.92,
                fontWeight: 700,
                letterSpacing: -6,
              }}
            >
              XIAOYUE
              <span style={{ color: "#70e2ff" }}>.</span>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 28,
                color: "rgba(238,242,255,0.62)",
                fontSize: 21,
                letterSpacing: 1.5,
              }}
            >
              Agent Runtime · Enterprise RAG · AI Infrastructure
            </div>
          </div>

          <div
            style={{
              display: "flex",
              width: 430,
              height: 1,
              background:
                "linear-gradient(90deg, rgba(112,226,255,0.9), rgba(154,123,255,0))",
            }}
          />
        </div>
      </div>
    ),
    size
  );
}
