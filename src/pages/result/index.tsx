import { View, Image } from "@tarojs/components";
import { AtButton } from "taro-ui";
import Taro from "@tarojs/taro";
import questions from "../../data/questions.json";
import headerBg from "../../assets/headerBg.jpg";
import GlobalFooter from "../../components/GlobalFooter";
import resultList from "../../data/question_results.json";

import "./index.scss";
import { getBastQuestionResult } from "../../utils/bizUtils";

/**
 * 首页
 */
export default () => {
  const answerList = Taro.getStorageSync("answerList");
  if (!answerList || answerList.length === 0) {
    Taro.showToast({
      title: "答案为空",
      icon: "error",
      duration: 3000,
    });
  }
  const result = getBastQuestionResult(answerList, questions, resultList);

  return (
    <View className="resultPage">
      <view className="at-article__h1 title">{result.resultName}</view>
      <view className="at-article__h2 subTitle">{result.resultDesc}</view>
      <AtButton
        type="primary"
        circle
        className="enterBtn"
        onClick={() =>
          Taro.reLaunch({
            url: "/pages/index/index",
          })
        }
      >
        返回首页
      </AtButton>
      <Image className="headerBg" src={headerBg} />
      <GlobalFooter />
    </View>
  );
};
