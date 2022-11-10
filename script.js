// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    // Constants that represent different groups of characters to include
    const UPPERCASE_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const LOWERCASE_CHARACTERS = "abcdefghijklmnopqrstuvwxyz";
    const NUMBERS = "1234567890";
    const SPECIAL_CHARACTERS = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    const ALL_CHARACTERS =
        UPPERCASE_CHARACTERS +
        LOWERCASE_CHARACTERS +
        NUMBERS +
        SPECIAL_CHARACTERS;

    /*
     *   Create password object to hold information about what type
     *   of password will be generated
     */
    let password = {
        text: "",
        requirements: [],
        length: 8,
    };

    // Ask user to enter length, and parse into integer
    let length = parseInt(
        window.prompt("Enter the length of the password. (8 - 128 characters)")
    );

    // Verify if user's input is valid, if not, ask them to try again and return function.
    if (!length || length > 128 || length < 8) {
        window.alert("You must enter a number 8-128! Try again.");
        return;
    }

    // Set password length to user's input
    password.length = length;

    // Prompt user for different password requirements and store answer in variable
    let includeUppercase = window.confirm(
        "Should the password include an uppercase character?\nOK for Yes, Cancel for No"
    );
    let includeLowercase = window.confirm(
        "Should the password include a lowercase character?\nOK for Yes, Cancel for No"
    );
    let includeNumber = window.confirm(
        "Should the password include a number?\nOK for Yes, Cancel for No"
    );
    let includeSpecial = window.confirm(
        "Should the password include a special character?\nOK for Yes, Cancel for No"
    );

    /*
     * Test against each user's response to determine whether to require certain characters in
     * password and add these requirements to the requirements list
     */
    if (includeUppercase) password.requirements.push("uppercase");
    if (includeLowercase) password.requirements.push("lowercase");
    if (includeNumber) password.requirements.push("number");
    if (includeSpecial) password.requirements.push("special");

    // Add the selected required characters to beginning of the password
    for (let i = 0; i < password.requirements.length; i++) {
        switch (password.requirements[i]) {
            case "uppercase":
                password.text +=
                    UPPERCASE_CHARACTERS[
                        Math.floor(Math.random() * UPPERCASE_CHARACTERS.length)
                    ];
                break;
            case "lowercase":
                password.text +=
                    LOWERCASE_CHARACTERS[
                        Math.floor(Math.random() * LOWERCASE_CHARACTERS.length)
                    ];
                break;
            case "number":
                password.text +=
                    NUMBERS[Math.floor(Math.random() * NUMBERS.length)];
                break;
            case "special":
                password.text +=
                    SPECIAL_CHARACTERS[
                        Math.floor(Math.random() * SPECIAL_CHARACTERS.length)
                    ];
                break;
            default:
                break;
        }
    }

    // Generate a random string of characters
    for (let i = 0; i < password.length - password.requirements.length; i++) {
        password.text +=
            ALL_CHARACTERS[Math.floor(Math.random() * ALL_CHARACTERS.length)];
    }

    return password.text;
}
