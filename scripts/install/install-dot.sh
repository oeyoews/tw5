#!/usr/bin/env bash

#UserLocation=0
#read -r -p "Are you sure to install dotfiles? 🍻 [y|N] " response
#if [[ $response =~ (y|yes|Y) ]];then
  #UserLocation=1
  #print("Installing ... 💉")
#fi

function isCmdExist() {
	local cmd="$1"

	which "$cmd" >/dev/null 2>&1
	if [ $? -ne 0 ]; then
    echo "Installing $cmd"
    sh -c "$(curl -fL chezmoi.io/get)"
		#return 0
	fi
}


# TODO: add remove old or bk odl chezmoi and acquire user if to bk or delete
function init() {
  chezmoi init  --depth 1 https://gitlab.com/oeyoews/dotfiles.git
}

function apply() {
  chezmoi apply
}
#chezmoi update -R

main() {
  isCmdExist chezmoii
  init
  apply
}

main
