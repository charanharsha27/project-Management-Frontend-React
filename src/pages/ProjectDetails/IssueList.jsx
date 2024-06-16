import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { IssueCard } from "./IssueCard";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import CreateIssueForm from "./CreateIssueForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchIssues } from "@/Redux/Issue/Action";
import { useParams } from "react-router-dom";

export const IssueList = ({ title, status }) => {
    // console.log(status);
    const dispatch = useDispatch();
    const {issue} = useSelector(store=>store);
    const {id} = useParams();

    useEffect(()=>{
        dispatch(fetchIssues(id))
    },[])
    return (
        <div className="w-full md:w-[300px] lg:w-[310px]">
            <Dialog>
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>{title}</CardTitle>
                    </CardHeader>
                    <CardContent className="px-2">
                        <div className="space-y-2">
                        {issue.issues.filter(issue=> issue.status == status).map((item) => <IssueCard key={'issue'+item.id} item={item} />)}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <DialogTrigger>
                            <Button className="w-full flex items-center gap-2 bg-white text-black" variant="outline" size="sm">
                                <PlusIcon></PlusIcon>
                                Create Issue
                            </Button>
                        </DialogTrigger>
                    </CardFooter>
                </Card>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create New Issue</DialogTitle>
                        <CreateIssueForm status={status} />
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
};

