export default {
  routes: [
    {
     method: 'GET',
     path: '/check/',
     handler: 'check.check',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
