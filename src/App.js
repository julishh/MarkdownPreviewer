import { useState } from "react";
import Markdown from 'marked-react';

function App() {

  let str='# Welcome to my React Markdown Previewer!\n## This is a sub-heading...\n### And here\'s some other cool stuff:\n\n**List:**\n\n  1. HTML\n 2. CSS\n  3. JS'

  const [value, setValue] = useState(str);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div >
      <h1 className="text-center mt-4">Markdown Previewer</h1>
      <br />
       <h3 className=" text-center"> Enter Markdown Here:</h3>
      <textarea id="editor" value={value} onChange={handleChange}></textarea>
      <br />

      <h3 className=" text-center">See Result Here:</h3>
      <div id="preview"><Markdown>{value}</Markdown></div>
    </div>
  );
}

export default App;
