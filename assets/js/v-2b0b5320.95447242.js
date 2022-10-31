"use strict";(self.webpackChunkvuepress_docs=self.webpackChunkvuepress_docs||[]).push([[87],{6880:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-2b0b5320",path:"/topics/vuepress/",title:"A guide to this VuePress site",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Starting the application in local development mode",slug:"starting-the-application-in-local-development-mode",children:[]},{level:2,title:"How to add new pages",slug:"how-to-add-new-pages",children:[]},{level:2,title:"How to deploy this site to GitHub pages",slug:"how-to-deploy-this-site-to-github-pages",children:[]},{level:2,title:"How to add images to pages in the documentation site",slug:"how-to-add-images-to-pages-in-the-documentation-site",children:[]}],filePathRelative:"topics/vuepress/README.md",git:{updatedTime:166718706e4,contributors:[]}}},4441:(n,s,a)=>{a.r(s),a.d(s,{default:()=>_});var e=a(6252);const t=(0,e.Wm)("h1",{id:"a-guide-to-this-vuepress-site",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#a-guide-to-this-vuepress-site","aria-hidden":"true"},"#"),(0,e.Uk)(" A guide to this VuePress site")],-1),p={class:"table-of-contents"},o=(0,e.Uk)("Starting the application in local development mode"),l=(0,e.Uk)("How to add new pages"),i=(0,e.Uk)("How to deploy this site to GitHub pages"),u=(0,e.Uk)("How to add images to pages in the documentation site"),c=(0,e.Wm)("p",null,"This documentation site is built using",-1),r={href:"https://v2.vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},d=(0,e.Uk)("VuePress v2"),h=(0,e.Wm)("li",null,"TypeScript",-1),k=(0,e.Wm)("li",null,"Markdown",-1),m=(0,e.uE)('<p>This page shows how to build and deploy the μblog documentation site.</p><h2 id="starting-the-application-in-local-development-mode" tabindex="-1"><a class="header-anchor" href="#starting-the-application-in-local-development-mode" aria-hidden="true">#</a> Starting the application in local development mode</h2><p>To start working on the development of this project, run the following command from the Makefile:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>make vuepress-dev\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>This will start the documentation on <code>http://localhost:8089</code>. Code changes will be reflected in the local site when files are added or saved.</p><h2 id="how-to-add-new-pages" tabindex="-1"><a class="header-anchor" href="#how-to-add-new-pages" aria-hidden="true">#</a> How to add new pages</h2><p>To add a new page, add a new folder under the <code>docs</code> directory and then add a <code>README.md</code> file in the new directory. Next, add a corresponding for all supported languages in the <code>docs/.vuepress/configs/{en,zh}.ts</code> files.</p><h2 id="how-to-deploy-this-site-to-github-pages" tabindex="-1"><a class="header-anchor" href="#how-to-deploy-this-site-to-github-pages" aria-hidden="true">#</a> How to deploy this site to GitHub pages</h2>',8),b=(0,e.Uk)("This documentation site is currently hosted on "),g={href:"https://briancaffey.github.io/django-step-by-step/",target:"_blank",rel:"noopener noreferrer"},y=(0,e.Wm)("code",null,"https://briancaffey.github.io/django-step-by-step/",-1),w=(0,e.Uk)(". The "),v=(0,e.Wm)("code",null,"django-step-by-step",-1),f=(0,e.Uk)(" repo is configured to use GitHub pages. The documentation site is deployed using a GitHub Action from the GitHub Actions marketplace called "),W={href:"https://github.com/peaceiris/actions-gh-pages",target:"_blank",rel:"noopener noreferrer"},H=(0,e.Uk)("peaceiris/actions-gh-pages@v3"),T=(0,e.Uk)("."),x=(0,e.uE)('<div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> github pages\n\n<span class="token key atrule">on</span><span class="token punctuation">:</span>\n  <span class="token key atrule">push</span><span class="token punctuation">:</span>\n    <span class="token key atrule">branches</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> dev\n  <span class="token key atrule">pull_request</span><span class="token punctuation">:</span>\n\n<span class="token key atrule">jobs</span><span class="token punctuation">:</span>\n  <span class="token key atrule">deploy</span><span class="token punctuation">:</span>\n    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest\n    <span class="token key atrule">steps</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2\n\n      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node\n        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v2\n        <span class="token key atrule">with</span><span class="token punctuation">:</span>\n          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">&quot;14&quot;</span>\n\n      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Cache dependencies\n        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v2\n        <span class="token key atrule">with</span><span class="token punctuation">:</span>\n          <span class="token key atrule">path</span><span class="token punctuation">:</span> ~/.npm\n          <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>node<span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles(&#39;<span class="token important">**/package-lock.json&#39;)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n          <span class="token key atrule">restore-keys</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">\n            ${{ runner.os }}-node-</span>\n\n      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> cd vuepress<span class="token punctuation">-</span>docs <span class="token important">&amp;&amp;</span> yarn\n      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> cd vuepress<span class="token punctuation">-</span>docs <span class="token important">&amp;&amp;</span> yarn docs<span class="token punctuation">:</span>build\n\n      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> deploy\n        <span class="token key atrule">uses</span><span class="token punctuation">:</span> peaceiris/actions<span class="token punctuation">-</span>gh<span class="token punctuation">-</span>pages@v3\n        <span class="token key atrule">with</span><span class="token punctuation">:</span>\n          <span class="token key atrule">github_token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>\n          <span class="token key atrule">publish_dir</span><span class="token punctuation">:</span> ./vuepress<span class="token punctuation">-</span>docs/docs/.vuepress/dist\n          <span class="token key atrule">publish_branch</span><span class="token punctuation">:</span> master\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>You don&#39;t need to set <code>GITHUB_TOKEN</code> anywhere, this secret is available by default.</p><p>This is how GitHub pages are configured under <code>Settings &gt; Pages</code> in Github:</p>',3),U=(0,e.uE)('<p>When changes are pushed to the <code>dev</code> branch, the Vuepress sites are built and the committed to the <code>master</code> branch serves the GitHub Pages site. The <code>master</code> branch of the repo will only contain the files needed for the documentation site. No other files will on the <code>master</code> branch.</p><h2 id="how-to-add-images-to-pages-in-the-documentation-site" tabindex="-1"><a class="header-anchor" href="#how-to-add-images-to-pages-in-the-documentation-site" aria-hidden="true">#</a> How to add images to pages in the documentation site</h2><p>Images can be added to Markdown files, but they must use the following VuePress utility:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;img :src=&quot;$withBase(&#39;/path/to/image.png&#39;)&quot; alt=&quot;ublog image&quot;&gt;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>This will ensure that the image links will not break if the base URL value changes.</p>',5),_={render:function(n,s){const a=(0,e.up)("RouterLink"),_=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[t,(0,e.Wm)("nav",p,[(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Wm)(a,{to:"#starting-the-application-in-local-development-mode"},{default:(0,e.w5)((()=>[o])),_:1})]),(0,e.Wm)("li",null,[(0,e.Wm)(a,{to:"#how-to-add-new-pages"},{default:(0,e.w5)((()=>[l])),_:1})]),(0,e.Wm)("li",null,[(0,e.Wm)(a,{to:"#how-to-deploy-this-site-to-github-pages"},{default:(0,e.w5)((()=>[i])),_:1})]),(0,e.Wm)("li",null,[(0,e.Wm)(a,{to:"#how-to-add-images-to-pages-in-the-documentation-site"},{default:(0,e.w5)((()=>[u])),_:1})])])]),c,(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Wm)("a",r,[d,(0,e.Wm)(_)])]),h,k]),m,(0,e.Wm)("p",null,[b,(0,e.Wm)("a",g,[y,(0,e.Wm)(_)]),w,v,f,(0,e.Wm)("a",W,[H,(0,e.Wm)(_)]),T]),x,(0,e.Wm)("img",{src:n.$withBase("/images/screenshots/gh-pages-settings.png"),alt:"github pages settings image"},null,8,["src"]),U],64)}}}}]);