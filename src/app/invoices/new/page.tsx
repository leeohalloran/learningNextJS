"use client"

import { SyntheticEvent, useState } from 'react'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { createInvoice } from "@/app/actions"



export default function Home() {
    const [state, setState] = useState('ready');

    async function handleOnSubmit(event: SyntheticEvent) {
        event.preventDefault();
        if (state === 'pending') return;
        setState('pending');
        const target = event.target as HTMLFormElement;
        const formData = new FormData(target);
        await createInvoice(formData);
    }

    return (
        <main className="flex flex-col justify-center h-full max-w-5xl mx-auto gap-6 my-12">
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold text-sm mb-2">
                    Create Invoice
                </h1>
            </div>
            <form action={createInvoice} onSubmit={handleOnSubmit} className="grid gap-4  max-w-sm">
                <div>
                    <Label htmlFor="name">Billing Name</Label>
                    <Input name="name" id="name" className="block font-semibold text-sm mb-2" type="text" placeholder="Billing Name" />
                </div>
                <div>
                    <Label htmlFor="email">Billing Email </Label>
                    <Input name="email" id="email" className="block font-semibold text-sm mb-2" type="email" placeholder="Billing Email" />
                </div>
                <div>
                    <Label htmlFor="value">Value (£) </Label>
                    <Input name="value" id="value" className="block font-semibold text-sm mb-2" type="text" placeholder="Value" />
                </div>
                <div>
                    <Label htmlFor="description">Description </Label>
                    <Textarea name="description" id="description" className="block font-semibold text-sm mb-2" />
                </div>
                <div>
                    <Button className="w-full font-semibold">Submit</Button>
                </div>
            </form>
        </main>
    );
}