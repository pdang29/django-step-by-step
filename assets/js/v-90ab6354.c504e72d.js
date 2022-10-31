"use strict";(self.webpackChunkvuepress_docs=self.webpackChunkvuepress_docs||[]).push([[401],{8169:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-90ab6354",path:"/topics/quasar/",title:"Quasar Setup",lang:"en-US",frontmatter:{next:"/topics/docker-compose",prev:"/topics/django"},excerpt:"",headers:[{level:2,title:"μblog Application",slug:"μblog-application",children:[]},{level:2,title:"New Quasar Project",slug:"new-quasar-project",children:[]},{level:2,title:"Quasar Make command",slug:"quasar-make-command",children:[{level:3,title:"Router Mode",slug:"router-mode",children:[]},{level:3,title:"Set VERSION in quasar.conf.js",slug:"set-version-in-quasar-conf-js",children:[]},{level:3,title:"Workbox Settings",slug:"workbox-settings",children:[]}]},{level:2,title:"Starting work on the existing Quasar project",slug:"starting-work-on-the-existing-quasar-project",children:[]},{level:2,title:"TODO",slug:"todo",children:[{level:3,title:"Application",slug:"application",children:[]}]}],filePathRelative:"topics/quasar/README.md",git:{updatedTime:166718706e4,contributors:[]}}},4655:(n,a,s)=>{s.r(a),s.d(a,{default:()=>v});var e=s(6252);const r=(0,e.Wm)("h1",{id:"quasar-setup",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#quasar-setup","aria-hidden":"true"},"#"),(0,e.Uk)(" Quasar Setup")],-1),t={class:"table-of-contents"},l=(0,e.Uk)("μblog Application"),p=(0,e.Uk)("New Quasar Project"),i=(0,e.Uk)("Quasar Make command"),o=(0,e.Uk)("Router Mode"),c=(0,e.Uk)("Set VERSION in quasar.conf.js"),u=(0,e.Uk)("Workbox Settings"),b=(0,e.Uk)("Starting work on the existing Quasar project"),d=(0,e.Uk)("TODO"),m=(0,e.Uk)("Application"),g=(0,e.Wm)("h2",{id:"μblog-application",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#μblog-application","aria-hidden":"true"},"#"),(0,e.Uk)(" μblog Application")],-1),h=(0,e.Wm)("p",null,"Here's a screenshot of the μblog front-end application that uses Quasar. Quasar is a framework for building high-performance & high-quality Vue.js apps.",-1),k=(0,e.uE)('<h2 id="new-quasar-project" tabindex="-1"><a class="header-anchor" href="#new-quasar-project" aria-hidden="true">#</a> New Quasar Project</h2><p>To start a new Quasar project, run:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>quasar create quasar-app\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Here are the options I have selected:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>quasar create quasar-app\n\n  ___\n / _ \\ _   _  __ _ ___  __ _ _ __\n| | | | | | |/ _` / __|/ _` | &#39;__|\n| |_| | |_| | (_| \\__ \\ (_| | |\n \\__\\_\\\\__,_|\\__,_|___/\\__,_|_|\n\n\n\n? Project name (internal usage for dev) quasar-app\n? Project product name (must start with letter if building mobile apps) Quasar App\n? Project description A Quasar Framework app\n? Author Brian Caffey &lt;briancaffey2010@gmail.com&gt;\n? Pick your CSS preprocessor: SCSS\n? Check the features needed for your project:\nESLint (recommended), TypeScript, Vuex, Axios, Vue-i18n\n? Pick a component style: Composition\n? Pick an ESLint preset: Prettier\n? Continue to install project dependencies after the project has been created? (recommended) yarn\n\n\n\n  Quasar CLI · Generated &quot;quasar-app&quot;.\n\n\n [*] Installing project dependencies ...\n\nyarn install v1.22.10\ninfo No lockfile found.\n[1/5] 🔍  Validating package.json...\n[2/5] 🔍  Resolving packages...\nwarning @quasar/app &gt; webpack-dev-server &gt; sockjs &gt; uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.\nwarning @quasar/app &gt; webpack-dev-server &gt; url &gt; querystring@0.2.0: The\n[3/5] 🚚  Fetching packages...\n[4/5] 🔗  Linking dependencies...\nwarning &quot; &gt; vue-i18n@9.1.6&quot; has unmet peer dependency &quot;vue@^3.0.0&quot;.\nwarning &quot; &gt; vuex@4.0.2&quot; has unmet peer dependency &quot;vue@^3.0.2&quot;.\nwarning &quot; &gt; @babel/eslint-parser@7.14.7&quot; has unmet peer dependency &quot;@babel/core@&gt;=7.11.0&quot;.\nwarning &quot;@typescript-eslint/eslint-plugin &gt; tsutils@3.21.0&quot; has unmet peer dependency &quot;typescript@&gt;=2.8.0 || &gt;= 3.2.0-dev || &gt;= 3.3.0-dev || &gt;= 3.4.0-dev || &gt;= 3.5.0-dev || &gt;= 3.6.0-dev || &gt;= 3.6.0-beta || &gt;= 3.7.0-dev || &gt;= 3.7.0-beta&quot;.\n[5/5] 🔨  Building fresh packages...\nsuccess Saved lockfile.\n✨  Done in 34.47s.\n\n\n [*] Running eslint --fix to comply with chosen preset rules...\n\n\nyarn run v1.22.10\n$ eslint --ext .js,.ts,.vue ./ --fix\n✨  Done in 3.00s.\n\n [*] Quasar Project initialization finished!\n\nTo get started:\n\n  cd quasar-app\n  quasar dev\n\nDocumentation can be found at: https://quasar.dev\n\nQuasar is relying on donations to evolve. We&#39;d be very grateful if you can\nread our manifest on &quot;Why donations are important&quot;: https://quasar.dev/why-donate\nDonation campaign: https://donate.quasar.dev\nAny amount is very welcomed.\nIf invoices are required, please first contact razvan@quasar.dev\n\nPlease give us a star on Github if you appreciate our work:\nhttps://github.com/quasarframework/quasar\n\nEnjoy! - Quasar Team\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br></div></div><p>Now you will have a folder in the root of our project call <code>quasar-app</code>.</p><h2 id="quasar-make-command" tabindex="-1"><a class="header-anchor" href="#quasar-make-command" aria-hidden="true">#</a> Quasar Make command</h2><p>Let&#39;s add a Makefile command to the root of the project to start the Quasar project locally:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>## -- Quasar Targets --\n\n## start quasar project locally\nquasar-dev:\n    cd quasar-app &amp;&amp; quasar dev\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="router-mode" tabindex="-1"><a class="header-anchor" href="#router-mode" aria-hidden="true">#</a> Router Mode</h3><p>In <code>quasar.conf.js</code>, set the default router mode:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>    build<span class="token operator">:</span> <span class="token punctuation">{</span>\n      vueRouterMode<span class="token operator">:</span> <span class="token string">&#39;history&#39;</span><span class="token punctuation">,</span> <span class="token comment">// available values: &#39;hash&#39;, &#39;history&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="set-version-in-quasar-conf-js" tabindex="-1"><a class="header-anchor" href="#set-version-in-quasar-conf-js" aria-hidden="true">#</a> Set VERSION in quasar.conf.js</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>    build<span class="token operator">:</span> <span class="token punctuation">{</span>\n      vueRouterMode<span class="token operator">:</span> <span class="token string">&#39;history&#39;</span><span class="token punctuation">,</span> <span class="token comment">// available values: &#39;hash&#39;, &#39;history&#39;</span>\n      env<span class="token operator">:</span> ctx<span class="token punctuation">.</span>dev\n        <span class="token operator">?</span> <span class="token punctuation">{</span>\n            <span class="token constant">VERSION</span><span class="token operator">:</span> <span class="token string">&#39;None&#39;</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span>\n        <span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token constant">VERSION</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VERSION</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="workbox-settings" tabindex="-1"><a class="header-anchor" href="#workbox-settings" aria-hidden="true">#</a> Workbox Settings</h3><p>If you are building the application in PWA mode, then you will want to configure the following settings in the <code>quasar.conf.js</code> file for <code>workboxOptions</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    pwa<span class="token operator">:</span> <span class="token punctuation">{</span>\n      workboxPluginMode<span class="token operator">:</span> <span class="token string">&#39;GenerateSW&#39;</span><span class="token punctuation">,</span> <span class="token comment">// &#39;GenerateSW&#39; or &#39;InjectManifest&#39;</span>\n\n      <span class="token comment">// Add this option</span>\n      workboxOptions<span class="token operator">:</span> <span class="token punctuation">{</span>\n        navigateFallback<span class="token operator">:</span> <span class="token string">&#39;/index.html&#39;</span><span class="token punctuation">,</span>\n        navigateFallbackBlacklist<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[admin,api]+\\/.*</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">]</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// only for GenerateSW</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="starting-work-on-the-existing-quasar-project" tabindex="-1"><a class="header-anchor" href="#starting-work-on-the-existing-quasar-project" aria-hidden="true">#</a> Starting work on the existing Quasar project</h2><p>If you cloned this repo and want to make some changes to the Quasar applications, you will need to run the following commands:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm i -g @quasar/cli\ncd quasar-app\nyarn\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Then, from the parent directory, you can run:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>make quasar-dev\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="todo" tabindex="-1"><a class="header-anchor" href="#todo" aria-hidden="true">#</a> TODO</h2><h3 id="application" tabindex="-1"><a class="header-anchor" href="#application" aria-hidden="true">#</a> Application</h3><ul><li><p>Fix like button on list page</p></li><li><p>Fix MainLayout Menu</p></li><li><p>Add Route Guards</p></li></ul>',25),v={render:function(n,a){const s=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[r,(0,e.Wm)("nav",t,[(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Wm)(s,{to:"#μblog-application"},{default:(0,e.w5)((()=>[l])),_:1})]),(0,e.Wm)("li",null,[(0,e.Wm)(s,{to:"#new-quasar-project"},{default:(0,e.w5)((()=>[p])),_:1})]),(0,e.Wm)("li",null,[(0,e.Wm)(s,{to:"#quasar-make-command"},{default:(0,e.w5)((()=>[i])),_:1}),(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Wm)(s,{to:"#router-mode"},{default:(0,e.w5)((()=>[o])),_:1})]),(0,e.Wm)("li",null,[(0,e.Wm)(s,{to:"#set-version-in-quasar-conf-js"},{default:(0,e.w5)((()=>[c])),_:1})]),(0,e.Wm)("li",null,[(0,e.Wm)(s,{to:"#workbox-settings"},{default:(0,e.w5)((()=>[u])),_:1})])])]),(0,e.Wm)("li",null,[(0,e.Wm)(s,{to:"#starting-work-on-the-existing-quasar-project"},{default:(0,e.w5)((()=>[b])),_:1})]),(0,e.Wm)("li",null,[(0,e.Wm)(s,{to:"#todo"},{default:(0,e.w5)((()=>[d])),_:1}),(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Wm)(s,{to:"#application"},{default:(0,e.w5)((()=>[m])),_:1})])])])])]),g,h,(0,e.Wm)("img",{src:n.$withBase("/images/screenshots/ublog-screenshot.png"),alt:"ublog"},null,8,["src"]),k],64)}}}}]);