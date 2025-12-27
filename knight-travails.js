class Node {
  constructor(data = null, prev = null) {
    this.data = data;
    this.prev = prev;
  }
}


function knightMoves(start, end) {
  let firstNode = new Node(possibleMoves(start), null);
  let visited_positions = [];
  let temp = [];
  let path = [];

  visited_positions.push(firstNode); // make a node with start and the first value being null

  while (visited_positions.length != 0) {

    let prevNode = visited_positions[0]
    let current_position = visited_positions.shift().data;
    let completed = false;


    current_position.forEach(position => {
      let repeated = false;

      if (isArrayInArray(temp, end)) {
        completed = true;
      }
      if (isArrayInArray(temp, position)) {
        repeated = true;
      }
      if (!repeated) {
        temp.push(position);
        visited_positions.push(new Node(possibleMoves(position), prevNode));
      }
    })

    if (completed) { break };
  }

  console.log(visited_positions[1].prev.prev.data);

  /*  let temp_link = visited_positions[0].prev;
    while (temp_link !== null) {
      path.push(temp_link);
      temp_link = temp_link.prev;
    }
  */
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
    if (allMoves[i][0] > 0 && allMoves[i][0] < 7 && allMoves[i][1] > 0 && allMoves[i][1] < 7) {
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

knightMoves([0, 0], [3, 3]);

