"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { LayoutDashboard, Star } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"],
});

export const OrgSidebar = () => {

    const searchParams = useSearchParams();
    const favorite = searchParams.get("favorites");
    
    return (
        <div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5 mr-5">
            <Link href="/">
                {/* logo & branding  */}
                <div className="flex items-center gap-x-3">
                    <Image src="/collaboard-logo.svg" alt="Logo" height={30} width={30} />
                    <span
                        className={cn("font-semibold text-2xl", font.className)}
                    >
                        Collaboard
                    </span>
                </div>
            </Link>

            {/* Organization Switcher button  */}
            <OrganizationSwitcher
                hidePersonal
                appearance={{
                    elements: {
                        rootBox: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                        },
                        organizationSwitcherTrigger: {
                            padding: "6px",
                            width: "100%",
                            borderRadius: "8px",
                            border: "1px solid #E5E7EB",
                            justifyContent: "space-between",
                            backgroundColor: "white",
                        },
                    },
                }}
            />

            <div className="space-y-1 w-full">

                {/* Team Boards  */}
                <Button
                    variant={favorite ? "ghost" : "secondary"}
                    asChild
                    size="lg"
                    className="font-normal justify-start px-2 w-full"
                >
                    <Link href="/">
                        <LayoutDashboard className="h-4 w-4 mr-2" />
                        Team Boards
                    </Link>
                </Button>

                {/* fovourite Board  */}
                <Button
                    variant={!favorite ? "ghost" : "secondary"}
                    asChild
                    size="lg"
                    className="font-normal justify-start px-2 w-full"
                >
                    <Link
                        href={{
                            pathname: "/",
                            query: {
                                favorites: "true",
                            },
                        }}
                    >
                        <Star className="h-4 w-4 mr-2" />
                        Favorite Boards
                    </Link>
                </Button>
            </div>
        </div>
    );
}; 