FROM maven:3.9-eclipse-temurin-17 AS build
WORKDIR /src
COPY pom.xml .
RUN mvn -q dependency:go-offline
COPY src ./src
RUN mvn -q -DskipTests package

FROM eclipse-temurin:17-jre
WORKDIR /app
COPY --from=build /src/target/entitle-backend.jar app.jar
ENV SPRING_PROFILES_ACTIVE=mysql
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
