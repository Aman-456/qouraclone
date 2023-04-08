import { Grid, Layout } from "antd";
import UserDrawer from "./Sider";
import SideBarFixed from "./Sider/SiderFixed";
import NavBar from "./Nav/Navbar";
import NavMobile from "./Nav/NavMobile";
import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "../../../Store/Features/LoaderSlice";
import LayoutContent from "./content";

const { Header, Sider } = Layout;
function AdminLayout() {
  const dispatach = useDispatch();

  const [open, setopen] = useState(false);
  const [loading, setloading] = useState(true);
  const breakpoints = Grid.useBreakpoint();
  const condition = breakpoints["sm"];

  useEffect(() => {
    setloading(false);
  }, []);
  useEffect(() => {
    if (loading) dispatach(showLoader());
    if (loading === false) dispatach(hideLoader());
    return () => dispatach(hideLoader());
  }, [dispatach, loading]);
  return (
    <Layout className="layout adminlayout nav">
      {condition ? (
        <Fragment>
          <Sider width={240}>
            <UserDrawer />
          </Sider>
          <Layout>
            <Header>
              <NavBar />
            </Header>
            <LayoutContent />
          </Layout>
        </Fragment>
      ) : (
        <Fragment>
          {open ? (
            <Sider className="sidebarfixedwrappersider">
              <SideBarFixed setopend={setopen} />
            </Sider>
          ) : null}
          <Layout>
            <Header>
              <NavMobile setopen={setopen} />
            </Header>
            <LayoutContent />
          </Layout>
        </Fragment>
      )}
    </Layout>
  );
}

export default AdminLayout;
