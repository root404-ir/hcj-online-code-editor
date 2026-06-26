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
                        document.body.innerHTML = "<pre style='color:red'>" + err + "</pre>"
                    }
                </script>
                </body>
            </html>
        `
    }, [html, css, javascript])
    return (
            <Box w={'100%'} h={'100%'} border="1px solid #333"  overflow="hidden">
                <iframe
                    title='output'
                    srcDoc={srcDoc}
                    sandbox='allow-scripts'
                    style={{ width: '100%', height: '100%', border: "none", boxShadow: "0 0 20px green" }}
                />
            </Box>

    )
}

export default Output