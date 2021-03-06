/*
 *
 * Global app functions
 *
 */

// Service worker

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("./sw.js").then(
      function (registration) {
        // Registration was successful
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      function (err) {
        // registration failed :(
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}

// Show/hide pages
function showPage(sectionClicked) {
  const selection = document
    .getElementById("pages")
    .getElementsByTagName("section");
  let title = document.getElementById("page-title");

  const buttonSpot = document.getElementById("backButtonSpot");

  const container3BackBtn = `<svg onclick="goBackFromAddAnimal()" id="backButton" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600 dark:text-gray-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>`;

  const container5BackBtn = `<svg onclick="goBackFromViewSpecies()" id="backButton" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600 dark:text-gray-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>`;

  const container7BackBtn = `<svg onclick="goBackFromAnimalList() & showPage('5'); return false & clearAnimalList()" id="backButton" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600 dark:text-gray-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>`;

  const container6BackBtn = `<svg onclick="goBackFromAnimalPage() & showPage('7'); return false" id="backButton" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600 dark:text-gray-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>`;

  const container8BackBtn = `<svg onclick="goBackFromEditAnimalPage() & showPage('6'); return false" id="backButton" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600 dark:text-gray-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>`;

  const container1BackBtn = `<svg onclick="goBackFromAddLogPage() & showPage('6'); return false" id="backButton" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600 dark:text-gray-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>`;

  const container10BackBtn = `<svg onclick="goBackFromEditUser()" id="backButton" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600 dark:text-gray-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>`;

  for (var i = 0; i < selection.length; i++) {
    selection[i].style.display = "none";
  }
  document.getElementById("container" + sectionClicked).style.display = "block";

  if (document.getElementById("container1").style.display === "block") {
    title.innerText = "Add Log";
    buttonSpot.innerHTML = container1BackBtn;
  }
  if (document.getElementById("container2").style.display === "block") {
    title.innerText = "Add Wildlife";
    buttonSpot.innerHTML = container3BackBtn;
  }
  if (document.getElementById("container3").style.display === "block") {
    title.innerText = "My Wildlife";
  }
  if (document.getElementById("container5").style.display === "block") {
    buttonSpot.innerHTML = container5BackBtn;
  }
  if (document.getElementById("container6").style.display === "block") {
    buttonSpot.innerHTML = container6BackBtn;
  }
  if (document.getElementById("container7").style.display === "block") {
    buttonSpot.innerHTML = container7BackBtn;
  }
  if (document.getElementById("container8").style.display === "block") {
    buttonSpot.innerHTML = container8BackBtn;
  }
  if (document.getElementById("container9").style.display === "block") {
    title.innerText = "Admin Panel";
  }
  if (document.getElementById("container10").style.display === "block") {
    title.innerText = "Settings";
    document.getElementById("container4").style.display = "none";
    showMainPages();
  }
}

function hideSettingsHeader() {
  const header = document.getElementById("settingsHeader");
  header.style.display = "none";
}

function showEditUserPage() {
  const container = document.getElementById("pages");
  const page = document.getElementById("container10");
  page.style.display = "block";
  container.style.display = "none";
}

function showHideAboutPage() {
  const about = document.getElementById("container11");
  const pages = document.getElementById("pages");
  const container = document.getElementById("container");

  if (about.style.display === "block") {
    about.style.display = "none";
    container.style.display = "block";
    pages.style.display = "block";
  } else {
    about.style.display = "block";
    container.style.display = "none";
    pages.style.display = "none";
  }
}

function hideAboutPage() {
  const about = document.getElementById("container11");
  about.style.display = "none";
}

function showMainPages() {
  const pages = document.getElementById("pages");
  const container = document.getElementById("container");
  const header = document.getElementById("settingsHeader");

  container.style.display = "block";
  pages.style.display = "block";
  header.style.display = "none";
}

function showHideSettingsPage() {
  const settings = document.getElementById("container4");
  const pages = document.getElementById("pages");
  const container = document.getElementById("container");
  const header = document.getElementById("settingsHeader");

  if (settings.style.display === "block") {
    settings.style.display = "none";
    container.style.display = "block";
    pages.style.display = "block";
    header.style.display = "none";
  } else {
    settings.style.display = "block";
    container.style.display = "none";
    pages.style.display = "none";
    header.style.display = "block";
  }
}

function hideSettingsPage() {
  const settings = document.getElementById("container4");
  const pages = document.getElementById("pages");
  const container = document.getElementById("container");

  settings.style.display = "none";
}

function goBack(current, prev, pageTitle, state) {
  let currentPage = document.getElementById(current);
  let previousPage = document.getElementById(prev);
  let title = document.getElementById("page-title");
  let backButton = document.getElementById("backButton");

  currentPage.style.display = "none";
  previousPage.style.display = "block";
  title.innerText = pageTitle;
  backButton.style.display = state;
}

function goBackFromAddAnimal() {
  goBack("container2", "container3", "My Wildlife", "none");
}

function goBackFromViewSpecies() {
  goBack("container5", "container3", "My Wildlife", "none");
}

function goBackFromAnimalList() {
  goBack("container7", "container5", "My Wildlife", "none");
}

function goBackFromAnimalPage() {
  goBack("container6", "container7", "My Wildlife", "none");
}

function goBackFromEditAnimalPage() {
  goBack("container8", "container6", "My Wildlife", "none");
}

function goBackFromAddLogPage() {
  goBack("container1", "container6", "My Wildlife", "none");
}

function goBackFromEditUser() {
  goBack("container10", "container4", "Settings", "none");
}

// Alerts
function showAlert(msgtype, msg) {
  document.getElementById("alertbox").removeAttribute("hidden");
  document.getElementById("alertmsg").innerHTML = msg;
  window.setTimeout(function () {
    hideAlert();
  }, 10000);

  if (msgtype == "success") {
    let alertStyle = document.getElementById("alertbox");

    alertStyle.classList.remove("text-red-700", "bg-red-100", "border-red-400");
    document
      .getElementById("alertbox")
      .classList.add(
        "text-green-700",
        "bg-green-100",
        "border",
        "border-green-400",
        "rounded"
      );
  }
  if (msgtype == "error") {
    let alertStyle = document.getElementById("alertbox");

    alertStyle.classList.remove(
      "text-green-700",
      "bg-green-100",
      "border-green-400"
    );
    document
      .getElementById("alertbox")
      .classList.add(
        "text-red-700",
        "bg-red-100",
        "border",
        "border-red-400",
        "rounded"
      );
  }
}

function hideAlert(msg) {
  document.getElementById("alertbox").setAttribute("hidden", "hidden");
}

// Get user ID
function getUserID() {
  fetch(
    "ws/ws.php?page=get-user-id", // Must declare path manually as function is not in a form
    {
      credentials: "include",
    }
  ).then(function (headers) {
    headers.text().then(function (body) {
      // Finds user IDs from JSON
      for (let i = 0; i < body.length; i++) {
        let userIDs = "";
        userIDs = body[i].user_id;
        // Finds user_id class name and changes value to user IDs
        let inputs = document.getElementsByClassName("user_id");
        for (i = 0; i < inputs.length; i++) {
          inputs[i].value = userIDs;
        }
      }
    });
  });
}


// Get user details
function getUserDetails() {
  fetch("ws/ws.php?page=view-user-details", {
    credentials: "include",
  }).then(function (headers) {
    headers.json().then(function (body) {
      for (let i = 0; i < body.length; i++) {
        let firstNameLabel = document.getElementById("firstNameLabel");
        let firstNameInput = document.getElementById("firstNameInput");

        let lastNameLabel = document.getElementById("lastNameLabel");
        let lastNameInput = document.getElementById("lastNameInput");

        let emailLabel = document.getElementById("emailLabel");
        let emailInput = document.getElementById("emailInput");

        firstNameLabel.innerHTML = body[i].first_name;
        firstNameInput.value = body[i].first_name;

        lastNameLabel.innerHTML = body[i].last_name;
        lastNameInput.value = body[i].last_name;

        emailLabel.innerHTML = body[i].email;
        emailInput.value = body[i].email;
      }
    });
  });
}

// Get animal ID
function getAnimalID(clicked_id) {
  // Finds animal_id class name and changes value to animal IDs of animal clicked on
  let inputs = document.getElementsByClassName("animal_id");

  for (i = 0; i < inputs.length; i++) {
    inputs[i].value = clicked_id;
  }
}

// Onload show relevant page according to log in status
function checkForLogin() {
  if (localStorage.getItem("loggedIn") === null) {
    document.getElementById("login-div").removeAttribute("hidden");
    document.getElementById("after-login-div").setAttribute("hidden", "hidden");
    document.getElementById("container3").setAttribute("hidden", "hidden");
  } else {
    document.getElementById("container3").removeAttribute("hidden");
    let homeButton = document.getElementById("home");
    homeButton.focus();
  }
}

// Check if admin
function checkIfAdmin(evt) {
  evt.preventDefault();

  fetch("ws/ws.php?page=check-if-admin", {
    credentials: "include",
  }).then(function (headers) {
    if (headers.status === 200) {
      localStorage.setItem("role", "admin");
      showAdminPanel();
    }
  });
}

// Show admin panel to admin role
function showAdminPanel() {
  document.getElementById("root").removeAttribute("hidden");
}

// Validation regexes
function validateText(text) {
  const nameRegex = /^[a-zA-Z !#$%^&*()+=\-';,.{}|":<>?~/]{2,30}$/; // Letters only, min 2, max 30
  return nameRegex.test(text);
}

function validateLongText(text) {
  const nameRegex = /^[a-zA-Z !#$%^&*()+=\-';,.{}|":<>?~/]{2,250}$/; // Letters only, min 2, max 250
  return nameRegex.test(text);
}

function validateEmail(email) {
  const emailRegex = /\S+@\S+\.\S+/; // Email format only
  return emailRegex.test(email);
}

function validatePassword(password) {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Min 8 chars, min 1 capital, min 1 special char, min 1 number
  return passwordRegex.test(password);
}

/*
 *
 * Pages
 *
 */

/* Register/login */

// Register
function register(evt) {
  evt.preventDefault();

  const firstName = document.forms["register-form"]["first-name"].value;
  const lastName = document.forms["register-form"]["last-name"].value;
  const email = document.forms["register-form"]["email"].value;
  const password = document.forms["register-form"]["password"].value;
  const formData = new FormData();

  formData.append(evt.target[0].name, evt.target[0].value);
  formData.append(evt.target[1].name, evt.target[1].value);
  formData.append(evt.target[2].name, evt.target[2].value);
  formData.append(evt.target[3].name, evt.target[3].value);
  fetch(evt.target.action, {
    method: "POST",
    body: formData,
    credentials: "include",
  }).then(function (headers) {
    if (headers.status === 201) {
      document.getElementById("after-login-div").removeAttribute("hidden");
      document.getElementById("login-div").setAttribute("hidden", "hidden");
      showAlert("success", "Welcome!");
      localStorage.setItem("User first name", firstName);
    } else if (validateText(firstName) == false) {
      showAlert("error", "Please enter your first name");
      return false;
    } else if (validateText(lastName) == false) {
      showAlert("error", "Please enter your last name");
      return false;
    } else if (validateEmail(email) == false) {
      showAlert("error", "Please enter a valid email address");
      return false;
    } else if (validatePassword(password) == false) {
      showAlert(
        "error",
        "<strong>Please enter a valid password</strong><ul><li>Minimum 8 characters</li><li>One capital letter</li><li>One number</li><li>One special character</li></ul>"
      );
      return false;
    } else {
      showAlert("error", "Error");
    }
  });
}

// Add icon if validation passes, remove if does not pass
function RegisterValidationIcon() {
  // Register form input values
  const first = document.forms["register-form"]["first-name"].value;
  const last = document.forms["register-form"]["last-name"].value;
  const email = document.forms["register-form"]["email"].value;
  const password = document.forms["register-form"]["password"].value;

  // Register form icon spots
  const first_icon = document.getElementById("first_icon");
  const last_icon = document.getElementById("last_icon");
  const email_icon = document.getElementById("email_icon");
  const password_icon = document.getElementById("password_icon");

  if (validateText(first) == true) {
    first_icon.classList.remove("hidden");
    first_icon.classList.add("flex");
  } else {
    first_icon.classList.add("hidden");
    first_icon.classList.remove("flex");
  }

  if (validateText(last) == true) {
    last_icon.classList.remove("hidden");
    last_icon.classList.add("flex");
  } else {
    last_icon.classList.add("hidden");
    last_icon.classList.remove("flex");
  }

  if (validateEmail(email) == true) {
    email_icon.classList.remove("hidden");
    email_icon.classList.add("flex");
  } else {
    email_icon.classList.add("hidden");
    email_icon.classList.remove("flex");
  }

  if (validatePassword(password) == true) {
    password_icon.classList.remove("hidden");
    password_icon.classList.add("flex");
  } else {
    password_icon.classList.add("hidden");
    password_icon.classList.remove("flex");
  }
}

// Login
function login(evt) {
  evt.preventDefault();

  const email = document.forms["login-form"]["email"].value;
  const password = document.forms["login-form"]["password"].value;
  const formData = new FormData();

  formData.append(evt.target[0].name, evt.target[0].value);
  formData.append(evt.target[1].name, evt.target[1].value);
  fetch(evt.target.action, {
    method: "POST",
    body: formData,
    credentials: "include",
  }).then(function (headers) {
    if (headers.status === 200) {
      document.getElementById("after-login-div").removeAttribute("hidden");
      document.getElementById("login-div").setAttribute("hidden", "hidden");
      let home = document.getElementById("home");
      home.click();
      home.focus();
      showAlert("success", "Welcome!");
      localStorage.setItem("loggedIn", true);
      getUserID();
    } else if (validateEmail(email) == false) {
      showAlert("error", "Please enter a valid email address");
      return false;
    } else if (validatePassword(password) == false) {
      showAlert(
        "error",
        "<strong>Please enter a valid password</strong><ul><li>Minimum 8 characters</li><li>One capital letter</li><li>One number</li><li>One special character</li></ul>"
      );
      return false;
    } else {
      showAlert("error", "Invalid login details");
    }
  });
}

// Click of "sign in" button clicks submit button for form (can't style submit)
function submitLogin() {
  let formButton = document.getElementById("login-form-submit");
  formButton.click();
}

// Click of "register" button clicks submit button for form (can't style submit)
function submitRegister() {
  let formButton = document.getElementById("register-form-submit");
  formButton.click();
}

// Click of "sign up now" takes to register page
function showRegister() {
  document.getElementById("register").removeAttribute("hidden");
  document.getElementById("login-div").setAttribute("hidden", "hidden");
}

// Click of "back to sign in" takes to sign in page
function showLogin() {
  document.getElementById("login-div").removeAttribute("hidden");
  document.getElementById("register").setAttribute("hidden", "hidden");
}

/* Container 1
Add log page */

// Add log
function addLog(evt) {
  evt.preventDefault();

  const title = document.forms["log-form"]["title"].value;
  const text = document.forms["log-form"]["text"].value;
  const formData = new FormData();

  formData.append(evt.target[0].name, evt.target[0].value);
  formData.append(evt.target[1].name, evt.target[1].value);
  formData.append(evt.target[2].name, evt.target[2].value);

  fetch(evt.target.action, {
    method: "POST",
    body: formData,
    credentials: "include",
  }).then(function (headers) {
    if (headers.status === 201) {
      showAlert("success", "Log successfully added");
    } else if (validateText(title) == false) {
      showAlert("error", "Please enter a title for your log");
      return false;
    } else if (validateLongText(text) == false) {
      showAlert("error", "Please enter a body for your log");
      return false;
    } else {
      showAlert(
        "error",
        "There was an error adding your log! Please try again"
      );
    }
  });
}

// Add icon if add log validation passes, remove if does not pass
function LogValidationIcon() {
  // Add log form input values
  const title = document.forms["log-form"]["title"].value;
  const text = document.forms["log-form"]["text"].value;

  // Add log form icon spots
  const title_icon = document.getElementById("title_icon");
  const text_icon = document.getElementById("text_icon");

  if (validateText(title) == true) {
    title_icon.classList.remove("hidden");
    title_icon.classList.add("flex");
  } else {
    title_icon.classList.add("hidden");
    title_icon.classList.remove("flex");
  }

  if (validateLongText(text) == true) {
    text_icon.classList.remove("hidden");
    text_icon.classList.add("flex");
  } else {
    text_icon.classList.add("hidden");
    text_icon.classList.remove("flex");
  }
}

/* Container 2
Add animal page */

// Get species ID
function getSpeciesID_AddAnimal(evt) {
  evt.preventDefault();
  const formData = new FormData();

  formData.append(evt.target[0].name, evt.target[0].value);

  fetch("ws/ws.php?page=get-species-id", {
    method: "POST",
    body: formData,
    credentials: "include",
  }).then(function (headers) {
    headers.json().then(function (body) {
      for (let i = 0; i < body.length; i++) {
        let id = body[i].species_id;
        let input_ = document.getElementById("species_id_input");

        input_.value = id;
      }
    });
  });
}

// View species
function listSpecies_AddAnimal(evt) {
  evt.preventDefault();
  const formData = new FormData();

  formData.append(evt.target[0].name, evt.target[0].value);

  fetch("ws/ws.php?page=view-species", {
    method: "POST",
    body: formData,
    credentials: "include",
  }).then(function (headers) {
    headers.json().then(function (body) {
      for (let i = 0; i < body.length; i++) {
        // Creates list
        const listContainer_test = document.getElementById("species_dropdown");
        const newListItem_test = document.createElement("option");

        // Animal names become buttons, animal IDs are hidden inside for hidden form
        let result_test = "";

        result_test += `
                    <option value='${body[i].species_id}'>
                    ${body[i].name}
                    </option>
                    `;

        newListItem_test.innerHTML = result_test;
        listContainer_test.appendChild(newListItem_test);
      }
    });
  });
}

// Empties list for new selection to not duplicate
function clearAnimalList() {
  document.getElementById("list_of_animals_div").innerHTML = "";
}

// Populates species dropdown
function populateSpeciesDropdown_AnimalAdd() {
  let selection =
    animal_type_id_2.options[animal_type_id_2.selectedIndex].value;
  let input = document.getElementById("animal_type_id_1");
  let button = document.getElementById("animal_type_button_1");

  input.value = selection;
  button.click();
}

// Populate species input for species add
function populateSpeciesInput_SpeciesAdd() {
  let selection =
    animal_type_id_2.options[animal_type_id_2.selectedIndex].value;
  let input = document.getElementById("animal_type_id_4");

  input.value = selection;

  // Show "add species" option button
  document.getElementById("add_species_option").removeAttribute("hidden");
}

// Get species ID for dropdown
function getSpeciesIDforDropdown_Add() {
  let input = document.getElementById("species_id_1");
  let selection =
    species_dropdown.options[species_dropdown.selectedIndex].value;

  input.value = selection;
}

// Click button to send form
function clickButtonTest() {
  let button = document.getElementById("species_id_button_1");
  button.click();
}

// Add animal form
function addAnimal(evt) {
  evt.preventDefault();

  const animal_type =
    animal_type_id_2.options[animal_type_id_2.selectedIndex].text;
  const species = species_dropdown.options[species_dropdown.selectedIndex].text;
  const name = document.forms["add-animal-form"]["name"].value;
  const gender = document.forms["add-animal-form"]["gender"].value;
  const maturity = document.forms["add-animal-form"]["maturity"].value;
  const notes = document.forms["add-animal-form"]["notes"].value;
  const formData = new FormData();

  formData.append(evt.target[0].name, evt.target[0].value);
  formData.append(evt.target[1].name, evt.target[1].value);
  formData.append(evt.target[2].name, evt.target[2].value);
  formData.append(evt.target[3].name, evt.target[3].value);
  formData.append(evt.target[4].name, evt.target[4].value);
  formData.append(evt.target[5].name, evt.target[5].value);
  formData.append(evt.target[6].name, evt.target[6].value);
  formData.append(evt.target[7].name, evt.target[7].value);

  fetch("ws/ws.php?page=add-animal", {
    method: "POST",
    body: formData,
    credentials: "include",
  }).then(function (headers) {
    if (headers.status === 201) {
      showAlert("success", "Animal added");
    } else if (animal_type == "Animal type") {
      showAlert("error", "Please select an animal type");
      return false;
    } else if (species == "Species") {
      showAlert("error", "Please select a species");
      return false;
    } else if (validateText(name) == false) {
      showAlert("error", "Please enter a name for your animal");
      return false;
    } else if (validateText(gender) == false) {
      showAlert("error", "Please enter a gender or select 'unknown'");
      return false;
    } else if (validateText(maturity) == false) {
      showAlert("error", "Please enter maturity level or select 'unknown'");
      return false;
    } else if (validateLongText(notes) == false) {
      showAlert("error", "Please enter a note");
      return false;
    } else {
      showAlert("error", "Error");
    }
  });
}

function uploadImage(evt) {
  evt.preventDefault();
  const formData = new FormData();

  formData.append(evt.target[0].name, evt.target[0].value);

  fetch(evt.target.action, {
    method: "POST",
    body: formData,
    credentials: "include",
  });
}

// Add icon if validation passes, remove if does not pass
function addAnimalValidationIcon() {
  // Add animal form input values
  const name = document.forms["add-animal-form"]["name"].value;
  const gender = document.forms["add-animal-form"]["gender"].value;
  const maturity = document.forms["add-animal-form"]["maturity"].value;
  const notes = document.forms["add-animal-form"]["notes"].value;

  // Add animal form icon spots
  const name_icon = document.getElementById("name_icon");
  const gender_icon = document.getElementById("gender_icon");
  const notes_icon = document.getElementById("notes_icon");
  const maturity_icon = document.getElementById("maturity_icon");

  if (validateText(name) == true) {
    name_icon.classList.remove("hidden");
    name_icon.classList.add("flex");
  } else {
    name_icon.classList.add("hidden");
    name_icon.classList.remove("flex");
  }

  if (validateText(gender) == true) {
    gender_icon.classList.remove("hidden");
    gender_icon.classList.add("flex");
  } else {
    gender_icon.classList.add("hidden");
    gender_icon.classList.remove("flex");
  }

  if (validateText(maturity) == true) {
    maturity_icon.classList.remove("hidden");
    maturity_icon.classList.add("flex");
  } else {
    maturity_icon.classList.add("hidden");
    maturity_icon.classList.remove("flex");
  }

  if (validateLongText(notes) == true) {
    notes_icon.classList.remove("hidden");
    notes_icon.classList.add("flex");
  } else {
    notes_icon.classList.add("hidden");
    notes_icon.classList.remove("flex");
  }
}

/* Container 3
View animals page */

// Loading spinner
function showSpinner() {
  let spinner = document.getElementsByClassName("spinner");

  for (i = 0; i < spinner.length; i++) {
    spinner[i].innerHTML = `<div style="border-top-color:transparent"
    class="w-8 h-8 border-4 border-green-500 border-solid rounded-full animate-spin">`;
  }
}

// Animal type selection
function selectType(clicked) {
  // Clears results of previous click so results do not duplicate
  clearAll();

  // Submits animal type clicked on to hidden HTML form view-my-animals-form
  let input = document.getElementById("animal-type");

  input.value = clicked;
  document.getElementById("type-selected").click();

  // Gets animal type clicked on as label for animal type list page
  let label = document.getElementById("animal_type_label");
  let animal_type = document.getElementById("animal_type_div");

  label.innerHTML = clicked;
  animal_type.innerHTML = clicked;

  // Animal type in edit animal page
  let animal_type2 = document.getElementById("animalTypeLabel");
  animal_type2.innerHTML = clicked;

  // Puts pic of animal type that was clicked, onto container3 and container5
  let iconDiv = document.getElementById("animal_type_icon");
  let iconDiv2 = document.getElementById("animal_type_icon2");

  if (clicked == "Invertebrates") {
    iconDiv.innerHTML = `<img src="./imgs/hermit-crab.png" class="inline" alt="">`;
    iconDiv2.src = "./imgs/hermit-crab.png";
  }
  if (clicked == "Fish") {
    iconDiv.innerHTML = `<img src="./imgs/fish.png" class="inline" alt="">`;
    iconDiv2.src = "./imgs/fish.png";
  }
  if (clicked == "Amphibians") {
    iconDiv.innerHTML = `<img src="./imgs/frog.png" class="inline" alt="">`;
    iconDiv2.src = "./imgs/frog.png";
  }
  if (clicked == "Birds") {
    iconDiv.innerHTML = `<img src="./imgs/parrot.png" class="inline" alt="">`;
    iconDiv2.src = "./imgs/parrot.png";
  }
  if (clicked == "Mammals") {
    iconDiv.innerHTML = `<img src="./imgs/kangaroo.png" class="inline" alt="">`;
    iconDiv2.src = "./imgs/kangaroo.png";
  }
  if (clicked == "Reptiles") {
    iconDiv.innerHTML = `<img src="./imgs/snake.png" class="inline" alt="">`;
    iconDiv2.src = "./imgs/snake.png";
  }
}

/* Container 4
User settings */

// Update reg
function updateReg(evt) {
  evt.preventDefault();
  const formData = new FormData();

  formData.append(evt.target[0].name, evt.target[0].value);
  formData.append(evt.target[1].name, evt.target[1].value);
  formData.append(evt.target[2].name, evt.target[2].value);
  fetch(evt.target.action, {
    method: "POST",
    body: formData,
    credentials: "include",
  });
}

// Delete account
function deleteAccount(evt) {
  evt.preventDefault();

  fetch(evt.target.action, {
    credentials: "include",
  });
}

// Logout
function logout(evt) {
  evt.preventDefault();
  fetch(evt.target.action, {
    credentials: "include",
  }).then(function (headers) {
    if (headers.status === 200) {
      localStorage.removeItem("loggedIn");
      localStorage.removeItem("role");
      document.getElementById("login-div").removeAttribute("hidden");
      document
        .getElementById("after-login-div")
        .setAttribute("hidden", "hidden");
      document.getElementById("container4").setAttribute("hidden", "hidden");
      settingsPage = document.getElementById("container4");
      settingsPage.style.display = "none";
    }
  });
}

function logoutClick() {
  document.getElementById("logout_button").click();
}

/* Container 5
Species list page */

// View all animals
function viewAnimals(evt) {
  evt.preventDefault();
  const formData = new FormData();

  formData.append(evt.target[0].name, evt.target[0].value);

  fetch("ws/ws.php?page=view-animals", {
    method: "POST",
    body: formData,
    credentials: "include",
  }).then(function (headers) {
    if (headers.status === 400) {
      showAlert("error", "No entries found of this animal type");
    }
    headers.json().then(function (body) {
      for (let i = 0; i < body.length; i++) {
        // Creates list
        const listContainer = document.getElementById("my_animals_list");
        const newList = document.createElement("ul");
        const newListItem = document.createElement("li");

        // Animal names become buttons, animal IDs are hidden inside for hidden form
        let result = "";

        result += `<p onclick='showSpinner() & getSpeciesID(this.id) & speciesSpinnerRemove() & showPage("7"); return false'
                    class="border-t border-green-100 mb-2 border-l rounded shadow bg-white dark:bg-gray-400 dark:text-gray-600 border-b border-r px-3 py-4 text-green-500 font-medium w-full"
                    id=${body[i].species_id}
                    >${body[i].name}</p>
                    `;

        newListItem.innerHTML = result;
        newList.appendChild(newListItem);
        listContainer.appendChild(newList);
      }
      let spinner = document.getElementsByClassName("spinner");

      for (i = 0; i < spinner.length; i++) {
        spinner[i].innerHTML = "";
      }
    });
  });
}

// Get species ID from clicked species
function getSpeciesID(clicked_id) {
  let input = document.getElementById("species_id_for_form");
  input.value = clicked_id;
  document.getElementById("submit_speciesID_for_form").click();

  setTimeout(function () {
    document.getElementById("species_list_form").click();
  }, 1000);
}

// Species list loading spinner on setTimout
function speciesSpinnerAdd() {
  document.getElementById("species_entries_div").removeAttribute("hidden");
  document.getElementById("list_of_animals_div").removeAttribute("hidden");
  document.getElementById("speciesSpinner").setAttribute("hidden", "hidden");
}

function speciesSpinnerRemove() {
  window.setTimeout(function () {
    speciesSpinnerAdd();
  }, 2000);
  resetSpeciesSpinner();
}

function resetSpeciesSpinner() {
  document.getElementById("speciesSpinner").removeAttribute("hidden");
  document
    .getElementById("list_of_animals_div")
    .setAttribute("hidden", "hidden");
  document
    .getElementById("species_entries_div")
    .setAttribute("hidden", "hidden");
}

/* Container 6
View individual animals page */

// Individual animal page loading spinner on setTimout
function animalSpinnerAdd() {
  document.getElementById("page6").removeAttribute("hidden");
  document.getElementById("loading_Page").setAttribute("hidden", "hidden");
}

function animalSpinnerRemove() {
  window.setTimeout(function () {
    animalSpinnerAdd();
  }, 1000);
  resetAnimalSpinner();
}

function resetAnimalSpinner() {
  document.getElementById("loading_Page").removeAttribute("hidden");
  document.getElementById("page6").setAttribute("hidden", "hidden");
}

function clearImage() {
  document.getElementById("uploaded_image_edit").innerHTML = "";
}

/* Container 7
Map of species page */

// View one animal
function viewOneAnimal(evt) {
  evt.preventDefault();

  clearLogs();

  const formData = new FormData();

  formData.append(evt.target[0].name, evt.target[0].value);
  fetch("ws/ws.php?page=view-one-animal", {
    method: "POST",
    body: formData,
    credentials: "include",
  }).then(function (headers) {
    headers.json().then(function (body) {
      for (let i = 0; i < body.length; i++) {
        // Animal name on individual animal page
        document.getElementById(
          "animal_nickname_div"
        ).innerHTML = `<span class="font-semibold text-xl">${body[i].nickname}</span>`;

        // Animal name on add log page
        document.getElementById(
          "animal_nickname_div2"
        ).innerHTML = `<span class="text-xl font-semibold mr-7">${body[i].nickname}</span>`;

        // Creates list of logs
        const listContainer = document.getElementById("logs");
        const newList = document.createElement("ul");
        const newListItem = document.createElement("li");

        let dateDiff = humanized_time_span(body[i].date);
        let addLogText = `<p>No logs have been added for this animal</p><br>
        <span onclick="showPage('1'); return false" class="px-4 py-2 text-white dark:bg-green-600 bg-green-400 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">Add log</span>
        `;

        // If no logs exist, insert button to add log. Otherwise, show all logs
        if (body[i].title === null) {
          let result = addLogText;
          newListItem.innerHTML = result;
          newList.appendChild(newListItem);
          listContainer.appendChild(newList);
        } else {
          let result =
          `<div class="pt-4">
            <div class="mb-2">
                <span class="text-gray-600 font-bold">${body[i].title}</span>
                <span class="float-right inset-y-0 right-0 text-gray-400">${dateDiff}</span>
            </div>
            <div class="text-gray-800 border-b border-green-200 pb-3">${body[i].text}</div>
          </div>`;

          newListItem.innerHTML = result;
          newList.appendChild(newListItem);
          listContainer.appendChild(newList);
        }

        // Passes nickname to edit animal page
        passDataForEditAnimalName(body[i].nickname);

        // Puts animal image onto individual animal page
        const imagePath = "http://localhost:8080/ws/uploads/";
        document.getElementById("animal_image").style =
          "background-image: url(" + imagePath + body[i].image + ")";

        // Puts animal image onto edit animal page
        document.getElementById("placeholder_image_edit").style =
          "background-image: url(" + imagePath + body[i].image + ")";

        // Puts animal image onto add log page
        document.getElementById("animal_log_image").style =
          "background-image: url(" + imagePath + body[i].image + ")";
      }
    });
  });
}

function clearLogs() {
  document.getElementById("logs").innerHTML = "";
}

function passDataForEditAnimalName(data) {
  let animalNameLabel = document.getElementById("animalNameLabel");
  let animalNameInput = document.getElementById("animalNameInput");

  animalNameLabel.innerHTML = data;
  animalNameInput.value = data;
}

// View species count
function speciesCount(evt) {
  evt.preventDefault();
  const formData = new FormData();

  formData.append(evt.target[0].name, evt.target[0].value);
  fetch("ws/ws.php?page=species-count", {
    method: "POST",
    body: formData,
    credentials: "include",
  }).then(function (headers) {
    headers.text().then(function (body) {
      // Remove all but numbers from SQL COUNT result
      let entry_count = body.replace(/\D/g, "");
      document.getElementById(
        "species_entries_div"
      ).innerHTML = `Entries: ${entry_count}`;
    });
  });
}

// View all animals per species
function viewAnimalsPerSpecies(evt) {
  evt.preventDefault();
  const formData = new FormData();

  formData.append(evt.target[0].name, evt.target[0].value);
  fetch("ws/ws.php?page=animals-per-species", {
    method: "POST",
    body: formData,
    credentials: "include",
  }).then(function (headers) {
    headers.json().then(function (body) {
      for (let i = 0; i < body.length; i++) {
        // Creates list
        const listContainer = document.getElementById("list_of_animals_div");
        const newList = document.createElement("ul");
        const newListItem = document.createElement("li");

        // Puts json returned in list
        const button = document.getElementById("button");
        const map_button = document.getElementById("map_button");
        let dateDiff = humanized_time_span(body[i].first_seen_date);

        const imagePath = "http://localhost:8080/ws/uploads/";

        result =
        `<div class="grid grid-cols-3 items-center border-r rounded shadow border-l dark:bg-gray-300 bg-white border-t border-gray-300 py-2">
            <div class="px-3 font-bold col-span-2" onclick="getAnimalID(this.id) & button.click() & map_button.click() & animalSpinnerRemove() & showPage('6'); return false" id="${body[i].animal_id}">
                <div class="grid justify-items-center w-20 dark:text-gray-600">
                  <div class="w-20 h-20 my-1 justify-self-center rounded-full shadow bg-cover border-none" style="background-image: url(${imagePath}${body[i].image})"></div>
                  <p>${body[i].nickname}</p>
                </div>
            </div>
            <div class="justify-self-end pr-3 dark:text-gray-600 text-gray-500">${dateDiff}</div>
        </div>`;

        newListItem.innerHTML = result;
        newList.appendChild(newListItem);
        listContainer.appendChild(newList);

        // Info for each animal on individual animal page
        document.getElementById("first_sighting").innerHTML = dateDiff;
        document.getElementById("gender").innerHTML = body[i].gender;
        document.getElementById("maturity").innerHTML = body[i].maturity;
        document.getElementById("notes").innerHTML = body[i].notes;
      }
    });
  });
}

// Get species name from species ID
function getSpeciesFromID(evt) {
  evt.preventDefault();
  const formData = new FormData();

  formData.append(evt.target[0].name, evt.target[0].value);

  fetch(evt.target.action, {
    method: "POST",
    body: formData,
    credentials: "include",
  }).then(function (headers) {
    headers.json().then(function (body) {
      for (let i = 0; i < body.length; i++) {
        let input = document.getElementById("species_for_list");
        input.value = body[i].name;

        let input2 = document.getElementById("species_name_for_count");
        input2.value = body[i].name;

        // Outputs species to species page, individual animal page, add log page, edit animal page
        const species_name = document.getElementById("species_name_div");
        const species_name4 = document.getElementById("species_name_div4");
        const species_name5 = document.getElementById("species_name_div5");
        const species_name6 = document.getElementById("animalSpeciesLabel");

        species_name.innerHTML = `${body[i].name}`;
        species_name4.innerHTML = `${body[i].name}`;
        species_name5.innerHTML = `<span class="mr-7">${body[i].name}</span>`;
        species_name6.innerHTML = `${body[i].name}`;

        setTimeout(function () {
          document.getElementById("species_count_form").click();
        }, 1000);
      }
    });
  });
}

/* Container 8
Edit animal page */

// View animals for edit
function AnimalTypeDropdownforEdit(evt) {
  evt.preventDefault();
  const formData = new FormData();

  formData.append(evt.target[0].name, evt.target[0].value);

  fetch("ws/ws.php?page=view-species", {
    method: "POST",
    body: formData,
    credentials: "include",
  }).then(function (headers) {
    headers.json().then(function (body) {
      for (let i = 0; i < body.length; i++) {
        // Creates dropdown of animals
        const listContainer = document.getElementById("species_dropdown2");
        const newListItem = document.createElement("option");
        let result_test = "";
        result_test += `<option value='${body[i].species_id}'>
                                    ${body[i].name}
                                </option>`;

        newListItem.innerHTML = result_test;
        listContainer.appendChild(newListItem);
      }
    });
  });
}

// Clear all
function clearAll() {
  document.getElementById("logs").innerHTML = "";
  document.getElementById("my_animals_list").innerHTML = "";
  document.getElementById("list_of_animals_div").innerHTML = "";
  document.getElementById(
    "species_id_1"
  ).innerHTML = `<option value="" disabled selected>Species</option>`; // For add animal
  document.getElementById(
    "species_dropdown2"
  ).innerHTML = `<option value="" disabled selected>Species</option>`; // For edit animal
}

function clearOneThing() {
  document.getElementById("list_of_animals_div").innerHTML = "";
}

// Get species ID
function getSpeciesID_EditAnimal(evt) {
  evt.preventDefault();
  const formData = new FormData();

  formData.append(evt.target[0].name, evt.target[0].value);

  fetch("ws/ws.php?page=get-species-id", {
    method: "POST",
    body: formData,
    credentials: "include",
  }).then(function (headers) {
    headers.json().then(function (body) {
      for (let i = 0; i < body.length; i++) {
        let id = body[i].species_id;
        let input_2 = document.getElementById("species_id_input2");
        input_2.value = id;
      }
    });
  });
}

// Populate species dropdown for animal edit
function populateSpeciesDropdown_AnimalEdit() {
  let selection =
    selectionSpecies2.options[selectionSpecies2.selectedIndex].value;
  let input = document.getElementById("animal_type_id_3");
  let button = document.getElementById("animal_type_button_2");

  input.value = selection;
  button.click();
}

// Get species ID for dropdown
function getSpeciesIDforDropdown_Edit() {
  let selection =
    species_dropdown2.options[species_dropdown2.selectedIndex].value;
  let input = document.getElementById("species_id_for_db2");

  input.value = selection;
}

// Click button for hidden form
function clickButton2() {
  let button = document.getElementById("species_id_button");
  button.click();
}

// Edit animal
function editAnimal(evt) {
  evt.preventDefault();
  const formData = new FormData();

  formData.append(evt.target[0].name, evt.target[0].value);
  formData.append(evt.target[1].name, evt.target[1].value);

  fetch(evt.target.action, {
    method: "POST",
    body: formData,
    credentials: "include",
  }).then(function (headers) {
    if (headers.status === 200) {
      showAlert("success", "Changes saved successfully");
    } else {
      showAlert("error", "Error");
    }
  });
}

// Delete animal
function deleteAnimal(evt) {
  evt.preventDefault();
  const formData = new FormData();

  formData.append(evt.target[0].name, evt.target[0].value);

  fetch(evt.target.action, {
    method: "POST",
    body: formData,
    credentials: "include",
  });
}

//
//
// Map
//
//

// Get long and lat for map marker, then display map
function getLocation(evt) {
  evt.preventDefault();
  const formData = new FormData();
  formData.append(evt.target[0].name, evt.target[0].value);
  fetch("ws/ws.php?page=get-coordinates", {
    method: "POST",
    body: formData,
    credentials: "include",
  }).then(function (headers) {
    headers.json().then(function (body) {
      for (let i = 0; i < body.length; i++) {
        let long = body[i].first_seen_long;
        let lat = body[i].first_seen_lat;

        displayMap();
        initMap(long, lat);
      }
    });
  });
}

// Display map (must be included, otherwise will not appear)
function displayMap() {
  document.getElementById("map").style.display = "block";
}

let map, infoWindow;

function initMap(long, lat) {
  let data = { lat: parseFloat(lat), lng: parseFloat(long) };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: data,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: true,
  });

  const marker = new google.maps.Marker({
    position: data,
    map: map,
  });

  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");

  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          sendCoords(pos["lat"], pos["lng"]);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
  clickButton1(locationButton);
}

function clickButton1(button) {
  button.click();
}

function sendCoords(lng, lat) {
  let long_input = document.getElementById("long_input");
  let lat_input = document.getElementById("lat_input");

  long_input.value = lng;
  lat_input.value = lat;
}

function fetchSendCoords(evt) {
  evt.preventDefault();
  const formData = new FormData();

  formData.append(evt.target[0].name, evt.target[0].value);
  formData.append(evt.target[1].name, evt.target[1].value);
  formData.append(evt.target[2].name, evt.target[2].value);

  fetch(evt.target.action, {
    method: "POST",
    body: formData,
    credentials: "include",
  }).then(function (headers) {
    headers.json().then(function (body) {
      console.log(body);
    });
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

//
//
// Date calculator
//
//

// Date calculator, from https://github.com/QuantumCatgirl/js_humanized_time_span
function humanized_time_span(date, ref_date, date_formats, time_units) {
  //Date Formats must be be ordered smallest -> largest and must end in a format with ceiling of null
  date_formats = date_formats || {
    past: [
      { ceiling: 60, text: "$seconds seconds ago" },
      { ceiling: 3600, text: "$minutes minutes ago" },
      { ceiling: 86400, text: "$hours hours ago" },
      { ceiling: 2629744, text: "$days days ago" },
      { ceiling: 31556926, text: "$months months ago" },
      { ceiling: null, text: "$years years ago" },
    ],

    future: [
      { ceiling: 60, text: "in $seconds seconds" },
      { ceiling: 3600, text: "in $minutes minutes" },
      { ceiling: 86400, text: "in $hours hours" },
      { ceiling: 2629744, text: "in $days days" },
      { ceiling: 31556926, text: "in $months months" },
      { ceiling: null, text: "in $years years" },
    ],
  };

  //Time units must be be ordered largest -> smallest
  time_units = time_units || [
    [31556926, "years"],
    [2629744, "months"],
    [86400, "days"],
    [3600, "hours"],
    [60, "minutes"],
    [1, "seconds"],
  ];

  date = new Date(date);
  ref_date = ref_date ? new Date(ref_date) : new Date();
  var seconds_difference = (ref_date - date) / 1000;

  var tense = "past";
  if (seconds_difference < 0) {
    tense = "future";
    seconds_difference = 0 - seconds_difference;
  }

  function get_format() {
    for (var i = 0; i < date_formats[tense].length; i++) {
      if (
        date_formats[tense][i].ceiling == null ||
        seconds_difference <= date_formats[tense][i].ceiling
      ) {
        return date_formats[tense][i];
      }
    }
    return null;
  }

  function get_time_breakdown() {
    var seconds = seconds_difference;
    var breakdown = {};
    for (var i = 0; i < time_units.length; i++) {
      var occurences_of_unit = Math.floor(seconds / time_units[i][0]);
      seconds = seconds - time_units[i][0] * occurences_of_unit;
      breakdown[time_units[i][1]] = occurences_of_unit;
    }
    return breakdown;
  }

  function render_date(date_format) {
    var breakdown = get_time_breakdown();
    var time_ago_text = date_format.text.replace(/\$(\w+)/g, function () {
      return breakdown[arguments[1]];
    });
    return depluralize_time_ago_text(time_ago_text, breakdown);
  }

  function depluralize_time_ago_text(time_ago_text, breakdown) {
    for (var i in breakdown) {
      if (breakdown[i] == 1) {
        var regexp = new RegExp("\\b" + i + "\\b");
        time_ago_text = time_ago_text.replace(regexp, function () {
          return arguments[0].replace(/s\b/g, "");
        });
      }
    }
    return time_ago_text;
  }

  return render_date(get_format());
}

// Get animal details
function getAnimalDetails(evt) {
  evt.preventDefault();
  const formData = new FormData();

  formData.append(evt.target[0].name, evt.target[0].value);

  fetch("ws/ws.php?page=view-animal-details", {
    method: "POST",
    body: formData,
    credentials: "include",
  }).then(function (headers) {
    headers.json().then(function (body) {
      for (let i = 0; i < body.length; i++) {
        // Both the value (when clicking 'edit') and the text before/after edit, receives the name of data
        let animalNameLabel = document.getElementById("animalNameLabel");
        let animalNameInput = document.getElementById("animalNameInput");

        let animalGenderLabel = document.getElementById("animalGenderLabel");
        let animalGenderInput = document.getElementById("animalGenderInput");

        let animalMaturityLabel = document.getElementById(
          "animalMaturityLabel"
        );
        let animalMaturityInput = document.getElementById(
          "animalMaturityInput"
        );

        let animalNotesLabel = document.getElementById("animalNotesLabel");
        let animalNotesInput = document.getElementById("animalNotesInput");

        let animalTypeLabel = document.getElementById("animalTypeLabel");
        animalTypeLabel.innerHTML = body[i].type_name;

        let animalSpeciesLabel = document.getElementById("animalSpeciesLabel");
        animalSpeciesLabel.innerHTML = body[i].name;

        animalNameLabel.innerHTML = body[i].nickname;
        animalNameInput.value = body[i].nickname;

        animalGenderLabel.innerHTML = body[i].gender;
        animalGenderInput.value = body[i].gender;

        animalMaturityLabel.innerHTML = body[i].maturity;
        animalMaturityInput.value = body[i].maturity;

        animalNotesLabel.innerHTML = body[i].notes;
        animalNotesInput.value = body[i].notes;
      }
    });
  });
}

// When clicking 'edit', the necessary items are shown/hidden to make form attractive
function editData(label, editButton, form, saveButton) {
  document.getElementById(label).setAttribute("hidden", "hidden");
  document.getElementById(editButton).setAttribute("hidden", "hidden");
  document.getElementById(form).removeAttribute("hidden");
  document.getElementById(saveButton).removeAttribute("hidden");
}

// After clicking 'save', the necessary items are shown/hidden to make form attractive
function afterEditData(label, editButton, form, saveButton) {
  document.getElementById(label).removeAttribute("hidden");
  document.getElementById(editButton).removeAttribute("hidden");
  document.getElementById(form).setAttribute("hidden", "hidden");
  document.getElementById(saveButton).setAttribute("hidden", "hidden");
}

// Get animal ID for editing
function getAnimalIDForDetails() {
  document.getElementById("get_animalID_for_details").click();
}

// Edit animal name
function doEditAnimalName(evt) {
  evt.preventDefault();
  const formData = new FormData();

  formData.append(evt.target[0].name, evt.target[0].value);
  formData.append(evt.target[1].name, evt.target[1].value);

  fetch(evt.target.action, {
    method: "POST",
    body: formData,
    credentials: "include",
  });
  afterAnimalNameEdit();
}

function afterAnimalNameEdit() {
  afterEditData(
    "animalNameLabel",
    "editAnimalNameButton",
    "editAnimalNameForm",
    "clickAnimalNameButton"
  );
}

function editAnimalName() {
  editData(
    "animalNameLabel",
    "editAnimalNameButton",
    "editAnimalNameForm",
    "clickAnimalNameButton"
  );
}

function editAnimalNameClick() {
  document.getElementById("editAnimalNameSubmit").click();
}

// Edit animal gender
function doEditAnimalGender(evt) {
  evt.preventDefault();
  const formData = new FormData();

  formData.append(evt.target[0].name, evt.target[0].value);
  formData.append(evt.target[1].name, evt.target[1].value);

  fetch(evt.target.action, {
    method: "POST",
    body: formData,
    credentials: "include",
  });
  afterAnimalGenderEdit();
}

function afterAnimalGenderEdit() {
  afterEditData(
    "animalGenderLabel",
    "editAnimalGenderButton",
    "editAnimalGenderForm",
    "clickAnimalGenderButton"
  );
}

function editAnimalGender() {
  editData(
    "animalGenderLabel",
    "editAnimalGenderButton",
    "editAnimalGenderForm",
    "clickAnimalGenderButton"
  );
}

function editAnimalGenderClick() {
  document.getElementById("editAnimalGenderSubmit").click();
}

// Edit animal maturity
function doEditAnimalMaturity(evt) {
  evt.preventDefault();
  const formData = new FormData();

  formData.append(evt.target[0].name, evt.target[0].value);
  formData.append(evt.target[1].name, evt.target[1].value);

  fetch(evt.target.action, {
    method: "POST",
    body: formData,
    credentials: "include",
  });
  afterAnimalMaturityEdit();
}

function afterAnimalMaturityEdit() {
  afterEditData(
    "animalMaturityLabel",
    "editAnimalMaturityButton",
    "editAnimalMaturityForm",
    "clickAnimalMaturityButton"
  );
}

function editAnimalMaturity() {
  editData(
    "animalMaturityLabel",
    "editAnimalMaturityButton",
    "editAnimalMaturityForm",
    "clickAnimalMaturityButton"
  );
}

function editAnimalMaturityClick() {
  document.getElementById("editAnimalMaturitySubmit").click();
}

// Edit animal notes
function doEditAnimalNotes(evt) {
  evt.preventDefault();
  const formData = new FormData();

  formData.append(evt.target[0].name, evt.target[0].value);
  formData.append(evt.target[1].name, evt.target[1].value);

  fetch(evt.target.action, {
    method: "POST",
    body: formData,
    credentials: "include",
  });
  afterAnimalNotesEdit();
}

function afterAnimalNotesEdit() {
  afterEditData(
    "animalNotesLabel",
    "editAnimalNotesButton",
    "editAnimalNotesForm",
    "clickAnimalNotesButton"
  );
}

function editAnimalNotes() {
  editData(
    "animalNotesLabel",
    "editAnimalNotesButton",
    "editAnimalNotesForm",
    "clickAnimalNotesButton"
  );
}

function editAnimalNotesClick() {
  document.getElementById("editAnimalNotesSubmit").click();
}

// Edit animal type
function afterAnimalTypeEdit() {
  document.getElementById("animalTypeLabel").removeAttribute("hidden");
  document.getElementById("editAnimalTypeButton").removeAttribute("hidden");
  document
    .getElementById("editAnimalTypeForm")
    .setAttribute("hidden", "hidden");
}

function editAnimalType() {
  document.getElementById("animalTypeLabel").setAttribute("hidden", "hidden");
  document
    .getElementById("editAnimalTypeButton")
    .setAttribute("hidden", "hidden");
  document.getElementById("editAnimalTypeForm").removeAttribute("hidden");
}

// Edit animal species
function afterAnimalSpeciesEdit() {
  afterEditData(
    "animalSpeciesLabel",
    "editAnimalSpeciesButton",
    "species_dropdown2",
    "clickAnimalSpeciesButton"
  );
  document.getElementById("get_animalID_for_details").click();
}

function editAnimalSpecies() {
  editData(
    "animalSpeciesLabel",
    "editAnimalSpeciesButton",
    "species_dropdown2",
    "clickAnimalSpeciesButton"
  );
}

function editAnimalSpeciesClick() {
  document.getElementById("selectSpeciesButton").click();
  afterAnimalSpeciesEdit();
  afterAnimalTypeEdit();
}

function openSpeciesDropdown() {
  document.getElementById("editAnimalSpeciesButton").click();
}

function addNewSpecies() {
  document.getElementById("add_species_modal").removeAttribute("hidden");
}

// Add species
function addSpecies(evt) {
  evt.preventDefault();

  const formData = new FormData();

  formData.append(evt.target[0].name, evt.target[0].value);
  formData.append(evt.target[1].name, evt.target[1].value);

  fetch(evt.target.action, {
    method: "POST",
    body: formData,
    credentials: "include",
  }).then(function (headers) {
    if (headers.status === 201) {
      closeAddSpeciesModal();
    }
  });
}

// Close 'add species' modal
function closeAddSpeciesModal() {
  document.getElementById("add_species_modal").setAttribute("hidden", "hidden");
}

// Submit 'add species' form after click of button
function clickAddSpeciesSubmit() {
  document.getElementById("add_species_button").click();
}

// View photo
function viewPhoto(evt) {
  evt.preventDefault();
  const formData = new FormData();

  formData.append(evt.target[0].name, evt.target[0].value);

  fetch(evt.target.action, {
    method: "POST",
    body: formData,
    credentials: "include",
  }).then(function (headers) {
    headers.text().then(function (body) {
      document.getElementById("myDiv").src = body;
    });
  });
}

// Post photo
const sample_image = document.getElementsByName("sample_image")[0];

sample_image.addEventListener("change", () => {
  upload_image(sample_image.files[0]);
});

const upload_image = (file) => {
  // Check file type
  if (!["image/jpeg", "image/png"].includes(file.type)) {
    document.getElementById("uploaded_image").innerHTML =
      "<div>Only .jpg and .png image are allowed</div>";

    document.getElementsByName("sample_image")[0].value = "";

    return;
  }

  // Check file size (< 2MB)
  if (file.size > 2 * 1024 * 1024) {
    document.getElementById("uploaded_image").innerHTML =
      "<div>File must be less than 2 MB</div>";

    document.getElementsByName("sample_image")[0].value = "";
    return;
  }

  const form_data = new FormData();

  form_data.append("sample_image", file);

  fetch("ws/ws.php?page=add-image", {
    method: "POST",
    body: form_data,
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (responseData) {
      //   Hide placeholder image
      hidePlaceholder();

      // Show uploaded image
      document.getElementById("uploaded_image").innerHTML =
        '<div class="shadow rounded-full bg-cover h-28 w-28 align-middle border-none" style="background-image: url(' +
        responseData.image_source +
        ')"></div>';
      document.getElementsByName("sample_image")[0].value = "";

      // Change 'add image' button to 'change image'
      document.getElementById("addImageLabel").innerHTML = "Change image";

      // Remove /uploads file path for form to find image ID, to add image ID to new animal
      let text = responseData["image_source"];
      let newValue = text.replace("uploads/", "");

      document.getElementById("image_path").value = newValue;
      document.getElementById("get_image_id_button").click();
    });
};

// Edit animal photo
const sample_image_edit = document.getElementsByName("sample_image_edit")[0];

sample_image_edit.addEventListener("change", () => {
  upload_image_edit(sample_image_edit.files[0]);
});

const upload_image_edit = (file) => {
  // Check file type
  if (!["image/jpeg", "image/png"].includes(file.type)) {
    document.getElementById("uploaded_image_edit").innerHTML =
      "<div>Only .jpg and .png image are allowed</div>";

    document.getElementsByName("sample_image_edit")[0].value = "";

    return;
  }

  // Check file size (< 2MB)
  if (file.size > 2 * 1024 * 1024) {
    document.getElementById("uploaded_image_edit").innerHTML =
      "<div>File must be less than 2 MB</div>";

    document.getElementsByName("sample_image_edit")[0].value = "";
    return;
  }

  const form_data = new FormData();
  form_data.append("sample_image_edit", file);

  fetch("ws/ws.php?page=edit-image", {
    method: "POST",
    body: form_data,
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (responseData) {
      // Hide placeholder image
      editHidePlaceholder();

      // Show uploaded image
      document.getElementById("uploaded_image_edit").innerHTML =
        '<div class="shadow rounded-full bg-cover h-28 w-28 align-middle border-none" style="background-image: url(' +
        responseData.image_source +
        ')"></div>';
      document.getElementsByName("sample_image_edit")[0].value = "";

      // Change 'add image' button to 'change image'
      //   document.getElementById("addImageLabel").innerHTML = "Change image";

      // Remove/uploads file path for form to find image ID, to add image ID to new animal
      let text = responseData["image_source"];
      let newValue = text.replace("uploads/", "");

      document.getElementById("image_path_edit").value = newValue;
      document.getElementById("edit_get_image_id_button").click();
    });
};

function hidePlaceholder() {
  let image = document.getElementById("placeholder_image");
  image.style.display = "none";
}

function editHidePlaceholder() {
  let image = document.getElementById("placeholder_image_edit");
  image.style.display = "none";
}

function addImageClick() {
  document.getElementById("file-input").click();
}

function editImageClick() {
  document.getElementById("file-input_edit").click();
}

function editImageClick() {
  document.getElementById("file-input_edit").click();
}

// Get image ID for image add
function getImageId(evt) {
  evt.preventDefault();
  const formData = new FormData();

  formData.append(evt.target[0].name, evt.target[0].value);

  fetch(evt.target.action, {
    method: "POST",
    body: formData,
    credentials: "include",
  }).then(function (headers) {
    headers.json().then(function (body) {
      for (let i = 0; i < body.length; i++) {
        let input = document.getElementById("image_id");
        input.value = body[i].image_id;
      }
    });
  });
}

// Get image ID for image edit
function editGetImageId(evt) {
  evt.preventDefault();
  const formData = new FormData();

  formData.append(evt.target[0].name, evt.target[0].value);

  fetch(evt.target.action, {
    method: "POST",
    body: formData,
    credentials: "include",
  }).then(function (headers) {
    headers.json().then(function (body) {
      for (let i = 0; i < body.length; i++) {
        let input = document.getElementById("image_id_edit");
        input.value = body[i].image_id;
      }
    });
  });
  setTimeout(function () {
    document.getElementById("edit_image_button").click();
  }, 3000);
}

// Edit animal image
function doEditAnimalImage(evt) {
  evt.preventDefault();

  const formData = new FormData();

  formData.append(evt.target[0].name, evt.target[0].value);
  formData.append(evt.target[1].name, evt.target[1].value);

  fetch(evt.target.action, {
    method: "POST",
    body: formData,
    credentials: "include",
  });
}

/* Container 10
Account details */


// Edit first name
function doEditFirstName(evt) {
  evt.preventDefault();
  const formData = new FormData();

  formData.append(evt.target[0].name, evt.target[0].value);

  fetch(evt.target.action, {
    method: "POST",
    body: formData,
    credentials: "include",
  });
  afterFirstNameEdit();
}

function afterFirstNameEdit() {
  afterEditData(
    "firstNameLabel",
    "editFirstNameButton",
    "editFirstNameForm",
    "clickFirstNameButton"
  );
}

function editFirstName() {
  editData(
    "firstNameLabel",
    "editFirstNameButton",
    "editFirstNameForm",
    "clickFirstNameButton"
  );
}

function editFirstNameClick() {
  document.getElementById("editFirstNameSubmit").click();
  getUserDetails();
}

// Edit last name
function doEditLastName(evt) {
  evt.preventDefault();
  const formData = new FormData();

  formData.append(evt.target[0].name, evt.target[0].value);

  fetch(evt.target.action, {
    method: "POST",
    body: formData,
    credentials: "include",
  });
  afterLastNameEdit();
}

function afterLastNameEdit() {
  afterEditData(
    "lastNameLabel",
    "editLastNameButton",
    "editLastNameForm",
    "clickLastNameButton"
  );
}

function editLastName() {
  editData(
    "lastNameLabel",
    "editLastNameButton",
    "editLastNameForm",
    "clickLastNameButton"
  );
}

function editLastNameClick() {
  document.getElementById("editLastNameSubmit").click();
  getUserDetails();
}

// Edit email
function doEditEmail(evt) {
  evt.preventDefault();
  const formData = new FormData();

  formData.append(evt.target[0].name, evt.target[0].value);

  fetch(evt.target.action, {
    method: "POST",
    body: formData,
    credentials: "include",
  });
  afterEmailEdit();
}

function afterEmailEdit() {
  afterEditData(
    "emailLabel",
    "editEmailButton",
    "editEmailForm",
    "clickEmailButton"
  );
}

function editEmail() {
  editData(
    "emailLabel",
    "editEmailButton",
    "editEmailForm",
    "clickEmailButton"
  );
}

function editEmailClick() {
  document.getElementById("editEmailSubmit").click();
  getUserDetails();
}

// Edit password
function doEditPassword(evt) {
  evt.preventDefault();
  const formData = new FormData();

  formData.append(evt.target[0].name, evt.target[0].value);

  fetch(evt.target.action, {
    method: "POST",
    body: formData,
    credentials: "include",
  });
  afterPasswordEdit();
}

function afterPasswordEdit() {
  afterEditData(
    "passwordLabel",
    "editPasswordButton",
    "editPasswordForm",
    "clickPasswordButton"
  );
}

function editPassword() {
  editData(
    "passwordLabel",
    "editPasswordButton",
    "editPasswordForm",
    "clickPasswordButton"
  );
}

function editPasswordClick() {
  document.getElementById("editPasswordSubmit").click();
  getUserDetails();
}