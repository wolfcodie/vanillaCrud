let X = document.querySelector(".X");
let btn = document.getElementById("btn");
let confirmEdit = document.getElementById("edit");
let table = document.getElementById("table");
let tbody = document.getElementById("tbody");
let pop = document.querySelector("#pop");
let nameInp = document.getElementById("nameInp");
let markInp = document.getElementById("markInp");
var prixInp = document.getElementById("prixInp");
var dateInp = document.getElementById("dateInp");
let select = document.getElementById("types");
let nameP = document.getElementById("nameP");
let types = document.getElementById("types");
let typeP = document.getElementById("typeP");
let prixP = document.getElementById("prixP");
let markP = document.getElementById("markP");
let dateP = document.getElementById("dateP");
let radioInp = document.querySelector(".radioInp");
let output = document.getElementById("output");
let detailOutput = document.getElementById("detailOutput");
///array
let arr = [];
//sort arr
function sortedArray() {
  arr.sort(function (a, b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  });
}
//local storage
if (localStorage.article != null) {
  arr = JSON.parse(localStorage.article);
  console.log(arr);
} else {
  arr = [];
  console.log(arr);
}
//creating class
class Article {
  constructor(name, mark, price, date, type, promo) {
    this.name = nameInp.value;
    this.mark = markInp.value;
    this.price = prixInp.value;
    this.date = dateInp.value;
    this.type = types.value;
    this.promo = promotion;
  }
  details() {
    return `Nom : ${this.name}<br> Mark :  ${this.mark}<br> Price :  ${this.price}<br>date de Produit :  ${this.date}<br>type :  ${this.type}<br>type :  ${this.promo}`;
  }
}
for (var j = 0; j < select.length; j++) {
  if (select.options[j].selected) {
    console.log(select.options[j].selected);
  }
}
//evenets
var promotion;

