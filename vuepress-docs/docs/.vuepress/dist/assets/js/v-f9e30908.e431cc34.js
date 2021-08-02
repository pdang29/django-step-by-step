"use strict";(self.webpackChunkvuepress_docs=self.webpackChunkvuepress_docs||[]).push([[538],{1908:(e,i,t)=>{t.r(i),t.d(i,{data:()=>n});const n={key:"v-f9e30908",path:"/intro/",title:"Project Introduction",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"tl;dr",slug:"tl-dr",children:[]},{level:2,title:"Core application",slug:"core-application",children:[]},{level:2,title:"Implementation",slug:"implementation",children:[]},{level:2,title:"Local development",slug:"local-development",children:[{level:3,title:"Makefile",slug:"makefile",children:[]},{level:3,title:"Python dependencies",slug:"python-dependencies",children:[]},{level:3,title:"Developing with virtual environments",slug:"developing-with-virtual-environments",children:[]},{level:3,title:"Developing with docker",slug:"developing-with-docker",children:[]},{level:3,title:"e2e testing with Cypress",slug:"e2e-testing-with-cypress",children:[]}]},{level:2,title:"Continuous Intergration",slug:"continuous-intergration",children:[]},{level:2,title:"Deployment",slug:"deployment",children:[{level:3,title:"Heroku",slug:"heroku",children:[]},{level:3,title:"AWS ECS",slug:"aws-ecs",children:[]}]},{level:2,title:"This project is open source and MIT Licensed",slug:"this-project-is-open-source-and-mit-licensed",children:[]}],filePathRelative:"intro/README.md",git:{updatedTime:1627862655e3,contributors:[{name:"Brian Caffey",email:"briancaffey2010@gmail.com",commits:1}]}}},9713:(e,i,t)=>{t.r(i),t.d(i,{default:()=>D});var n=t(6252);const a=(0,n.Wm)("h1",{id:"project-introduction",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#project-introduction","aria-hidden":"true"},"#"),(0,n.Uk)(" Project Introduction")],-1),o=(0,n.Wm)("p",null,"This is a Django reference project showing how to develop and deploy Django applications using multiple tools and methodologies with best practices and consice examples.",-1),l=(0,n.Wm)("h2",{id:"tl-dr",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#tl-dr","aria-hidden":"true"},"#"),(0,n.Uk)(" tl;dr")],-1),s=(0,n.Uk)("This project implements a simple blog app using vanilla Django function-based views and class-based views as well as DRF function and class-based views. There is also an implementation of the same application using GraphQL. The application involves a simple data model including users, posts with text and image and post likes. Local development using virtual environments and docker are both covered in detail, including guidance on how to run the application on different operating systems (Linux, Intel Mac, M1 Mac, Windows, WSL). There is 100% test coverage for the project and comprehensive e2e tests using Cypress. The project can be deployed to multiple production environments including Heroku and AWS. Deployment to AWS environment on Elastic Container Service (ECS) is powered by CDK and "),r={href:"https://github.com/briancaffey/django-cdk",target:"_blank",rel:"noopener noreferrer"},c=(0,n.Uk)("a CDK construct library that I wrote specifically for deploying containerized Django projects on AWS"),d=(0,n.Uk)("."),p=(0,n.Uk)("This project is originally designed as a reference or example project that I can use when I need to recall common patterns, syntax and frequently-used code snippets. I have tried to carefully document each part of the development process as a guide for someone who wants to learn how this project is built and deployed from the ground up. Please see "),h=(0,n.Uk)("/STEP_BY_STEP.md"),u=(0,n.Uk)(" for a complete explination of the project, step-by-step. The last part of the article goes over the 12 Factor App principles and how this project conforms to those principles."),m=(0,n.uE)('<p>This project is open-source and new-comers to Django and Python and welcome to create issues and pull requests.</p><h2 id="core-application" tabindex="-1"><a class="header-anchor" href="#core-application" aria-hidden="true">#</a> Core application</h2><p>This project implements a simple microblogging application called μblog. Here are some of the core features of μblog:</p><ul><li>Anyone (incuding unathenticated users) can publish posts with text and an optional image</li><li>Users can sign up for accounts that are activated by clicking a link in an email</li><li>Signed-in users can like posts</li><li>Signed-in users can edit and delete their own posts</li></ul><h2 id="implementation" tabindex="-1"><a class="header-anchor" href="#implementation" aria-hidden="true">#</a> Implementation</h2><p>μblog&#39;s core microblogging application is implemented in 5 different ways:</p><ul><li>Django function-based views</li><li>Django class-based views</li><li>Django REST Framework function-based views</li><li>Django REST Framework class-based views</li><li>GraphQL with Graphene</li></ul><p>Each of the implementations are tested and documented with OpenAPI (Swagger UI). GraphiQL is exposed for the GraphQL API which includes documentation for queries and mutations.</p><p>Django templates and and Bootstrap are used for the function and class based Django viesw. Vue.js is used to implement the like button using AJAX (with axios).</p><h2 id="local-development" tabindex="-1"><a class="header-anchor" href="#local-development" aria-hidden="true">#</a> Local development</h2><p>This project is heavily focused on the process of setting up the development environment. This project has been tested and developed on:</p><ul><li>Ubuntu 20.04</li><li>macOS 11.4 (Apple Silicon)</li><li>Windows 10 (WSL + Docker Desktop)</li></ul><p>Windows 10 PowerShell development environment is still WIP. Here are some important features of the local development environment:</p><h3 id="makefile" tabindex="-1"><a class="header-anchor" href="#makefile" aria-hidden="true">#</a> Makefile</h3><p>A Makefile is included in the root of the project to document. This file helps to document each step of the local development environment and deployment process.</p><h3 id="python-dependencies" tabindex="-1"><a class="header-anchor" href="#python-dependencies" aria-hidden="true">#</a> Python dependencies</h3><p>This project&#39;s Python dependencies are managed with poetry. Poetry dependencies and dev-dependencies are specified in <code>pyproject.toml</code>. These dependencies are exported to two files:</p><ul><li><code>requirements.txt</code>: This contains only the dependencies that are required by the project for running in production</li><li><code>requirements_dev.txt</code>: This contains all the dependencies that are required for running in production and for local development</li></ul><h3 id="developing-with-virtual-environments" tabindex="-1"><a class="header-anchor" href="#developing-with-virtual-environments" aria-hidden="true">#</a> Developing with virtual environments</h3><p>The application can be developed with a virtual environment locally. This requires starting postgres and redis services locally. Alternatively, postgres, redis and other supporting services can be started with a docker-compose file that exposes the services on <code>localhost</code>.</p><h3 id="developing-with-docker" tabindex="-1"><a class="header-anchor" href="#developing-with-docker" aria-hidden="true">#</a> Developing with docker</h3><p>Docker is a popular choice for developing and deploying applications, including Django. docker-compose can be used to run the application and dependent services in containers. See <code>docker-compose.yml</code> in the root directory for more details.</p><p>The docker-compose file contains the following services:</p><ul><li>postgres: Postgres service</li><li>redis: Redis service</li><li>pgadmin: Postgres admin service</li><li>redis-commander: Redis admin service</li><li>backend: main Django web application</li><li>celery_default: celery worker that processes the default queue</li><li>beat: celery process that queues tasks on a schedule</li><li>mailhog: a local SMTP server for testing</li></ul><p>The application can also run locally inside a local Kubernetes cluster. This is made possible with minikube. cdk8s and pulumi are both used to show how kubernetes manifest files can be generated dynamically from code (TypeScript) and deployed to a cluster.</p><h3 id="e2e-testing-with-cypress" tabindex="-1"><a class="header-anchor" href="#e2e-testing-with-cypress" aria-hidden="true">#</a> e2e testing with Cypress</h3><p>Cypress is used for e2e testing which can run locally against the docker-compose development environment. To test user registration and email verification in e2e tests, MailHog and the MailHog API are used to retrieve the email confirmation link from the email sent by the Django application.</p><h2 id="continuous-intergration" tabindex="-1"><a class="header-anchor" href="#continuous-intergration" aria-hidden="true">#</a> Continuous Intergration</h2><p>Multiple tools are used for running unit tests and code quality checks on each commit. These include:</p><ul><li>GitHub Actions</li><li>GitLab CI</li><li>CircleCI</li><li>Bitbucket Pipelines</li></ul><p>Continuous integration checks that all unit tests pass and that code is formatted correctly. Unit tests run the Python code in a simulated environment that contains the dependent services (postgres and redis). The following tools are used in CI:</p><ul><li>flake8</li><li>black</li><li>pytest</li></ul><h2 id="deployment" tabindex="-1"><a class="header-anchor" href="#deployment" aria-hidden="true">#</a> Deployment</h2><p>This project can be deployed to multiple live environments including:</p><ul><li>Heroku</li><li>AWS ECS</li><li>AWS EKS</li><li>docker swarm cluster (planned)</li></ul><h3 id="heroku" tabindex="-1"><a class="header-anchor" href="#heroku" aria-hidden="true">#</a> Heroku</h3><p>This project uses media files, which is a common component of most Django applications. Heroku cannot host media files, so AWS is used to host media files instead. Setting up media file usage on AWS involves setting up:</p><ul><li>An S3 bucket</li><li>An IAM user with correct permissions needed to interact with the bucket&#39;s resources</li></ul><p>The creation of the S3 bucket and the IAM user can be automated using Infrasturcture as Code. A CDK construct from the <code>django-cdk</code> project is used to deploy the resource, and then environment variables are added to Heroku in order for the application to use the S3 bucket.</p><h3 id="aws-ecs" tabindex="-1"><a class="header-anchor" href="#aws-ecs" aria-hidden="true">#</a> AWS ECS</h3>',40),g=(0,n.Uk)("ECS is my preferred way of running containerized web applications on AWS. To help document best practices for deploying Django applications on ECS, I wrote a reusable CDK construct library that handles infrastructure provisioning for typical deployment scenarios. This project can be found "),f={href:"https://github.com/briancaffey/django-cdk",target:"_blank",rel:"noopener noreferrer"},v=(0,n.Uk)("here"),b=(0,n.Uk)("."),k=(0,n.uE)("<p>The Django ECS construct included in the library creates the following AWS resources:</p><ul><li>VPC (public, private and isolated subnets, NAT Gateways, routing tables, Internet Gateway, etc)</li><li>S3 bucket for storing static files and media files</li><li>ECS Cluster (a grouping of ECS resources)</li><li>ECS tasks and services for various components of the application (web, celery workers, management commands and tasks)</li><li>A docker image built from our Django application code and specified Dockerfile</li><li>Application Load Balancer</li><li>TLS certificate that can attached to the Application Load Balancer terminating SSL/TLS</li><li>A Route53 DNS record that points to the Application Load Balancer public DNS name</li><li>AWS RDS Postgres database instance that servers as the database for the Django application</li><li>A single-node AWS ElastiCache Redis cluster that provides caching and messaging brokering for celery workers</li><li>Secrurity groups that allow for the stateless application layer to communicate with the Postgres database and Redis cluster</li><li>Automated database migrations for the Django application using ECS tasks</li></ul><p>The Django ECS construct takes a few inputs, including:</p><ul><li>The path to the Django application code</li><li>The path to the Dockerfile that defines the main image used for the Django application</li><li>The domain name in Route53 that will be used to generate DNS records in your account</li><li>Optionally provide the ARN of an ACM certificate to be attached to the Application Load Balancer</li><li>A list of strings to be used as the command for the web service</li><li>A list of strings to be used as the command for the celery workers</li><li>A list of strings to be used as the command for the celery beat process</li></ul><p>This project can deploy ECS from the command line (using <code>make cdk-deploy</code>) or from a CI/CD pipeline. GitHub Actions and GitLab CI both include pipeline stages that deploy the application to AWS ECS.</p>",5),w=(0,n.Uk)("Additional "),y={href:"https://aws.amazon.com/blogs/containers/new-using-amazon-ecs-exec-access-your-containers-fargate-ec2/",target:"_blank",rel:"noopener noreferrer"},S=(0,n.Uk)("ECS Exec"),j=(0,n.Uk)(" is used to run management commands and open shells inside of the containers running on Fargate."),T=(0,n.Wm)("h2",{id:"this-project-is-open-source-and-mit-licensed",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#this-project-is-open-source-and-mit-licensed","aria-hidden":"true"},"#"),(0,n.Uk)(" This project is open source and MIT Licensed")],-1),A=(0,n.Uk)("See "),C=(0,n.Uk)("LICENSE.md"),D={render:function(e,i){const t=(0,n.up)("OutboundLink"),D=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.j4)(n.HY,null,[a,o,l,(0,n.Wm)("p",null,[s,(0,n.Wm)("a",r,[c,(0,n.Wm)(t)]),d]),(0,n.Wm)("p",null,[p,(0,n.Wm)(D,{to:"/intro/STEP_BY_STEP.html"},{default:(0,n.w5)((()=>[h])),_:1}),u]),m,(0,n.Wm)("p",null,[g,(0,n.Wm)("a",f,[v,(0,n.Wm)(t)]),b]),k,(0,n.Wm)("p",null,[w,(0,n.Wm)("a",y,[S,(0,n.Wm)(t)]),j]),T,(0,n.Wm)("p",null,[A,(0,n.Wm)(D,{to:"/LICENSE.html"},{default:(0,n.w5)((()=>[C])),_:1})])],64)}}}}]);