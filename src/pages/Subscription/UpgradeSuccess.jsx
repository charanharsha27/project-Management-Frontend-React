import { getUserSubscription, upgradeSubscription } from "@/Redux/Subscription/Action"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircledIcon } from "@radix-ui/react-icons"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export const UpgradeSuccess = () => {
    const navigate = useNavigate();
    const {subscription} = useSelector(store=>store);
    const queryParams = new URLSearchParams(location.search);
    const paymentId = queryParams.get("payment_id");
    const plan = queryParams.get("planType");
    const dispatch = useDispatch();

    useEffect(()=>{
        const token = localStorage.getItem("jwt")
        dispatch(upgradeSubscription(plan,token))
        dispatch(getUserSubscription(token));
        console.log("---->",subscription);
    },[])

  return (
    <div className="flex justify-center">
        <Card className="mt-20 p-5 space-y-5 flex flex-col items-center">
            <div className="flex items-center gap-4">
                <CheckCircledIcon className="h-9 w-9 text-green-500"/>
                <p className="text-xl">Plan Upgraded Successfully</p>
            </div>

            <div className="space-y-3">
                <p className="text-green-500">Start date : {subscription.userSubscription?. subscriptionStartDate}</p>
                <p className="text-red-500">End date : {subscription.userSubscription?.subscriptionEndDate}</p>
                <p>Plan type : {subscription.userSubscription?.planType}</p>
                <Button onClick={()=> navigate("/")} >Go to Home Page</Button>
            </div>
        </Card>
    </div>
  )
}
