import {
  AllInclusiveSharp,
  DashboardSharp,
  DateRangeSharp,
  FlagSharp,
  TodaySharp,
} from "@mui/icons-material";
import {
  Backdrop,
  CSSObject,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer as MuiDrawer,
  Theme,
  styled,
  useTheme,
} from "@mui/material";

import React from "react";

const drawerWidth = 240;

function openedMixin(theme: Theme): CSSObject {
  return {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
    border: 0,
  };
}

function closedMixin(theme: Theme): CSSObject {
  return {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(6)} + 1px)`,
  };
}

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  position: "fixed",
  zIndex: theme.zIndex.drawer,
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar(): JSX.Element {
  const theme = useTheme();
  const [open, setOpen] = React.useState<boolean>(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Drawer
        variant={"permanent"}
        open={open}
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
      >
        <List sx={{ paddingY: 0 }}>
          {/* Logo */}
          <ListItem
            sx={{
              paddingY: theme.spacing(2),
              background: `linear-gradient(to right bottom, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
            }}
          >
            <ListItemIcon>
              <AllInclusiveSharp sx={{ color: theme.palette.common.white }} />
            </ListItemIcon>
          </ListItem>

          {/* Menu Links */}
          {/* TODO: Replace with an configured array. */}
          <ListItem disablePadding={true}>
            <ListItemButton
              sx={{ borderRadius: 0, paddingY: theme.spacing(2) }}
            >
              <ListItemIcon>
                <DashboardSharp />
              </ListItemIcon>
              <ListItemText>Dashboard</ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding={true}>
            <ListItemButton
              sx={{ borderRadius: 0, paddingY: theme.spacing(2) }}
            >
              <ListItemIcon>
                <FlagSharp />
              </ListItemIcon>
              <ListItemText>Notices</ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding={true}>
            <ListItemButton
              sx={{ borderRadius: 0, paddingY: theme.spacing(2) }}
            >
              <ListItemIcon>
                <TodaySharp />
              </ListItemIcon>
              <ListItemText>120 Day Planning</ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding={true}>
            <ListItemButton
              sx={{ borderRadius: 0, paddingY: theme.spacing(2) }}
            >
              <ListItemIcon>
                <DateRangeSharp />
              </ListItemIcon>
              <ListItemText>Annual Planning</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Backdrop open={open} sx={{ zIndex: theme.zIndex.drawer - 1 }} />
    </>
  );
}
