import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PlusIcon } from "@radix-ui/react-icons";
import { InviteUserForm } from "./InviteUserForm";
import { IssueList } from "./IssueList";
import { ChatBox } from "./ChatBox";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjectById } from "@/Redux/Project/Action";
import { useParams } from "react-router-dom";

export const ProjectDetails = () => {
    const dispatch = useDispatch();
    const {project} = useSelector(store=>store);
    const {id} = useParams();


    const handleProjectInvitation = () => {
        console.log("Inviting a member to the project");
    };

    useEffect(()=>{
        dispatch(fetchProjectById(id));
    },[id]);

    return (
        <>
            {/* {console.log("-----> ",project.projectDetails)} */}
            <div className="mt-5 lg:px-10">
                <div className="lg:flex gap-5 justify-between pb-4">
                    <ScrollArea className="h-screen lg:w-[69%] pr-2">
                        <div className="text-gray-400 pb-10 w-full">
                            <h1 className="text-lg font-semibold pb-5">{project.projectDetails?.projectName}</h1>
                            <div className="space-y-5 pb-10">
                                <p className="w-full md:max-w-lg lg:max-w-xl">
                                    {project.projectDetails?.description}
                                </p>
                                <div className="flex">
                                    <p className="w-36">Project Owner :</p>
                                    <p> {project.projectDetails?.owner?.name} </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <p className="w-32">Members :</p>
                                    {project.projectDetails?.team.map((item) => (
                                        <Avatar key={'owner'+item.id}>
                                            <AvatarFallback>{item.name.charAt(0).toUpperCase()}</AvatarFallback>
                                        </Avatar>
                                    ))}
                                    <Dialog>
                                        <DialogTrigger>
                                            <Button className="ml-2 text-white" size="sm" variant="outline" onClick={handleProjectInvitation}>
                                                <span>Invite</span>
                                                <PlusIcon className="w-3 h-3" />
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <InviteUserForm />
                                            </DialogHeader>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                                <div className="flex">
                                    <p className="w-36">Category :</p>
                                    <p> {project.projectDetails?.category} </p>
                                </div>
                                <div className="flex">
                                    <p className="w-36">Team Lead :</p>
                                    <Badge> Charan </Badge>
                                </div>
                            </div>
                        </div>
                        <section className="space-y-5 pb-10 text-sm">
                            <p className="py-5 border-b text-lg -tracking-wider">Tasks</p>
                            <div className="lg:flex gap-3 justify-between py-5">
                                <IssueList status="pending" title="Todo List" />
                                <IssueList status="in_progress" title="In Progress" />
                                <IssueList status="Done" title="Done" />
                            </div>
                        </section>
                    </ScrollArea>
                    <div className="lg:w-[30%] rounded-md sticky right-5 top-10">
                        <ChatBox />
                    </div>
                </div>
            </div>
        </>
    );
};