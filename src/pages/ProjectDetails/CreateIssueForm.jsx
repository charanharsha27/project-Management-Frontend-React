import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

const CreateIssueForm = () => {

    const form = useForm({
        defaultValues: {
            issueName : "",
            "description" : ""
        },
    });

    const onSubmit = (data) => {
        console.log("form submitted",data);
    };

  return (
    <div>
        <Form {...form}>
                <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField control={form.control} name="issueName" render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input {...field} type="text" className="border w-full bg-gray-700 px-5 py-5 mt-2" placeholder="Enter issue title" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />

                    <FormField control={form.control} name="description" render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input {...field} type="text" className="border w-full bg-gray-700 px-5 py-5 mt-2" placeholder="Enter issue description" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />

                    <DialogClose>
                            <Button type="submit" className="w-full mt-2">Add Issue</Button>
                    </DialogClose>
                </form>
            </Form>
    </div>
  )
}

export default CreateIssueForm