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
  array[index].score = score;
  array[index].passed = score >= 60 ? true:false;
}

editSubmission(submissions, 2, 99);

console.log(submissions);

function findSubmissionByName(array, name) {
  const found = array.find((array) => array.name === name);
  return found;
}

console.log(findSubmissionByName(submissions, "Jill"));

function findLowestScore(array) {
    let downBad = array[0];
  array.forEach(function (submission) {
    if (downBad.score > submissions.score) {
    downBad = submissions;
    }
  });
  return downBad;
}

console.log(findLowestScore(submissions));

function findAverageScore(array) {
    let total = 0;
    let average;
    for (let num of array) {
        total += num.score
    } average = total / array.length;
    return average;
}

console.log(findAverageScore(submissions));

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

















