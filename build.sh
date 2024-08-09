#!/bin/zsh

ls | grep '.js$' | xargs rm

tsc index.ts

node index.js


