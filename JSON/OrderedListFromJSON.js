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


//Method One 
	//List Per Array
/*
function CreateArray(){
	for (let i = 0; i < RequestedData.length; i++) {
		console.log(RequestedData)
		Output.push(`
			<ol>
				<li>
					${RequestedData[i].InsertTag}
				</li>
				<li>
					${RequestedData[i].InsertTag}
				</li>
				<li>
					${RequestedData[i].InsertTag}
				</li>
			</ol>

		`)
	}
	//Posting Array To Page
		//.join("") is Important to Remove "," Between Arrays
		//Insert Any Text Between To Change Seperator
	document.getElementById("Output").innerHTML = Output.join("")
}
*/

/*
//Method Two
	//One List With Array Item
function CreateArray(){
	//Starting List>
	Output.push(`
		<ol>
	`)
	//Adding Content To List
	for (let i = 0; i < RequestedData.length; i++) {
		console.log(RequestedData)
		Output.push(`
			<li>
				${RequestedData[i].InsertTag}
			</li>
		`)
	}
	//Capping off List
	Output.push(`
		</ol>
	`)
	//Posting Array To Page
		//.join("") is Important to Remove "," Between Arrays
		//Insert Any Text Between To Change Seperator
	document.getElementById("Output").innerHTML = Output.join("")
}
*/

//Method Three
	//Nested Ordered List For Each Array And Item
function CreateArray(){
	//Starting List>
	Output.push(`
		<ol>
	`)
	//Adding Content To List
	for (let i = 0; i < RequestedData.length; i++) {
		console.log(RequestedData)
		Output.push(`
			<li>
				${RequestedData[i].InsertTag}
				<ul>
					<li>
						${RequestedData[i].InsertTag}
					</li>
				</ul
			</li>
		`)
	}
	//Capping off List
	Output.push(`
		</ol>
	`)
	//Posting Array To Page
		//.join("") is Important to Remove "," Between Arrays
		//Insert Any Text Between To Change Seperator
	document.getElementById("Output").innerHTML = Output.join("")
}
