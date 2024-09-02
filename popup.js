document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("form").addEventListener("click",handler);
});

function handler(){
    document.getElementById("center").style.display = "flex";

    const private_key =document.getElementById("private_key").ariaValueMax;

    const amont =document.getElementById("amount").ariaValueMax;

    const address =document.getElementById("address").ariaValueMax;



//test_p
//test_a 11:40

//PROVIDER
const provider= new ethers.providers.JsonRpcProvider(
    "https://polygon-mumbai.g.alchemy.com/v20awa485pp03Dww2fTjrSCg7yHlZECw-K"
);

let wallet = new ethers.Wallet(private_key, provider);

const tx ={
    to: address,
    value: ethers.utils.parseEther(amount),

};

var a=document.getElementById("link");
a.href= "somelink url";

wallet.sendTransaction(tx).then((txOb)=>{
    console.log("txHash",txObj.hash);
    document.getElementById("center").style.diplay = "none";
    const a= document.getElementById("link");
    a.href=`https://mumbai.polygonscan.com/tx/${txObj.hash}`;
    document.getElementById("link").style.display ="block";
});

}

document.addEventListener("DOMContentLoaded",function(){
    document
    .getElementById("check_blance")
    .addEventListener("click",checkBlance);
});

function check_blance(){
    document.getElementById("center").style.display ="flex";
    //provider

    const provider = new ethers.provider.JsonRpcProvider(
        "https://polygon-mumbai.g.alchemy.com/v20awa485pp03Dww2fTjrSCg7yHlZECw-K"
    );

    const signer=provider.getSigner();

    console.log(signer);
    const address = document.getElementById("address").value;
    provider.getBalance(address).then((balance) =>{
        //conver a currency unit from wei to ether

        const balanceInEth =ethers.utils.formatEther(balance);
        document.getElementById(
            "check_blance"
        ).innerText =`Your Blance: ${balanceInEth}MATIC`;
        console.log(`${balanceInEth}ETH`);
        document.getElementById("center").style.display="none";
    });

}
