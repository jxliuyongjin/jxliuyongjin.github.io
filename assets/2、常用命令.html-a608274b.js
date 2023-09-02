import{_ as e,o as d,c as a,b as r}from"./app-2fab46b3.js";const i={},n=r(`<h4 id="一、帮助启动类命令" tabindex="-1"><a class="header-anchor" href="#一、帮助启动类命令" aria-hidden="true">#</a> 一、帮助启动类命令</h4><h5 id="_1、启动docker" tabindex="-1"><a class="header-anchor" href="#_1、启动docker" aria-hidden="true">#</a> 1、启动docker:</h5><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>systemclt start docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_2、停止docker" tabindex="-1"><a class="header-anchor" href="#_2、停止docker" aria-hidden="true">#</a> 2、停止docker:</h5><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>systemctl stop docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_3、重启docker" tabindex="-1"><a class="header-anchor" href="#_3、重启docker" aria-hidden="true">#</a> 3、重启docker:</h5><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>systemctl restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_4、查看docker状态" tabindex="-1"><a class="header-anchor" href="#_4、查看docker状态" aria-hidden="true">#</a> 4、查看docker状态：</h5><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>systemctl status docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_5、设置开机启动docker" tabindex="-1"><a class="header-anchor" href="#_5、设置开机启动docker" aria-hidden="true">#</a> 5、设置开机启动docker:</h5><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>systemctl enable docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_6、查看docker概要信息" tabindex="-1"><a class="header-anchor" href="#_6、查看docker概要信息" aria-hidden="true">#</a> 6、查看docker概要信息：</h5><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_7、查看docker总体帮助文档" tabindex="-1"><a class="header-anchor" href="#_7、查看docker总体帮助文档" aria-hidden="true">#</a> 7、查看docker总体帮助文档：</h5><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker --help
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_8、查看docker命令帮助文档" tabindex="-1"><a class="header-anchor" href="#_8、查看docker命令帮助文档" aria-hidden="true">#</a> 8、查看docker命令帮助文档：</h5><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker [具体命令] --help
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="二、镜像命令" tabindex="-1"><a class="header-anchor" href="#二、镜像命令" aria-hidden="true">#</a> 二、镜像命令</h4><h5 id="_1、docker-images" tabindex="-1"><a class="header-anchor" href="#_1、docker-images" aria-hidden="true">#</a> 1、docker images</h5><p>列出本地主机上的镜像</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>[root@VM-12-17-centos ~]# docker images
REPOSITORY    TAG       IMAGE ID       CREATED        SIZE
hello-world   latest    9c7a54a9a43c   4 months ago   13.3kB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>REPOSITORY :表示镜像的仓库源</p><p>TAG：镜像的版本号，如果没有指定版本。使用的就是最新的版本</p><p><strong>OPTIONS:</strong></p><p><strong>-a:列出本地所有的镜像（含历史映像层）</strong></p><p><strong>-q:只显示镜像ID</strong></p><h5 id="_2、docker-search-options" tabindex="-1"><a class="header-anchor" href="#_2、docker-search-options" aria-hidden="true">#</a> 2、docker search [options]</h5><p>查找某个镜像，options是镜像的名字</p><p>例如：</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>[root@VM-12-17-centos ~]# docker search hello-world
NAME                                       DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
hello-world                                Hello World! (an example of minimal Dockeriz…   2091      [OK]       
rancher/hello-world                                                                        4                    
okteto/hello-world                                                                         0                    
golift/hello-world                         Hello World Go-App built by Go Lift Applicat…   0                    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>NAME:镜像名字</p><p>DESCRIPTION:镜像说明</p><p>STARS:点赞数量</p><p>OFFICIAL:是否是官网，一般选择这个官方认证过的</p><p>AUTOMATED:是否是自动构建的</p><p>OPTIONS:</p><p>--limit:只列出指定数量，如：docker search --limit 5 hello-world，意思是子列前五个</p><h5 id="_3、docker-pull-options" tabindex="-1"><a class="header-anchor" href="#_3、docker-pull-options" aria-hidden="true">#</a> 3、docker pull [options]</h5><p>options:【镜像名字】:【版本号】，如果不填版本号，默认拉去最新版本</p><p>例如：</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>[root@VM-12-17-centos ~]# docker pull ubuntu
Using default tag: latest
latest: Pulling from library/ubuntu
7b1a6ab2e44d: Pull complete 
Digest: sha256:626ffe58f6e7566e00254b638eb7e0f3b11d4da9675088f4781a50ae288f3322
Status: Downloaded newer image for ubuntu:latest
docker.io/library/ubuntu:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4、docker-system-df" tabindex="-1"><a class="header-anchor" href="#_4、docker-system-df" aria-hidden="true">#</a> 4、docker system df</h5><p>介绍：查看镜像/容器/数据卷所占的空间</p><h5 id="_5、docker-rmi-options" tabindex="-1"><a class="header-anchor" href="#_5、docker-rmi-options" aria-hidden="true">#</a> 5、docker rmi [options]</h5><p>介绍：移除某个镜像，options是个镜像名字或者镜像id</p><p>OPTIONS:</p><p>-f：如果项目被别的容器正在使用，维护进程还会拒绝删除，因此加-f，强制删除</p><h6 id="a-强行删除" tabindex="-1"><a class="header-anchor" href="#a-强行删除" aria-hidden="true">#</a> a-&gt;强行删除：</h6><p>例：</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>[root@VM-12-17-centos ~]# docker rmi -f ubuntu
Untagged: ubuntu:latest
Untagged: ubuntu@sha256:626ffe58f6e7566e00254b638eb7e0f3b11d4da9675088f4781a50ae288f3322
Deleted: sha256:ba6acccedd2923aee4c2acc6a23780b14ed4b8a5fa4e14e252a23b846df9b6c1
Deleted: sha256:9f54eef412758095c8079ac465d494a2872e02e90bf1fb5f12a1641c0d1bb78b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="b-强行删除多个镜像" tabindex="-1"><a class="header-anchor" href="#b-强行删除多个镜像" aria-hidden="true">#</a> b-&gt;强行删除多个镜像</h6><p>docker rmi -f [镜像名字]:[tag] [镜像名字2]:[tag]</p><h6 id="c-删除全部" tabindex="-1"><a class="header-anchor" href="#c-删除全部" aria-hidden="true">#</a> c-&gt;删除全部</h6><p>docker rmi -f $(dockerr images -aq)</p><p>其中dockerr image -aq就是查找对象id，并赋给rmi命令</p><h5 id="_6、虚悬镜像" tabindex="-1"><a class="header-anchor" href="#_6、虚悬镜像" aria-hidden="true">#</a> 6、虚悬镜像</h5><p>仓库没和标签名都是none的镜像，通常这种镜像是构建的过程中出现问题导致的，应该删除掉</p><h5 id="_7、docker-commit-docker-push" tabindex="-1"><a class="header-anchor" href="#_7、docker-commit-docker-push" aria-hidden="true">#</a> 7、docker commit/docker push</h5><p>在后面会有</p><h4 id="三、容器命令" tabindex="-1"><a class="header-anchor" href="#三、容器命令" aria-hidden="true">#</a> 三、容器命令</h4><h5 id="_1、docker-run" tabindex="-1"><a class="header-anchor" href="#_1、docker-run" aria-hidden="true">#</a> 1、docker run</h5><p>介绍：启动交互式容器，格式为：</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker run [options] IMAGES [COMMAND][ARG...]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>options说明：</p><p>--name=“容器新名字”：为容器指定一个名称</p><p>-d：后台运行容器并返回容器id，也即启动守护容器（后台运行）</p><p>-i：inteactive（交互式）,以交互模式运行容器，通常与-t同时使用</p><p>-t：tty（伪终端）,为容器重新分配一个伪输入端，通常与-i同时使用</p><p>也即是启动交互式容器（前后台以伪终端的方式相互交互）</p><p>-P：随机端口映射，大写P，访问docker内部需要的端口</p><p>-p：指定端口映射，小写p，访问docker内部需要的端口</p><p>格式：-p [hostPort]:[containerPort] 例：-p 8080:80</p><h6 id="_1-1、启动交互式容器" tabindex="-1"><a class="header-anchor" href="#_1-1、启动交互式容器" aria-hidden="true">#</a> 1.1、启动交互式容器</h6><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>[root@VM-12-17-centos ~]# docker run -it --name=myubuntu ubuntu /bin/bash
root@073a9a1c810f:/# 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注：</p><p>a-&gt; /bin/bash为unbuntu指定shell环境，可以执行bash命令</p><p>b-&gt;退出用：exit，退出后还想进来用docer exec -it [containerId] 命令</p><h6 id="_1-2、启动守护式容器" tabindex="-1"><a class="header-anchor" href="#_1-2、启动守护式容器" aria-hidden="true">#</a> 1.2、启动守护式容器</h6><p>docker run -d redis启动一个守护进程</p><p><strong>但有些容器，如果用docker run -d ubuntu 创建一个容器，会发现创建后立刻退出了，原因在于只创建了服务端，没有创建客户端，用户无法操作的服务端没意义，就自我停止了</strong></p><h5 id="_2、docker-ps-options" tabindex="-1"><a class="header-anchor" href="#_2、docker-ps-options" aria-hidden="true">#</a> 2、docker ps [options]</h5><p>介绍：列出当前正在运行的所有容器</p><p>例：</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>[root@VM-12-17-centos /]# docker ps
CONTAINER ID   IMAGE     COMMAND       CREATED              STATUS              PORTS     NAMES
5e42b858ff76   ubuntu    &quot;/bin/bash&quot;   11 seconds ago       Up 10 seconds                 myubuntu
2b2fde07760d   ubuntu    &quot;/bin/bash&quot;   About a minute ago   Up About a minute             gallant_kowalevski
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果容器退出了。也就不会显示在这里了</p><p>options:</p><p>-a：列出当前正在运行的和历史之前运行过的容器</p><p>-l：显示最近创建过的容器</p><p>-n：列出最近创建的n个容器，docker ps n 2</p><p>-q：只显示容器id</p><h5 id="_3、容器退出" tabindex="-1"><a class="header-anchor" href="#_3、容器退出" aria-hidden="true">#</a> 3、容器退出</h5><p>a、exit，直接退出，容器停止运行</p><p>b、ctrl+p+q，退出容器，但容器不停止运行</p><h5 id="_4、docker-start-options" tabindex="-1"><a class="header-anchor" href="#_4、docker-start-options" aria-hidden="true">#</a> 4、docker start [options]</h5><p>介绍：启动容器，options是容器的id，可以先用 docker ps 查询历史运行过的容器的id，然后用docker start命令启动</p><p>例：docker start 5e42b858ff76</p><h5 id="_5、docker-stop-options" tabindex="-1"><a class="header-anchor" href="#_5、docker-stop-options" aria-hidden="true">#</a> 5、docker stop [options]</h5><p>介绍：停止容器，options是容器的id，可以先用 docker ps 查询正在的容器的id，然后用docker sotp命令停止命令</p><p>例：docker stop 5e42b858ff76</p><h5 id="_6、docker-kill-options" tabindex="-1"><a class="header-anchor" href="#_6、docker-kill-options" aria-hidden="true">#</a> 6、docker kill [options]</h5><p>介绍：强制删除容器，options是容器的id，可以先用 docker ps 查询正在的容器的id，然后用docker kill命令强制删除容器</p><p>例：docker kill 5e42b858ff76</p><h5 id="_7、docker-rm-options" tabindex="-1"><a class="header-anchor" href="#_7、docker-rm-options" aria-hidden="true">#</a> 7、docker rm [options]</h5><p>介绍：删除已经停止的容器，这里比删除镜像少了一个i，</p><p>a-&gt;如果需要强制删除，可以加-f，例如：docker rm -f 5e42b858ff76</p><p>b-&gt;删除多个容器，docker rm -f $(docker ps -a -q)</p><p>c-&gt;删除多个容器，docker ps -a -q|xargs docker rm</p><h5 id="_8、docker-logs-options" tabindex="-1"><a class="header-anchor" href="#_8、docker-logs-options" aria-hidden="true">#</a> 8、docker logs [options]</h5><p>options:容器id，可以查看容器的运行日志，报错方便查找</p><h5 id="_9、docker-top-containerid" tabindex="-1"><a class="header-anchor" href="#_9、docker-top-containerid" aria-hidden="true">#</a> 9、docker top [containerId]</h5><p>docker容器就是一个虚拟的运行环境，可以把容器看成是简易版的linux环境（包括root用户权限、进程空间、用户空间、和网络空间等），查看容器的进程</p><h5 id="_10、docker-inspect-containerid" tabindex="-1"><a class="header-anchor" href="#_10、docker-inspect-containerid" aria-hidden="true">#</a> 10、docker inspect [containerId]</h5><p>查看容器内部细节</p><h5 id="_11、docer-exec-it-containerid-bashshell" tabindex="-1"><a class="header-anchor" href="#_11、docer-exec-it-containerid-bashshell" aria-hidden="true">#</a> 11、docer exec -it [containerId] [bashshell]</h5><p>重新进入已经退出的正在运行的容器，例： docker exec -it 4cffd0a46819 /bin/bash.</p><p>在容器中打开新的容器客户端，并可以启动新的进程用exit退出不会导致容器的停止</p><h5 id="_12、docker-attach-containerid" tabindex="-1"><a class="header-anchor" href="#_12、docker-attach-containerid" aria-hidden="true">#</a> 12、docker attach [containerId]</h5><p>重新进入已经退出的正在运行的容器， 直接进入容器启动终端，用exit退出会导致容器的停止</p><h5 id="_13、docker-cp" tabindex="-1"><a class="header-anchor" href="#_13、docker-cp" aria-hidden="true">#</a> 13、docker cp</h5><p>docker cp [容器id]:[容器内路径] [目的主机路径]</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker cp 4cffd0a46819:text.txt ./
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_14、docker-export" tabindex="-1"><a class="header-anchor" href="#_14、docker-export" aria-hidden="true">#</a> 14、docker export</h5><p>docker export [容器id]。把整个容器导出，以做备份</p><p>例：</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker export 4cffd0a46819 &gt; 1234.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_15、docker-import" tabindex="-1"><a class="header-anchor" href="#_15、docker-import" aria-hidden="true">#</a> 15、docker import</h5><p>把整个tar包导入成容器</p><p>例：</p><p>第一步，先把tar包导入成镜像</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>cat 1234.tar | docker import - myubuntu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第二步，再把镜像生成实例</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker run -it myubuntu /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,132),c=[n];function o(s,t){return d(),a("div",null,c)}const h=e(i,[["render",o],["__file","2、常用命令.html.vue"]]);export{h as default};
