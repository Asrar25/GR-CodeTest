let txt=document.getElementById("para");
let table=document.getElementById("table");
let str=txt.innerHTML;

let arr=str.split(" ");
let arr3=arr.map((arr,index)=>({
   arr:arr,
   pos:index+1,
   length:arr.length
}));
arr3.sort((a,b)=>a.length-b.length);
console.log(arr3);
for(var i=0;i<arr3.length;i++){
   let wd=arr3[i];
   var r=document.createElement('tr');
  var w=r.appendChild(document.createElement('td'));
  var p=r.appendChild(document.createElement('td'));
  var l=r.appendChild(document.createElement('td'));
   w.innerHTML=wd.arr;
   p.innerHTML=wd.pos;
   l.innerHTML=wd.length;
   table.appendChild(r);
}