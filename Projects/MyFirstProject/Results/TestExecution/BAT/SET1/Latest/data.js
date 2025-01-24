var DATA={"axeReport":false,"releaseName":"BAT","noTests":1,"perfReport":false,"EXECUTIONS":[{"noTests":21,"iterationType":"Single","description":"Tc1","platform":"WIN10","exeTime":"00:00:14","iterations":1,"testcaseName":"Tc1","browser":"Chrome","nopassTests":"21","startTime":"24-Jan-2025 16:48:32.032","endTime":"24-Jan-2025 16:48:47.047","scenarioName":"Sc1","bversion":"131","nofailTests":"0","STEPS":[{"data":[{"data":[{"data":{"stepno":1,"stepName":"Open","tStamp":"24-Jan-2025 16:48:34.034","action":"Open","description":"Opened Url: https:\/\/www.saucedemo.com\/","status":"DONE"},"name":"Open the Url [<Data>] in the Browser","type":"step"},{"data":{"stepno":2,"stepName":"Set","tStamp":"24-Jan-2025 16:48:34.034","action":"Set","description":"Entered Text 'standard_user' on 'Username'","status":"DONE"},"name":"Enter the value [<Data>] in the Field [<Object>]","type":"step"},{"data":{"stepno":3,"stepName":"setEncrypted","tStamp":"24-Jan-2025 16:48:34.034","action":"setEncrypted","description":"Entered Encrypted Text SZpqTtjfW+i4z45kdTv2OA== on Password","status":"DONE"},"name":"Enter the Decrypted value [<Data>] in the Field [<Object>]","type":"step"},{"data":{"stepno":4,"stepName":"Click","tStamp":"24-Jan-2025 16:48:34.034","action":"Click","description":"Clicking on Login","status":"DONE"},"name":"Click the [<Object>] ","type":"step"}],"name":"General:Login","description":"","startTime":"24-Jan-2025 16:48:33.033","endTime":"24-Jan-2025 16:48:34.034","type":"reusable","status":"PASS"},{"data":[{"data":{"stepno":5,"stepName":"setObjectProperty","tStamp":"24-Jan-2025 16:48:34.034","action":"setObjectProperty","description":"Setting Object Property for #nameofItem with Sauce Labs Bolt T-Shirt for Object [Swag - Add to cart]","status":"DONE"},"name":"Set object [<Object>] property  as [<Data>] at runtime","type":"step"},{"data":{"stepno":6,"stepName":"Click","tStamp":"24-Jan-2025 16:48:34.034","action":"Click","description":"Clicking on Add to cart","status":"DONE"},"name":"Click the [<Object>] ","type":"step"},{"data":{"stepno":7,"stepName":"Click","tStamp":"24-Jan-2025 16:48:34.034","action":"Click","description":"Clicking on Cart Icon","status":"DONE"},"name":"Click the [<Object>] ","type":"step"},{"data":{"stepno":8,"stepName":"setObjectProperty","tStamp":"24-Jan-2025 16:48:34.034","action":"setObjectProperty","description":"Setting Object Property for #ItemtoBuy with Sauce Labs Bolt T-Shirt for Object [Swag - Item To Buy]","status":"DONE"},"name":"Set object [<Object>] property  as [<Data>] at runtime","type":"step"},{"data":{"stepno":9,"stepName":"assertElementDisplayed","tStamp":"24-Jan-2025 16:48:35.035","link":"\\img\\Sc1_Tc1_Step-9_16-48-34.png","action":"assertElementDisplayed","description":"Element [Item To Buy] is Displayed","status":"PASS"},"name":"Assert if [<Object>] element is displayed","type":"step"},{"data":{"stepno":10,"stepName":"Click","tStamp":"24-Jan-2025 16:48:35.035","action":"Click","description":"Clicking on Checkout","status":"DONE"},"name":"Click the [<Object>] ","type":"step"}],"name":"Shopping:Add Items","description":"","startTime":"24-Jan-2025 16:48:34.034","endTime":"24-Jan-2025 16:48:35.035","type":"reusable","status":"PASS"},{"data":[{"data":{"stepno":11,"stepName":"addVar","tStamp":"24-Jan-2025 16:48:35.035","action":"AddVar","description":"Variable %var5% added with value 387708","status":"DONE"},"name":"Add a variable to access within testcase","type":"step"},{"data":{"stepno":12,"stepName":"addVar","tStamp":"24-Jan-2025 16:48:35.035","action":"AddVar","description":"Variable %Fname% added with value Ashish387708","status":"DONE"},"name":"Add a variable to access within testcase","type":"step"},{"data":{"stepno":13,"stepName":"Set","tStamp":"24-Jan-2025 16:48:35.035","action":"Set","description":"Entered Text 'Ashish387708' on 'First Name'","status":"DONE"},"name":"Enter the value [<Data>] in the Field [<Object>]","type":"step"},{"data":{"stepno":14,"stepName":"addVar","tStamp":"24-Jan-2025 16:48:35.035","action":"AddVar","description":"Variable %Lname% added with value Ghosh387708","status":"DONE"},"name":"Add a variable to access within testcase","type":"step"},{"data":{"stepno":15,"stepName":"Set","tStamp":"24-Jan-2025 16:48:35.035","action":"Set","description":"Entered Text 'Ghosh387708' on 'Last Name'","status":"DONE"},"name":"Enter the value [<Data>] in the Field [<Object>]","type":"step"},{"data":{"stepno":16,"stepName":"Set","tStamp":"24-Jan-2025 16:48:35.035","action":"Set","description":"Entered Text '387708' on 'Zip\/Postal Code'","status":"DONE"},"name":"Enter the value [<Data>] in the Field [<Object>]","type":"step"},{"data":{"stepno":17,"stepName":"Click","tStamp":"24-Jan-2025 16:48:35.035","action":"Click","description":"Clicking on Continue","status":"DONE"},"name":"Click the [<Object>] ","type":"step"}],"name":"Shopping:CheckoutDetails","description":"","startTime":"24-Jan-2025 16:48:35.035","endTime":"24-Jan-2025 16:48:35.035","type":"reusable","status":"PASS"},{"data":[{"data":{"stepno":18,"stepName":"assertElementTextContains","tStamp":"24-Jan-2025 16:48:35.035","objects":"[{\"area\":\"[119,593,1280,40]\",\"name\":\"Total Price\"}]","link":"\\img\\Sc1_Tc1_Step-18_16-48-35.png","action":"assertElementTextContains","description":"Total Price's Text CONTAINS $17.27 ","status":"PASS"},"name":"Assert if [<Object>]'s Text Contains [<Data>]","type":"step"},{"data":{"stepno":19,"stepName":"Click","tStamp":"24-Jan-2025 16:48:36.036","action":"Click","description":"Clicking on Finish","status":"DONE"},"name":"Click the [<Object>] ","type":"step"},{"data":{"stepno":20,"stepName":"assertElementDisplayed","tStamp":"24-Jan-2025 16:48:46.046","link":"\\img\\Sc1_Tc1_Step-20_16-48-46.png","action":"assertElementDisplayed","description":"Element [Success Message1] is Displayed","status":"PASS"},"name":"Assert if [<Object>] element is displayed","type":"step"},{"data":{"stepno":21,"stepName":"assertElementPresent","tStamp":"24-Jan-2025 16:48:46.046","link":"\\img\\Sc1_Tc1_Step-21_16-48-46.png","action":"assertElementPresent","description":"Element [SuccessMessage2] is Present","status":"PASS"},"name":"Assert if [<Object>] is present","type":"step"}],"name":"Shopping:Finalise","description":"","startTime":"24-Jan-2025 16:48:35.035","endTime":"24-Jan-2025 16:48:46.046","type":"reusable","status":"PASS"}],"name":"Iteration_1","type":"iteration","status":"PASS"}],"status":"PASS"}],"iterationMode":"ContinueOnError","exeTime":"00:00:14","testRun":false,"runConfiguration":"Local","themes":["Amethyst","Coral","Pearl","Sapphire"],"testsetName":"SET1","nopassTests":"1","theme":"Sapphire","startTime":"24-Jan-2025 16:48:32.032","endTime":"24-Jan-2025 16:48:47.047","projectName":"MyFirstProject","maxThreads":1,"bddReport":false,"nofailTests":"0"};