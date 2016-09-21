var React = require('react');

var App = React.createClass({
  render: function() {
    var text = "Hello World!";
    return <h1>{text}</h1>;
  }
});

module.exports = App;