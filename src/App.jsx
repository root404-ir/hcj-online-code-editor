import { useRef } from "react"
import CodeEditor from "./components/CodeEditor"
import { Box, Text } from "@chakra-ui/react"


const App = () => {
  const editorRef = useRef()
  return (
    <Box bg={'black'} mt={4} padding={'0 10px'}>
      <Text fontFamily={'monospace'} className="text-9xl  text-center text-shadow-2xl text-shadow-green-500">online html,css,js code editor</Text>
      <CodeEditor editorRef={editorRef} />
    </Box>
  )
}
export default App
