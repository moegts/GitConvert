'use strict';
let liveForm = document.getElementById('formGitLive');
let repoForm = document.getElementById('formGitRepo');


let sectionGitLive = document.getElementById('sectionGitLive');

let Converter = function(link){
    this.link = link;
    Converter.all.push(this);
}

Converter.all=[];



liveForm.addEventListener('submit', getFormData1)
function getFormData1(event){
    event.preventDefault();
    let link = document.getElementById('repoLink').value;
    new Converter(link).LiveLink();
}

repoForm.addEventListener('submit', getFormData2)
function getFormData2(event){
    event.preventDefault();
    let link = document.getElementById('liveLink').value;
    new Converter(link).RepoLink();
}


Converter.prototype.LiveLink = function(){
    let liveLink = 'https://' + this.link.split('/')[3] +'.github.io/'+  this.link.split('/')[4]
    let output = document.getElementById('output');
    output.setAttribute('href', liveLink);
    output.setAttribute('style', 'display: block; margin: 18px;');
    output.innerHTML = liveLink;
}

Converter.prototype.RepoLink = function(){
    let user = this.link.split('/')[2].split('.')[0];
    let repo = this.link.split('/')[3];
    let formLink = `https://github.com/${user}/${repo}`;
    let outputR = document.getElementById('outputR');
    outputR.setAttribute('href', formLink);
    outputR.setAttribute('style', 'display: block; margin: 18px;');
    outputR.innerHTML = formLink;
}