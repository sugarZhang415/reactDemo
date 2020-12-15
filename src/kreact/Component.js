export default function Component(props) {
    this.props = props;
}
Component.prototype.isReactComponent = {}  // 加上这个属性，用于区分是函数组件还是类组件