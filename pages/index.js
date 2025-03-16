import React from 'react'
import { useSateContext } from "../Context/index";
import { useRouter } from "next/router"
const index = () => {
  const { DAPP_NAME,listMembership } = useSateContext();
  const router = useRouter()
  return (
    <div className='icon-custom'>
      <p>{DAPP_NAME}</p>
      <button 
            variant="ghost" 
            className="text-[#3bedb2] hover:text-[#3bedb2]/80"
            onClick={() => router.push("/chat")}
          >
            Launch App
          </button></div>
  )
}

export default index