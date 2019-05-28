import axios from 'axios';
import configs from '../../config/urls';
import fs from 'fs';

const urlConfig = configs['dev'];

const { posts } = urlConfig;
// const dkajsdl = urlCongig.posts;


// complete below functions
// function for getting one post per id as a object
const get = async (req, res, next) => {
  const { id }: { id: string } = req.params;
  const { data } = await axios.get(posts);

  // exercise 
  // add way in order to gets single user per id and check does id is valid or not
  // if user id is valid then store data into the storage file, the same as on listing
  
  // put your code below
   var checkUser = parseInt(id) - 1;
   console.log(checkUser);
   var applyUser = data[checkUser];
   console.log(applyUser);
   if(applyUser == undefined) {
    res.send("Invalid User Id")
   }else {
       const writeToStorageFile: string = JSON.stringify(applyUser, null , 2)
       fs.writeFileSync('userStorage.json', writeToStorageFile);
    res.status(200).send(applyUser);
   }
  // put your code above 
  await next;
}

// function for listing posts as an array of objects
const list = async(req, res, next) => {
  const { data } = await axios.get(posts);
   
  // missing this one (JSON.stringify(data, null, 2));
  // jsonString = JSON.stringify(value, [, replacer [, space ]]);
  // value -> the js object to conver into a JSON string
  
  // replacer -> a fun that alerts the behaviour of the stingification process,
  // ... or an array of String and Number objs that serve as a whitelist for selecting
  // ... the properties of the values obj to be included in the JSON string
  // if this value is null or not provided, all properies of the obj are included
  // ... in the resulting JSON string

  // space -> a String or Number obj that's used to insert white space into the output
  // ... JSON string for readability purposese.
   
  const writeDataToStorageFile: string = JSON.stringify(data, null, 2)  
  fs.writeFileSync('localStorage.json', writeDataToStorageFile);
  res.status(200).send(data);
  await next;
}

const create = async (req, res, next) => {
  const {
    // id,
    // userId,
    // title,
    // body,
    // commNums,
    // notify,
    // likes
    createData
  }: {
    id: string,
    userId: string,
    title: strng,
    body: string,
    commNums: ?number,
    notify: ?number,
    likes: ?number
  } = req.body;
  const checkFile: boolean = fs.existsSync('localStorage.json');
  if(checkFile) {
    const readStorageFile: Array = fs.readFileSync('localStorage.json');
  }else {
    const writeToStorageFile = JSON.stringify({ createData }, null, 2);
   fs.writeFileSync('localStorage.json', writeToStorageFile);

  }
   res.status(201).send({ createData});
  await next;
}

const update = async (req, res, next) => {
  await next;
}

const del = async (req, res, next) => {
  await next;
};

export default {
  get,
  list,
  del,
  update,
  create,
};