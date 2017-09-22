const Todo = require('../models/todo')

module.exports = function(server) {

	/**
	 * Create
	 */
	server.post('/todos', (req, res, next) => {

        const data = req.body

        Todo.create(data)
            .then(task => {
                res.send(200, task)
                next()
            })
            .catch(err => {
                res.send(500, err)
            })
	})

	/**
	 * List
	 */
	server.get('/todos', (req, res, next) => {

		let limit = parseInt(req.query.limit, 10) || 10, // default limit to 10 docs
            skip  = parseInt(req.query.skip, 10) || 0, // default skip to 0 docs
			query = req.params || {}

        // remove skip and limit from data to avoid false querying
        delete query.skip
        delete query.limit

	    Todo.find(query).skip(skip).limit(limit)
			.then(tasks => {

				res.send(200, tasks)
				next()

			})
			.catch(err => {
				res.send(500, err)
			})

	})

	/**
	 * Get
	 */
	server.get('/todos/:todoId', (req, res, next) => {

		Todo.findOne({ _id: req.params.todoId })
			.then(todo => {

				if (!todo) {
					res.send(404)
					next()
				}

				res.send(200, todo)
				next()

			})
			.catch(err => {
				res.send(500, err)
			})

	})

	/**
	 * Update
	 */
	server.put('/todos/:todoId', (req, res, next) => {

		let data = req.body || {},
			opts = {
                new: true
			}

		Todo.update({_id: req.params.todoId }, data, opts)
			.then(todo => {

				if (!todo) {
					res.send(404)
					next()
				}

				res.send(200, todo)
				next()

			})
			.catch(err => {
				res.send(500, err)
			})

	})

	/**
	 * Delete
	 */
	server.del('/todos/:todoId', (req, res, next) => {

		Todo.findOneAndRemove({ _id: req.params.todoId })
			.then((todo) => {

				if (!todo) {
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