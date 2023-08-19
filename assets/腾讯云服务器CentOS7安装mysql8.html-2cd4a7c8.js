import{_ as a,o as s,c as e,b as n}from"./app-59299ace.js";const r={},i=n(`<h2 id="一、mysql8的安装" tabindex="-1"><a class="header-anchor" href="#一、mysql8的安装" aria-hidden="true">#</a> 一、MySQL8的安装</h2><h5 id="_1、在-root-目录下-安装-mysql-和-mysql-devel" tabindex="-1"><a class="header-anchor" href="#_1、在-root-目录下-安装-mysql-和-mysql-devel" aria-hidden="true">#</a> 1、在 root 目录下，安装 mysql 和 mysql-devel</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>   yum install mysql
   yum install mysql<span class="token operator">-</span>devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2、安装mysql-server" tabindex="-1"><a class="header-anchor" href="#_2、安装mysql-server" aria-hidden="true">#</a> 2、安装mysql-server</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> http://dev.mysql.com/get/mysql80-community-release-el7-5.noarch.rpm
<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> mysql80-community-release-el7-5.noarch.rpm
yum <span class="token function">install</span> mysql-community-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3、重启mysql服务" tabindex="-1"><a class="header-anchor" href="#_3、重启mysql服务" aria-hidden="true">#</a> 3、重启mysql服务</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>service mysqld start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_4、查看-mysql-运行状态" tabindex="-1"><a class="header-anchor" href="#_4、查看-mysql-运行状态" aria-hidden="true">#</a> 4、查看 Mysql 运行状态</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>service mysqld status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://atts.w3cschool.cn/attachments/image/20230807/1691393979642658.png" alt=""></p><h5 id="_5、查看初始密码" tabindex="-1"><a class="header-anchor" href="#_5、查看初始密码" aria-hidden="true">#</a> 5、查看初始密码</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cat <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>log<span class="token operator">/</span>mysqld<span class="token punctuation">.</span>log<span class="token operator">|</span>grep localhost
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://atts.w3cschool.cn/attachments/image/20230807/1691393919801643.png" alt=""></p><h5 id="_6、进入mysql" tabindex="-1"><a class="header-anchor" href="#_6、进入mysql" aria-hidden="true">#</a> 6、进入mysql</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>mysql <span class="token operator">-</span>uroot <span class="token operator">-</span>p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_7、修改密码" tabindex="-1"><a class="header-anchor" href="#_7、修改密码" aria-hidden="true">#</a> 7、修改密码</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>alter user <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> identified by <span class="token string">&#39;Abc123456!&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_8、退出" tabindex="-1"><a class="header-anchor" href="#_8、退出" aria-hidden="true">#</a> 8、退出</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>exit<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="二、修改远程访问权限" tabindex="-1"><a class="header-anchor" href="#二、修改远程访问权限" aria-hidden="true">#</a> 二、修改远程访问权限</h2><h5 id="_1、登录mysql" tabindex="-1"><a class="header-anchor" href="#_1、登录mysql" aria-hidden="true">#</a> 1、登录mysql</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>mysql <span class="token operator">-</span>uroot <span class="token operator">-</span>p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_2、查看mysql库中的user表host字段" tabindex="-1"><a class="header-anchor" href="#_2、查看mysql库中的user表host字段" aria-hidden="true">#</a> 2、查看mysql库中的user表host字段</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>使用mysql库：
use mysql
select user<span class="token punctuation">,</span>host from user<span class="token punctuation">;</span>
可以看到root后面的host是localhost表示只允许本机访问，需要把它改成<span class="token operator">%</span>，<span class="token operator">%</span>表示允许任何host访问
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://atts.w3cschool.cn/attachments/image/20230807/1691394458607245.png" alt=""></p><h5 id="_3、修改root用户的host字段-命令" tabindex="-1"><a class="header-anchor" href="#_3、修改root用户的host字段-命令" aria-hidden="true">#</a> 3、修改root用户的host字段，命令</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>update user <span class="token keyword">set</span> host <span class="token operator">=</span><span class="token string">&quot;%&quot;</span> where user <span class="token operator">=</span><span class="token string">&quot;root&quot;</span>；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再次查看user表host字段 <img src="https://atts.w3cschool.cn/attachments/image/20230807/1691395014298158.png" alt=""> 这里root的host字段变成%了</p><h5 id="_4、使用本次修改立即生效-命令" tabindex="-1"><a class="header-anchor" href="#_4、使用本次修改立即生效-命令" aria-hidden="true">#</a> 4、使用本次修改立即生效，命令：</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>flush privileges<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="三、修改远程访问权限" tabindex="-1"><a class="header-anchor" href="#三、修改远程访问权限" aria-hidden="true">#</a> <strong>三、修改远程访问权限</strong></h2><h5 id="_1、登录腾讯云-找到云服务器" tabindex="-1"><a class="header-anchor" href="#_1、登录腾讯云-找到云服务器" aria-hidden="true">#</a> 1、登录腾讯云，找到云服务器</h5><p><img src="https://atts.w3cschool.cn/attachments/image/20230807/1691395308893504.png" alt=""></p><h5 id="_2、开放mysql对应的接口" tabindex="-1"><a class="header-anchor" href="#_2、开放mysql对应的接口" aria-hidden="true">#</a> 2、开放mysql对应的接口</h5><p><img src="https://atts.w3cschool.cn/attachments/image/20230807/1691395427291446.png" alt=""></p><h5 id="_3、完成-可以用navicat远程连接了" tabindex="-1"><a class="header-anchor" href="#_3、完成-可以用navicat远程连接了" aria-hidden="true">#</a> 3、完成，可以用Navicat远程连接了</h5>`,36),t=[i];function d(l,c){return s(),e("div",null,t)}const h=a(r,[["render",d],["__file","腾讯云服务器CentOS7安装mysql8.html.vue"]]);export{h as default};
