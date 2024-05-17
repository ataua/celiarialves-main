import { NextApiRequest, NextApiResponse } from "next";

const contactRoute = async ( req: NextApiRequest, res: NextApiResponse ) => {
    switch ( req.method ) {
        case 'POST':
            const { name, email, message } = req.body as unknown as { name: string, email: string, message: string }
            console.log( name, email, message )
            return res.status( 200 ).json( { name, email, message } )
        case 'OPTIONS':
            // set headers with only POST option
            res.setHeader( 'Allow', 'POST' )
            return res.status( 204 ).end()
        default:
            return res.status( 405 ).json( { error: 'Method not allowed' } )
    }
}

export default contactRoute