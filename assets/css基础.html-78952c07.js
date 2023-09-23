import{_ as n,o as s,c as a,b as e}from"./app-78a18f9b.js";const i={},t=e(`<h2 id="_1、样式表的优先级" tabindex="-1"><a class="header-anchor" href="#_1、样式表的优先级" aria-hidden="true">#</a> 1、样式表的优先级</h2><ul><li><strong>!important;</strong>&gt;行内样式&gt;id选择器&gt;类选择器&gt;元素选择器&gt;通配选择&gt;继承的样式</li><li>同一种选择器之间后面写得会覆盖前面得样式</li><li>复合选择器，权重高的优先，权重值按第一项的规则，相同的情况会覆盖掉之前的(a,b,c) <ul><li>id选择器(1,0,0)</li><li>类选择器(0,1,0)</li><li>元素选择器(0,1,0)</li><li>通配选择(0,0,0)</li></ul></li></ul><h2 id="_2、css语法" tabindex="-1"><a class="header-anchor" href="#_2、css语法" aria-hidden="true">#</a> 2、css语法</h2><p><img src="https://atts.w3cschool.cn/attachments/image/20230921/1695309763545831.png" alt="css语法"></p><h3 id="_2-1、选择器" tabindex="-1"><a class="header-anchor" href="#_2-1、选择器" aria-hidden="true">#</a> 2.1、选择器</h3><p>基本选择器包括：</p><h4 id="_1、通配选择器" tabindex="-1"><a class="header-anchor" href="#_1、通配选择器" aria-hidden="true">#</a> 1、通配选择器</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">//语法
*</span><span class="token punctuation">{</span>
	<span class="token property">属性名</span><span class="token punctuation">:</span>属性值<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
<span class="token selector">//例子
*</span><span class="token punctuation">{</span>
	<span class="token property">color</span><span class="token punctuation">:</span>orange<span class="token punctuation">;</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span>45rpx<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、元素选择器" tabindex="-1"><a class="header-anchor" href="#_2、元素选择器" aria-hidden="true">#</a> 2、元素选择器</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">h1</span> <span class="token punctuation">{</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、类选择器" tabindex="-1"><a class="header-anchor" href="#_3、类选择器" aria-hidden="true">#</a> 3、类选择器</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">//基本样式
.classnameA</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token selector">.classnameB</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>

//html元素可以同时使用多个选择器
&lt;p class=<span class="token string">&quot;classnameA classnameB&quot;</span>&gt;html元素可以同时使用多个选择器&lt;p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4、id选择器" tabindex="-1"><a class="header-anchor" href="#_4、id选择器" aria-hidden="true">#</a> 4、id选择器</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#idname</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5、交集选择器" tabindex="-1"><a class="header-anchor" href="#_5、交集选择器" aria-hidden="true">#</a> 5、交集选择器</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token selector">p.beauty</span><span class="token punctuation">{</span> 
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注：</p><ul><li><p>上例是元素p，和类beauty的交集，所有元素为p，并且类名为beauty的元素，才会被选择</p></li><li><p>元素标签必须写在类标签前面</p></li><li><p>不可以出现两个元素选择器，但可以多个类选择器的交集</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.beauty.beauty2</span><span class="token punctuation">{</span> 
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="_6、并集选择器" tabindex="-1"><a class="header-anchor" href="#_6、并集选择器" aria-hidden="true">#</a> 6、并集选择器</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.classNameA,
.classNaameB,
#idName,
p
{
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：</p><ul><li>选择器之间有&quot;,&quot;</li><li>可以id,class,元素混合使用</li></ul><h4 id="_7、后代选择器" tabindex="-1"><a class="header-anchor" href="#_7、后代选择器" aria-hidden="true">#</a> 7、后代选择器</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*ul和li有空格*/</span>
<span class="token selector">ul li</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：</p><ul><li>这里的li是ul里面的所有后代，包括儿子辈还是孙子辈</li></ul><h4 id="_8、子代选择器" tabindex="-1"><a class="header-anchor" href="#_8、子代选择器" aria-hidden="true">#</a> 8、子代选择器</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*子代，不包括孙子辈*/</span>
<span class="token selector">div&gt;a</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_9、兄弟选择器" tabindex="-1"><a class="header-anchor" href="#_9、兄弟选择器" aria-hidden="true">#</a> 9、兄弟选择器</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*只找div的下一个a元素，如果中间被别的元素隔开，就无效*/</span>
<span class="token selector">div+a</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/*找div所有的下面的a元素*/</span>
<span class="token selector">div~a</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p><ul><li>不包括元素本身，只选择兄弟元素</li></ul><h4 id="_10、属性选择器" tabindex="-1"><a class="header-anchor" href="#_10、属性选择器" aria-hidden="true">#</a> 10、属性选择器</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*第一种写法：选中具有tile属性的元素*/</span>
<span class="token selector">[title]</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/*第二种写法：选中具有tile属性的元素并且其值是value的属性*/</span>
<span class="token selector">[title=&quot;value&quot;]</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/*第三种写法：选具有tile属性的元素并且其值是v开头的属性*/</span>
<span class="token selector">[title^=&quot;v&quot;]</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/*第四种写法：选具有tile属性的元素并且其值是v结尾的属性*/</span>
<span class="token selector">[title$=&quot;v&quot;]</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/*第五种写法：选具有tile属性的元素并且其值包含v的属性*/</span>
<span class="token selector">[title*=&quot;v&quot;]</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2、伪类选择器" tabindex="-1"><a class="header-anchor" href="#_2-2、伪类选择器" aria-hidden="true">#</a> 2.2、伪类选择器</h3><h4 id="_1、伪类选择器" tabindex="-1"><a class="header-anchor" href="#_1、伪类选择器" aria-hidden="true">#</a> 1、伪类选择器</h4><p><strong>格式：[选择器]:[状态]</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*选中没有访问过的a元素*/</span>
<span class="token selector">a:link</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token comment">/*选中访问过的a元素*/</span>
<span class="token selector">a:visited</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token comment">/*选中a元素鼠标悬浮的状态*/</span>
<span class="token selector">a:hover</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token comment">/*选中a元素激活状态（鼠标按下没弹起来）*/</span>
<span class="token selector">a:active</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：</p><ul><li>这些状态需要安固定顺序，不要随意变换</li><li>hover，active是所有标签都有的状态， link，visited是a标签独有状态</li></ul><h4 id="_2、动态伪类选择器" tabindex="-1"><a class="header-anchor" href="#_2、动态伪类选择器" aria-hidden="true">#</a> 2、动态伪类选择器</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*获取焦点时的状态*/</span>
<span class="token selector">input:focus</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token comment">/*复选框或者单选框被选中时的状态
	颜色和被背景色不修改，所以没有background-color:red;
*/</span>
<span class="token selector">input:checked</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*选中被禁用的*/</span>
<span class="token selector">input:disabled</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token selector">html</span><span class="token punctuation">{</span>
  &lt;a href=<span class="token string">&quot;#one&quot;</span>&gt;去看第一个&lt;/a&gt;
  &lt;a href=<span class="token string">&quot;#tow&quot;</span>&gt;去看第一个&lt;/a&gt;
  &lt;a href=<span class="token string">&quot;#three&quot;</span>&gt;去看第一个&lt;/a&gt;

  &lt;div id=<span class="token string">&quot;one&quot;</span>&gt;第一个&lt;div&gt;
  &lt;div id=<span class="token string">&quot;two&quot;</span>&gt;第二个&lt;div&gt;
  &lt;div id=<span class="token string">&quot;three&quot;</span>&gt;第三个&lt;div&gt;
<span class="token punctuation">}</span>
<span class="token comment">/*目标伪类，选中锚点被选中的元素*/</span>
<span class="token selector">div:target</span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、结构伪类选择器" tabindex="-1"><a class="header-anchor" href="#_3、结构伪类选择器" aria-hidden="true">#</a> 3、结构伪类选择器</h4><h5 id="_3-1、frist-child" tabindex="-1"><a class="header-anchor" href="#_3-1、frist-child" aria-hidden="true">#</a> 3.1、frist-child</h5><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">html1:</span><span class="token punctuation">{</span> 
&lt;div&gt;
&lt;p&gt;张三：98分&lt;/p&gt;
&lt;p&gt;李四：95分&lt;/p&gt;
&lt;p&gt;王五：97分&lt;/p&gt; 
&lt;/div&gt;
<span class="token punctuation">}</span>

<span class="token selector">html2:</span><span class="token punctuation">{</span> 
&lt;p&gt;李一&lt;/p&gt;
&lt;div&gt; 
  &lt;marquee&gt;
  		&lt;p&gt;李四：95分&lt;/p&gt;
  		&lt;p&gt;李五：95分&lt;/p&gt;
  &lt;/marquee&gt;
  &lt;p&gt;李六：95分&lt;/p&gt;
  &lt;p&gt;李五：97分&lt;/p&gt; 
&lt;/div&gt;
<span class="token punctuation">}</span>

<span class="token selector">html3:</span><span class="token punctuation">{</span> 
&lt;p&gt;李一&lt;/p&gt;
&lt;div&gt;
  &lt;p&gt;李二：98分&lt;/p&gt;
  &lt;marquee&gt;
  		&lt;p&gt;李三：95分&lt;/p&gt;
  		&lt;p&gt;李四：95分&lt;/p&gt;
  &lt;/marquee&gt;
  &lt;p&gt;李五：95分&lt;/p&gt;
  &lt;p&gt;李六：97分&lt;/p&gt; 
&lt;/div&gt;
<span class="token punctuation">}</span>


 
<span class="token comment">/*选中div子元素中的第一个p元素
	如html2中，就会出现无元素选中的状况
*/</span>
<span class="token selector">div&gt;p:frist-child</span>
<span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*选中div后代的第一个p元素，且p的父级时谁无所谓，但p必须时其父亲的第一个儿子
	如html3中:只有&quot;李二&quot;,&quot;李三&quot;被选中
*/</span>
<span class="token selector">div p:frist-child</span>
<span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*选中d第一个p元素，且p的父级时谁无所谓，但p必须时其父亲的第一个儿子
	如html3中:只有&quot;李一&quot;,&quot;李二&quot;,&quot;李三&quot;被选中
*/</span>
<span class="token selector">p:frist-child</span>
<span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-2、last-child" tabindex="-1"><a class="header-anchor" href="#_3-2、last-child" aria-hidden="true">#</a> 3.2、last-child</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//其选中最后一条，其他规则和frist-child一样
div p:last-child
{
  color:red;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-3、nth-child" tabindex="-1"><a class="header-anchor" href="#_3-3、nth-child" aria-hidden="true">#</a> 3.3、nth-child</h5><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*直接选中某一个元素，这个序号时从1开始的，写0无作用*/</span>
<span class="token selector">div&gt;p:nth-child(1)</span>
<span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token comment">/*参数必须时an+b的模式,下列表示第（1，3，5，7...）个元素被选中*/</span>
<span class="token selector">div&gt;p:nth-child(2n+1)</span>
<span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token comment">/*-n:表示前几个，下列表示选中前5个*/</span>
<span class="token selector">div&gt;p:nth-child(-n+5)</span>
<span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-4、first-of-type" tabindex="-1"><a class="header-anchor" href="#_3-4、first-of-type" aria-hidden="true">#</a> 3.4、first-of-type</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*选择子元素中的第一个p元素，和frist-child的区别在于，
当div第一个元素不是p时，frist-child失效，
而first-of-type能选到，
类似htm2中的div下的第一个p&quot;李六：95分&quot;,first-of-type能选到，frist-child选不到
*/
div&gt;p:first-of-type
{
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-5、nth-last-child-nth-first-of-type" tabindex="-1"><a class="header-anchor" href="#_3-5、nth-last-child-nth-first-of-type" aria-hidden="true">#</a> 3.5、nth-last-child，nth-first-of-type</h5><p>从后往前数，第几个</p><h5 id="_3-6、only-child-only-of-type" tabindex="-1"><a class="header-anchor" href="#_3-6、only-child-only-of-type" aria-hidden="true">#</a> 3.6、only-child,only-of-type</h5><p>选中没有兄弟的元素</p><h5 id="_3-7、empty" tabindex="-1"><a class="header-anchor" href="#_3-7、empty" aria-hidden="true">#</a> 3.7、empty</h5><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">html</span><span class="token punctuation">{</span>
&lt;div&gt;&lt;/div&gt;
<span class="token punctuation">}</span>

<span class="token comment">/*选中没有内容的元素,里面连空格都不能有*/</span>
<span class="token selector">div:empty</span><span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
	<span class="token property">background-color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4、否定伪类" tabindex="-1"><a class="header-anchor" href="#_4、否定伪类" aria-hidden="true">#</a> 4、否定伪类</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>李一：98分<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>李二：88分<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>李三：78分<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fail<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>李四：58分<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fail<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>李五：48分<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

/*否定伪类*/
div&gt;p:not(.fail)
{
	color:red;
}

div&gt;p:not(:frist-child)
{
	color:red;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5、语言伪类" tabindex="-1"><a class="header-anchor" href="#_5、语言伪类" aria-hidden="true">#</a> 5、语言伪类</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>:lang(en){
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6、伪元素选择器" tabindex="-1"><a class="header-anchor" href="#_6、伪元素选择器" aria-hidden="true">#</a> 6、伪元素选择器</h4><p>像元素不是元素，得到的时元素的某个特殊位置</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*选着div中的第一个字符*/</span>
<span class="token selector">div::frist-letter</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token comment">/*选着div中的第一行文字*/</span>
<span class="token selector">div::frist-line</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token comment">/*选着div中被选择的文字*/</span>
<span class="token selector">div::selection</span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span>green
  <span class="token property">color</span><span class="token punctuation">:</span>orange<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*选着input中提示文字*/</span>
<span class="token selector">input::placeholder</span><span class="token punctuation">{</span> 
<span class="token punctuation">}</span>

<span class="token comment">/*
选中得时p元素最开始得位置，随后创建一个子元素
选择p值得前面添加￥*/</span>
<span class="token selector">p::before</span><span class="token punctuation">{</span>
	<span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&quot;￥&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*选着p值得前面添加.00*/</span>
<span class="token selector">p::after</span><span class="token punctuation">{</span>
	<span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&quot;.00&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、常用的属性" tabindex="-1"><a class="header-anchor" href="#_3、常用的属性" aria-hidden="true">#</a> 3、常用的属性</h2><p>font开头的是字体属性，text开头的是文本属性（包括color)</p><h3 id="_3-1、字体" tabindex="-1"><a class="header-anchor" href="#_3-1、字体" aria-hidden="true">#</a> 3.1、字体</h3><h4 id="_1、font-size" tabindex="-1"><a class="header-anchor" href="#_1、font-size" aria-hidden="true">#</a> 1、font-size</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.classsname</span><span class="token punctuation">{</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span>13px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>每个浏览器的默认大小不一样(chrome 默认16px),尽量不用默认的</li><li>每个浏览器有自己定义的最小字体(chrome 默认12px)，即使你写的再小也没用</li><li>字体设计的问题 <ul><li>由于字体的设计方式不同，同样字体大小，呈现的也不一样大</li><li>由于字体设计的不同，字体也不是完全居中的，通常情况，稍微偏下</li></ul></li></ul><h4 id="_2、font-family" tabindex="-1"><a class="header-anchor" href="#_2、font-family" aria-hidden="true">#</a> 2、font-family</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*按顺序优先*/</span>
<span class="token selector">.classsname</span><span class="token punctuation">{</span>
	<span class="token property">font-family</span><span class="token punctuation">:</span><span class="token string">&quot;华文琥珀&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;华文彩云&quot;</span>，<span class="token string">&quot;微软雅黑&quot;</span>
<span class="token punctuation">}</span> 
<span class="token comment">/*英文版*/</span>
<span class="token selector">.classsname</span><span class="token punctuation">{</span>
	<span class="token property">font-family</span><span class="token punctuation">:</span><span class="token string">&quot;STHupo&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;STCaiyun&quot;</span>，<span class="token string">&quot;&#39;Microsoft YaHei&quot;</span><span class="token punctuation">,</span>sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>尽量用英文版本字体名字</li><li>尽量使用一种字体族，衬线字体族或者非衬线字体族，以保证风格统一</li><li>衬线字体(serif)：字的笔画开始、结束的地方有额外的装饰，而且笔画的粗细会有所不同，常用的字体有：宋体，楷体</li><li>非衬线字体(sans-serif)：常用的字体有：&quot;华文琥珀&quot;,&quot;华文彩云&quot;，&quot;微软雅黑&quot;</li></ul><h4 id="_3、font-style" tabindex="-1"><a class="header-anchor" href="#_3、font-style" aria-hidden="true">#</a> 3、font-style</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*斜体1,italic:先找到字体，
如果字体没有做倾斜就和oblique一样强制倾斜*/</span>
<span class="token selector">.classsname</span><span class="token punctuation">{</span>
	<span class="token property">font-style</span><span class="token punctuation">:</span>italic<span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
<span class="token comment">/*斜体2*/</span>
<span class="token selector">.classsname</span><span class="token punctuation">{</span>
	<span class="token property">font-style</span><span class="token punctuation">:</span>oblique<span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4、font-weight" tabindex="-1"><a class="header-anchor" href="#_4、font-weight" aria-hidden="true">#</a> 4、font-weight</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*粗细，font-weight值有：
lighter,normal,bold,bolder。
bolder有可能字体没有设计
*/</span>
<span class="token selector">.classsname</span><span class="token punctuation">{</span>
	<span class="token property">font-weight</span><span class="token punctuation">:</span>bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
<span class="token comment">/*粗细，font-weight值默认有一个最大和最小值，具体看字体
*/</span>
<span class="token selector">.classsname</span><span class="token punctuation">{</span>
	<span class="token property">font-weight</span><span class="token punctuation">:</span>200<span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4、font-复合属性" tabindex="-1"><a class="header-anchor" href="#_4、font-复合属性" aria-hidden="true">#</a> 4、font:复合属性</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*必须保证顺序，且字体大小和字体名字在最后*/</span>
<span class="token selector">.classsname</span><span class="token punctuation">{</span>
	<span class="token property">font</span><span class="token punctuation">:</span>100px <span class="token string">&quot;微软雅黑&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
<span class="token comment">/*必须保证顺序，且字体大小和字体名字在最后*/</span>
<span class="token selector">.classsname</span><span class="token punctuation">{</span>
	<span class="token property">font</span><span class="token punctuation">:</span>bold 100px <span class="token string">&quot;微软雅黑&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5、letter-spaceing-文本间距" tabindex="-1"><a class="header-anchor" href="#_5、letter-spaceing-文本间距" aria-hidden="true">#</a> 5、letter-spaceing：文本间距</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*字母间距*/
.classsname{
	letter-spaceing:20px;
}
/*单词间距，中文里面每个字都是一个词*/
.classsname{
	letter-spaceing:20px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6、text-decoration-文本修饰" tabindex="-1"><a class="header-anchor" href="#_6、text-decoration-文本修饰" aria-hidden="true">#</a> 6、text-decoration:文本修饰</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*上划线
	线的样式：虚线（dotted）,波浪线（wavy）
	还可以添加颜色
*/</span>
<span class="token selector">.classsname</span><span class="token punctuation">{</span>
	<span class="token property">text-decoration</span><span class="token punctuation">:</span>overline dotted red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
	下划线, 其他同上
*/</span> 
<span class="token property">text-decoration</span><span class="token punctuation">:</span>underline<span class="token punctuation">;</span> 
<span class="token comment">/*删除线 其他同上*/</span> 
<span class="token property">text-decoration</span><span class="token punctuation">:</span>line-through<span class="token punctuation">;</span> 

<span class="token comment">/*没有线，可以去掉a标签下面的下划线,和其他自带装饰的线*/</span> 
<span class="token property">text-decoration</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2、文本" tabindex="-1"><a class="header-anchor" href="#_3-2、文本" aria-hidden="true">#</a> 3.2、文本</h3><h4 id="_1、text-indent-首行缩进" tabindex="-1"><a class="header-anchor" href="#_1、text-indent-首行缩进" aria-hidden="true">#</a> 1、text-indent:首行缩进</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*首行缩进*/</span> 
<span class="token selector">.classsname</span><span class="token punctuation">{</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span>60px<span class="token punctuation">;</span>
	<span class="token property">text-indent</span><span class="token punctuation">:</span>120px<span class="token punctuation">;</span>css
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、text-align-水平对齐" tabindex="-1"><a class="header-anchor" href="#_2、text-align-水平对齐" aria-hidden="true">#</a> 2、text-align:水平对齐</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*
text-align:left center right三个值
*/</span> 
<span class="token selector">.classsname</span><span class="token punctuation">{</span>
	<span class="token property">text-align</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、line-height-行高" tabindex="-1"><a class="header-anchor" href="#_3、line-height-行高" aria-hidden="true">#</a> 3、line-height:行高</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*
	第一种，值为像素.如下行高100rpx
	行与行之间是紧贴的
*/</span>
<span class="token selector">.classsname</span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span>40rpx
	<span class="token property">line-height</span><span class="token punctuation">:</span>100rpx<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
<span class="token comment">/*
  第二种，值为像素
  默认行高.如下行高normal
*/</span> 
<span class="token property">line-height</span><span class="token punctuation">:</span>normal<span class="token punctuation">;</span> 
<span class="token comment">/*
  第三种，值为数值 ----常用
 	表示行高是font-size的多少倍
*/</span> 
<span class="token property">line-height</span><span class="token punctuation">:</span>1.5<span class="token punctuation">;</span> 
<span class="token comment">/*
  第四种，值为像素 
 	表示行高是font-size的多少倍
*/</span> 
<span class="token property">line-height</span><span class="token punctuation">:</span>150%<span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="a、当行高为0时" tabindex="-1"><a class="header-anchor" href="#a、当行高为0时" aria-hidden="true">#</a> a、当行高为0时：</h5><ul><li>多行叠在一起=====&gt;&gt;垂直间距为0</li><li>背景色没有了=====&gt;&gt;因为div没有设置高度，是由文本的行高决定文本高度，当文本高度为0，由此div的高度也为0，所以没有了背景色</li><li>文字顶部丢失一点点=====&gt;&gt;行高太小，文字突出行高</li></ul><h5 id="b、行高具有继承性" tabindex="-1"><a class="header-anchor" href="#b、行高具有继承性" aria-hidden="true">#</a> b、行高具有继承性</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>html{
	&lt;div&gt;sfsdfsfsfsfdsfsfsddfsfffsfsfssfsfsdssff&lt;/div&gt;
	&lt;div&gt;sfsdfsfsfsfdsfsfsddfsff&lt;span&gt;xxxx&lt;span&gt;fsfsfssfsfsdssff&lt;/div&gt; 
}


div{
	font-size:40px;
	background-color:orange;
	line-height:1.5;
}
/*
	这里的span继承div的line-height:1.5;所以span的行高是他自身字体大小的1.5倍，也就是300px
	当div的line-height:60px,填写的是具体的60px,
  那么span行高也会是60px，这样行高就写死了，对于大的字体是不合适的 
*/
span{
	font-size:200px;
	color:red; 
}  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="c、应用场景" tabindex="-1"><a class="header-anchor" href="#c、应用场景" aria-hidden="true">#</a> c、应用场景</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*  	
第一种：调整行间距
*/
span{
	line-height:1.5;
}
/*  	
  第二种：单行文字的垂直居中
  当行高和div高度相同时，自然居中, 当然多是不行的
*/
div{
	line-height:200px; 
	height:200px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4、vertical-align" tabindex="-1"><a class="header-anchor" href="#_4、vertical-align" aria-hidden="true">#</a> 4、vertical-align</h4><p><strong>这个属性调整的是相对本行的位置</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>html{
	&lt;div&gt;sfsdfsfsfsfdsfsfsddfsfffsfsfssfsfsdssff&lt;/div&gt;
	&lt;div&gt;sfsdfsfsfsfdsfsfsddfsff&lt;span&gt;xxxx&lt;span&gt;fsfsfssfsfsdssff&lt;/div&gt; 
}

div{
	font-size:40px;
	background-color:orange;
	line-height:1.5;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>行的水平位置：</p><ul><li>默认基线对齐</li><li>middle时，对齐的是自身往行基线上移自身高度的一半</li><li>行的高度，由本行最高的决定</li><li>不能直接控制自身元素里的文字，它控制的是自身相对父级元素的行内位置</li><li>不能控制块级元素，只能控制行内元素在本行的位置</li></ul><h2 id="_3、position" tabindex="-1"><a class="header-anchor" href="#_3、position" aria-hidden="true">#</a> 3、position</h2><p>position属性哈案由static,relative,absolute,fixed,inherit5种。</p><h4 id="_1-1、static" tabindex="-1"><a class="header-anchor" href="#_1-1、static" aria-hidden="true">#</a> 1.1、static</h4><p>默认值，不需要定位。始终处于文档流给予的位置。它可以快取消定位，让top,right,bottom,left的值失效。</p><h4 id="_1-2、fixed" tabindex="-1"><a class="header-anchor" href="#_1-2、fixed" aria-hidden="true">#</a> 1.2、fixed</h4><p>固定定位，相对于浏览器窗口进行定位，脱离文档流，固定在指定位置，通常用于侧边栏等需要固定ui的地方。</p><p><img src="https://atts.w3cschool.cn/attachments/image/20230921/1695286688636366.png" alt=""></p><h4 id="_1-3、sticky" tabindex="-1"><a class="header-anchor" href="#_1-3、sticky" aria-hidden="true">#</a> 1.3、sticky</h4><p>粘性定位，在浏览器窗口到达指定位置阈值时，会和fixed一样，固定住。</p><p><img src="https://atts.w3cschool.cn/attachments/image/20230921/1695286987928379.png" alt="positon:sticky"></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span><span class="token punctuation">{</span>
	<span class="token property">position</span><span class="token punctuation">:</span>sticky<span class="token punctuation">;</span>
	<span class="token property">top</span><span class="token punctuation">:</span>90rpx<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：固定时原有位置为空白，不脱离文档流，受父容器影响</p><h4 id="_1-4、relative" tabindex="-1"><a class="header-anchor" href="#_1-4、relative" aria-hidden="true">#</a> 1.4、relative</h4><p>相对定位：相对元素本身位置进行移动，元素仍然处于文档流中，占据原本的空间</p><p><img src="https://atts.w3cschool.cn/attachments/image/20230921/1695286527853732.png" alt="positon:relative"></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span><span class="token punctuation">{</span>
	<span class="token property">positon</span><span class="token punctuation">:</span>rlative<span class="token punctuation">;</span>
	<span class="token property">top</span><span class="token punctuation">:</span>30px<span class="token punctuation">;</span>
	<span class="token property">left</span><span class="token punctuation">:</span>50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-5、absolute" tabindex="-1"><a class="header-anchor" href="#_1-5、absolute" aria-hidden="true">#</a> 1.5、absolute</h4><p>绝对定位：</p><ul><li>相对于已经定位的父元素定位，如果父元素没有定位（static)，会继续向上寻找，直到找到已经定位的父元素，如果所有父元素都没有定位，他就相对于浏览器的左上角定位</li><li>跟元素是html，并非body</li><li>脱离文档流</li><li>如果该元素没有设置宽度，绝对定位后会根据自身内容调整宽高度</li><li>可以通过z-index来调整层级顺序</li><li></li></ul><p><img src="https://atts.w3cschool.cn/attachments/image/20230921/1695287636972294.png" alt="position:absolute"></p><p>总结：</p><table><thead><tr><th style="text-align:center;">特性</th><th style="text-align:center;">static</th><th style="text-align:center;">sticky</th><th style="text-align:center;">relative</th><th style="text-align:center;">fixed</th><th style="text-align:center;">absolute</th></tr></thead><tbody><tr><td style="text-align:center;">定位</td><td style="text-align:center;">不定位</td><td style="text-align:center;">粘性定位</td><td style="text-align:center;">相对定位</td><td style="text-align:center;">固定定位</td><td style="text-align:center;">绝对定位</td></tr><tr><td style="text-align:center;">占位</td><td style="text-align:center;">占坑</td><td style="text-align:center;">占坑</td><td style="text-align:center;">占坑</td><td style="text-align:center;">占坑</td><td style="text-align:center;">不占坑</td></tr><tr><td style="text-align:center;">可偏移</td><td style="text-align:center;">可以</td><td style="text-align:center;">可以</td><td style="text-align:center;">可以</td><td style="text-align:center;">可以</td><td style="text-align:center;">可以</td></tr><tr><td style="text-align:center;">原点(左上角)</td><td style="text-align:center;">原位置左上角度</td><td style="text-align:center;">相对于浏览器</td><td style="text-align:center;">原来位置</td><td style="text-align:center;">相对于浏览器</td><td style="text-align:center;">最近的父元素左上角</td></tr><tr><td style="text-align:center;">是否脱离文档流</td><td style="text-align:center;">否</td><td style="text-align:center;">是</td><td style="text-align:center;">否</td><td style="text-align:center;">是</td><td style="text-align:center;">是</td></tr><tr><td style="text-align:center;">前提条案件</td><td style="text-align:center;">无</td><td style="text-align:center;">无</td><td style="text-align:center;">无</td><td style="text-align:center;">无</td><td style="text-align:center;">父级有position(非static)</td></tr></tbody></table>`,123),l=[t];function c(d,p){return s(),a("div",null,l)}const r=n(i,[["render",c],["__file","css基础.html.vue"]]);export{r as default};
