import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { adminRoutes } from "../../routes/admin.routes";
import { facultyRoutes } from "../../routes/faculty.routes";
import { studentRoutes } from "../../routes/student.routes";

type TRole = {
  ADMIN : string,
  STUDENT: string,
  FACULTY: string
};
const userRole : TRole = {
  ADMIN : 'admin',
  STUDENT: 'student',
  FACULTY: 'faculty'
};


export const Sidebar = () => {


  const role = 'faculty';

  let sideBarItems;

  switch(role){
    case userRole.ADMIN:
      sideBarItems = sidebarItemsGenerator(userRole.ADMIN,adminRoutes)
      break;
    case userRole.FACULTY:
      sideBarItems = sidebarItemsGenerator(userRole.FACULTY,facultyRoutes)
      break;
    case userRole.STUDENT:
      sideBarItems = sidebarItemsGenerator(userRole.STUDENT,studentRoutes)
      break;
    default:
      break;
  }




    return (
        <Sider
          style={{padding:"7px"}}
          width={250}
        >
          <div style={{display:"flex",border:"1px solid gray",width:"11rem",gap:"5px", justifyContent:"center",marginLeft:"15px", alignItems:"center"}}>
            <img style={{height:"3rem"}} src="https://i.postimg.cc/65b2dDg7/iconUni.jpg" alt="" />
            <div style={{color:"gray",width:"50vw",fontSize: "2rem"}}>Horizon</div>
          </div>
          <Menu style={{marginTop:"25px",fontSize: "1.2rem"}} theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sideBarItems} />
        </Sider>
    );
};

export default Sidebar;