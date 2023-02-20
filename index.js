

import ReactDOMClient from "react-dom/client";
const App =()=>{

    return <div>Index</div>;
}
// This entrypoint is only available starting with `react-dom@18.0.0-rc.1`
const root = ReactDOMClient.createRoot(document.getElementById('root'), {

})
root.render(<App />)