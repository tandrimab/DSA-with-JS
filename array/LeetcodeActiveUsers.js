var find = function (logs, k) {
  let users = new Map();

  let answers = new Array(k).fill(0);
  logs.forEach((elem) => {
    if (users.has(elem[0])) {
      users.get(elem[0]).add(elem[1]);
    } else {
      let temp = new Set([elem[1]]);
      users.set(elem[0], temp);
    }
  });

  users.forEach((values, _) => {
    let timeSize = values.size;
    let count = answers[timeSize - 1];
    count++;
    answers[timeSize - 1] = count;
  });

  return answers;
};

let logs = [
    [0, 5],
    [1, 2],
    [0, 2],
    [0, 5],
    [1, 3],
  ],
  k = 5;
console.log(find(logs, k));
