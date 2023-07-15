const employees = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" }
];

function PrintDeveloperbyMap() {
  const developers = employees.map(employee => {
    if (employee.profession === "developer") {
      return employee;
    }
  });

  console.log(developers);
}

function PrintDeveloperbyForEach() {
  employees.forEach(employee => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function addData() {
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  employees.push(newEmployee);

  console.log(employees);
}

function removeAdmin() {
  const filteredEmployees = employees.filter(employee => employee.profession !== "admin");
  employees = filteredEmployees;

  console.log(employees);
}

function ConcatinateArray() {
  const newArray = [
    { id: 5, name: "michael", age: "22", profession: "developer" },
    { id: 6, name: "emma", age: "21", profession: "admin" },
    { id: 7, name: "alex", age: "19", profession: "developer" }
  ];

  const concatenatedArray = employees.concat(newArray);

  console.log(concatenatedArray);
}
