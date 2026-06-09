import { Box } from '@chakra-ui/react'
import { useMemo } from 'react'

const Output = ({ html = "", css = "", javascript = "" }) => {
    const srcDoc = useMemo(() => {
        return `
            <html>
                <head>
                    <style>${css}</style>
                </head>
                <body>
                ${html}

                <script>
                    try{
                        ${javascript}
                    }catch(err){
                        document.body.innerHtml = "<pre style='color:red'>" + err + "</pre>"
                    }
                </script>
                </body>
            </html>
        `
    }, [html, css, javascript])
    return (
        <Box>
            <iframe
                title='output'
                srcDoc={srcDoc}
                sandbox='allow-scripts'
                style={{ width: "100%", height: "100%", border: "none", borderRadius: "10px", boxShadow: "0 0 20px green" }}
            />
        </Box>
    )
}

export default Output