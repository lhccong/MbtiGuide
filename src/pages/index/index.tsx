import { View, Image } from "@tarojs/components";
import { AtButton } from "taro-ui";
import Taro from "@tarojs/taro";
import headerBg from "../../assets/headerBg.jpg";
import GlobalFooter from "../../components/GlobalFooter";
import "./index.scss";

/**
 * 首页
 */
export default () => {
  return (
    <View className="indexPage">
      <view className="at-article__h1 title">Mbti 性格测试</view>
      <view className="at-article__h2 subTitle">
        只需 2 分钟，就能非常准确的描述你是谁，以及你的性格特点
      </view>
      <AtButton
        type="primary"
        circle
        className="enterBtn"
        onClick={() => {
          Taro.navigateTo({ url: "/pages/doQuestion/index" });
        }}
      >
        开始测试
      </AtButton>
      <Image className="headerBg" src={headerBg} />
      <GlobalFooter />
    </View>
  );
};
