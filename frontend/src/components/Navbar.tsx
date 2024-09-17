import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@radix-ui/react-menubar";
import { Link } from "react-router-dom"

import { HandPlatter, Loader2, Menu, Moon, PackageCheck, ShoppingCart, SquareMenu, Sun, User, UtensilsCrossed } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

import { Button } from "./ui/button";
import { Separator } from "@radix-ui/react-separator";



const Navbar = () => {
    const admin = true;
    const loading = false
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between h-14">
                <Link to="/">
                    <h1 className="font-bold md:font-extrabold text-2xl">Adhikari eats</h1>
                </Link>
                <div className="hidden md:flex items-center gap-10">
                    <div className="hidden md:flex items-center gap-6">
                        <Link to="/">Home</Link>
                        <Link to="/profile">Profile</Link>
                        <Link to="/order/status">Order</Link>
                    </div>
                    {
                        admin && (
                            <Menubar>
                                <MenubarMenu>
                                    <MenubarTrigger>
                                        Dashboard
                                    </MenubarTrigger>
                                    <MenubarContent>
                                        <Link to="/admin/restaurant">
                                            <MenubarItem>Restaurant</MenubarItem>
                                        </Link>
                                        <Link to="/admin/menu">
                                            <MenubarItem>Menu</MenubarItem>
                                        </Link>
                                        <Link to="/admin/orders">
                                            <MenubarItem>Order</MenubarItem>
                                        </Link>
                                    </MenubarContent>
                                </MenubarMenu>

                            </Menubar>
                        )}

                    <div className="flex items-center gap-4">
                        <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="icon">
                                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                        <span className="sr-only">Toggle theme</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>
                                        Light
                                    </DropdownMenuItem>
                                    <DropdownMenuItem >
                                        Dark
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                        </div>
                        <Link to="/cart" className="relative cursor-pointer">
                            <ShoppingCart />
                            <Button size={"icon"} className="absolute -inset-y-3 left-2 text-xs rounded-full h-4 w-4 bg-red-500 hover:bg-red-500">1</Button>
                        </Link>
                        <div>
                            <Avatar>
                                <AvatarImage />
                                <AvatarFallback>
                                    CN
                                </AvatarFallback>
                            </Avatar>
                        </div>
                        <div>
                            {
                                loading ? (
                                    <Button className="bg-orange-500 hover:bg-hoverOrange">
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />Please Wait
                                    </Button>
                                ) : (
                                    <Button className="bg-orange-500 hover:bg-hoverOrange">Logout</Button>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="md:hidden lg:hidden">
                    {/* Mobile responsive */}
                    <MobileNavbar />

                </div>

            </div>

        </div>
    )
}

export default Navbar;

const MobileNavbar = () => {
    
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size={'icon'} className="rounded-full bg-gray-200 text-black hover:bg-gray-200" variant="outline">
                    <Menu size={'18'} />
                </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <SheetHeader className="flex flex-row items-center justify-between mt-2 ">
                    <SheetTitle
                    >Adhikari eats</SheetTitle>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                                Light
                            </DropdownMenuItem>
                            <DropdownMenuItem >
                                Dark
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    {/* <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription> */}
                </SheetHeader>
                <Separator className="my-2" />
                <SheetDescription className="flex-1">
                    <Link to='/profile' className="flex items-center gap-4 hover:bg-gray-200 px-3 py- rounded-lg cursor-pointer hover: text-gray-900 font-medium">
                        <User />
                        <span>Profile</span>
                    </Link>
                    <Link to='/orders' className="flex items-center gap-4 hover:bg-gray-200 px-3 py- rounded-lg cursor-pointer hover: text-gray-900 font-medium">
                        <HandPlatter />
                        <span>Order</span>
                    </Link>
                    <Link to='/profile' className="flex items-center gap-4 hover:bg-gray-200 px-3 py- rounded-lg cursor-pointer hover: text-gray-900 font-medium">
                        <ShoppingCart />
                        <span>Cart (0)</span>
                    </Link>
                    <Link to='/profile' className="flex items-center gap-4 hover:bg-gray-200 px-3 py- rounded-lg cursor-pointer hover: text-gray-900 font-medium">
                        <SquareMenu />
                        <span>Menu</span>
                    </Link>
                    <Link to='/profile' className="flex items-center gap-4 hover:bg-gray-200 px-3 py- rounded-lg cursor-pointer hover: text-gray-900 font-medium">
                        <UtensilsCrossed />
                        <span>Restaurant</span>
                    </Link>
                    <Link to='/profile' className="flex items-center gap-4 hover:bg-gray-200 px-3 py- rounded-lg cursor-pointer hover: text-gray-900 font-medium">
                        <PackageCheck />
                        <span>Restaurant Orders</span>
                    </Link>

                </SheetDescription>

                <SheetFooter className="flex flex-col gap-4">
                
                                <div className="flex flex-row items-center gap-2 ">
                                    <Avatar>
                                        
                                        <AvatarImage />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <h1 className="font-bold">Adhikari  Mernstack</h1>

                                </div>
                            
                       
                            <SheetClose asChild>
                                <Button type="submit" className="bg-orange-200 bg-hoverOrange">Logout</Button>

                            </SheetClose>
                      

                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
