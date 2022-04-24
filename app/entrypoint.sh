#!/usr/bin/env sh

echo "Waiting for API to respond..."
while ! nc -z "$API_HOSTNAME" "$API_PORT"; do
  sleep 1
done
echo "API reachable!"
exec "$@"
