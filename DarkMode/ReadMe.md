Dark Mode Javascript that Creates a LocalStorage Item That Allows Cross Page Theme Setting.
	Created By Junior Lamas


---HTML---
	Simply Add Two Tags inside of The HTML Head section and It'll Work Across Pages!
	Changing Themes is as Easy as adding a Onclick="DarkSwitch" into any HTML Attribute (Prefferably A Button/Input)

---HTML Head Tags---
	<link rel="stylesheet" href="/DarkMode/DarkMode.css">
	<script src="/DarkMode/DarkMode.js" onload="DarkCheck()"></script>


---Javascript---
	Inside The Javascript I added Plenty of Note That Allows Easy Explanations To Get Things Running!

---Key Functions!---
--DarkCheck()--
	onload of Webpage It Will Detect Localstorage And Set The Theme Automatically
--DarkSwitch()--
	Can Be Used in Many Ways And By Running The Function it Will Change Theme From Light Mode To Dark Mode


---Cascading Style Sheets (CSS)---
	Root Data-Theme is "Light Mode" 
		Light Mode is Set To Root To Be Considered a Default Option
	Data-Theme "Dark" is Dark Mode
		Javascript Must Be Enabled To Switch To This Theme
	At The Top of The Page is Where Theme Specific Variables Are Defined. Feel Free To Change Them!
	If You Wish To Add More Items Such As Tag Specific Colors Then more Variables Can Be Defined
	Be Sure To Add Future Variables To BOTH Themes
