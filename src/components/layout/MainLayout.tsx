import { Layout, Menu, MenuProps } from "antd";
const {Content, Footer, Header,Sider} = Layout;
const MainLayout = () => {
 
    const items : MenuProps['items'] = [
        {
            key: "k1",
            label: 'Dashboard'
        },
        {
            key: "k2",
            label: 'Profile',
        },
        {
            key: "k3",
            label: 'Users',
            children:[
                {
                    key:"k3c1",
                    label:"Create User"
                },
                {
                    key:"k3c2",
                    label:"Delete User"
                },
            ]
        },
    ]

    return (
        <Layout style={{height:'100vh'}}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >

        
          <div style={{display:"flex",border:"1px solid gray",width:"32vw",gap:"5px", justifyContent:"center",marginTop:"5px",marginLeft:"15px", alignItems:"center"}}>
            <img style={{height:"3rem"}} src="https://i.postimg.cc/65b2dDg7/iconUni.jpg" alt="" />
            <div style={{color:"gray",width:"50vw",fontSize: "2rem"}}>Horizon University Management System</div>
          </div>
          <Menu style={{marginTop:"25px",fontSize: "1.2rem"}} theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
        </Sider>
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
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
  );



       
};

export default MainLayout;