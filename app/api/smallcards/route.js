export async function GET(request) {
  const smallcards = [
    {
      img: "https://i.imgur.com/Y4zoZZC.jpg",
      distance: "45-minute drive",
      location: "London",
    },
    {
      img: "https://i.imgur.com/NMfQWSZ.jpg",
      distance: "4.5-hour drive",
      location: "Manchester",
    },
    {
      img: "https://i.imgur.com/Xx7fsLI.jpg",
      distance: "4.5-hour drive",
      location: "Liverpool",
    },
    {
      img: "https://i.imgur.com/mrb5YOb.jpg",
      distance: "4-hour drive",
      location: "York",
    },
    {
      img: "https://i.imgur.com/rQCMvqs.jpg",
      distance: "45-minute drive",
      location: "Cardiff",
    },
    {
      img: "https://i.imgur.com/naYDWXY.jpg",
      distance: "4.5-hour drive",
      location: "Birkenhead",
    },
    {
      img: "https://i.imgur.com/QheHP9x.jpg",
      distance: "6-hour drive",
      location: "Newquay",
    },
    {
      img: "https://i.imgur.com/nKCvLWn.jpg",
      distance: "2-hour drive",
      location: "Hove",
    },
  ];

  return new Response(JSON.stringify(smallcards));
}
