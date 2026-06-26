import { useRef } from "react"
import CodeEditor from "./components/CodeEditor"
import { Box, Text } from "@chakra-ui/react"
import SocialIcons from "./components/SocialIcons"
import './style.css'
import { flicker } from "./components/style/TextShadow"

const App = () => {

  const editorRef = useRef()
  return (

    <Box>
      <div className="code_container"></div>
      <Box mb={100} bg={'black'} mt={4} padding={'0 10px'}>
        <Box>
          <div className="flex justify-between">
            <SocialIcons />
            <Text
              color={'cyan.100'}
              fontWeight={'bold'}
              animation={`${flicker} 1.5s infinte`}
              fontFamily={'monospace'} className="text-9xl  text-center text-shadow-2xl text-shadow-green-500" fontSize={17}>online html,css,js code editor</Text>
            <Text
              fontWeight={'bold'}
              animation={`${flicker} 1.5s infinte`}
              className="text-right" fontSize={17} fontFamily={'monospace'}>v0.3.1</Text>
          </div>
          <CodeEditor editorRef={editorRef} />
        </Box>
      </Box>
    </Box>
  )
}
export default App
