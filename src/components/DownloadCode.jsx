import { Button, Dialog, Input, Portal, useDisclosure, VStack } from '@chakra-ui/react'
import { saveAs } from 'file-saver'
import JSZip from 'jszip'
import { useState } from 'react'

const DownloadCode = ({ html, css, javascript }) => {
    const { open, onOpen, onClose } = useDisclosure()
    const [projectName, setProjectName] = useState("my-project")
    const downloadProject = async () => {
        try {
            const zip = new JSZip()
            const htmlFile = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>${projectName}</title>
              <link rel="stylesheet" href="style.css" />
            </head>
            <body>
                ${html}
                <script src="script.js"></script>
            </body>
            </html>
            `

            zip.file('index.html', htmlFile)
            zip.file('style.css', css)
            zip.file('app.js', javascript)
            const content = await zip.generateAsync({
                type: "blob"
            })
            saveAs(content, `${projectName}.zip`)
            onClose
        } catch (err) {
            alert('donwload is error', err)
        }
    }

    return (
        <>
            <Button onClick={onOpen} bg={"green"} color={"#fff"} transition={"all 0.4s"} variant={"outline"} _hover={{ borderColor: "blue.400" }}>
                Download code zip
            </Button>
            <Dialog.Root open={open} onOpenChange={(e) => !e.open && onClose}>
                <Portal>
                    <Dialog.Backdrop />
                    <Dialog.Positioner>
                        <Dialog.Content>
                            <Dialog.Header>Project Name</Dialog.Header>
                            <Dialog.Body>
                                <VStack gap={3}>
                                    <Input
                                        placeholder="Enter your project name..."
                                        value={projectName}
                                        onChange={(e) => setProjectName(e.target.value)}
                                    />
                                </VStack>
                            </Dialog.Body>
                            <Dialog.Footer gap={3}>
                                <Button variant={"ghost"} onClick={onClose}>Cancel</Button>
                                <Button colorScheme={"green"} onClick={downloadProject}>Download</Button>
                            </Dialog.Footer>
                        </Dialog.Content>
                    </Dialog.Positioner>
                </Portal>
            </Dialog.Root>
        </>


    )
}

export default DownloadCode