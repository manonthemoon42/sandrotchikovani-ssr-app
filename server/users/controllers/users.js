/**
 * Users controller
 */

/**
 * Update status of user to athlete
 *
 * @param {any} req
 * @param {any} res
 * @param {any} next
 * @returns
 */
const getUsers = async (req, res, next) => {
    try {
        return res.json({'users': ['pablo']});
    }
    catch(err) {
        next(err);
    }
};

module.exports = {
    getUsers
};

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//     res.json({'Response': 'respond with a resource'});
// });
