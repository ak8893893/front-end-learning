// 設計組件類別
class MyHead extends React.Component{
    render(){ // 實作 render 方法，回傳 React Element 為此組件的顯示介面
        // 取代 React.createElement("div", {className:"head-"+this.props.level}, "Hello World")
        return <div className={"head-"+this.props.level}>Hello World</div>;
    }
}
window.addEventListener("load", ()=>{
    // 1. 建立自訂的 React 組件實體
    // 取代 React.createElement(MyHead)
    let myComponent=<MyHead level="3"/>; // 取代 React.createElement(MyHead, {level:3})
    // 2. 將建立好的 React 組件實體畫到容器中 
    ReactDOM.render(
        myComponent, document.body
    );
});