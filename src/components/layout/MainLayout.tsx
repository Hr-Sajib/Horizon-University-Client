import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";
const {Content, Header} = Layout;


const MainLayout = () => {
  // border:"1px solid gray", 
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  }

    return (
        <Layout style={{height:'100vh'}}>
        <Sidebar/>
        <Layout>
         
          <Header style={{display:"flex",justifyContent:"space-between", padding: 0,paddingRight:"10px", color:"red"}}>
           
            <div style={{display:"flex",padding: 0,gap:"5px",alignItems:"center"}}>
              <img style={{height:"2.5rem",borderRadius:"5px"}} src="https://i.postimg.cc/65b2dDg7/iconUni.jpg" alt="" />
              <p style={{color:"gray",width:"50vw",fontSize: "2rem"}}>Horizon</p>
            </div>
            
            <div>
                <Button onClick={handleLogout} style={{color:"gray"}}><b>LogOut</b></Button>
            </div>
          </Header>
         
        
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