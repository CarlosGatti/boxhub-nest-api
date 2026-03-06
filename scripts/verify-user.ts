#!/usr/bin/env node
/**
 * Script to set emailVerified=true for a user by email.
 * Use for developer/admin recovery when verification email is lost or blocked.
 *
 * Usage:
 *   npx ts-node scripts/verify-user.ts --email user@example.com
 *   or
 *   node scripts/verify-user.js --email user@example.com
 *
 * Requires DATABASE_URL in environment (or .env).
 */

import { PrismaClient } from '@prisma/client';

async function main() {
  const args = process.argv.slice(2);
  const emailIdx = args.indexOf('--email');
  const email = emailIdx >= 0 ? args[emailIdx + 1] : undefined;

  if (!email || !email.includes('@')) {
    console.error('Usage: npx ts-node scripts/verify-user.ts --email user@example.com');
    process.exit(1);
  }

  const prisma = new PrismaClient();

  try {
    const user = await prisma.user.findUnique({
      where: { email: email.trim().toLowerCase() },
    });

    if (!user) {
      console.error(`User not found: ${email}`);
      process.exit(1);
    }

    if (user.emailVerified) {
      console.log(`User ${email} is already verified.`);
      process.exit(0);
    }

    await prisma.user.update({
      where: { id: user.id },
      data: { emailVerified: true },
    });

    console.log(`✅ Email verified for: ${email}`);
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
