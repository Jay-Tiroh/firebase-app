export default function handler(req, res) {
  res.status(200).json([
    {
      name: "Moon",
      images: {
        png: "/assets/destination/image-moon.png",
        webp: "/assets/destination/image-moon.webp",
      },
      description: "See our planet as you’ve never seen it before...",
      distance: "384,400 km",
      travel: "3 days",
    },
    {
      name: "Mars",
      images: {
        png: "/assets/destination/image-mars.png",
        webp: "/assets/destination/image-mars.webp",
      },
      description: "Don’t forget to pack your hiking boots...",
      distance: "225 mil. km",
      travel: "9 months",
    },
    {
      name: "Europa",
      images: {
        png: "/assets/destination/image-europa.png",
        webp: "/assets/destination/image-europa.webp",
      },
      description: "The smallest of the four Galilean moons...",
      distance: "628 mil. km",
      travel: "3 years",
    },
    {
      name: "Titan",
      images: {
        png: "/assets/destination/image-titan.png",
        webp: "/assets/destination/image-titan.webp",
      },
      description: "The only moon known to have a dense atmosphere...",
      distance: "1.6 bil. km",
      travel: "7 years",
    },
  ]);
}
