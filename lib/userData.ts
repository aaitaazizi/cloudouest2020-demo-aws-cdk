export const getUserData = () => {
    return `#!/bin/bash
yum -y install httpd
cat >> /var/www/html/index.html << 'EOF'
<h1>Welcome Cloud Ouest 2020</h1>
<p><img src="https://res.cloudinary.com/ideation/image/upload/w_1920,c_fit,q_auto,f_auto,dpr_auto/n4qy14nlijouqmbz4iky" /></p>
EOF
service httpd start`
}