resumeTemplate = {
  name : '',
  phoneNo : '',
  email : '',
  address : '',
  age : '',
  image : '',
  github : '',
  linkedin : '',
  education : [''],
  careerObj : '',
  achivements : [''],
  project : [{
    title: '',
    description : '',
    link: ''
  }]
}

const eduAddButton = document.querySelector('#edu');
const achivementAddButton = document.querySelector('#achivement');
const projectAddButton = document.querySelector('#project');

let arrEducation = [];
function addEdu() {
  let eduField = document.querySelector('.education');
  let eduValue = eduField.value; 
  arrEducation.push(eduValue);
  renderEdu();
  eduField.value = '';
}

function renderEdu() {
  let eduHtml = ``;
  for (let i = 0; i < arrEducation.length; i++){
    let eduElement = arrEducation[i];
    html =`
    <div class="entries">
    <span>${eduElement}</span>
    <button class="edit"
    onClick="document.querySelector('.education').value = arrEducation[${i}] ;
    saveEdu(${i});"
    ><i class="fa-solid fa-pen-to-square"></i></button>
    <span><button type="button" class = "delete" onClick="
    arrEducation.splice(${i}, 1);
    renderEdu();
    document.querySelector('#save').innerHTML = '';
    "><i class="fa-solid fa-trash"></i></button></span>
    </div>`;
    eduHtml += html;
  }
  document.querySelector('#eduJs').innerHTML = eduHtml;
}

function saveEdu(i){
  document.querySelector('#save').innerHTML = `<span><button class="save" onClick="
  arrEducation[${i}] = document.querySelector('.education').value;
  renderEdu();
  document.querySelector('.education').value ='';
  document.querySelector('#save').innerHTML = '';
  "><i class="fa-solid fa-floppy-disk"></i></button></span>`;
}

let arrAchivement = [];
function addAchivement() {
  let achievementField = document.querySelector('.achivements');
  let achievementValue = achievementField.value; 
  arrAchivement.push(achievementValue);
  renderAchivement();
  achievementField.value = '';
}

function renderAchivement() {
  let achievementHtml = ``;
  for (let i = 0; i < arrAchivement.length; i++){
    let achievementElement = arrAchivement[i];
    html =`
    <div class="entries">
    <span>${achievementElement}</span>
    <button class="edit"
    onClick="document.querySelector('.achivements').value = arrAchivement[${i}] ;
    saveAchivement(${i});"
    ><i class="fa-solid fa-pen-to-square"></i></button>
    <span><button type="button" class = "delete" onClick="
    arrAchivement.splice(${i}, 1);
    renderAchivement();
    document.querySelector('#achivementSave').innerHTML = '';
    "><i class="fa-solid fa-trash"></i></button></span>
    </div>`;
    achievementHtml += html;
  }
  document.querySelector('#achivementJs').innerHTML = achievementHtml;
}

function saveAchivement(i){
  document.querySelector('#achivementSave').innerHTML = `<span><button class="save" onClick="
  arrAchivement[${i}] = document.querySelector('.achivements').value;
  renderAchivement();
  document.querySelector('.achivements').value ='';
  document.querySelector('#achivementSave').innerHTML = '';
  "><i class="fa-solid fa-floppy-disk"></i></button></span>`;
  
}

let arrProject = [{
  title: '',
  description: '',
  link: ''
}];

function addProject() {
  const inputTitle = document.querySelector('.title');
  const titleValue = inputTitle.value;

  const inputDescription = document.querySelector('.description');
  const descriptionValue = inputDescription.value;
  
  const inputLink = document.querySelector('.link');
  const linkValue = inputLink.value;

  arrProject.push({
    title: titleValue,
    description: descriptionValue,
    link: linkValue
  });

  console.log(arrProject);
  inputTitle.value = '';
  inputDescription.value = '';
  inputLink.value = '';
  renderProject();
}

