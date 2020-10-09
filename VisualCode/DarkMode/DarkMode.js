//Grabbing the RootDataSet of the Page
window.RootDataSet = document.documentElement.dataset

//Stores the theme in the local storage of the browser (Only if Dark Mode is enabled)
function DarkSwitch(){
	//Console Logging For Debugging
	console.log(RootDataSet.theme)

	//Changing Light Mode To Dark Mode
	if (RootDataSet.theme == "undefined" | RootDataSet.theme == "") {
		window.RootDataSet.theme = "dark"
		//Setting Local Storage For The Future
		localStorage.setItem("Theme", "dark")
	}else{
		//Changing Dark Mode To Light Mode
		if (RootDataSet.theme == "dark"){
			window.RootDataSet.theme = ""
			//Removing Local Storage To Set to Light Mode
			localStorage.removeItem("Theme")
		}else{
			//Hopefully This Never Happens
			console.log(`
				A Error Occured.
				Blame The Original Programmer.
				He Can Be a Idiot
			`)
		}
	}
}

//upon loading of a page this command will check which theme to load
function DarkCheck(){
	//User Wants Light Mode
	if (localStorage.getItem("Theme") == undefined){
		//Setting Theme To Light Mode
		window.RootDataSet.theme = undefined
		//Safety Redundancy To Keep Theme Local Storage Set To Empty (Can Be Removed)
		localStorage.removeItem("Theme")
		return
	}
	//User Wants Dark Mode
	if (localStorage.getItem("Theme") == "dark"){
		//Setting Theme To Dark Mode
		window.RootDataSet.theme = "dark"
		//Safety Redundancy To Keep Theme Set To Dark (Can be Removed)
		localStorage.setItem("Theme", "dark")
		return
	}
}

//Explanation Area!!

//Local Storage
//When Set to Undefined/ Null The Website Sees It as Light Mode Enabled And Nothing Is Stored On The User's Local Storage
//When Set To Dark The Local Storage For "Theme" Is Set On The User's Local Storage And Will Change The Webpage To Dark Mode