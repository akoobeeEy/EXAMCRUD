import { NavLink, Outlet } from "react-router-dom";
import { Layout, Menu, theme } from "antd";
import { UploadOutlined, VideoCameraOutlined } from "@ant-design/icons";
const { Header, Sider, Content } = Layout;

import { LogoIcon, SettingIcon } from "../../assets/icon";
import "./AdminLayout.scss";

export const AdminLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout-wrapper">
      <Sider
        className="layout-left"
        style={{ backgroundColor: "#5B5CE2", width: "100px" }}
        trigger={null}
        collapsible
      >
        <div className="demo-logo-vertical logo">
          <NavLink to="/">
            <LogoIcon className="logo-icon" />
          </NavLink>
        </div>
        <Menu
          className="layout-menu"
          style={{ backgroundColor: "#5B5CE2" }}
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <SettingIcon className="settingIcon" />,
              label: <NavLink className={"nav-link"} to={"/"}></NavLink>,
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: (
                <NavLink className={"nav-link"} to={"/newproduct"}></NavLink>
              ),
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        ></Header>
        <Content
          className="layout-main"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
       
      </Layout>
    </Layout>
  );
};
