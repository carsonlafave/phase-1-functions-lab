// Code your solution in this file!
function distanceFromHqInBlocks(aStart){
    if (aStart > 42)
        return aStart - 42; 
    else (aStart < 42) 
        return 42 - aStart;
}

function distanceFromHqInFeet(bStart){
    if (bStart > 42)
        return (bStart - 42)*264;
    else (bStart < 42)
        return (42 - bStart)*264;
}

function distanceTravelledInFeet(flocation, dlocation){
    if (flocation > dlocation)
        return (flocation - dlocation)* 264;
    else (flocation < dlocation)
        return (dlocation - flocation) * 264;
}
function calculatesFarePrice(start, destination){
    let blockDistance = Math.abs(start - destination)
    let distanceTraveled = blockDistance * 264;
    if (distanceTraveled <= 400) {
        console.log ('gives customers a free sample');
        return 0;
    }
    else if (distanceTraveled >= 2500) {
        return 'cannot travel that far';
    }
     else if (distanceTraveled > 400 && distanceTraveled  < 2000) {
         let rideCost = (0.02 * (distanceTraveled - 400));
            return rideCost;
     }   
    else if (distanceTraveled >=2000 && distanceTraveled <2500) {
        return 25;
    }
        

    }
