import{_ as s,o as e,c as n,b as a}from"./app-09fca0e8.js";const i={},l=a(`<h3 id="一、配置修改" tabindex="-1"><a class="header-anchor" href="#一、配置修改" aria-hidden="true">#</a> 一、配置修改</h3><h4 id="_1、主服务器配置" tabindex="-1"><a class="header-anchor" href="#_1、主服务器配置" aria-hidden="true">#</a> 1、主服务器配置</h4><h5 id="_1-1、创建实例" tabindex="-1"><a class="header-anchor" href="#_1-1、创建实例" aria-hidden="true">#</a> 1.1、创建实例</h5><p>//使用数据卷备份数据库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d -p 3306:3306 --name=sql-master \\
-v /datacache/mysql-master/log:/var/log/mysql \\
-v /datacache/mysql-master/data:/var/lib/mysql \\
-v /datacache/mysql-master/conf:/etc/mysql/conf.d \\
--privileged=true \\
-e MYSQL_ROOT_PASSWORD=Real@123456 mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_1-2、修改配置文件" tabindex="-1"><a class="header-anchor" href="#_1-2、修改配置文件" aria-hidden="true">#</a> 1.2、修改配置文件</h5><p>修改宿主机上的/datacache/mysql/conf/my.cnf文件，使得内容如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token punctuation">[</span>client<span class="token punctuation">]</span>
default_character_set<span class="token operator">=</span>utf8
<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
collation_server<span class="token operator">=</span>utf8_general_ci
character_set_server<span class="token operator">=</span>utf8
<span class="token comment">###设置server_id,同一局域网中需要唯一</span>
server_id<span class="token operator">=</span><span class="token number">101</span>
read_only<span class="token operator">=</span><span class="token number">0</span>
<span class="token comment">###指定不需要同步的数据库名称</span>
binlog<span class="token operator">-</span><span class="token keyword">ignore</span><span class="token operator">-</span>db<span class="token operator">=</span>mysql
<span class="token comment">###开启二进制日志功能</span>
<span class="token comment">##log-bin=mall-mysql-bin</span>
<span class="token comment">###设置二进制日子使用的内存大小（事务）</span>
<span class="token comment">##binlog_cache_size=1M</span>
<span class="token comment">###设置使用的二进制日志格式</span>
<span class="token comment">##binlog_format=mixed</span>
<span class="token comment">###二进制日志过期清理时间，默认为0，表示不自动清理</span>
<span class="token comment">##expire_logs_days=7</span>
<span class="token comment">##跳过主从赋值中遇到的所有错误或者指定类型的错误，避免slave端复制中断。</span>
<span class="token comment">##如：1062错误是指一些主键重复，1032错误是指主从数据库不一致</span>
<span class="token comment">##slave_skip_error=1062</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启mysql容器，docker restart sql-master</p><h5 id="_1-3、创建数据的同步用户" tabindex="-1"><a class="header-anchor" href="#_1-3、创建数据的同步用户" aria-hidden="true">#</a> 1.3、创建数据的同步用户</h5><p>给主机创建数据同步用户</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">//进入mysql容器</span>
docker <span class="token keyword">exec</span> <span class="token operator">-</span>it <span class="token keyword">sql</span><span class="token operator">-</span>master <span class="token operator">/</span>bin<span class="token operator">/</span>bash
<span class="token comment">//进入mysql</span>
mysql <span class="token operator">-</span>uroot <span class="token operator">-</span>p<span class="token punctuation">;</span>
<span class="token comment">//创建用户</span>
<span class="token keyword">CREATE</span> <span class="token keyword">USER</span> <span class="token string">&#39;slave&#39;</span><span class="token variable">@&#39;%&#39;</span> IDENTIFIED <span class="token keyword">WITH</span> mysql_native_password <span class="token keyword">BY</span> <span class="token string">&#39;Real@123456&#39;</span><span class="token punctuation">;</span>
<span class="token comment">//给slave用户授权</span>
<span class="token keyword">GRANT</span> <span class="token keyword">REPLICATION</span> SLAVE <span class="token keyword">ON</span> <span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">TO</span> <span class="token string">&#39;slave&#39;</span><span class="token variable">@&#39;%&#39;</span><span class="token punctuation">;</span>

<span class="token comment">//查看日志文件位置</span>
mysql<span class="token operator">&gt;</span> <span class="token keyword">show</span> master <span class="token keyword">status</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">---------------+----------+--------------+------------------+-------------------+</span>
<span class="token operator">|</span> <span class="token keyword">File</span>          <span class="token operator">|</span> Position <span class="token operator">|</span> Binlog_Do_DB <span class="token operator">|</span> Binlog_Ignore_DB <span class="token operator">|</span> Executed_Gtid_Set <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------------+----------+--------------+------------------+-------------------+</span>
<span class="token operator">|</span> binlog<span class="token punctuation">.</span><span class="token number">000005</span> <span class="token operator">|</span>      <span class="token number">711</span> <span class="token operator">|</span>              <span class="token operator">|</span> mysql            <span class="token operator">|</span>                   <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------------+----------+--------------+------------------+-------------------+</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、从服务器配置" tabindex="-1"><a class="header-anchor" href="#_2、从服务器配置" aria-hidden="true">#</a> 2、从服务器配置</h4><h5 id="_2-1、创建从服务器" tabindex="-1"><a class="header-anchor" href="#_2-1、创建从服务器" aria-hidden="true">#</a> 2.1、创建从服务器</h5><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>//创建从服务器，注意端口号改成3308，容器名字，数据卷地址都要修改的
docker run -d -p 3308:3306 --name=sql-slave \\
-v /datacache/mysql-slave/log:/var/log/mysql \\
-v /datacache/mysql-slave/data:/var/lib/mysql \\
-v /datacache/mysql-slave/conf:/etc/mysql/conf.d \\
--privileged=true \\
-e MYSQL_ROOT_PASSWORD=Real@123456 mysql

//查看是否运行成功
docker ps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-2、修改从服务器配置" tabindex="-1"><a class="header-anchor" href="#_2-2、修改从服务器配置" aria-hidden="true">#</a> 2.2、修改从服务器配置</h5><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>//进入到宿主机中从服务器的数据卷的配置中
cd /datacache/mysql-slave/conf
//添加配置文件
vim my.cnf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在配置文件中粘贴一下内容</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>[client]
default_character_set=utf8
[mysqld]
collation_server=utf8_general_ci
character_set_server=utf8
###设置从服务器的server_id,同一局域网中需要唯一
server_id=102
###指定不需要同步的数据库名称
binlog-ignore-db=mysql
##slave设置为只读（具有super权限的用户除外）
read_only=1
###开启二进制日志功能,以备slave作为其他数据库实例的主机时使用
##log-bin=mall-mysql-slave-bin
###设置二进制日子使用的内存大小（事务）
##binlog_cache_size=1M
###设置使用的二进制日志格式
##binlog_format=mixed
###二进制日志过期清理时间，默认为0，表示不自动清理
##expire_logs_days=7
##跳过主从赋值中遇到的所有错误或者指定类型的错误，避免slave端复制中断。
##如：1062错误是指一些主键重复，1032错误是指主从数据库不一致
##slave_skip_error=1062

##relay_log配置中继日志
##relay_log=mall-mysql-relay-bin
##slave将复制事件写入自己的二进制日志
##log_slave_updates=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-4、从服务器中配置主从复制" tabindex="-1"><a class="header-anchor" href="#_2-4、从服务器中配置主从复制" aria-hidden="true">#</a> 2.4、从服务器中配置主从复制</h5><p>进入从服务器，并配置主从关系</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker exec -it sql-slave /bin/bash

mysql -uroot -p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mysql8.0.23之前执行下列</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>change master to master_host=&#39;主机ip&#39;, 
master_user=&#39;slave&#39;, master_password=&#39;123456&#39;, 
master_port=3306, master_log_file=&#39;mall-mysql-bin.0000004&#39;,
master_log_pos=167, master_connect_retry=30;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mysql8.0.23之后版本执行下列</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>change replication source to source_host=&#39;1.116.82.74&#39;,
source_user=&#39;slave&#39;, source_password=&#39;Real@123456&#39;,
source_port=3306, source_log_file=&#39;binlog.000003&#39;,
source_log_pos=156,  source_connect_retry=30;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-5、从服务器中查看主从同步状态" tabindex="-1"><a class="header-anchor" href="#_2-5、从服务器中查看主从同步状态" aria-hidden="true">#</a> 2.5、从服务器中查看主从同步状态</h5><p>使用 show slave status \\G:命令</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; show slave status \\G:
*************************** 1. row ***************************
               Slave_IO_State: 
                  Master_Host: 1.116.82.74
                  Master_User: slave
                  Master_Port: 3306
                Connect_Retry: 30
              Master_Log_File: binlog.000004
          Read_Master_Log_Pos: 156
               Relay_Log_File: 9de67dc2c9e0-relay-bin.000001
                Relay_Log_Pos: 4
        Relay_Master_Log_File: binlog.000004
             Slave_IO_Running: No
            Slave_SQL_Running: No
              Replicate_Do_DB: 
          Replicate_Ignore_DB: 
           Replicate_Do_Table: 
       Replicate_Ignore_Table: 
      Replicate_Wild_Do_Table:  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：Slave_IO_Running和Slave_SQL_Running都显示no。需要执行下一步</p><h5 id="_2-6、在从服务器中开启主从同步" tabindex="-1"><a class="header-anchor" href="#_2-6、在从服务器中开启主从同步" aria-hidden="true">#</a> 2.6、在从服务器中开启主从同步</h5><p>start replica;//或者start slave(8.0.22版本之前的)</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; start replica;
Query OK, 0 rows affected (0.05 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-7、测试" tabindex="-1"><a class="header-anchor" href="#_2-7、测试" aria-hidden="true">#</a> 2.7、测试</h5><h6 id="_2-7-1、查看数据库状态是否已经同步" tabindex="-1"><a class="header-anchor" href="#_2-7-1、查看数据库状态是否已经同步" aria-hidden="true">#</a> 2.7.1、查看数据库状态是否已经同步</h6><div class="language-msyql line-numbers-mode" data-ext="msyql"><pre class="language-msyql"><code>mysql&gt; show slave status \\G:
*************************** 1. row ***************************
               Slave_IO_State: Waiting for source to send event
                  Master_Host: 1.116.82.74
                  Master_User: slave
                  Master_Port: 3306
                Connect_Retry: 30
              Master_Log_File: binlog.000003
          Read_Master_Log_Pos: 156
               Relay_Log_File: 07be233466a0-relay-bin.000002
                Relay_Log_Pos: 321
        Relay_Master_Log_File: binlog.000003
             Slave_IO_Running: Yes
            Slave_SQL_Running: Yes
              Replicate_Do_DB: 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 Slave_IO_Running: 和Slave_SQL_Running:参数已经表示同步成功</p><h6 id="_2-7-2、数据同步检测" tabindex="-1"><a class="header-anchor" href="#_2-7-2、数据同步检测" aria-hidden="true">#</a> 2.7.2、数据同步检测</h6><p>在主数据中创建数据，看看从服务器是否有数据</p>`,39),d=[l];function r(c,t){return e(),n("div",null,d)}const v=s(i,[["render",r],["__file","5、mysql的主从复制.html.vue"]]);export{v as default};
