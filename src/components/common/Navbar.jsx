import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  Collapse,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useEffect, useState, useCallback } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import WhiteLogo from "../../assets/white-jawam-logo.png";
import Logo from "../../assets/jawam-logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  {
    label: "Services",
    dropdown: [
      { label: "Software Development", path: "/services/software-development" },
      { label: "Web Development", path: "/services/web-development" },
      {
        label: "Full Stack Development",
        path: "/services/full-stack-development",
      },
      {
        label: "Mobile App Development",
        path: "/services/mobile-app-development",
      },
      {
        label: "Custom Software Solutions",
        path: "/services/custom-software-solutions",
      },
      { label: "UI/UX Design", path: "/services/ui-ux-design" },
      { label: "QA and Testing", path: "/services/qa-testing" },
      { label: "Devops and Cloud Services", path: "/services/devops-cloud" },
      {
        label: "Third-party Integration",
        path: "/services/third-party-integration",
      },
      { label: "CRM Customization", path: "/services/crm-customization" },
      { label: "SEO/SMO", path: "/services/seo-smo" },
    ],
  },
  {
    label: "Industries",
    dropdown: [
      { label: "Healthcare", path: "/industries/healthcare" },
      { label: "Finance", path: "/industries/finance" },
      { label: "Insurance", path: "/industries/insurance" },
      { label: "Education", path: "/industries/education" },
      { label: "Automotive", path: "/industries/automotive" },
      { label: "Retail & E-commerce", path: "/industries/retail-ecommerce" },
      {
        label: "Logistics & Distribution",
        path: "/industries/logistics-distribution",
      },
      { label: "Construction", path: "/industries/construction" },
    ],
  },
  { label: "Contact Us", path: "/contact" },
  { label: "Career", path: "/career" },
];

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState({
    services: false,
    industries: false,
  });

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const handleScroll = useCallback(() => {
    setIsSticky(window.scrollY > 46);
  }, []);

  useEffect(() => {
    if (isDesktop && drawerOpen) setDrawerOpen(false);
  }, [isDesktop, drawerOpen]);

  useEffect(() => {
    if (!isDesktop) return;
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDesktop, handleScroll]);

  const toggleDrawer = useCallback((open) => () => setDrawerOpen(open), []);

  const handleDropdownToggle = useCallback(
    (key) => setMobileDropdown((prev) => ({ ...prev, [key]: !prev[key] })),
    []
  );

  const logoSrc = isDesktop ? (isSticky ? Logo : WhiteLogo) : Logo;

  return (
    <>
      <AppBar
        position={isDesktop ? (isSticky ? "fixed" : "absolute") : "fixed"}
        sx={{
          top: 0,
          backgroundColor:
            isSticky || !isDesktop ? theme.palette.custom.white : "transparent",
          borderBottom:
            isSticky || !isDesktop
              ? "none"
              : ".8px solid rgba(255, 255, 255, 0.1)",
          color: theme.palette.text.secondary,
          boxShadow: isSticky ? "rgba(0, 0, 0, 0.075) 0px 2px 4px" : "none",
          zIndex: 1200,
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            px: { xs: 4, sm: 6, md: 3.5 },
            height: isDesktop ? (isSticky ? "68px" : "97px") : "90px",
            transition: "height 0.5s ease",
          }}
        >
          <Box
            component="img"
            src={logoSrc}
            alt="Jawam Infotech Logo"
            sx={{ width: 87, ml: { md: 2.8 }, cursor: "pointer" }}
          />

          {isDesktop ? (
            <Box
              display="flex"
              gap={2.7}
              alignItems="center"
              pr={2.5}
              height="100%"
            >
              {navItems.map(({ label, path, dropdown }) => {
                const isDropdown = !!dropdown;
                return (
                  <Box
                    key={label}
                    component={isDropdown ? "div" : Link}
                    to={!isDropdown ? path : "#"}
                    onMouseEnter={() => isDropdown && setHoveredMenu(label)}
                    onMouseLeave={() => setHoveredMenu(null)}
                    sx={{
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      height: "100%",
                      cursor: "pointer",
                      textDecoration: "none",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        height: 2,
                        width: "0%",
                        left: "50%",
                        bottom: 0,
                        backgroundColor: theme.palette.text.primary,
                        transform: "translateX(-50%)",
                        transition: "width 0.5s ease",
                      },
                      "&:hover::after": { width: "100%" },
                      "&:hover .nav-link": {
                        color: theme.palette.text.primary,
                        transition: "0.5s ease",
                      },
                    }}
                  >
                    <Typography
                      className="nav-link"
                      sx={{
                        fontWeight: 500,
                        fontSize: "18px",
                        fontFamily: theme.typography.fontFamily,
                        display: "flex",
                        alignItems: "center",
                        color: isSticky
                          ? theme.palette.text.secondary
                          : theme.palette.custom.white,
                      }}
                    >
                      {label}
                      {isDropdown && <ArrowDropDownIcon fontSize="small" />}
                    </Typography>

                    {isDropdown && hoveredMenu === label && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: isSticky ? 68 : 97,
                          left: 0,
                          bgcolor: theme.palette.custom.white,
                          color: theme.palette.text.secondary,
                          boxShadow: 3,
                          zIndex: 2000,
                          minWidth: 180,
                          py: 1,
                        }}
                      >
                        {dropdown.map(({ label: subLabel, path }) => (
                          <Typography
                            key={subLabel}
                            component={Link}
                            to={path}
                            sx={{
                              px: 2,
                              py: 0.5,
                              display: "block",
                              whiteSpace: "nowrap",
                              textDecoration: "none",
                              fontSize: "16px",
                              fontFamily: theme.typography.fontFamily,
                              fontWeight: 500,
                              color: theme.palette.text.secondary,
                              "&:hover": { backgroundColor: "#f0f0f0" },
                            }}
                          >
                            {subLabel}
                          </Typography>
                        ))}
                      </Box>
                    )}
                  </Box>
                );
              })}
            </Box>
          ) : (
            <IconButton onClick={toggleDrawer(true)}>
              <MenuRoundedIcon
                sx={{
                  color: theme.palette.text.primary,
                  fontSize: 30,
                }}
              />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, mt: 2 }}>
          <List>
            {navItems.map(({ label, path, dropdown }) => {
              const isDropdown = !!dropdown;
              const key = label.toLowerCase();

              return (
                <Box key={label}>
                  <ListItem
                    button
                    component={isDropdown ? "div" : Link}
                    to={!isDropdown ? path : "#"}
                    onClick={() => {
                      if (isDropdown) {
                        handleDropdownToggle(key);
                      } else {
                        setDrawerOpen(false);
                      }
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 500,
                        color: theme.palette.text.secondary,
                      }}
                    >
                      {label}
                    </Typography>

                    {isDropdown && (
                      <ArrowDropDownIcon
                        sx={{ color: theme.palette.text.secondary }}
                      />
                    )}
                  </ListItem>

                  {isDropdown && (
                    <Collapse
                      in={mobileDropdown[key]}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        {dropdown.map(({ label: subLabel, path }) => (
                          <ListItem
                            key={subLabel}
                            button
                            component={Link}
                            to={path}
                            onClick={() => setDrawerOpen(false)}
                          >
                            <Typography
                              sx={{
                                pl: 1,
                                lineHeight: 1.2,
                                fontSize: "16px",
                                fontFamily: theme.typography.fontFamily,
                                fontWeight: 500,
                                color: theme.palette.text.secondary,
                              }}
                            >
                              {subLabel}
                            </Typography>
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  )}
                </Box>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
