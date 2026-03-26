// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);

// Voy añadir todos los eventos al randomContact

// añadimos el evento al botón de eliminar
const deleteBtn = exampleRow.querySelector(".btn-delete");

// aqui borramos el contacto al hacer click en el botón de eliminar, usando el método remove()
deleteBtn.addEventListener("click", () => {
  exampleRow.remove();
});



//Añado el evento del botón me gusta
const likeBtn2 = exampleRow.querySelector(".btn-like");
// añadimos el evento click al botón
likeBtn2.addEventListener("click", () => {
// alternamos (añadir/quitar) la clase "selected"
    likeBtn2.classList.toggle("selected");
});




// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);
// Your code goes here ...

//usamos un forEach para iterar sobre el array de 3 contactos y crear una fila por cada uno
threeContacts.forEach((contact) => {
  //creamos la estructura HTML a cada contacto
  const contactRow = document.createElement("tr");

  contactRow.innerHTML = `
    <td>
    <img src="${contact.pictureUrl}" />
  </td>
  <td> ${contact.name} </td>
  <td> ${contact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
  `;
  // añadimos cada contacto al DOM
  tableBody.appendChild(contactRow);


  // ITERATION 2 - Delete Buttons
  // añadimos el evento al botón de eliminar
  const deleteBtn = contactRow.querySelector(".btn-delete");

  // aqui borramos el contacto al hacer click en el botón de eliminar, usando el método remove()
  deleteBtn.addEventListener("click", () => {
    contactRow.remove();
  });

  // ITERATION 3 - Like Buttons

  // Your code goes here ...
  // añadimos el evento al botón de like
  const likeBtn = contactRow.querySelector(".btn-like");

  // añadimos el evento click al botón
  likeBtn.addEventListener("click", () => {
  // alternamos (añadir/quitar) la clase "selected"
      likeBtn.classList.toggle("selected");
  });

});


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

// Agrego .addEventListener al botón de añadir contacto aleatorio, para que al hacer click se ejecute la función que añade un nuevo contacto a la tabla
window.addEventListener('load', () => {

  // seleccionamos el botón de añadir contacto aleatorio
  const addRandomContact = document.querySelector('#btn-add-random');

  // añadimos evento click al botón
  addRandomContact.addEventListener('click', () => {

    // generamos un índice aleatorio del array contacts
    const randomIndex2 = Math.floor(Math.random() * contacts.length);

    // eliminamos ese contacto del array y lo guardamos en un nuevo array
    const splicedArr2 = contacts.splice(randomIndex2, 1);
    const newRandomContact = splicedArr2[0]; // obtenemos el contacto del array (posición 0)

    // creamos una nueva fila de tabla
    const newContactRow = document.createElement("tr");

    // añadimos el contenido HTML a la fila
    newContactRow.innerHTML = `
      <td><img src="${newRandomContact.pictureUrl}" /></td>
      <td>${newRandomContact.name}</td>
      <td>${newRandomContact.popularity.toFixed(2)}</td>
      <td><button class="btn-delete">Delete</button></td>
      <td>
        <button class="btn-like">
          <img src="./images/icon.png" alt="like" />
        </button>
      </td>
    `;

    // añadimos la fila al cuerpo de la tabla
    tableBody.appendChild(newContactRow);

    // seleccionamos el botón delete de esta fila
    const deleteBtn = newContactRow.querySelector(".btn-delete");

    // añadimos evento click para eliminar la fila
    deleteBtn.addEventListener("click", () => {
      newContactRow.remove(); // eliminamos la fila del DOM
    });

    // añadimos el evento al botón de like
    const likeBtn = newContactRow.querySelector(".btn-like");
    // añadimos el evento click al botón
    likeBtn.addEventListener("click", () => {
    // alternamos (añadir/quitar) la clase "selected"
      likeBtn.classList.toggle("selected");
  });

  });
});