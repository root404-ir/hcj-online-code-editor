import { Button } from '@chakra-ui/react'
import { saveAs } from 'file-saver'
import JSZip from 'jszip'

const DownloadCode = ({ html, css, javascript, projectName = "my-project" }) => {
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
            saveAs(content,`${projectName}.zip`)
        } catch (err) {
            alert('donwload is error', err)
        }
    }

    return(
        <Button onClick={downloadProject} bg={"green"} color={"#fff"} transition={"all 0.4s"} variant={"outline"} _hover={{borderColor:"blue.400"}}>
            Download code zip
        </Button>
    )
}

export default DownloadCode