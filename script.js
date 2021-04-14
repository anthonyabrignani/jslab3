const submissions = [
  { name: "Jane", score: 95, date: "2020-01-24", passed: true },
  { name: "Joe", score: 77, date: "2018-05-14", passed: true },
  { name: "Jack", score: 59, date: "2019-07-05", passed: false },
  { name: "Jill", score: 88, date: "2020-04-22", passed: true },
];

console.log(submissions);

function addSubmission(array, newName, newScore, newDate) {
  array.push({
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  });
}

addSubmission(submissions, "Jon", 68, "2020-03-30");
addSubmission(submissions, "Jesse", 91, "2019-07-21");

console.log(submissions);

function deleteSubmissionByIndex(array, index) {
  array.splice(index, 1);
}

deleteSubmissionByIndex(submissions, 0);

console.log(submissions);

function deleteSubmissionByName(array, name) {
  const deleted = array.findIndex((array) => array.name === name);
  array.splice(deleted, 1);
}

deleteSubmissionByName(submissions, "Joe");

console.log(submissions);

function editSubmission(array, index, score) {
  const scoreEdit = array.findIndex((array) => array.index === index);
  if (index) array.splice(scoreEdit, 1, score);
} // use conditionals

// editSubmission(submissions, 2, 99);

console.log(submissions);

function findSubmissionByName(array, name) {
  const found = array.find((array) => array.name === name);
  console.log(found);
}

findSubmissionByName(submissions, "Jill");

function findLowestScore(array) {
    let downBad = array.score;
  array.forEach(function (lowest) {
    if (downBad > lowest) downBad = lowest;
  });
  console.log(downBad);
} // use forEach

findLowestScore(submissions);

function findAverageScore(array) {}
// use for of loop

function filterPassing(array) {
  const passing = array.filter((array) => array.score >= 60);
  console.log(passing);
}

filterPassing(submissions);

function filter90AndAbove(array) {
  const highGrades = array.filter((array) => array.score >= 90);
  console.log(highGrades);
}

filter90AndAbove(submissions);
