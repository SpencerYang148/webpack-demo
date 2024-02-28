import { getRandomColor } from "src/utils";
import style from "./style.module.less";
import React, { memo } from "react";

//私有常量

//可抽离的逻辑处理函数/组件

let Home = (props: IProps): React.ReactNode => {
  //变量声明、解构

  //组件状态
  const [state, setState] = React.useState(1);

  //网络IO

  //数据转换

  //逻辑处理函数
  const handleClick = () => {
    setState(state + 1);
  };

  //组件Effect

  return (
    <div className={style.container} onClick={handleClick}>
      Home{state}
      <br />
      {getRandomColor()}
    </div>
  );
};

//props类型定义
interface IProps {}

//prop-type定义，可选

export default memo(Home);
