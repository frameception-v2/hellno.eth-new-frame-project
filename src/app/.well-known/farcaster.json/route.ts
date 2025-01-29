import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL || `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
    accountAssociation: {
      message: {
        domain: "new-frame-project.vercel.app",
        timestamp: 1738164580,
        expirationTime: 1745940580
      },
      signature: "264ad5ddaa6950378fe9e78176caa60e7a58fc8669fb7fae50b83938360ecb4f1d242df7421820e0365f6dc3c50ff626fa850538fd77a4add6a18e372e4993ba1b",
      signingKey: "f933ee68058bd72bc73c5e4429895e6a4a8fbcc6cee8340528bebdfa2dd499e6"
    },
    frame: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/frames/hello/opengraph-image`,
      buttonTitle: "Launch Frame",
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
      webhookUrl: `${appUrl}/api/webhook`,
    },
  };

  return Response.json(config);
}
