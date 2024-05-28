import { createBrowserRouter, RouteObject } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import {
  AuditOutlined,
  // BookOutlined,
  // CameraOutlined,
  // CoffeeOutlined,
  DatabaseOutlined,
  HomeOutlined,
  // LaptopOutlined,
  // PlayCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React, { ReactNode } from "react";
import ToBeImplemented from "./components/ToBeImplemented";
import { Experiences } from "./components/Experiences";
import { Projects } from "./components/Projects";

interface ItemType {
  key: string;
  label: string;
  icon: ReactNode;
  children?: ItemType[];
}

const elements = [
  <Home />,
  <About />,
  <Experiences />,
  <Projects />,
  <ToBeImplemented />,
];
export const items: ItemType[] = [
  {
    key: "/",
    label: "Home",
    icon: <HomeOutlined />,
  },
  {
    key: "/about",
    label: "About",
    icon: <UserOutlined />,
  },
  {
    key: "/experience",
    label: "Experiences",
    icon: <AuditOutlined />,
  },
  {
    key: "/projects",
    label: "Personal Projects",
    icon: <DatabaseOutlined />,
  },
  // {
  //   key: "/blogs",
  //   label: "Blogs",
  //   icon: <BookOutlined />,
  //   children: [
  //     {
  //       key: "/blogs/eating",
  //       label: "Eating",
  //       icon: <CoffeeOutlined />,
  //     },
  //     {
  //       key: "/blogs/career",
  //       label: "Tech",
  //       icon: <LaptopOutlined />,
  //     },
  //     {
  //       key: "/blogs/travel",
  //       label: "Travel",
  //       icon: <CameraOutlined />,
  //     },
  //     {
  //       key: "/blogs/entertainment",
  //       label: "Entertainment",
  //       icon: <PlayCircleOutlined />,
  //     },
  //   ],
  // },
];

const itemRouters: RouteObject[] = [...items, { key: "*" }].map(
  (item, index) => {
    return {
      path: item?.key,
      element: elements[index],
    };
  },
);

export const router = createBrowserRouter(itemRouters);
