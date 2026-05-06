import Link from "next/link";
import { Image } from "antd";
import Head from "next/head";

const images = [
  { src: "/assets/ogucap-kinka.jpg", alt: "Oguri Cap and Tamamo Cross plushies at the top of Mt. Kinka, Gifu, Japan" },
  { src: "/assets/home-cat.jpg", alt: "Cat near Fushimi Inari" },
  { src: "/assets/ogucap-statue.jpg", alt: "Oguri Cap plushie in front of Oguri Cap's statue" },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Nawat Ngerncham</title>
      </Head>
      <main style={{ padding: 24 }}>
        <h1>Home</h1>
        <div className="home-flex">
          <div>
            <p>
              Hello! My name is Nawat. I'm currently a software engineer at{" "}
              <Link href={"https://certusystems.com/"}>Certu Systems</Link>. Welcome to my personal website!
            </p>
            <p>
              Here are some pictures from my recent trips: Atop Mt. Kinka in Gifu, along the way to Fushimi Inari Shrine
              in Kyoto, and in front of Oguri Cap's statue in Kasamatsu City.
            </p>
          </div>
          <div className="about-images-row">
            {images.map((image) => (
              <div key={image.src} className="about-image-item">
                <Image src={image.src} alt={image.alt} style={{ width: "100%", height: "auto" }} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
