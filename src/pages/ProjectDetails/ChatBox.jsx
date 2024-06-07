import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { PaperPlaneIcon } from "@radix-ui/react-icons"
import { useState } from "react"

export const ChatBox = () => {
    const [msg,setMsg] = useState("");

    const handleSendMessage = () => {
        console.log("message",msg);
    }

    const handleMesageChange = (e) => {
        setMsg(e.target.value);
    }

    return (
        <div className="sticky">
            <div className="border rounded-lg">

                <h1 className="border-b p-5">Chat Box</h1>

                <ScrollArea className="h-[32rem] w-full p-5 flex gap-3 flex-col">

                    {[1, 1, 1, 1].map((item,index) => index%2==0?(<div key={item} className="flex gap-2 mb-2">
                        <Avatar>
                            <AvatarFallback>R</AvatarFallback>
                        </Avatar>
                        <div className="space-y-2 py-2 px-5 border rounded-ss-2xl rounded-e-xl">
                            <p>Charan</p>
                            <p className="text-gray-300">How are you</p>
                        </div>
                    </div>):
                    (<div key={item} className="flex gap-2 mb-2 justify-end">
                        
                        <div className="space-y-2 py-2 px-5 border rounded-ss-2xl rounded-e-xl">
                            <p>Charan</p>
                            <p className="text-gray-300">Fine</p>
                        </div>
                        <Avatar>
                            <AvatarFallback>C</AvatarFallback>
                        </Avatar>
                    </div>
                    ))}

                </ScrollArea>
                <div className="relative p-0">
                    <Input value={msg} onChange={handleMesageChange} placeHolder="Type the message" className="py-7 border-t outline-none focus:outline-none focus:ring-0 rounded-none border-b-0 border-x-0" />
                    <Button onClick={handleSendMessage} className="absolute right-2 top-3 rounded-full" size="icon" variant="ghost">
                        <PaperPlaneIcon/>

                    </Button>
                </div>

            </div>
        </div>

    )
}
