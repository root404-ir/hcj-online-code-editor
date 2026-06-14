import { Box } from '@chakra-ui/react'
import { useMemo, useState } from 'react'
import { Rnd } from 'react-rnd'
const Output = ({ html = "", css = "", javascript = "" }) => {
    const [size, setSize] = useState({
        width: 400,
        height: 300
    })
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
        <Rnd
            size={{ width: size.width, height: size.height }}
            enableResizing={{
                top: false,
                right: true,
                bottom: true,
                left: true,
                topRight: false,
                bottomRight: true,
                bottomLeft: false,
                topLeft: false,
            }}
            disableDragging={true}
            minWidth={200}
            minHeight={150}
            maxWidth={'100%'}
            maxHeight={1000}
            onResizeStop={(e, direction, ref) => {
                setSize({
                    width: parseInt(ref.style.width),
                    height: parseInt(ref.style.height)
                })
            }}
        >
            <Box w={'100%'} h={'100%'} border="1px solid #333" borderRadius="10px" overflow="hidden">
                <iframe
                    title='output'
                    srcDoc={srcDoc}
                    sandbox='allow-scripts'
                    style={{ width: '100%', height: '100%', border: "none", borderRadius: "10px", boxShadow: "0 0 20px green" }}
                />
            </Box>
        </Rnd>

    )
}

export default Output