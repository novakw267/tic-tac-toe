curl "${API}${API_PATH}${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "authorization: Token token=${TOKEN}" \
  --data '{
    "passwords": {
      "old: "'${OLD}'",
      "new": "'${NEW}'"
    }
  }'

echo
