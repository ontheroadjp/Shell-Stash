<template><h1 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> usage</h1>
<h2 id="ファイル-ディレクトリの移動" tabindex="-1"><a class="header-anchor" href="#ファイル-ディレクトリの移動" aria-hidden="true">#</a> ファイル/ディレクトリの移動</h2>
<h3 id="step-1" tabindex="-1"><a class="header-anchor" href="#step-1" aria-hidden="true">#</a> STEP 1</h3>
<p>移動させたいファイルやディレクトリを stash に入れます。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ ss <span class="token punctuation">[</span>file/directory<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="step-2" tabindex="-1"><a class="header-anchor" href="#step-2" aria-hidden="true">#</a> STEP 2</h3>
<p>目的のディレクトリに移動します。</p>
<h3 id="step-3" tabindex="-1"><a class="header-anchor" href="#step-3" aria-hidden="true">#</a> STEP 3</h3>
<p>stash からファイルやディレクトリを取り出します。</p>
<ul>
<li>単一のファイル/ディレクトリを取り出す</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ ss pop <span class="token punctuation">[</span>file/directory<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li>stash にあるファイル/ディレクトリを全て取り出す</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ ss all
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="ファイル-ディレクトリのコピー" tabindex="-1"><a class="header-anchor" href="#ファイル-ディレクトリのコピー" aria-hidden="true">#</a> ファイル/ディレクトリのコピー</h2>
<p>コピーは、移動とほとんど同じです。
ファイルやディレクトリを stash に入れる時に <code>-c</code> オプションを付与するだけです。
その他の操作は移動の場合と同じです。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ ss -c <span class="token punctuation">[</span>file/directory<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="その他のコマンド" tabindex="-1"><a class="header-anchor" href="#その他のコマンド" aria-hidden="true">#</a> その他のコマンド</h2>
<h3 id="ss" tabindex="-1"><a class="header-anchor" href="#ss" aria-hidden="true">#</a> ss</h3>
<p>stash に保存されているファイル/ディレクトリの一覧を表示します。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ ss
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="ss-drop" tabindex="-1"><a class="header-anchor" href="#ss-drop" aria-hidden="true">#</a> ss drop</h3>
<p>stash の中身を空にします（元には戻せません）。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ ss drop
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>
