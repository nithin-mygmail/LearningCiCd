var DATA={"axeReport":false,"releaseName":"BAT","noTests":5,"perfReport":false,"EXECUTIONS":[{"noTests":3,"iterationType":"Single","description":"Delete","platform":"WIN10","exeTime":"00:00:02","iterations":1,"testcaseName":"Delete","browser":"Chrome Headless","nopassTests":"1","startTime":"27-Jan-2025 12:41:43.043","endTime":"27-Jan-2025 12:41:45.045","scenarioName":"API Scenario","bversion":"131","nofailTests":"1","STEPS":[{"data":[{"data":{"stepno":1,"stepName":"setEndPoint","tStamp":"27-Jan-2025 12:41:44.044","action":"setEndPoint","description":"End point set : https:\/\/reqres.in\/api\/users\/2","status":"DONE"},"name":"Set End Point ","type":"step"},{"data":{"stepno":2,"stepName":"deleteRestRequest","tStamp":"27-Jan-2025 12:41:45.045","link":"\\webservice","action":"deleteRestRequest","description":"Response received in : [373ms] with Status code  : 204","status":"COMPLETE"},"name":"POST Rest Request ","type":"step"},{"data":{"stepno":3,"stepName":"assertResponseCode","tStamp":"27-Jan-2025 12:41:45.045","action":"assertResponseCode","description":"Status code is : 204 but should be 202","status":"FAIL"},"name":"Assert Response Code ","type":"step"}],"name":"Iteration_1","type":"iteration","status":"FAIL"}],"status":"FAIL"},{"noTests":4,"iterationType":"Single","description":"Get","platform":"WIN10","exeTime":"00:00:01","iterations":1,"testcaseName":"Get","browser":"Chrome Headless","nopassTests":"3","startTime":"27-Jan-2025 12:41:45.045","endTime":"27-Jan-2025 12:41:47.047","scenarioName":"API Scenario","bversion":"131","nofailTests":"0","STEPS":[{"data":[{"data":{"stepno":1,"stepName":"setEndPoint","tStamp":"27-Jan-2025 12:41:46.046","action":"setEndPoint","description":"End point set : https:\/\/reqres.in\/api\/users\/3","status":"DONE"},"name":"Set End Point ","type":"step"},{"data":{"stepno":2,"stepName":"getRestRequest","tStamp":"27-Jan-2025 12:41:46.046","link":"\\webservice","action":"getRestRequest","description":"Response received in : [47ms] with Status code  : 200","status":"COMPLETE"},"name":"POST Rest Request ","type":"step"},{"data":{"stepno":3,"stepName":"assertResponseCode","tStamp":"27-Jan-2025 12:41:46.046","action":"assertResponseCode","description":"Status code is : 200","status":"PASS"},"name":"Assert Response Code ","type":"step"},{"data":{"stepno":4,"stepName":"storeJSONelementInDataSheet","tStamp":"27-Jan-2025 12:41:46.046","action":"storeJSONelementInDataSheet","description":"Element text [emma.wong@reqres.in] is stored in GET:Email","status":"DONE"},"name":"Store JSON Element In DataSheet ","type":"step"}],"name":"Iteration_1","type":"iteration","status":"PASS"}],"status":"PASS"},{"noTests":5,"iterationType":"Single","description":"Post","platform":"WIN10","exeTime":"00:00:01","iterations":1,"testcaseName":"Post","browser":"Chrome Headless","nopassTests":"4","startTime":"27-Jan-2025 12:41:47.047","endTime":"27-Jan-2025 12:41:48.048","scenarioName":"API Scenario","bversion":"131","nofailTests":"0","STEPS":[{"data":[{"data":{"stepno":1,"stepName":"setEndPoint","tStamp":"27-Jan-2025 12:41:48.048","action":"setEndPoint","description":"End point set : https:\/\/reqres.in\/api\/users","status":"DONE"},"name":"Set End Point ","type":"step"},{"data":{"stepno":2,"stepName":"postRestRequest","tStamp":"27-Jan-2025 12:41:48.048","link":"\\webservice","action":"postRestRequest","description":"Response received in : [294ms] with Status code  : 201","status":"COMPLETE"},"name":"POST Rest Request ","type":"step"},{"data":{"stepno":3,"stepName":"assertResponseCode","tStamp":"27-Jan-2025 12:41:48.048","action":"assertResponseCode","description":"Status code is : 201","status":"PASS"},"name":"Assert Response Code ","type":"step"},{"data":{"stepno":4,"stepName":"storeJSONelementInDataSheet","tStamp":"27-Jan-2025 12:41:48.048","action":"storeJSONelementInDataSheet","description":"Element text [544] is stored in POST:ID","status":"DONE"},"name":"Store JSON Element In DataSheet ","type":"step"},{"data":{"stepno":5,"stepName":"storeJSONelementInDataSheet","tStamp":"27-Jan-2025 12:41:48.048","action":"storeJSONelementInDataSheet","description":"Element text [2025-01-27T07:11:48.893Z] is stored in POST:CreatedAt","status":"DONE"},"name":"Store JSON Element In DataSheet ","type":"step"}],"name":"Iteration_1","type":"iteration","status":"PASS"}],"status":"PASS"},{"noTests":4,"iterationType":"Single","description":"DataGeneration","platform":"WIN10","exeTime":"00:00:01","iterations":1,"testcaseName":"DataGeneration","browser":"Chrome Headless","nopassTests":"4","startTime":"27-Jan-2025 12:41:48.048","endTime":"27-Jan-2025 12:41:50.050","scenarioName":"TestFunctions","bversion":"131","nofailTests":"0","STEPS":[{"data":[{"data":{"stepno":1,"stepName":"addVar","tStamp":"27-Jan-2025 12:41:49.049","action":"AddVar","description":"Variable %var5% added with value 463250","status":"DONE"},"name":"Add a variable to access within testcase","type":"step"},{"data":{"stepno":2,"stepName":"print","tStamp":"27-Jan-2025 12:41:49.049","action":"print","description":"printed 463250","status":"DONE"},"name":"print the data [<Data>]","type":"step"},{"data":{"stepno":3,"stepName":"addVar","tStamp":"27-Jan-2025 12:41:49.049","action":"AddVar","description":"Variable %var6% added with value Ashish463250","status":"DONE"},"name":"Add a variable to access within testcase","type":"step"},{"data":{"stepno":4,"stepName":"print","tStamp":"27-Jan-2025 12:41:49.049","action":"print","description":"printed Ashish463250","status":"DONE"},"name":"print the data [<Data>]","type":"step"}],"name":"Iteration_1","type":"iteration","status":"PASS"}],"status":"PASS"},{"noTests":21,"iterationType":"Single","description":"Tc2","platform":"WIN10","exeTime":"00:00:14","iterations":1,"testcaseName":"Tc2","browser":"Chrome","nopassTests":"21","startTime":"27-Jan-2025 12:41:50.050","endTime":"27-Jan-2025 12:42:04.004","scenarioName":"Sc1","bversion":"131","nofailTests":"0","STEPS":[{"data":[{"data":[{"data":{"stepno":1,"stepName":"Open","tStamp":"27-Jan-2025 12:41:51.051","action":"Open","description":"Opened Url: https:\/\/www.saucedemo.com\/","status":"DONE"},"name":"Open the Url [<Data>] in the Browser","type":"step"},{"data":{"stepno":2,"stepName":"Set","tStamp":"27-Jan-2025 12:41:51.051","action":"Set","description":"Entered Text 'standard_user' on 'Username'","status":"DONE"},"name":"Enter the value [<Data>] in the Field [<Object>]","type":"step"},{"data":{"stepno":3,"stepName":"setEncrypted","tStamp":"27-Jan-2025 12:41:52.052","action":"setEncrypted","description":"Entered Encrypted Text SZpqTtjfW+i4z45kdTv2OA== on Password","status":"DONE"},"name":"Enter the Decrypted value [<Data>] in the Field [<Object>]","type":"step"},{"data":{"stepno":4,"stepName":"Click","tStamp":"27-Jan-2025 12:41:52.052","action":"Click","description":"Clicking on Login","status":"DONE"},"name":"Click the [<Object>] ","type":"step"}],"name":"General:Login","description":"","startTime":"27-Jan-2025 12:41:50.050","endTime":"27-Jan-2025 12:41:52.052","type":"reusable","status":"PASS"},{"data":[{"data":{"stepno":5,"stepName":"setObjectProperty","tStamp":"27-Jan-2025 12:41:52.052","action":"setObjectProperty","description":"Setting Object Property for #nameofItem with Sauce Labs Onesie for Object [Swag - Add to cart]","status":"DONE"},"name":"Set object [<Object>] property  as [<Data>] at runtime","type":"step"},{"data":{"stepno":6,"stepName":"Click","tStamp":"27-Jan-2025 12:41:52.052","action":"Click","description":"Clicking on Add to cart","status":"DONE"},"name":"Click the [<Object>] ","type":"step"},{"data":{"stepno":7,"stepName":"Click","tStamp":"27-Jan-2025 12:41:52.052","action":"Click","description":"Clicking on Cart Icon","status":"DONE"},"name":"Click the [<Object>] ","type":"step"},{"data":{"stepno":8,"stepName":"setObjectProperty","tStamp":"27-Jan-2025 12:41:52.052","action":"setObjectProperty","description":"Setting Object Property for #ItemtoBuy with Sauce Labs Onesie for Object [Swag - Item To Buy]","status":"DONE"},"name":"Set object [<Object>] property  as [<Data>] at runtime","type":"step"},{"data":{"stepno":9,"stepName":"assertElementDisplayed","tStamp":"27-Jan-2025 12:41:52.052","link":"\\img\\Sc1_Tc2_Step-9_12-41-52.png","action":"assertElementDisplayed","description":"Element [Item To Buy] is Displayed","status":"PASS"},"name":"Assert if [<Object>] element is displayed","type":"step"},{"data":{"stepno":10,"stepName":"Click","tStamp":"27-Jan-2025 12:41:52.052","action":"Click","description":"Clicking on Checkout","status":"DONE"},"name":"Click the [<Object>] ","type":"step"}],"name":"Shopping:Add Items","description":"","startTime":"27-Jan-2025 12:41:52.052","endTime":"27-Jan-2025 12:41:52.052","type":"reusable","status":"PASS"},{"data":[{"data":{"stepno":11,"stepName":"addVar","tStamp":"27-Jan-2025 12:41:52.052","action":"AddVar","description":"Variable %var5% added with value 876202","status":"DONE"},"name":"Add a variable to access within testcase","type":"step"},{"data":{"stepno":12,"stepName":"addVar","tStamp":"27-Jan-2025 12:41:52.052","action":"AddVar","description":"Variable %Fname% added with value Ashish876202","status":"DONE"},"name":"Add a variable to access within testcase","type":"step"},{"data":{"stepno":13,"stepName":"Set","tStamp":"27-Jan-2025 12:41:52.052","action":"Set","description":"Entered Text 'Ashish876202' on 'First Name'","status":"DONE"},"name":"Enter the value [<Data>] in the Field [<Object>]","type":"step"},{"data":{"stepno":14,"stepName":"addVar","tStamp":"27-Jan-2025 12:41:52.052","action":"AddVar","description":"Variable %Lname% added with value Ghosh876202","status":"DONE"},"name":"Add a variable to access within testcase","type":"step"},{"data":{"stepno":15,"stepName":"Set","tStamp":"27-Jan-2025 12:41:52.052","action":"Set","description":"Entered Text 'Ghosh876202' on 'Last Name'","status":"DONE"},"name":"Enter the value [<Data>] in the Field [<Object>]","type":"step"},{"data":{"stepno":16,"stepName":"Set","tStamp":"27-Jan-2025 12:41:52.052","action":"Set","description":"Entered Text '876202' on 'Zip\/Postal Code'","status":"DONE"},"name":"Enter the value [<Data>] in the Field [<Object>]","type":"step"},{"data":{"stepno":17,"stepName":"Click","tStamp":"27-Jan-2025 12:41:53.053","action":"Click","description":"Clicking on Continue","status":"DONE"},"name":"Click the [<Object>] ","type":"step"}],"name":"Shopping:CheckoutDetails","description":"","startTime":"27-Jan-2025 12:41:52.052","endTime":"27-Jan-2025 12:41:53.053","type":"reusable","status":"PASS"},{"data":[{"data":{"stepno":18,"stepName":"assertElementTextContains","tStamp":"27-Jan-2025 12:41:53.053","objects":"[{\"area\":\"[119,593,1280,40]\",\"name\":\"Total Price\"}]","link":"\\img\\Sc1_Tc2_Step-18_12-41-53.png","action":"assertElementTextContains","description":"Total Price's Text CONTAINS $8.63 ","status":"PASS"},"name":"Assert if [<Object>]'s Text Contains [<Data>]","type":"step"},{"data":{"stepno":19,"stepName":"Click","tStamp":"27-Jan-2025 12:41:53.053","action":"Click","description":"Clicking on Finish","status":"DONE"},"name":"Click the [<Object>] ","type":"step"},{"data":{"stepno":20,"stepName":"assertElementDisplayed","tStamp":"27-Jan-2025 12:42:03.003","link":"\\img\\Sc1_Tc2_Step-20_12-42-03.png","action":"assertElementDisplayed","description":"Element [Success Message1] is Displayed","status":"PASS"},"name":"Assert if [<Object>] element is displayed","type":"step"},{"data":{"stepno":21,"stepName":"assertElementPresent","tStamp":"27-Jan-2025 12:42:04.004","link":"\\img\\Sc1_Tc2_Step-21_12-42-03.png","action":"assertElementPresent","description":"Element [SuccessMessage2] is Present","status":"PASS"},"name":"Assert if [<Object>] is present","type":"step"}],"name":"Shopping:Finalise","description":"","startTime":"27-Jan-2025 12:41:53.053","endTime":"27-Jan-2025 12:42:04.004","type":"reusable","status":"PASS"}],"name":"Iteration_1","type":"iteration","status":"PASS"}],"status":"PASS"}],"iterationMode":"ContinueOnError","exeTime":"00:00:20","testRun":false,"runConfiguration":"Local","themes":["Amethyst","Coral","Pearl","Sapphire"],"testsetName":"SET2","nopassTests":"4","theme":"Sapphire","startTime":"27-Jan-2025 12:41:43.043","endTime":"27-Jan-2025 12:42:04.004","projectName":"MyFirstProject","maxThreads":1,"bddReport":false,"nofailTests":"1"};