let web3tr;
let torus;
 
async function newTorus() {

torus = new Torus({
  buttonPosition: "top-right" // default: bottom-left
});
await torus.init({
  buildEnv: "production", // default: production
  enableLogging: true, // default: false
  network: {
    host: "matic", // default: mainnet
    chainId: 137, // default: 1
    networkName: "Matic Network" // default: Main Ethereum Network
  },
loginConfig: {
    'google': {
      showOnModal: false,
    },
    'facebook': {
      showOnModal: false,
    },
    'discord': {
      showOnModal: false,
    },
},
  showTorusButton: true // default: true
});
await torus.login(); // await torus.ethereum.enable()
web3tr = await new Web3(torus.provider);

let useraddress = await web3tr.eth.getAccounts();
console.log(useraddress[0]);

myurl = "https://newyearscardserver.onrender.com/?address=" + useraddress[0];

window.alert("ご登録ありがとうございます！");
window.window.location.href = myurl ;

}

