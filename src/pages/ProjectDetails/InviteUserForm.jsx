import { inviteToProject } from "@/Redux/Project/Action";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const InviteUserForm = () => {

    const dispatch = useDispatch();
    const {project} = useSelector(store=>store);
    const {id} = useParams();

    const form = useForm({
        defaultValues: {
            email : ""
        },
    });

    const onSubmit = (data) => {
        dispatch(inviteToProject(data.email,id))
        console.log("form submitted",data);
    };

  return (
    <div>
        <div className="mb-2">Invite User</div>
        <Form {...form}>
                <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input {...field} type="text" className="border w-full bg-gray-700 px-5 py-5" placeholder="Enter User email" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />

                    <DialogClose>
                            <Button type="submit" className="w-full mt-2">Invite User</Button>
                    </DialogClose>
                </form>
            </Form>
    </div>
  )
}
