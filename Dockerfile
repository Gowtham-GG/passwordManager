FROM openjdk:22
EXPOSE 8080
ADD target/onepass-build.jar onepass-build.jar
ENTRYPOINT ["java", "-jar", "/onepass-build.jar"]