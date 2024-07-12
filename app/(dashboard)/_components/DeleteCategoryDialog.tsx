"use client";
import { Category } from '@prisma/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { ReactNode } from 'react';
import { DeleteCategory } from '../_actions/categories';
import { toast } from 'sonner';
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTrigger, AlertDialogAction } from '@/components/ui/alert-dialog';
import { AlertTitle } from '@/components/ui/alert';
import { TransactionType } from '@/lib/types';

interface Props {
    trigger: ReactNode;
    category: Category;
}

function DeleteCategoryDialog({category, trigger}: Props) {
const categoryIdentifier = `${category.name}-${category.type}`;
const queryClient = useQueryClient();

const deleteMutation = useMutation({
    mutationFn: DeleteCategory, 
    onSuccess: async () => {
        toast.success("Category has been deleted successfully", {
            id: categoryIdentifier
        });
        await queryClient.invalidateQueries({
            queryKey: ["categories"]
        });
    },
    onError: () => {
        toast.error("something went wrong", {
            id: categoryIdentifier,
        });
    }
});
  return (
    <AlertDialog>
        <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertTitle>
                        Are you sure?
                    </AlertTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will be permanently delete your category
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => {
                        toast.loading("Deleting category...", {
                            id: categoryIdentifier
                        });
                        deleteMutation.mutate({
                            name: category.name,
                            type: category.type as TransactionType
                        })
                    }}>Confirm
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>


    </AlertDialog>
  )
}

export default DeleteCategoryDialog