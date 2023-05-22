import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LargeCard from "@/components/LargeCard";
import MediumCard from "@/components/MediumCard";
import SmallCard from "@/components/SmallCard";

export default async function Home() {
  // const exploreData = await fetch("http://localhost:3000/api/smallcards").then((res) => res.json());
  // const cardsData = await fetch("http://localhost:3000/api/cards").then((res) => res.json());
  return (
    <div>
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        {/* <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <SmallCard key={item.img} img={item.img} distance={item.distance} location={item.location} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section> */}

        <LargeCard img="https://i.imgur.com/1xu2Xal.jpg" title="The Greatest Outdoors" description="Wishlists curated by Airbnb." buttonText="Get Inspired" />
      </main>

      <Footer />
    </div>
  );
}
