import { deleteProject } from "@/Redux/Project/Action"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { DotFilledIcon, DotsVerticalIcon } from "@radix-ui/react-icons"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

export const ProjectCard = ({item}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // console.log("---->",item);
    const handleDelete = () =>{
        console.log(item.id);
        dispatch(deleteProject(item.id))
    }
  return (
    <div>

        {/* Project Card */}
        <Card className="p-5 w-full lg:max-w-3xl lg:ml-7">
            <div className="space-y-5">
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <div className="flex items-center gap-5">
                            <h1 onClick={() => navigate(`/project/${item.id}`)} className="cursor-pointer font-bold text-lg">
                                {/* {console.log(item.id)} */}
                                {item.projectName}
                            </h1>
                            <DotFilledIcon/>
                            <p className="text-sm text-gray-400">{item.category}</p>
                        </div>

                        <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Button className="rounded-full" variant="ghost" size="icon">
                                        <DotsVerticalIcon/>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>
                                        Update
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={handleDelete}>
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                </div>

                {/* Displaying the tags for the project */}
                <div className="flex flex-wrap gap-2 items-center">
                    {
                        item.tags.map((item) => (
                            <Badge key={item} variant="primary" size="md">
                                {item}
                            </Badge>
                        
                        ))
                    }
                </div>

            </div>
        </Card>

    </div>
  )
}
