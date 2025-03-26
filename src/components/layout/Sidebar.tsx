import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { adminRoutes } from "../../routes/admin.routes";
import { facultyRoutes } from "../../routes/faculty.routes";
import { studentRoutes } from "../../routes/student.routes";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser, TUser } from "../../redux/features/auth/authSlice";

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


  const user = useAppSelector(selectCurrentUser);

  let sideBarItems;

  switch(user!.role){
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
          style={{padding:"2px", paddingTop:"40px"}}
          width={250}
        >
          <Menu style={{marginTop:"25px",fontSize: "1rem"}} theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sideBarItems} />
        </Sider>
    );
};

export default Sidebar;