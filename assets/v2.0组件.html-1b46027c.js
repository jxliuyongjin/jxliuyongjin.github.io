import{_ as n,o as s,c as a,b as t}from"./app-05941657.js";const p={},e=t(`<h1 id="一、组件" tabindex="-1"><a class="header-anchor" href="#一、组件" aria-hidden="true">#</a> 一、组件</h1><h2 id="_1、组件注册" tabindex="-1"><a class="header-anchor" href="#_1、组件注册" aria-hidden="true">#</a> 1、组件注册</h2><h3 id="a、局部注册" tabindex="-1"><a class="header-anchor" href="#a、局部注册" aria-hidden="true">#</a> a、局部注册</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="b、全局注册" tabindex="-1"><a class="header-anchor" href="#b、全局注册" aria-hidden="true">#</a> b、全局注册</h3><p>修改main.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span> 
<span class="token comment">//导入代码</span>
<span class="token keyword">import</span> TestShow <span class="token keyword">from</span> <span class="token string">&quot;./components/TestShow.vue&quot;</span>
<span class="token comment">//全局注册</span>
<span class="token comment">//在所有的范围内都能使用,一般通用组件使用</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;TestShow&quot;</span><span class="token punctuation">,</span>TestShow<span class="token punctuation">)</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、样式冲突scoped" tabindex="-1"><a class="header-anchor" href="#_2、样式冲突scoped" aria-hidden="true">#</a> 2、样式冲突scoped</h2><p>默认样式是作用在全局的，某个组件的样式会影响其他组件的样式。避免这种影响，可以在样式标签里生命scoped</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>&lt;style scoped&gt;
//这里的样式只作用于当前组件，不会影响到其他组件
&lt;/stype&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="scoped-原理" tabindex="-1"><a class="header-anchor" href="#scoped-原理" aria-hidden="true">#</a> scoped:原理</h4><ol><li>给当前组件模板的所有元素，都会添加一个自定义属性 data-v-hash值</li><li>css选择器都被添加[data-v-hash值]的属性选择器</li><li>最终效果就是必须是当前组件的元素，才会有这个自定义属性，才会被这个样式作用到</li></ol><h2 id="_3、data必须是个函数" tabindex="-1"><a class="header-anchor" href="#_3、data必须是个函数" aria-hidden="true">#</a> 3、data必须是个函数</h2><p>​ 为了保证每个组件之间数据是相互独立的，所有data必须以还是得形式创建数据</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
	<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">count</span><span class="token operator">:</span><span class="token number">100</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、组件互相通讯" tabindex="-1"><a class="header-anchor" href="#_4、组件互相通讯" aria-hidden="true">#</a> 4、组件互相通讯</h2><h3 id="_4-1、父子关系" tabindex="-1"><a class="header-anchor" href="#_4-1、父子关系" aria-hidden="true">#</a> 4.1、父子关系</h3><p>​ 父组件传给子组件用props，子组件修改父组件数据需要使用$emit 通知父组件。</p><h4 id="_4-1-1、图解" tabindex="-1"><a class="header-anchor" href="#_4-1-1、图解" aria-hidden="true">#</a> 4.1.1、图解</h4><p><img src="https://atts.w3cschool.cn/attachments/image/20231108/1699408616729975.png" alt="父子组件传递数据"></p><h4 id="_4-1-2、代码" tabindex="-1"><a class="header-anchor" href="#_4-1-2、代码" aria-hidden="true">#</a> 4.1.2、代码</h4><h5 id="父组件代码" tabindex="-1"><a class="header-anchor" href="#父组件代码" aria-hidden="true">#</a> 父组件代码</h5><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span> 3px solid #000<span class="token punctuation">;</span> <span class="token property">margin</span><span class="token punctuation">:</span> 10px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    我是APP组件
    <span class="token comment">&lt;!-- 2.父组件对子组件的消息进行监听 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Son</span> <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myTitle<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@changTitle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleChange<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Son</span><span class="token punctuation">&gt;</span></span>
    //同样可以通过.async来省略到书写监听，前提是属性名不是“vulue&quot;
    //<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Son</span> <span class="token attr-name">:title.async</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myTitle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Son</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Son <span class="token keyword">from</span> <span class="token string">&#39;./components/Son.vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">myTitle</span><span class="token operator">:</span> <span class="token string">&#39;学前端，就来黑马程序员&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    Son<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 3.提供处理函数，提供逻辑</span>
    <span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token parameter">newTitle</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>myTitle <span class="token operator">=</span> newTitle
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="子组件代码" tabindex="-1"><a class="header-anchor" href="#子组件代码" aria-hidden="true">#</a> 子组件代码</h5><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>son<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span> 3px solid #000<span class="token punctuation">;</span> <span class="token property">margin</span><span class="token punctuation">:</span> 10px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    我是Son组件 {{ title }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>changeFn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>修改title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Son-Child&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> 
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">changeFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 通过this.$emit() 向父组件发送通知</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;changTitle&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;子组件请求修改数据&#39;</span><span class="token punctuation">)</span>
      <span class="token comment">// 如果父组件总使用了.async，此时只需要发送update</span>
      <span class="token comment">//this.$emit(&#39;update:changTitle&#39;,&#39;子组件请求修改数据&#39;)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="props-校验" tabindex="-1"><a class="header-anchor" href="#props-校验" aria-hidden="true">#</a> props 校验</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">{</span>
 	<span class="token literal-property property">w</span><span class="token operator">:</span>number<span class="token punctuation">,</span><span class="token comment">//类型校验</span>
 	<span class="token literal-property property">s</span><span class="token operator">:</span>String<span class="token punctuation">,</span><span class="token comment">//类型校验</span>
 	<span class="token literal-property property">m</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token comment">//完整写法 </span>
 		<span class="token literal-property property">type</span><span class="token operator">:</span>number<span class="token punctuation">,</span>
 		<span class="token comment">//required:true,//非空</span>
 		<span class="token keyword">default</span>：<span class="token number">0</span><span class="token comment">//默认值，没有传得话使用默认值</span>
 		<span class="token function">validator</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//自定义校验,如果返回得是false，报错</span>
 			<span class="token comment">//对value进行自定义校验</span>
			<span class="token keyword">return</span> value<span class="token operator">&gt;</span><span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
 	<span class="token punctuation">}</span> 
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="props和data得区别" tabindex="-1"><a class="header-anchor" href="#props和data得区别" aria-hidden="true">#</a> props和data得区别</h5><p>props是父组件提供的，不能拿直接改</p><p>data是自己得数据，可以自己修改</p><p>总结，谁的数据谁负责</p><h4 id="_4-2、非父子关系" tabindex="-1"><a class="header-anchor" href="#_4-2、非父子关系" aria-hidden="true">#</a> 4.2、非父子关系</h4><p>​ eventbus 和 provide &amp; inject</p><h5 id="_4-2-1、eventbus" tabindex="-1"><a class="header-anchor" href="#_4-2-1、eventbus" aria-hidden="true">#</a> 4.2.1、eventbus</h5><p>​ 通过 const Bus = new Vue()，创建一个中间键，提供事件管理和分发，代码如下：</p><p>第一步：创建EventBus.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> Bus  <span class="token operator">=</span>  <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Bus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步：a组件监听消息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
import Bus from &#39;../utils/EventBus&#39;
export default {
  data() {
    return {
      msg: &#39;&#39;,
    }
  },
  created() {
    Bus.$on(&#39;sendMsg&#39;, (msg) =&gt; {
      // console.log(msg)
      this.msg = msg
    })
  },
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三步：b组件发送消息消息， 发出的消息可以被多个组件监听</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
import Bus from &#39;../utils/EventBus&#39;
export default {
  methods: {
    sendMsgFn() {
      Bus.$emit(&#39;sendMsg&#39;, &#39;今天天气不错，适合旅游&#39;)
    },
  },
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-2-2、provide-inject" tabindex="-1"><a class="header-anchor" href="#_4-2-2、provide-inject" aria-hidden="true">#</a> 4.2.2、provide &amp; inject</h5><p>作用：跨层级共享数据，父组件中provide提供的数据，其所有后代组件都可以通过inject拿到</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>/////////////////////父组件代码：
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> SonA <span class="token keyword">from</span> <span class="token string">&#39;./components/SonA.vue&#39;</span>
<span class="token keyword">import</span> SonB <span class="token keyword">from</span> <span class="token string">&#39;./components/SonB.vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">provide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token comment">// 简单类型 是非响应式的</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>color<span class="token punctuation">,</span>
      <span class="token comment">// 复杂类型 是响应式的</span>
      <span class="token literal-property property">userInfo</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>userInfo<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;pink&#39;</span><span class="token punctuation">,</span> <span class="token comment">//简单类型是非响应式的，数据修改，其子孙并不会立马显示刷新</span>
      <span class="token literal-property property">userInfo</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//复杂类型是相应式的</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;zs&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>userInfo<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;ls&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    SonA<span class="token punctuation">,</span>
    SonB<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span> 
/////////////////////子组件代码
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> GrandSon <span class="token keyword">from</span> <span class="token string">&#39;../components/GrandSon.vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>
    GrandSon
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

////////////////////////孙子组件代码
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>grandSon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    我是GrandSon
    {{ color }} -{{ userInfo.name }} -{{ userInfo.age }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;color&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;userInfo&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.grandSon</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 3px solid #000<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.3、复杂关系</p><p>​ 通用解决方案：Vuex</p><h2 id="_5、ref、-refs-和nexttick" tabindex="-1"><a class="header-anchor" href="#_5、ref、-refs-和nexttick" aria-hidden="true">#</a> 5、ref、$refs，和nextTick</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isShowEdit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>editValue<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inp<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>确认<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-else</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{ title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>editFn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>编辑<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;大标题&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">isShowEdit</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">editValue</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">editFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 1.显示文本框</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>isShowEdit <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token comment">// 2.让文本框聚焦 （会等dom更新完之后 立马执行nextTick中的回调函数）</span>
       <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
         console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>inp<span class="token punctuation">)</span>
         <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>inp<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
       <span class="token punctuation">}</span><span class="token punctuation">)</span> 
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,48),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","v2.0组件.html.vue"]]);export{r as default};
