https://graphql.org/graphql-js/running-an-express-graphql-server/

npm install express graphql-http graphql --save
npm install --save ruru

# Query Examples
# Query to get a greeting
query {
  hello
}

# Query to get a user by ID
query {
  getUser(id: "1") {
    id
    name
    email
  }
}

# Query to get a list of all users
query {
  getUsers {
    id
    name
    email
  }
}

# Mutation Examples
# Mutation to create a user
mutation {
  createUser(name: "Alice", email: "alice@example.com") {
    id
    name
    email
  }
}

# Mutation to update a user
mutation {
  updateUser(id: "1", name: "Johnathan", email: "johnathan@example.com") {
    id
    name
    email
  }
}

# Mutation to delete a user
mutation {
  deleteUser(id: "2") {
    id
    name
    email
  }
}

# curl

curl -X POST http://localhost:4000/graphql \
  -H "Content-Type: application/json" \
  -d '{"query": "{ hello }"}'
