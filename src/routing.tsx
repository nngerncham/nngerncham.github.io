import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import {
  AuditOutlined,
  BookOutlined,
  CameraOutlined,
  CoffeeOutlined,
  DatabaseOutlined,
  HomeOutlined,
  LaptopOutlined,
  PlayCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React from "react";
import { ItemType } from "antd/es/menu/interface";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

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
  {
    key: "/blogs",
    label: "Blogs",
    icon: <BookOutlined />,
    children: [
      {
        key: "/blogs/eating",
        label: "Eating",
        icon: <CoffeeOutlined />,
      },
      {
        key: "/blogs/career",
        label: "Tech",
        icon: <LaptopOutlined />,
      },
      {
        key: "/blogs/travel",
        label: "Travel",
        icon: <CameraOutlined />,
      },
      {
        key: "/blogs/entertainment",
        label: "Entertainment",
        icon: <PlayCircleOutlined />,
      },
    ],
  },
];
