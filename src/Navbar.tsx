import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <NavigationMenu className="max-w-none sticky bg-white top-0 justify-between">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavLink to="/">
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} text-lg`}
            >
              Home
            </NavigationMenuLink>
          </NavLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList className="h-15 justify-center">
        <NavigationMenuItem>
          <NavLink to="/cart">
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} text-lg`}
            >
              Cart
            </NavigationMenuLink>
          </NavLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Navbar;
