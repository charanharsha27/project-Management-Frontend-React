import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { PersonIcon } from "@radix-ui/react-icons"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import CreateProjectForm from "../Project/CreateProjectForm"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import store from "@/Redux/Store"
import { logout } from "@/Redux/Auth/Action"

const Navbar = () => {
    const {auth} = useSelector(store=>store);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () =>{
        dispatch(logout());
    }
  return (
    <div className="border-b py-4 px-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
            <p onClick={() => navigate("/")} className="cursor-pointer mr-10">Project Management System</p>

                <Dialog>
                    <DialogTrigger>
                        <Button variant="ghost">New Project</Button>
                    </DialogTrigger>

                    
                    <DialogContent>
                        <DialogHeader>Create new project</DialogHeader>
                        <CreateProjectForm/>
                    </DialogContent>
                </Dialog>

                <Button onClick={() => navigate("/upgrade_plan")} variant="ghost">Upgrade Plan</Button>
        </div>

        <div className="flex gap-3 items-center">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button variant="outline" size="icon" className="rounded-full border-2 border-gray-400">
                        <PersonIcon/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <p>{auth.user.name}</p>
        </div>
    </div>
  )
}

export default Navbar