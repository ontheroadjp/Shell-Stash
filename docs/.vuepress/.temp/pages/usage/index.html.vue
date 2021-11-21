<template><h1 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> usage</h1>
<h2 id="moving-files-or-directories" tabindex="-1"><a class="header-anchor" href="#moving-files-or-directories" aria-hidden="true">#</a> Moving files or directories</h2>
<h3 id="step-1" tabindex="-1"><a class="header-anchor" href="#step-1" aria-hidden="true">#</a> STEP 1</h3>
<p>Put the file or directory you want to move into the stash.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ ss <span class="token punctuation">[</span>file/directory<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="step-2" tabindex="-1"><a class="header-anchor" href="#step-2" aria-hidden="true">#</a> STEP 2</h3>
<p>Go to the destination directory.</p>
<h3 id="step-3" tabindex="-1"><a class="header-anchor" href="#step-3" aria-hidden="true">#</a> STEP 3</h3>
<p>Extract a file or directory from the stash from the destination directory.</p>
<ul>
<li>Extract a single file or directory</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ ss pop <span class="token punctuation">[</span>file/directory<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li>Extracts all files and directories in the stash</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ ss all
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="copying-files-or-directories" tabindex="-1"><a class="header-anchor" href="#copying-files-or-directories" aria-hidden="true">#</a> Copying files or directories</h2>
<p>Copying is almost the same as moving.
Just add the -c option to put the file or directory into the stash.
The rest of the operations are the same as for moving.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ ss -c <span class="token punctuation">[</span>file/directory<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="other-commands" tabindex="-1"><a class="header-anchor" href="#other-commands" aria-hidden="true">#</a> Other Commands</h2>
<h3 id="ss" tabindex="-1"><a class="header-anchor" href="#ss" aria-hidden="true">#</a> ss</h3>
<p>List the contents of stash</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ ss
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="ss-drop" tabindex="-1"><a class="header-anchor" href="#ss-drop" aria-hidden="true">#</a> ss drop</h3>
<p>Empty the contents of stash (contents will be deleted)</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ ss drop
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>
