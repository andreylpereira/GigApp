import Concert from '../models/Concert';
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

            const concertExists = await Concert.findOne({ where: { name: req.body.name } });
            if (concertExists) {
                return res.status(400).json({ error: 'Concert already exists.' });
            }
            const { id, name, description, date, ticketPrice } = await Concert.create(req.body);
            return res.json({
                id,
                name,
                description,
                date,
                ticketPrice
            });
        } catch (error) {
            res.status(500).send({ message: 'An error occurred ' + error });
            console.log(error);
        }
    }

    // async update(req, res) {

    //     try {

    //         const schema = Yup.object().shape({
    //             name: Yup.string(),
    //             email: Yup.string().email(),
    //             oldPassword: Yup.string().min(6),
    //             password: Yup.string()
    //                 .min(6)
    //                 .when('oldPassword', (oldPassword, field) =>
    //                     oldPassword ? field.required() : field
    //                 ),
    //             confirmPassword: Yup.string().when('password', (password, field) =>
    //                 password ? field.required().oneOf([Yup.ref('password')]) : field
    //             ),
    //         });

    //         if (!(await schema.isValid(req.body))) {
    //             return res.status(400).json({ error: 'Validation fails' });
    //         }

    //         const { email, oldPassword } = req.body;
    //         const concert = await concert.findByPk(req.concertId);
    //         if (email !== concert.email) {
    //             const concertExists = await concert.findOne({
    //                 where: { email },
    //             });
    //             if (concertExists) {
    //                 return res.status(400).json({
    //                     error: 'Concert already exists.'
    //                 });
    //             }
    //         }
    //         if (oldPassword && !(await Concert.checkPassword(oldPassword))) {
    //             return res.status(401).json({
    //                 error: 'Password does not match.'
    //             });
    //         }

    //         const { id, name, provider } = await Concert.update(req.body);

    //         return res.json({
    //             id,
    //             name,
    //             email,
    //             provider
    //         });
    //     } catch (error) {
    //         res.status(500).send({ message: 'An error occurred ' + error });
    //         console.log(error);
    //     }
    // }

    // // async index() { }
    async show(req, res) {

        try {            
            const concerts = await Concert.findAll();
            return res.json(concerts);
        } catch (error) {
            res.status(500).send({ message: 'An error occurred ' + error });
            console.log(error);
        }
    }
    // // async delete() { }

}

export default new ConcertController();