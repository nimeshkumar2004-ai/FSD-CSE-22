
import book from "./Book";
function App(){
    const bookstore=bookdata.map((b)=>{
        return Book(b);
    })
    return React.createElement("div",{className:"bookstore"},[...bookstore]);
}
const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);
root.render(App());