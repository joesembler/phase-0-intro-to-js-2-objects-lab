// Joe Sembler
// Flatiron School
// Phase 0: "Intro to JavaScript 2 - Objects Lab"




// employee Object

const employee = {
    name: "Joe",
    streetAddress: "160 4th Ave"
};


// Creates copy of employee object 
// and updates the copy, leaving the original unchanged

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee };
  
    newEmployee[key] = value;
  
    return newEmployee;
  }
  

// Updates original employee object

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]= value;
    return employee;
}


// Creates copy of employee object and updates a key from the copy

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}


// Updates original employee object

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}
