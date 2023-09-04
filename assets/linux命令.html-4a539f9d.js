import{_ as e,o as a,c as t,b as i}from"./app-71cdf572.js";const r={},l=i('<h4 id="_1、cat" tabindex="-1"><a class="header-anchor" href="#_1、cat" aria-hidden="true">#</a> 1、cat</h4><p>​ cat 命令是 Unix 和 Linux 系统中的一个用于查看文件内容的命令。它可以将一个或多个文件的内容输出到终端，也可以用于文件的合并操作。</p><h5 id="_1-1、命令语法" tabindex="-1"><a class="header-anchor" href="#_1-1、命令语法" aria-hidden="true">#</a> 1.1、命令语法</h5><p>​ cat [选项] [文件...]</p><h5 id="_1-2、命令选项" tabindex="-1"><a class="header-anchor" href="#_1-2、命令选项" aria-hidden="true">#</a> 1.2、命令选项</h5><ul><li><code>-n</code>：显示行号。</li><li><code>-b</code>：显示非空行号。</li><li><code>-s</code>：合并空白行。</li><li><code>-E</code>：在每行结尾添加 $ 符号。</li><li><code>-T</code>：将制表符显示为 ^I。</li><li><code>-v</code>：显示不可打印字符。</li></ul><h5 id="_1-3、命令示例" tabindex="-1"><a class="header-anchor" href="#_1-3、命令示例" aria-hidden="true">#</a> 1.3、命令示例</h5><ol><li><p>查看单个文件的内容：</p><p>cat file.txt</p></li><li><p>查看多个文件的内容：</p><p>cat file1.txt file2.txt</p></li><li><p>将多个文件的内容合并到一个文件中：</p><p>cat file1.txt file2.txt &gt; file3.txt</p></li><li><p>显示文件的行号：</p><p>cat -n file.txt</p></li></ol><h5 id="_1-4、注意事项" tabindex="-1"><a class="header-anchor" href="#_1-4、注意事项" aria-hidden="true">#</a> 1.4、注意事项</h5><ul><li><p>cat 命令可以用于查看文件内容，也可以用于文件的合并操作。</p></li><li><p>cat 命令不支持搜索、滚动、翻页等操作，如果需要进行这些操作，可以使用 less 命令。</p></li><li><p>cat 命令可以显示行号、合并空白行、显示不可打印字符等，可以根据需要选择相应的选项。</p></li></ul><h4 id="_2、tee" tabindex="-1"><a class="header-anchor" href="#_2、tee" aria-hidden="true">#</a> 2、tee</h4><p>​ tee命令用于读取标准输入的数据，将内容输出到屏幕，同时保存成文件，并且可以保存到多个文件。</p><h5 id="_2-1、命令语法" tabindex="-1"><a class="header-anchor" href="#_2-1、命令语法" aria-hidden="true">#</a> 2.1、命令语法</h5><p>​ tee [选项] [文件...]</p><h5 id="_2-2、命令选项" tabindex="-1"><a class="header-anchor" href="#_2-2、命令选项" aria-hidden="true">#</a> 2.2、命令选项</h5><ul><li>-a :将输出添加到 File 的末尾而不是覆盖写入。</li><li>-i :忽略中断。</li></ul><h5 id="_2-3、命令示例" tabindex="-1"><a class="header-anchor" href="#_2-3、命令示例" aria-hidden="true">#</a> 2.3、命令示例</h5><ol><li>要同时查看和保存一个命令的输出：<strong>lint program.c | tee program.lint</strong></li></ol><p>它在工作站上显示命令 lint program.c 的标准输出，同时在文件 program.lint 中保存输出的一个副本。如果 program.lint 文件早已存在，它将被删除并替换。</p><ol start="2"><li>要同时查看一个命令的输出并保存到一个现有文件：<strong>lint program.c | tee -a program.lint</strong></li></ol><p>它将在工作站上显示 lint program.c 命令的标准输出，同时在 program.lint 文件尾部添加输出的一个副本。如果 program.lint 文件不存在，它将被创建。</p><p>文件</p><p>/usr/bin/tee 包含 tee 命令。</p><h5 id="_2-4、注意事项" tabindex="-1"><a class="header-anchor" href="#_2-4、注意事项" aria-hidden="true">#</a> 2.4、注意事项</h5><p>退出状态</p><p>命令返回以下退出值：</p><p>0 标准输入被成功地复制到所有输出文件中。</p><p>&gt;0 发生错误。</p><p>注：如果向任意成功打开的File操作数的写入不成功，写入其它成功打开的File操作数，并且标准输出会继续，但是退出值将会是&gt;0。</p><h4 id="_3、touch" tabindex="-1"><a class="header-anchor" href="#_3、touch" aria-hidden="true">#</a> 3、touch</h4><p>touch命令主要是用来创建普通文件，用法为touch test.txt，如果文件纯在，则表示修改当前文件时间，如果不存在就创建文件，可以用 touch --help查看参数</p><p>例如 touch -a aa/text.txt</p><p>然后用stat aa/text.txt查看文件读取时间时间</p><h4 id="_4、echo" tabindex="-1"><a class="header-anchor" href="#_4、echo" aria-hidden="true">#</a> 4、echo</h4>',34),h=[l];function c(d,n){return a(),t("div",null,h)}const p=e(r,[["render",c],["__file","linux命令.html.vue"]]);export{p as default};
