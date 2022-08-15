/*
Regrex Password Validation 5kyu

You need to write regex that will validate a password to make sure it meets the following criteria:

    At least six characters long
    contains a lowercase letter
    contains an uppercase letter
    contains a number

Valid passwords will only be alphanumeric characters.
*/

/*  Strategy: This is great practice for password validation software. Regrex
                is a powerful tool and this is a simple use case. For this excersize
                I will be using MDN's recommended tool to assist with regrex validations.
                https://regexr.com/
*/

function validate(password) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[A-Za-z0-9]{6,}$/gm.test(password);
  }