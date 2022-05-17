const sailsHookOrm = require("sails-hook-orm");

module.exports = {


  friendlyName: 'Get id',


  description: '',


  inputs: {
      id: {
          type: 'number'
      }

  },
  exits: {

  },


  fn: async function ({ id }) {
    return sails.hooks.inertia.render('example/get-id', { id, time: Date.now() }, { title: 'My ID' })
  }


};
