import React, { useState } from "react";
import { Layout, Menu, theme } from "antd";
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

const { Header, Content, Footer, Sider } = Layout;

interface MenuItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
}

const items: MenuItem[] = [
  {
    key: "home",
    label: "Home",
    icon: <HomeOutlined />,
  },
  {
    key: "about",
    label: "About",
    icon: <UserOutlined />,
  },
  {
    key: "experience",
    label: "Experiences",
    icon: <AuditOutlined />,
  },
  {
    key: "projects",
    label: "Personal Projects",
    icon: <DatabaseOutlined />,
  },
  {
    key: "blogs",
    label: "Blogs",
    icon: <BookOutlined />,
    children: [
      {
        key: "eating",
        label: "Eating",
        icon: <CoffeeOutlined />,
      },
      {
        key: "career",
        label: "Tech",
        icon: <LaptopOutlined />,
      },
      {
        key: "travel",
        label: "Travel",
        icon: <CameraOutlined />,
      },
      {
        key: "entertainment",
        label: "Entertainment",
        icon: <PlayCircleOutlined />,
      },
    ],
  },
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout hasSider style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={256}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout style={{ marginLeft: 256 }}>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            style={{
              padding: 24,
              textAlign: "center",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <p>Insert paragraph here</p>
          </div>
        </Content>
        <Footer
          style={{ textAlign: "center", position: "sticky", bottom: "0" }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
