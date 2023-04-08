//your JS code here. If required.
let data=document.querySelector("#output");
let prom=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("Hello, world!");
	},1000)
})
prom.then((ans)=>{
	data.textContent=ans;
})
