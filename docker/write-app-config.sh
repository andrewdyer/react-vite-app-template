#!/bin/sh
# Writes the container's VITE_ environment variables to config.js, which index.html loads before
# the app, so one image can run in every environment. The nginx image runs this script from
# /docker-entrypoint.d/ before nginx starts.
set -eu

CONFIG_FILE="${APP_CONFIG_FILE:-/usr/share/nginx/html/config.js}"

# Values are escaped for a JavaScript string. Variables whose values contain newlines are not
# supported, because env prints one variable per line.
env | awk '
  BEGIN { printf "window.__APP_CONFIG__ = {" }
  /^VITE_[A-Za-z0-9_]*=/ {
    name = substr($0, 1, index($0, "=") - 1)
    value = substr($0, index($0, "=") + 1)
    gsub(/\\/, "\\\\", value)
    gsub(/"/, "\\\"", value)
    gsub(/</, "\\u003c", value)
    printf "%s\"%s\": \"%s\"", (count++ ? ", " : ""), name, value
  }
  END { print "};" }
' > "$CONFIG_FILE"

echo "write-app-config: wrote $(grep -o '"VITE_[A-Za-z0-9_]*"' "$CONFIG_FILE" | wc -l | tr -d ' ') variable(s) to $CONFIG_FILE"
