import Link from "next/link";
import { Image } from "antd";
import Head from "next/head";

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
              Here's a picture of me petting a cute cat I met while coming down from the Fushimi Inari Shrine in Kyoto
              back in December 2025 to pad out my home page.
            </p>
          </div>
          <div>
            <Image src="/assets/home-cat.jpg" alt="Cat near Fushimi Inari" width={300} height={400} />
          </div>
        </div>
      </main>
    </>
  );
}
