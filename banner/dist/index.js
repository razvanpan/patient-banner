function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var CellGrid = require('terra-cell-grid');
var CellGrid__default = _interopDefault(CellGrid);
var Grid = _interopDefault(require('terra-grid'));
var ItemDisplay = _interopDefault(require('terra-clinical-item-display'));

var classes = {"root":"_cell-grid-component-component__root__1SrKG","paper":"_cell-grid-component-component__paper__2CqBf","paperText":"_cell-grid-component-component__paperText__1Dk2f","left":"_cell-grid-component-component__left__1oun2","leftText":"_cell-grid-component-component__leftText__2Jhap","right":"_cell-grid-component-component__right__3SUXN","rightText":"_cell-grid-component-component__rightText__1obU9","image":"_cell-grid-component-component__image__3Bzeq","img":"_cell-grid-component-component__img__byrhp","oneLineStyle":"_cell-grid-component-component__oneLineStyle__3e8ZW","borderRight":"_cell-grid-component-component__borderRight__qvn1y","borderBottom":"_cell-grid-component-component__borderBottom__3hQje"};

var CellGridComponent = function CellGridComponent() {
  return React__default.createElement(CellGrid__default, {
    className: classes.root
  }, React__default.createElement(CellGrid.Cell, {
    key: 'img',
    width: {
      "static": {
        value: 40,
        unit: 'px'
      }
    },
    style: {
      justifyContent: 'center'
    }
  }, React__default.createElement("div", {
    className: classes.image
  }, React__default.createElement("img", {
    className: classes.img,
    alt: 'complex',
    src: 'https://i.pinimg.com/originals/a6/c9/50/a6c950b115e5719a22fc1f866fffc21e.jpg'
  }))), React__default.createElement(CellGrid.Cell, {
    className: classes.left,
    key: 'name',
    width: {
      "static": {
        value: 300,
        unit: 'px'
      }
    }
  }, React__default.createElement("div", null, React__default.createElement(Grid, {
    className: classes.left
  }, React__default.createElement(Grid.Row, null, React__default.createElement(ItemDisplay, {
    className: classes.leftText,
    text: "\uD83C\uDFF4Bruno Mertens",
    textStyle: 'strong'
  })), React__default.createElement(Grid.Row, null, React__default.createElement(ItemDisplay, {
    className: classes.leftText,
    text: 'M 42yrs (13.07.1977) ID: 1030114',
    textStyle: 'secondary'
  }))))), React__default.createElement(CellGrid.Cell, {
    key: 'stay',
    width: {
      "static": {
        value: 230,
        unit: 'px'
      }
    }
  }, React__default.createElement("div", {
    className: classes.right
  }, React__default.createElement(Grid, {
    className: classes.borderRight,
    style: {
      justifyContent: 'flex-end'
    }
  }, React__default.createElement(Grid.Row, {
    style: {
      justifyContent: 'flex-end'
    }
  }, React__default.createElement(ItemDisplay, {
    className: classes.rightText,
    text: 'Length of Stay: 03:43',
    textStyle: 'secondary'
  })), React__default.createElement(Grid.Row, {
    style: {
      justifyContent: 'flex-end'
    }
  }, React__default.createElement(ItemDisplay, {
    className: classes.rightText,
    text: 'ED 302',
    textStyle: 'secondary'
  }))))), React__default.createElement(CellGrid.Cell, {
    key: 'allergies',
    className: classes.left,
    width: {
      "static": {
        value: 280,
        unit: 'px'
      }
    }
  }, React__default.createElement(Grid, {
    className: classes.borderRight
  }, React__default.createElement(Grid.Row, {
    className: classes.borderBottom
  }, React__default.createElement(ItemDisplay, {
    className: classes.leftText,
    text: 'Allergies(3):  ',
    textStyle: 'secondary'
  }), React__default.createElement(ItemDisplay, {
    className: classes.leftText,
    style: {
      backgroundColor: 'white'
    },
    text: ' Peniciline',
    textStyle: 'attention'
  }), React__default.createElement(ItemDisplay, {
    className: classes.leftText,
    text: ', Bee Venom, Latex',
    textStyle: 'secondary'
  })), React__default.createElement(Grid.Row, null, React__default.createElement(ItemDisplay, {
    className: classes.leftText,
    text: 'Encounter ID: 392719372',
    textStyle: 'secondary'
  })))), React__default.createElement(CellGrid.Cell, {
    key: 'triage',
    className: classes.paper,
    width: {
      "static": {
        value: 30,
        unit: 'px'
      }
    }
  }, React__default.createElement(Grid, {
    className: classes.borderRight,
    style: {
      justifyContent: 'center'
    }
  }, React__default.createElement(Grid.Row, {
    style: {
      justifyContent: 'center'
    }
  }, React__default.createElement(ItemDisplay, {
    text: 'Triage',
    textStyle: 'secondary',
    className: classes.paperText
  })), React__default.createElement(Grid.Row, {
    style: {
      justifyContent: 'center'
    }
  }, React__default.createElement(ItemDisplay, {
    text: '-',
    textStyle: 'secondary',
    className: classes.paperText
  })))), React__default.createElement(CellGrid.Cell, {
    key: 'risks',
    className: classes.paper,
    width: {
      "static": {
        value: 50,
        unit: 'px'
      }
    }
  }, React__default.createElement(Grid, {
    className: classes.borderRight
  }, React__default.createElement(Grid.Row, {
    style: {
      justifyContent: 'center'
    }
  }, React__default.createElement(ItemDisplay, {
    className: classes.paperText,
    text: 'Risks',
    textStyle: 'secondary'
  })), React__default.createElement(Grid.Row, {
    style: {
      justifyContent: 'center'
    }
  }, React__default.createElement(ItemDisplay, {
    lassName: classes.paperText,
    text: "\uD83C\uDFE5\uD83E\uDDE0\uD83D\uDE4E\u200D\u2642\uFE0F",
    textStyle: 'secondary'
  })))), React__default.createElement(CellGrid.Cell, {
    key: 'blank'
  }, React__default.createElement(Grid, null)));
};

var PatientBannerComponent = function PatientBannerComponent() {
  return React.createElement("div", null, React.createElement(CellGridComponent, null));
};

exports.PatientBannerComponent = PatientBannerComponent;
//# sourceMappingURL=index.js.map
