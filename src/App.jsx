import { useRef } from "react"
import CodeEditor from "./components/CodeEditor"
import { Box } from "@chakra-ui/react"


const App = () => {
  const editorRef = useRef()
  return (
    <Box bg={'black'}>
      <CodeEditor editorRef={editorRef} />
    </Box>
  )
}
export default App
