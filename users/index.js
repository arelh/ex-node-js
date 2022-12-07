import yargs from "yargs";

import {addUser,readUser,updateUser,removeUser} from "./utils.js"

const y= yargs()

y.command({
    command:"add",
    describe:"add a new user",
    builder :{
        id:{
            describe:"User ID",
            demandOption:false,
            type:"string",
        },
        name:{
            describe:"User name",
            demandOption:true,
            type:"string",
        },
        email:{
            describe:"User email",
            demandOption:true,
            type:"string",
        },
    },




    handler:function (argv){
        addUser(argv.name,argv.email);
    },
})
y.command({
    command:"read",
    describe:"read user",
    builder :{
        id:{
            describe:"User ID",
            demandOption:false,
            type:"string",
        },
    },

    handler:function (argv){
        readUser(argv.id);
    },
});


y.command({
    command:"update",
    describe:"update a user ",
    builder :{
        id:{
            describe:"User ID",
            demandOption:false,
            type:"string",
        },
        newName:{
            describe:"update user name",
            demandOption:true,
            type:"string",
        },
    },

    handler:function (argv){
        updateUser(argv.id,argv.newName);
    },
});


y.command({
    command:"remove",
    describe:"remove a user ",
    builder :{
        id:{
            describe:"User ID",
            demandOption:false,
            type:"string",
        },
    },

    handler:function (argv){
        removeUser(argv.id,argv.newName);
    },
});

y.parse(process.argv.slice(2))