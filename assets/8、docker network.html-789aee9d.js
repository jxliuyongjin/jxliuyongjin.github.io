import{_ as e,o as n,c as i,b as d}from"./app-78a18f9b.js";const a={},r=d(`<h2 id="一、作用" tabindex="-1"><a class="header-anchor" href="#一、作用" aria-hidden="true">#</a> 一、作用</h2><ul><li><p>容器之间的互联和通信以及端口映射</p></li><li><p>容器IP变动时可以通过服务名直接连接网络通讯而不受影响</p></li><li><p>docker网络管理和容器调用之间的规划</p></li></ul><h2 id="二、常用命令" tabindex="-1"><a class="header-anchor" href="#二、常用命令" aria-hidden="true">#</a> 二、常用命令</h2><h5 id="_1、docker-network-ls" tabindex="-1"><a class="header-anchor" href="#_1、docker-network-ls" aria-hidden="true">#</a> 1、docker network ls</h5><p>介绍：查看docker网络命令，docker 默认含有三个网桥</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>[root@VM-12-17-centos ~]# docker network ls
NETWORK ID     NAME      DRIVER    SCOPE
17213a128f88   bridge    bridge    local
1c95e4dc6f94   host      host      local
76ebe7966676   none      null      local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2、docker-network-inspect-网络名" tabindex="-1"><a class="header-anchor" href="#_2、docker-network-inspect-网络名" aria-hidden="true">#</a> 2、docker network inspect [网络名]</h5><p>介绍：查看网络数据源</p><h5 id="_3、docker-create-网络名字" tabindex="-1"><a class="header-anchor" href="#_3、docker-create-网络名字" aria-hidden="true">#</a> 3、docker create [网络名字]</h5><p>介绍：创建网络</p><h5 id="_4、docker-network-rm-网络名" tabindex="-1"><a class="header-anchor" href="#_4、docker-network-rm-网络名" aria-hidden="true">#</a> 4、docker network rm [网络名]</h5><p>介绍，删除网络</p><h5 id="_5、其他" tabindex="-1"><a class="header-anchor" href="#_5、其他" aria-hidden="true">#</a> 5、其他</h5><p>docker network --help</p><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>Commands:
  connect     Connect a container to a network
  create      Create a network
  disconnect  Disconnect a container from a network
  inspect     Display detailed information on one or more networks
  ls          List networks
  prune       Remove all unused networks
  rm          Remove one or more networks
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、网络模式" tabindex="-1"><a class="header-anchor" href="#三、网络模式" aria-hidden="true">#</a> 三、网络模式</h2><h3 id="_1、bridge模式" tabindex="-1"><a class="header-anchor" href="#_1、bridge模式" aria-hidden="true">#</a> 1、bridge模式</h3><p>介绍：为每一个容器分配、设置IIP等，并将容器连接到一个docker0，虚拟网桥，默认为该模式.</p><p>命令：--network bridge</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d -p 8080:8080 --network bridge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>图解：</p><p><img src="https://atts.w3cschool.cn/attachments/image/20230907/1694043716193662.png" alt=""></p><h3 id="_2、host模式" tabindex="-1"><a class="header-anchor" href="#_2、host模式" aria-hidden="true">#</a> 2、host模式</h3><p>介绍：容器将不会虚拟自己的网卡，配置自己的ip，而实使用宿主机的ip和端口</p><p>图解：</p><p><img src="https://atts.w3cschool.cn/attachments/image/20230907/1694050666273448.png" alt=""></p><p>命令：--network host</p><p>docker run -d -p 8082:8080 --network host [container]</p><p>例子：</p><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>docker run -d --network host --name hosttest test-demo:1.0

docker inspect hosttest

&quot;Networks&quot;: {
                &quot;host&quot;: {
                    &quot;IPAMConfig&quot;: null,
                    &quot;Links&quot;: null,
                    &quot;Aliases&quot;: null,
                    &quot;NetworkID&quot;: &quot;1c95e4dc6f941ab40170c0f2eb04608af87c6934d18a32975bc1337d54a38d2a&quot;,
                    &quot;EndpointID&quot;: &quot;355e0f5c6eecccdad6d802f61ab6b96dab6bd4a1e7b8e730c400cb38a9502b74&quot;,
                    &quot;Gateway&quot;: &quot;&quot;,
                    &quot;IPAddress&quot;: &quot;&quot;,
                    &quot;IPPrefixLen&quot;: 0,
                    &quot;IPv6Gateway&quot;: &quot;&quot;,
                    &quot;GlobalIPv6Address&quot;: &quot;&quot;,
                    &quot;GlobalIPv6PrefixLen&quot;: 0,
                    &quot;MacAddress&quot;: &quot;&quot;,
                    &quot;DriverOpts&quot;: null
                }
            } 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>发现里面的Networks是host，且 IPAddress没有地址了。此容器使用宿主机的网关，如此可以直接访问</p><h3 id="_3、none模式" tabindex="-1"><a class="header-anchor" href="#_3、none模式" aria-hidden="true">#</a> 3、none模式</h3><p>介绍：容器有独立的Network namespace，但没有对其进行任何的网络配置，比如分配veth pair和网桥连接，IP等。</p><p>命令：--network none</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d --network none --name nonetest test-demo:1.0
//进入看发现只有lo
[root@VM-12-17-centos ~]# docker exec -it nonetest bash
root@a80faf76e631:/# ip addr
1: lo: &lt;LOOPBACK,UP,LOWER_UP&gt; mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、container模式" tabindex="-1"><a class="header-anchor" href="#_4、container模式" aria-hidden="true">#</a> 4、container模式</h3><p>介绍：创建新的容器不会创建自己的网卡和配置自己的IP，而是和一个指定的容器共享IP，端口范围等。</p><p>命令：--network container:[容器ID]</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//创建一个alpine容器
 docker run -it --name apline1 alpine /bin/sh
//创建第二个alpine容器
 docker run -it --network container:apline1 --name apline2 alpine /bin/sh
 
// 在两个容器中打命令发现eth0都一模一样
/ # ip addr  
272: eth0@if273: &lt;BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN&gt; mtu 1500 qdisc noqueue state UP 
    link/ether 02:42:ac:11:00:03 brd ff:ff:ff:ff:ff:ff
    inet 172.17.0.3/16 brd 172.17.255.255 scope global eth0
       valid_lft forever preferred_lft forever


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>验证：</p><p>当将apline1 关闭之后，apline2容器中ip addr ，发现没有eth0了</p><h3 id="_5、自定义模式" tabindex="-1"><a class="header-anchor" href="#_5、自定义模式" aria-hidden="true">#</a> 5、自定义模式</h3><p>目标：</p><ul><li>容器之间的互联和通信以及端口映射</li><li>容器IP变动时可以通过服务器名直接网络通信，做到ip变动通信不受影响</li></ul><p>命令：--network container:[容器ID]</p><p>实现：</p><h4 id="_1、创建自定义network" tabindex="-1"><a class="header-anchor" href="#_1、创建自定义network" aria-hidden="true">#</a> 1、创建自定义network</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker network create testnetwork
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2、创建两个容器加入到自定义网络" tabindex="-1"><a class="header-anchor" href="#_2、创建两个容器加入到自定义网络" aria-hidden="true">#</a> 2、创建两个容器加入到自定义网络</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//创建test1
docker run -d -p 8081:6001 --network testnetwork --name testnetwork1 test-demo:1.0
//创建test2
docker run -d -p 8082:6001 --network testnetwork --name testnetwork2 test-demo:1.0

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、测试" tabindex="-1"><a class="header-anchor" href="#_3、测试" aria-hidden="true">#</a> 3、测试</h4><h5 id="_3-1、查看ip-addr" tabindex="-1"><a class="header-anchor" href="#_3-1、查看ip-addr" aria-hidden="true">#</a> 3.1、查看ip addr</h5><p>进入两个容器，分别查看ip addr</p><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>1: lo: &lt;LOOPBACK,UP,LOWER_UP&gt; mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1: lo: &lt;LOOPBACK,UP,LOWER_UP&gt; mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>发现二者的lo完全相同</p><h5 id="_3-2、互相用名字ping" tabindex="-1"><a class="header-anchor" href="#_3-2、互相用名字ping" aria-hidden="true">#</a> 3.2、互相用名字ping</h5><p>在testnetwork1中ping testnetwork2容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>root@3613fe8bcf8d:/# ping testnetwork2
PING testnetwork2 (172.18.0.3): 56 data bytes
64 bytes from 172.18.0.3: icmp_seq=0 ttl=64 time=0.088 ms
64 bytes from 172.18.0.3: icmp_seq=1 ttl=64 time=0.080 ms
64 bytes from 172.18.0.3: icmp_seq=2 ttl=64 time=0.072 ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>成功</strong></p><p>在testnetwork2中ping testnetwork1容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>root@2acc1f401fb3:/# ping testnetwork1
PING testnetwork1 (172.18.0.2): 56 data bytes
64 bytes from 172.18.0.2: icmp_seq=0 ttl=64 time=0.115 ms
64 bytes from 172.18.0.2: icmp_seq=1 ttl=64 time=0.070 ms
64 bytes from 172.18.0.2: icmp_seq=2 ttl=64 time=0.076 ms
64 bytes from 172.18.0.2: icmp_seq=3 ttl=64 time=0.078 ms 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也成功了</p>`,63),s=[r];function t(l,o){return n(),i("div",null,s)}const u=e(a,[["render",t],["__file","8、docker network.html.vue"]]);export{u as default};
