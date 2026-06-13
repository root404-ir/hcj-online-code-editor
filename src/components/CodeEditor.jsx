import { useState } from "react"
import { CODE_SNIPPETS } from "../constants"
import { Box, HStack } from "@chakra-ui/react"
import LanguageSelector from "./LanguageSelector"
import ThemeSelect from "./ThemeSelect"
import EditorSection from "./EditorSection"

const CodeEditor = () => {
  const [language, setLanguage] = useState('html')
  const [theme, setTheme] = useState('vs-dark')
  const [html, setHtml] = useState(CODE_SNIPPETS.html || '')
  const [css, setCss] = useState(CODE_SNIPPETS.css || '')
  const [javascript, setJavascript] = useState(CODE_SNIPPETS.javascript || '')
  const themes = [
    { label: 'Dark', value: 'vs-dark' },
    { label: 'Light', value: 'vc-light' },
    { label: 'High Contrast', value: 'hc-black' }
  ]
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
    <Box mt={5} className="z-50">
      <HStack spacing={4}>
        <Box w={'100%'}>
          <Box mb={4} w={'30%'} display={'flex'} columnGap={'8'}>
            <LanguageSelector language={language} onSelect={setLanguage} javascript={javascript} html={html} css={css} />
            <ThemeSelect theme={theme} setTheme={setTheme} themes={themes} />
          </Box>
          <EditorSection html={html} css={css} getValue={getValue} handleChange={handleChange} javascript={javascript} language={language} output={output} runCode={runCode} theme={theme}/>
        </Box>
      </HStack>
    </Box>
  )
}

export default CodeEditor