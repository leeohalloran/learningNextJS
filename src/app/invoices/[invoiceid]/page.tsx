import { eq } from "drizzle-orm";
import { db } from "@/db"
import { Invoices } from "@/db/schema"
import React from "react";
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { PaintBucket } from "lucide-react";


export default async function InvoicePage({ params }: { params: { invoiceid: string } }) {
    const invId = parseInt(await params.invoiceid)
    const result = await db.select().from(Invoices).where(eq(Invoices.id, invId)).limit(1);
    return (
        <main className=" h-full max-w-5xl mx-auto my-12">
            <div className="justify-between mb-8">
                <h1 className="flex items-center text-3xl font-semibold">
                    Invoices # {result[0].id}
                </h1>
                <Badge variant="destructive" className={cn(
                    "rounded-full", "Capitalize",
                    result[0].status === 'open' && 'bg-blue-500 text-white',
                    result[0].status === 'paid' && 'bg-green-600 text-white',
                    result[0].status === 'void' && 'bg-zinc-500 text-white',
                    result[0].status === 'uncollectable' && 'bg-red-600 text-white'
                )}>
                    {result[0].status}
                </Badge>

                <p className="text-2xl font-semibold mt-4">
                    £{parseInt((result[0].value) / 100).toFixed(2)}
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
        </main>
    );
}
