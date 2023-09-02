import{_ as a,o as s,c as n,b as t}from"./app-904177cf.js";const p={},e=t(`<h3 id="_1、安装mybatisx" tabindex="-1"><a class="header-anchor" href="#_1、安装mybatisx" aria-hidden="true">#</a> 1、安装MyBatisX</h3><p>在IntelliJ IDEA 打开File目录下的Settings，在Plugins里面搜索MyBatisX，安装MyBatisX</p><p><img src="https://atts.w3cschool.cn/attachments/image/20230828/1693185891802465.png" alt="myBatisx-1" title="第一步"></p><h3 id="_2、配置datebase" tabindex="-1"><a class="header-anchor" href="#_2、配置datebase" aria-hidden="true">#</a> 2、配置Datebase</h3><h4 id="_2-1、连接msyql" tabindex="-1"><a class="header-anchor" href="#_2-1、连接msyql" aria-hidden="true">#</a> 2.1、连接msyql</h4><h5 id="_2-1-1、打开datebase" tabindex="-1"><a class="header-anchor" href="#_2-1-1、打开datebase" aria-hidden="true">#</a> 2.1.1、打开datebase</h5><p><img src="https://atts.w3cschool.cn/attachments/image/20230828/1693185906987638.png" alt="" title="第二步"></p><h5 id="_2-1-2、配置database" tabindex="-1"><a class="header-anchor" href="#_2-1-2、配置database" aria-hidden="true">#</a> 2.1.2、配置database</h5><p><img src="https://atts.w3cschool.cn/attachments/image/20230828/1693185984426229.png" alt="" title="第三步"></p><h5 id="_2-1-3、配置mysql" tabindex="-1"><a class="header-anchor" href="#_2-1-3、配置mysql" aria-hidden="true">#</a> 2.1.3、配置mysql</h5><p><img src="https://atts.w3cschool.cn/attachments/image/20230828/1693186000825972.png" alt="" title="第四步"></p><h5 id="_2-1-4、测试连接数据库并下载驱动" tabindex="-1"><a class="header-anchor" href="#_2-1-4、测试连接数据库并下载驱动" aria-hidden="true">#</a> 2.1.4、测试连接数据库并下载驱动</h5><p><img src="https://atts.w3cschool.cn/attachments/image/20230828/1693186023831893.png" alt="" title="第五步"></p><h5 id="_2-1-5、数据库连接成功" tabindex="-1"><a class="header-anchor" href="#_2-1-5、数据库连接成功" aria-hidden="true">#</a> 2.1.5、数据库连接成功</h5><p><img src="https://atts.w3cschool.cn/attachments/image/20230828/1693186045255035.png" alt="" title="第六步"></p><h4 id="_2-2配置代码生成器" tabindex="-1"><a class="header-anchor" href="#_2-2配置代码生成器" aria-hidden="true">#</a> 2.2配置代码生成器</h4><h5 id="_2-2-1、打开生成器" tabindex="-1"><a class="header-anchor" href="#_2-2-1、打开生成器" aria-hidden="true">#</a> 2.2.1、打开生成器</h5><p>选中shop数据库中的一个表，右击会弹出生成器配置</p><p><img src="https://atts.w3cschool.cn/attachments/image/20230828/1693186082956808.png" alt="" title="第八步"></p><h5 id="_2-2-2、配置生成器" tabindex="-1"><a class="header-anchor" href="#_2-2-2、配置生成器" aria-hidden="true">#</a> 2.2.2、配置生成器</h5><p><img src="https://atts.w3cschool.cn/attachments/image/20230828/1693186781977541.png" alt=""></p><h5 id="_2-2-3、进一步配置" tabindex="-1"><a class="header-anchor" href="#_2-2-3、进一步配置" aria-hidden="true">#</a> 2.2.3、进一步配置</h5><p>上一步点击next</p><p><img src="https://atts.w3cschool.cn/attachments/image/20230828/1693187364183162.png" alt="" title="第十步"></p><h5 id="_2-2-4、生成代码" tabindex="-1"><a class="header-anchor" href="#_2-2-4、生成代码" aria-hidden="true">#</a> 2.2.4、生成代码</h5><p>点击上一步的第6步，就会根据数据库的表，生成相应的代码</p><p><img src="https://atts.w3cschool.cn/attachments/image/20230828/1693187984865574.png" alt="" title="第十一步"></p><h3 id="_3、使用mybatisx" tabindex="-1"><a class="header-anchor" href="#_3、使用mybatisx" aria-hidden="true">#</a> 3、使用MyBatisX</h3><p>mybatisx使得自定义操作数据库非常简单</p><h4 id="_3-1、添加一个方法" tabindex="-1"><a class="header-anchor" href="#_3-1、添加一个方法" aria-hidden="true">#</a> 3.1、添加一个方法</h4><p>a、在UserMapper里面添加一个方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>insertSelective
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>b、alt+enter键会弹出mybatisx得生成代码选项，选择Generate Mybatis Sql，就会在UserMapper自动添加相应得代码</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>insert</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>insertSelective<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    insert into t_user
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>trim</span> <span class="token attr-name">prefix</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(<span class="token punctuation">&quot;</span></span> <span class="token attr-name">suffix</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">suffixOverrides</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>,<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id != null<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>id,<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userName != null<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>user_name,<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>age != null<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>age,<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email != null<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>email,<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isDeleted != null<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>is_deleted,<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sex != null<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>sex,<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>trim</span><span class="token punctuation">&gt;</span></span>
    values
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>trim</span> <span class="token attr-name">prefix</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(<span class="token punctuation">&quot;</span></span> <span class="token attr-name">suffix</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">suffixOverrides</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>,<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id != null<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>#{id,jdbcType=INTEGER},<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userName != null<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>#{userName,jdbcType=VARCHAR},<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>age != null<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>#{age,jdbcType=INTEGER},<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email != null<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>#{email,jdbcType=VARCHAR},<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isDeleted != null<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>#{isDeleted,jdbcType=INTEGER},<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sex != null<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>#{sex,jdbcType=INTEGER},<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>trim</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>insert</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2、生成规律" tabindex="-1"><a class="header-anchor" href="#_3-2、生成规律" aria-hidden="true">#</a> 3.2、生成规律</h4><p>mybatisx是根据方法名来生成sql代码得，比如：selectAllByIdOrderByAge，按alt+enter，就会自动在mapper里面生成相应得代码</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectAllByIdOrderByAge<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>BaseResultMap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        select
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span> <span class="token attr-name">refid</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Base_Column_List<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        from t_user
        where
        id = #{id,jdbcType=NUMERIC}
        order by age
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37),c=[e];function l(o,u){return s(),n("div",null,c)}const r=a(p,[["render",l],["__file","5.MyBatisx.html.vue"]]);export{r as default};
