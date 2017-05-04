/*
Instructions 

You need to write regex that will validate a password to make sure it meets the following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a number
Valid passwords will only be alphanumeric characters.

*/

validate('123ABc');

function validate(password) {
  return /^(?=[\w]{6,})(?=[\w]*[a-z]+[\w]*)(?=[\w]*[A-Z]+[\w]*)(?=[\w]*[\d]+[\w]*)\w*$/.test(password); 
}
