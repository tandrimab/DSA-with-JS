var survivedRobotsHealths = function (positions, healths, directions) {
  let reg1 = new RegExp("R");
  let reg2 = new RegExp("L");

  let rIndex = directions.match(reg1)?.index;
  let lIndex = directions.match(reg2)?.index;

  if (rIndex > -1 && lIndex > -1) {
    let mapped = new Map();
    let stack = [];

    for (let i = 0; i < positions.length; i++) {
      mapped.set(positions[i], i);
    }

    positions.sort((a, b) => a - b);

    for (let i = rIndex; i < directions.length; i++) {
      if (directions[i] === "L" && stack.length) {
        if (stack.at(-1)[0] === "R") {
          let pos = positions[i - 1];
          let idx = mapped.get(pos);
          let prevHealth = healths[idx];
          let currHealthIdx = mapped.get(positions[i]);
          let currHealth = healths[currHealthIdx];
          console.log('indexes', idx, currHealthIdx);
          console.log('values', prevHealth, currHealth, healths);
          if (prevHealth < currHealth) {
            currHealth -= 1;
            console.log('for curr', currHealth);
            healths[currHealthIdx] = currHealth;
            delete healths[idx];
            stack.pop();
            stack.push(directions[i])
          } else if (prevHealth > currHealth) {
            prevHealth -= 1;
            console.log('for prev', prevHealth);
            healths[idx] = prevHealth;
            delete healths[currHealthIdx];
          } else {
            console.log('both', prevHealth, currHealth);
            delete healths[idx];
            delete healths[currHealthIdx];
            stack.pop();
          }
          console.log('healths',healths);
        } else {
          stack.push(directions[i])
        }
      }  else {
        stack.push(directions[i]);
      }
      console.log(i, stack);
      console.log("==============");
    }
    return healths.filter(e => e)
  } else {
    return healths;
  }
};

let positions = [3,5,2,6], healths = [10,10,15,12], directions = "RRLL"
console.log(survivedRobotsHealths(positions, healths, directions));
