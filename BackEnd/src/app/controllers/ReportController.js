import { Op } from 'sequelize';
import Concert from '../models/Concert';
import Venue from '../models/Venue';
import Band from '../models/Band';

class ReportController {
    async show(req, res) {

        try {
            const concerts = await Band.findAll(
                { include: { association: 'venue' } }
            );
            return res.json(concerts);
        } catch (error) {
            res.status(500).send({ message: 'An error occurred ' + error });
            console.log(error);
        }
    }
}



export default new ReportController();