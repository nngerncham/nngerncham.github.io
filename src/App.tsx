import React from "react";
import { Layout, Menu, theme } from "antd";
import { items, router } from "./routing";
import { RouterProvider } from "react-router-dom";

const { Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        breakpoint={"sm"}
        theme={"light"}
        width={256}
        collapsedWidth={80}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "sticky",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <Menu
          theme={"light"}
          mode="inline"
          defaultSelectedKeys={["/"]}
          onClick={(e) => router.navigate(e.key)}
          items={items}
        />
      </Sider>
      <Layout>
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
          }}
        >
          <div
            style={{
              padding: 24,
              textAlign: "center",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <RouterProvider router={router} />
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
