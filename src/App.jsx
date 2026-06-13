import { useRef } from "react"
import CodeEditor from "./components/CodeEditor"
import { Box, Text } from "@chakra-ui/react"
import SocialIcons from "./components/SocialIcons"
import './style.css'

const App = () => {
  const editorRef = useRef()
  return (
    <Box>
      <div className="code_container"></div>
      <Box bg={'black'} mt={4} padding={'0 10px'}>
        <Box>
          <div className="flex justify-between">
          <SocialIcons />
            <Text fontFamily={'monospace'} className="text-9xl  text-center text-shadow-2xl text-shadow-green-500" fontSize={17}>online html,css,js code editor</Text>
            <Text className="text-right" fontSize={17} fontFamily={'monospace'}>v0.2.0</Text>
          </div>
          <CodeEditor editorRef={editorRef} />
        </Box>
      </Box>
    </Box>
  )
}
export default App
