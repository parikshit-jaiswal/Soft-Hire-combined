
import React from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '../ui/navigation-menu'
import { Link } from 'react-router-dom'

function DropdownMenu({ title, subheading }) {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger><p className='font-semibold'>{title}</p></NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="grid w-[400px] gap-3 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {subheading?.map((heading, index) => (
                                <div key={index}>
                                    <Link to={heading.route} className="block p-4 hover:bg-[#f5f5f5] rounded-md">
                                        {heading.name}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default DropdownMenu