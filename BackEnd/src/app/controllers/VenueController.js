import Venue from '../models/Venue';

class VenueController {
    async store(req, res) {

        try {
            const venusExists = await Venue.findOne({ where: { email: req.body.email } });
            if (venusExists) {
                return res.status(400).json({ error: 'Venue already exists.' });
            }
            const { id, name, email, provider } = await Venue.create(req.body);
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

    // async update(req, res) {

    //     try {
    //         const { email, oldPassword } = req.body;
    //         const user = await User.findByPk(req.userId);
    //         if (email !== user.email) {
    //             const userExists = await User.findOne({
    //                 where: { email },
    //             });
    //             if (userExists) {
    //                 return res.status(400).json({
    //                     error: 'User already exists.'
    //                 });
    //             }
    //         }
    //         if (oldPassword && !(await user.checkPassword(oldPassword))) {
    //             return res.status(401).json({
    //                 error: 'Password does not match.'
    //             });
    //         }

    //         const { id, name, provider } = await user.update(req.body);

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

    // async index() { }
    async show(req, res) {
        
        try {
            const venues = await Venue.findAll();
            return res.json(venues);
        } catch (error) {
            res.status(500).send({ message: 'An error occurred ' + error });
            console.log(error);
        }
    }
    // async delete() { }

}

export default new VenueController();