#重新启动了后台服务器的编写，
#已经完成的接口有employee登录，登出，验证码接口，
#明天要把思路重新捋一遍，制定好桌面端-与服务器的关联，写出新的接口需求列表;

###2019年5月26日，接口捋一遍
#商品管理已经有了，既然是商品管理-有一张商品表，商品名字，商品描述，商品进价，商品售价，商品数量，商品图片；
#员工管理已经有了，员工姓名，密码，邮箱（用来代替手机验证码，手机验证码较为复杂）
#用户管理，用户姓名，密码，邮箱，地址（送货用），购物车（），订单页面（），

##主要矛盾；设计用户表，使其一个文档（document）包括以上各个需求以及，地址登记，订单存放，购物车等目的；
##如何拿到商品表？爬虫获取？
##先用接口填满react端口的需求，具体实现可以完善服务端；
##passport认证的梳理清楚，搞清楚维持登录态的业务；
##熟练使用linux的基本配置与使用
##七牛云图片备份，如果将多点图片自己使用？自己存七牛云还是怎么样？



##???日后设计，可以结合百度地图实现路径规划哦


####2019年5月27日
##  今天遇到了一些麻烦，mongodb我换了一下数据库，想用原来的数据库，结果ps -ef 然后kill -s
9 进程号，结果mongod没有正规关闭，说是出问题，然后删除mongodb.lock文件，修复模式不知道是个啥
一直启动不了，一直报错，特别的苦恼
linux和mongod的知识还必须而要学习，但是知识量还真的不少，得抓紧时间赶快看书，不然太耽误整体
的进度！！！    今天成果，本地服务和线上服务可以正常发邮件了，恢复到了4个月前的状态，除此之外
没有任何进步的地方；我与5月26日启动学习计划，但是到现在都21天了，服务器端还没有有正式
的进展，这个速度真的很堪忧啊，react也没有本质的进展，知识熟练了一点，页面写了两个而已，
真的是蛮苦恼的，学习真的如逆水行舟，不进真的会退步
#### 2019年6月22日
### 今天胡乱忙了一天，我查了一下996为什么很累，答案说，是人都会累，领导们每天上十几个小时班，
打高尔夫算工作，泡温泉算工作，吃饭也算工作。
说这么多，其实我也弄不明白，不过确实身体很累，觉得撑不住了。这个真的是事实。


###2019年6月23日，今天是久违的周末，上午睡到了10点起床，看视频，看刚买的视频，下午吃了饭
也看了会，看到了第六章，这个老师，讲的是真的棒，应该是正儿八经的后台开发人员，不是
前端开发过来玩一下koa,正儿八经的后台开发




##### 2019年6月25日，今天终于把那个jq项目基本搞完了，真的是头大。
### 希望接下来一段时间能够恢复正常，眼睛看的都累了，不过以前真的没有做过这么大的
pc平台项目，收货其实还可以的


#### 2019年6月26日，今天又是很繁忙的一天，其实工作的，量没多大，但是脑子蒙的很，觉得自己
脑子都空了，其他组的任务本来我是很拒绝的，但是看样子，好像非我不可了，也是很难过。


### 2019年6月28日，今天蛮开心的，因为996结束了，终于有大量时间可以自己学习啦！

### 2019年6月29日，我还是来公司了，我承认主要目的是多要一天调休，但事实上，证明我是错的，身体真的是受不了了，这两天连续被掀被子，导致肚子着凉
胃不舒服，天天拉肚子，虚的很，真的是不能被掀被子，宁可迟到，不能身体毁了，今天难受了一天，知道下午5点半多精神和身体才恢复过来，感慨万千
今天收获，看慕课视频看到了13涨，今天预计可以看完，今天做了linux的笔记，发现内容好难，还是学一点皮毛吧，学点vim,和shell就好了，一套文件系统，拉轰的
受不了，明天周日，好好休息一天，身体真的被掏空了！！！


###2019年6月30日，很遗憾，今天并没有学习，而且还有其他的琐事打扰，视频也没有看完，这个慕课视频
开始有难度起来了，明天在火车上把他看完吧！

###2019年7月5日，处理完了上述的一些琐事，学习进度必须跟上了，不然就废了，公司开始了按时间安排工作，
这样其实是好事，但是心里还是觉得怪怪的。一个月的时间已经过去了！现在距离9月份只有不到两个月了，
心里面还蛮慌的，只慌没有毛用，项目进度慢的吓人，结束了996的工作安排，这次没有任何
理由来说没时间写项目了，koa2的学习视频也看了，更没有理由拖进度了！

### 2019年7月8日，前天和昨天玩乐高玩的不亦乐乎，今天没写代码，看了两个小时的linux，争取早日把书过一遍，但是不能耽误过多时间，知道即可，不用熟练使用
等过几天给二婷转没有提代码的罚款哦

### 2019年7月9日，今天早点回家，给婷婷定蛋糕，得给她挑一个喜欢的种类，回去看设计模式
今天代码遇到了性能问题，夸张的要命，select用了10秒才能响应，突然反应过来了，不能用refs传递数据？refs不是通过dom来做事情的吗，这一点需要继续研究一下refs和props的区别 