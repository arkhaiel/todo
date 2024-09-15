import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

// export const projects = sqliteTable('projects', {
//   id: integer('id').primaryKey({ autoIncrement: true }),
//   content: text('content').notNull(),
//   name: text('name').notNull(),
//   label: text('label').notNull(),
//   createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
// })

// export const todos = sqliteTable('todos', {
//   id: integer('id').primaryKey({ autoIncrement: true }),
//   projectId: integer('project_id').notNull(),
//   content: text('content').notNull(),
//   completed: integer('completed').notNull(),
//   createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
// })

// export const labels = sqliteTable('labels', {
//   id: integer('id').primaryKey({ autoIncrement: true }),
//   name: text('name').notNull(),
//   color: text('color').notNull(),
// })