import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PlusIcon } from "@radix-ui/react-icons";
import { InviteUserForm } from "./InviteUserForm";
import { IssueList } from "./IssueList";
import { ChatBox } from "./ChatBox";

export const ProjectDetails = () => {
    const handleProjectInvitation = () => {
        console.log("Inviting a member to the project");
    };

    return (
        <>
            <div className="mt-5 lg:px-10">
                <div className="lg:flex gap-5 justify-between pb-4">
                    <ScrollArea className="h-screen lg:w-[69%] pr-2">
                        <div className="text-gray-400 pb-10 w-full">
                            <h1 className="text-lg font-semibold pb-5">Project Name 1</h1>
                            <div className="space-y-5 pb-10">
                                <p className="w-full md:max-w-lg lg:max-w-xl">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur facere voluptatem maiores quasi labore similique ea cupiditate dolorum non totam!
                                </p>
                                <div className="flex">
                                    <p className="w-36">Project Lead :</p>
                                    <p> Charan </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <p className="w-32">Members :</p>
                                    {[1, 1, 1, 1].map((item, index) => (
                                        <Avatar key={index}>
                                            <AvatarFallback>C</AvatarFallback>
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
                                    <p> Fullstack </p>
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
                                <IssueList status="In Progress" title="In Progress" />
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