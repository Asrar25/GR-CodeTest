let numip = document.getElementById("ip1");
let txtip = document.getElementById("ip2");
let tbl1 = document.getElementById("table1");
let tbl2 = document.getElementById("table2");

 document.getElementById("btn").addEventListener('click', function() {
    let num = parseInt(numip.value);  
let txt = txtip.value; 
var r = document.createElement('tr');
    var n = r.appendChild(document.createElement('td'));
var t = r.appendChild(document.createElement('td'));

n.innerHTML = num;
    t.innerHTML = txt;
    if (num % 2 === 0) {
        tbl2.appendChild(r);
    } else {
        tbl1.appendChild(r);
    }
});
