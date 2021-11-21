"use strict";(self.webpackChunkvuepress_shell_stash=self.webpackChunkvuepress_shell_stash||[]).push([[513],{134:(e,s,a)=>{a.r(s),a.d(s,{data:()=>n});const n={key:"v-3f644251",path:"/ja/setup/",title:"Setup",lang:"ja-JP",frontmatter:{},excerpt:"",headers:[{level:2,title:"インストール",slug:"インストール",children:[]},{level:2,title:"アンインストール",slug:"アンインストール",children:[]}],filePathRelative:"ja/setup/README.md",git:{updatedTime:null,contributors:[]}}},306:(e,s,a)=>{a.r(s),a.d(s,{default:()=>t});const n=(0,a(252).uE)('<h1 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> Setup</h1><h2 id="インストール" tabindex="-1"><a class="header-anchor" href="#インストール" aria-hidden="true">#</a> インストール</h2><p>このリポジトリを好きな場所にクローンします。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/ontheroadjp/Shell-Stash\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Bashの場合は <code>.bash_profile</code>、zshの場合は <code>.zprofile</code> に以下の行を追加してください。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">source</span> path/to/Shell-Stash/shell-stash.fnc\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>お疲れ様です! これで <code>ss</code> コマンドが使えるようになりました。</p><h2 id="アンインストール" tabindex="-1"><a class="header-anchor" href="#アンインストール" aria-hidden="true">#</a> アンインストール</h2><p><code>git clone</code> してきたリポジトリと、ホームディレクトリに作成された <code>stash/</code> ディレクトリを削除します。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rm</span> -rf path/to/repo/Shell-Stash/\n<span class="token function">rm</span> -rf <span class="token variable">${<span class="token environment constant">HOME</span>}</span>/.ShellStash\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>そして、<code>.bash_profile</code>（zsh の場合は<code>.zprofile</code>）から <code>path/to/Shell-Stash/shell-stash.fnc</code> を削除します。</p><p>以上で完了です。</p>',12),l={},t=(0,a(744).Z)(l,[["render",function(e,s){return n}]])},744:(e,s)=>{s.Z=(e,s)=>{const a=e.__vccOpts||e;for(const[e,n]of s)a[e]=n;return a}}}]);