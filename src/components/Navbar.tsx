import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link, NavLink } from "react-router";
import { ModeToggle } from "./mode-toggle";

import { nav_links } from "@/constants";

const Navbar = () => {
  return (
    <div
      className="flex items-center justify-between px-24 py-4 border-b"
      id="navbar"
    >
      <Link className="text-4xl font-medium" to={"/"}>
        Pet Services
      </Link>

      <NavigationMenu>
        <NavigationMenuList className="**:text-lg flex gap-6">
          {nav_links
            .filter((link) => link.hidden !== true)
            .map((link) => (
              <NavigationMenuItem key={link.id}>
                <NavLink id="navitem" to={link.link}>
                  <NavigationMenuLink>{link.text}</NavigationMenuLink>
                </NavLink>
              </NavigationMenuItem>
            ))}
        </NavigationMenuList>
      </NavigationMenu>

      <ModeToggle />
    </div>
  );
};

export default Navbar;
