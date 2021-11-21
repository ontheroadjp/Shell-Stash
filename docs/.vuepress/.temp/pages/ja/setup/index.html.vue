<template><h1 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> Setup</h1>
<h2 id="インストール" tabindex="-1"><a class="header-anchor" href="#インストール" aria-hidden="true">#</a> インストール</h2>
<p>このリポジトリを好きな場所にクローンします。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/ontheroadjp/Shell-Stash
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Bashの場合は <code>.bash_profile</code>、zshの場合は <code>.zprofile</code> に以下の行を追加してください。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">source</span> path/to/Shell-Stash/shell-stash.fnc
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>お疲れ様です!
これで <code>ss</code> コマンドが使えるようになりました。</p>
<h2 id="アンインストール" tabindex="-1"><a class="header-anchor" href="#アンインストール" aria-hidden="true">#</a> アンインストール</h2>
<p><code>git clone</code> してきたリポジトリと、ホームディレクトリに作成された <code>stash/</code> ディレクトリを削除します。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">rm</span> -rf path/to/repo/Shell-Stash/
<span class="token function">rm</span> -rf <span class="token variable">${<span class="token environment constant">HOME</span>}</span>/.ShellStash
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>そして、<code>.bash_profile</code>（zsh の場合は<code>.zprofile</code>）から <code>path/to/Shell-Stash/shell-stash.fnc</code> を削除します。</p>
<p>以上で完了です。</p>
</template>
