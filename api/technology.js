export default function handler(req, res) {
  res.status(200).json([
    {
      name: "Launch vehicle",
      images: {
        portrait: "/assets/technology/image-launch-vehicle-portrait.jpg",
        landscape: "/assets/technology/image-launch-vehicle-landscape.jpg",
      },
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle...",
    },
    {
      name: "Spaceport",
      images: {
        portrait: "/assets/technology/image-spaceport-portrait.jpg",
        landscape: "/assets/technology/image-spaceport-landscape.jpg",
      },
      description:
        "A spaceport or cosmodrome is a site for launching spacecraft...",
    },
    {
      name: "Space capsule",
      images: {
        portrait: "/assets/technology/image-space-capsule-portrait.jpg",
        landscape: "/assets/technology/image-space-capsule-landscape.jpg",
      },
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body...",
    },
  ]);
}
