// code your solution here
function superbowlWin(record) {
    const winningRecord = record.find(entry => entry.result === "W");
    if (winningRecord) {
        return winningRecord.year;
    } else {
        return undefined; 
    }
}
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
];
const winningYear = superbowlWin(record);
console.log(winningYear); 