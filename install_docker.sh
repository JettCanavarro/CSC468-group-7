 1.24 KB
 

#!/bin/bash

set -x

apt-get update
apt-get install -y apt-transport-https ca-certificates curl gnupg-agent software-properties-common tmux sudo apt gnupg2 pass

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
  
apt-get update
apt-get install -y docker-ce docker-ce-cli containerd.io
apt-get install -y httping
apt-get install -y jq

# the username needs to be changed
while IFS= read -r line; do
  usermod -aG docker $line
  usermod -s /bin/bash $line
done < <( ls -l /users | grep 4096 | cut -d' ' -f3 )

cp /local/repository/docker_config/daemon.json /etc/docker/daemon.json
systemctl daemon-reload
systemctl restart docker

 VERSION=$(curl --silent https://api.github.com/repos/docker/compose/releases/latest | grep -Po '"tag_name": "\K.*\d')
 echo $VERSION
 DESTINATION=/usr/bin/docker-compose
 curl -L https://github.com/docker/compose/releases/download/${VERSION}/docker-compose-$(uname -s)-$(uname -m) -o $DESTINATION
 chmod 755 $DESTINATION
