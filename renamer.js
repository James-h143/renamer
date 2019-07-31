const fs = require("fs");

function main(args){
	console.log(args);
	const sFolderName = args[2];
	const sStringToFind = args[3];
	const sStringToReplaceWith = args[4];
	if(typeof sFolderName === "undefined"){
		throw new Error("Directory doesnt exist");
	}else{
		const dirs = fs.readdirSync(sFolderName);
		dirs.forEach(function(file){
			if(file.indexOf(sStringToFind) > -1){
				console.log(file+" will be renamed");
				fs.renameSync(sFolderName+file,+sFolderName+file.replace(sStringToFind,sStringToReplaceWith));
			}
		});
	}
}
main(process.argv);
