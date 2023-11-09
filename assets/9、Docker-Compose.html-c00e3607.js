import{_ as n,r as s,o as a,c as r,a as o,d as e,e as c,w as l,b as i}from"./app-05941657.js";const m={},p=i(`<h2 id="一、简介" tabindex="-1"><a class="header-anchor" href="#一、简介" aria-hidden="true">#</a> 一、简介</h2><p>Docker-Compose是Docker官方的开源项目，负责实现对docker容器集群的快速编排，通过编写compose可以实现容器的一键启动</p><p>官网地址：https://docs.docker.com/compose/compose-file/</p><h2 id="二、安装" tabindex="-1"><a class="header-anchor" href="#二、安装" aria-hidden="true">#</a> 二、安装</h2><h3 id="_1、下载" tabindex="-1"><a class="header-anchor" href="#_1、下载" aria-hidden="true">#</a> 1、下载</h3><p>1.1、下载</p><p>地址：https://github.com/docker/compose/releases/download/v2.21.0/docker-compose-linux-x86_64</p><p>1.2、修改名字为docker-compose，并上传到 /usr/local/bin目录下</p><p>1.3、授权</p><p>chmod +x /usr/local/bin/docker-compose</p><p>1.4、测试</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@VM-12-17-centos bin]# docker-compose -v
Docker Compose version v2.21.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、核心要素" tabindex="-1"><a class="header-anchor" href="#三、核心要素" aria-hidden="true">#</a> 三、核心要素</h2><h3 id="_1、个文件" tabindex="-1"><a class="header-anchor" href="#_1、个文件" aria-hidden="true">#</a> 1、个文件</h3><p>docker-compose.yml</p><h3 id="_2、两个要素" tabindex="-1"><a class="header-anchor" href="#_2、两个要素" aria-hidden="true">#</a> 2、两个要素</h3><p>1、服务（service)</p><p>一个个容器实例，比如订单微服务，库存微服务，mysq容器。</p><p>2、工程（project)</p>`,19),t=i(`<h2 id="四、常用命令" tabindex="-1"><a class="header-anchor" href="#四、常用命令" aria-hidden="true">#</a> 四、常用命令</h2><p>docker-compose -h #查看帮助</p><p>docker-compose up #启动所有docker-compose服务</p><p>docker-compose up -d #启动所有docker-compose服务并后台运行</p><p>docker-compose down #停止并删除容器，网络，卷，镜像</p><p>docker-compose exec [yum里面的id] #进入容器实例内部 docker-compose exec docker-compose.yml文件中的服务id /bin/bash</p><p>docker-compose ps #展示当前docker-compose编排过的正在运行的所有容器</p><p>docker-compose top #展示当前docker-compose编排过的容器进程</p><p>docker-compose logs [yml里面的服务id] #查看容器输出日志</p><p>docker-compose config #检查配置</p><p>docker-compose docker-compose -q #检查配置，有问题才有输出</p><p>docker-compose restart #重启服务</p><p>docker-compose start #启动服务</p><p>docker-compose stop #停止服务</p><h2 id="五、使用docker-compose" tabindex="-1"><a class="header-anchor" href="#五、使用docker-compose" aria-hidden="true">#</a> 五、使用docker-compose</h2><p>1、构建镜像</p><p>编写Dockerfile定义各个微服务应用，并构建出对应的镜像文件</p><p>2、构建业务单元</p><p>使用docker-compose.yml定义完整业务单元，安排好整体应用中各个容器服务。</p><p>3、启动应用程序</p><p>执行docker-compose up，启动整个应用程序，完成一键部署</p><h2 id="六、案例" tabindex="-1"><a class="header-anchor" href="#六、案例" aria-hidden="true">#</a> 六、案例</h2><h3 id="_1、目标" tabindex="-1"><a class="header-anchor" href="#_1、目标" aria-hidden="true">#</a> 1、目标</h3><p>利用compose完成容器的编排</p><h3 id="_2、构建微服务" tabindex="-1"><a class="header-anchor" href="#_2、构建微服务" aria-hidden="true">#</a> 2、构建微服务</h3><p>内容参考第7章，微服务实战</p><h3 id="_3、编排docker-compose-yml文件" tabindex="-1"><a class="header-anchor" href="#_3、编排docker-compose-yml文件" aria-hidden="true">#</a> 3、编排docker-compose.yml文件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>version: &quot;3&quot;

services:
  microService:
    image: javadocker:1.0
    container_name: ms01
    ports:
      - &quot;6001:6001&quot;
    volumes:
      - /app/microService:/data
    networks: 
      - atguigu_net 
    depends_on: 
      - redis
      - mysql

  redis:
    image: redis:6.0.8
    ports:
      - &quot;6379:6379&quot;
    volumes:
      - /app/redis/redis.conf:/etc/redis/redis.conf
      - /app/redis/data:/data
    networks: 
      - atguigu_net

    command: redis-server /etc/redis/redis.conf

  mysql:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD: &#39;123456&#39;
      MYSQL_ALLOW_EMPTY_PASSWORD: &#39;no&#39;
      MYSQL_DATABASE: &#39;db2021&#39;
      MYSQL_USER: &#39;zzyy&#39;
      MYSQL_PASSWORD: &#39;zzyy123&#39;
    ports:
       - &quot;3306:3306&quot;
    volumes:
       - /datacache/mysql/data:/var/lib/mysq
       - /datacache/mysql/conf:/etc/mysql/conf.d
       - /app/mysql/init:/docker-entrypoint-initdb.d
    networks:
      - atguigu_net
    command: --default-authentication-plugin=mysql_native_password #解决外部无法访问

networks: 
   atguigu_net: 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、构建" tabindex="-1"><a class="header-anchor" href="#_4、构建" aria-hidden="true">#</a> 4、构建</h3><p>docker-compose up -d</p><p>5、配合Dockerfile</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>version: &quot;3&quot;

services:
  build:
  context: ./
  dockerfile:Dockerfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32);function v(u,h){const d=s("font");return a(),r("div",null,[p,o("p",null,[e("由一组关联的应用容器组成的一个"),c(d,{color:"red"},{default:l(()=>[e("完整业务单元")]),_:1}),e("，在docker-compose.yml文件中定义。")]),t])}const k=n(m,[["render",v],["__file","9、Docker-Compose.html.vue"]]);export{k as default};
