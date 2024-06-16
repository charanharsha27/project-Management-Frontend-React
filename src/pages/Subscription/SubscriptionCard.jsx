/* eslint-disable react/prop-types */
import { createPayment } from "@/Redux/Payment/Action";
import { Button } from "@/components/ui/button"
import api from "@/config/api";
import { CheckCircledIcon } from "@radix-ui/react-icons"
import { useDispatch } from "react-redux"

export const SubscriptionCard = ({d}) => {
  const dispatch = useDispatch();

  const handleUpgrade = async() => {
    // dispatch(createPayment({planType: data.planType,jwt:localStorage.getItem("jwt")}))
    try {
      const {data} = await api.post(`/api/payment/${d.planType}`,{planType: d.planType,jwt:localStorage.getItem("jwt")})
      console.log(data);
      if(data.payment_link_url){
          window.location.href = data.payment_link_url;
      }
  } catch (error) {
      console.log(error);
  }
    
  }
  return (
    <div className="rounded-xl bg-[#1b1b1b] bg-opacity-20 shadow-[#14173b] shadow-2xl card p-5 space-y-5 w-[18rem]">

      <p className="text-center text-lg font-bold">{d.planName}</p>
      <p>
        <span className="text-xl font-semibold">₹ {d.price}</span> / 
        <span> {d.planType}</span>
      </p>  
      {d.planType =="ANNUALLY"?<p className="text-green-500">30% off</p>:null}
      <Button className="w-full" onClick={handleUpgrade}>
        {d.buttonName}
      </Button>
      <div>
        {d.features.map((item) => <div key={item} className="flex items-center gap-2 font-bold">
          <CheckCircledIcon/>
          <p>{item}</p>
        </div> )}
      </div>
    </div>
  )
}
