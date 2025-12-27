import { LinkedList } from "../Algorithms/linked-list.js";

function knightMoves(start, end) {
  let linkedlist = new LinkedList();
  let visited_positions = [];
  let temp = [];
  let path = [];
  visited_positions.push(start); // make a node with start and the first value being null
  linkedlist.appendValue(start);

  while (visited_positions.length != 0) {

    let completed = false;
    let current_position = visited_positions.shift();

    current_position.forEach(position => {
      let repeated = false;

      if (isArrayInArray(temp, end)) {
        completed = true;
      }
      if (isArrayInArray(temp, position)) {
        repeated = true;
      }
      if (!repeated && position != []) {
        temp.push(position);
        visited_positions.push(possibleMoves(start));
        linkedlist.appendValue(position);
      }
    })

    if (completed) { break };
  }

  console.log(linkedlist, temp);
  linkedlist.toString();

}

// Function to calculate the moves from a given vertex..
function calculateMoves(start) {
  let allPossibleMoves = [];

  //for knight's movement upwards xaxis+2:
  allPossibleMoves.push([start[0] + 2, start[1] + 1]);
  allPossibleMoves.push([start[0] + 2, start[1] - 1]);

  //for knight's downward movement xaxis-2:
  allPossibleMoves.push([start[0] - 2, start[1] + 1]);
  allPossibleMoves.push([start[0] - 2, start[1] - 1]);

  //for knight's right movement yaxis+2:
  allPossibleMoves.push([start[0] + 1, start[1] + 2]);
  allPossibleMoves.push([start[0] - 1, start[1] + 2]);

  //for knight's left movement yaxis-2:
  allPossibleMoves.push([start[0] + 1, start[1] - 2]);
  allPossibleMoves.push([start[0] - 1, start[1] - 2]);

  return allPossibleMoves;

}

function possibleMoves(start) {
  const allMoves = calculateMoves(start);
  let possibleMoves = [];

  for (let i = 0; i < allMoves.length; i++) {
    //check if the move is still inside the board (0-7)
    if (allMoves[i][0] >= 0 && allMoves[i][0] <= 7 && allMoves[i][1] >= 0 && allMoves[i][1] <= 7) {
      possibleMoves.push(allMoves[i]);
    }
  }

  return possibleMoves;
}

//function to check if array is inside the list of long arrays
function isArrayInArray(listArray, singleArray) {
  const singleArrayString = JSON.stringify(singleArray);
  return listArray.some(subArray => JSON.stringify(subArray) === singleArrayString);
}

knightMoves([3, 3], [0, 0]);

