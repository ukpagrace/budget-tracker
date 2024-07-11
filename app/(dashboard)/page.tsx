import { Button } from '@/components/ui/button';
import prisma from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
import React from 'react'
import CreateTransactionsDialog from './_components/CreateTransactionsDialog';
import Overview from './_components/Overview';

async function page() {
    const user = await currentUser();
    if(!user){
        redirect("/sign-in");
    }
    const userSettings = await prisma.userSettings.findUnique({
        where: {
            userId: user.id,
        },
    });
    if(!userSettings){
        redirect("/wizard")
    }
  return (
    <div className="h-full bg-background">
        <div className="border-b bg-card">
            <div className="container flex
                flex-wrap items-center
                justify-between gp-6 py-8"
            >
                <p className="text-3xl font-bold">
                    Hello, {user.firstName}!
                </p>
                <div className="flex items-center gap-3">
                    <CreateTransactionsDialog trigger={
                        <Button variant={"outline"}
                        className="border-emerald-50 
                        bg-emerald-950 text-white  hover:bg-emerald-700
                        hover:text-white"
                        >
                            New income
                        </Button>
                    } type="income"/>
                </div>

                <div className="flex items-center gap-3">
                    <CreateTransactionsDialog trigger={
                        <Button variant={"outline"}
                        className="border-rose-50 
                        bg-rose-950 text-white  hover:bg-rose-700
                        hover:text-white"
                        >
                            New expense
                        </Button>
                    } type="expense"/>

                </div>
            </div>
        </div>
        <Overview userSettings={userSettings}/>
    </div>
  )
}

export default page