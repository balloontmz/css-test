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