docker-compose up 
docker network ls
docker network rm neto
docker network create neto

docker exec -it mongodb mongosh  
show dbs
use citiesdev
show collections
db.cities.find().pretty()

docker stop mongodb
docker rm mongodb

docker volume ls
docker volume rm <volume_name>
docker volume rm hyrance-main_mongo-data
docker-compose up --build
docker logs mongodb

# backend Doclerfile
CMD ["npm", "run", "dev"]
docker build -t hyrance-backend .
docker network create neto
docker run --name back-container --network=neto -d -p 5000:3000 hyrance-backend