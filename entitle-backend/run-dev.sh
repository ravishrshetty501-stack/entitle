#!/usr/bin/env bash
# Preview helper: rebuilds and (re)starts the Spring Boot backend on :8095.
set -e
export JAVA_HOME=/root/tools/jdk17
export PATH="$JAVA_HOME/bin:/root/tools/maven/bin:$PATH"
cd "$(dirname "$0")"
if [ "$1" = "rebuild" ] || [ ! -f target/entitle-backend.jar ]; then
  mvn -q -DskipTests package
fi
pkill -f "entitle-backend.jar" || true
sleep 1
nohup java -Xmx512m -jar target/entitle-backend.jar >> /tmp/entitle-java.log 2>&1 &
echo "started"
