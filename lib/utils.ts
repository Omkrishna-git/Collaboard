import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

const COLORS = [
    "#DC2626",
    "#D97706",
    "#059669",
    "#7C3AED",
    "#DB2777",
    "#F87171",
    "#FBBF24",
];

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function connectionIdToColor(connectionId: number): string {
    return COLORS[connectionId % COLORS.length];
}

