function distanceFromHqInBlocks(blocks) {
if (blocks > 42){
    return  blocks - 42;
} else if (blocks < 41)
return 42 - blocks;
}

distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);
 
function distanceFromHqInFeet(blocks) {
  return  distanceFromHqInBlocks(blocks) * 264 ;
}
distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);

function distanceTravelledInFeet (start, destination) {
    if (start > destination) {
        return (start - destination)* 264;
    } else if (start < destination) {
        return (destination - start)* 264;
    }
}

distanceTravelledInFeet(43, 48);
distanceTravelledInFeet(50, 60);

function calculatesFarePrice(start, destination) {
    let blockDistance = Math.abs(start - destination);
    let distancetravelled = blockDistance *264;
    if (distancetravelled <= 400) {
        return 0;
    } else if (distancetravelled >= 401 && distancetravelled <= 2000){
        return (distancetravelled - 400)* .02;
    } else if (distancetravelled >= 2001 && distancetravelled <= 2500) {
        return 25;
    } else if (distancetravelled >= 2501) {
        return 'cannot travel that far';
    }
    }

calculatesFarePrice(43, 44);
calculatesFarePrice(34, 32);
calculatesFarePrice(50, 58);
calculatesFarePrice(34, 24);