curl "${API}${API_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'${EMAIL}'",
      "password": "'${PASSWORD}'"
    }
  }'

echo
