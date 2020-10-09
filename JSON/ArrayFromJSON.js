//Defining Of Variables
	//Variable Carrying Requested Data
	window.RequestedData = ""
	//Eaiser Way To Read File Directory
var Location = "/Folder/File.JSON"


async function FetchData() {
    let response = await fetch(Location);
    if (response.status === 200) {
        let data = await response.json();
		window.RequestedData = data
    }
}

//Requested Data On Loading of Script
FetchData()

//Creation and Posting of The Array
function CreateArray(){
	for (let i = 0; i < RequestedData.length; i++) {
		Output.push(`
			<p>
				Text Before ${RequestedData[i].InsertTag} Text After
				<br>
				Text Before ${RequestedData[i].InsertTag} Text After
				<br>
				Text Before ${RequestedData[i].InsertTag} Text After
			</p>
		`)
	}
	//Posting Array To Page
		//.join("") is Important to Remove "," Between Arrays
		//Insert Any Text Between To Change Seperator
	document.getElementById("Output").innerHTML = Output.join("")
}