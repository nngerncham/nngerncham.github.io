import React, { ReactNode } from "react";
import { Divider } from "antd";
import "./Experiences.css";

interface Experience {
  title: string;
  company: string;
  date: string;
  type?: string;
  skills?: string[];
  description?: ReactNode;
}

const experiences: Experience[] = [
  {
    title: "Data Engineer",
    company: "The Gang Technology",
    date: "May 2024 - Present",
    type: "Full-time",
    skills: ["Python", "TypeScript", "SQL", "BigQuery"],
    description: (
      <p>
        A few of my responsibilities were:
        <ul>
          <li>Writing ETL pipelines</li>
          <li>Writing data collection backends</li>
          <li>Made dashboards for data analysts</li>
        </ul>
      </p>
    ),
  },
  {
    title: "Full-stack Developer",
    company: "Faculty of Medicine Siriraj Hospital, Mahidol University",
    date: "August 2022 - Present",
    type: "Volunteer",
    skills: ["Python", "Flask", "Django", "Docker"],
    description: (
      <p>
        Working on internal tools for the Neonatology Unit, Division of
        Pediatrics, Siriraj Hospital.
      </p>
    ),
  },
  {
    title: "Club Committee",
    company: "Science Society Club, MUIC",
    date: "August 2021 - April 2024",
    description: (
      <p>
        Took notes of club meetings, managed club's official documents,
        organized club activities, hosted Science Jeopardy Nights, and produced
        the podcasts.
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
      <p>
        Helped students and graded assignments of many computer science courses
        including (but not limited to):
        <ul>
          <li>ICCS208: Data Structures and Abstractions</li>
          <li>ICCS311: Functional and Parallel Programming</li>
          <li>ICCS312: Algorithms and Tractability</li>
        </ul>
      </p>
    ),
  },
  {
    title: "Private Tutor",
    company: "Self-employed",
    date: "January 2023 - April 2023",
    skills: ["C", "Data Structures and Algorithms"],
    description: (
      <p>
        Tutored an undergraduate student in Computer Engineering on C
        programming and Data Structures and Algorithms.
      </p>
    ),
  },
  {
    title: "Software Quality Assurance Tester",
    company: "The Gang Technology",
    date: "August 2022 - January 2023",
    type: "Part-time",
    skills: ["Automated Software Testing", "TypeScript", "PlaywrightJS"],
    description: (
      <p>Developed automated tests for web applications using Playwright JS.</p>
    ),
  },
];

export const Experiences = () => {
  return (
    <div>
      <h1>Experiences</h1>
      {experiences.map((experience, index) => {
        return (
          <div className={"experiences"}>
            <h2>{experience.title}</h2>
            <h3>
              {experience.company}{" "}
              {experience.type ? `(${experience.type})` : null} |{" "}
              {experience.date}
            </h3>
            <p>
              <b>
                {experience.skills
                  ? "Skills: " + experience.skills.join(", ")
                  : ""}
              </b>
            </p>
            {experience.description}
            {index !== experiences.length - 1 ? <Divider /> : null}
          </div>
        );
      })}
    </div>
  );
};
