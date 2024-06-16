import { register } from "@/Redux/Auth/Action";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

export const Signup = () => {
    const dispatch = useDispatch();
    const form = useForm({
        defaultValues: {
            email: "",
            fullName: "",
            password: "",
            jwt: "",
        },
    });

    const onSubmit = (data) => {
        dispatch(register(data));
        console.log("form submitted", data);
    };

    return (
        <div className="space-y-5">
            <h1>Register</h1>
            <Form {...form}>
                <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input {...field} type="text" className="border w-full bg-gray-700 px-5 py-5" placeholder="Enter FullName" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />

                    <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input {...field} type="text" className="border w-full bg-gray-700 px-5 py-5" placeholder="Enter Email" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />

                    <FormField control={form.control} name="password" render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input {...field} type="password" className="border w-full bg-gray-700 px-5 py-5" placeholder="Enter Password" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />


                    <Button type="submit" className="w-full mt-2">Register</Button>

                </form>
            </Form>
        </div>
    )
}
