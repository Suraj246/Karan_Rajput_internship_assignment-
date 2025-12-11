import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
const Navbar = () => {
    return (
        <div className="bg-white flex justify-around sm:justify-between items-center fixed z-30 top-0 left-0 right-0 px-1 py-2 md:px-12 md:py-2">

            <span className="hidden sm:block md:text-2xl cursor-pointer font-bold bg-[#DBDBDB] sm:w-26 h-auto p-2 text-center">LOGO</span>

            <NavigationMenu>
                <NavigationMenuList className="flex md:gap-4 text-[#0546D2]">
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="bg-transparent">lorem Ipsum</NavigationMenuTrigger>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="bg-transparent">lorem Ipsum</NavigationMenuTrigger>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="bg-transparent">lorem Ipsum</NavigationMenuTrigger>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            <Button variant="ghost" className="shadow-2xl cursor-pointer bg-white md:w-32 h-auto p-2 text-center">
                Sign In
            </Button>
        </div>

    )
}




export default Navbar
