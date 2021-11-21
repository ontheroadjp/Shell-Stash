<template><h1 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> Setup</h1>
<h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2>
<p>Clone this repository at anywhere you want.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/ontheroadjp/Shell-Stash
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Add line below in <code>.bash_profile</code> for Bash or <code>.zprofile</code> for zsh.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">source</span> path/to/Shell-Stash/shell-stash.fnc
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Finish!
You will be able to use the ss command.</p>
<h2 id="uninstall" tabindex="-1"><a class="header-anchor" href="#uninstall" aria-hidden="true">#</a> Uninstall</h2>
<p>Delete the cloned repository and the stash directory created in your home directory</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">rm</span> -rf path/to/repo/Shell-Stash/
<span class="token function">rm</span> -rf <span class="token variable">${<span class="token environment constant">HOME</span>}</span>/.ShellStash
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>And remove <code>source path/to/Shell-Stash/shell-stash.fnc</code> from .bash_profile (or .zprofile for zsh)</p>
<p>That's all.</p>
</template>
