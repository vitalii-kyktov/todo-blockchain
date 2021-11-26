import Web3 from 'web3';

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
const address = '0x806E97137aD9D0dc630C397Ae43a51c9E62f94aF';
const balance = await web3.eth.getBalance(address)
console.log({ balance });
const balanceInEther = web3.utils.fromWei(balance, 'ether');
console.log({ balanceInEther });
const newAccount = web3.eth.accounts.create();
console.log({ newAccount });
