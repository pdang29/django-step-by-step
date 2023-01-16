"use strict";(self.webpackChunkvuepress_docs=self.webpackChunkvuepress_docs||[]).push([[296],{5235:(e,r,n)=>{n.r(r),n.d(r,{data:()=>i});const i={key:"v-2f04e461",path:"/deploy/aws/",title:"Overview of options for deploying μblog",lang:"en-US",frontmatter:{next:"/deploy/aws/cdk",prev:"/guide/ci-cd/github-actions",head:[["meta",{name:"description",content:"Using Terraform for Infrastructure as Code for Django projects"}]]},excerpt:"",headers:[{level:2,title:"Infrastructure as Code Libraries",slug:"infrastructure-as-code-libraries",children:[]},{level:2,title:"Consuming IaC libraries",slug:"consuming-iac-libraries",children:[]},{level:2,title:"Infrastructure pipeline workflow filename convention",slug:"infrastructure-pipeline-workflow-filename-convention",children:[]},{level:2,title:"Article",slug:"article",children:[]}],filePathRelative:"deploy/aws/README.md",git:{updatedTime:1673832222e3,contributors:[]}}},9254:(e,r,n)=>{n.r(r),n.d(r,{default:()=>g});var i=n(6252);const o=(0,i.Wm)("h1",{id:"overview-of-options-for-deploying-μblog",tabindex:"-1"},[(0,i.Wm)("a",{class:"header-anchor",href:"#overview-of-options-for-deploying-μblog","aria-hidden":"true"},"#"),(0,i.Uk)(" Overview of options for deploying μblog")],-1),a=(0,i.Wm)("p",null,"This project focuses on deploying to AWS using ECS Fargate. GitHub Actions are used for deployment pipelines.",-1),t=(0,i.Wm)("h2",{id:"infrastructure-as-code-libraries",tabindex:"-1"},[(0,i.Wm)("a",{class:"header-anchor",href:"#infrastructure-as-code-libraries","aria-hidden":"true"},"#"),(0,i.Uk)(" Infrastructure as Code Libraries")],-1),s=(0,i.Wm)("p",null,"There are three options for Infrastructure as Code:",-1),l={href:"https://github.com/briancaffey/terraform-aws-django",target:"_blank",rel:"noopener noreferrer"},c=(0,i.Wm)("code",null,"terraform-aws-django",-1),d={href:"https://github.com/briancaffey/cdk-django",target:"_blank",rel:"noopener noreferrer"},u=(0,i.Wm)("code",null,"cdk-django",-1),p={href:"https://github.com/briancaffey/pulumi-aws-django",target:"_blank",rel:"noopener noreferrer"},f=(0,i.Wm)("code",null,"pulumi-aws-django",-1),m=(0,i.uE)('<h2 id="consuming-iac-libraries" tabindex="-1"><a class="header-anchor" href="#consuming-iac-libraries" aria-hidden="true">#</a> Consuming IaC libraries</h2><p>The <code>django-step-by-step</code> repo includes a directory called <code>iac</code> with the following structure:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>iac\n├── cdk\n├── pulumi\n└── terraform\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Each of these directories includes code that uses the IaC libraries referenced above. These directories include the &quot;live&quot; configuration files (<code>{env}.json</code>, <code>{env}.tfvars</code>, <code>Pulumi.{env}.yaml</code>) that map to environments in AWS.</p><h2 id="infrastructure-pipeline-workflow-filename-convention" tabindex="-1"><a class="header-anchor" href="#infrastructure-pipeline-workflow-filename-convention" aria-hidden="true">#</a> Infrastructure pipeline workflow filename convention</h2><p>Each of these options has corresponding GitHub Actions workflow files.</p><p>These workflow files can be found in the <code>.github/workflows</code> folder of <code>django-step-by-step</code> using the following naming convention:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{ad_hoc,prod}_{base,app}_{create_update,destroy}_{cdk,terraform_pulumi}.yml\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Some workflow files may be missing</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>At some point these GitHub Actions and associated files in the <code>iac</code> directory may be moved to another GitHub repository</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Some workflow files may be using different patterns. All workflows should be using the <code>actions/upload-artifact</code> and <code>actions/download-artifact</code> GitHub Actions</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>For the most up-to-date information on these projects, please see their open-issues and recent CHANGELOG entries.</p></div><h2 id="article" tabindex="-1"><a class="header-anchor" href="#article" aria-hidden="true">#</a> Article</h2>',13),h={href:"https://briancaffey.github.io/2023/01/07/i-deployed-the-same-containerized-serverless-django-app-with-aws-cdk-terraform-and-pulumi",target:"_blank",rel:"noopener noreferrer"},b=(0,i.Uk)("See this article for an in-depth overview of these different deployment options"),g={render:function(e,r){const n=(0,i.up)("OutboundLink");return(0,i.wg)(),(0,i.j4)(i.HY,null,[o,a,t,s,(0,i.Wm)("ul",null,[(0,i.Wm)("li",null,[(0,i.Wm)("a",l,[c,(0,i.Wm)(n)])]),(0,i.Wm)("li",null,[(0,i.Wm)("a",d,[u,(0,i.Wm)(n)])]),(0,i.Wm)("li",null,[(0,i.Wm)("a",p,[f,(0,i.Wm)(n)])])]),m,(0,i.Wm)("p",null,[(0,i.Wm)("a",h,[b,(0,i.Wm)(n)])])],64)}}}}]);