# Migration `20200615215629-create-tables`

This migration has been generated by Phuoc Do at 6/15/2020, 9:56:29 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql

```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200615215629-create-tables
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,27 @@
+datasource DS {
+  provider = "sqlite"
+  url      = env("DATABASE_URL")
+}
+
+generator client {
+  provider      = "prisma-client-js"
+  binaryTargets = env("BINARY_TARGET")
+}
+
+model Dashboard {
+  id          String  @id @default(cuid())
+  name        String
+  json        String
+  createdAt   DateTime  @default(now())
+  updatedAt   DateTime  @default(now())
+  ownerEmail  String    @default("")
+  userId      Int     @default(0)
+  user        User    @relation(fields: [userId], references: [id])
+}
+
+model User {
+  id          Int       @default(autoincrement()) @id
+  email       String    @unique
+  auth0Id     String    @unique
+  dashboards  Dashboard[]
+}
```

