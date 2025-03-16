// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract GPTMembership is ERC721{
 address public owner;
 uint256 public membershipTypes;
 uint256 public totalMembership;

 string public MY_CONTRACT = "WEB3 CHATGPT";

 struct Membership{
    uint256 id;
    string name;
    uint256 cost;
    string date;
 }
 struct UserMembership{
    uint256 id;
    uint256 membershipId;
    address addressUser;
    uint256 cost;
    string expireDate;
 }
 
 mapping(address => UserMembership) userMemberships;
 mapping(uint256 => Membership) memberships;
 mapping(uint256 => mapping(address =>bool)) public hasBought;
 mapping(uint256 => mapping(uint256 =>address)) public mambershipTaken;
 mapping(uint256 => uint256[]) membershipsTaken;

 modifier onlyOwner(){
    require (msg.sender == owner, "not owner");
    _;
 }
  constructor(string memory _name,string memory _symbol) ERC721(_name,_symbol){
        owner = msg.sender;
  }
//  function buyMemberships(uint256 _membershipId, address _addressUser) public  onlyOwner {
//      require (!hasBought[_addressUser][_membershipId],"Already bought");
//     UserMenberships[_addressUser].id = ++totlaMembership;
//    // UserMen
//  }
 function list(string memory _name ,uint256 _cost, string memory _date) public onlyOwner(){
  memberships[++membershipTypes] = Membership
  ({id: membershipTypes, 
    name :_name, 
    cost:_cost, 
    date :_date});
 }
 function mint(uint256 _membershipId , address _user , string memory _expiredDate) public payable{
    require(_membershipId !=0);
    require(_membershipId <= membershipTypes);
    require(msg.value>= memberships[_membershipId].cost,"Insufficient Funds");
    totalMembership++;

    userMemberships[_user] = UserMembership({
      id:totalMembership, 
      membershipId : _membershipId , 
      addressUser : _user,  
      cost:memberships[_membershipId].cost, 
      expireDate :_expiredDate
      });
      
    hasBought[_membershipId][msg.sender] = true;
    mambershipTaken[_membershipId][totalMembership] = msg.sender;
    membershipsTaken[_membershipId].push(totalMembership);
 }

 function getMemberships(uint256 _membershipId) public view returns (Membership memory){
    return memberships[_membershipId];
}
 function getMemvershipsTaken(uint256 _membershipId) public view returns(uint256[] memory){
    return membershipsTaken[_membershipId];
 }

 function withdraw() public onlyOwner{
    (bool success,) = owner.call{value: address(this).balance}("");
    require(success);
 }
 function getUsermembership(address _address) public view returns (UserMembership memory){
    return userMemberships[_address];
 }
}
