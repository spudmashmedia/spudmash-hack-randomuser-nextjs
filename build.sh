#---------------------------------------------------------------------------------------------
#  Copyright (c) Spudmash Media Pty Ltd
#  Licensed under the MIT License. See License.txt in the project root for license information.
#--------------------------------------------------------------------------------------------

#!/usr/bin/sh

name="rnduser-nextjs"
internal_port=80
public_port=3001

docker build -t $name .
docker run -p $public_port:$internal_port -d $name
