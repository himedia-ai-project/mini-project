FROM mysql

COPY ./food.sql /docker-entrypoint-initdb.d
ENV MYSQL_ROOT_PASSWORD=1234
ENV MYSQL_DATABASE=food
ENV MYSQL_HOST=%
