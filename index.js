
function superbowlWin(record) {
  let found = record.find(element => element.result === "W");

  if (found) {
    return found.year;
  } else {
    return undefined;
  }
}