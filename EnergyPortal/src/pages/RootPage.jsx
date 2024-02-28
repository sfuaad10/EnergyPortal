import { Outlet } from "react-router-dom";
import Login from "./Login";
import React, { useContext } from "react";
import { LinkOutlined, NotificationOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { AuthContext } from "../stores/AuthContext";

const { Header, Content, Sider } = Layout;

const HeaderItems = [
  { key: "1", label: "Info" },
  { key: "2", label: "Weather" },
  { key: "3", label: "Distance" },
];
const icons = [LinkOutlined, NotificationOutlined];
const labels = ["Inverters", "Plants"];
const childrenLabels = ["Stats", "Create"];

const items2 = icons.map((icon, index) => {
  return {
    key: `sub${index + 1}`,
    icon: React.createElement(icon),
    label: labels[index],
    children: childrenLabels.map((childLabel, j) => {
      return {
        key: `${index + 1}.${j + 1}`,
        label: childLabel,
      };
    }),
  };
});
const RootPage = () => {
  const authCtx = useContext(AuthContext);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <>
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={HeaderItems}
            style={{
              flex: 1,
              minWidth: 0,
            }}
          />
          <button onClick={authCtx.onLogout}>Logout</button>
        </Header>
        <Layout>
          <Sider
            width={200}
            style={{
              background: colorBgContainer,
            }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{
                height: "100%",
                borderRight: 0,
              }}
              items={items2}
            />
          </Sider>
          <Layout
            style={{
              padding: "0 24px 24px",
            }}
          >
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};
export default RootPage;
