_PWD=${PWD}

# Dec:
function git_command() {
  "git add . && git commit -m "⏰ This is an crontab automatic push" && git push && echo 🎉"
}

tw5() {
  cd ${_PWD}
  git_command
}

main() {
  tw5
}

main
