"use client"

import { SyntheticEvent, useState, startTransition } from 'react'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { createInvoice } from "@/app/actions"
import SubmitButton from "@/components/SubmitButton"
import Form from 'next/form'
import Container from '@/components/Container';



export default function Home() {
    const [state, setState] = useState('ready');

    async function handleOnSubmit(event: SyntheticEvent) {
        if (state === 'pending') {
            event.preventDefault();
            return;
        }
        setState('pending');
    }

    return (
        <main className="h-full">
            <Container>
                <div className="flex justify-between">
                    <h1 className="text-3xl font-semibold mb-4">
                        Create Invoice
                    </h1>
                </div>
                <Form action={createInvoice} onSubmit={handleOnSubmit} className="grid gap-4  max-w-sm">
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
                        <SubmitButton />
                    </div>
                </Form>
            </Container>
        </main>
    );
}