import{_ as i,r as t,o as l,c as o,a as e,d as n,e as a,b as r}from"./app-05941657.js";const d={},c=r('<h2 id="一、kubernetes介绍" tabindex="-1"><a class="header-anchor" href="#一、kubernetes介绍" aria-hidden="true">#</a> 一、Kubernetes介绍</h2><h3 id="_1、简介" tabindex="-1"><a class="header-anchor" href="#_1、简介" aria-hidden="true">#</a> 1、简介</h3><p>kubernetes是一个docker容器编排工具，为你提供了一个可弹性运行分布式系统的框架。 Kubernetes 会满足你的扩展要求、故障转移、部署模式等</p><h3 id="_2、特性" tabindex="-1"><a class="header-anchor" href="#_2、特性" aria-hidden="true">#</a> 2、特性</h3><p>kubernetes具有以下：</p><ul><li><p><strong>服务发现和负载均衡</strong> Kubernetes 可以使用 DNS 名称或自己的 IP 地址公开容器，如果进入容器的流量很大， Kubernetes 可以负载均衡并分配网络流量，从而使部署稳定。</p></li><li><p><strong>存储编排</strong> Kubernetes 允许你自动挂载你选择的存储系统，例如本地存储、公共云提供商等。</p></li><li><p><strong>自动部署和回滚</strong> 你可以使用 Kubernetes 描述已部署容器的所需状态，它可以以受控的速率将实际状态 更改为期望状态。例如，你可以自动化 Kubernetes 来为你的部署创建新容器， 删除现有容器并将它们的所有资源用于新容器。</p></li><li><p><strong>自动完成装箱计算</strong> Kubernetes 允许你指定每个容器所需 CPU 和内存（RAM）。 当容器指定了资源请求时，Kubernetes 可以做出更好的决策来管理容器的资源。</p></li><li><p><strong>自我修复</strong> Kubernetes 重新启动失败的容器、替换容器、杀死不响应用户定义的 运行状况检查的容器，并且在准备好服务之前不将其通告给客户端。</p></li><li><p><strong>密钥与配置管理</strong> Kubernetes 允许你存储和管理敏感信息，例如密码、OAuth 令牌和 ssh 密钥。 你可以在不重建容器镜像的情况下部署和更新密钥和应用程序配置，也无需在堆栈配置中暴露密钥。</p></li></ul><h3 id="架构" tabindex="-1"><a class="header-anchor" href="#架构" aria-hidden="true">#</a> 架构</h3><h3 id="_1、组件架构" tabindex="-1"><a class="header-anchor" href="#_1、组件架构" aria-hidden="true">#</a> 1、组件架构</h3><p><img src="https://atts.w3cschool.cn/attachments/image/20230911/1694389486215874.png" alt=""></p><h4 id="_1-1、control-plane" tabindex="-1"><a class="header-anchor" href="#_1-1、control-plane" aria-hidden="true">#</a> 1.1、Control Plane</h4><p>控制平面组件（Control Plane Components）</p>',11),u=e("code",null,"replicas",-1),p={href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://kubernetes.io/zh/docs/setup/production-environment/tools/kubeadm/high-availability/",target:"_blank",rel:"noopener noreferrer"},b=e("h4",{id:"_1-2、api-kube-apiserver",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-2、api-kube-apiserver","aria-hidden":"true"},"#"),n(" 1.2、api(kube-apiserver)")],-1),m={href:"https://kubernetes.io/zh/docs/reference/glossary/?all=true#term-control-plane",target:"_blank",rel:"noopener noreferrer"},v={href:"https://kubernetes.io/zh/docs/reference/command-line-tools-reference/kube-apiserver/",target:"_blank",rel:"noopener noreferrer"},k=e("h4",{id:"_1-3、etcd",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-3、etcd","aria-hidden":"true"},"#"),n(" 1.3、etcd")],-1),_=e("p",null,"etcd 是兼具一致性和高可用性的键值数据库，可以作为保存 Kubernetes 所有集群数据的后台数据库。",-1),f=e("p",null,"您的 Kubernetes 集群的 etcd 数据库通常需要有个备份计划。",-1),g={href:"https://etcd.io/docs/",target:"_blank",rel:"noopener noreferrer"},x=e("h4",{id:"_1-4、sched-kube-scheduler",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-4、sched-kube-scheduler","aria-hidden":"true"},"#"),n(" 1.4、sched(kube-scheduler)")],-1),y={href:"https://kubernetes.io/zh/docs/concepts/architecture/nodes/",target:"_blank",rel:"noopener noreferrer"},K={href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/",target:"_blank",rel:"noopener noreferrer"},P=e("p",null,"调度决策考虑的因素包括单个 Pod 和 Pod 集合的资源需求、硬件/软件/策略约束、亲和性和反亲和性规范、数据位置、工作负载间的干扰和最后时限。",-1),w=e("h4",{id:"_1-5、c-m-kube-controller-manager",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-5、c-m-kube-controller-manager","aria-hidden":"true"},"#"),n(" 1.5、c-m（kube-controller-manager）")],-1),E={href:"https://kubernetes.io/zh/docs/concepts/architecture/controller/",target:"_blank",rel:"noopener noreferrer"},z={href:"https://kubernetes.io/zh/docs/concepts/architecture/controller/",target:"_blank",rel:"noopener noreferrer"},N=e("p",null,"这些控制器包括:",-1),S=e("ul",null,[e("li",null,"节点控制器（Node Controller）: 负责在节点出现故障时进行通知和响应"),e("li",null,"任务控制器（Job controller）: 监测代表一次性任务的 Job 对象，然后创建 Pods 来运行这些任务直至完成"),e("li",null,"端点控制器（Endpoints Controller）: 填充端点(Endpoints)对象(即加入 Service 与 Pod)"),e("li",null,"服务帐户和令牌控制器（Service Account & Token Controllers）: 为新的命名空间创建默认帐户和 API 访问令牌")],-1),C=e("h4",{id:"_1-6、c-c-m-cloud-controller-manager",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-6、c-c-m-cloud-controller-manager","aria-hidden":"true"},"#"),n(" 1.6、c-c-m(cloud-controller-manager)")],-1),I={href:"https://kubernetes.io/zh/docs/reference/glossary/?all=true#term-control-plane",target:"_blank",rel:"noopener noreferrer"},A=r('<p><code>cloud-controller-manager</code> 仅运行特定于云平台的控制回路。 如果你在自己的环境中运行 Kubernetes，或者在本地计算机中运行学习环境， 所部署的环境中不需要云控制器管理器。</p><p>与 <code>kube-controller-manager</code> 类似，<code>cloud-controller-manager</code> 将若干逻辑上独立的 控制回路组合到同一个可执行文件中，供你以同一进程的方式运行。 你可以对其执行水平扩容（运行不止一个副本）以提升性能或者增强容错能力。</p><p>下面的控制器都包含对云平台驱动的依赖：</p><ul><li>节点控制器（Node Controller）: 用于在节点终止响应后检查云提供商以确定节点是否已被删除</li><li>路由控制器（Route Controller）: 用于在底层云基础架构中设置路由</li><li>服务控制器（Service Controller）: 用于创建、更新和删除云提供商负载均衡器</li></ul><h3 id="_2、node-组件" tabindex="-1"><a class="header-anchor" href="#_2、node-组件" aria-hidden="true">#</a> 2、Node 组件</h3><p>节点组件在每个节点上运行，维护运行的 Pod 并提供 Kubernetes 运行环境。</p><h4 id="_2-1、kubelet" tabindex="-1"><a class="header-anchor" href="#_2-1、kubelet" aria-hidden="true">#</a> 2.1、kubelet</h4>',7),O={href:"https://kubernetes.io/zh/docs/concepts/architecture/nodes/",target:"_blank",rel:"noopener noreferrer"},F={href:"https://kubernetes.io/zh/docs/concepts/overview/what-is-kubernetes/#why-containers",target:"_blank",rel:"noopener noreferrer"},L={href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/",target:"_blank",rel:"noopener noreferrer"},V=e("p",null,"kubelet 接收一组通过各类机制提供给它的 PodSpecs，确保这些 PodSpecs 中描述的容器处于运行状态且健康。 kubelet 不会管理不是由 Kubernetes 创建的容器。",-1),B=e("h4",{id:"_2-1、kube-proxy",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-1、kube-proxy","aria-hidden":"true"},"#"),n(" 2.1、kube-proxy")],-1),M={href:"https://kubernetes.io/zh/docs/reference/command-line-tools-reference/kube-proxy/",target:"_blank",rel:"noopener noreferrer"},R={href:"https://kubernetes.io/zh/docs/concepts/services-networking/service/",target:"_blank",rel:"noopener noreferrer"},U=r(`<p>kube-proxy 维护节点上的网络规则。这些网络规则允许从集群内部或外部的网络会话与 Pod 进行网络通信。</p><p>如果操作系统提供了数据包过滤层并可用的话，kube-proxy 会通过它来实现网络规则。否则， kube-proxy 仅转发流量本身。</p><h2 id="二、安装" tabindex="-1"><a class="header-anchor" href="#二、安装" aria-hidden="true">#</a> 二、安装</h2><h3 id="_1、硬件需求" tabindex="-1"><a class="header-anchor" href="#_1、硬件需求" aria-hidden="true">#</a> 1、硬件需求</h3><ul><li>linux系统主机</li><li>至少2GB或者争夺的RAM</li><li>2cpu核或者更多</li><li>集群中所有机去的网络彼此能够互联（公网内外都可以） <ul><li>设置防火墙放行规则</li><li>设置不同主机名（hostname）</li><li>内网互信</li><li>永不关闭</li></ul></li></ul><h3 id="_2、安装docker" tabindex="-1"><a class="header-anchor" href="#_2、安装docker" aria-hidden="true">#</a> 2、安装docker</h3><p>见docker</p><h3 id="_3、安装" tabindex="-1"><a class="header-anchor" href="#_3、安装" aria-hidden="true">#</a> 3、安装</h3><h4 id="_3-1、设置主机名" tabindex="-1"><a class="header-anchor" href="#_3-1、设置主机名" aria-hidden="true">#</a> 3.1、设置主机名</h4><p>格式、hostnamectl set-hostname [名字]</p><p>a、先设置一个主机：hostnamectl set-hostname k8s-master。</p><p>b、其他主机可以类似hostnamectl set-hostname k8s-node1，hostnamectl set-hostname k8s-node2之类的</p><p>c、设置完后重新连接一下，主机名字就变化了</p><h4 id="_3-2、预备环境" tabindex="-1"><a class="header-anchor" href="#_3-2、预备环境" aria-hidden="true">#</a> 3.2、预备环境</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将 SELinux 设置为 permissive 模式（相当于将其禁用）</span>
setenforce <span class="token number">0</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/^SELINUX=enforcing$/SELINUX=permissive/&#39;</span> /etc/selinux/config

//查看交换分区  
<span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># free -m</span>
              total        used        <span class="token function">free</span>      shared  buff/cache   available
Mem:           <span class="token number">3694</span>         <span class="token number">279</span>        <span class="token number">1045</span>           <span class="token number">0</span>        <span class="token number">2369</span>        <span class="token number">3131</span>
Swap:             <span class="token number">0</span>           <span class="token number">0</span>           <span class="token number">0</span>

<span class="token comment">#关闭交换分区 </span>
swapoff <span class="token parameter variable">-a</span>  
<span class="token function">sed</span> <span class="token parameter variable">-ri</span> <span class="token string">&#39;s/.*swap.*/#&amp;/&#39;</span> /etc/fstab


<span class="token comment">#允许 iptables 检查桥接流量</span>
<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/modules-load.d/k8s.conf</span>
br_netfilter
EOF</span>

<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/sysctl.d/k8s.conf</span>
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF</span>

<span class="token function">sysctl</span> <span class="token parameter variable">--system</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2、安装kubelet、kubeadm、kubectl" tabindex="-1"><a class="header-anchor" href="#_3-2、安装kubelet、kubeadm、kubectl" aria-hidden="true">#</a> 3.2、安装kubelet、kubeadm、kubectl</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#配置k8s的yum源地址</span>
<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">|</span>  <span class="token function">tee</span> /etc/yum.repos.d/kubernetes.repo</span>
[kubernetes]
name=Kubernetes
baseurl=http://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=0
repo_gpgcheck=0
gpgkey=http://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg
   http://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg 
EOF</span>



<span class="token comment">#安装 kubelet，kubeadm，kubectl</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> kubelet-1.20.9 kubeadm-1.20.9 kubectl-1.20.9

<span class="token comment">#启动kubelet</span>
systemctl <span class="token builtin class-name">enable</span> <span class="token parameter variable">--now</span> kubelet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、使用kubeadm引导集群" tabindex="-1"><a class="header-anchor" href="#_4、使用kubeadm引导集群" aria-hidden="true">#</a> 4、使用kubeadm引导集群</h3><h4 id="_4-1、下载各个机器需要的镜像" tabindex="-1"><a class="header-anchor" href="#_4-1、下载各个机器需要的镜像" aria-hidden="true">#</a> 4.1、下载各个机器需要的镜像</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tee</span> ./images.sh <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
#!/bin/bash
images=(
kube-apiserver:v1.20.9
kube-proxy:v1.20.9
kube-controller-manager:v1.20.9
kube-scheduler:v1.20.9
coredns:1.7.0
etcd:3.4.13-0
pause:3.2
)
for imageName in \${images[@]} ; do
docker pull registry.cn-hangzhou.aliyuncs.com/lfy_k8s_images/$imageName
done
EOF</span>
   
<span class="token function">chmod</span> +x ./images.sh <span class="token operator">&amp;&amp;</span> ./images.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2、初始化主节点" tabindex="-1"><a class="header-anchor" href="#_4-2、初始化主节点" aria-hidden="true">#</a> 4.2、初始化主节点</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#所有机器添加master域名映射，以下需要修改为自己的
echo &quot;1.116.82.74  cluster-endpoint&quot; &gt;&gt; /etc/hosts

#主节点初始化
kubeadm init \\
--apiserver-advertise-address=1.116.82.74 \\
--control-plane-endpoint=cluster-endpoint \\
--image-repository registry.cn-hangzhou.aliyuncs.com/lfy_k8s_images \\
--kubernetes-version v1.20.9 \\
--service-cidr=10.96.0.0/16 \\
--pod-network-cidr=192.168.0.0/16

#所有网络范围不重叠
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function $(q,J){const s=t("ExternalLinkIcon");return l(),o("div",null,[c,e("p",null,[n("控制平面的组件对集群做出全局决策(比如调度)，以及检测和响应集群事件（例如，当不满足部署的 "),u,n(" 字段时，启动新的 "),e("a",p,[n("pod"),a(s)]),n("）。")]),e("p",null,[n("控制平面组件可以在集群中的任何节点上运行。 然而，为了简单起见，设置脚本通常会在同一个计算机上启动所有控制平面组件， 并且不会在此计算机上运行用户容器。 请参阅"),e("a",h,[n("使用 kubeadm 构建高可用性集群"),a(s)]),n(" 中关于多 VM 控制平面设置的示例。")]),b,e("p",null,[n("API 服务器是 Kubernetes "),e("a",m,[n("控制面"),a(s)]),n("的组件， 该组件公开了 Kubernetes API。 API 服务器是 Kubernetes 控制面的前端。")]),e("p",null,[n("Kubernetes API 服务器的主要实现是 "),e("a",v,[n("kube-apiserver"),a(s)]),n("。 kube-apiserver 设计上考虑了水平伸缩，也就是说，它可通过部署多个实例进行伸缩。 你可以运行 kube-apiserver 的多个实例，并在这些实例之间平衡流量。")]),k,_,f,e("p",null,[n("要了解 etcd 更深层次的信息，请参考 "),e("a",g,[n("etcd 文档"),a(s)]),n("。")]),x,e("p",null,[n("控制平面组件，负责监视新创建的、未指定运行"),e("a",y,[n("节点（node）"),a(s)]),n("的 "),e("a",K,[n("Pods"),a(s)]),n("，选择节点让 Pod 在上面运行。")]),P,w,e("p",null,[n("在主节点上运行 "),e("a",E,[n("控制器"),a(s)]),n(" 的组件。")]),e("p",null,[n("从逻辑上讲，每个"),e("a",z,[n("控制器"),a(s)]),n("都是一个单独的进程， 但是为了降低复杂性，它们都被编译到同一个可执行文件，并在一个进程中运行。")]),N,S,C,e("p",null,[n("云控制器管理器是指嵌入特定云的控制逻辑的 "),e("a",I,[n("控制平面"),a(s)]),n("组件。 云控制器管理器允许您链接集群到云提供商的应用编程接口中， 并把和该云平台交互的组件与只和您的集群交互的组件分离开。")]),A,e("p",null,[n("一个在集群中每个"),e("a",O,[n("节点（node）"),a(s)]),n("上运行的代理。 它保证"),e("a",F,[n("容器（containers）"),a(s)]),n("都 运行在 "),e("a",L,[n("Pod"),a(s)]),n(" 中。")]),V,B,e("p",null,[e("a",M,[n("kube-proxy"),a(s)]),n(" 是集群中每个节点上运行的网络代理， 实现 Kubernetes "),e("a",R,[n("服务（Service）"),a(s)]),n(" 概念的一部分。")]),U])}const X=i(d,[["render",$],["__file","1、简介和安装.html.vue"]]);export{X as default};
