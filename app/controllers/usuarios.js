const user =
{
    name: 'Xana',
    email: 'xana@senai.com',
    password: '1234',
    gender: 'Female',
    cpf: '123456789',
};

module.exports = (app) => {

    app.get('/usuarios', function (req, res) {
        res.json(user);
    });

}