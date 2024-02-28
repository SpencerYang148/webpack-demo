import React, { Suspense, memo, useEffect } from "react";

//私有常量

//可抽离的逻辑处理函数/组件
const LazyHome = React.lazy(() => import("./pages/Home"));

let App = (props: IProps): React.ReactNode => {
  //变量声明、解构

  //组件状态

  //网络IO

  //数据转换

  //逻辑处理函数

  //组件Effect

  return (
    <Suspense fallback={<div>loading...</div>}>
      <LazyHome />
    </Suspense>
  );
};

//props类型定义
interface IProps {}

//prop-type定义，可选

App = memo(App);
export { App };
