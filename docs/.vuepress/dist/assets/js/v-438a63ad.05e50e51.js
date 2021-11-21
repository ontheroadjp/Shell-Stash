"use strict";(self.webpackChunkvuepress_shell_stash=self.webpackChunkvuepress_shell_stash||[]).push([[152],{6573:(e,s,a)=>{a.r(s),a.d(s,{data:()=>n});const n={key:"v-438a63ad",path:"/ja/usage/",title:"usage",lang:"ja-JP",frontmatter:{},excerpt:"",headers:[{level:2,title:"ファイル/ディレクトリの移動",slug:"ファイル-ディレクトリの移動",children:[{level:3,title:"STEP 1",slug:"step-1",children:[]},{level:3,title:"STEP 2",slug:"step-2",children:[]},{level:3,title:"STEP 3",slug:"step-3",children:[]}]},{level:2,title:"ファイル/ディレクトリのコピー",slug:"ファイル-ディレクトリのコピー",children:[]},{level:2,title:"その他のコマンド",slug:"その他のコマンド",children:[{level:3,title:"ss",slug:"ss",children:[]},{level:3,title:"ss drop",slug:"ss-drop",children:[]}]}],filePathRelative:"ja/usage/README.md",git:{updatedTime:1637479351e3,contributors:[{name:"ontheroadjp",email:"dev@ontheroad.jp",commits:2}]}}},8213:(e,s,a)=>{a.r(s),a.d(s,{default:()=>r});const n=(0,a(6252).uE)('<h1 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> usage</h1><h2 id="ファイル-ディレクトリの移動" tabindex="-1"><a class="header-anchor" href="#ファイル-ディレクトリの移動" aria-hidden="true">#</a> ファイル/ディレクトリの移動</h2><h3 id="step-1" tabindex="-1"><a class="header-anchor" href="#step-1" aria-hidden="true">#</a> STEP 1</h3><p>移動させたいファイルやディレクトリを stash に入れます。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ss <span class="token punctuation">[</span>file/directory<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="step-2" tabindex="-1"><a class="header-anchor" href="#step-2" aria-hidden="true">#</a> STEP 2</h3><p>目的のディレクトリに移動します。</p><h3 id="step-3" tabindex="-1"><a class="header-anchor" href="#step-3" aria-hidden="true">#</a> STEP 3</h3><p>stash からファイルやディレクトリを取り出します。</p><ul><li>単一のファイル/ディレクトリを取り出す</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ss pop <span class="token punctuation">[</span>file/directory<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>stash にあるファイル/ディレクトリを全て取り出す</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ss all\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="ファイル-ディレクトリのコピー" tabindex="-1"><a class="header-anchor" href="#ファイル-ディレクトリのコピー" aria-hidden="true">#</a> ファイル/ディレクトリのコピー</h2><p>コピーは、移動とほとんど同じです。 ファイルやディレクトリを stash に入れる時に <code>-c</code> オプションを付与するだけです。 その他の操作は移動の場合と同じです。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ss -c <span class="token punctuation">[</span>file/directory<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="その他のコマンド" tabindex="-1"><a class="header-anchor" href="#その他のコマンド" aria-hidden="true">#</a> その他のコマンド</h2><h3 id="ss" tabindex="-1"><a class="header-anchor" href="#ss" aria-hidden="true">#</a> ss</h3><p>stash に保存されているファイル/ディレクトリの一覧を表示します。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ss\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="ss-drop" tabindex="-1"><a class="header-anchor" href="#ss-drop" aria-hidden="true">#</a> ss drop</h3><p>stash の中身を空にします（元には戻せません）。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ss drop\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',23),l={},r=(0,a(3744).Z)(l,[["render",function(e,s){return n}]])},3744:(e,s)=>{s.Z=(e,s)=>{const a=e.__vccOpts||e;for(const[e,n]of s)a[e]=n;return a}}}]);