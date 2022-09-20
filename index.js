const headquartersStreet = 42
const blockSize = 264

function distanceFromHqInBlocks(customerStreet) {
  let result
  if (customerStreet > headquartersStreet) {
    return (result = customerStreet - headquartersStreet)
  } else if (customerStreet < headquartersStreet) {
    return (result = headquartersStreet - customerStreet)
  } else if (customerStreet === headquartersStreet) {
    return 'Welcome, You are at Scuber!'
  } else {
    return 'Please check details you provide!'
  }
}
console.log(distanceFromHqInBlocks(43))
console.log(distanceFromHqInBlocks(50))
console.log(distanceFromHqInBlocks(34))

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * blockSize
}
console.log(distanceFromHqInFeet(43))
console.log(distanceFromHqInFeet(50))
console.log(distanceFromHqInFeet(34))

function distanceTravelledInFeet(uptown, downtown) {
  return (uptown - downtown) * blockSize < 0
    ? (uptown - downtown) * blockSize * -1
    : (uptown - downtown) * blockSize * 1
}
console.log(distanceTravelledInFeet(43, 48))
console.log(distanceTravelledInFeet(50, 60))
console.log(distanceTravelledInFeet(34, 28))

function calculatesFarePrice(start, destination) {
  if (distanceTravelledInFeet(start, destination) >= 2500) {
    return 'cannot travel that far'
  } else if (distanceTravelledInFeet(start, destination) >= 2000) {
    return 25
  } else if (distanceTravelledInFeet(start, destination) >= 400) {
    return (distanceTravelledInFeet(start, destination) - 400) * 0.02
  } else if (distanceTravelledInFeet(start, destination) < 400) {
    return 0
  } else {
    return 'Please, contact us for more details!'
  }
}
console.log(calculatesFarePrice(43, 44))
console.log(calculatesFarePrice(34, 32))
console.log(calculatesFarePrice(50, 58))
console.log(calculatesFarePrice(34, 24))
