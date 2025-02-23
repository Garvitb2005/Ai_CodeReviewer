import { useState , useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import axios from 'axios'
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github-dark.css"
import './App.css'
function App() {
  const [code, setCode] = useState(`function sum(){return 1+1;}`)
  useEffect(()=>{
    prism.highlightAll()
  })

  const [review, setReview] = useState(``)

  async function reviewCode(){

   const response = await axios.post('http://localhost:8000/ai/get-review', {code})
    setReview(response.data)
  }
  return (
    <>
      <main>
        <div className="left">
          <div className="code">

            <Editor

              value = {code}
              onValueChange = {code => setCode(code)}
              highlight = {code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira mono", monospace',
                fontSize:16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                weight: "100%"
              }}
            />

              

          
              
          </div>
          <div onClick={reviewCode}
          className="review">Review</div>
        </div>
        <div className="right">
          <Markdown rehypePlugins = {[rehypeHighlight]} >
            {review}
          </Markdown>
        </div>
      </main>
    </>
  )
}



export default App
