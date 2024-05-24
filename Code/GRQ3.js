let txt=document.getElementById("para");
let table=document.getElementById("table");
let str=txt.innerHTML;

let arr=str.split(" ");

let max=arr[0],min=arr[0];
console.log(arr);
    for(var j=1;j<arr.length;j++){
        if(max.length<arr[j].length){
            max=arr[j];
        }
        if(min.length>arr[j].length){
            min=arr[j];
        }  
    }

let arr3=[min,max];
for(let i=0;i<arr3.length;i++){
    var r=document.createElement('tr');
    var w=r.appendChild(document.createElement('td'));
    var l=r.appendChild(document.createElement('td'));
    var p=r.appendChild(document.createElement('td'));
    
    w.innerHTML=arr3[i];
    l.innerHTML=arr3[i].length;
    let j=0,c=0;
    while(j<arr.length){
        if(arr3[i]==arr[j]){
            c++;
        }
        j++;
    }
    p.innerHTML=c;
    table.appendChild(r);
}
       
       
       
        

    console.log(arr3);
   

