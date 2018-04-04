const Request = {
  get: function() {
   return {
      end: (fn) => {
        fn({}, {body: {
          data: {
            results: [ {id:1}, {id:2}, {id:3} ]
          }
        }});
      }
    };
  }
};

module.exports = Request;