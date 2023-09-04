import{_ as e,o as d,c as a,b as i}from"./app-71cdf572.js";const r={},n=i(`<h4 id="目标" tabindex="-1"><a class="header-anchor" href="#目标" aria-hidden="true">#</a> 目标</h4><p><strong>这是一个实例，目标是制作一个ubuntu镜像，此镜像里有添加默认没有的vim编辑器，并把他添加添加到阿里云</strong></p><h3 id="一、制作容器" tabindex="-1"><a class="header-anchor" href="#一、制作容器" aria-hidden="true">#</a> 一、制作容器</h3><h4 id="_1、制作容器" tabindex="-1"><a class="header-anchor" href="#_1、制作容器" aria-hidden="true">#</a> 1、制作容器</h4><p>拉取官方的ubuntu，并制作成容器</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker run -it --name=myubuntu ubuntu /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时的ubuntu容器是没有vim编辑器的</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>root@74b2d3584f8e:/# vim a.txt
bash: vim: command not found
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、安装vim编辑器" tabindex="-1"><a class="header-anchor" href="#_2、安装vim编辑器" aria-hidden="true">#</a> 2、安装vim编辑器</h4><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>//先更新包我们的包管理
apt-get update
//安装vim
apt-get -y install vim
//创建一个text文本
vim a.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、commit镜像" tabindex="-1"><a class="header-anchor" href="#_3、commit镜像" aria-hidden="true">#</a> 3、commit镜像</h4><p>将一个容器制作成一个镜像</p><p>格式：docker commit -m=&quot;备注信息&quot; -a=&quot;作者&quot; [容器id] [包名:版本号]</p><p>例：</p><p>docker commit -m=&quot;this is save to registry&quot; -a=&quot;js&quot; 322a59f35a56 ubuntu:1.1</p><p>docker commit -m=&quot;vim cmd add success&quot; -a=&quot;jon&quot; 74b2d3584f8e mydocker/ubuntu:1.0</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>[root@VM-12-17-centos /]# docker commit -m=&quot;vim cmd add success&quot; -a=&quot;jon&quot; 74b2d3584f8e  mydocker/ubuntu:1.0
sha256:ec39725ad28a782a5c55aa11b117002fc8cc5890f5820d96e742d769e1d4293b
[root@VM-12-17-centos /]# docker images
REPOSITORY        TAG       IMAGE ID       CREATED          SIZE
mydocker/ubuntu   1.0       ec39725ad28a   27 seconds ago   187MB
ubuntu            latest    ba6acccedd29   22 months ago    72.8MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由此可见，制作一个images成功，可以发现自定义的镜像比官方的ubuntu打了好多</p><h4 id="_4、测试" tabindex="-1"><a class="header-anchor" href="#_4、测试" aria-hidden="true">#</a> 4、测试</h4><p>利用自定义的images生成一个容器，看看是否含有vim和a.txt文本</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>[root@VM-12-17-centos /]# docker run -it --name=test ec39725ad28a /bin/bash
root@6e85f570d32c:/# ls
a.txt  boot  etc   lib    lib64   media  opt   root  sbin  sys  usr
bin    dev   home  lib32  libx32  mnt    proc  run   srv   tmp  var
root@6e85f570d32c:/# vim a.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由此可见是有的</p><h3 id="二、发布到阿里云" tabindex="-1"><a class="header-anchor" href="#二、发布到阿里云" aria-hidden="true">#</a> 二、发布到阿里云</h3><h4 id="_1、阿里云ecs-docker生态如下图所示" tabindex="-1"><a class="header-anchor" href="#_1、阿里云ecs-docker生态如下图所示" aria-hidden="true">#</a> 1、阿里云ECS docker生态如下图所示：</h4><p><img src="https://atts.w3cschool.cn/attachments/image/20230902/1693648542201998.png" alt=""></p><h4 id="_2、登录阿里云开发平台" tabindex="-1"><a class="header-anchor" href="#_2、登录阿里云开发平台" aria-hidden="true">#</a> 2、登录阿里云开发平台</h4><p>创建一个人实力并进入</p><p>仓库管理-&gt;创建镜像仓库-&gt;命名空间创建-&gt;下一步-&gt;代码源选择本地仓库-&gt;创建镜像仓库</p><p>到此安装基本信息里的操作指南操作就行了</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>//登录
docker login --username=522585487@qq.com registry.cn-hangzhou.aliyuncs.com
//将镜像推送到Registry
docker tag ec39725ad28a registry.cn-hangzhou.aliyuncs.com/mydocker26/mydocker:1.0
//推送到阿里云
docker push registry.cn-hangzhou.aliyuncs.com/mydocker26/mydocker:1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在此完成了推送到阿里云</p><h4 id="_3、测试" tabindex="-1"><a class="header-anchor" href="#_3、测试" aria-hidden="true">#</a> 3、测试</h4><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>//从阿里云拉取镜像
[root@VM-12-17-centos /]# docker pull registry.cn-hangzhou.aliyuncs.com/mydocker26/mydocker:1.0
[root@VM-12-17-centos /]# docker run -it ec39725ad28a /bin/bash
root@fc4ca90e9848:/# ls //这里找到了txt
a.txt  boot  etc   lib    lib64   media  opt   root  sbin  sys  usr
bin    dev   home  lib32  libx32  mnt    proc  run   srv   tmp  var
root@fc4ca90e9848:/# vim a.txt 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由此测试成功</p><h3 id="三、创建自己的私有库" tabindex="-1"><a class="header-anchor" href="#三、创建自己的私有库" aria-hidden="true">#</a> 三、创建自己的私有库</h3><h4 id="_1、下载镜像docker-registry" tabindex="-1"><a class="header-anchor" href="#_1、下载镜像docker-registry" aria-hidden="true">#</a> 1、下载镜像Docker Registry</h4><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker pull registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2、运行本地私有仓库" tabindex="-1"><a class="header-anchor" href="#_2、运行本地私有仓库" aria-hidden="true">#</a> 2、运行本地私有仓库</h4><p>相当于本地有个私有Docker hub</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker run -d -p 5000:5000 -v /zzyyuse/myregistry/:/tmp/registry --privileged=true registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3、curl测验证私服库上有是否有镜像" tabindex="-1"><a class="header-anchor" href="#_3、curl测验证私服库上有是否有镜像" aria-hidden="true">#</a> 3、curl测验证私服库上有是否有镜像</h4><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>[root@VM-12-17-centos ~]# curl -XGET http://1.116.82.74:5000/v2/_catalog
{&quot;repositories&quot;:[]}//私服库没有镜像
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4、在做一个镜像" tabindex="-1"><a class="header-anchor" href="#_4、在做一个镜像" aria-hidden="true">#</a> 4、在做一个镜像</h4><p>做法同上</p><h4 id="_5、修改images格式" tabindex="-1"><a class="header-anchor" href="#_5、修改images格式" aria-hidden="true">#</a> 5、修改images格式</h4><p>使用docker tag 将ubuntu这个镜像克隆并改名改为1.116.82.74:5000/ubuntu:1.1</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker tag ubuntu:1.1 1.116.82.74:5000/ubuntu:1.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_6、修改配置文件" tabindex="-1"><a class="header-anchor" href="#_6、修改配置文件" aria-hidden="true">#</a> 6、修改配置文件</h4><p>修改配置文件，使得docker 支持http推送</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>vim /etc/docker/daemon.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在文件中添加白名单</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>{
  &quot;registry-mirrors&quot;: [&quot;https://unkcv0n5.mirror.aliyuncs.com&quot;],
  &quot;insecure-registries&quot;:[&quot;1.116.82.74:5000&quot;]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意别忘记“，”号</p><p>重启docker和容器</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>systemctl restrart docker
docker run -d -p 5000:5000 -v /zzyyuse/myregistry/:/tmp/registry --privileged=true registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7、把image推送到私服库" tabindex="-1"><a class="header-anchor" href="#_7、把image推送到私服库" aria-hidden="true">#</a> 7、把image推送到私服库</h4><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker push 1.116.82.74:5000/ubuntu:1.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_8、测试" tabindex="-1"><a class="header-anchor" href="#_8、测试" aria-hidden="true">#</a> 8、测试</h4><h5 id="_8-1、先测验证私服库上有是否有镜像" tabindex="-1"><a class="header-anchor" href="#_8-1、先测验证私服库上有是否有镜像" aria-hidden="true">#</a> 8.1、先测验证私服库上有是否有镜像</h5><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>[root@VM-12-17-centos /]# curl -XGET http://1.116.82.74:5000/v2/_catalog
{&quot;repositories&quot;:[&quot;ubuntu&quot;]}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_8-2、从私服库拉取镜像" tabindex="-1"><a class="header-anchor" href="#_8-2、从私服库拉取镜像" aria-hidden="true">#</a> 8.2、从私服库拉取镜像</h5><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>[root@VM-12-17-centos /]# docker pull 1.116.82.74:5000/ubuntu:1.1

[root@VM-12-17-centos /]# docker run -it 77efa112d0af /bin/bash
root@7aaded4d9ea8:/# ls
b.txt  boot  etc   lib    lib64   media  opt   root  sbin  sys  usr
bin    dev   home  lib32  libx32  mnt    proc  run   srv   tmp  var
root@7aaded4d9ea8:/# vim b.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出里面是有b.txt的，这样小组其他成员也可以用相同的方式，拉去你的镜像啦</p>`,63),s=[n];function c(o,t){return d(),a("div",null,s)}const u=e(r,[["render",c],["__file","3、自定义镜像.html.vue"]]);export{u as default};
