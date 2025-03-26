import { TNewRoute, TRoute } from "../types/sideBar.type";

export const routeGenerator = (adminRoutes : TRoute[]) => {
    const routes: TNewRoute[] = adminRoutes.reduce((acc: TNewRoute[], item: TRoute) => {
        if (item.path && item.element) {
          acc.push({
            path: item.path,
            Element: item.element, // Directly use the JSX element
          });
        }
        if (item.children) {
          item.children.forEach((child) => {
            if (child.path && child.element) {
              acc.push({
                path: child.path,
                Element: child.element, // Directly use the JSX element
              });
            }
          });
        }
        return acc;
      }, []);

      return routes;
}

