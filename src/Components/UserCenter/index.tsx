import {
  Avatar,
  Badge,
  Card,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Popover,
  Typography,
  useTheme,
} from "@mui/material";
import {
  ChevronRightSharp,
  LogoutSharp,
  NotificationsSharp,
  SettingsSharp,
} from "@mui/icons-material";

import React from "react";

interface UserCenterCardProps {
  onClose: (event: React.MouseEvent<HTMLElement>) => void;
}

function UserCenterCard(props: UserCenterCardProps): JSX.Element {
  const theme = useTheme();

  function handleLinkClick(event: React.MouseEvent<HTMLElement>) {
    props.onClose(event);
  }

  return (
    <Card>
      <CardHeader
        title={
          <Typography variant={"h6"} component={"div"}>
            Hello Jason Lei
          </Typography>
        }
        subheader={new Date().toLocaleDateString(undefined, {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
        sx={{
          background: `linear-gradient(to right bottom, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
          color: theme.palette.common.white,
          "& .MuiCardHeader-subheader": {
            color: theme.palette.common.white,
          },
        }}
      />
      <Divider />
      <CardContent sx={{ padding: 0, paddingTop: theme.spacing(2) }}>
        <List>
          <ListItem disablePadding={true}>
            <ListItemButton sx={{ borderRadius: 0 }} onClick={handleLinkClick}>
              <ListItemIcon>
                <Badge
                  color={"secondary"}
                  overlap={"circular"}
                  badgeContent={3}
                >
                  <NotificationsSharp />
                </Badge>
              </ListItemIcon>
              <ListItemText primary={"Notifications"} />
              <ListItemSecondaryAction>
                <ChevronRightSharp />
              </ListItemSecondaryAction>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding={true}>
            <ListItemButton sx={{ borderRadius: 0 }} onClick={handleLinkClick}>
              <ListItemIcon>
                <SettingsSharp />
              </ListItemIcon>
              <ListItemText primary={"Settings"} />
              <ListItemSecondaryAction>
                <ChevronRightSharp />
              </ListItemSecondaryAction>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding={true}>
            <ListItemButton sx={{ borderRadius: 0 }} onClick={handleLinkClick}>
              <ListItemIcon>
                <LogoutSharp />
              </ListItemIcon>
              <ListItemText primary={"Logout"} />
              <ListItemSecondaryAction>
                <ChevronRightSharp />
              </ListItemSecondaryAction>
            </ListItemButton>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}

interface UserCenterAvatarProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

function UserCenterAvatar(props: UserCenterAvatarProps): JSX.Element {
  return (
    <Badge color={"secondary"} overlap={"circular"} badgeContent={3}>
      <Avatar onClick={props.onClick}>JL</Avatar>
    </Badge>
  );
}

export default function UserCenter(): JSX.Element {
  const theme = useTheme();
  const [open, setOpen] = React.useState<boolean>(false);
  const [avatarAnchor, setAvatarAnchor] = React.useState<HTMLElement | null>(
    null
  );

  function handleOpen(event: React.MouseEvent<HTMLElement>) {
    setAvatarAnchor(event.currentTarget);
    setOpen(true);
  }

  function handleClose() {
    setAvatarAnchor(null);
    setOpen(false);
  }

  return (
    <>
      <UserCenterAvatar onClick={handleOpen} />
      <Popover
        open={open}
        anchorEl={avatarAnchor}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{ marginTop: theme.spacing(2) }}
      >
        {open && <UserCenterCard onClose={handleClose} />}
      </Popover>
    </>
  );
}
