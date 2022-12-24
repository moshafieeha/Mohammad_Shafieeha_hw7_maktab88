//Merging two arrays by a common property
let userData = [];

for (let i = 0; i < personData.length; i++) {
  userData.push({
    ...additionalPersonData.find((element) => element.id === personData[i].id),
    ...personData[i],
  });

  //If we position personData before additional, all uids become 3??
}

console.log(userData);
