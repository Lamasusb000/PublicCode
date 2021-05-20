//Defining Of Variables
	//Variable Carrying Requested Data
window.RequestedData = ""
	//Easier Way To Read File Directory
var Location = "/JSON/Test.JSON"


async function FetchData() {
    let response = await fetch(Location);
    if (response.status === 200) {
        let data = await response.json();
		window.RequestedData = data
    }
}

//Requested Data On Loading of Script
FetchData()
