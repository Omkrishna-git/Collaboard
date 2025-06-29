"use client";

import { UserAvatar } from "./user-avatar";
import { useOthers, useSelf } from "@liveblocks/react/suspense";
import { connectionIdToColor } from "@/lib/utils";

// how many users do you wnat to show
const MAX_SHOWN_OTHER_USERS = 1;

const Participants = () => {
    const users = useOthers();
    const currentUser = useSelf();
    const hasMoreUsers = users.length > MAX_SHOWN_OTHER_USERS;

    return (
        <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
            <div className="flex gap-x-2">
                {users
                    .slice(0, MAX_SHOWN_OTHER_USERS)
                    .map(({ connectionId, info }) => {
                        return (
                            <UserAvatar
                                borderColor={connectionIdToColor(connectionId)}
                                key={connectionId}
                                src={info?.picture}
                                name={info?.name}
                                fallback={info?.name?.[0] || "A"}
                            />
                        );
                    })}

                {currentUser && (
                    <UserAvatar
                        borderColor={connectionIdToColor(
                            currentUser.connectionId
                        )}
                        src={currentUser.info?.picture}
                        name={`${currentUser.info?.name} (You)`}
                        fallback={currentUser.info?.name?.[0] || "Y"}
                    />
                )}

                {hasMoreUsers && (
                    <UserAvatar
                        borderColor="black"
                        name={`${users.length - MAX_SHOWN_OTHER_USERS} more`}
                        fallback={`+${users.length - MAX_SHOWN_OTHER_USERS}`}
                    />
                )}
            </div>
        </div>
    );
};

export function ParticipantsSkeleton() {
  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md w-[100px]" />
  );
}

export default Participants;