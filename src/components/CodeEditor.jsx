import { Editor } from "@monaco-editor/react"
import { useState } from "react"
import { CODE_SNIPPETS } from "../constants"
import { Box } from "@chakra-ui/react"

const CodeEditor = () => {
  const [language, setLanguage] = useState('html')
  const [theme, setTheme] = useState('vs-dark')

  const [html, setHtml] = useState(CODE_SNIPPETS.html || '')
  const [css, setCss] = useState(CODE_SNIPPETS.css || '')
  const [javascript, setJavascript] = useState(CODE_SNIPPETS.javascript || '')

  const [output, setOutput] = useState({
    html: CODE_SNIPPETS.html || '',
    css: CODE_SNIPPETS.css || '',
    javascript: CODE_SNIPPETS.javascript || ''
  })

  const handleChange = (value) => {
    if (language === "html") setHtml(value || '')
    if (language === "css") setCss(value || '')
    if (language === "javascript") setJavascript(value || '')
  }

  const getValue = () => {
    if (language === 'html') return html
    if (language === 'css') return css
    return javascript
  }

  const runCode = () => {
    setOutput({
      html,
      css,
      javascript
    })
  }

  return (
    <Box>
      
    </Box>
  )
}

export default CodeEditor