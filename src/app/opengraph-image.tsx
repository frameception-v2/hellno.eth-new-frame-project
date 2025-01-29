import { ImageResponse } from "next/og";
import { PROJECT_TITLE, PROJECT_DESCRIPTION } from "~/lib/constants";

export const alt = "new-frame-project";
export const size = {
  width: 600,
  height: 400,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div tw="h-full w-full flex flex-col justify-center items-center relative bg-purple-50">
        <div tw="bg-white p-8 rounded-xl shadow-lg">
          <h1 tw="text-6xl font-bold text-purple-800 mb-4">{PROJECT_TITLE}</h1>
          <h3 tw="text-2xl text-purple-600">{PROJECT_DESCRIPTION}</h3>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
