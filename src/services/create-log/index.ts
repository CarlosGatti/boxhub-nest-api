import { LogAction, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createLog({
  action,
  userId,
  details,
  route,
  metadata,
  ipAddress
}: {
  action: LogAction;
  userId?: number;
  details?: string;
  route?: string;
  metadata?: any; // Vai ser serializado como JSON
  ipAddress?: string;
}) {
  await prisma.log.create({
    data: {
      action,
      userId,
      details,
      route,
      metadata,
      ipAddress
    }
  });
}
