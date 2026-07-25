import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logoData = readFileSync(join(process.cwd(), "public/logo-mark.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          backgroundImage: "linear-gradient(to bottom, #eef4f7, #ffffff)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={220} height={205} alt="" />
        <div
          style={{
            marginTop: 28,
            fontSize: 60,
            fontWeight: 700,
            color: "#133F7A",
          }}
        >
          Kimberly King
        </div>
        <div style={{ marginTop: 6, fontSize: 34, color: "#6096BD" }}>
          Tough Topics Mom
        </div>
      </div>
    ),
    { ...size },
  );
}
