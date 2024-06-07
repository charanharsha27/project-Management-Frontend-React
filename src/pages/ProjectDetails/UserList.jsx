import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { AvatarIcon } from "@radix-ui/react-icons";

export const UserList = () => {
  return (
    <div className="space-y-2">
      <div className="border rounded-md">
        <p className="py-2 px-3">{"Charan" || "Unassignee"}</p>
      </div>
      {[1,1,1,1].map( (item) => <div key={item} className="py-2 group hover:bg-slate-800 cursor-pointer flex items-center space-x-4 rounded-md border px-4">
        <Avatar className="w-10 h-10">
          <AvatarFallback className="flex items-center justify-center w-full h-full">
            <AvatarIcon className="w-6 h-6"/>
          </AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <p className="text-sm leading-none">Charan Harsha</p>
          <p className="text-sm text-muted-foreground">@charan279</p>
        </div>
      </div>)}
    </div>
  );
}
