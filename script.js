//your JS code here. If required.
let data=document.querySelector("#output");
let prom=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("Hello, world!");
	})
})
prom.then((ans)=>{
	data.textContent=ans;
})cath((err)=>{
	console.log("err",err);
})
