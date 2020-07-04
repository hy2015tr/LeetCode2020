var reorderLogFiles = function(logs) {

    let result = [];
    let digLogs = [];
    let letLogs = [];

    for(log of logs){
       let arrWords = log.split(' ');
       "1234567890".includes(arrWords[1].charAt(0)) ? digLogs.push({ "id": arrWords[0], "log": arrWords.slice(1).join(" ") })
                                                    : letLogs.push({ "id": arrWords[0], "log": arrWords.slice(1).join(" ") });
    }

    letLogs.sort((a,b) => a.log.localeCompare(b.log) || a.id.localeCompare(b.id));

    digLogs = digLogs.map(x=> x.id + " " + x.log);
    letLogs = letLogs.map(x=> x.id + " " + x.log);

    result.push(...letLogs, ...digLogs);

    return result;
    
};


// Test Data
const test01 =  ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"];
const result = reorderLogFiles(test01);
console.log(result);

