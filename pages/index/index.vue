<template>
	<view class="page-index">
		<view class="header">
			<image src="@/static/icon/logo.png" class="logo" alt />
			<view class="desc">简单易用的uni-app组件库</view>
		</view>

		<view class="container">
			<view class="group">
				<view class="item" v-for="(item, index) in list" :key="index">
					<text class="item__label">{{ item.label }}</text>

					<view class="item__container">
						<view
							v-for="(item2, index2) in item.children"
							:key="index2"
							class="block"
							@tap="toDemo(item, item2)"
						>
							<text class="label">{{ item2.label }}</text>
							<text class="cl-icon-arrow-right" v-if="item2.path"></text>
							<text class="cl-icon-close" v-else></text>
						</view>
					</view>
				</view>
			</view>
		</view>

		<cl-toast ref="toast"></cl-toast>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					label: "Basic 基础组件",
					key: "basic",
					children: [
						{
							label: "Text 文本",
							path: "text"
						},
						{
							label: "Button 按钮",
							path: "button"
						},
						{
							label: "Input 输入框",
							path: "input"
						},
						{
							label: "Image 图片",
							path: "image"
						},
						{
							label: "Icon 图标",
							path: "icon"
						},
						{
							label: "Tag 标签",
							path: "tag"
						},
						{
							label: "Divider 分割线",
							path: "divider"
						}
					]
				},
				{
					label: "Feedback 反馈组件",
					key: "feedback",
					children: [
						{
							label: "Toast 提示",
							path: "toast"
						},
						{
							label: "Message 消息",
							path: "message"
						},
						{
							label: "Loading 加载",
							path: "loading"
						}
					]
				},
				{
					label: "Form 表单组件",
					key: "form",
					children: [
						{
							label: "Radio 单选框",
							path: "radio"
						},
						{
							label: "Switch 开关",
							path: "switch"
						},
						{
							label: "Checkbox 多选框",
							path: "checkbox"
						},
						{
							label: "Select 下拉框",
							path: "select"
						},
						{
							label: "SelectRegion 下拉城市",
							path: "select-region"
						},
						{
							label: "Upload 上传",
							path: "upload"
						},
						{
							label: "Rate 评分",
							path: "rate"
						},
						{
							label: "Rules 校验",
							path: "rules"
						},
						{
							label: "InputNumber 计数器",
							path: "input-number"
						},
						{
							label: "Textarea 文本域",
							path: "textarea"
						}
					]
				},
				{
					label: "Operate 操作",
					key: "operate",
					children: [
						{
							label: "LoadMore 页底提示",
							path: "loadmore"
						},
						{
							label: "Steps 步骤"
						},
						{
							label: "Dialog 对话框",
							path: "dialog"
						},
						{
							label: "Confirm 确认框",
							path: "confirm"
						},
						{
							label: "ActionSheet 底部菜单",
							path: "action-sheet"
						},
						{
							label: "Search 搜索",
							path: "search"
						},
						{
							label: "Dropdown 下拉框"
						}
					]
				},
				{
					label: "Nav 导航组件",
					key: "nav",
					children: [
						{
							label: "Tabs 选项卡",
							path: "tabs"
						},
						{
							label: "Topbar 顶部导航",
							path: "topbar"
						},
						{
							label: "Tabbar 底部导航",
							path: "tabbar"
						}
					]
				},
				{
					label: "Layout 布局",
					key: "layout",
					children: [
						{
							label: "Flex 柔性",
							path: "flex"
						},
						{
							label: "Grid 宫格",
							path: "grid"
						},
						{
							label: "WaterFall 瀑布流",
							path: "waterfall"
						},
						{
							label: "List 列表",
							path: "list"
						},
						{
							label: "Card 卡片",
							path: "card"
						}
					]
				},
				{
					label: "View 视图",
					key: "view",
					children: [
						{
							label: "Popup 弹出层",
							path: "popup"
						},
						{
							label: "Badge 角标",
							path: "badge"
						},
						{
							label: "Avatar 头像",
							path: "avatar"
						},
						{
							label: "CountDown 倒计时",
							path: "countdown"
						},
						{
							label: "NoticeBar 通知公告栏",
							path: "noticebar"
						},
						{
							label: "Progress 进度条",
							path: "progress"
						},
						{
							label: "Slider 滑块",
							path: "slider"
						},
						{
							label: "TimeLine 时间轴",
							path: "timeline"
						},
						{
							label: "Swiper 轮播图",
							path: "swiper"
						}
					]
				},
				{
					label: "Advanced 高级组件",
					key: "advanced",
					children: [
						{
							label: "Filter-Bar 筛选栏",
							path: "filter-bar"
						},
						{
							label: "Captcha 验证码输入框",
							path: "captcha"
						},
						{
							label: "Drag 拖动排序"
						},
						{
							label: "Canvas 画布",
							path: "canvas"
						},
						{
							label: "Cropper 图片裁剪",
							path: "cropper"
						},
						{
							label: "Ticket 优惠券"
						},
						{
							label: "Guide 操作引导"
						},
						{
							label: "RichText 富文本"
						},
						{
							label: "IndexList 索引列表",
							path: "list-index"
						},
						{
							label: "Calendar 日历"
						}
					]
				}
			]
		};
	},

	onShareAppMessage() {
		return {
			title: `简单易用的uni-app组件库`,
			path: "/pages/index/index"
		};
	},

	methods: {
		toDemo({ key }, item) {
			if (item.path) {
				uni.navigateTo({
					url: `/pages/demo/${key}/${item.path}`
				});
			} else {
				this.$refs["toast"].open(`${item.label}开发中`);
			}
		}
	}
};
</script>

<style lang="scss">
page {
	background-color: #fff;
}

.page-index {
	padding-top: env(safe-area-inset-top);
	padding-bottom: env(safe-area-inset-bottom);
	.header {
		padding: 20rpx 50rpx;

		.logo {
			height: 91rpx;
			width: 397rpx;
			margin: 20rpx 0;
		}

		.desc {
			font-size: 28rpx;
			color: #909ca2;
			height: 50rpx;
		}
	}

	.container {
		padding: 20rpx 33rpx;
		box-sizing: border-box;
		width: 100%;

		.item {
			&__label {
				display: inline-block;
				height: 70rpx;
				line-height: 70rpx;
				width: 100%;
				padding: 0 30rpx;
				font-size: 28rpx;
				color: #909ca2;
				box-sizing: border-box;
			}

			&__container {
				.block {
					display: flex;
					align-items: center;
					height: 80rpx;
					padding: 0 30rpx;
					margin-bottom: 30rpx;
					font-size: 26rpx;
					background-color: #f7f7f7;
					border-radius: 80rpx;

					&:active {
						background-color: #eee;
					}

					.label {
						flex: 1;
					}
				}
			}
		}
	}
}
</style>
