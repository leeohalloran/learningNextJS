
import {pgTable, serial, timestamp, text, pgEnum, integer} from 'drizzle-orm/pg-core';

export const statusEnum = pgEnum('status', ['open', 'paid', 'void', 'uncollectable'])

export const Invoices = pgTable('invoices', {
    id : serial('id').primaryKey().notNull(),
    createTs : timestamp('createTs').notNull().defaultNow(),
    status : statusEnum('status').notNull(),
    value : integer('value').notNull(),
    description : text('description').notNull()

})