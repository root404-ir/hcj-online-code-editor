import { Editor } from "@monaco-editor/react"
import { useState } from "react"
import { CODE_SNIPPETS } from "../constants"
import { Box, Button, HStack, Menu, Text } from "@chakra-ui/react"
import LanguageSelector from "./LanguageSelector"
import Output from "./Output"
import { MdColorLens } from "react-icons/md";
import { LuCheck } from "react-icons/lu";
import DownloadCode from "./DownloadCode"

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
    <Box>
      <HStack spacing={4}>
        <Box w={'100%'}>
          <Box mb={4} w={'30%'} display={'flex'} columnGap={'8'}>
            <LanguageSelector language={language} onSelect={setLanguage} />
            <Box>
              <Text mb={2} fontFamily={'monospace'}>select theme</Text>
              <Menu.Root>
                <Menu.Trigger asChild>
                  <Button
                    size="sm"
                    variant="outline"
                    bg="gray.900"
                    color="gray.100"
                    borderColor="gray.700"
                    _hover={{
                      bg: "gray.800",
                      borderColor: "blue.400",
                    }}
                    _expanded={{
                      bg: "gray.800",
                      borderColor: "blue.400",
                    }}
                  >
                    <MdColorLens color="#fff" />
                    <HStack gap={2}>
                      <Text fontFamily={'mono'}>{theme}</Text>
                    </HStack>
                  </Button>
                </Menu.Trigger>
                <Menu.Positioner>
                  <Menu.Content bg="gray.900"
                    border="1px solid"
                    borderColor="gray.700"
                    borderRadius="lg"
                    p={1}
                    minW="250px"
                    shadow="xl"
                  >
                    {themes.map(t => (
                      <Menu.Item key={t.value} onClick={() => setTheme(t.value)}>
                        {theme === t.value && <LuCheck />}
                        {t.label}
                      </Menu.Item>
                    ))}
                  </Menu.Content>
                </Menu.Positioner>
              </Menu.Root>
            </Box>
          </Box>

          <Box>
            <Box w={'50%'} display={'flex'} gap={6} justifyContent={'space-between'} px={4} mt={'4rem'} position={'absolute'} top={0} right={0}>
              <DownloadCode html={html} css={css} javascript={javascript} projectName="my-project" />
              <Box>
                <Button boxShadow={'0 0 12px 3px green'} bg={'gray.900'} border={'1px solid #fff'} color={'#fff'} _hover={{ padding: '10px 30px', boxShadow: '0 0 10px 5px #51a2ff' }} transition={'all 0.3s'} onClick={runCode}>Run Code</Button>
              </Box>
            </Box>
            <Box display={'flex'} gap={3}>
            <Editor
              height='70vh'
              theme={theme}
              language={language}
              value={getValue()}
              onChange={handleChange}
              width={'100%'}
            />
            <Output html={output.html} css={output.css} javascript={output.javascript} />
            </Box>
          </Box>
        </Box>
      </HStack>
    </Box>
  )
}

export default CodeEditor