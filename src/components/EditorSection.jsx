import { Box, Button } from "@chakra-ui/react"
import { Editor } from "@monaco-editor/react"
import DownloadCode from "./DownloadCode"
import Output from "./Output"
import Split from "react-split"

const EditorSection = ({ theme, language, getValue, handleChange, html, css, javascript, output, runCode }) => {

    return (
        <Box>
            <Box gap={6} display={'flex'} justifyContent={'right'} flex={1} mb={4}>
                <DownloadCode html={html} css={css} javascript={javascript} projectName="my-project" />
                <Box>
                    <Button boxShadow={'0 0 12px 3px green'} bg={'gray.900'} border={'1px solid #fff'} color={'#fff'} _hover={{ padding: '10px 30px', boxShadow: '0 0 10px 5px #51a2ff' }} transition={'all 0.3s'} onClick={runCode}>Run Code</Button>
                </Box>
            </Box>
            <Split
                sizes={[25, 75]}
                minSize={100}
                expandToMin={false}
                gutterSize={10}
                gutterAlign="center"
                snapOffset={30}
                dragInterval={1}
                direction="horizontal"
                cursor="col-resize"
                style={{
                    display: 'flex',
                    height: '70vh'
                }}
            >

                <Box display={'flex'} gap={3}>
                    <Editor
                        height='70vh'
                        theme={theme}
                        language={language}
                        value={getValue()}
                        onChange={handleChange}
                    />
                </Box>
                <Box width={'50%'}>
                    <Output html={output.html} css={output.css} javascript={output.javascript} />
                </Box>
            </Split>
        </Box>
    )
}

export default EditorSection