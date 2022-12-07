import fs from "fs";
import uniqId from "uniqId";
import chalk from "chalk";

const addUser = function (name, email) {
  const users = loadUsers();
  const duplicatedUser = users.filter(function (user) {
    return user.name === name;
  });

  if (duplicatedUser.length === 0) {
    users.push({
      id: uniqId(),
      name,
      email,
    });
    saveUsers(users);
    console.log(chalk.green("new User Added"));
  } else {
    console.log(chalk.red("user name deleted"));
  }
};

const readUser= (id)=>{
    const users=loadUsers()
    const user=user.find((user)=>user.id==id)
    if(user){
        console.log(chalk.green("user.name"));
    } else {
      console.log(chalk.red("user not found"));
    } 
}

const updateUser =(id,newName)=>{
    const users =loadUsers()
    const user =users.find((user)=> user.id==id)
    user.name=newName
    console.log(chalk.green(`user ${id} has been updated`));
    saveUsers(users)
}

const removeUser=(id)=>{
    const users= loadUsers();
    const KeptUsers=users.filter(function(user){
        return user.id!==id
    })
    if (users.length>KeptUsers.length){
        saveUsers(KeptUsers);
        console.log(chalk.green("user removed"));

    }else{
        console.log(chalk.red("user was not found"));
    }
};

const loadUsers=function(users){
    const dataJson=JSON.stringify(users)
    fs.writeFileSync(users.JSON,dataJson)
};
export {addUser,readUser,updateUser,removeUser}