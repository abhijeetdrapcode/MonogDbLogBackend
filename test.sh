#!/bin/bash

for ((i=1; i<=5; i++))
do
    ab -n 50 -c 1 http://localhost/api
    sleep 1
done
