import { Box } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { itemCountSelector } from 'features/Cart/selectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: '20px',
    color: ' #1e1e27',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  home: {
    color: '#FF9900',
  },
  navLink: {
    textDecoration: 'none',
    color: 'white',
  },
  cart: {
    color: 'white',
  },
}));

function Header() {
  const classes = useStyles();
  const itemCount = useSelector(itemCountSelector);

  return (
    <Box className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <NavLink exact to="/" className={`${classes.title} ${classes.navLink}`}>
            Nordic<span className={classes.home}>Shop</span>
          </NavLink>
          <NavLink exact to="/" className={classes.navLink}>
            <Button color="inherit">Home</Button>
          </NavLink>
          <NavLink to="/products" className={classes.navLink}>
            <Button color="inherit">Product</Button>
          </NavLink>
          <NavLink to="/cart" className={classes.navLink}>
            <Button color="inherit">
              <Badge badgeContent={itemCount} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
