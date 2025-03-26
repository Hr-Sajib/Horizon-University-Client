import { Layout, MenuProps } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
const {Content, Footer, Header} = Layout;


const MainLayout = () => {
 

    return (
        <Layout style={{height:'100vh'}}>
        <Sidebar/>
        <Layout>
          <Header style={{ padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <h1>Main Content Here</h1>
              <Outlet/>
            </div>
          </Content>
        </Layout>
      </Layout>
  );



       
};

export default MainLayout;