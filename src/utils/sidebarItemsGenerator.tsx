import { NavLink } from "react-router-dom";
import { TSidebarItems } from "../types/sideBar.type";
import { TRoute } from "../types/sideBar.type";

export const sidebarItemsGenerator = (role:string,items : TRoute[]) => {
     const sidebarItems: TSidebarItems[] = items.reduce(
        (acc: TSidebarItems[], item: TRoute) => {
          if (item.path && item.name) {
            acc.push({
              key: item.name,
              label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
            });
          }
          if (item.children) {
            acc.push({
              key: item.name,
              label: item.name,
              children: item.children.map((child) => ({
                key: child.name,
                label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
              })),
            });
          }
          return acc;
        },
        []
    );

    return sidebarItems;
}