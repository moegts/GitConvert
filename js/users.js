'use strict';

let addUserForm = document.getElementById('formAddStudent');
let userNum = 0;
let Users = function(usersName, userId){
    this.usersName = usersName;
    this.userId = userId;
    Users.all.push(this);
}

Users.all=[];
// new Users('blank', 'blank');

addUserForm.addEventListener('submit', getUserName)
function getUserName(event){
    event.preventDefault();
    let user = document.getElementById('userName').value;
    userNum++;
    let userId = "userNum" + userNum;
    new Users(user, userId).renderUser();
}

Users.prototype.renderUser = function(){
    let usersName = this.usersName;
    let userId = this.userId;
    let user = document.getElementById('userName').value;

    let userNamesList = document.getElementById('userNamesList')
    let DivEle = document.createElement('div');
    DivEle.setAttribute('id',userId)
    DivEle.setAttribute('name',user)
    userNamesList.appendChild(DivEle);

    let removeUser = document.createElement('button')
    removeUser.setAttribute('onclick',`remover(${userId})`)
    removeUser.setAttribute('name',userNum)

    removeUser.innerHTML = 'x';
    DivEle.appendChild(removeUser);

    let userNameEle = document.createElement('h4');
    userNameEle.setAttribute('class','h4User')
    userNameEle.innerHTML = usersName;
    DivEle.appendChild(userNameEle);
    console.log(Users.all);
    document.getElementById("formAddStudent").reset()

    // let repo = this.link.split('/')[3];
    // let formLink = `https://github.com/${user}/${repo}`;
    // let outputR = document.getElementById('outputR');
    // outputR.setAttribute('href', formLink);
    // outputR.setAttribute('style', 'display: block; margin: 18px;');
    // outputR.innerHTML = formLink;
}

let remover = function(userId){
    let userIdRemove = userId.id;

    let elementToRemove = document.getElementById(userIdRemove); // to get the element we want to delete (Div)
    elementToRemove.remove(); // delete the Div

    let userName = elementToRemove.getAttribute('name'); // get the name of the element its match the UserName

    let compare = JSON.stringify({usersName: userName, userId: userIdRemove}); // here i did convert the object to string so i can compare it with all the constractor
        for (let i = -1; i < Users.all.length; i++) {
            if (JSON.stringify(Users.all[i]) == compare) {
                delete Users.all[i];
                Users.all = Users.all.filter(function () { return true })
            }
        }
    console.log(Users.all);
}

// add users to localstoarge
// make the user allways show in the screen even after refresh
// dont allow add same user 2 times
// make the page refresh and check if this fix the array not deleting problem

