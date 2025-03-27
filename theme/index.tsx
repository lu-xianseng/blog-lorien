import Theme from 'rspress/theme';
import Giscus from './giscus'; // 新增导入

const Layout = () => (
  <Theme.Layout
    afterDocContent={[
      <div id="giscus-container" key="container" />,
      <Giscus key="giscus" /> // 新增组件
    ]}
  />
);

export default {
  ...Theme,
  Layout,
};

export * from 'rspress/theme';
