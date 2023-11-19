const ex = document.querySelector("body");
const linkx = ex.innerHTML.match(`<script src="https://cdn.jsdelivr.net/gh/semicon/cdn/web3.0/webapps/libs/js/bootstrap-parts@0.1.1.min.js"><\/script>`); 
if (!linkx) { document.write(`<div id="cover" style="position:fixed; top:0; left:0; background:rgba(0,0,0,0.95); z-index:99999; width:100%; height:100%;"><div style="position: absolute;  left: 50%;  top: 50%; z-index:15; color:red; transform: translate(-50%, -50%);"><center><h2>Sorry!, you are violating the terms.</h2></center></div></div>`);} 
const divfab = ex.innerHTML.match(`<div id="fab-active"><\/div>`);
if (!divfab) { document.write(`<div id="cover" style="position:fixed; top:0; left:0; background:rgba(0,0,0,0.95); z-index:99999; width:100%; height:100%;"><div style="position: absolute;  left: 50%;  top: 50%; z-index:15; color:red; transform: translate(-50%, -50%);"><center><h2>Sorry!, you are violating the terms.</h2></center></div></div>`);} 
