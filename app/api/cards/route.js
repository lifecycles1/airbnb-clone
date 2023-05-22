export async function GET(request) {
  const cards = [
    {
      img: "https://i.imgur.com/Jpglf73.jpg",
      title: "Outdoor getaways",
    },
    {
      img: "https://i.imgur.com/Xtw7qPG.jpg",
      title: "Unique stays",
    },
    {
      img: "https://i.imgur.com/upzDkKa.jpg",
      title: "Entire homes",
    },
    {
      img: "https://i.imgur.com/ILU8bDD.jpg",
      title: "Pets allowed",
    },
  ];

  return new Response(JSON.stringify(cards));
}
