import { CircularProgress } from "@mui/material";
import type React from "react";
import { useState } from "react";
import { GetWSStatus } from "./context/webSocket";
import { NotCardPage, NotDevicePage, UserPage } from "./pages";
import { EditLayout } from "./layouts/EditLayout/EditLayout";

export interface UserI {
  name: string;
  last_name: string;
  city: string;
  points: number;
  img: string;
}

export function App() {
  const ws = GetWSStatus();
  const [status, setStatus] = useState<string>("disconnected");
  const [user, setUser] = useState<UserI>({
    name: "",
    last_name: "",
    city: "",
    points: 0,
    img: "",
  });

  ws.onopen = () => setStatus("connected");
  ws.onclose = () => setStatus("disconnected");
  ws.onmessage = (msg) => {
    const userData = JSON.parse(msg.data).userData;

    if (
      userData?.name &&
      userData.last_name &&
      userData.city &&
      userData.hasOwnProperty("points") &&
      userData.img
    ) {
      setUser(userData);
    } else {
      setUser({
        name: "",
        last_name: "",
        city: "",
        points: 0,
        img: "",
      });
    }

    setStatus(JSON.parse(msg.data).status);
  };

  const getUserPage = (): React.ReactNode => {
    if (user.name.length === 0) {
      return <NotCardPage />;
    }
    return <UserPage user={user} />;
  };

  const getComponent = (): React.ReactNode => {
    switch (status) {
      case "connected":
        return <NotDevicePage />;
      case "device_connected":
        return <NotCardPage />;
      case "card_connected":
        return getUserPage();
      case "error":
        return <NotCardPage />;
      case "disconnected":
        return <CircularProgress />;
      default:
        return <CircularProgress />;
    }
  };

  return <EditLayout>{getComponent()}</EditLayout>;
}
