const sailsHookOrm = require("sails-hook-orm");

module.exports = {


  friendlyName: 'Hello',


  description: 'Hello example.',


  inputs: {

  },


  exits: {

  },


  fn: async function () {
    return sails.hooks.inertia.render('example/index', { using: 'Inertia' });
  }
};
