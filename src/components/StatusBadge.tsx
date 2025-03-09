"use client"

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";


const StatusBadge = ({ status }: { status: string }) => {
    return (
        <Badge variant="destructive" className={cn(
            "rounded-full", "Capitalize",
            status === 'open' && 'bg-blue-500 text-white',
            status === 'paid' && 'bg-green-600 text-white',
            status === 'void' && 'bg-zinc-500 text-white',
            status === 'uncollectable' && 'bg-red-600 text-white'
        )}>
            {(status).toUpperCase()}
        </Badge>
    )
}


export default StatusBadge