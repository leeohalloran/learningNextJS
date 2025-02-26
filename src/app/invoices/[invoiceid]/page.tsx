
import { db } from "@/db"
import { Invoices } from "@/db/schema"


export default async function InvoicePage({params}:{params : {invoiceid : string}})
{
    const result = await db.select().from(Invoices);
    console.log(`Result`, result)
    const invId = parseInt( params.invoiceid)
    return (
        <main className="flex flex-col justify-center h-full text-center max-w-5xl mx-auto gap-6 my-12">
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold">
                    Invoices # {invId}
                </h1>
                <p>

                </p>
            </div>
        </main>
    );
}
