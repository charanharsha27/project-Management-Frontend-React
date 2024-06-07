import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { DotFilledIcon, DotsVerticalIcon } from "@radix-ui/react-icons"
import { useNavigate } from "react-router-dom"

export const ProjectCard = () => {
    const navigate = useNavigate();
  return (
    <div>

        {/* Project Card */}
        <Card className="p-5 w-full lg:max-w-3xl lg:ml-7">
            <div className="space-y-5">
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <div className="flex items-center gap-5">
                            <h1 onClick={() => navigate("/project/3")} className="cursor-pointer font-bold text-lg">
                                Project Name
                            </h1>
                            <DotFilledIcon/>
                            <p className="text-sm text-gray-400">FullStack</p>
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
                                    <DropdownMenuItem>
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                    <p className="text-gray-300 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ipsum necessitatibus perferendis deserunt, eligendi cupiditate a labore temporibus mollitia fuga?</p>
                </div>

                {/* Displaying the tags for the project */}
                <div className="flex flex-wrap gap-2 items-center">
                    {
                        [1,1,1,1].map((item) => (
                            <Badge key={item} variant="primary" size="md">
                                Frontend
                            </Badge>
                        
                        ))
                    }
                </div>

            </div>
        </Card>

    </div>
  )
}
