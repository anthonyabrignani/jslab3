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

function deleteSubmissionByIndex(array, index) {
  array.splice(index, 1);
}

deleteSubmissionByIndex(submissions, 1);

function deleteSubmissionByName(array, name) {}

function editSubmission(array, index, score) {}

function findSubmissionByName(array, name) {}

function findLowestScore(array) {}

function findAverageScore(array) {}

function filterPassing(array) {}

function filterAndAbove(array) {}

console.log(submissions);
