import{_ as e,o as a,c as d,b as i}from"./app-05941657.js";const n={},r=i(`<h4 id="一、介绍" tabindex="-1"><a class="header-anchor" href="#一、介绍" aria-hidden="true">#</a> 一、介绍</h4><p>docker的镜像实际上时由一层层的文件系统组成，这种层级的文件系统称为UnionFS。</p><p>UnionFS（联合文件系统）：UnionFS是一种分层、轻量级并且高性能的文件系统，它支持对系统的修改作为一次提交来一层层的叠加，同时可以将不同目录挂载到同一个虚拟文件系统下。Union 文件系统时Docker镜像的基础。镜像可以通过分层来进行基础，docker基于基础镜像（没有父类镜像）可以制作各种具体的应用镜像</p><p>dockerhub官网：https://hub-stage.docker.com/</p><p>docker官网：https://www.docker.com/</p><h5 id="_1、基础简介" tabindex="-1"><a class="header-anchor" href="#_1、基础简介" aria-hidden="true">#</a> 1、基础简介</h5><p>1.1、image(镜像) ：类似java里面得类，包含了一整套得文件系统，仅包含业务运行时所需得的环境，</p><p>基础镜像仅170M,宿主机可部署100-1000个容器(container)</p><p>1.2、container(容器)：由image生成的实例，类似java中的实力，真正执行的环境和操作的的对象。</p><p>1.3、repository（仓库）：用来集中存放镜像的地方，可分为公开仓库和自己搭建的私库。</p><h5 id="_2、运行图解" tabindex="-1"><a class="header-anchor" href="#_2、运行图解" aria-hidden="true">#</a> 2、运行图解</h5><p><img src="https://atts.w3cschool.cn/attachments/image/20230902/1693648271767205.png" alt=""></p><h5 id="_3、工作原里" tabindex="-1"><a class="header-anchor" href="#_3、工作原里" aria-hidden="true">#</a> 3、工作原里</h5><p>docker是一个Client-Server结构的系统，守护进程(2里面的Docker Daemon)运行在主机上，守护进程从客户端接收命令再来管理docker容器</p><p><img src="https://atts.w3cschool.cn/attachments/image/20230902/1693648290849369.png" alt=""></p><h4 id="二、安装" tabindex="-1"><a class="header-anchor" href="#二、安装" aria-hidden="true">#</a> 二、安装</h4><h5 id="_1、环境安装" tabindex="-1"><a class="header-anchor" href="#_1、环境安装" aria-hidden="true">#</a> 1、环境安装</h5><h6 id="_1-1、最低需求" tabindex="-1"><a class="header-anchor" href="#_1-1、最低需求" aria-hidden="true">#</a> 1.1、最低需求</h6><p>至少需要2个CPU核心、2GB内存和20GB存储空间。如果应用程序需要更多的资源，那么可以根据实际情况增加硬件配置。CentOS需要64位</p><h6 id="_1-2、卸载旧的版本" tabindex="-1"><a class="header-anchor" href="#_1-2、卸载旧的版本" aria-hidden="true">#</a> 1.2、卸载旧的版本</h6><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>yum remove docker \\
                  docker-client \\
                  docker-client-latest \\
                  docker-common \\
                  docker-latest \\
                  docker-latest-logrotate \\
                  docker-logrotate \\
                  docker-engine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_1-3、安装gcc和c" tabindex="-1"><a class="header-anchor" href="#_1-3、安装gcc和c" aria-hidden="true">#</a> 1.3、安装gcc和c++</h6><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>yum -y install gcc

yum -y install gcc-c++
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_1-4、安装yum-utils包" tabindex="-1"><a class="header-anchor" href="#_1-4、安装yum-utils包" aria-hidden="true">#</a> 1.4、安装yum-utils包</h6><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>yum install <span class="token operator">-</span>y yum<span class="token operator">-</span>utils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_2、安装docker" tabindex="-1"><a class="header-anchor" href="#_2、安装docker" aria-hidden="true">#</a> 2、安装docker</h5><h6 id="_2-1、设置docker镜像仓库" tabindex="-1"><a class="header-anchor" href="#_2-1、设置docker镜像仓库" aria-hidden="true">#</a> 2.1、设置docker镜像仓库</h6><p>外网的比较慢，可以用阿里的</p><p>yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo</p><h6 id="_2-2、建立yum包缓存-让速度更快一点" tabindex="-1"><a class="header-anchor" href="#_2-2、建立yum包缓存-让速度更快一点" aria-hidden="true">#</a> 2.2、建立yum包缓存，让速度更快一点</h6><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>yum makecache fast
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="_2-3、安装docker引擎" tabindex="-1"><a class="header-anchor" href="#_2-3、安装docker引擎" aria-hidden="true">#</a> 2.3、安装docker引擎</h6><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>yum -y install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="_2-4、启动docker" tabindex="-1"><a class="header-anchor" href="#_2-4、启动docker" aria-hidden="true">#</a> 2.4、启动docker</h6><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>systemctl start docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="_2-5、查看是否启动" tabindex="-1"><a class="header-anchor" href="#_2-5、查看是否启动" aria-hidden="true">#</a> 2.5、查看是否启动</h6><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>ps -ef|grep docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="_2-6、查看版本" tabindex="-1"><a class="header-anchor" href="#_2-6、查看版本" aria-hidden="true">#</a> 2.6、查看版本</h6><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>docker version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="_2-7、测试一下" tabindex="-1"><a class="header-anchor" href="#_2-7、测试一下" aria-hidden="true">#</a> 2.7、测试一下</h6><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>docker run hello<span class="token operator">-</span>world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行后会发现有这样一段话</p><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>Unable to find image &#39;hello-world:latest&#39; locally
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>说明在本地拉取不到镜像，之后会自动去远程仓库拉去镜像</p><h4 id="三-、镜像加速器配置" tabindex="-1"><a class="header-anchor" href="#三-、镜像加速器配置" aria-hidden="true">#</a> 三 、镜像加速器配置</h4><p>4.1、寻找镜像加速器</p><p>登录阿里云，找到容器镜像服务，在做出导航工具找到镜像工具-&gt;镜像加速器-&gt;加速器地址</p><p>4.2、配置加速器</p><p>安照它下面的操作文档操作就行了，注意选对系统版本CentOS</p><p>其中&lt;-&#39;EOF&#39;表示结束符号，</p><p>代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir -p /etc/docker
tee /etc/docker/daemon.json &lt;&lt;-&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [&quot;https://unkcv0n5.mirror.aliyuncs.com&quot;]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="四、卸载" tabindex="-1"><a class="header-anchor" href="#四、卸载" aria-hidden="true">#</a> 四、卸载</h4><h6 id="_3-1、暂停docker" tabindex="-1"><a class="header-anchor" href="#_3-1、暂停docker" aria-hidden="true">#</a> 3.1、暂停docker</h6><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>systemctl stop docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="_3-2-、卸载docker" tabindex="-1"><a class="header-anchor" href="#_3-2-、卸载docker" aria-hidden="true">#</a> 3.2 、卸载docker</h6><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>yum remove docker-ce docker-ce-cli containerd.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="_3-3、删除相关文件" tabindex="-1"><a class="header-anchor" href="#_3-3、删除相关文件" aria-hidden="true">#</a> 3.3、删除相关文件</h6><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>rm -rf /var/lib/docker
rm -rf /var/lib/containerd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,59),s=[r];function l(c,t){return a(),d("div",null,s)}const u=e(n,[["render",l],["__file","1、安装.html.vue"]]);export{u as default};
