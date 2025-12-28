function knightMoves(start, end) {

  if (!start || !end) {
    return null;
  }

  const queue = [start];// queue to enque and deque the possible values
  const visited = new Set(); //An array with no repetetions :)
  const backtrack = new Map();

  while (queue.length >= 1 && !visited.has(JSON.stringify(end))) {
    const temp_val = queue.shift(); //stores the first variable of the queue
    const possible_moves = possibleMoves(temp_val);

    for (const moves of possible_moves) {

      if (!visited.has(JSON.stringify(moves))) {
        visited.add(JSON.stringify(moves));
        backtrack.set(moves, temp_val);
        queue.push(moves);
      }
    }
  }

  //BackTrack the nodes.

  let searching_val = JSON.stringify(end);
  console.log(searching_val, (JSON.stringify(start)))
  const track = [];
  while (searching_val != (JSON.stringify(start))) {
    for (let [key, value] of backtrack.entries()) {
      key = JSON.stringify(key);
      value = JSON.stringify(value);
      if (key == searching_val) {
        searching_val = value;
        track.push(key);
      }
      if (searching_val == (JSON.stringify(start))) {
        track.push(searching_val);
        break;
      }
    }
  }

  //LOG: 
  console.log(`You made it in : ${track.length} moves`);
  for (let i = track.length - 1; i >= 0; i--) {
    console.log(track[i]);
  }

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

knightMoves([0, 0], [7, 7]);

