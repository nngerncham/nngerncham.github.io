import { ReactNode } from "react";
import { Divider } from "antd";
import Link from "next/link";
import Head from "next/head";

interface Project {
  title: string;
  date: string;
  skills?: string[];
  description?: ReactNode;
}

const projects: Project[] = [
  {
    title: "IC Shell",
    date: "May 2021 - May 2021",
    skills: ["C", "Operating System"],
    description: (
      <p>
        A simple shell that can run some simple commands and external programs, execute shell scripts, handle signals,
        redirect, and some other minor features.
      </p>
    ),
  },
  {
    title: "ICCourses: Reddit-Like Platform for Students to Use",
    date: "August 2021 - September 2021",
    skills: ["Python", "Javascript", "Flask", "VueJS", "SQLAlchemy"],
    description: (
      <div>
        <p>
          A platform for CS students from MUIC to discuss and ask questions about class and everything college and major
          related. My specific contributions were:
        </p>
        <ul>
          <li>Rough initial design of the UI</li>
          <li>FAQ and Moderator page, both front-end and back-end</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Using Non-homogenous Markov Chain to calculate when we die",
    date: "July 2023 - July 2023",
    skills: ["Optimization", "Data Modeling", "Markov Chains"],
    description: <p>An investigation on how we non-homogenous Markov Chains can be used to model life and death.</p>,
  },
  {
    title: "TokTik Short Video Hosting",
    date: "September 2023 - October 2023",
    skills: ["Python", "Django", "VueJS", "Docker", "Kubernetes", "Redis", "SocketIO", "S3"],
    description: (
      <p>
        A clone of TikTok with background tasks and web sockets.{" "}
        <Link href={"https://www.youtube.com/watch?v=n-_jaRO7VOA"}>Presentation Part 1.</Link>{" "}
        <Link href={"https://www.youtube.com/watch?v=HDTn21u62Vc"}>Presentation Part 2.</Link>{" "}
        <Link href={"https://github.com/thanawat-toktik/"}>GitHub Organization.</Link>
      </p>
    ),
  },
  {
    title: "Science Podcast",
    date: "January 2022 - March 2025",
    description: (
      <p>
        A podcast that talks about the different aspects of science that are not covered in the typical classroom.{" "}
        <Link href={"https://www.youtube.com/playlist?list=PLybE_8ipJXOXsb5H8MYQHt_vvoEvGp0u8"}>YouTube Playlist.</Link>
      </p>
    ),
  },
  {
    title: "Parallel Random Sampling without Replacement",
    date: "September 2023 - April 2024",
    skills: ["C++", "Parallel Algorithms"],
    description: (
      <p>
        Trying to show that parallel random permutation can be used as a parallel random sampling without replacement
        algorithm that can improve upon existing existing ones in certain use cases.{" "}
        <Link href={"https://github.com/nngerncham/parrd_sampling/"}>Github Repository.</Link>{" "}
        <Link href={"https://www.youtube.com/watch?v=QNUUZDAhwcI"}>Presentation.</Link>
      </p>
    ),
  },
].reverse();

export default function PersonalProjects() {
  return (
    <>
      <Head>
        <title>Personal Projects | Nawat Ngerncham</title>
      </Head>
      <main style={{ padding: 24 }}>
        <div>
          <h1>Projects</h1>
          {projects.map((project, index) => {
            return (
              <div key={project.title}>
                <h2>{project.title}</h2>
                <h3>{project.date}</h3>
                <p>
                  <b>{project.skills ? "Skills: " + project.skills.join(", ") : ""}</b>
                </p>
                {project.description}
                {index === projects.length - 1 ? null : <Divider />}
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
