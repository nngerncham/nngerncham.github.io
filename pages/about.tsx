import Link from "next/link";
import { Image } from "antd";
import Head from "next/head";

const images = [
  { src: "/assets/nawat-oguri_cap.jpg", alt: "Nawat holding a figurine of Oguri Cap from Uma Musume" },
  { src: "/assets/nawat-running_censored.jpg", alt: "Nawat in Bangkok Midnight Marathon 2025" },
  { src: "/assets/nawat-hiking.jpg", alt: "Nawat hiking to the top of Mt. Misen in Hiroshima" },
  { src: "/assets/nawat-cycling.jpg", alt: "Nawat cycling the Shimanami Kaido in Hiroshima" },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About | Nawat Ngerncham</title>
      </Head>
      <main style={{ padding: 24 }}>
        <h1>About Me</h1>
        <p>Hello again! My (full) name is Nawat Ngerncham. Let me give a few more details about me.</p>
        <p>
          Currently, I am a full-time software engineer at <Link href={"https://certusystems.com/"}>Certu Systems</Link>
          . I work purely on the backend as I prefer to fight with databases and other data storages (S3, Kafka, etc.)
          than with web browsers' rendering engine (and also because that's what I was hired to do). Prior to this, I
          was a full-time data engineer at <Link href={"https://thegang.tech/"}>The Gang Technology</Link> and{" "}
          <Link href={"https://cube.asia/"}>Cube Insights</Link> where I worked on real-time data processing and big
          data processing. I suppose I have a bit more affinity towards 'data' than other things in computer science.
        </p>
        <p>
          I graduated with a Bachelor's degree in Computer Science with a minor in Applied Mathematics from Mahidol
          University International College. While there, I was also a teaching assistant for classes such as Data
          Structures and Abstractions, Algorithms and Tractability, and Functional and Parallel Programming. My
          undergraduate thesis was on Parallel Sampling without Replacement. For those interested, you can find it{" "}
          <Link href={"https://github.com/nngerncham/parrd_sampling/blob/master/Thesis-Full.pdf"}>here</Link>.
        </p>
        <p>
          Outside of work and academics, I enjoy reading books (mainly mangas and light novels) and exercising. My main
          sport(?) is running but I also cycle and strength train on the side. I'd say my goal for now is to run a sub-2
          half-marathon by the end of 2026.
        </p>
        <p>
          If you would like to contact me, feel free to reach out via to this email:{" "}
          <code>n.ngerncham[at]gmail[dot]com</code>. Please replace the [at] and [dot] as you see appropriate.
        </p>
        <div className="about-images-row">
          {images.map((image) => (
            <div key={image.src} className="about-image-item">
              <Image
                src={image.src}
                alt={image.alt}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
