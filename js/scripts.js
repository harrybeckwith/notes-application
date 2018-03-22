const form = document.querySelector(".form");
const formTitle = document.querySelector(".form__title");
const formDescription = document.querySelector(".form__description");
const formColor = document.querySelector(".form__color");
const formPriority = document.querySelector(".form__priority");
const formAdd = document.querySelector(".form__add");
const cardPriority = document.querySelector(".cards__priority");
const cardNonPriority = document.querySelector(".cards__nonPriority");

const info = [];
const priorityInfo = [];

function getFormInPut(e) {
  e.preventDefault();

  if (formPriority.checked) {
    priorityInfo.push({
      title: formTitle.value,
      description: formDescription.value,
      color: formColor.value,
      priority: formPriority.checked
    });
  } else {
    info.push({
      title: formTitle.value,
      description: formDescription.value,
      color: formColor.value,
      priority: formPriority.checked
    });
  }

  CreateItem(info, cardNonPriority);
  CreateItem(priorityInfo, cardPriority);
}

formAdd.addEventListener("click", getFormInPut);
toggleDelete(info, cardNonPriority);
toggleDelete(priorityInfo, cardPriority);

function CreateItem(arr, place) {
  place.innerHTML = arr
    .map((item, index) => {
      return `
              <div  class ='cards__Item' style ='background: ${item.color}'>
         <h3>  ${item.title} </h3>
<p>${item.description} </p>
<label> delete </label>
       <input type="checkbox" data-index=${index} id="item${index}" />
</div>
          `;
    })
    .join("");
}

function toggleDelete(arr, pos) {
  pos.addEventListener("click", function(e) {
    if (!e.target.matches("input")) return; // skip this unless it's an input
    const el = e.target;
    const index = el.dataset.index;

    arr.splice(index, 1);
    CreateItem(arr, pos);
  });
}
