import { ethers } from "ethers";
import Web3Modal from "web3modal";
import GPTMembershipABI from "../Context/GPTMembership.json";
import { GPT_MEMBERSHIP_ADDRESS } from "../Context/constants";
//check wallet connected
export const CheckIfWalletConnected = async () => {
  try {
    if (!window.ethereum) return console.log("Install Metamask");
    const accounts = await window.ethereum.request({
        method: "eth_accounts",
    });
    const firstAccount = accounts[0];
    return firstAccount;
  }catch(error){
    console.log(error);
  }

};
//connect wallet
export const connectWallet = async () => {
    try {
        if (!window.ethereum) return console.log("Install Metamask");
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        const firstAccount = accounts[0];
        return firstAccount;
      }catch(error){
        console.log(error);
      }
}
//fetch contract
const fetchContract = (signerOrProvider) => new ethers.Contract(
    GPT_MEMBERSHIP_ADDRESS,
    GPTMembershipABI,
    signerOrProvider
);
//connecting contract
export const connectingWithContract = async () => {
    try {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect(); 
      const provider = new ethers.providers.Web3Provider(connection);  
      const signer = provider.getSigner(); 
      const contract = fetchContract(signer); 
      return contract;
    } catch (error) {
      console.error("Error connecting with contract:", error);
    }
  };
