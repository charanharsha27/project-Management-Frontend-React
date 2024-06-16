import { createComment } from "@/Redux/Comment/Action";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

export const CreateCommentForm = ({issueId}) => {

    const dispatch = useDispatch();
    
    const form = useForm({
        defaultValues: {
            content : ""
        },
    });

    const onSubmit = (data) => {
        console.log(issueId,data);
        dispatch(createComment({comment:data.content,issueId}))
        console.log("form submitted",data);
    };

  return (
    <div>
        <Form {...form}>
                <form className="flex gap-2" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField control={form.control} name="content" render={({ field }) => (
                        <FormItem className="flex gap-2">
                            <div className="flex gap-2"></div>
                            <div>
                                <Avatar>
                                    <AvatarFallback>R</AvatarFallback>
                                </Avatar>
                            </div>
                            <FormControl>
                                <Input {...field} type="text" className="w-[20rem]" placeholder="Add comment here" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                
                    <Button type="submit" className="mt-2">Add Comment</Button>
                </form>
            </Form>
    </div>
  )
}
