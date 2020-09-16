function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var Card = _interopDefault(require('terra-card/lib/Card'));

var CardPadding = function CardPadding() {
  return React__default.createElement("div", null, React__default.createElement(Card, null, React__default.createElement(Card.Body, null, "Patient Banner")));
};

var ExampleComponent = function ExampleComponent() {
  return React.createElement("div", null, React.createElement(CardPadding, null));
};

exports.ExampleComponent = ExampleComponent;
//# sourceMappingURL=index.js.map
