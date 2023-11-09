import{_ as s,o as a,c as t,a as e,t as p,b as n}from"./app-05941657.js";const l={},o=n(`<h1 id="一、安装" tabindex="-1"><a class="header-anchor" href="#一、安装" aria-hidden="true">#</a> 一、安装</h1><h2 id="_1、-安装" tabindex="-1"><a class="header-anchor" href="#_1、-安装" aria-hidden="true">#</a> 1、 安装</h2><ol><li>全局安装：yarn global add @vue/cli</li><li>查看vue版本：vue --version</li><li>创建项目：vue create project-name</li><li>启动项目：yarn serve / npm run serve</li></ol><h2 id="_2、环境配置" tabindex="-1"><a class="header-anchor" href="#_2、环境配置" aria-hidden="true">#</a> 2、环境配置</h2><ul><li><p>安装vetur</p></li><li><p>支持less</p><ol><li><p>给style加上lang=&quot;less&quot;</p></li><li><p>安装依赖包 less less-loader</p><p>yarn add less less-loader -D (开发依赖)</p></li></ol></li><li><p>输入&lt;v，就会提示自动补充vue结构代码</p></li><li><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TestShow</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TestShow</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">  
<span class="token keyword">import</span> TestShow <span class="token keyword">from</span> <span class="token string">&quot;./components/TestShow.vue&quot;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>
    TestShow
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h1 id="二、生命周期" tabindex="-1"><a class="header-anchor" href="#二、生命周期" aria-hidden="true">#</a> 二、生命周期</h1><p>视图</p><p><img src="https://atts.w3cschool.cn/attachments/image/20231108/1699408477948257.png" alt="生命周期图"></p><p>代码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>h1<span class="token punctuation">{</span><span class="token punctuation">{</span>title<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
 <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
 	<span class="token literal-property property">count</span><span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">,</span>
 	<span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&quot;计数器&quot;</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;beforeCreate 相应式数据准备好之前&quot;</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token comment">//此时的count的值是undefined</span>
 <span class="token punctuation">}</span>，
 <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;created 响应式准备好之后&quot;</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token comment">//此时的count的值是100</span>
 <span class="token punctuation">}</span>，
 <span class="token function">beforeMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;mount 模板渲染之前&quot;</span><span class="token punctuation">,</span>document<span class="token punctuation">.</span><span class="token function">querySelect</span><span class="token punctuation">(</span>&quot;h1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">//此时打印的是 {{title}}</span>
 <span class="token punctuation">}</span>，
 <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;mounted 模板渲染人之后&quot;</span><span class="token punctuation">,</span>document<span class="token punctuation">.</span><span class="token function">querySelect</span><span class="token punctuation">(</span><span class="token string">&quot;h1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">//此时打印的是 &quot;计数器&quot;</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token function">beforeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;数据发生变化，更新之前&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token function">updated</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;数据发生变化，更新之后&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>，
 <span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;卸载之前，可以清除一些资源占用，防内存泄漏&quot;</span><span class="token punctuation">)</span><span class="token comment">//app.$destroy()模拟卸载</span>
 <span class="token punctuation">}</span>，
 <span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;卸载之前&quot;</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="三、基础" tabindex="-1"><a class="header-anchor" href="#三、基础" aria-hidden="true">#</a> 三、基础</h1><h2 id="_1、vue指令" tabindex="-1"><a class="header-anchor" href="#_1、vue指令" aria-hidden="true">#</a> 1、VUE指令</h2><p>vue会根据不同的【指令】，针对标签实现不同的【功能】</p><p>指令：带有<strong>v-前缀</strong>的 特殊 标签属性</p><h3 id="_1-1、v-html" tabindex="-1"><a class="header-anchor" href="#_1-1、v-html" aria-hidden="true">#</a> 1.1、v-html</h3><p>插入一段html代码</p><h3 id="_1-2、v-show-v-if" tabindex="-1"><a class="header-anchor" href="#_1-2、v-show-v-if" aria-hidden="true">#</a> 1.2、v-show,v-if</h3><p>前者隐藏，通过display:none控制隐藏，后者直接不创建。</p><h3 id="_1-3、v-if-v-else-v-else-if" tabindex="-1"><a class="header-anchor" href="#_1-3、v-if-v-else-v-else-if" aria-hidden="true">#</a> 1.3、v-if,v-else,v-else-if</h3><p>两者中间不了能有别的标签，要紧挨着</p><h3 id="_1-4、v-on" tabindex="-1"><a class="header-anchor" href="#_1-4、v-on" aria-hidden="true">#</a> 1.4、v-on</h3><p>a、v-on:事件名=&quot;表达式&quot;</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">v-on:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>count++<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>b、v-on:事件名=&quot;函数名称&quot;</p><p><strong>c、@标签代替v-on:</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>count++<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-5、v-bind" tabindex="-1"><a class="header-anchor" href="#_1-5、v-bind" aria-hidden="true">#</a> 1.5、v-bind</h3><h4 id="a、基础用法" tabindex="-1"><a class="header-anchor" href="#a、基础用法" aria-hidden="true">#</a> a、基础用法</h4>`,28),c=n(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>url<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

简写方式
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>url<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="b、v-bind对class的操作" tabindex="-1"><a class="header-anchor" href="#b、v-bind对class的操作" aria-hidden="true">#</a> b、v-bind对class的操作</h4><p>语法：:class =&quot;对象/数组&quot;</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>1、通过控制对象的布尔值来实现某个class是否起作用
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{class1:ture,class2:false}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

2、通过设置数组，使得数组中所有累，都会添加到盒子桑，本质就是一个class列表
可以通过修改数组来控制样式的作用
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[class1,class2,class3]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

3、直接修改行内样式,这种方式很方便直接修改某一个属性
&lt;div class=&quot;box&quot; :style=&quot;{width:&quot;20px&quot;,height:&quot;20px&quot;,&quot;backgrround-color&quot;:&quot;green&quot;}&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-6、v-for" tabindex="-1"><a class="header-anchor" href="#_1-6、v-for" aria-hidden="true">#</a> 1.6、v-for</h3><p>v-for=&quot;(item,index) in 数组&quot;</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item,index) in list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  	{{item}}--{{index}}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
或者
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{item}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>

////////for中的Key
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in list<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{item.name}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
key没有key,for会默认原地修改元素，（就地复用）

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-7、v-model" tabindex="-1"><a class="header-anchor" href="#_1-7、v-model" aria-hidden="true">#</a> 1.7、v-model</h3><p>双向数据绑定,完成试图修改数据</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>username<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>login<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button?</span><span class="token punctuation">&gt;</span></span>

const app = new Vue({
el:&quot;#app&quot;
data:{
	username:&quot;jx123&quot;
}
methods:{
	login(){
		console.log(this.username)	
	}
}
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原理：v-model其实是个语法糖，其基础实现代码是</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code> <span class="token comment">&lt;!-- v-model的底层其实就是：value和 @input的简写 --&gt;</span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>msg2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>msg2 = $event.target.value<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、指令修饰符" tabindex="-1"><a class="header-anchor" href="#_2、指令修饰符" aria-hidden="true">#</a> 2、指令修饰符</h2><p>介绍：通过&quot;.&quot;指明一些指令<strong>后缀</strong>，不同后缀封装了不同的处理操作 ---&gt;简化代码</p><h3 id="_2-1、按键修饰符" tabindex="-1"><a class="header-anchor" href="#_2-1、按键修饰符" aria-hidden="true">#</a> 2.1、按键修饰符</h3><p>@keyup.enter -&gt;键盘回车监听</p><h3 id="_2-2、v-model修饰符" tabindex="-1"><a class="header-anchor" href="#_2-2、v-model修饰符" aria-hidden="true">#</a> 2.2、v-model修饰符</h3><p>v-model.trim -&gt;去除首尾空格</p><p>v-model.number -&gt;转数字</p><h3 id="_2-3、事件修饰符" tabindex="-1"><a class="header-anchor" href="#_2-3、事件修饰符" aria-hidden="true">#</a> 2.3、事件修饰符</h3><p>@事件名.stop -&gt;阻止冒泡</p><p>@事件名.prevent -&gt;阻止默认行为</p><h2 id="_3、计算属性" tabindex="-1"><a class="header-anchor" href="#_3、计算属性" aria-hidden="true">#</a> 3、计算属性</h2><p>computed:本身是一个属性,基于现有的数据，计算出来新的属性。依赖的数据发生变化，自动重新计算。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
  总数：{{totalCount}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
const app = new Vuew({
	el:&quot;#app&quot;
	data:{
		list:[
			{id:1,name:&quot;篮球&quot;，num:1},
			{id:2,name:&quot;玩具&quot;，num:2},
			{id:3,name:&quot;铅笔&quot;，num:5},
		]
	},
	//计算属性
	computed:{
		totalCount(){
			let total = this.list.reduce((sum,item)=&gt;sum+item,0)
			return total;
		}
		//或者设置
    totalCount:{
				get(){
          let total = this.list.reduce((sum,item)=&gt;sum+item,0)
          return total;
				}，
				set(vaue){
					consloe.log(value);
				}
      }	
	}
	
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>computed和methods方法的区别</p><ul><li><p>作为属性，直接使用，this.计算属性，methods则需要this.方法名()</p></li><li><p>computed具有缓存功能，多出调用，之执行一次，除非依赖的数据发生变化，即使依赖数据发生变化也只执行一次，功能类似一个属性。</p></li></ul><h2 id="_4、wath监听器" tabindex="-1"><a class="header-anchor" href="#_4、wath监听器" aria-hidden="true">#</a> 4、wath监听器</h2><p>watch监听某个属性的变化</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>words.word<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>textarrea</span><span class="token punctuation">&gt;</span></span>
const app = new Vuew({
	el:&quot;#app&quot;
	data:{
		words:{
			word:&quot;&quot;
		}
	},
	//监听某个属性
	watch:{
		words(newValue,oldValue){ 				
		}
	}
	//如果监听某个子属性
	“words.word&quot; (newValue){
		conlose.log(&quot;变化了&quot;，newVlaue)
	}
	//如果想监听对象里面的所有属性，使用完整写法
	words:{
		deep:true，//深度监视
		imme  ate:true,//一进来就执行一次
		handler(newValue){
			//对象里面让人很属性被欸修改，都很执行
			console.log*(&quot;对象比修改了&quot;)
		}
	}
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5、自定义指令" tabindex="-1"><a class="header-anchor" href="#_5、自定义指令" aria-hidden="true">#</a> 5、自定义指令</h2><h3 id="_5-1、全局注册" tabindex="-1"><a class="header-anchor" href="#_5-1、全局注册" aria-hidden="true">#</a> 5.1、全局注册</h3><p>在main.js中添加如下代码</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>input v<span class="token operator">-</span>focus ref<span class="token operator">=</span><span class="token string">&quot;inp&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span><span class="token operator">&gt;</span>
Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;focus&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// inserted 会在 指令所在的元素，被插入到页面中时触发</span>
  <span class="token function">inserted</span> <span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// el 就是指令所绑定的元素</span>
    <span class="token comment">// console.log(el);</span>
    el<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2、局部注册" tabindex="-1"><a class="header-anchor" href="#_5-2、局部注册" aria-hidden="true">#</a> 5.2、局部注册</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-focus</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"> 
  <span class="token comment">// 2. 局部注册指令</span>
  <span class="token literal-property property">directives</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 指令名：指令的配置项</span>
    <span class="token literal-property property">focus</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">inserted</span> <span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        el<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3、值设置" tabindex="-1"><a class="header-anchor" href="#_5-3、值设置" aria-hidden="true">#</a> 5.3、值设置</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">v-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>指令的值1测试<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">v-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>指令的值2测试<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">color1</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">color2</span><span class="token operator">:</span> <span class="token string">&#39;orange&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">directives</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 1. inserted 提供的是元素被添加到页面中时的逻辑</span>
      <span class="token function">inserted</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// console.log(el, binding.value);</span>
        <span class="token comment">// binding.value 就是指令的值</span>
        el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>color <span class="token operator">=</span> binding<span class="token punctuation">.</span>value
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 2. update 指令的值修改的时候触发，提供值变化后，dom更新的逻辑</span>
      <span class="token function">update</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;指令的值修改了&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>color <span class="token operator">=</span> binding<span class="token punctuation">.</span>value
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38);function i(u,d){return a(),t("div",null,[o,e("p",null,p()+"插值不能用在标签属性中，v-bind:就提供了相应的功能",1),c])}const v=s(l,[["render",i],["__file","v2.0基础.html.vue"]]);export{v as default};
