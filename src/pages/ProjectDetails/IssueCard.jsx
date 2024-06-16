import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { DotsVerticalIcon, PersonIcon } from "@radix-ui/react-icons"
import { UserList } from "./UserList"
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { deleteIssue, fetchIssueById } from "@/Redux/Issue/Action"
import { useEffect } from "react"

export const IssueCard = ({item}) => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigation = useNavigate();

    // console.log("item -->",item);

    const handleIssueDelete = () =>{
        dispatch(deleteIssue(item.id));
        console.log("item deleted");
    }

    useEffect(()=>{
        dispatch(fetchIssueById(item.id))
    },[item.id])

    const handleEdit = () =>{

    }

    const handleDone = () => {

    }

    const handleProgress = () => {

    }
  return (
    <Card className="rounded-md py-1 pb-2">

        <CardHeader className="py-0 pb-1">

            <div className="flex items-center justify-between">
                <CardTitle onClick={() => navigation(`/project/${id}/issue/${item.id}`)} className="cursor-pointer">
                    {/* {console.log(item.title)} */}
                    {item?.title}
                </CardTitle>

                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button className="rounded-full" variant="ghost" size="icon">
                            <DotsVerticalIcon/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={handleProgress}>In Progress</DropdownMenuItem>
                        <DropdownMenuItem onClick={handleDone}>Done</DropdownMenuItem>
                        <DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>
                        <DropdownMenuItem onClick={handleIssueDelete}>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

        </CardHeader>
        <CardContent className="py-0">
            <div className="flex items-center justify-between">
                
                <p>{item.description}</p>
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
                        <UserList issueDetails={item}/>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </CardContent>

    </Card>
  )
}
