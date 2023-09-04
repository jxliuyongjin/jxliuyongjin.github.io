import{_ as e,o as a,c as i,b as s}from"./app-71cdf572.js";const d={},n=s(`<h3 id="一、tomcat安装" tabindex="-1"><a class="header-anchor" href="#一、tomcat安装" aria-hidden="true">#</a> 一、tomcat安装</h3><h4 id="_1、安装" tabindex="-1"><a class="header-anchor" href="#_1、安装" aria-hidden="true">#</a> 1、安装</h4><p>直接安装，如果本地没有会自动下载官网的镜像</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker run -d -p 8080:8080 --name t1 tomcat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2、测试" tabindex="-1"><a class="header-anchor" href="#_2、测试" aria-hidden="true">#</a> 2、测试</h4><p>访问：http://1.116.82.74:8080/地址，发现404的报错</p><p>2.1、查找原因</p><p>进入tomcat发现webapps里面是空的，这是因为tomcat新版本种默认是空的，只需要把wabapps.dist解压出来就行了</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rm -rf webapps

mv webapps.dist webapps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样操作一下就可以访问了</p><h3 id="二、mysql安装" tabindex="-1"><a class="header-anchor" href="#二、mysql安装" aria-hidden="true">#</a> 二、mysql安装</h3><h4 id="_1、拉取mysql5-7" tabindex="-1"><a class="header-anchor" href="#_1、拉取mysql5-7" aria-hidden="true">#</a> 1、拉取mysql5.7</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull mysql:5.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2、生成容器" tabindex="-1"><a class="header-anchor" href="#_2、生成容器" aria-hidden="true">#</a> 2、生成容器</h4><div class="language-console line-numbers-mode" data-ext="console"><pre class="language-console"><code>//使用数据卷备份数据库
docker run -d -p 3306:3306 --name=sql \\
-v /datacache/mysql/log:/var/log/mysql \\
-v /datacache/mysql/data:/var/lib/mysql \\
-v /datacache/mysql/conf:/etc/mysql/conf.d \\
--privileged=true \\
-e MYSQL_ROOT_PASSWORD=123456 mysql

//执行mysql
[root@VM-12-17-centos ~]# docker exec -it 9b40e4f025b2 /bin/bash
//进入sql
root@9b40e4f025b2:/# mysql -uroot -p
Enter password:  
mysql&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在可以用navicat连接了</p><p><strong>注意这里使用数据卷，对mysql进行备份，容器删除了。数据也不会丢失</strong></p><h4 id="_3、mysql配置备份" tabindex="-1"><a class="header-anchor" href="#_3、mysql配置备份" aria-hidden="true">#</a> 3、mysql配置备份</h4><h5 id="_3-1、问题" tabindex="-1"><a class="header-anchor" href="#_3-1、问题" aria-hidden="true">#</a> 3.1、问题</h5><p>默认图情况下，mysql字符集并不是utf8的，所以如果插入字段，就会中文报错问题</p><p>比如：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>INSERT INTO user VALUES(2,&#39;王五&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>会报错：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>&gt; 1366 - Incorrect string value: &#39;\\xE7\\x8E\\x8B\\xE4\\xBA\\x94&#39; for column &#39;name&#39; at row 1
&gt; 时间: 0.024s 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>输入</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SHOW VARIABLES LIKE &#39;character%&#39;;

//输出结果
character_set_client	utf8mb4
character_set_connection	utf8mb4
character_set_database	latin1
character_set_filesystem	binary
character_set_results	utf8mb4
character_set_server	latin1
character_set_system	utf8
character_sets_dir	/usr/share/mysql/charsets/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出character_set_database是latin1不是utf8</p><h5 id="_3-2、解决方法" tabindex="-1"><a class="header-anchor" href="#_3-2、解决方法" aria-hidden="true">#</a> 3.2、解决方法</h5><p>在数据卷里添加配置文件my.cn文件</p><p>填写如下配置内容：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>[client]
default_character_set=utf8
[mysqld]
collation_server=utf8_general_ci
character_set_server=utf8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启一下docker mysql容器就行了</p><p>这样mysql的字符集也备份了，要是无意中删除了docker容器，再次安装，可以还原原来的配置</p><h5 id="_3-3、测试" tabindex="-1"><a class="header-anchor" href="#_3-3、测试" aria-hidden="true">#</a> 3.3、测试</h5><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SHOW VARIABLES LIKE &#39;character%&#39;;

//输出结果
character_set_client	utf8mb4
character_set_connection	utf8mb4
character_set_database	utf8mb4
character_set_filesystem	binary
character_set_results	utf8mb4
character_set_server	utf8mb4
character_set_system	utf8mb3
character_sets_dir	/usr/share/mysql-8.0/charsets/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三、redis安装" tabindex="-1"><a class="header-anchor" href="#三、redis安装" aria-hidden="true">#</a> 三、redis安装</h3><h4 id="_1、配置数据卷" tabindex="-1"><a class="header-anchor" href="#_1、配置数据卷" aria-hidden="true">#</a> 1、配置数据卷</h4><p>a、在宿主机上创建文件夹/datacache/redis</p><p>b、redis文件夹下面创建上传redis.conf文件，此文件可以从redis官网下载相应版本的redis.conf，查看当前redis当前版本的命令是</p><div class="language-redis line-numbers-mode" data-ext="redis"><pre class="language-redis"><code>//先随随便创建一个redis容器，之后可以删除了
docker run --name some-redis -d redis
//进入到redis
docker exec -it &lt;容器ID或名称&gt; redis-cli
//查看版本信息
info server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、修改配置信息" tabindex="-1"><a class="header-anchor" href="#_2、修改配置信息" aria-hidden="true">#</a> 2、修改配置信息</h4><p>打开redis.conf，vim redis.conf</p><p>2.1、允许redis外地连接，所以需要注释掉 bind 127.0.0.1 -::1 -&gt;# bind 127.0.0.1 -::1</p><p>2.2、daemonize no 确保是no，否则会后docker run 里面的-d，发生冲突</p><p>2.3、protected-mode yes 也设置成no</p><h4 id="_3、安装最新版本" tabindex="-1"><a class="header-anchor" href="#_3、安装最新版本" aria-hidden="true">#</a> 3、安装最新版本</h4><p>docker run -d -p 6379:6379 --name=rds --privileged=true -v /datacache/redis/redis.conf:/etc/redis/redis.conf -v /datacache/redis/data:/data redis redis-server /etc/redis/redis.conf</p><h4 id="_4、查看是否启动成功" tabindex="-1"><a class="header-anchor" href="#_4、查看是否启动成功" aria-hidden="true">#</a> 4、查看是否启动成功</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//查看是否成功启动
docker ps  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5、检验是否成功使用数据卷上的配置" tabindex="-1"><a class="header-anchor" href="#_5、检验是否成功使用数据卷上的配置" aria-hidden="true">#</a> 5、检验是否成功使用数据卷上的配置</h4><div class="language-redis line-numbers-mode" data-ext="redis"><pre class="language-redis"><code>//进入到redis
docker exec -it rds redis-cli

//查询第16条信息,默认配置里database是16
127.0.0.1:6379[15]&gt; select 15
OK

//修改宿主机中的reids.conf，
//使其里面的database的数值为10，重启再测试
127.0.0.1:6379&gt; select 15
(error) ERR DB index is out of range

如上所示，修改起到了效果，说明配置的数据卷设置redis.conf是有效的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,51),r=[n];function l(c,t){return a(),i("div",null,r)}const m=e(d,[["render",l],["__file","4、安装软件.html.vue"]]);export{m as default};
