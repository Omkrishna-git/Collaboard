"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";

interface RoomProps {
    children: ReactNode;
    roomId: string;
    fallback: NonNullable<ReactNode> | null;
}

export const Room = ({ 
    children , 
    roomId,
    fallback
} : RoomProps ) => {
  return (
    <LiveblocksProvider 
        // publicApiKey={"pk_dev_yWl_4OIjV4U3H2U8SxcIrF8CpeH8-tkVurBFo-j1gVX4o9bcE-ffEVyyuClEznZ_"}
        authEndpoint="/api/liveblocks-auth"
    >
        <RoomProvider id= {roomId} initialPresence={{}}>
            <ClientSideSuspense fallback={fallback}>
                {() => children}
            </ClientSideSuspense>
        </RoomProvider>
    </LiveblocksProvider>
  );
}


