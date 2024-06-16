import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Cross1Icon } from "@radix-ui/react-icons";
import { SelectContent } from "@radix-ui/react-select";
import { useForm } from "react-hook-form";
import { tags, categories } from "../ProjectList/ProjectList";
import { useDispatch, useSelector } from "react-redux";
import { createProjects } from "@/Redux/Project/Action";
import { useEffect } from "react";
import { getUser } from "@/Redux/Auth/Action";
import { getUserSubscription } from "@/Redux/Subscription/Action";

const CreateProjectForm = () => {
    const dispatch = useDispatch();
    const { subscription } = useSelector(store => store);
    const { auth } = useSelector(store => store);

    useEffect(() => {
        dispatch(getUser());
        dispatch(getUserSubscription(localStorage.getItem("jwt")));
        console.log("auth object ---> ", auth);
        console.log("subscription ---->>  ", subscription);
    }, [])
    const form = useForm({
        defaultValues: {
            projectName: "",
            description: "",
            category: "",
            tags: ['javascript', 'react'],
        },
    });

    const onSubmit = (data) => {
        dispatch(createProjects(data))
        console.log("form submitted", data);
    };

    const handleTagsChange = (item) => {
        const currTags = form.getValues("tags");
        const updatedTags = currTags.includes(item) ? currTags.filter(tag => tag !== item) : [...currTags, item];
        form.setValue("tags", updatedTags);
    };

    return (
        <div>
            <Form {...form}>
                <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField control={form.control} name="projectName" render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input {...field} type="text" className="border w-full bg-gray-700 px-5 py-5" placeholder="Enter Project Name" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />

                    <FormField control={form.control} name="description" render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input {...field} type="text" className="border w-full bg-gray-700 px-5 py-5" placeholder="Project Description" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />

                    <FormField control={form.control} name="category" render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Select defaultValue="React" value={field.value} onValueChange={field.onChange} className="border w-full bg-gray-700 px-5 py-5">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Category" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-black">
                                        {categories.map((item) => <SelectItem key={item + 'c1'} value={item}>{item}</SelectItem>)}
                                        {/* <SelectItem value="React">React</SelectItem>
                                        <SelectItem value="fullstack">Fullstack</SelectItem>
                                        <SelectItem value="SpringBoot">SpringBoot</SelectItem> */}
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />

                    {/* Tags Section */}
                    <FormField control={form.control} name="tags" render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Select onValueChange={(value) => handleTagsChange(value)} className="border w-full bg-gray-700 px-5 py-5">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Tags" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-black">
                                        {tags.map((tag) => <SelectItem key={tag} value={tag}>{tag}</SelectItem>)}
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <div className="flex gap-2 flex-wrap mt-2">
                                {field.value.map((item) => (
                                    <div key={item} onClick={() => handleTagsChange(item)} className="flex cursor-pointer items-center border gap-2 py-1 px-4 rounded-full bg-gray-600 text-white">
                                        <span className="text-sm">{item}</span>
                                        <Cross1Icon className="h-3 w-3" />
                                    </div>
                                ))}
                            </div>
                            <FormMessage />
                        </FormItem>
                    )} />

                    <DialogClose asChild>
                        {
                            // Inline rendering logic
                            (() => {
                                console.log(subscription.userSubscription?.planType, auth.user?.projectsSize);
                                switch (subscription.userSubscription?.planType) {
                                    case "FREE":
                                        if (auth.user?.projectsSize >= 3) {
                                            return (
                                                <div>
                                                    <p>You can create only 3 projects with the free plan. Please upgrade your plan to continue.</p>
                                                </div>
                                            );
                                        } else {
                                            return <Button type="submit" className="w-full mt-5">Create Project</Button>;
                                        }
                                    case "MONTHLY":
                                        if (auth.user?.projectsSize >= 10) {
                                            return (
                                                <div>
                                                    <p>You can create only 10 projects with the monthly plan. Please upgrade your plan to continue.</p>
                                                </div>
                                            );
                                        } else {
                                            return <Button type="submit" className="w-full mt-5">Create Project</Button>;
                                        }
                                    default:
                                        return <Button type="submit" className="w-full mt-5">Create Project</Button>;
                                }
                            })()
                        }
                    </DialogClose>

                </form>
            </Form>
        </div>
    );
};

export default CreateProjectForm;
