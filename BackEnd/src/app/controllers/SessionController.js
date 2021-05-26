import * as Yup from 'yup';
import jwt from 'jsonwebtoken';
import authConf from '../../config/auth';
import User from '../models/User';
import Band from '../models/Band';
import Venue from '../models/Venue';

class SessionController {

    async store(req, res) {

        try {

            const schema = Yup.object().shape({
                email: Yup.string()
                    .email()
                    .required(),
                password: Yup.string().required(),
            });

            if (!(await schema.isValid(req.body))) {
                return res.status(400).json({ error: 'Validation fails' });
            }

            const { email, password } = req.body;

            let user = await findUser(email);

            if (!user || !(await user.checkPassword(password))) {
                return res.status(401).json({ error: 'User or Password does not match!' });
            }

            const { id, name } = user;

            return res.json({
                user: {
                    id,
                    name,
                    email,
                },
                token: jwt.sign({ id }, authConf.secret, {
                    expiresIn: authConf.expireIn,
                }),
            });
        } catch (error) {
            res.status(500).send({ message: 'An error occurred ' + error });
            console.log(error);
        }
    }
}

async function findUser(email) {

    let user = await User.findOne({ where: { email } });

    if (!user) {
        user = await Band.findOne({ where: { email } });
    }
    if (!user) {
        user = await Venue.findOne({ where: { email } });
    }
    return user;
}


export default new SessionController();