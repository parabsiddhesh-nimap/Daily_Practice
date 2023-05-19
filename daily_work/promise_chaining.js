
/* 
  demonstration of Promise chaining
*/

getUser(1)
  .then((user) => {
    console.log(user)
    return getRepositories(user.username)
  }) 
  .then((data) => {
    console.log(data)
    return getCommits('')
  })
  .then((data) => console.log(data))
  .catch((error) => console.error(error));


  
/* 
  @function Using async/await
*/

let showCommits = async () => {
  try{
    let user = await getUser(1);
    console.log('USer : ',user);
    let getReposit =  await getRepositories('Siddhesh');
    console.log(getReposit);
    let getCommit = await getCommits();
    console.log(getCommit);
  }catch(e) {
    console.log('error ocurred :',e);
  }
}
showCommits();

var delay = 5000;
function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      console.log('Reading User from server...');
      resolve({id : id, username : "Siddhesh"});
    },delay);
  })
};


function getRepositories(username) {
  return new Promise(function(resolve,reject) {
  setTimeout(()=> {
    console.log('calling git repository...');
    resolve([{'repo1' : username, 'repo2' : username, 'repo3' : username}]);
  },delay);
})
};

function getCommits(){
  return new Promise(function(resolve,reject) {
  setTimeout(()=> {
    console.log('Calling Github API...');
    resolve(['Commit']);
  },delay);
})
};