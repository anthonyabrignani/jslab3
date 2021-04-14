const submissions = [
  { name: "Jane", score: 95, date: "2020-01-24", passed: true },
  { name: "Joe", score: 77, date: "2018-05-14", passed: true },
  { name: "Jack", score: 59, date: "2019-07-05", passed: false },
  { name: "Jill", score: 88, date: "2020-04-22", passed: true },
];

function addSubmission(array, newName, newScore, newDate) {
  array.push({
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  });
}

addSubmission(submissions, "Jon", 68, "2020-03-30");
addSubmission(submissions, "Jesse", 75, "2019-07-21");

function deleteSubmissionByIndex(array, index) {
  array.splice(index, 1);
}

deleteSubmissionByIndex(submissions, 0);

function deleteSubmissionByName(array, name) {
    const found = array.findIndex(array => array.name === name);
    array.splice(found, 1);
}

deleteSubmissionByName(submissions, "Jill");

function editSubmission(array, index, score) {} // use conditionals

function findSubmissionByName(array, name) {} // use find method

function findLowestScore(array) {} // use forEach

findLowestScore(submissions);

function findAverageScore(array) {} // use for of loop

function filterPassing(array) {} // use filter

function filter90AndAbove(array) {} // use filter

console.log(submissions);