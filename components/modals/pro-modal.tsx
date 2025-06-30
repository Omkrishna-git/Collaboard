"use client";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
} from "@/components/ui/dialog";
import { useProModal } from "@/store/use-pro-model";

export const ProModal = () => {

    const { isOpen, onClose} = useProModal();


    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>Pro Modal</DialogHeader>
                <DialogDescription>
                    This is a PRO modal
                </DialogDescription>
                
            </DialogContent>
        </Dialog>
    );
};