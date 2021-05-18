

exports.receiver = (req, res) => {
    console.log('received')
    console.log(req.body) // Outputs what is received in the body
    res.status(200).end() // Responding is important

};


