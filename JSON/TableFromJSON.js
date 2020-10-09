//Defining Of Variables
	//Variable Carrying Requested Data
window.RequestedData = ""
	//Eaiser Way To Read File Directory
var Location = "/JSON/Test.JSON"
	//Variable For Carrying Output Array
var Output = []


async function FetchData() {
    let response = await fetch(Location);
    if (response.status === 200) {
        let data = await response.json();
		window.RequestedData = data
		CreateArray()
    }
}

//Requested Data On Loading of Script
FetchData()

//Creation and Posting of The Array
function CreateArray(){
	//Starting Table in Array
	Output.push(`
		<table>
			<tr>
				<th>
					Header 1
				</th>
				<th>
					Header 2
				</th>
				<th>
					Header 3
				</th>
			</tr>
	`)

	//Adding Content To The Array
	for (let i = 0; i < RequestedData.length; i++) {
		Output.push(`
			<tr>
				<td>
					${RequestedData[i].InsertTag}
				</td>
				<td>
					${RequestedData[i].InsertTag}
				</td>
				<td>
					${RequestedData[i].InsertTag}
				</td>
			</tr>
		`)
	}
	//Posting Array To Page
		//.join("") is Important to Remove "," Between Arrays
		//Insert Any Text Between To Change Seperator
	document.getElementById("Output").innerHTML = Output.join("")
}