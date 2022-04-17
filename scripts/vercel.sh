#!/usr/bin/env bash

yarn copy_manifest && yarn devbuild && yarn copy   && yarn copy_workbox && yarn workbox_inje
