//console.clear();


function isPalindrome(s){
 const m=s.split('');
 let k=(s!==m.reverse().join(''))?false:true;
 if(k!==true){
	const l=m.length, o=Object.create(null);
	let p,i;
	for(i=0;i<l;++i){p=m[i];o[p]=o[p]||0;++o[p]};
	i=0;
	for(p in o){i+=o[p]%2};
	k=i<2;
 };
 return k?1:0;
}



["reviver","senonse","sllees","eyssaasse","rssssreea","Alerte","here","wwrrdd"].forEach(function(s){
 console.log(s,isPalindrome(s));
});
