// import ReactDOM from "react-dom";
import ReactDOM from "./kreact/react-dom";
import Component from "./kreact/Component";
import "./index.css";

function FunctionComponent(props) {
    return (
        <div className="border">
            <p>{props.name}</p>
        </div>
    );
}
class ClassComponent extends Component {
    render() {
        return (
            <div className="border">
                <p>{this.props.name}</p>
            </div>
        );
    }
}
function FragmentComponent(props) {
    return (
        <>
            <h1>111</h1>
            <h1>222</h1>
        </>
    );
}
const jsx = (
    <div className="border">
        <h1>慢慢慢</h1>
        <a href="https://www.kaikeba.com/">kkb</a>
        <FunctionComponent name="函数组件" />
        <ClassComponent name="类组件" />
        <FragmentComponent />
    </div>
);
console.log(jsx)
ReactDOM.render(
  
  jsx
  , document.getElementById("root"));