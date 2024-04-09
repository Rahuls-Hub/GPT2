
// import './App.css';
// import gptLogo from './assets/chatgpt.svg';
// import addBtn from './assets/add-30.png';
// import msgIcon from './assets/message.svg';
// import home from './assets/home.svg';
// import save from './assets/bookmark.svg';
// import rocket from './assets/rocket.svg';
// import sendBtn from './assets/send.svg';
// import userIcon from './assets/user-icon.png';
// import gptImgLogo from './assets/chatgptLogo.svg';
// import React, { useState } from 'react';
// import { sendMsgToOpenAI } from './openai';

// function App() {

//    const [input,setInput]=useState("");


//    const  handleSend=async()=>{
    
//     const res=await sendMsgToOpenAI(input);
//     console.log(res);
//    }

//   return (
//     <div className="App">

//         <div className='sideBar'>
//             <div className="upperSide">
//                <div className="upperSideTop"><img src={gptLogo} alt="Logo" className="logo" /><span className="brand">FoodGPT</span></div>
//                <button className="midBtn"><img src={addBtn} alt="" className="addBtn" /><img src=" " alt="" className="addBtn" />New Chat</button>
//                <div className="upperSideBottom">
//                     <button className="query"><img src={msgIcon} alt="Query" />What is Programming </button>
//                     <button className="query"><img src={msgIcon} alt="Query" />What is Programming </button>



//                </div>
//             </div>
//             <div className="lowerside">
//                 <div className="listItems"><img src={home} alt="" className="listItemsImg" />Home</div>
//                 <div className="listItems"><img src={save} alt="" className="listItemsImg" />Save</div>
//                 <div className="listItems"><img src={rocket}  alt="" className="listItemsImg" />Upgrade to pro</div>
//             </div>

//         </div>
//   {/* ---------------------------------------      */}
//         <div className='main'>
//             <div className="chats">
//                 <div className="chat">
//                    <img className='chatImg' src={userIcon} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus provident veniam voluptas est odio pariatur harum sed, nihil placeat officiis.</p>
//                 </div>
//                 <div className="chat bot">
//                    <img className='chatImg' src={gptImgLogo} alt="" /><p className="txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam suscipit delectus dolores harum voluptates adipisci omnis placeat dolor maxime! Perferendis, voluptas. A quia esse temporibus, exercitationem praesentium soluta deserunt eaque quos mollitia iste sint dolor dignissimos sequi ad nostrum minima facilis laborum obcaecati eveniet officia aspernatur voluptate cum! Quos officiis rem ipsum velit ducimus excepturi eum, placeat veniam quibusdam asperiores iusto odio soluta nesciunt, fugiat iste, architecto magnam distinctio ullam mollitia doloribus neque. Eos harum ipsa iure, error repellendus beatae ducimus consequuntur laborum itaque veritatis dolore! Dicta totam soluta, perferendis beatae quis vel sunt maiores pariatur numquam illo aperiam repellendus.</p>
//                 </div>
//             </div>
//             <div className="chatFooter">
//                 <div className="inp">
//                    <input type="text" placeholder='Send a msg' value={input} onChange={(e)=>{setInput(e.target.value)}}/><button className="send" onClick={handleSend}><img src={sendBtn} alt="Send" /></button>
//                 </div>
//                 <p>FoodGPT can give some inaccurate results.</p>
//             </div>

          
//         </div>
//     </div>
//   );
// }

// export default App;


// App.js

import React, { useState } from 'react';
import openai from './openai';

function App() {
  const [response, setResponse] = useState('');

  async function sendMsgToOpenAI(message) {
    try {
      const res = await openai.completions.create({
        model: 'gpt-3.5-turbo',
        prompt: message,
        max_tokens: 256,
        temperature: 0.7,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
      });
      setResponse(res.data.choices[0].text);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div>
      <h1>OpenAI API Example</h1>
      <button onClick={() => sendMsgToOpenAI('Hello how are you?')}>Send Message</button>
      <p>{response}</p>
    </div>
  );
}

export default App;
