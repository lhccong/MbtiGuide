import { View, Image } from "@tarojs/components";
import "taro-ui/dist/style/components/button.scss";
import { AtButton } from "taro-ui";
import bgHeader from "../../assets/bgHeader.jpeg";
import "./index.scss";

import GlobalFooter from "../../components/GlobalFooter";

export default () => {
  return (
    <View className="index">
      <view className="at-article__h1">Mbti 性格测试</view>
      <view className="at-article__h2">只需 2 分钟，就能非常准确的描述你是谁，以及你的性格特点</view>
      <AtButton type="primary" circle>
        开始测试
      </AtButton>
      <Image src={bgHeader} />
      <GlobalFooter />
    </View>
  );
};
