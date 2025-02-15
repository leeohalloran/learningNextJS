
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


export default function Home() {
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
                    <TableRow>
                        <TableCell className="font-medium text-left">
                            <span className="text-semibold">
                                23/5/78
                            </span>
                        </TableCell>
                        <TableCell className="text-left">
                            <span className="text-semibold">
                                Lee O'Halloran
                            </span>
                        </TableCell>
                        <TableCell className="text-left">
                            <span>
                                lee_ohalloran@hotmail.com
                            </span>
                        </TableCell>
                        <TableCell className="text-center">
                            <span className="text-semibold">
                                <Badge variant="destructive" className="rounded-full">
                                    Open
                                </Badge>
                            </span>
                        </TableCell>
                        <TableCell className="text-right">
                            <span className="text-semibold">
                                £250.00
                            </span>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </main>
    );
}
