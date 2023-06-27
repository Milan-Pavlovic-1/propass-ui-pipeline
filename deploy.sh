#!/bin/bash
cd /home/ec2-user/propass
git pull origin master
npm install
sudo systemctl restart next.js-ui.service