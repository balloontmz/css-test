# css-test

##

### html
manifest 

html 应用缓存:
1. MANIFEST
2. NETWORK   -- 无法连接显示的回退页面
3. FALLBACK -- 永远不被缓存的文件

在 manifest 定义了缓存的情况下，不管怎么修改样式表都不会改变，如果需要改变，需要刷新 manifest 文件的内容。

manifest 主要适用于不依赖网络，且下载后不需要再次更新的 html 游戏、应用或页面。

### head

head 是 html 文档中所有元数据的集合之处。  五个主要部分，分别是 title、link、style、base、meta

base 元素用于指定标记文档的基础 url，即相对路径的前缀

base 也可用于设置全局浏览器打开方式。

meta 指定除了前文指定的文档元数据外的其他元数据

meta: keywords 和 description 用于 seo。 robots 指定能被抓取的内容 -- 用法？

meta 还能完成诸如刷新、重定向、缓存时间等功能。

meta 还能强制 baidu 显示原网页而不是转码的快照。

### body

一般分为 头部区域、内容区域、侧边栏区域、页脚区域。

头部包括页面标题、logo 以及主菜单。
内容区域是网页主要内容
侧边栏显示一些页面相关的内容
页脚一般包含一些页脚链接、友情链接、版权申明信息等。

footer 和 header 并不是区块内容，不能再放入 section。article 和 section 、aside 是区块内容

**分组**
ul 无序列表 ol 有序列表

dl、dt、dd 列表显示

figure 展示图片、图标等

每个页面最多只能有一个 main 元素

**文本**

a 标签

span 标签用于文本中设定一些样式。区别其他 p 标签。

em、strong 强调文本。em 语义、语气加强，strong 文本重要性

big、small 文本放大缩小显示

q、cite 插入引用。

**note：**
采用a 标签和其他带 id 属性的元素进行锚点设置

**表单**

form  method 和 action 属性

input  required autofocus 等属性 type name 设置不同的值能为移动端适配不同的输入框 pattern 用正则表达式规范输入

单选框的实现 p 和 fieldset 元素实现

select 实现下拉框

buttom 提交

**盒模型**
box-sizing 指定盒模型类型，默认为 content-box 

**优先级**
1. 通用选择器优先级最低 `*{...}`
2. 标签选择器优先级高于通用选择器 `h1{...}`
3. 类选择器优先级高于标签选择器 `.blue{...}`
4. 伪类选择器优先级高于类选择器 ``
5. id 选择器优先级高于伪类选择器.

