import { Editor } from "@monaco-editor/react"
import { useState } from "react"
import { CODE_SNIPPETS } from "../constants"
import { Box, Button, HStack, Text } from "@chakra-ui/react"
import LanguageSelector from "./LanguageSelector"

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
      <HStack>
        <Box mb={4} w={'30%'} display={'flex'} columnGap={'8'}>
          <LanguageSelector language={language} onSelect={setLanguage} />
          <Box>
            <Text mb={2}>select theme: </Text>
            <select value={theme} onChange={(e) => setTheme(e.target.value)}>
              <option value="vs-dark">Dark</option>
              <option value="vc-light">Light</option>
              <option value="hc-black">High Contrast</option>
            </select>
          </Box>
        </Box>

        <div style={{ display: 'flex', alignItems: 'center', width: '100%', gap: '10px', position: 'relative' }}>
          <Editor
            height='70vh'
            theme={theme}
            language={language}
            value={getValue()}
            onChange={handleChange}
            width={'100%'}
          />
          <Box position={'absolute'} top={-20} right={0}>
            <Button boxShadow={'0 0 20px 5px green'} _hover={{ padding: '10px 30px', boxShadow: '0 0 20px 8px #51a2ff' }} transition={'all 0.3s'} onClick={runCode}>Run Code</Button>
          </Box>
        </div>
      </HStack>
    </Box>
  )
}

export default CodeEditor