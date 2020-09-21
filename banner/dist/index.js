function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styles = require('@material-ui/core/styles');
var Grid = _interopDefault(require('@material-ui/core/Grid'));
var Typography = _interopDefault(require('@material-ui/core/Typography'));

var useStyles = styles.makeStyles(function (theme) {
  return styles.createStyles({
    root: {
      padding: '2px 1px 2px 1px',
      flexGrow: 1,
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      position: 'fixed',
      backgroundColor: 'lightBlue',
      marginTop: theme.spacing(1),
      borderRadius: '15px',
      display: 'flex'
    },
    paper: {
      padding: '2px 5px 2px 5px',
      textAlign: 'center',
      color: theme.palette.text.secondary
    },
    left: {
      padding: '2px 5px 2px 5px',
      textAlign: 'left',
      color: theme.palette.text.secondary,
      paddingRight: '10px'
    },
    right: {
      padding: '2px 5px 2px 5px',
      textAlign: 'right',
      color: theme.palette.text.secondary
    },
    image: {
      width: '50px',
      height: '50px'
    },
    img: {
      margin: 'round',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
      borderRadius: '30px 30px',
      marginLeft: theme.spacing(2)
    },
    oneLineStyle: {
      flexDirection: 'row',
      justifyContent: 'flex-start'
    }
  });
});
function PatientBanner() {
  var classes = useStyles();
  return React__default.createElement(Grid, {
    container: true,
    spacing: 0,
    justify: 'flex-start',
    alignItems: 'flex-start',
    direction: 'row',
    className: classes.root
  }, React__default.createElement(Grid, {
    item: true
  }, React__default.createElement(Grid, {
    item: true,
    xs: true,
    direction: 'column'
  }, React__default.createElement("div", {
    className: classes.image
  }, React__default.createElement("img", {
    className: classes.img,
    alt: 'complex',
    src: 'https://i.pinimg.com/originals/a6/c9/50/a6c950b115e5719a22fc1f866fffc21e.jpg'
  })))), React__default.createElement(Grid, {
    item: true,
    className: classes.left
  }, React__default.createElement(Grid, {
    item: true,
    xs: true,
    direction: 'column'
  }, React__default.createElement(Typography, {
    variant: 'caption',
    color: 'textPrimary',
    gutterBottom: true
  }, "\uD83C\uDFF4Bruno Mertens")), React__default.createElement(Grid, {
    item: true,
    xs: true,
    direction: 'column'
  }, React__default.createElement(Typography, {
    variant: 'caption',
    color: 'textSecondary'
  }, "M 42yrs (13.07.1977) ID: 1030114"))), React__default.createElement(Grid, {
    item: true,
    className: classes.right,
    style: {
      borderRight: '1',
      borderRightColor: 'white',
      borderRightStyle: 'solid',
      borderWidth: '1px',
      marginLeft: '10%'
    }
  }, React__default.createElement(Grid, {
    item: true,
    xs: true,
    direction: 'column'
  }, React__default.createElement(Typography, {
    variant: 'caption',
    color: 'textSecondary'
  }, "Length of Stay: 03:43")), React__default.createElement(Grid, {
    item: true,
    xs: true,
    direction: 'column'
  }, React__default.createElement(Typography, {
    variant: 'caption',
    color: 'textSecondary'
  }, "ED 302"))), React__default.createElement(Grid, {
    item: true,
    className: classes.left,
    style: {
      borderRight: '1',
      borderRightColor: 'white',
      borderRightStyle: 'solid',
      borderWidth: '1px'
    }
  }, React__default.createElement(Grid, {
    item: true,
    xs: true,
    direction: 'column',
    style: {
      borderBottom: '1',
      borderBottomColor: 'white',
      borderBottomStyle: 'solid',
      borderWidth: '1px'
    }
  }, React__default.createElement(Typography, {
    className: classes.oneLineStyle,
    variant: 'caption',
    color: 'textSecondary'
  }, "Allergies(3):", ' ', React__default.createElement(Typography, {
    variant: 'button',
    color: 'error',
    gutterBottom: true
  }, "PENICILINE"), ", Bee Venom, Latex")), React__default.createElement(Grid, {
    xs: true,
    item: true,
    direction: 'column'
  }, React__default.createElement(Typography, {
    variant: 'caption',
    color: 'textSecondary'
  }, "Encounter ID: 392719372"))), React__default.createElement(Grid, {
    item: true,
    className: classes.paper,
    spacing: 0,
    style: {
      borderRight: '1',
      borderRightColor: 'white',
      borderRightStyle: 'solid',
      borderWidth: '1px'
    }
  }, React__default.createElement(Grid, {
    item: true,
    xs: true,
    direction: 'column'
  }, React__default.createElement(Typography, {
    variant: 'caption',
    color: 'textSecondary'
  }, "Triage")), React__default.createElement(Grid, {
    item: true,
    xs: true,
    direction: 'column'
  }, React__default.createElement(Typography, {
    variant: 'caption',
    color: 'textSecondary'
  }, "-"))), React__default.createElement(Grid, {
    item: true,
    className: classes.paper,
    spacing: 0,
    style: {
      borderRight: '1',
      borderRightColor: 'white',
      borderRightStyle: 'solid',
      borderWidth: '1px'
    }
  }, React__default.createElement(Grid, {
    item: true,
    xs: true,
    direction: 'column'
  }, React__default.createElement(Typography, {
    variant: 'caption',
    color: 'textSecondary'
  }, "Risks")), React__default.createElement(Grid, {
    item: true,
    xs: true,
    direction: 'column'
  }, React__default.createElement(Typography, {
    variant: 'caption',
    color: 'textSecondary'
  }, "\uD83C\uDFE5\uD83E\uDDE0\uD83D\uDE4E\u200D\u2642\uFE0F"))));
}

var PatientBannerComponent = function PatientBannerComponent() {
  return React.createElement("div", null, React.createElement(PatientBanner, null));
};

exports.PatientBannerComponent = PatientBannerComponent;
//# sourceMappingURL=index.js.map
