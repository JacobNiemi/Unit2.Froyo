// Prompt the user for froyo flavors
const input = prompt(
  "Please enter your desired froyo flavors seperated by a comma:"
);

// Split the user input into an array of flavors
const flavors = input.split(",");

// Function to count the frequency of each flavor in an array
function countFlavors(flavors) {
  const flavorCount = {};
  flavors.forEach((flavor) => {
    flavorCount[flavor] = (flavorCount[flavor] || 0) + 1;
  });
  return flavorCount;
}

// Count the frequency of each flavor
const flavorCount = countFlavors(flavors);

// Display the results in the console
console.table(flavorCount);
