FROM mysql/mysql-server:latest
#ight bring error if llatest version is different

# Set the root password for MySQL
ENV MYSQL_ROOT_PASSWORD=password

# Create a database and user
ENV MYSQL_DATABASE=database
ENV MYSQL_USER=user
ENV MYSQL_PASSWORD=123

# Copy the custom SQL script into the container
COPY ./init.sql /docker-entrypoint-initdb.d/
