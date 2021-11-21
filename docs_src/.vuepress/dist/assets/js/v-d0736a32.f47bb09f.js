"use strict";(self.webpackChunkvuepress_shell_stash=self.webpackChunkvuepress_shell_stash||[]).push([[988],{202:(e,s,a)=>{a.r(s),a.d(s,{data:()=>i});const i={key:"v-d0736a32",path:"/usage/",title:"usage",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Moving files or directories",slug:"moving-files-or-directories",children:[{level:3,title:"STEP 1",slug:"step-1",children:[]},{level:3,title:"STEP 2",slug:"step-2",children:[]},{level:3,title:"STEP 3",slug:"step-3",children:[]}]},{level:2,title:"Copying files or directories",slug:"copying-files-or-directories",children:[]},{level:2,title:"Other Commands",slug:"other-commands",children:[{level:3,title:"ss",slug:"ss",children:[]},{level:3,title:"ss drop",slug:"ss-drop",children:[]}]}],filePathRelative:"usage/README.md",git:{updatedTime:null,contributors:[]}}},586:(e,s,a)=>{a.r(s),a.d(s,{default:()=>r});const i=(0,a(252).uE)('<h1 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> usage</h1><h2 id="moving-files-or-directories" tabindex="-1"><a class="header-anchor" href="#moving-files-or-directories" aria-hidden="true">#</a> Moving files or directories</h2><h3 id="step-1" tabindex="-1"><a class="header-anchor" href="#step-1" aria-hidden="true">#</a> STEP 1</h3><p>Put the file or directory you want to move into the stash.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ss <span class="token punctuation">[</span>file/directory<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="step-2" tabindex="-1"><a class="header-anchor" href="#step-2" aria-hidden="true">#</a> STEP 2</h3><p>Go to the destination directory.</p><h3 id="step-3" tabindex="-1"><a class="header-anchor" href="#step-3" aria-hidden="true">#</a> STEP 3</h3><p>Extract a file or directory from the stash from the destination directory.</p><ul><li>Extract a single file or directory</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ss pop <span class="token punctuation">[</span>file/directory<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>Extracts all files and directories in the stash</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ss all\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="copying-files-or-directories" tabindex="-1"><a class="header-anchor" href="#copying-files-or-directories" aria-hidden="true">#</a> Copying files or directories</h2><p>Copying is almost the same as moving. Just add the -c option to put the file or directory into the stash. The rest of the operations are the same as for moving.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ss -c <span class="token punctuation">[</span>file/directory<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="other-commands" tabindex="-1"><a class="header-anchor" href="#other-commands" aria-hidden="true">#</a> Other Commands</h2><h3 id="ss" tabindex="-1"><a class="header-anchor" href="#ss" aria-hidden="true">#</a> ss</h3><p>List the contents of stash</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ss\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="ss-drop" tabindex="-1"><a class="header-anchor" href="#ss-drop" aria-hidden="true">#</a> ss drop</h3><p>Empty the contents of stash (contents will be deleted)</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ss drop\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',23),n={},r=(0,a(744).Z)(n,[["render",function(e,s){return i}]])},744:(e,s)=>{s.Z=(e,s)=>{const a=e.__vccOpts||e;for(const[e,i]of s)a[e]=i;return a}}}]);