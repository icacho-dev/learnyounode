var t = 0;
for (var i = 2; i < process.argv.length; i++) {
	t += Number(process.argv[i])
};
console.log(t);