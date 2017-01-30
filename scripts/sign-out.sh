curl "${API}${API_PATH}/$ID" \
  --include \
  --request DELETE
  --header "Authorization: Token token=${TOKEN}"

  echo
