import Band from '../models/Band';
import Concert from '../models/Concert';

class BandController {
    async store(req, res) {
        try {

            const { concert_id } = req.params;

            const { name, email, password, phone, style, description, rating, lat, long, image } = req.body;

            const bandExists = await Band.findOne({ where: { email: req.body.email } });
            if (bandExists) {
                return res.status(400).json({ error: 'Band already exists.' });
            }
            const band = await Band.create({
                name,
                email,
                password,
                phone,
                style,
                description,
                rating,
                lat,
                long,
                image,
            });
            return res.json(band);
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

    async index(req, res) {

        try {
            const { concert_id } = req.params;

            const concert = await Concert.findByPk(concert_id, {
                include: { association: 'bands' }
            });

            return res.json(concert.bands);

        } catch (error) {
            res.status(500).send({ message: 'An error occurred ' + error });
            console.log(error);
        }
    }

    async storeWithConcert(req, res) {

        try {

            const { concert_id } = req.params;
            const { name, approved, band_id } = req.body;

            const concert = await Concert.findByPk(concert_id);
            
            if (!concert) {
                return res.status(400).json({ error: 'Concert not found' });
            }

            const [band] = await Band.findAll({
                where: { name }
            })            
            
            await concert.addBand(band);

            return res.json(band);

        } catch (error) {
            res.status(500).send({ message: 'An error occurred ' + error });
            console.log(error);
        }
    }

    async deleteWithConcert(req, res) {

        try {

            const { concert_id } = req.params;
            const { name } = req.body;

            const concert = await Concert.findByPk(concert_id);

            if (!concert) {
                return res.status(400).json({ error: 'Concert not found' });
            }

            const band = await Band.findOne({
                where: { name }
            });

            await concert.removeBand(band);

            return res.json();

        } catch (error) {
            res.status(500).send({ message: 'An error occurred ' + error });
            console.log(error);
        }
    }


    // async delete() { }

}

export default new BandController();