// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract PayZip { 

// Define the owner of the smart contrat 

address public owner;

constructor(){
    owner = msg.sender;
}

// Creating Struct and Mapping for request, transaction and name

struct request_money{
    address requestor;
    uint256 amount;
    string message;
    string name_r;
}

struct receiveSend {
    string action;
    uint256 amount;
    string message;
    address otherPartyAdd;
    string otherPartyName;
}

struct userName{
    string name;
    bool hname;
}

mapping(address => userName) name;
mapping(address => request_money[]) requests;
mapping(address => receiveSend[]) history_t;


// Add a name ot wallet address

function addName(string memory _name) public {
    userName storage newUserName = name[msg.sender];
    newUserName.name = _name;
    newUserName.hname = true;
}

// Create a Request for the money 

function createRequest(address user, uint256 _amount, string memory _message) public {
    request_money memory newRequest;
    newRequest.requestor = msg.sender;
    newRequest.amount = _amount;
    newRequest.message = _message;
    if(name[msg.sender].hname){
        newRequest.name_r = name[msg.sender].name;
    }
    requests[user].push(newRequest);
}

// Pay a Request of the money

function payRequest(uint256 _request) public payable {
    
    require(_request < requests[msg.sender].length,"No such Request Exist");
    request_money[] storage myRequests = requests[msg.sender];
    request_money storage payableRequest = myRequests[_request];
    
    uint256 toPay = payableRequest.amount * 1000000000000000000;
    require(msg.value == (toPay),"Pay Correct Amount");

    payable(payableRequest.requestor).transfer(msg.value);
    addHistoryTransaction(payableRequest.requestor, msg.sender, payableRequest.amount, payableRequest.message);
    myRequests[_request] = myRequests[myRequests.length-1];
    myRequests.pop();
}

function addHistoryTransaction(address receiver, address sender, uint256 _amount, string memory _message) private {
    
    receiveSend memory newReceive;
    newReceive.action = "Receive";
    newReceive.amount = _amount;
    newReceive.message = _message;
    newReceive.otherPartyAdd = sender;
    if(name[sender].hname){
        newReceive.otherPartyName = name[sender].name;
    }
    history_t[receiver].push(newReceive);

    receiveSend memory newSend;
    newSend.action = "Send";
    newSend.amount = _amount;
    newSend.message = _message;
    newSend.otherPartyAdd = receiver;
    if(name[receiver].hname){
        newSend.otherPartyName = name[receiver].name;
    }
    history_t[sender].push(newSend);

}
// Get all requests sent to a User 
function getMyRequests(address _user) public view returns(
        address[] memory, 
        uint256[] memory, 
        string[] memory, 
        string[] memory
){

        address[] memory adrs = new address[](requests[_user].length);
        uint256[] memory amt = new uint256[](requests[_user].length);
        string[] memory mssg = new string[](requests[_user].length);
        string[] memory nm = new string[](requests[_user].length);
        
        for (uint i = 0; i < requests[_user].length; i++) {
            request_money storage myRequests = requests[_user][i];
            adrs[i] = myRequests.requestor;
            amt[i] = myRequests.amount;
            mssg[i] = myRequests.message;
            nm[i] = myRequests.name_r;
        }
        
        return (adrs, amt, mssg, nm);        
         

}

// Get all historic transactions user has been part of

function getMyHistory(address _user) public view returns(receiveSend[] memory){
        return history_t[_user];
}

function getMyName(address _user) public view returns(userName memory){
        return name[_user];
}


}
