import { eq } from "drizzle-orm";
import { db } from "@/db"
import { Invoices } from "@/db/schema"
import React from "react";
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { notFound } from 'next/navigation'
import StatusBadge from "@/components/StatusBadge"
import Container from "@/components/Container";


export default async function InvoicePage({ params }: { params: { invoiceid: string } }) {
    const invId = parseInt(params.invoiceid)
    if (isNaN(invId)) {
        throw new Error('Invalid Invoice ID');
    }

    const result = await db.select().from(Invoices).where(eq(Invoices.id, invId)).limit(1)

    if (result.length <= 0) {
        return notFound()
    }


    return (
        <main className=" h-full max-w-5xl mx-auto my-12">
            <Container>
                <div className="justify-between mb-8">
                    <h1 className="flex items-center text-3xl font-semibold">
                        Invoices # {result[0].id}
                    </h1>
                    <StatusBadge status={result[0].status} />
                    <p className="text-2xl font-semibold mt-4">
                        £{(result[0].value / 100).toFixed(2)}
                    </p>

                </div>
                <p className="text-large mb-8">
                    {result[0].description}
                </p>
                <h2 className="text-lg font-semibold mb-4">
                    Billing Details
                </h2>
                <ul className="grid gap-2">
                    <li className="flex gap-4">
                        <strong className="block w-28 flex-shrink-0 font-medium text-sm">
                            Invoice Id
                            <span> {result[0].id}</span>
                        </strong>
                    </li>
                    <li className="flex gap-4">
                        <strong className="block w-28 flex-shrink-0 font-medium text-sm">
                            Invoice Date
                            <span >{new Date(result[0].value).toLocaleDateString()}</span>
                        </strong>
                    </li>
                    <li className="flex gap-4">
                        <strong className="block w-28 flex-shrink-0 font-medium text-sm">
                            Billing Name
                        </strong>
                    </li>
                    <li className="flex gap-4">
                        <strong className="block w-28 flex-shrink-0 font-medium text-sm">
                            Billing Email
                        </strong>
                    </li>
                </ul>
            </Container>
        </main>
    );
}
