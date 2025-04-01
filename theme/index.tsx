import Theme from 'rspress/theme';
import Giscus from './ts/giscus'; // 新增导入
import './css/recordText.css'

const recordText = (
    <div className="record-text">
      蜀ICP备
      <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="record-number">
        2025131716
      </a>
    </div>
  );
  
  const copyrightText = (
    <div className="copyright-text">
      <a>
        {`Copyright © 2020-${new Date().getFullYear()} lorien`}
      </a>
    </div>
  );

  const bottomContent = (
    <div className="bottom-wrapper">
      {recordText}
      {copyrightText}
    </div>
  );

const Layout = () => (
  <Theme.Layout
    afterDocContent={[
      <div id="giscus-container" key="container" />,
      <Giscus key="giscus" /> // 新增组件
    ]}
    bottom={[bottomContent]}
  />
);

export default {
  ...Theme,
  Layout,
};

export * from 'rspress/theme';
