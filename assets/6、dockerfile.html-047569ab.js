import{_ as s,r as n,o as c,c as t,a as e,d as i,e as a,w as o,b as d}from"./app-d787f917.js";const u={},h=e("h2",{id:"一、docker构建过程解析",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#一、docker构建过程解析","aria-hidden":"true"},"#"),i(" 一、Docker构建过程解析")],-1),v=e("h4",{id:"_1、基础知识",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1、基础知识","aria-hidden":"true"},"#"),i(" 1、基础知识")],-1),m=e("li",null,"指令从上到下，按顺序执行",-1),b=e("li",null,"#表示注释",-1),p=e("li",null,"每条指令都会创建一个新的镜像层并对镜像进行提交",-1),x=d(`<h4 id="_2、执行大致流程" tabindex="-1"><a class="header-anchor" href="#_2、执行大致流程" aria-hidden="true">#</a> 2、执行大致流程</h4><p>Docker 执行DockerFile的大致流程如下：</p><ol><li>docker从基础镜像进行一个容器</li><li>执行一条指令，并对容器作出修改</li><li>执行类似docker commit的操作，提交到新的镜像层</li><li>docker在基于刚提交的镜像运行一个新的容器</li><li>执行dockerfile中的下一条指令，直到所有指令都执行完成</li></ol><h2 id="二、dockerfile常用的保留字指令" tabindex="-1"><a class="header-anchor" href="#二、dockerfile常用的保留字指令" aria-hidden="true">#</a> 二、DockerFile常用的保留字指令</h2><h3 id="_1、from" tabindex="-1"><a class="header-anchor" href="#_1、from" aria-hidden="true">#</a> 1、FROM</h3><p>说明：基础镜像，当前镜像是基于哪一个镜像为基础的，指定一个已经存在的模板，一般出现在的第一行。</p><h3 id="_2、miantainer" tabindex="-1"><a class="header-anchor" href="#_2、miantainer" aria-hidden="true">#</a> 2、MIANTAINER</h3><p>说明：镜像维护者的姓名和邮箱地址，等同于在终端执行的shell命令</p><h3 id="_3、run" tabindex="-1"><a class="header-anchor" href="#_3、run" aria-hidden="true">#</a> 3、RUN</h3><p>说明：容器构建时需要运行的命令，即RUN是在docker build时运行，比如之前在容器里添加vim命令</p><div class="language-linxu line-numbers-mode" data-ext="linxu"><pre class="language-linxu"><code>RUN yun -y install vim
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>两种格式</p><ul><li><h5 id="shell格式" tabindex="-1"><a class="header-anchor" href="#shell格式" aria-hidden="true">#</a> shell格式</h5></li></ul><p>RUN [&quot;可执行文件&quot;, “参数”, &quot;参数2”]</p><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>例如：
RUN [&quot;./test.php&quot;, &quot;dev&quot;, &quot;offline&quot;]等价于 ./test.php dev offline
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h5 id="exec格式" tabindex="-1"><a class="header-anchor" href="#exec格式" aria-hidden="true">#</a> exec格式</h5></li></ul><p>RUN [&quot;可执行文件&quot;，“参数1”，“参数2”]</p><h3 id="_4、expose" tabindex="-1"><a class="header-anchor" href="#_4、expose" aria-hidden="true">#</a> 4、EXPOSE</h3><p>说明：当前容器对外暴露出来的端口</p><h3 id="_5、workdir" tabindex="-1"><a class="header-anchor" href="#_5、workdir" aria-hidden="true">#</a> 5、WORKDIR</h3><p>说明：指定创建容器后，终端默认登录的目录，落脚点。即进入容器后所在的目录。</p><h3 id="_6、user" tabindex="-1"><a class="header-anchor" href="#_6、user" aria-hidden="true">#</a> 6、USER</h3><p>说明：指定镜像以什么样的用户去执行，默认是root</p><h3 id="_7、env" tabindex="-1"><a class="header-anchor" href="#_7、env" aria-hidden="true">#</a> 7、ENV</h3><p>说明:指定构建镜像过程中设置环境变量，类似声明一个变量</p><p>例：</p><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>ENV CATALINA_HOME /usr/local/tomcat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>即后面可以用CATALINA_HOME代替目录/usr/local/tomcat使用</p><h3 id="_8、volume" tabindex="-1"><a class="header-anchor" href="#_8、volume" aria-hidden="true">#</a> 8、VOLUME</h3><p>说明：容器数据卷，用于数据保存和持久化工作，相当与-v</p><h3 id="_9、add" tabindex="-1"><a class="header-anchor" href="#_9、add" aria-hidden="true">#</a> 9、ADD</h3><p>说明：把宿主机目录下的文件拷贝到镜像中去，而且会自动处理url和解压tar压缩包</p><h3 id="_10、copy" tabindex="-1"><a class="header-anchor" href="#_10、copy" aria-hidden="true">#</a> 10、COPY</h3><p>说明：把宿主机目录下的文件拷贝到镜像中去, COPY src dest</p><h3 id="_11、cmd" tabindex="-1"><a class="header-anchor" href="#_11、cmd" aria-hidden="true">#</a> 11、CMD</h3><p>说明：容器启动命令，指定容器启动后需要干的事情</p><p>和run相似也是两种格式：</p><ul><li>shell 格式：CMD &lt;命令&gt;</li><li>exec 格式：CMD[&quot;可执行文件&quot;，“参数1”，“参数2”]</li><li>参数列表格式：CMD [&quot;参数1&quot;，“参数2” ...]，在指定了ENTRYPOINT指令后，可以用CMD指定具体的参数。</li></ul><p>注意：</p><p>dockerfile中可以有多个CMD指令，但只有最后一个生效，CMD会被docker run之后的参数替换</p><p>例如：</p><p>tomcat中有CMD [&quot;catalina.sh&quot;, &quot;run&quot;]这么一个指令，</p><ul><li>当我们执行指令 docker run -it p 8080:8080 t1，这个时候tomcat可以启动，并执行了Catalina.start</li><li>当我们执行指令 docker run -it p 8080:8080 t1 /bin/bash,这条指令在dockerfile里添加了CMD][&quot;/bin/bash&quot;,&quot;run&quot;]，覆盖了CMD [&quot;catalina.sh&quot;, &quot;run&quot;]，所有catalina.sh不会执行，tomcat并没有被启动</li></ul><p><strong>和RUN的区别</strong></p><p><strong>CMD是在docker run时运行，RUN是在docker build时运行</strong></p><h3 id="_12、entrypoint" tabindex="-1"><a class="header-anchor" href="#_12、entrypoint" aria-hidden="true">#</a> 12、ENTRYPOINT</h3><p>介绍：也是用来指定容器启动时运行的命令，类似CMD,但是ENTERYPOINT不会被docker run 后面的命令覆盖，而且这些命令行参数会被当做参数送给ENTRYPOINT 指令指定的程序</p><p>格式：ENTRYPOINT[&quot;可执行文件&quot;，“参数1”，“参数2”]，当和CMD一起使用的时候，等于在ENTRYPOINT后面添加CMD参数，CMD就不再时一个命令了</p><p>例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>FROM nginx

ENTRYPOINT[&quot;nginx&quot;,&quot;-c&quot;] #定参数
CMD[&quot;etc/nginx/nginx.conf&quot;] #变参
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际运行的结果</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//docker指令，运行nginx
docker run nginx
//实际执行的时
nginx -c etc/nginx/nginx.conf

//当然如果docker指令后自己添加了参数，则CMD里的参数就会被覆盖
docker run nginx xx.conf
//实际执行的就是
nginx -c xx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、案例" tabindex="-1"><a class="header-anchor" href="#三、案例" aria-hidden="true">#</a> 三、案例</h2><p>目标：自定义镜像Centos7具备vim+ifconfig+jkd8</p><p>材料：jdk地址：https://www.oracle.com/java/technologies/downloads/#java8。选择</p>`,55),_=e("th",null,"x64 Compressed Archive",-1),g=e("th",null,"132.82 MB",-1),f={href:"https://www.oracle.com/java/technologies/downloads/#license-lightbox",target:"_blank",rel:"noopener noreferrer"},k=d(`<p>这一款</p><h3 id="_1、编写dockerfile文件" tabindex="-1"><a class="header-anchor" href="#_1、编写dockerfile文件" aria-hidden="true">#</a> 1、编写Dockerfile文件</h3><h4 id="_1-1、下载jdk" tabindex="-1"><a class="header-anchor" href="#_1-1、下载jdk" aria-hidden="true">#</a> 1.1、下载jdk</h4><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>wget https://download.oracle.com/otn/java/jdk/8u381-b09/8c876547113c4e4aab3c868e9e0ec572/jdk-8u381-linux-x64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_1-2、编写dockerfile" tabindex="-1"><a class="header-anchor" href="#_1-2、编写dockerfile" aria-hidden="true">#</a> 1.2、编写Dockerfile</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vim Dockerfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>内容如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#####基础镜像centos
FROM centos
##维护人员邮箱
MAINTAINER 123456@qq.com
##创建常数变量
ENV MYPATH /usr/local
##设置默认进入目录
WORKDIR $MYPATH

##由于centos停止维护了，所以需要修改 centos 文件内容， 更改cencos镜像地址
RUN cd /etc/yum.repos.d/
RUN sed -i &#39;s/mirrorlist/#mirrorlist/g&#39; /etc/yum.repos.d/CentOS-*
RUN sed -i &#39;s|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g&#39; /etc/yum.repos.d/CentOS-*
RUN yum makecache
RUN yum update -y

##安装vim编辑器
RUN yum -y install vim
##安装ifconfig命令
RUN yum -y install net-tools
##安装java8及其lib库
RUN yum install glibc
RUN mkdir /usr/local/java
##ADD是相对路径jar,把下载好的jdk添加到容器中，安装包必须要和Dockerfile文件放在同一个位置
ADD jdk-8u381-linux-x64.tar.gz /usr/local/java
##配置java环境变量
ENV JAVA_HOME /usr/local/java/jdk1.8.0_381
ENV JRE_HOME $JAVA_HOME/jre
ENV CLASSPATH $JAVA_HOME/lib/dt.jar$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib:$CLASSPATH
ENV PATH $JAVA_HOME/bin:$PATH

EXPOSE 80
##CMD echo $MYPATH
##CMD echo &quot;success-----------------ok&quot;
CMD /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、构建" tabindex="-1"><a class="header-anchor" href="#_2、构建" aria-hidden="true">#</a> 2、构建</h3><p>执行命令:docker build -t 新镜像名字:TAG ./，</p><p>注意：TAG后面有个“.”别丢了</p><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>docker build -t centosjava8:1.0 ./
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,12);function N(q,M){const l=n("font"),r=n("ExternalLinkIcon");return c(),t("div",null,[h,v,e("ul",null,[e("li",null,[i("每条保留字指令都"),a(l,{color:"red"},{default:o(()=>[i("必须大写字母")]),_:1}),i("且后面要跟随至少一个参数")]),m,b,p]),x,e("table",null,[e("thead",null,[e("tr",null,[_,g,e("th",null,[e("a",f,[i("jdk-8u381-linux-x64.tar.gz"),a(r)])])])])]),k])}const D=s(u,[["render",N],["__file","6、dockerfile.html.vue"]]);export{D as default};
