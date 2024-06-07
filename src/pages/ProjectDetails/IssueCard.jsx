import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { DotsVerticalIcon, PersonIcon } from "@radix-ui/react-icons"
import { UserList } from "./UserList"
import { useNavigate } from "react-router-dom"

export const IssueCard = () => {
    const navigation = useNavigate();
  return (
    <Card className="rounded-md py-1 pb-2">

        <CardHeader className="py-0 pb-1">

            <div className="flex items-center justify-between">
                <CardTitle onClick={() => navigation(`/project/1/issue/3`)} className="cursor-pointer">
                    Create Navbar
                </CardTitle>

                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button className="rounded-full" variant="ghost" size="icon">
                            <DotsVerticalIcon/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>In Progress</DropdownMenuItem>
                        <DropdownMenuItem>Done</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

        </CardHeader>
        <CardContent className="py-0">
            <div className="flex items-center justify-between">
                <p>FBP - {1}</p>
                <DropdownMenu className="w-[30rem] border border-red-400">
                    <DropdownMenuTrigger>
                        <Button size="icon" className="bg-gray-900 text-white hover:text-black rounded-full">
                            <Avatar>
                                <AvatarFallback>
                                    <PersonIcon/>
                                </AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <UserList/>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </CardContent>

    </Card>
  )
}
