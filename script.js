let contacts = [
  { name: "Maxwell Wright", phone: "019171916495", email: "contact1@cctb.com" },
  { name: "Raja Villarreal", phone: "0863982895", email: "contact2@cctb.com" },
  { name: "Helen Richards", phone: "080031111", email: "contact3@cctb.edu" },
];

function displayContacts() {
  const contactsList = document.getElementById("contacts-list");
  contactsList.innerHTML = "";
  contacts.forEach((contact) => {
    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contact");
    contactDiv.innerHTML = `<strong>${contact.name}</strong><br>Phone: ${contact.phone}<br>Email: ${contact.email}`;
    contactsList.appendChild(contactDiv);
  });
}

function addContact() {
  let name = prompt("Enter contact name:");
  let phone = prompt("Enter contact phone:");
  let email = prompt("Enter contact email:");
  if (name && phone && email) {
    contacts.push({ name, phone, email });
    setTimeout(displayContacts, 500); // Simulate a delay
  }
}

function findContact(name, index = 0) {
  if (index >= contacts.length) return null;
  if (contacts[index].name.toLowerCase() === name.toLowerCase())
    return contacts[index];
  return findContact(name, index + 1);
}

function processContact(contact, callback) {
  if (contact) {
    callback(contact);
  } else {
    alert("Contact not found.");
  }
}

function interactWithContacts() {
  let choice;
  do {
    choice = prompt("Choose an action: 'add', 'find', or 'quit':");
    if (choice === "add") {
      addContact();
    } else if (choice === "find") {
      let name = prompt("Enter name to search:");
      processContact(findContact(name), (contact) => {
        alert(
          `Name: ${contact.name}\nPhone: ${contact.phone}\nEmail: ${contact.email}`
        );
      });
    }
  } while (choice !== "quit");
}

document
  .getElementById("add-contact")
  .addEventListener("click", interactWithContacts);

setInterval(() => {
  console.log(`Current number of contacts: ${contacts.length}`);
}, 5000);

function changeBackgroundColor() {
  const colors = ["#FFCCCC", "#CCFFCC", "#CCCCFF", "#FFFFCC", "#FFCCFF"];
  let index = 0;
  setInterval(() => {
    document.body.style.backgroundColor = colors[index % colors.length];
    index++;
  }, 5000);
}

changeBackgroundColor();
