import { login } from "@/Redux/Auth/Action";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {jwt} = useSelector((store)=>store.auth);
    const [token,setToken] = useState(null);
    const form = useForm({
        defaultValues: {
            email: "",
            fullName: "",
            password: ""
        },
    });

    const onSubmit = (data) => {
        dispatch(login(data));
        if(jwt){
            navigate("/")
        }
        console.log("form submitted", data);
    };


    useEffect(()=>{
        if(jwt){
            navigate("/");
        }
    },[jwt,navigate])

    return (
        <div className="space-y-5">
            <h1>Register</h1>
            <Form {...form}>
                <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
                    
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


                    <Button type="submit" className="w-full mt-2">Login</Button>

                </form>
            </Form>
        </div>
    )
}
