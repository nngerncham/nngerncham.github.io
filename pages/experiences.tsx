import { ReactNode } from "react";
import { Divider } from "antd";
import Head from "next/head";

interface ExperienceProps {
  title: string;
  company: string;
  date: string;
  type?: string;
  skills?: string[];
  description?: ReactNode;
}

const experiences: ExperienceProps[] = [
  {
    title: "Software Engineer",
    company: "Certu Systems",
    date: "September 2025 - Present",
    type: "Full-time",
    skills: ["Go", "Python", "GraphQL", "PostgreSQL", "MySQL (TiDB flavor)", "Docker"],
    description: (
      <div>
        <p>A few of my responsibilities are:</p>
        <ul>
          <li>Revamped the logging system of the backend service</li>
          <li>Refactored backend service to unify multiple deployments into one that can handle multiple tenants</li>
          <li>Created internal tools for deployment management</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Data Engineer",
    company: "Cube Insights",
    date: "April 2025 - August 2025",
    type: "Full-time",
    skills: ["Python", "SQL", "Polars", "Amazon S3", "Amazon Athena"],
    description: (
      <div>
        <p>I was part of the data storage team (Pyramid)</p>
        <ul>
          <li>
            Designed and implemented data ingestion code that handles ingesting multi-schema data into the same sink
          </li>
          <li>Optimized product brand tagging algorithm resulting in ~18x faster run time</li>
          <li>Organized a knowledge sharing session on fast data processing using Polars</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Data Engineer",
    company: "The Gang Technology",
    date: "May 2024 - April 2025",
    type: "Full-time",
    skills: ["Python", "TypeScript", "SQL", "BigQuery"],
    description: (
      <div>
        <p>A few of my responsibilities were:</p>
        <ul>
          <li>Created data reports and visualizations</li>
          <li>Created enrichment logic for CDC data streams</li>
          <li>Wrote backends for data collection and analysis</li>
          <li>Wrote data extraction and load scripts</li>
          <li>Organized a knowledge sharing session on streaming data between databases</li>
        </ul>
      </div>
    ),
  },
  // {
  //   title: "Full-stack Developer",
  //   company: "Faculty of Medicine Siriraj Hospital, Mahidol University",
  //   date: "August 2022 - Present",
  //   type: "Volunteer",
  //   skills: ["Python", "Flask", "Django", "Docker"],
  //   description: <p>Working on internal tools for the Neonatology Unit, Division of Pediatrics, Siriraj Hospital.</p>,
  // },
  {
    title: "Club Committee",
    company: "Science Society Club, MUIC",
    date: "August 2021 - April 2024",
    description: (
      <p>
        Took notes of club meetings, managed club's official documents, organized club activities, hosted Science
        Jeopardy Nights, and produced the podcasts.
      </p>
    ),
  },
  {
    title: "Undergraduate Teaching Assistant",
    company: "Mahidol University International College",
    date: "September 2021 - April 2024",
    skills: [
      "Python",
      "Java",
      "Scala",
      "Rust",
      "Data Structures and Algorithms",
      "Functional Programming",
      "Parallel Programming",
    ],
    description: (
      <div>
        <p>Helped students and graded assignments of many computer science courses including (but not limited to):</p>
        <ul>
          <li>ICCS208: Data Structures and Abstractions</li>
          <li>ICCS311: Functional and Parallel Programming</li>
          <li>ICCS312: Algorithms and Tractability</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Private Tutor",
    company: "Self-employed",
    date: "January 2023 - April 2023",
    skills: ["C", "Data Structures and Algorithms"],
    description: (
      <div>
        <p>
          Tutored an undergraduate student in Computer Engineering on C programming and Data Structures and Algorithms.
        </p>
      </div>
    ),
  },
  {
    title: "Software Quality Assurance Tester",
    company: "The Gang Technology",
    date: "August 2022 - January 2023",
    type: "Part-time",
    skills: ["Automated Software Testing", "TypeScript", "PlaywrightJS"],
    description: <p>Developed automated tests for web applications using Playwright JS.</p>,
  },
];

export default function Experiences() {
  return (
    <>
      <Head>
        <title>Experiences | Nawat Ngerncham</title>
      </Head>
      <main style={{ padding: 24 }}>
        <h1>Experiences</h1>
        {experiences.map((experience, index) => {
          return (
            <div key={experience.company}>
              <h2>{experience.title}</h2>
              <h3>
                {experience.company} {experience.type ? `(${experience.type})` : null} | {experience.date}
              </h3>
              <p>{experience.skills ? "Skills: " + experience.skills.join(", ") : ""}</p>
              {experience.description}
              {index === experiences.length - 1 ? null : <Divider />}
            </div>
          );
        })}
      </main>
    </>
  );
}
