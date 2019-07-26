// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  return Math.abs(42-blocks);
}

function distanceFromHqInFeet(blocks) {
  return Math.abs(42-blocks)*264;
}

function distanceTravelledInFeet(block1, block2) {
  return Math.abs(block1-block2)*264;
}

function calculatesFarePrice(start, destination) {
  let result;
  const distance = distanceTravelledInFeet(start, destination);
  if (distance < 400) {
    result = 0;
  } else if (distance > 400 && distance <= 2000) {
    result = (distance-400) * 2 / 100;
  } else if (distance > 2000 && distance <= 2500) {
    result = 25;
  } else {
    result = 'cannot travel that far';
  }
  return result;
}
