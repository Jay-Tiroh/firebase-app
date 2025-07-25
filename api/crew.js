export default function handler(req, res) {
  res.status(200).json([
    {
      name: "Douglas Hurley",
      images: {
        png: "/assets/crew/image-douglas-hurley.png",
        webp: "/assets/crew/image-douglas-hurley.webp",
      },
      role: "Commander",
      bio: "Douglas Gerald Hurley is an American engineer...",
    },
    {
      name: "Mark Shuttleworth",
      images: {
        png: "/assets/crew/image-mark-shuttleworth.png",
        webp: "/assets/crew/image-mark-shuttleworth.webp",
      },
      role: "Mission Specialist",
      bio: "Mark Richard Shuttleworth is the founder and CEO...",
    },
    {
      name: "Victor Glover",
      images: {
        png: "/assets/crew/image-victor-glover.png",
        webp: "/assets/crew/image-victor-glover.webp",
      },
      role: "Pilot",
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon...",
    },
    {
      name: "Anousheh Ansari",
      images: {
        png: "/assets/crew/image-anousheh-ansari.png",
        webp: "/assets/crew/image-anousheh-ansari.webp",
      },
      role: "Flight Engineer",
      bio: "Anousheh Ansari is an Iranian American engineer...",
    },
  ]);
}
