import { fetchChatByProjectId, fetchChatMessages, sendMessage } from "@/Redux/Chat/Action"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { PaperPlaneIcon } from "@radix-ui/react-icons"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

export const ChatBox = () => {
    const [msg, setMsg] = useState("");
    const { auth, chat } = useSelector(store => store);
    const { id } = useParams();

    const dispatch = useDispatch();
    const handleSendMessage = () => {
        dispatch(sendMessage({
            senderId: auth.user?.id,
            projectId: id,
            content: msg
        }));
        console.log("Message Sent");
    }

    useEffect(() => {
        dispatch(fetchChatByProjectId(id))
        console.log("chat -> ", chat);
    }, [])


    useEffect(() => {
        console.log("chat id ->",chat.chat?.id);
        dispatch(fetchChatMessages(chat.chat?.id))
    }, [chat.chat])

    const handleMesageChange = (e) => {
        setMsg(e.target.value);
    }

    return (
        <div className="sticky">
            <div className="border rounded-lg">

                <h1 className="border-b p-5">Chat Box</h1>

                <ScrollArea className="h-[32rem] w-full p-5 flex gap-3 flex-col ">

                    {chat?.messages?.map((item) => item?.sender?.id != auth?.user?.id ? 
                        (<div key={'chat-' + item} className="flex gap-2 mb-2 justify-start">
                            <Avatar>
                                <AvatarFallback>{item?.sender?.name[0]}</AvatarFallback>
                            </Avatar>
                            <div className="space-y-2 py-2 px-5 border rounded-ss-2xl rounded-e-xl">
                                <p>{item?.sender?.name}</p>
                                <p className="text-gray-300">{item?.message}</p>
                            </div>
                        </div>)
                        :
                        (<div key={item} className="flex gap-2 mb-2 justify-end">
                            <div className="space-y-2 py-2 px-5 border rounded-ss-2xl rounded-e-xl">
                                <p>{item?.sender?.name}</p>
                                <p className="text-gray-300">{item?.message}</p>
                            </div>
                            <Avatar>
                                <AvatarFallback>{item?.sender?.name[0]}</AvatarFallback>
                            </Avatar>

                        </div>)
                    )}

                </ScrollArea>
                <div className="relative p-0">
                    <Input value={msg} onChange={handleMesageChange} placeHolder="Type the message" className="py-7 border-t outline-none focus:outline-none focus:ring-0 rounded-none border-b-0 border-x-0" />
                    <Button onClick={handleSendMessage} className="absolute right-2 top-3 rounded-full" size="icon" variant="ghost">
                        <PaperPlaneIcon />

                    </Button>
                </div>

            </div>
        </div>

    )
}
