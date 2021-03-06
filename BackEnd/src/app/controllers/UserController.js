import User from '../models/User';
import * as Yup from 'yup';

class UserController {
    async store(req, res) {

        try {
            const schema = Yup.object().shape({
                name: Yup.string().required(),
                email: Yup.string()
                    .email()
                    .required(),
                password: Yup.string()
                    .required()
                    .min(6),
            });

            if (!(await schema.isValid(req.body))) {
                return res.status(400).json({ error: 'Validation fails' });
            }

            const userExists = await User.findOne({ where: { email: req.body.email } });
            if (userExists) {
                return res.status(400).json({ error: 'User already exists.' });
            }

            const { id, name, email, provider, rating, image } = await User.create(req.body);
            return res.json({
                id,
                name,
                email,
                provider,
                rating, 
                image
            });
        } catch (error) {
            res.status(500).send({ message: 'An error occurred ' + error });
            console.log(error);
        }
    }

    async update(req, res) {

        try {
            const schema = Yup.object().shape({
                name: Yup.string(),
                email: Yup.string().email(),
                oldPassword: Yup.string().min(6),
                password: Yup.string()
                    .min(6)
                    .when('oldPassword', (oldPassword, field) =>
                        oldPassword ? field.required() : field
                    ),
                confirmPassword: Yup.string().when('password', (password, field) =>
                    password ? field.required().oneOf([Yup.ref('password')]) : field
                ),
            });

            if (!(await schema.isValid(req.body))) {
                return res.status(400).json({ error: 'Validation fails' });
            }

            const { email, oldPassword } = req.body;
            const user = await User.findByPk(req.userId);
            
            if (email !== user.email) {
                const userExists = await User.findOne({
                    where: { email },
                });
                if (userExists) {
                    return res.status(400).json({
                        error: 'User already exists.'
                    });
                }
            }
            if (oldPassword && !(await user.checkPassword(oldPassword))) {
                return res.status(401).json({
                    error: 'Password does not match.'
                });
            }

            const { id, name, provider, createdAt, updatedAt } = await user.update(req.body);

            return res.json({
                id,
                name,
                email,
                provider,
                createdAt,
                updatedAt
            });
        } catch (error) {
            res.status(500).send({ message: 'An error occurred ' + error });
            console.log(error);
        }
    }

    // async index() { }

    async show(req, res) {

        try {
            const users = await User.findAll();
            //console.log(users)
            return res.json(users);
        } catch (error) {
            res.status(500).send({ message: 'An error occurred ' + error });
            console.log(error);
        }
    }

    // async delete() { }
}

export default new UserController();