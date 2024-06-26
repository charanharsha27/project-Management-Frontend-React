import { useState } from "react";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { Button } from "@/components/ui/button";
import "./Auth.css";
export const Auth = () => {
    const [active, setActive] = useState(true);

    return (
        <div className="loginContainer">
            <div className="box h-[30rem] w-[25rem]">
                <div className="minContainer login">
                    <div className="loginBox w-full px-10 space-y-5">
                        {active ? <Signup /> : <Login />}
                        <div>
                            
                            <Button
                                variant="ghost"
                                onClick={() => setActive(!active)}>
                                {active ? "Sign In" : "Sign Up"}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
