import { assignedUserToIssue } from "@/Redux/Issue/Action";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { useDispatch, useSelector } from "react-redux";

export const UserList = ({issueDetails}) => {
  const {project} = useSelector(store=>store);
  const dispatch = useDispatch();
  const handleAssignedIssueToUser = (userId) => {
    dispatch(assignedUserToIssue(issueDetails.id,userId));
  }
  return (
    <div className="space-y-2">
      <div className="border rounded-md">
        {console.log("issueDetails",issueDetails)}
        <p className="py-2 px-3">{issueDetails.user?.name || 'unassignee'}</p>
      </div>
      {project.projectDetails?.team.map( (item) => <div key={'assignee'+item.id} onClick={()=>handleAssignedIssueToUser(item.id)} className="py-2 group hover:bg-slate-800 cursor-pointer flex items-center space-x-4 rounded-md border px-4">
        
        <Avatar className="w-10 h-10">
          <AvatarFallback className="flex items-center justify-center w-full h-full">
            {item.name[0]}
          </AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <p className="text-sm leading-none">{item.name}</p>
          <p className="text-sm text-muted-foreground">@{item.name}</p>
        </div>
      </div>)}
    </div>
  );
}
