import Band from '../models/Band';

class BandController {
    async store(req, res) {
        try {
            const bandExists = await Band.findOne({ where: { email: req.body.email } });
            if (bandExists) {
                return res.status(400).json({ error: 'Band already exists.' });
            }
            const { id, name, email, provider } = await Band.create(req.body);
            return res.json({
                id,
                name,
                email,
                provider
            });
        } catch (error) {
            res.status(500).send({ message: 'An error occurred ' + error });
            console.log(error);
        }
    }

    async update(req, res) {

        try {
            const { email, oldPassword } = req.body;
            const band = await Band.findByPk(req.bandId);
            if (email !== band.email) {
                const bandExists = await Band.findOne({
                    where: { email },
                });
                if (bandExists) {
                    return res.status(400).json({
                        error: 'Band already exists.'
                    });
                }
            }
            if (oldPassword && !(await band.checkPassword(oldPassword))) {
                return res.status(401).json({
                    error: 'Password does not match.'
                });
            }

            const { id, name, provider } = await band.update(req.body);

            return res.json({
                id,
                name,
                email,
                provider
            });
        } catch (error) {
            res.status(500).send({ message: 'An error occurred ' + error });
            console.log(error);
        }
    }

    // async index() { }
    async show(req, res) {
        try {
            const bands = await Band.findAll();
            return res.json(bands);
        } catch (error) {
            res.status(500).send({ message: 'An error occurred ' + error });
            console.log(error);
        }
    }
    // async delete() { }

}

export default new BandController();