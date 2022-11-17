import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SupportIcon from '@mui/icons-material/Support';

const pages =
    [
        {
            name: 'Nuestros Servicios',
            id: 'about'
        },
        {
            name: 'Trabajando con...',
            id: 'entidad'
        },
        {
            name: 'Cómo Ayudar',
            id: 'donation'
        },
        {
            name: 'Contacto',
            id: 'contact'
        },
    ]

const pagesReversed = pages

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleScrollTo = (pageId: any) => {

        const section = document.getElementById(`${pageId}`);
        console.log(section)

        if (section) {
            setTimeout(function () {
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }, 100);
        } else
            throw new Error('Section no existe');
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <SupportIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'Matthildur',
                            fontWeight: 550,
                            letterSpacing: '.1rem',
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        Campaña de Socios Rafaela
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            flexDirection: 'row',
                            display: {xs: 'none', md: 'flex'},
                            justifyContent: 'flex-end'
                        }}>
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                onClick={() => handleScrollTo(page.id)}
                                sx={{
                                    my: 1,
                                    px: 3,
                                    fontFamily: 'Matthildur',
                                    fontWeight: 700,
                                    color: 'black',
                                    display: 'block'
                                }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>

                    <SupportIcon sx={{flexGrow: 0, display: {xs: 'flex', md: 'none'}, mr: 1}}/>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontFamily: 'Matthildur',
                            fontWeight: 550,
                            letterSpacing: '.1rem',
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        CSR
                    </Typography>

                    <Box sx={{flexGrow: -1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                    <Typography
                                        fontFamily='Montserrat'
                                        textAlign="center"
                                        onClick={() => handleScrollTo(page.id)}>
                                        {page.name}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
