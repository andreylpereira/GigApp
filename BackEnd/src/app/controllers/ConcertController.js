import Concert from '../models/Concert';
import Venue from '../models/Venue';
import * as Yup from 'yup';

class ConcertController {

    async store(req, res) {

        try {
            const schema = Yup.object().shape({
                name: Yup.string().required()
            });

            if (!(await schema.isValid(req.body))) {
                return res.status(400).json({ error: 'Validation fails' });
            }

            const { venue_id } = req.params;
            const { name, description, date, ticketPrice, band_id } = req.body;

            const venue = await Venue.findByPk(venue_id);

            if (!venue) {
                return res.status(400).json({ error: 'Venue not found' });
            }

            const concertExists = await Concert.findOne({ where: { name: req.body.name } });
            if (concertExists) {
                return res.status(400).json({ error: 'Concert already exists.' });
            }

            const concert = await Concert.create({
                name,
                description,
                date,
                ticketPrice,
                venue_id,
                band_id,
            });

            return res.json(concert);

        } catch (error) {
            res.status(500).send({ message: 'An error occurred ' + error });
            console.log(error);
        }
    }

    async update(req, res) {

        try {
            const { name, description, date, ticketPrice } = req.body;
            const concert = await Concert.findByPk(req.params.id);

            if (name !== concert.name) {
                const concertExists = await Concert.findOne({
                    where: { name },
                });
                if (concertExists) {
                    return res.status(400).json({
                        error: 'Concert already exists.'
                    });
                }
            }

            if (!concert) {
                return res.status(400).json({ error: 'The concert does not exist.' });
            }

            const { id, createdAt, updatedAt } = await concert.update(req.body);

            return res.json({
                id,
                name,
                description,
                date,
                ticketPrice,
                createdAt,
                updatedAt
            });
        } catch (error) {
            res.status(500).send({ message: 'An error occurred ' + error });
            console.log(error);
        }
    }

    async show(req, res) {

        try {
            const concerts = await Concert.findAll();
            return res.json(concerts);
        } catch (error) {
            res.status(500).send({ message: 'An error occurred ' + error });
            console.log(error);
        }
    }

    async showWithId(req, res) {
        try {
            const concerts = await Concert.findByPk(req.params.id);
            if (!concerts) {
                return res.status(400).json({ error: 'The concert does not exist.' });
            }
            return res.json(concerts);
        } catch (error) {
            res.status(500).send({ message: 'An error occurred ' + error });
            console.log(error);
        }
    }

    async delete(req, res) {
        try {
            const concerts = await Concert.destroy({ where: { id: req.params.id } });
            if (!concerts) {
                return res.status(400).json({ error: 'The concert does not exist.' });
            }
            res.status(200).send({ message: 'Concert deleted with sucess!!' });
            console.log(concerts);
        } catch (error) {
            res.status(500).send({ message: 'Failel to delete the concert!', error });
        }
    }

    async index(req, res) {

        try {
            const { venue_id } = req.params;

            const venue = await Venue.findByPk(venue_id, {
                include: { association: 'concerts' }
            });

            if (!venue) {
                return res.status(400).json({ error: 'Venue does not exist.' });
            }

            return res.json(venue);

        } catch (error) {
            res.status(500).send({ message: 'An error occurred ' + error });
            console.log(error);
        }
    }
}

export default new ConcertController();