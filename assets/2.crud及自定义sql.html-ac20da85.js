import{_ as e,o as s,c as a,b as n}from"./app-12b8c929.js";const t={},i=n(`<h2 id="mybatisplus的增删改查" tabindex="-1"><a class="header-anchor" href="#mybatisplus的增删改查" aria-hidden="true">#</a> mybatisplus的增删改查</h2><h4 id="一、增加" tabindex="-1"><a class="header-anchor" href="#一、增加" aria-hidden="true">#</a> 一、增加</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>User user = new User();
user.setAge(12);
user.setEmail(&quot;123@qq.com&quot;);
user.setId(123);
user.setName(&quot;jxdsdf&quot;);
userMapper.insert(user);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="二、删除" tabindex="-1"><a class="header-anchor" href="#二、删除" aria-hidden="true">#</a> 二、删除</h4><p>主要说一下deleteByMap，是个条件删除，下列例子就是删除age为12的或者name为jxdsdf的记录，只要满足起中一个条件就删除</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;jxdsdf&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> result <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">deleteByMap</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 执行的语句是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Preparing: DELETE FROM user WHERE name = ? AND age = ? 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>至于其他的deleteById，deleteBatchIds,delet之类的删除函数就没必要记录了</p><h4 id="三、改数据" tabindex="-1"><a class="header-anchor" href="#三、改数据" aria-hidden="true">#</a> 三、改数据</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>User user = new User();
        user.setId(1);
        user.setEmail(&quot;12456@qq.com&quot;);
        int result = userMapper.updateById(user);
        System.out.println(result);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行的sql语句是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>UPDATE user SET email=? WHERE id=?
Parameters: 12456@qq.com(String), 1(Long)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>笔记：从sql语句可以看出，这个只修改有注册属性的数据，没有填写属性值是不会修改的</strong></p><h4 id="_4、查询" tabindex="-1"><a class="header-anchor" href="#_4、查询" aria-hidden="true">#</a> 4、查询</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>List&lt;Long&gt; list = Arrays.asList(1l,2l,3l);
        List&lt;User&gt; result = userMapper.selectBatchIds(list);
System.out.println(result);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是个根据id列表批量查询。还有个selectList(args),这里传递的是一个条件构造器，以后再说，如果args是一个null值，就是查询全部数据。</p><h4 id="_5、自定义查询" tabindex="-1"><a class="header-anchor" href="#_5、自定义查询" aria-hidden="true">#</a> 5、自定义查询</h4><p>​ <strong>5.1、添加映射文件</strong></p><p>​ 在resources目录下添加mapper文件和xml文件映射文件</p><p>​ 内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;
&lt;!DOCTYPE mapper PUBLIC &quot;-//mybatis.org//DTD Mapper 3.0//EN&quot; &quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot; &gt;
&lt;mapper namespace=&quot;com.example.mybatisplus.mapper.UserMapper&quot;&gt;

    &lt;select id=&quot;selectMapById&quot; resultType=&quot;map&quot;&gt;
        select id,name,age,email from user where id=#{id}
    &lt;/select&gt;
&lt;/mapper&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p><p>​ <strong>5.2、UserMapper接口添加方法</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Map&lt;String,Object&gt; selectMapById(Long id);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ <strong>5.3、测试</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> Map&lt;String, Object&gt; users = userMapper.selectMapById(1L);
 System.out.println(users);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 执行的sql语句就是自定义的语句了：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Preparing: select id,name,age,email from user where id=?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,29),l=[i];function d(r,p){return s(),a("div",null,l)}const u=e(t,[["render",d],["__file","2.crud及自定义sql.html.vue"]]);export{u as default};
