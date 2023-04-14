function distanceFromHqInBlocks(streetNumber) {
    const hqStreetNumber = 42;
    let distanceInBlocks = Math.abs(streetNumber - hqStreetNumber);
    return distanceInBlocks;
  }


  function distanceFromHqInFeet(streetNumber) {
    const blockLength = 264; 
    const distanceInBlocks = Math.abs(streetNumber - 42);
    const distanceInFeet = distanceInBlocks * blockLength;
    return distanceInFeet;
  }
  function distanceTravelledInFeet(start, destination) {
    const blockLength = 264; 
    const distanceInBlocks = Math.abs(destination - start);
    const distanceInFeet = distanceInBlocks * blockLength;
    return distanceInFeet;
  }
  
  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
  
    if (distanceInFeet <= 400) {
      return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      const farePrice = (distanceInFeet - 400) * 0.02;
      return farePrice;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  