function renderProject() {
  let projectHtml = '';
  for (let i = 1; i < arrProject.length; i++) {
    let projectObject = arrProject[i];
    let { title, description, link } = projectObject;
    const html = `
      <div>
        <p class="projHead">Title</p>
        <div class="titleJs">
          <span>${title}</span>
          <button class="edit" onClick="editProject('${title}', ${i}, 'title');"><i class="fa-solid fa-pen-to-square"></i></button>
        </div>

        <p class="projHead">Description</p>
        <div class="descriptionJs">
          <span>${description}</span>
          <button class="edit" onClick="editProject('${description}', ${i}, 'description');"><i class="fa-solid fa-pen-to-square"></i></button>
        </div>

        <p class="projHead">Link</p>
        <div class="linkJs">
          <span>${link}</span>
          <button class="edit" onClick="editProject('${link}', ${i}, 'link');"><i class="fa-solid fa-pen-to-square"></i></button>
        </div>

        <div class="flex deleteProj" id="deleteProj">
          <button type="button" class="delete" onClick="deleteProject(${i});"><i class="fa-solid fa-trash"></i></button>
        </div>
      </div>`;
    projectHtml += html;
  }
  document.querySelector('.projectContent').innerHTML = projectHtml;
  console.log(arrProject);
}

function deleteProject(index) {
  arrProject.splice(index, 1);
  renderProject();
  document.querySelector('.editInput').innerHTML = '';
}

function editProject(value, index, element) {
  const html = `<input type="text" class="saveProject">
          <button type="button" class="saveProjectBtn" onClick="saveProject(${index}, '${element}');"><i class="fa-solid fa-floppy-disk"></i></button>`;
  document.querySelector('.editInput').innerHTML = html;
  document.querySelector('.saveProject').value = value;
}

function saveProject(index, element) {
  const newValue = document.querySelector('.saveProject').value;
  arrProject[index][element] = newValue;
  renderProject();
  document.querySelector('.editInput').innerHTML = '';
}

let image = '';

  document.getElementById('profilePicture').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        image = e.target.result;
        displayImage(image);
        console.log('Image saved in variable:', image);
      };
      reader.readAsDataURL(file);
    }
  });

  function displayImage(image) {
    const imgElement = document.getElementById('profileImage');
    imgElement.src = image;
    imgElement.style.display = 'block';
  }

  
function generateResume() {
  const imgElement = document.querySelector('.imageT');
    imgElement.src = image;
    imgElement.style.display = 'block';

  const name = document.querySelector('#name').value;
  document.querySelector('.nameT1').innerText = name;
  document.querySelector('.nameT1').innerText = name;
  
  const age = document.querySelector('#age').value;
  document.querySelector('.ageT').innerText = `Age : ${age}`;

  const phoneNo = document.querySelector('#phoneNumber').value;
  document.querySelector('.phoneNoT').innerText = phoneNo;

  const email = document.querySelector('#email').value;
  document.querySelector('.emailT').innerText = email;

  const address = document.querySelector('#address').value;
  document.querySelector('.addressT').innerText = address;

  const github = document.querySelector('#github').value;
  document.querySelector('.gitHubT').innerText = github;

  const linkedIn = document.querySelector('#linkedIn').value;
  document.querySelector('.linkedInT').innerText = linkedIn;

  const cObjectiveT = document.querySelector('#careerObjective').value;
  document.querySelector('.cObjectiveT').innerText = cObjectiveT;

  let eduHtml = '';
  for (let i = 0; i < arrEducation.length; i++) {
    let edu = arrEducation[i];
    let html = `
      <li>${edu}</li>
    `;
    eduHtml += html;
  }
  document.querySelector('.educationListT').innerHTML = eduHtml;



  let achievementHtml = ``;
  for (let i = 0; i < arrAchivement.length; i++) {
  let achievement = arrAchivement[i];
  let html = `
    <li>${achievement}</li>
  `;
  achievementHtml += html;
}
  document.querySelector('.achievementListT').innerHTML = achievementHtml;

  let projectHtml = ``;
  for (let i = 1; i < arrProject.length; i++) {
    let projectObject = arrProject[i];
    let { title, description, link } = projectObject;
    const html = `
      <li>
        <h4>${title}</h4>
        <br>
        <p>${description}</p>
        <br>
        <p>${link}</p>
      </li>
    `;
    projectHtml += html;
  }
  document.querySelector('.ProjectListT').innerHTML = projectHtml;
  document.querySelector('.template').style.display = 'block';
  // document.querySelector('#resumeForm').style.display = 'none';
  alert(`Your resume is generated . please scroll down.`);
}

function printResume(){
window.print();
}
