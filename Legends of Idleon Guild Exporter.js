/* Legends of Idleon Guild Exporter by Sans#2009
 * Tested on Legends of Idleon 1.14 for Chrome and Firefox
 * 
 * WARNING: These instructions create a Bookmarklet to execute code in your browser.
 * Make sure you understand any code before you execute it.
 *
 * First time setup:
 * 	Chrome:
 * 		1. Create a bookmark
 * 		2. Right click bookmark, click edit
 *		3. Enter "Export Guild" in Name
 *		4. Enter "javascript:" without quotes in URL
 *		5. Paste this entire file after "javascript:" in URL
 *		6. Click Save
 *	Firefox: 
 *		1. Create a bookmark
 * 		2. Right click bookmark, click properties
 *		3. Enter "Export Guild" in Name
 *		4. Enter "javascript:" without quotes in Location
 *		5. Paste this entire file after "javascript:" in Location
 *		6. Click Save
 * 	
 * To use:
 *	1. Play a character
 *	2. Click the "Export Guild" bookmark created in First time setup
 */
 
(function()
{
	function downloadCSV(csv, filename) 
	{
		var csvFile = new Blob([csv], { type: "text/csv" });
		
		var downloadLink = document.createElement("a");
		downloadLink.download = filename;
		downloadLink.href = window.URL.createObjectURL(csvFile);
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);

		downloadLink.click();
	}

	function buildCSV(guild)
	{
		var csv = "";
		for (let i = 0; i != guild.length; ++i)
			csv += guild[i][0] + "," + guild[i][4] + "\n";
			
		return csv;
	}

	function isReady()
	{
		if (typeof xn == "undefined")
		{
			alert("Legends of Idleon Guild Exporter:\nError: Guild is undefined.\nOpen the game and try again.");
			return false;
		}
		
		if (xn == null)
		{
			alert("Legends of Idleon Guild Exporter:\nError: Guild data not found.\nPlay a character and try again.");
			return false;
		}
		
		if (bn == null)
		{
			alert("Legends of Idleon Guild Exporter:\nError: Guild name not found.\nJoin or create a guild and try again.");
			return false;
		}
		
		return true;
	}

	if (isReady())
		downloadCSV(buildCSV(xn), bn.n + " " + new Date().toLocaleDateString() + ".csv");
	
})();