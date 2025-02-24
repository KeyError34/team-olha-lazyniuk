https://graphql.org/graphql-js/running-an-express-graphql-server/

npm install express graphql-http graphql --save
npm install --save ruru


{
  hello
}


curl -X POST http://localhost:4000/graphql \
  -H "Content-Type: application/json" \
  -d '{"query": "{ hello }"}'
