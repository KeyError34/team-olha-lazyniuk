mutation {
  createUser(
    userName: "john_doe"
    email: "john@example.com"
    firstName: "John"
    lastName: "Doe"
    password: "securepassword"
    role: "user"
  ) {
    id
    userName
    email
  }
}


query {
  getUser(id: "67d5d4d305374c14326b9f61") {
    id
    userName
    email
  }
}