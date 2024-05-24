let numip = document.getElementById("ip1");
let txtip = document.getElementById("ip2");
let tbl1 = document.getElementById("table1");
let tbl2 = document.getElementById("table2");
let table=document.getElementById("table");
let dates=["01/03/2024","01/02/2024","02/04/2024","03/14/2024"];
let dif=" ";
for(let i=0;i<dates.length;i++){
    var r=document.createElement('tr');
    var d=r.appendChild(document.createElement('td'));
    var difference=r.appendChild(document.createElement('td'));
    d.innerHTML=dates[i];
    difference.innerHTML=Math.abs(dif);
    table.appendChild(r);
    let j=i+1;
       if(j<dates.length){
        let d1=new Date(dates[i]);
        let d2=new Date(dates[j]);
        let time=d2.getTime()-d1.getTime();
        dif=Math.round(time/(1000*3600*24));

        console.log(Math.abs(dif));   
    }
       
       
    }
    
    



