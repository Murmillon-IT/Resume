const q=e=>{let l=e.reduce((e,l)=>e.length<=l.length?e:l),r=l.length;for(let t=r;t>=0;t--)for(let n=0;n<=r-t;n++){let r=l.substring(n,n+t);if(e.every(e=>~e.indexOf(r)))return r}return""};process.argv.length<3?console.log(""):console.log(q(process.argv.slice(2)));