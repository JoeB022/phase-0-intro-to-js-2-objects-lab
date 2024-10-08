// Initialize the employee object with name and streetAddress properties
let employee = {
    name: "Alice",
    streetAddress: "123 Main St"
  };
  
  // 1. updateEmployeeWithKeyAndValue()
  // This function returns a new object with an updated key-value pair, leaving the original object unchanged.
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,  // Spread operator creates a new object by copying the existing properties
      [key]: value  // Adds or updates the new key-value pair
    };
  }
  
  // 2. destructivelyUpdateEmployeeWithKeyAndValue()
  // This function updates the employee object directly (mutating it) and returns the updated object.
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;  // Directly updates the employee object
    return employee;  // Returns the updated object
  }
  
  // 3. deleteFromEmployeeByKey()
  // This function returns a new object with the specified key deleted, leaving the original object unchanged.
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };  // Creates a new object by copying the original
    delete newEmployee[key];  // Deletes the specified key from the new object
    return newEmployee;  // Returns the new object without the deleted key
  }
  
  // 4. destructivelyDeleteFromEmployeeByKey()
  // This function directly deletes the specified key from the original employee object (mutating it) and returns the modified object.
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];  // Directly deletes the key from the original object
    return employee;  // Returns the modified object
  }
  
  module.exports = {
    employee,
    updateEmployeeWithKeyAndValue,
    destructivelyUpdateEmployeeWithKeyAndValue,
    deleteFromEmployeeByKey,
    destructivelyDeleteFromEmployeeByKey
  };
  