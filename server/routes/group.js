const Group = require('../models/group')

module.exports = function(server) {

	/**
	 * Create
	 */
	server.post('/groups', (req, res, next) => {

        const data = req.body

        Group.create(data)
            .then(group => {
                res.send(200, group)
                next()
            })
            .catch(err => {
                res.send(500, err)
            })
	})

	/**
	 * List
	 */
	server.get('/groups', (req, res, next) => {

		let limit = parseInt(req.query.limit, 10) || 10, // default limit to 10 docs
            skip  = parseInt(req.query.skip, 10) || 0, // default skip to 0 docs
			query = req.params || {}

        // remove skip and limit from data to avoid false querying
        delete query.skip
        delete query.limit

	    Group.find(query).skip(skip).limit(limit)
			.then(groups => {

				res.send(200, groups)
				next()

			})
			.catch(err => {
				res.send(500, err)
			})

	})

	/**
	 * Get
	 */
	server.get('/groups/:groupId', (req, res, next) => {

		Group.findOne({ _id: req.params.groupId })
			.then(group => {

				if (!group) {
					res.send(404)
					next()
				}

				res.send(200, group)
				next()

			})
			.catch(err => {
				res.send(500, err)
			})

	})

	/**
	 * Update
	 */
	server.put('/groups/:groupId', (req, res, next) => {

		let data = req.body || {},
			opts = {
                new: true
			}

		Group.update({_id: req.params.groupId }, data, opts)
			.then(group => {

				if (!group) {
					res.send(404)
					next()
				}

				res.send(200, group)
				next()

			})
			.catch(err => {
				res.send(500, err)
			})

	})

	/**
	 * Delete
	 */
	server.del('/groups/:groupId', (req, res, next) => {

		Group.findOneAndRemove({ _id: req.params.groupId })
			.then((group) => {

				if (!group) {
					res.send(404)
					next()
				}

				res.send(204)
				next()

			})
			.catch(err => {
				res.send(500, err)
			})

	})

}