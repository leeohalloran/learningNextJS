"use server"

import { redirect } from 'next/navigation'

import { Invoices } from '@/db/schema'
import { db } from '@/db'


export async function createInvoice(formData: FormData) {
    console.log(`Data`, formData)
    const value = Math.floor(parseFloat(String(formData.get(`value`))) * 100)
    console.log(`Value`, value)
    const description = formData.get('description') as string;

    const results = await db.insert(Invoices).values({
        value,
        description,
        status: "open"
    })
        .returning({
            id: Invoices.id
        })
    redirect(`./invoices/${results[0].id}`)
}
