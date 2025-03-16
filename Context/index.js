import React,{ useEffect,useState,cresteContext,useContext, createContext} from "react";
import { ethers } from "ethers";

import {CheckIfWalletConnected,connectWallet,fatchContract,connectingWithContract} from "../Utils/apiFeature"
const StateContext = createContext();

export const StateContextProvider =({children}) =>{
 const DAPP_NAME ="GPT_MEMBERSHIP";
 const [address,setaddress] = useState("");
 const [contractMembership,setcontractMembership] = useState([]);
 const [Free,setFree] = useState();
 const [userMembership,setuserMembership] = useState({});
//fetch contract 

// const checkMembershipExpiry = async () => {
//     const contract = await connectingWithContract();
//     const connectAccount = await connectWallet();
//     setaddress(connectAccount);
  
//     const userMembership = await contract.getUsermembership(connectAccount);
//     const expiryDate = new Date(userMembership.expireDate * 1000); // Convert to milliseconds
//     const currentDate = new Date();
  
//     if (currentDate > expiryDate) {
//       resetLocalStorage();
//     }
//   };

const resetLocalStorage = () => {
    localStorage.setItem("freeTrail", JSON.stringify(0)); 
    localStorage.removeItem("userDetails"); 
  };

const fetchData = async () =>{
    try {
        // resetLocalStorage();
        const freeTrail = localStorage.getItem("freeTrail");
        const FREE_TRAIL = JSON.parse(freeTrail);
        setFree(FREE_TRAIL) 
        //get contarct data 
        const contract = await connectingWithContract();
        const connectAccount = await connectWallet();
        setaddress(connectAccount);
        
        const oneMonth = await contract.getMemberships(1);
        const sixMonth = await contract.getMemberships(2);
        const oneYear = await contract.getMemberships(3);
        
        contractMembership = [
        {
            membership_name: oneMonth?.name,
            membership_date: oneMonth?.date,
            membership_id: oneMonth?.id.toNumber(),
            membership_cost: ethers.utils.formatUnits(oneMonth?.cost.toString(),"ether"),
        },
        {
            membership_name: sixMonth?.name,
            membership_date: sixMonth?.date,
            membership_id: sixMonth?.id.toNumber(),
            membership_cost: ethers.utils.formatUnits(sixMonth?.cost.toString(),"ether"),
        },
        {
            membership_name: oneYear?.name,
            membership_date: oneYear?.date,
            membership_id: oneYear?.id.toNumber(),
            membership_cost: ethers.utils.formatUnits(oneYear?.cost.toString(),"ether"),
        },
    ]
    console.log(contractMembership);
    setcontractMembership(contractMembership);
    //get user membership
    const userMemberships = await contract.getUsermembership(connectAccount);
    const processedUserMembership  = {
        id: userMemberships.id.toNumber(),
        membershipId: userMemberships.membershipId.toNumber(),
        addressUser: userMemberships.addressUser.toLowerCase(),
        cost: ethers.utils.formatUnits(userMemberships.cost.toString(),"ether"),
        expiredate: userMemberships.expireDate,
    }
    console.log(processedUserMembership);
    setuserMembership(processedUserMembership);
    localStorage.setItem("userDetails", JSON.stringify(processedUserMembership));
    } catch (error) {
        console.log(error)
    };
}

useEffect(() =>{
    fetchData();
},[]);

const listMembership = async () => {
    const amount = 0.001;
    const MEMBERSHIP_NAME = "One Year";
    const MEMBERSHIP_COST = ethers.utils.parseEther(amount.toString(),"ether");
    const MEMBERSHIP_DATE = "July 31 2024";
    const contract = await connectingWithContract();
    const list = await contract.list(MEMBERSHIP_NAME,MEMBERSHIP_COST,MEMBERSHIP_DATE,{
        gasLimit: 1000000,
    });
    await list.wait();
    console.log(list);
}

const buyMembership = async (memberShip_id) =>{
  const contract = await connectingWithContract();
  const connectAccount = await connectWallet();
  setaddress(connectAccount);
   try {
      if(memberShip_id === 0){
        const oneMonth = Date.now() + 30 * 24 * 60 * 60 * 1000;
        const date = oneMonth.toLocaleString("en-US");
        const money = ethers.utils.parseEther("0.0001");
        const mintransection = await contract.mint(
            memberShip_id,
            connectAccount,
            date.toString(),
        {
            value: money.toString(),
            gasLimit: 300000,
        }
        );
         await mintransection.wait();
         const freeTrail = JSON.stringify("Pro Member");
         localStorage.setItem("freeTrail",freeTrail);
         console.log(mintransection);
    } else if(memberShip_id === 1){
        const sixMonth = Date.now() + 180 * 24 * 60 * 60 * 1000;
        const money = ethers.utils.parseEther("0.0005");
        const mintransection = await contract.mint(
            memberShip_id,
            connectAccount,
            sixMonth,
        {
            value: money.toString(),
        }
        );
         await mintransection.wait();
         const freeTrail = JSON.stringify("Pro Member");
         localStorage.setItem("freeTrail",freeTrail);
         console.log(mintransection);
    } else if(memberShip_id === 2){
        const oneYear = Date.now() + 365 * 24 * 60 * 60 * 1000;
        const money = ethers.utils.parseEther("0.001");
        const mintransection = await contract.mint(
            memberShip_id,
            connectAccount,
            oneYear,
        {
            value: money.toString(),
            gasLimit: 300000,
        }
        );
         await mintransection.wait();
         const freeTrail = JSON.stringify("Pro Member");
         localStorage.setItem("freeTrail",freeTrail);
         console.log(mintransection);
    }
    
} catch (error) {
    console.log(error);
}
}
return (
<StateContext.Provider 
value={{DAPP_NAME, 
listMembership,
buyMembership,
Free,
address,
contractMembership,
userMembership}}>
    {children}
</StateContext.Provider>
 );
};
export const useSateContext = () => useContext(StateContext);