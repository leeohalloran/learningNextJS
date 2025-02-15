
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
                    Create Invoice
                </h1>
            </div>
        </main>
    );
}
