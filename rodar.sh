docker-compose up -d influxdb grafana
docker-compose run k6 run scripts/1-smoke.js
# docker-compose run k6 run scripts/2-load.js
# docker-compose run k6 run scripts/3-stress.js
# docker-compose run k6 run scripts/4-spike.js
# docker-compose run k6 run scripts/5-soak.js