<template>
	<div>
		<div class="index-wrap">
			<div class="index-left">
				<div class="index-left-block">
					<h2>产品大全</h2>
					<template v-for="(product, index) in productList">
						<h3>{{product.category}}</h3>
						<ul>
							<li v-for="(v, i) in product.list" :key="i">
								<a target="_blank" :href="v.url">{{v.name}}</a>
								<span class = "hot-tag" v-if="v.hot == true">Hot</span>
							</li>
						</ul>
						<div v-if="index % 2 == 0" class="hr"></div>
					</template>
				</div>
				<div class="index-left-block lastest-news">
					<h2>最新消息</h2>
					<ul>
						<li v-for="news in newsList">
							<a target="_blank" :href="news.url">{{news.author_name}}</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="index-right">
				<div class="swiper-size">
					<swiper :options="swiperOption" ref="mySwiper">
				    <!-- slides -->
				    <swiper-slide>
						  <img class="swiperimg" src="../assets/images/pic1.jpg" alt="">
					  </swiper-slide>
				    <swiper-slide>
							<img class="swiperimg" src="../assets/images/pic2.jpg" alt="">
						</swiper-slide>
				    <swiper-slide>
							<img class="swiperimg" src="../assets/images/pic3.jpg" alt="">
						</swiper-slide>
				    <swiper-slide>
							<img class="swiperimg" src="../assets/images/pic4.jpg" alt="">
						</swiper-slide>
				    <!-- Optional controls -->
				    <div class="swiper-pagination"  slot="pagination"></div>
				    <div class="swiper-button-prev" slot="button-prev"></div>
				    <div class="swiper-button-next" slot="button-next"></div>
				  </swiper>
				</div>
				<div class="index-board-list">
					<div class="index-board-item" v-for="(board, index) in boardList" :class="['index-board-' + board.tag, {'line-last': index % 2 !== 0}]">
						<div class="index-board-item-inner" >
							<h2>{{board.title}}</h2>
							<p>{{board.disc}}</p>
							<div class="index-board-button">
								<router-link :to="{path:'/details/' + board.tag}" class="button">立即购买</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "layout",
		data() {
			return {
				swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
					pagination: {
				    el: '.swiper-pagination',
				  },
					looper: true,
					autoplay:true,
					effect : 'cube',
					slidesPerView: 3,
					centeredSlides: true,
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
        },
				boardList: [
					{
						title: "开放产品",
						disc: "开放产品是一款开放产品",
						tag: "health1"
					},
					{
						title: "品牌营销",
						disc: "品牌营销帮助你的产品更好地找准定位",
						tag: "health2"
					},
					{
						title: "使命必达",
						disc: "使命必达快速迭代永远保持最前端的速度",
						tag: "health3"
					},
					{
						title: "永攀高峰",
						disc: "帮你勇闯高峰，到达事业的顶峰",
						tag: "health4"
					}
				],
				productList : [
					{
						category: '手机应用类',
						list : [
							{
								name: "91助手",
								url: "www.vuejs.org",
								hot: false
							},
							{
								name: "豌豆荚",
								url: "www.vuejs.org",
								hot: true
							},
							{
								name: "金山毒霸",
								url: "www.vuejs.org",
								hot: false
							}
						]
					}, {
						category: 'pc产品',
						list: [
							{
								name: "webstorm",
								url: "www.vuejs.org",
								hot: true
							},
							{
								name: "sublime",
								url: "www.vuejs.org",
								hot: false
							},
							{
								name: "hbuild",
								url: "www.vuejs.org",
								hot: false
							},
							{
								name: "webstorm",
								url: "www.vuejs.org",
								hot: false
							}
						]
					}

				],
				newsList: []
			}
		},
		created() {
			this.$axios.get("http://www.wwtliu.com/sxtstu/news/juhenews.php", {
				params: {
					count: 10,
					type: "top"
				}
			}).then(res => {
				for (var i = 0; i < 10; i++) {
					this.newsList.push(res.data.result.data[i]);
				}
			}).catch(error => {
				console.log(error);
			})
		}
	}
</script>

<style scoped>
.index-wrap {
	width: 1200px;
	margin: 0 auto;
	overflow: hidden;
}
.index-left {
	float: left;
	width: 300px;
	text-align: left;
}
.index-right {
	float: right;
	width: 900px;
}
.swiper-size {
	margin-top: 15px;
	height: 350px;
}
.index-left-block {
	margin: 15px;
	background: #fff;
	box-shadow: 0 0 1px #ddd;
	height: 350px;
}
.index-left-block .hr {
	margin-bottom: 20px;
	height: 1px;
	width: 100%;
	background: #ddd;
}
.hr {
	height: 1px;
	width: 100%;
	background: #ddd;
}
.index-left-block h2 {
	background: #4fc08d;
	color: #fff;
	padding: 10px 15px;
	margin-bottom: 20px;
}
.index-left-block h3 {
	padding: 0 15px 5px 15px;
	font-weight: bold;
	color: #222;
}
.index-left-block ul {
	padding: 10px 15px;
}
.index-left-block li {
	padding: 5px;
}
.index-board-list {
	overflow: hidden;
	margin-top: 15px;
}
.index-board-item {
	float: left;
	width: 400px;
	background: #fff;
	box-shadow: 0 0 1px #ddd;
	padding: 20px;
	margin-right: 20px;
	margin-bottom: 20px;
}
.index-board-item-inner {
	min-height: 125px;
	padding-left: 180px;
}
.index-board-health1 .index-board-item-inner {
	background: url(../assets/images/health-1.png) no-repeat;
	background-size: contain;
}
.index-board-health2 .index-board-item-inner {
	background: url(../assets/images/health-2.png) no-repeat;
	background-size: contain;
}
.index-board-health3 .index-board-item-inner {
	background: url(../assets/images/health-3.png) no-repeat;
	background-size: contain;
}
.index-board-health4 .index-board-item-inner {
	background: url(../assets/images/health-4.jpg) no-repeat;
	background-size: contain;
}
.index-board-item h2 {
	font-size: 18px;
	font-weight: bold;
	color: #000;
	margin-bottom: 15px;
}
.line-last {
	margin-right: 0;
}
.index-board-button {
	margin-top: 20px;
}
.lastest-news {
	min-height: 350px;
}
.hot-tag {
	background: red;
	color: #fff;
}
.new-item {
	display: inline-block;
	width: 230px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.swiper-img {
	width: 100%;
}
.button {
	background: mediumseagreen;
	color: #fff;
	display: inline-block;
	padding: 10px 20px;
	cursor: pointer;
}
.button:hover {
	text-decoration: none;
	background: #40a96f;
}

.swiperimg {
	width: 100%;
	height: 350px;
}

.swiper-size {
	margin-top: 15px
}

</style>