btn.addEventListener("click", checkFun);
function checkFun(e) {
  e.preventDefault();

  // console.log(article.details());
  console.log("wow");
  e.preventDefault();
  var validNom = false;
  var validprix = false;
  var validDate = false;
  var validType = false;
  var validPromo = false;
  let name = nameInp.value;
  let mark = markInp.value;
  //start checking
  //====check name & mark  =========
  let regex = /[!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g;
  if (
    name.match(regex) ||
    mark.match(regex) ||
    name.length === 0 ||
    mark.length === 0 ||
    name.length > 30 ||
    mark.length > 30
  ) {
    nameP.innerHTML = "*  saisir valid nom max 30";
    markP.innerHTML = "*  saisir valid nom max 30";
    nameP.style.color = "#FF1E1E";
    markP.style.color = "#FF1E1E";
    nameInp.style.color = "#FF1E1E ";
    markInp.style.color = "#FF1E1E ";
    nameInp.style.borderBottom = "2px #FF1E1E solid";
    markInp.style.borderBottom = "2px #FF1E1E solid";
    validNom = false;
  } else {
    nameP.style.color = "#00FFF6";
    markP.style.color = "#00FFF6";
    nameInp.style.borderBottom = "2px #00FFF6 solid";
    markInp.style.borderBottom = "2px #00FFF6 solid";
    nameInp.style.color = "#00FFF6 ";
    markInp.style.color = "#00FFF6";
    nameP.innerHTML = "";
    markP.innerHTML = "";
    validNom = true;
  }
  //====check Price  =========
  let numExp = /[a-z\!\@\#\$\%\^\&\*\)\(\+\=\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/gi;
  let prix = prixInp.value;
  if (prix.match(numExp)) {
    console.log("its must be just numbers");
    prixP.style.color = "red";
    prixP.innerHTML = "*  saisir valid  prix";
    prixInp.style.borderBottom = "1px red solid";
    validprix = false;
  } else if (prix.length === 0 || prix > 10000) {
    validprix = false;
    prixInp.style.borderBottom = "2px #FF1E1E solid";
    prixInp.style.color = "#FF1E1E ";
    prixP.style.color = "#FF1E1E";
    prixP.innerHTML = "*  saisir valid prix";
  } else {
    prixP.innerHTML = "";
    prixInp.style.borderBottom = "2px #00FFF6 solid";
    prixInp.style.color = "#00FFF6";
    validprix = true;
  }
  //====check date  =========
  let date = dateInp.value;
  date = date.split("-").reverse().join("-");
  if (date.length === 0) {
    dateP.innerHTML = "*  saisir valid date";
    dateP.style.color = "#FF1E1E";
    dateInp.style.color = "#FF1E1E ";
    dateInp.style.borderBottom = "2px #FF1E1E solid";
    validDate = false;
  } else {
    dateP.innerHTML = "";
    dateP.style.color = "#00FFF6";
    dateInp.style.color = "#00FFF6 ";
    dateInp.style.borderBottom = "2px #00FFF6 solid";
    validDate = true;
  }
  //====check type  =========
  for (let i = 0; i < select.options.length; i++) {
    if (select.options[0].selected) {
      typeP.innerHTML = "*  saisir valid type";
      typeP.style.color = "#FF1E1E";
      select.style.color = "#FF1E1E ";
      select.style.borderBottom = "2px #FF1E1E solid";
      validType = false;
    } else {
      typeP.innerHTML = "";
      typeP.style.color = "#00FFF6";
      select.style.color = "#00FFF6 ";
      select.style.borderBottom = "2px #00FFF6 solid";
      validType = true;
    }
  }
  //====check promotion  =========
  var ouiInp = document.getElementById("ouiInp");
  var noInp = document.getElementById("no");
  let promoP = document.getElementById("promoP");
  let ouiLable = document.getElementById("ouiLable");
  let nonLable = document.getElementById("nonLable");
  let promoHead = document.getElementById("promoHead");

  if (ouiInp.checked) {
    promoP.innerHTML = "";
    promoP.style.color = "#00FFF6";
    promoHead.style.color = "#00FFF6";
    ouiLable.style.color = "#00FFF6";
    validPromo = true;
  } else if (noInp.checked) {
    promoP.innerHTML = "";
    promoP.style.color = "#00FFF6";
    promoHead.style.color = "#00FFF6";
    nonLable.style.color = "#00FFF6";
    validPromo = true;
  } else {
    promoP.innerHTML = "select a promotion";
    promoP.style.color = "#FF1E1E";
    promoHead.style.color = "#FF1E1E";
    validPromo = false;
  }
  if (
    validNom === true &&
    validprix === true &&
    validDate === true &&
    validType === true &&
    validPromo === true
  ) {
    pop.classList.add("pop");
    confirmFun(e);
  }
}

//confirm to add to table
let confirmBtn = document.getElementById("confirm");
confirmBtn.addEventListener("click", confirmFun);
function confirmFun(e) {
  if (document.getElementById("ouiInp").checked) {
    promotion = "oui";
  } else {
    promotion = "non";
  }
  //create object
  var article = new Article();
  //pus to array
  arr.push(article);
  //sorting the array
  sortedArray();

  detailOutput.innerHTML = article.details();
  tbody.innerHTML = "";
  e.preventDefault();
  pop.classList.remove("pop");
  //push article to array
  addToHtml();
  localStorage.setItem("article", JSON.stringify(arr));
}
function addToHtml() {
  // tbody.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    //create tr
    let line = document.createElement("tr");
    tbody.appendChild(line);
    //create td
    let productName = document.createElement("td");
    line.appendChild(productName);
    productName.innerHTML = arr[i].name;
    //mark
    let productMark = document.createElement("td");
    line.appendChild(productMark);
    productMark.innerHTML = arr[i].mark;
    //price
    let ProductPrice = document.createElement("td");
    line.appendChild(ProductPrice);
    ProductPrice.innerHTML = arr[i].price;
    //price
    let ProductDate = document.createElement("td");
    line.appendChild(ProductDate);
    ProductDate.innerHTML = arr[i].date;
    //price
    let ProductType = document.createElement("td");
    line.appendChild(ProductType);
    ProductType.innerHTML = arr[i].type;
    //price
    let productPromo = document.createElement("td");
    productPromo.innerHTML = arr[i].promo;
    line.appendChild(productPromo);
    //price
    let cbutton = document.createElement("td");
    line.appendChild(cbutton);
    //create button
    let editBtn = document.createElement("button");
    let deletBtn = document.createElement("button");
    //add to buttons
    editBtn.innerHTML = "EDIT";
    deletBtn.innerHTML = "Delete";

    // lier les buttons avec la colonne cbutton
    cbutton.appendChild(editBtn);
    cbutton.appendChild(deletBtn);
    //affecter les valeurs au colonnes creer

    //Pour supprimer une line
    let deletePop = document.getElementById("deletePop");
    deletBtn.addEventListener("click", deleteFun);
    function deleteFun() {
      deletePop.classList.add("pop");
      console.log(line.rowIndex, i + 1);
      //delete confirmation
      let confirmDelete = document.getElementById("confirmDelete");
      confirmDelete.addEventListener("click", confirmDeleteFun);
      function confirmDeleteFun(e) {
        e.preventDefault();
        deletePop.classList.remove("pop");
        arr.splice(arr[i], 1);
        line.remove();
        localStorage.setItem("article", JSON.stringify(arr));
        console.log(arr);
      }
    }

    //Pour modifier une line
    editBtn.onclick = modifier;
    function modifier() {
      //edit
      btn.style.display = "none";
      confirmEdit.style.display = "block";
      //add to array
      nameInp.value = arr[i].name;
      markInp.value = arr[i].mark;
      prixInp.value = arr[i].price;
      dateInp.value = arr[i].date;
      types.value = arr[i].type;
      if (arr[i].promo == "oui") {
        document.getElementById("ouiInp").checked = true;
        console.log("");
      } else {
        document.getElementById("no").checked = true;
      }

      //confirm edit
      confirmEdit.onclick = ModifierdeAjouter;
      function ModifierdeAjouter(e) {
        e.preventDefault();
        tbody.innerHTML = "";
        console.log(arr);
        btn.style.display = "block";
        confirmEdit.style.display = "none";
        arr[i].name = nameInp.value;
        arr[i].mark = markInp.value;
        arr[i].price = prixInp.value;
        arr[i].date = dateInp.value;
        arr[i].type = types.value;
        if (document.getElementById("ouiInp").checked) {
          arr[i].promo = "oui";
        } else {
          arr[i].promo = "non";
        }
        sortedArray();
        //add to html
        addToHtml();
        localStorage.setItem("article", JSON.stringify(arr));
      }
    }
  }

  console.log(arr);
}

//discard on confirm
// X.addEventListener("click", hide);
// function hide(e) {
//   e.preventDefault();
//   pop.classList.remove("pop");
// }
//discard on delete
let XDelete = document.querySelector(".X2");
XDelete.addEventListener("click", hideDelete);
function hideDelete(e) {
  e.preventDefault();
  deletePop.classList.remove("pop");
}

addToHtml();

// function editFun(i) {
//   // console.log(table.rows[i + 1].cells[0].innerHTML);
//   nameInp.value = arr[i].name;
//   btn.style.display = "none";
//   edit.style.display = "block";
//   console.log(arr);
//   edit.addEventListener("click", confirmEditFun);
//   function confirmEditFun(e) {
//     btn.style.display = "block";
//     edit.style.display = "none";
//     e.preventDefault();
//     arr[i].name = nameInp.value;
//     console.log(arr);
//     console.log("im here");
//   }
// }
// let line = document.querySelector(".line");

//   console.log(arr);
// tbody.innerHTML += `
// <tr>
// <td class='line'>${arr[i].name}</td>
// <td>marque</td>
// <td>prix</td>
// <td>date de publication</td>
// <td>type</td>
// <td>en promotion</td>
// <td class="notIn">
// <button onclick="editFun(${i})" id="Modify">Modify</button>
// <button onclick="deleteFun(${i})" id="supprimer">Supprimer</button>
// </td>
// </tr>`;

//  for (let i = 0; i < arr.length; i++) {
//    //create tr
//    let line = document.createElement("tr");
//    line.classList.add("line");
//    tbody.append(line);
//    // create td
//    let productName = document.createElement("td");
//    productName.classList.add("productName");
//    productName.innerHTML = arr[i].name;
//    line.append(productName);
//    // create td
//    let productMark = document.createElement("td");
//    productMark.classList.add("productMark");
//    line.append(productMark);
//    //====Add price  =========
//    var ProductPrice = document.createElement("td");
//    line.append(ProductPrice);
//    //====Add date  =========
//    var ProductDat = document.createElement("td");
//    line.append(ProductDat);
//    //====Add type  =========
//    var ProductType = document.createElement("td");
//    line.append(ProductType);
//    //====Add Date  =========
//    var ProductPromotion = document.createElement("td");
//    line.append(ProductPromotion);
//    //====Add edit btn  ===
//    var editBtn = document.createElement("button");
//    editBtn.classList.add("editBtn");
//    line.append(editBtn);
//    editBtn.innerHTML = "EDIT";
//    // create button
//    let deletBtn = document.createElement("button");
//    deletBtn.classList.add("deletBtn");
//    deletBtn.innerHTML = "Delete";
//    line.append(deletBtn);
//    //delete
//    let deletePop = document.getElementById("deletePop");
//    deletBtn.addEventListener("click", deleteFun);
//    function deleteFun() {
//      deletePop.classList.add("pop");
//      console.log(line.rowIndex, i + 1);
//      //delete confirmation
//      let confirmDelete = document.getElementById("confirmDelete");
//      confirmDelete.addEventListener("click", confirmDeleteFun);
//      function confirmDeleteFun(e) {
//        e.preventDefault();
//        deletePop.classList.remove("pop");
//        arr.splice(arr[i], 1);
//        line.remove();
//        localStorage.setItem("article", JSON.stringify(arr));
//        console.log(arr);
//      }
//    }
//    //edit
//    editBtn.addEventListener("click", editFun);
//    function editFun() {
//      alert("im here");
//      btn.style.display = "none";
//      confirmEdit.style.display = "block";
//      nameInp.value = arr[i].name;
//      //confirm edit
//      confirmEdit.addEventListener("click", confirmEditFun);

//      function confirmEditFun(e) {
//        e.preventDefault();
//        btn.style.display = "block";
//        confirmEdit.style.display = "none";
//        arr[i].name = nameInp.value;
//        table.rows[line.rowIndex].cells[0].innerHTML = arr[i].name;
//        console.log(arr);
//      }
//      console.log(arr);
//    }
//  }
