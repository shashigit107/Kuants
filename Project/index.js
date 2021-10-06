let Clients = ["Bigcorp","Bigcorp","Acme","Bigcorp","Zork","Zork","Abc","Bigcorp","Acme","Bigcorp",
"Bigcorp","Zork","Bigcorp","Zork","Zork","Bigcorp","Acme","Bigcorp","Acme","Bigcorp","Acme",
"Littlecorp","Nadircorp"];
var obj=[]
    let count=1;// let count =[]
    let data;
    Clients.sort()
    console.log(Clients)
     for(let i=0; i<Clients.length; i++){
        //  if (count[Clients[i]]!==Undefined)
         count=1;
         for(let j=i+1; j<Clients.length; j++){
             if(Clients[i]===Clients[j]){
                 count++;
             }
         }
         i+=count-1;
         let addableCount =(7/100)*Clients.length;
         if(count>addableCount){
            data={
                names:Clients[i],
                Counts:count
            }
            obj.push(data)
         }
       console.log(obj)
    }
    
    let str=""
    var select=document.getElementById("select");
    obj.forEach((para)=>{
        str+=`<option value=${para.Counts}>${para.names}</option>`
    })
     select.insertAdjacentHTML("beforeend",str)
    
    function btnHanlder(){
        console.log(select.value)
        let demo=document.getElementById("demo")
        demo.innerText=select.value
    }