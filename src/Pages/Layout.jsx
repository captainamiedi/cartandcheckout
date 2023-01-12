import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ProductContext } from '../context';
import { useNavigate } from 'react-router-dom';

function ResponsiveAppBar({children}) {
  const navigate = useNavigate()
  const {cartData} = React.useContext(ProductContext)

  const handleGoToCart = () => {
    navigate('/cart')
  }
  const handleRedirect = () => {
    navigate('/')
  }

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={handleRedirect}>
            Gift Card Shop
          </Typography>
          <div className='cart_badge_container'>
            <Badge badgeContent={cartData?.length} color="success" onClick={handleGoToCart}>
              <ShoppingCartIcon color="action" />
            </Badge>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
    <Box className='product_container'>
        {children}
    </Box>
    </>
  );
}
export default ResponsiveAppBar;