import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Sidebar/Main/Main";

const App = () => {
  return (
    <>
      <Sidebar />
      <Main />
    </>
  );
};

export default App;

// import React, { useContext, useState } from "react";
// import { Context } from "./context/Context";

// const App = () => {
//   const { response, onSent } = useContext(Context);
//   const [prompt, setPrompt] = useState("");

//   const handleSend = () => {
//     onSent(prompt);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={prompt}
//         onChange={(e) => setPrompt(e.target.value)}
//       />
//       <button onClick={handleSend}>Send</button>
//       <div>
//         <h2>Response:</h2>
//         <p>{response}</p>
//       </div>
//     </div>
//   );
// };

// export default App;
