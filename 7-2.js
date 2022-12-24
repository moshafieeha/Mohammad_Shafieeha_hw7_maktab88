//CRUD
//Read all data of user data array
function read(array) {
  //Validation
  if (!Array.isArray(array)) throw new Error("False input.");

  console.log(array);
}

read(userData);

//Create a new object and add to the user data array
function create(object) {
  //Validation
  if (typeof object !== "object") throw new Error("False input.");

  //Checking similarity the user ID
  let similarFlag = userData.some((user) => {
    return user.uid === object.uid;
  });
  if (similarFlag) throw new Error("This user ID is already available.");

  //Add
  userData.push(object);
  console.log("New user added.");
  read(userData);
}

create({
  uid: 66,
  firstName: "Jimmy",
  lastName: "McGill",
});

//Update an object of the user data array
function update(object) {
  //Validation
  if (typeof object !== "object") throw new Error("False input.");

  //Checking availability the user ID
  let earlierVersion = userData.find((item) => {
    return item.uid === object.uid;
  });
  if (earlierVersion === undefined) throw new Error("Not available.");

  //Update
  for (let key in object) {
    earlierVersion[key] = object[key];
  }

  console.log("User updated.");
  read(userData);
}

//why previous read shows updated data??
update({
  uid: 66,
  firstName: "Saul",
  lastName: "Goodman",
});

// //Remove an object from the user data array
// function remove(id) {
//   //Validation --- don't use isNaN() for checking
//   if (typeof id != "number") throw new Error("False input.");

//   //Making intiger id
//   id = Math.trunc(id);

//   //Remove
//   const index = userData.findIndex(function (item) {
//     return item.uid === id;
//   });
//   userData.splice(index, 1);

//   console.log("The user was deleted if it existed.");
//   read(userData);
// }

// remove(1);
