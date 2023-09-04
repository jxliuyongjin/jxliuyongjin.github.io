import{_ as s,o as n,c as a,b as p}from"./app-a60add6f.js";const e={},t=p(`<h4 id="创建springboot" tabindex="-1"><a class="header-anchor" href="#创建springboot" aria-hidden="true">#</a> 创建springboot</h4><h5 id="_1、配置pom文件" tabindex="-1"><a class="header-anchor" href="#_1、配置pom文件" aria-hidden="true">#</a> 1、配置pom文件</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token generics"><span class="token punctuation">&lt;</span>dependency<span class="token punctuation">&gt;</span></span>
  <span class="token generics"><span class="token punctuation">&lt;</span>groupId<span class="token punctuation">&gt;</span></span>org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
  <span class="token generics"><span class="token punctuation">&lt;</span>artifactId<span class="token punctuation">&gt;</span></span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">&gt;</span>
<span class="token generics"><span class="token punctuation">&lt;</span>dependency<span class="token punctuation">&gt;</span></span>
  <span class="token generics"><span class="token punctuation">&lt;</span>groupId<span class="token punctuation">&gt;</span></span>org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
  <span class="token generics"><span class="token punctuation">&lt;</span>artifactId<span class="token punctuation">&gt;</span></span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">-</span>test<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
  <span class="token generics"><span class="token punctuation">&lt;</span>scope<span class="token punctuation">&gt;</span></span>test<span class="token operator">&lt;</span><span class="token operator">/</span>scope<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">&gt;</span>

<span class="token generics"><span class="token punctuation">&lt;</span>dependency<span class="token punctuation">&gt;</span></span>
  <span class="token generics"><span class="token punctuation">&lt;</span>groupId<span class="token punctuation">&gt;</span></span>ssddmysql<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
  <span class="token generics"><span class="token punctuation">&lt;</span>artifactId<span class="token punctuation">&gt;</span></span>mysql<span class="token operator">-</span>connector<span class="token operator">-</span>java<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">&gt;</span>

<span class="token generics"><span class="token punctuation">&lt;</span>dependency<span class="token punctuation">&gt;</span></span>
  <span class="token generics"><span class="token punctuation">&lt;</span>groupId<span class="token punctuation">&gt;</span></span>com<span class="token punctuation">.</span>baomidou<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
  <span class="token generics"><span class="token punctuation">&lt;</span>artifactId<span class="token punctuation">&gt;</span></span>mybatis<span class="token operator">-</span>plus<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
  <span class="token generics"><span class="token punctuation">&lt;</span>version<span class="token punctuation">&gt;</span></span><span class="token number">3.5</span><span class="token number">.0</span><span class="token operator">&lt;</span><span class="token operator">/</span>version<span class="token operator">&gt;</span> 
<span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">&gt;</span>

<span class="token generics"><span class="token punctuation">&lt;</span>dependency<span class="token punctuation">&gt;</span></span>
  <span class="token generics"><span class="token punctuation">&lt;</span>groupId<span class="token punctuation">&gt;</span></span>org<span class="token punctuation">.</span>projectlombok<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
  <span class="token generics"><span class="token punctuation">&lt;</span>artifactId<span class="token punctuation">&gt;</span></span>lombok<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
  <span class="token generics"><span class="token punctuation">&lt;</span>optional<span class="token punctuation">&gt;</span></span><span class="token boolean">true</span><span class="token operator">&lt;</span><span class="token operator">/</span>optional<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2、添加yml-并配置mysql数据库" tabindex="-1"><a class="header-anchor" href="#_2、添加yml-并配置mysql数据库" aria-hidden="true">#</a> 2、添加yml,并配置mysql数据库</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>spring<span class="token operator">:</span>
 datasource<span class="token operator">:</span>
   driver<span class="token operator">-</span><span class="token keyword">class</span><span class="token operator">-</span>name<span class="token operator">:</span> <span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>mysql<span class="token punctuation">.</span>cj<span class="token punctuation">.</span>jdbc<span class="token punctuation">.</span></span>Driver</span>
   url<span class="token operator">:</span> jdbc<span class="token operator">:</span>mysql<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">1.116</span><span class="token number">.82</span><span class="token number">.74</span><span class="token operator">:</span><span class="token number">3306</span><span class="token operator">/</span>shop<span class="token operator">?</span>useUnicode<span class="token operator">=</span><span class="token boolean">true</span><span class="token operator">&amp;</span>characterEncoding<span class="token operator">=</span>utf<span class="token operator">-</span><span class="token number">8</span><span class="token operator">&amp;</span>useSSL<span class="token operator">=</span><span class="token boolean">false</span><span class="token operator">&amp;</span>serverTimezone<span class="token operator">=</span><span class="token constant">UTC</span><span class="token operator">&amp;</span>allowPublicKeyRetrieval<span class="token operator">=</span><span class="token boolean">true</span>
   username<span class="token operator">:</span> root
   password<span class="token operator">:</span> <span class="token class-name">Jx3606811987</span><span class="token operator">!</span>
mybatis<span class="token operator">-</span>plus<span class="token operator">:</span>
 configuration<span class="token operator">:</span>
   log<span class="token operator">-</span>impl<span class="token operator">:</span> <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>logging<span class="token punctuation">.</span>stdout<span class="token punctuation">.</span></span>StdOutImpl</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3、创建mapper包并创建usermapper" tabindex="-1"><a class="header-anchor" href="#_3、创建mapper包并创建usermapper" aria-hidden="true">#</a> 3、创建mapper包并创建UserMapper</h5><p><img src="https://atts.w3cschool.cn/attachments/image/20230816/1692189108580426.png" alt=""></p><p>其中user类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Data</span></span><span class="token punctuation">;</span>
<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
	<span class="token keyword">private</span> <span class="token keyword">long</span> id<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>UserManager类要继承mybatisplus的BaseMapper</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>core<span class="token punctuation">.</span>mapper<span class="token punctuation">.</span></span><span class="token class-name">BaseMapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>example<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>model<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Repository</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Repository</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token keyword">extends</span> <span class="token class-name">BaseMapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4、application添加mapper包的扫描" tabindex="-1"><a class="header-anchor" href="#_4、application添加mapper包的扫描" aria-hidden="true">#</a> 4、Application添加mapper包的扫描</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@MapperScan</span><span class="token punctuation">(</span><span class="token string">&quot;com.example.mybatisplus.mapper&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MybatisplusApplication</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">MybatisplusApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5、添加测试类-开始测试" tabindex="-1"><a class="header-anchor" href="#_5、添加测试类-开始测试" aria-hidden="true">#</a> 5、添加测试类，开始测试</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MybatisplusTest</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">UserMapper</span> userMapper<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span>  <span class="token function">testSlelectList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectList</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_6、输出结果" tabindex="-1"><a class="header-anchor" href="#_6、输出结果" aria-hidden="true">#</a> 6、输出结果</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token number">2023</span><span class="token operator">-</span><span class="token number">08</span><span class="token operator">-</span><span class="token number">16</span> <span class="token number">20</span><span class="token operator">:</span><span class="token number">05</span><span class="token operator">:</span><span class="token number">29.381</span>  <span class="token constant">INFO</span> <span class="token number">8040</span> <span class="token operator">--</span><span class="token operator">-</span> <span class="token punctuation">[</span>           main<span class="token punctuation">]</span> <span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>zaxxer<span class="token punctuation">.</span>hikari<span class="token punctuation">.</span></span>HikariDataSource</span>       <span class="token operator">:</span> <span class="token class-name">HikariPool</span><span class="token operator">-</span><span class="token number">1</span> <span class="token operator">-</span> <span class="token class-name">Starting</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token number">2023</span><span class="token operator">-</span><span class="token number">08</span><span class="token operator">-</span><span class="token number">16</span> <span class="token number">20</span><span class="token operator">:</span><span class="token number">05</span><span class="token operator">:</span><span class="token number">29.771</span>  <span class="token constant">INFO</span> <span class="token number">8040</span> <span class="token operator">--</span><span class="token operator">-</span> <span class="token punctuation">[</span>           main<span class="token punctuation">]</span> <span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>zaxxer<span class="token punctuation">.</span>hikari<span class="token punctuation">.</span></span>HikariDataSource</span>       <span class="token operator">:</span> <span class="token class-name">HikariPool</span><span class="token operator">-</span><span class="token number">1</span> <span class="token operator">-</span> <span class="token class-name">Start</span> <span class="token class-name"><span class="token namespace">completed<span class="token punctuation">.</span></span>
User</span><span class="token punctuation">(</span>id<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> name<span class="token operator">=</span>sds<span class="token punctuation">,</span> age<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> email<span class="token operator">=</span><span class="token number">3232</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),o=[t];function c(l,r){return n(),a("div",null,o)}const u=s(e,[["render",c],["__file","1.配置.html.vue"]]);export{u as default};
