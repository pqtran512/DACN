import jwt from 'jsonwebtoken'

const verifyToken = (req, res, next) => {

    let accessToken = req.headers.authorization?.split(' ')[1]
    if (!accessToken) return res.status(401).json({ // check if token exists
        err: 1,
        msg: 'Missing access token !'
    })

    jwt.verify(accessToken, process.env.SECRET_KEY, (err, user) => { // return error and user found
        if (err) return res.status(401).json({
            err: 1,
            msg: 'Access token expired !'
        })

        req.user = user
        next()   // run the next func after verify
    })


}

export default verifyToken