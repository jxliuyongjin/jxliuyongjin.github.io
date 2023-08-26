import{_ as e,o as a,c as n,b as s}from"./app-0abfe2bf.js";const i={},t=s(`<h3 id="一、mybatisplus的增删改查" tabindex="-1"><a class="header-anchor" href="#一、mybatisplus的增删改查" aria-hidden="true">#</a> 一、mybatisplus的增删改查</h3><h4 id="_1、增加" tabindex="-1"><a class="header-anchor" href="#_1、增加" aria-hidden="true">#</a> 1、增加</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>User user = new User();
user.setAge(12);
user.setEmail(&quot;123@qq.com&quot;);
user.setId(123);
user.setName(&quot;jxdsdf&quot;);
userMapper.insert(user);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、删除" tabindex="-1"><a class="header-anchor" href="#_2、删除" aria-hidden="true">#</a> 2、删除</h4><p>主要说一下deleteByMap，是个条件删除，下列例子就是删除age为12的或者name为jxdsdf的记录，只要满足起中一个条件就删除</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;jxdsdf&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> result <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">deleteByMap</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 执行的语句是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Preparing: DELETE FROM user WHERE name = ? AND age = ? 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>至于其他的deleteById，deleteBatchIds,delet之类的删除函数就没必要记录了</p><h4 id="_3、改数据" tabindex="-1"><a class="header-anchor" href="#_3、改数据" aria-hidden="true">#</a> 3、改数据</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>User user = new User();
user.setId(1);
user.setEmail(&quot;12456@qq.com&quot;);
int result = userMapper.updateById(user);
System.out.println(result);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行的sql语句是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>UPDATE user SET email=? WHERE id=?
Parameters: 12456@qq.com(String), 1(Long)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>笔记：从sql语句可以看出，这个只修改有注册属性的数据，没有填写属性值是不会修改的</strong></p><h4 id="_4、查询" tabindex="-1"><a class="header-anchor" href="#_4、查询" aria-hidden="true">#</a> 4、查询</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>List&lt;Long&gt; list = Arrays.asList(1l,2l,3l);
List&lt;User&gt; result = userMapper.selectBatchIds(list);
System.out.println(result);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是个根据id列表批量查询。还有个selectList(args),这里传递的是一个条件构造器，以后再说，如果args是一个null值，就是查询全部数据。</p><h4 id="_5、自定义查询" tabindex="-1"><a class="header-anchor" href="#_5、自定义查询" aria-hidden="true">#</a> 5、自定义查询</h4><h5 id="_5-1、添加映射文件" tabindex="-1"><a class="header-anchor" href="#_5-1、添加映射文件" aria-hidden="true">#</a> 5.1、添加映射文件</h5><p>​ 在resources目录下添加mapper文件和xml文件映射文件</p><p>​ 内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;
&lt;!DOCTYPE mapper PUBLIC &quot;-//mybatis.org//DTD Mapper 3.0//EN&quot; &quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot; &gt;
&lt;mapper namespace=&quot;com.example.mybatisplus.mapper.UserMapper&quot;&gt;

    &lt;select id=&quot;selectMapById&quot; resultType=&quot;map&quot;&gt;
        select id,name,age,email from user where id=#{id}
    &lt;/select&gt;
&lt;/mapper&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p><h5 id="_5-2、usermapper接口添加方法" tabindex="-1"><a class="header-anchor" href="#_5-2、usermapper接口添加方法" aria-hidden="true">#</a> 5.2、UserMapper接口添加方法</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Map&lt;String,Object&gt; selectMapById(Long id);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_5-3、测试" tabindex="-1"><a class="header-anchor" href="#_5-3、测试" aria-hidden="true">#</a> 5.3、测试</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> Map&lt;String, Object&gt; users = userMapper.selectMapById(1L);
 System.out.println(users);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 执行的sql语句就是自定义的语句了：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Preparing: select id,name,age,email from user where id=?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="二、service" tabindex="-1"><a class="header-anchor" href="#二、service" aria-hidden="true">#</a> 二、Service</h3><h5 id="_1、创建自己的service接口继承iservice接口" tabindex="-1"><a class="header-anchor" href="#_1、创建自己的service接口继承iservice接口" aria-hidden="true">#</a> 1、创建自己的Service接口继承IService接口</h5><p>包和其下面的文件UserService，其内容如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public interface UserService  extends IService&lt;User&gt;
{
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_1-2、创建实现类" tabindex="-1"><a class="header-anchor" href="#_1-2、创建实现类" aria-hidden="true">#</a> 1.2、创建实现类</h5><p>实现类继承ServiceImpl,平且传入Mapper和User</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Service
public class UserServiceImpl extends ServiceImpl&lt;UserMapper, User&gt; implements UserService
{ 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_1-3-、测试查寻总记录数量" tabindex="-1"><a class="header-anchor" href="#_1-3-、测试查寻总记录数量" aria-hidden="true">#</a> 1.3 、测试查寻总记录数量</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>	<span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">UserService</span> userService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testGetCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">long</span> count <span class="token operator">=</span> userService<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_1-4、测试sql语句" tabindex="-1"><a class="header-anchor" href="#_1-4、测试sql语句" aria-hidden="true">#</a> 1.4、测试sql语句</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Preparing: SELECT COUNT( * ) FROM user
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="三、注解" tabindex="-1"><a class="header-anchor" href="#三、注解" aria-hidden="true">#</a> 三、注解</h3><h5 id="_1、-tablename" tabindex="-1"><a class="header-anchor" href="#_1、-tablename" aria-hidden="true">#</a> 1、@TableName</h5><p>当表名和定义的实体类名不一致的时候，可以用@TableName来给实体类指定数据库的表明，使之匹配</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@TableName</span><span class="token punctuation">(</span><span class="token string">&quot;t_user&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
     <span class="token keyword">long</span> id<span class="token punctuation">;</span>
     <span class="token class-name">String</span> name<span class="token punctuation">;</span>
     <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
     <span class="token class-name">String</span> email<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行的sql语句是</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Preparing: SELECT id,name,age,email FROM t_user
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>当需要全局加一个开头的时候，就可以在properties或者yml里面配置</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mybatis-plus: 
  global-config:
    db-config:
      table-prefix: t_
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2、-tableid" tabindex="-1"><a class="header-anchor" href="#_2、-tableid" aria-hidden="true">#</a> 2、@TableId</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Data
public class User {
     @TableId(&quot;id&quot;)
     long uid;
     String name;
     Integer age;
     String email;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行的sql语句是</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> SELECT id AS uid,name,age,email FROM user WHERE id=?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>如果需要设置自动递增可以设置第二个参数</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>     @TableId(value=&quot;id&quot;,type = IdType.NONE)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当然数据需要设置自动递增，如果没有设置自动递增是不会其作用的</p><h5 id="_3、通过全局配置主键生成策略" tabindex="-1"><a class="header-anchor" href="#_3、通过全局配置主键生成策略" aria-hidden="true">#</a> 3、通过全局配置主键生成策略</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  global-config:
    db-config:
      id-type: auto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4、-tablefield" tabindex="-1"><a class="header-anchor" href="#_4、-tablefield" aria-hidden="true">#</a> 4、@TableField</h5><p>mybatisplus自动默认驼峰转_的算法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Data 
public class User {
     long id;
     String userName;
     Integer age;
     String email;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>起中userName自动匹配表种user_name，调用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> User user = new User();
 user.setUserName(&quot;xxxxx&quot;);
 userMapper.insert(user);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行的sql语句是</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>INSERT INTO t_user ( id, user_name ) VALUES ( ?, ? )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_5、-tablefiled的用法" tabindex="-1"><a class="header-anchor" href="#_5、-tablefiled的用法" aria-hidden="true">#</a> 5、@TableFiled的用法</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Data 
public class User {
     long id;
     @TableField(&quot;user_name&quot;)
     String userName;
     Integer age;
     String email;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>直接直顶对线属性和表种字段的映射关系</p><h5 id="_6、-tablelogic逻辑删除" tabindex="-1"><a class="header-anchor" href="#_6、-tablelogic逻辑删除" aria-hidden="true">#</a> 6、@TableLogic逻辑删除</h5><p>主要是在表哥种添加一个字段。来标识该条数据是否已经删除</p><p>表格种添加is_delete字段并且User对象也添加字段isDelete和@TableLogic注解</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Data
@TableName(&quot;t_user&quot;)
public class User {
     long id;
     String userName;
     Integer age;
     String email;
     @TableLogic
     Integer isDeleted;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行测试</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> int result = userMapper.deleteById(1);
 System.out.println(result);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>最后执行的sql语句是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> UPDATE t_user SET is_deleted=1 WHERE id=? AND is_deleted=0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行的结果就是is_deleted从0变成了1表示逻辑删除</p><p>以后的查找也会自动添加 AND is_deleted=0条件，自动屏蔽is_deleted=1的数据，从而达到逻辑删除的目的</p>`,77),d=[t];function l(r,c){return a(),n("div",null,d)}const p=e(i,[["render",l],["__file","2.基础操作.html.vue"]]);export{p as default};
