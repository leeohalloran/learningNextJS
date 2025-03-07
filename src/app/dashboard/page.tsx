
import Link from "next/link"
import { CirclePlus } from 'lucide-react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import { db } from "@/db"
import { Invoices } from "@/db/schema"


export default async function Home() {
    const result = await db.select().from(Invoices);
    console.log(`Result`, result)
    return (
        <main className="flex flex-col justify-center h-full text-center max-w-5xl mx-auto gap-6 my-12">
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold">
                    Invoices
                </h1>
                <p>
                    <Button className="inline-flex p-2" variant={"ghost"} asChild>
                        <Link href="/invoices/new">
                            <CirclePlus className="h-4 w-4" />
                            Create Invoice
                        </Link>
                    </Button>
                </p>
            </div>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px] p-2">
                            Invoice No.
                        </TableHead>
                        <TableHead className="w-[100px] p-2">
                            Date
                        </TableHead>
                        <TableHead className="p-2">
                            Customer
                        </TableHead>
                        <TableHead className="p-2">
                            Email
                        </TableHead>
                        <TableHead className="text-center p-2">
                            Status
                        </TableHead>
                        <TableHead className="text-right p-2">
                            Value
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {result.map(invoice => {
                        return (
                            <TableRow key={invoice.id}>
                                <TableCell className="font-medium text-left p-0">
                                    <Link href={`/invoices/${invoice.id}`} className="block text-semibold p-4">
                                        {invoice.id}
                                    </Link>
                                </TableCell>
                                <TableCell className="font-medium text-left p-0">
                                    <Link href={`/invoices/${invoice.id}`}  className="block text-semibold p-4">
                                       {new Date(invoice.createTs).toLocaleDateString()}
                                    </Link>
                                </TableCell>
                                <TableCell className="text-left p-0">
                                    <Link href={`/invoices/${invoice.id}`} className="block text-semibold p-4">
                                        Lee O'Halloran
                                    </Link>
                                </TableCell>
                                <TableCell className="text-left">
                                    <Link className="block p-4" href={`/invoices/${invoice.id}`}>
                                        {invoice.email}l@e.com
                                    </Link>
                                </TableCell>
                                <TableCell className="text-center p-0">
                                    <Link href={`/invoices/${invoice.id}`} className="block text-semibold p-4">
                                        <Badge variant="destructive" className="rounded-full">
                                            {(invoice.status).toUpperCase()}
                                        </Badge>
                                    </Link>
                                </TableCell>
                                <TableCell className="text-right p-0">
                                    <Link href={`/invoices/${invoice.id}`} className="block text-semibold p-4">
                                        £{(invoice.value / 100).toFixed(2)}
                                    </Link>
                                </TableCell>
                            </TableRow>
                        )
                    })}

                </TableBody>
            </Table>
        </main>
    );
}
