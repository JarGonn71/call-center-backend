import User from '../Schems/User.js';

class UserController {
  async create(req, res) {
    try {
      const { content, numberOrder, email, phone } = req.body
      const user = await User.create({ content, numberOrder, email, phone, data: new Date() })
      res.status(200).json(user)
    } catch (error) {
      res.status(500).json({message: 'что-то пошло не так :('})
    }
  }

  async getAll(req, res) {
    try {
	    const { page, perPage } = req.query;
	    const options = {
		    page: parseInt(page, 10) || 1,
		    limit: parseInt(perPage, 10) || 10,
		    sort: { _id: -1 },
	    };
	    const users = await User.paginate({}, options);
      return res.json(users)
    } catch (error) {
      res.status(500).json({message: 'что-то пошло не так :('})
    }
  }
}

export default new UserController();