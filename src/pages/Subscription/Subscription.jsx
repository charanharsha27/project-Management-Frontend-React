import { useDispatch, useSelector } from "react-redux";
import { SubscriptionCard } from "./SubscriptionCard";
import { useEffect } from "react";
import { getUserSubscription } from "@/Redux/Subscription/Action";

const Subscription = () => {
  const { subscription } = useSelector(store => store);
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(getUserSubscription(localStorage.getItem("jwt")))
    },[])
  console.log(subscription);
  const paidPlan = [
    "Add unlimited project",
    "Access to live chat",
    "Add unlimited team member",
    "Advanced Reporting",
    "Priority Support",
    "Customization Options",
    "Integration Support",
    "Advanced Security",
    "Training and Resources",
    "Access Control",
    "Custom Workflows",
  ];

  const annualPlan = [
    "Add unlimited project",
    "Access to live chat",
    "Add unlimited team member",
    "Advanced Reporting",
    "Priority Support",
    "Everything which montly plan has",
  ];

  const freePlan = [
    "Add only 3 projects",
    "Basic Task Management",
    "Project Collaboration",
    "Basic Reporting",
    "Email Notifications",
    "Basic Access Control",
  ];

  return (
    <div className="p-10">
      <h1 className="text-5xl font-semibold py-5 pb-16 text-center">Pricing</h1>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-9">
        <SubscriptionCard d={{ planName: "Free", features: freePlan, planType: "FREE", price: 0, buttonName: subscription.userSubscription?.planType == "FREE" ? "Current Plan" : "Get Started" }} />
        <SubscriptionCard d={{ planName: "Monthly Plan", features: paidPlan, planType: "MONTHLY", price: 399, buttonName: subscription.userSubscription?.planType == "MONTHLY" ? "Current Plan" : "Get Started" }} />
        <SubscriptionCard d={{ planName: "Annual Plan", features: annualPlan, planType: "ANNUALLY", price: 799, buttonName: subscription.userSubscription?.planType == "ANNUALLY" ? "Current Plan" : "Get Started" }} />
      </div>
    </div>
  )
}

export default Subscription