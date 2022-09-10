"use strict";(self.webpackChunkvuepress_docs=self.webpackChunkvuepress_docs||[]).push([[582],{5026:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i={key:"v-1d9dc21c",path:"/deploy/aws/docker-swarm-ec2/",title:"Docker Swarm on EC2",lang:"en-US",frontmatter:{prev:"/deploy/digital-ocean",head:[["meta",{name:"description",content:"How to deploy a Django application on AWS using Docker Swarm and EC2"}],["link",{rel:"canonical",href:"https://briancaffey.github.io/django-step-by-step/deploy/aws/docker-swarm-ec2/"}]]},excerpt:"",headers:[{level:2,title:"Pros and Cons of this Application Architecture",slug:"pros-and-cons-of-this-application-architecture",children:[{level:3,title:"Pros",slug:"pros",children:[]},{level:3,title:"Cons",slug:"cons",children:[]}]},{level:2,title:"Diagram",slug:"diagram",children:[{level:3,title:"Main infrastructure and application components",slug:"main-infrastructure-and-application-components",children:[]},{level:3,title:"Deployment Pipelines",slug:"deployment-pipelines",children:[]},{level:3,title:"django-cdk project workflow",slug:"django-cdk-project-workflow",children:[]}]},{level:2,title:"Prerequisites for using this construct",slug:"prerequisites-for-using-this-construct",children:[]},{level:2,title:"Preparing for Deployment",slug:"preparing-for-deployment",children:[{level:3,title:"Creating a GitHub Environment",slug:"creating-a-github-environment",children:[]},{level:3,title:"Adding Environment Secrets to GitHub for use in GitHub Actions",slug:"adding-environment-secrets-to-github-for-use-in-github-actions",children:[]},{level:3,title:"Adding Repository secrets to our GitHub project",slug:"adding-repository-secrets-to-our-github-project",children:[]}]},{level:2,title:"Deploying the Application",slug:"deploying-the-application",children:[]},{level:2,title:"Updating the application",slug:"updating-the-application",children:[]},{level:2,title:"Debugging and deploying from your local machine",slug:"debugging-and-deploying-from-your-local-machine",children:[]},{level:2,title:"12 Factor App",slug:"_12-factor-app",children:[{level:3,title:"I. Codebase - One codebase tracked in revision control, many deploys",slug:"i-codebase-one-codebase-tracked-in-revision-control-many-deploys",children:[]}]},{level:2,title:"Terminology disambiguation",slug:"terminology-disambiguation",children:[]},{level:2,title:"Discussion",slug:"discussion",children:[{level:3,title:"Combined and dynamic infra and app deployment",slug:"combined-and-dynamic-infra-and-app-deployment",children:[]},{level:3,title:"Speeding up feedback loop",slug:"speeding-up-feedback-loop",children:[]},{level:3,title:"Library design",slug:"library-design",children:[]}]},{level:2,title:"Next steps",slug:"next-steps",children:[{level:3,title:"Using the DockerEc2 construct for testing",slug:"using-the-dockerec2-construct-for-testing",children:[]},{level:3,title:"Additional work",slug:"additional-work",children:[]}]}],filePathRelative:"deploy/aws/docker-swarm-ec2/README.md",git:{updatedTime:1662842368e3,contributors:[]}}},8190:(e,t,o)=>{o.r(t),o.d(t,{default:()=>O});var i=o(6252);const n=(0,i.Wm)("h1",{id:"docker-swarm-on-ec2",tabindex:"-1"},[(0,i.Wm)("a",{class:"header-anchor",href:"#docker-swarm-on-ec2","aria-hidden":"true"},"#"),(0,i.Uk)(" Docker Swarm on EC2")],-1),a=(0,i.Wm)("p",null,"This article will describe a deployment scenario for Django applications that uses a single-node docker swarm cluster running on an EC2 instance. Here's an outline of the areas that will discussed:",-1),s={class:"table-of-contents"},r=(0,i.Uk)("Pros and Cons of this Application Architecture"),c=(0,i.Uk)("Pros"),d=(0,i.Uk)("Cons"),l=(0,i.Uk)("Diagram"),p=(0,i.Uk)("Main infrastructure and application components"),u=(0,i.Uk)("Deployment Pipelines"),h=(0,i.Uk)("django-cdk project workflow"),m=(0,i.Uk)("Prerequisites for using this construct"),g=(0,i.Uk)("Preparing for Deployment"),f=(0,i.Uk)("Creating a GitHub Environment"),y=(0,i.Uk)("Adding Environment Secrets to GitHub for use in GitHub Actions"),b=(0,i.Uk)("Adding Repository secrets to our GitHub project"),k=(0,i.Uk)("Deploying the Application"),w=(0,i.Uk)("Updating the application"),v=(0,i.Uk)("Debugging and deploying from your local machine"),C=(0,i.Uk)("12 Factor App"),E=(0,i.Uk)("I. Codebase - One codebase tracked in revision control, many deploys"),T=(0,i.Uk)("Terminology disambiguation"),D=(0,i.Uk)("Discussion"),A=(0,i.Uk)("Combined and dynamic infra and app deployment"),W=(0,i.Uk)("Speeding up feedback loop"),S=(0,i.Uk)("Library design"),j=(0,i.Uk)("Next steps"),x=(0,i.Uk)("Using the DockerEc2 construct for testing"),I=(0,i.Uk)("Additional work"),U=(0,i.uE)('<h2 id="pros-and-cons-of-this-application-architecture" tabindex="-1"><a class="header-anchor" href="#pros-and-cons-of-this-application-architecture" aria-hidden="true">#</a> Pros and Cons of this Application Architecture</h2><h3 id="pros" tabindex="-1"><a class="header-anchor" href="#pros" aria-hidden="true">#</a> Pros</h3><ul><li><strong>Inexpensive</strong> - This construct keeps costs low by using a single-node Docker swarm cluster in a public subnet and Elastic File Sytem (EFS) for persistent storage rather than managed database services. Other expensive, always-on managed AWS services such as Application Load Balancers and NAT Gateways are not used to save costs</li><li><strong>Simple deployments</strong> - the infrastructure, configuration and application processes are all deployed with a single command (<code>make docker-ec2-deploy</code>)</li><li><strong>Easy to use</strong> - This construct includes the Portainer container management tool which makes it easy to view logs, open shells, scale processes and more through a web interface. The construct provides a number of other conveniences, such as outputting commonly used commands and values such as the command to access the EC2 instance over SSH and the URL to access the web frontend and other URLs for utility services such as Portainer</li><li><strong>Open source</strong> - the tools used to develop this construct are all open source. Other constructs in the <code>django-cdk</code> construct library use tools that are not open source (such as Elastic Container Service)</li><li><strong>Thoroughly documented</strong> - the construct includes lots of code comments and in-depth documentation that explains why certain architectural decisions were made and what the tradeoffs are when compared to other options</li></ul><h3 id="cons" tabindex="-1"><a class="header-anchor" href="#cons" aria-hidden="true">#</a> Cons</h3><ul><li><strong>Less secure</strong> - applications run in public subnets that are directly exposed to the internet</li><li><strong>Vertically scalable</strong> (not horizontally scalable) - the only way to easily scale up is to use a larger/optimized EC2 instance type. Docker swarm is designed to work with multiple hosts, but this deployment scenario is limited in that it can only use a single node cluster. If you need to add additional hosts, you will need to set these up manually</li><li><strong>Opinionated</strong> - This construct is opinionated and has a simple interface that does not expose many different options for how the infrastructure is deployed</li><li><strong>Not Production-ready</strong> - This construct is not recommended for critical production workloads. It is ideal for running side projects and perhaps staging environments that are not heavily used. Running databases on EFS is possible but generally not recommended. It is better (but more expensive) to use a managed database service such as RDS or Aurora for production environments</li></ul><h2 id="diagram" tabindex="-1"><a class="header-anchor" href="#diagram" aria-hidden="true">#</a> Diagram</h2>',6),H=(0,i.uE)('<h3 id="main-infrastructure-and-application-components" tabindex="-1"><a class="header-anchor" href="#main-infrastructure-and-application-components" aria-hidden="true">#</a> Main infrastructure and application components</h3><p>A. For development I use a 2020 MacBook Pro M1 machine or WSL 2 on Windows 10. Using M1 requires indicating which <code>--platform</code> to use (<code>linux/amd64</code>) since it will try to use a different platform by default for some images. Your computer can be used to connect to the application over SSH, or through the public internet via a DNS record that points to the IP address of the EC2 instance running the docker swarm application.</p><p>B. This is GitHub repository that contains the application code for the Django + Vue.js reference application called μblog. It is configured to use GitHub Actions for three purposes: running code quality check and units tests, deploying and updating the infrastructure used by the μblog application, and for deploying updates to the μblog application itself.</p><p>C. AWS Cloud Development Kit (CDK) is a tool that will deploy all of the infrastructure outlined in this diagram to an AWS account. The AWS account credentials are configured in the GitHub repository. The CDK application creates a CloudFormation stack using a construct from the <code>django-cdk</code> construct library (see steps a, b and c below).</p><p>D. The first part of our cloud infrastructure defined in the CDK construct is a VPC.</p><p>E. The VPC is configured to have only one public subnet and no NAT Gateways are used (which are provisioned by default when using the VPC construct from CDK).</p><p>F. Elastic File System is used to provide persistent storage for the application including database data, redis data saved to disk and certificate data used for securing traffic to the application.</p><p>G. The S3 bucket is used to store both static files and media files for the Django application.</p><p>H. Elastic Container Registry (ECR) is used to store the container images for the application. The application uses a backend image for running Django and celery, as well as a frontend image that uses nginx that serves the static files for our frontend Vue.js application.</p><p>I. This is the security group that is used to control access to the EC2 instance that the application runs on. CDK makes it very easy to configure the security group so that all parts of the application can communicate with each other securely.</p><p>J. The EC2 instance that runs the application. The instance is configured to use Amazon Linux 2 and it is configured to install docker and run our application on startup.</p><p>K. The Route 53 record that points to the public IP address of the EC2 instance. This is what allows the application to be accessed from the internet via an address such as <code>https://app.example.com</code>.</p><p>L. docker swarm is used as a container orchestration system. When the EC2 instance starts up it will enable swarm mode and the EC2 instance because the leader node of a single-node swarm cluster that runs our application. Since this infrastructure setup is mainly used for testing and small-scale projects on a small budget on AWS, other nodes are not joined to the swarm node, but this would be possible by changing the CDK construct to use additional EC2 instances that join the swarm cluster as worker nodes on startup.</p><p>M. <code>stack.yml</code> is the main stack file that defines the components of the application. It uses the frontend and backend images that we build and push to ECR, and it also defines the networks and secrets that the services in the application require.</p><p>N. <code>traefik-public</code> is an external network, meaning that we create it outside of the context of the <code>stack.yml</code> file and reference it in the <code>stack.yml</code>.</p><p>O. Traefik is the &quot;front desk&quot; of the application and it is the first service that traffic to our application is routed through. Traefik encrypts application traffic using Let&#39;s Encrypt. It routes traffic to different services based on the hostname of the incoming request.</p><p>P. Portainer is a container management tool that is used to view logs, open shells, scale processes and more through a web interface. It is a very handy tool for debugging applications that are running in docker containers and it also works very well with docker swarm.</p><p>Q. This is the <code>main</code> network that most of the application services communicate over.</p><p>R. All application traffic is routed to nginx which does path-based routing.</p><p>S. All requests that do not start with <code>/api</code>, <code>/admin</code> or <code>/graphql</code> will be served by the index.js file of the static Vue.js application.</p><p>T. This is the Django application that handles the other requests that are not served by the Vue.js application.</p><p>U. gunicorn is the webserver that runs the Django WSGI application and it is the process that runs the application.</p><p>V. Postgres is the relational database that stores the data for the application.</p><p>W. This is a celery worker that processes asynchronous tasks that the Django web application has sent to the celery broker.</p><p>X. This is the Redis cache that serves as the celery broker and also a caching layer for the Django application.</p><p>Y. This is the CloudFormation service that the application calls when deploying the application through GitHub Actions. AWS CLI calls to the CloudFormation service are used to collect information from stack outputs that are configured in the CDK construct. These output values include things such as the ECR repository name or the S3 bucket name.</p><p>Z. These are links to GitHub repositories for the infrastructure and application code depicted in this diagram.</p><h3 id="deployment-pipelines" tabindex="-1"><a class="header-anchor" href="#deployment-pipelines" aria-hidden="true">#</a> Deployment Pipelines</h3><ol><li><p>When you push a git tag to GitHub with the pattern <code>v*</code>, a GitHub Actions pipeline will be triggered. This pipeline is defined in <code>.github/workflows/deploy.yml</code> and it either deploys the application infrastructure with CDK, or it builds and pushes new container images to existing ECR repositories and updates the docker stack with <code>docker swarm update</code> in an existing CloudFormation stack.</p></li><li><p>If the condition for deploying with CDK is met, then the CDK stack is either created or updated with <code>cdk deploy</code>.</p></li><li><p>CDK creates or updates the stack using the <code>STACK_NAME</code> variable that is set in environment secrets.</p></li><li><p>The <code>DockerEc2</code> CDK construct provisions an EC2 instance that includes cloud init scripts that creates a docker swarm cluster and deploys our docker stack application.</p></li><li><p>If the CDK stack already exists, then the GitHub Actions deploy workflow only updates the <em>docker swarm stack</em> and does not update the <em>CloudFormation stack</em> created by CDK. In order to set the correct environment variables that are required by the <code>docker stack deploy</code> (to provide environment variables to the <code>stack.yml</code> file), the GitHub Action workflow includes a step that calls to <code>aws cloudformation describe-stacks --stack-name $STACK_NAME</code> and sets environment variables based on the stack outputs. The following values are collected from the stack outputs:</p></li></ol><ul><li><strong><code>Ec2PublicIpAddress</code></strong></li><li><strong><code>BackendRepositoryUri</code></strong></li><li><strong><code>FrontendRepositoryUri</code></strong></li><li><strong><code>ApplicationHostName</code></strong></li><li><strong><code>PortainerHostName</code></strong></li></ul><ol start="6"><li><p>If the stack exists, the GitHub Action workflow will update the docker stack with the new container images for the frontend and backend.</p></li><li><p>In addition to using GitHub Actions to deploy the infrastructure, you can also deploy the infrastructure with <code>make docker-ec2-deploy</code>. The same Makefile command is used in the GitHub Action workflow.</p></li><li><p>For convenience, the the <code>cdk deploy</code> command outputs CloudFormation stack outputs to the console. These outputs provide full commands that can be used to SSH to the EC2 machine or run Django management commands in a running container. The CloudFormation Outputs are also used when updating the application in the GitHub Actions workflow.</p></li></ol><h3 id="django-cdk-project-workflow" tabindex="-1"><a class="header-anchor" href="#django-cdk-project-workflow" aria-hidden="true">#</a> <code>django-cdk</code> project workflow</h3><p>a. <code>projen</code> is a project configuration tool that is used to generate and update different types of software projects including CDK construct libraries written in TypeScript.</p><p>b. The <code>django-cdk</code> repo is configured to use GitHub Actions to publish the CDK construct library to NPM.</p><p>c. The npm package is used as a dependency in the other GitHub repository that contains the application code for <code>μblog</code> called <code>django-step-by-step</code>.</p><h2 id="prerequisites-for-using-this-construct" tabindex="-1"><a class="header-anchor" href="#prerequisites-for-using-this-construct" aria-hidden="true">#</a> Prerequisites for using this construct</h2><p>This construct tries to automate as much of the cloud infrastructure as possible, but some parts of your cloud infrastructure can&#39;t be automated through IaC. In order to use this construct, you will need to set up the following manually:</p><ul><li>AWS account with user that has Administrator permissions</li><li>aws-cli installed locally configured with the credentials of the administrator user mentioned above (only if you want to deploy locally)</li><li>a GitHub account and repository configured with the secrets (see below)</li><li>A domain name purchased through Route 53 (you can use an external domain name, but that won&#39;t be covered here)</li><li>A <code>key-pair</code> that you have stored locally in your <code>~/.ssh</code> folder that has appropriate permissions (again, you only need this if you want to deploy locally or connect to the EC2 instance and docker containers from your local machine)</li></ul><h2 id="preparing-for-deployment" tabindex="-1"><a class="header-anchor" href="#preparing-for-deployment" aria-hidden="true">#</a> Preparing for Deployment</h2><h3 id="creating-a-github-environment" tabindex="-1"><a class="header-anchor" href="#creating-a-github-environment" aria-hidden="true">#</a> Creating a GitHub Environment</h3><p>We can create a new GitHub Environment that we can use for testing the deployment of our <code>DockerEc2</code> construct and the deployment of our application to the docker swarm cluster that the <code>DockerEc2</code> construct sets up.</p><h3 id="adding-environment-secrets-to-github-for-use-in-github-actions" tabindex="-1"><a class="header-anchor" href="#adding-environment-secrets-to-github-for-use-in-github-actions" aria-hidden="true">#</a> Adding Environment Secrets to GitHub for use in GitHub Actions</h3><ul><li><strong><code>SSH_PRIVATE_KEY</code></strong> - This is the private key used to connect to the EC2 instance for securely communicating to the swarm cluster on EC2 from our GitHub Actions environment.</li><li><strong><code>STACK_NAME</code></strong> - this will be used to name our stack. It defines the environment of the application being deployed.</li><li><strong><code>HOST_NAME</code></strong> - this will be used to request the Route 53 A Record</li><li><strong><code>ZONE_NAME</code></strong> - this will be used to lookup an existing Hosted Zone</li></ul><p>You can add other environment variables that you want to use in backend services (gunicorn, celery, etc), and you must add these to the <code>environmentVariables</code> property of the <code>DockerEc2</code> construct as a mapping.</p><h3 id="adding-repository-secrets-to-our-github-project" tabindex="-1"><a class="header-anchor" href="#adding-repository-secrets-to-our-github-project" aria-hidden="true">#</a> Adding Repository secrets to our GitHub project</h3><p>For the <code>django-step-by-step</code> repository, we can add the following repository secrets that will be available in all environments that we create in this repository:</p><ul><li><strong><code>AWS_ACCESS_KEY_ID</code></strong></li><li><strong><code>AWS_ACCOUNT_ID</code></strong></li><li><strong><code>AWS_DEFAULT_REGION</code></strong></li><li><strong><code>AWS_SECRET_ACCESS_KEY</code></strong></li></ul><h2 id="deploying-the-application" tabindex="-1"><a class="header-anchor" href="#deploying-the-application" aria-hidden="true">#</a> Deploying the Application</h2><p>Once all of the GitHub secret values are set, you can deploy the application by pushing a git tag with the format: <code>v#.#.#</code>. This will trigger a deployment using the <code>.github/workflows/deploy.yml</code> GitHub Actions workflow. This workflow does the following:</p><ul><li>Deploys a CloudFormation stack named with the <code>STACK_NAME</code> environment variable</li><li>Deploys an EC2 instance</li><li>The EC2 instance <code>UserData</code> scripts sets up the instance to run our application by installing docker and running <code>docker stack deploy</code></li></ul><p>This deploys both the infrastructure and the application in the same operation.</p><h2 id="updating-the-application" tabindex="-1"><a class="header-anchor" href="#updating-the-application" aria-hidden="true">#</a> Updating the application</h2><p>To update the application, there are two options. You can rerun the same infrastructure pipeline that was used to initially create the stack, or you can run the application update pipeline.</p><p>Running the infrastructure pipeline may replace the EC2 instance and recreate the swarm cluster (depending on what values in the CDK construct have been changed), but the application data will all be persisted since everything is stored in EFS.</p><p>The application update pipeline updates the application by running <code>docker stack deploy</code> and also recreates docker secrets in case those have changed. Secret values are updated by changing the value of the GitHub environment secrets in the GitHub UI.</p><h2 id="debugging-and-deploying-from-your-local-machine" tabindex="-1"><a class="header-anchor" href="#debugging-and-deploying-from-your-local-machine" aria-hidden="true">#</a> Debugging and deploying from your local machine</h2><p>If you want to deploy the infrastructure and application from your local machine, you need to create an <code>.env</code> file based on <code>.env.template</code> and then run the following commands:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>source .env\nmake cdk-deploy-docker-ec2\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Then you can use the CloudFormation Outputs to SSH to the EC2 instance, inspect docker resources, open a Django shell in the backend container, run Django management commands, etc.</p><p>Look for the CloudFormation Output that looks like this:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ssh -i &quot;~/.ssh/my-key-pair.pem&quot; ec2-user@ec2-10-123-456-78.compute-1.amazonaws.com\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>You can also access Portainer and view all of the docker resources in a live web UI.</p>',62),_={id:"_12-factor-app",tabindex:"-1"},G=(0,i.Wm)("a",{class:"header-anchor",href:"#_12-factor-app","aria-hidden":"true"},"#",-1),P=(0,i.Uk)(),F={href:"https://12factor.net/",target:"_blank",rel:"noopener noreferrer"},K=(0,i.Uk)("12 Factor App"),R=(0,i.Uk)("This construct tries to adhere to the "),q={href:"https://12factor.net/",target:"_blank",rel:"noopener noreferrer"},N=(0,i.Uk)("12 Factor App"),M=(0,i.Uk)(" model, but it does not do so completely. Here is the 12 Factor App scorecard for this construct:"),L=(0,i.uE)('<h3 id="i-codebase-one-codebase-tracked-in-revision-control-many-deploys" tabindex="-1"><a class="header-anchor" href="#i-codebase-one-codebase-tracked-in-revision-control-many-deploys" aria-hidden="true">#</a> I. <strong>Codebase</strong> - <em>One codebase tracked in revision control, many deploys</em></h3><p>This first factor of the 12 Factor app deserves some clarification. There are <strong>two</strong> code repositories in use here. The first is <code>django-cdk</code>. This repo is an AWS CDK construct library that is written in TypeScript and published to NPM and PyPI. It includes several different constructs that help developers and teams deploy Django applications on AWS using different tools (such ECS, EKS and docker swarm).</p><p>The second codebase is <code>django-step-by-step</code>. This project is a reference application that several applications in a monorepo structure. It includes a Django project built with Django REST Framework and a Vue.js frontend application built with Quasar, TypeScript, Vue 3 and the Composition API. It is a simple micro-blogging application called μblog. The <code>django-step-by-step</code> repo also includes a <code>cdk</code> directory that includes the <code>django-cdk</code> library as a dependency.</p><p>The <code>django-cdk</code> application incudes <code>django-step-by-step</code> as a git submodule. The reason for doing this is to make it easier to test deploying an application with the <code>django-cdk</code> library without having to redeploy a new version of the <code>django-cdk</code> library with each change. You can find the <code>django-step-by-step</code> project code referenced in the <code>django-cdk</code> project&#39;s <code>integ</code> files (such as <code>src/integ/integ.docker-ec2.ts</code>). These files are used for integration testing (<code>integ</code> is short for <code>integration</code>).</p><p>II. <strong>Dependencies</strong> - <em>Explicitly declare and isolate dependencies</em> - The project does this pretty well. Both <code>django-cdk</code> and <code>django-step-by-step</code> use tools to manage dependencies. <code>django-cdk</code> uses <code>projen</code> and <code>django-step-by-step</code> uses <code>poetry</code> for the backend and <code>yarn</code> for the frontend. Versions are specified in lots of different files, including swarm stack files, Dockerfiles and construct files.</p><p>III. <strong>Config</strong> - <em>Store config in the environment</em> - Config for this <code>DockerEc2</code> construct is either simple or complex depending on how you look at it. The <code>DockerEc2</code> construct is a simple interface where all config values are passed in through an interface called <code>DockerEc2Props</code>. These values are then passed into the EC2 metadata service (<code>UserData</code> and <code>CloudFormationInit</code>) that is used to create the EC2 instance that runs our application. The EC2 metadata sets up the docker swarm cluster, creates secrets that are read from environment variables and deploys the swarm stack with tagged versions of container images that are built and pushed to ECR by CDK (building and pushing images is the first things that happens when you run <code>cdk deploy</code> or <code>make docker-ec2-deploy</code>). I have gone back and forth on some of the decision around what to include in the <code>DockerEc2Props</code> interface and how to structure the EC2 metadata using <code>cfn-init</code>.</p><p>IV. <strong>Backing services</strong> - <em>Treat backing services as attached resources</em> - The postgres database used in this construct runs in a docker container has its data stored in EFS. This is not ideal for a production environment, but it is an OK fit for testing and staging environments.</p><p>V. <strong>Build, release, run</strong> - <em>Strictly separate build and run stages</em> - CDK does each of these steps in the <code>make docker-ec2-deploy</code> command. CDK builds the docker images, pushes them to the ECR registry and then runs the <code>docker stack deploy</code> command to run the application in the swarm cluster.</p><p>VI. <strong>Processes</strong> - <em>Execute the app as one or more stateless processes</em> - This application follows this rule as well as the saying &quot;one process per container&quot;. Routing traffic is one are of this project where there could be some room for improvement. The NGINX process is responsible for routing all application traffic, but Traefik could also do path-based routing so that API traffic would need to take once less hop.</p><p>VII. <strong>Port binding</strong> - <em>Export services via port binding</em> - Traefik is the only swarm service that exposes ports 80 and 443. All application traffic goes to the <code>nginx</code> container, and is then routed to either the frontend app, the backend app or possibly static files as well (unless the application is using S3 for static and media file storage).</p><p>VIII. <strong>Concurrency</strong> - <em>Scale out via the process model</em> - This is one point where the construct does abide by the 12 Factor App. While docker swarm is designed to work with multiple nodes in a cluster, the application infrastructure deployed by this construct uses a single-node swarm cluster.</p><p>IX. <strong>Disposability</strong> - <em>Maximize robustness with fast startup and graceful shutdown</em> - This construct really embraces disposability. Each time your run <code>make docker-ec2-deploy</code> with changes to either application code or infrastructure code, the EC2 instance and swarm cluster will be completely deleted and completely recreated. Data is stored in EFS and is persisted between deploys. It might be possible to use EBS (Elastic Block Storage) to store application data, but EFS is better suited or this type of application since it can be used by multiple EC2 instances at the same time (the existing EC2 instance and the new EC2 instance that is replacing the old instance). It is not necessary to completely delete the EC2 instance, and this does make the process longer since docker needs to be reinstalled on each deploy. The big downside is that you are having to wait around for the EC2 instances to start. There may also be extra data costs associated with downloading packages and files in the CloudFormationInit metadata.</p><p>X. <strong>Dev/prod parity</strong> - <em>Keep development, staging, and production as similar as possible</em> - If your production environment uses ECS, your test and staging environments should also use ECS. This construct is not ideal for production workloads, but it might be useful for prototyping and side projects that you don&#39;t want to spend a lot of money on. You can create multiple identical environments by creating multiple GitHub environments, duplicating the GitHub Actions workflow and modifying the trigger to use some other custom tag (such as <code>v*/dev</code>, for example).</p><p>XI. <strong>Logs</strong> - <em>Treat logs as event streams</em> - This application does not do anything special with logs. Logs can be be access easily through the Portainer interface.</p><p>XII. <strong>Admin processes</strong> - <em>Run admin/management tasks as one-off processes</em> - This construct makes it easy to run one-off processes. The construct uses CloudFormation Outputs so that you can easily access a shell in the EC2 instance or a container, or access the application website or admin dashboard.</p><h2 id="terminology-disambiguation" tabindex="-1"><a class="header-anchor" href="#terminology-disambiguation" aria-hidden="true">#</a> Terminology disambiguation</h2><p>Sometimes the same terms are used in different contexts, and it might be confusing, so here is some clarification and disambiguation.</p><ul><li><p><strong>deployment</strong> - Deployment is a term that has at least three different meanings in the context of this project. First, a deployment is the name of a Kubernetes resource that is similar to a docker swarm service. A deployment is typically used to refer to the act of creating or updating a new version of the application. This constructs uses CDK to combine the deployment of infrastructure and the deployment of the application. The infrastructure configures and executes the deployment of the application with CloudFormationInit metadata.</p></li><li><p><strong>stack</strong> - stack is the term used by CloudFormation to describe a set of resources that are deployed together. <code>stack</code> is also a term used in docker swarm where it means a collection of services that make up an application.</p></li><li><p><strong>docker swarm vs docker compose</strong> - Docker swarm is a <strong>container orchestration tool</strong> that is built into docker. It is similar to docker compose, but there are some important differences. Applications running in docker swarm clusters are defined by &quot;stack files&quot;. Stack files are YAML files that use the docker compose file format, but there are some differences. For example, docker compose lets you reference a Dockerfile in the <code>image</code> key, but stack files require that an image URI is specified.</p><p>Docker compose was originally developed as a tool for local development, and docker swarm was designed for running container workloads in production. Docker compose can be used to run applications in production, however.</p></li><li><p><strong>application, project, construct</strong> - These words may be confusing. <code>construct</code> refers to the <code>DockerEc2</code> construct that spins up the infrastructure and the application. <code>application</code> refers to the application that is running in the docker swarm cluster. <code>project</code> refers to the application, construct and infrastructure as whole.</p></li></ul><h2 id="discussion" tabindex="-1"><a class="header-anchor" href="#discussion" aria-hidden="true">#</a> Discussion</h2><p>Some of the important topics I wanted to address with this project include:</p><h3 id="combined-and-dynamic-infra-and-app-deployment" tabindex="-1"><a class="header-anchor" href="#combined-and-dynamic-infra-and-app-deployment" aria-hidden="true">#</a> Combined and dynamic infra and app deployment</h3><ul><li>how to do combined deployment of infrastructure and application</li><li>how to do application deployments without updating infrastructure</li><li>how write reusable infrastructure code that is sufficiently decoupled from application code and also not too opinionated</li></ul><h3 id="speeding-up-feedback-loop" tabindex="-1"><a class="header-anchor" href="#speeding-up-feedback-loop" aria-hidden="true">#</a> Speeding up feedback loop</h3><ul><li>how to speed up the iterative process of &quot;spinning up&quot; and &quot;tearing down&quot; infrastructure</li><li>how to develop low cost, quasi-production-grade environments for experimenting with app development and CI/CD tooling</li><li>Getting a better understanding of EC2, CloudFormationInit and UserData</li><li>NFS vs EBS for providing persistent storage to docker swarm</li></ul><h3 id="library-design" tabindex="-1"><a class="header-anchor" href="#library-design" aria-hidden="true">#</a> Library design</h3><ul><li>Balancing ease of use with complexity</li><li>Use minimal inputs (secrets entered to GitHub, stack name)</li></ul><h2 id="next-steps" tabindex="-1"><a class="header-anchor" href="#next-steps" aria-hidden="true">#</a> Next steps</h2><p>My next goal is to improve <code>django-cdk</code> and apply my learnings from working on the <code>DockerEc2</code> construct to other constructs I have written for ECS and EKS.</p><h3 id="using-the-dockerec2-construct-for-testing" tabindex="-1"><a class="header-anchor" href="#using-the-dockerec2-construct-for-testing" aria-hidden="true">#</a> Using the <code>DockerEc2</code> construct for testing</h3><ul><li>Trying different python base images</li><li>Quickly testing dependency version updates</li><li>t3.nano instance suitability and performance for this application workload</li><li>Measure costs of running an instance of the application</li></ul><h3 id="additional-work" tabindex="-1"><a class="header-anchor" href="#additional-work" aria-hidden="true">#</a> Additional work</h3><ul><li>Add tests for the <code>DockerEc2</code> construct</li><li>Cache images in GitHub Actions for faster deployments</li></ul>',32),O={render:function(e,t){const o=(0,i.up)("RouterLink"),O=(0,i.up)("OutboundLink");return(0,i.wg)(),(0,i.j4)(i.HY,null,[(0,i.Wm)("img",{src:e.$withBase("/images/docker-swarm-ec2-hero.png"),alt:"docker swarm on ec2"},null,8,["src"]),n,a,(0,i.Wm)("nav",s,[(0,i.Wm)("ul",null,[(0,i.Wm)("li",null,[(0,i.Wm)(o,{to:"#pros-and-cons-of-this-application-architecture"},{default:(0,i.w5)((()=>[r])),_:1}),(0,i.Wm)("ul",null,[(0,i.Wm)("li",null,[(0,i.Wm)(o,{to:"#pros"},{default:(0,i.w5)((()=>[c])),_:1})]),(0,i.Wm)("li",null,[(0,i.Wm)(o,{to:"#cons"},{default:(0,i.w5)((()=>[d])),_:1})])])]),(0,i.Wm)("li",null,[(0,i.Wm)(o,{to:"#diagram"},{default:(0,i.w5)((()=>[l])),_:1}),(0,i.Wm)("ul",null,[(0,i.Wm)("li",null,[(0,i.Wm)(o,{to:"#main-infrastructure-and-application-components"},{default:(0,i.w5)((()=>[p])),_:1})]),(0,i.Wm)("li",null,[(0,i.Wm)(o,{to:"#deployment-pipelines"},{default:(0,i.w5)((()=>[u])),_:1})]),(0,i.Wm)("li",null,[(0,i.Wm)(o,{to:"#django-cdk-project-workflow"},{default:(0,i.w5)((()=>[h])),_:1})])])]),(0,i.Wm)("li",null,[(0,i.Wm)(o,{to:"#prerequisites-for-using-this-construct"},{default:(0,i.w5)((()=>[m])),_:1})]),(0,i.Wm)("li",null,[(0,i.Wm)(o,{to:"#preparing-for-deployment"},{default:(0,i.w5)((()=>[g])),_:1}),(0,i.Wm)("ul",null,[(0,i.Wm)("li",null,[(0,i.Wm)(o,{to:"#creating-a-github-environment"},{default:(0,i.w5)((()=>[f])),_:1})]),(0,i.Wm)("li",null,[(0,i.Wm)(o,{to:"#adding-environment-secrets-to-github-for-use-in-github-actions"},{default:(0,i.w5)((()=>[y])),_:1})]),(0,i.Wm)("li",null,[(0,i.Wm)(o,{to:"#adding-repository-secrets-to-our-github-project"},{default:(0,i.w5)((()=>[b])),_:1})])])]),(0,i.Wm)("li",null,[(0,i.Wm)(o,{to:"#deploying-the-application"},{default:(0,i.w5)((()=>[k])),_:1})]),(0,i.Wm)("li",null,[(0,i.Wm)(o,{to:"#updating-the-application"},{default:(0,i.w5)((()=>[w])),_:1})]),(0,i.Wm)("li",null,[(0,i.Wm)(o,{to:"#debugging-and-deploying-from-your-local-machine"},{default:(0,i.w5)((()=>[v])),_:1})]),(0,i.Wm)("li",null,[(0,i.Wm)(o,{to:"#_12-factor-app"},{default:(0,i.w5)((()=>[C])),_:1}),(0,i.Wm)("ul",null,[(0,i.Wm)("li",null,[(0,i.Wm)(o,{to:"#i-codebase-one-codebase-tracked-in-revision-control-many-deploys"},{default:(0,i.w5)((()=>[E])),_:1})])])]),(0,i.Wm)("li",null,[(0,i.Wm)(o,{to:"#terminology-disambiguation"},{default:(0,i.w5)((()=>[T])),_:1})]),(0,i.Wm)("li",null,[(0,i.Wm)(o,{to:"#discussion"},{default:(0,i.w5)((()=>[D])),_:1}),(0,i.Wm)("ul",null,[(0,i.Wm)("li",null,[(0,i.Wm)(o,{to:"#combined-and-dynamic-infra-and-app-deployment"},{default:(0,i.w5)((()=>[A])),_:1})]),(0,i.Wm)("li",null,[(0,i.Wm)(o,{to:"#speeding-up-feedback-loop"},{default:(0,i.w5)((()=>[W])),_:1})]),(0,i.Wm)("li",null,[(0,i.Wm)(o,{to:"#library-design"},{default:(0,i.w5)((()=>[S])),_:1})])])]),(0,i.Wm)("li",null,[(0,i.Wm)(o,{to:"#next-steps"},{default:(0,i.w5)((()=>[j])),_:1}),(0,i.Wm)("ul",null,[(0,i.Wm)("li",null,[(0,i.Wm)(o,{to:"#using-the-dockerec2-construct-for-testing"},{default:(0,i.w5)((()=>[x])),_:1})]),(0,i.Wm)("li",null,[(0,i.Wm)(o,{to:"#additional-work"},{default:(0,i.w5)((()=>[I])),_:1})])])])])]),U,(0,i.Wm)("img",{src:e.$withBase("/diagrams/docker-swarm-ec2.png"),alt:"docker swarm on ec2"},null,8,["src"]),H,(0,i.Wm)("h2",_,[G,P,(0,i.Wm)("a",F,[K,(0,i.Wm)(O)])]),(0,i.Wm)("p",null,[R,(0,i.Wm)("a",q,[N,(0,i.Wm)(O)]),M]),L],64)}}}}]);