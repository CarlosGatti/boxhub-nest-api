import { ForbiddenException, Injectable } from '@nestjs/common';
import {
  FeedItemReadStatus,
  FeedItemSaveStatus,
  FeedItemStatus,
  FeedItemVisibility,
  FeedSourceType,
  LogAction,
  Prisma,
} from '@prisma/client';
import { PrismaService } from '../../prisma.service';
import { createLog } from '../../services/create-log';
import { CreateSignalboardCollectionInput } from './dto/create-signalboard-collection.input';
import { CreateSignalboardSourceInput } from './dto/create-signalboard-source.input';
import { SignalboardItemFilterInput } from './dto/signalboard-item-filter.input';
import { UpdateSignalboardCollectionInput } from './dto/update-signalboard-collection.input';
import { UpdateSignalboardSourceInput } from './dto/update-signalboard-source.input';

@Injectable()
export class SignalboardService {
  constructor(private readonly prisma: PrismaService) {}

  async getOrCreateProfile(userId: number) {
    const existing = await this.prisma.feedProfile.findUnique({
      where: { userId },
    });

    if (existing) {
      return existing;
    }

    return this.prisma.feedProfile.create({
      data: {
        userId,
      },
    });
  }

  private async ensureCollectionOwnership(userId: number, collectionId: number) {
    const collection = await this.prisma.feedCollection.findFirst({
      where: {
        id: collectionId,
        profile: { userId },
      },
    });

    if (!collection) {
      throw new ForbiddenException('Collection not found');
    }

    return collection;
  }

  private async ensureSourceOwnership(userId: number, sourceId: number) {
    const source = await this.prisma.feedSource.findFirst({
      where: {
        id: sourceId,
        collection: {
          profile: { userId },
        },
      },
    });

    if (!source) {
      throw new ForbiddenException('Source not found');
    }

    return source;
  }

  private async ensureItemOwnership(userId: number, itemId: number) {
    const item = await this.prisma.feedItem.findFirst({
      where: {
        id: itemId,
        source: {
          collection: {
            profile: { userId },
          },
        },
      },
    });

    if (!item) {
      throw new ForbiddenException('Item not found');
    }

    return item;
  }

  async getCollections(userId: number) {
    const profile = await this.getOrCreateProfile(userId);
    const collections = await this.prisma.feedCollection.findMany({
      where: {
        profileId: profile.id,
        isActive: true,
      },
      orderBy: { createdAt: 'asc' },
    });

    const enriched = await Promise.all(
      collections.map(async (collection) => {
        const sourcesCount = await this.prisma.feedSource.count({
          where: { collectionId: collection.id, isActive: true },
        });

        const unreadCount = await this.prisma.feedItem.count({
          where: {
            status: FeedItemStatus.ACTIVE,
            source: { collectionId: collection.id, isActive: true },
            OR: [
              { states: { none: { userId } } },
              {
                states: {
                  some: {
                    userId,
                    readStatus: FeedItemReadStatus.UNREAD,
                    visibility: FeedItemVisibility.VISIBLE,
                  },
                },
              },
            ],
          },
        });

        return {
          ...collection,
          sourcesCount,
          unreadCount,
        };
      }),
    );

    return enriched;
  }

  async createCollection(userId: number, input: CreateSignalboardCollectionInput) {
    const profile = await this.getOrCreateProfile(userId);
    const collection = await this.prisma.feedCollection.create({
      data: {
        profileId: profile.id,
        name: input.name,
        description: input.description ?? null,
        icon: input.icon ?? null,
        color: input.color ?? null,
        keywords: input.keywords ?? [],
        blocked: input.blocked ?? [],
        preferredDomains: input.preferredDomains ?? [],
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: `SignalBoard collection created: ${collection.name}`,
      route: 'signalboardCreateCollection',
      metadata: { collectionId: collection.id },
    });

    return collection;
  }

  async updateCollection(
    userId: number,
    id: number,
    input: UpdateSignalboardCollectionInput,
  ) {
    await this.ensureCollectionOwnership(userId, id);

    const data: Prisma.FeedCollectionUpdateInput = {};
    if (input.name !== undefined) data.name = input.name;
    if (input.description !== undefined) data.description = input.description;
    if (input.icon !== undefined) data.icon = input.icon;
    if (input.color !== undefined) data.color = input.color;
    if (input.keywords !== undefined) data.keywords = input.keywords;
    if (input.blocked !== undefined) data.blocked = input.blocked;
    if (input.preferredDomains !== undefined)
      data.preferredDomains = input.preferredDomains;

    const collection = await this.prisma.feedCollection.update({
      where: { id },
      data,
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: `SignalBoard collection updated: ${collection.name}`,
      route: 'signalboardUpdateCollection',
      metadata: { collectionId: collection.id },
    });

    return collection;
  }

  async deleteCollection(userId: number, id: number) {
    await this.ensureCollectionOwnership(userId, id);

    const collection = await this.prisma.feedCollection.update({
      where: { id },
      data: { isActive: false },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: `SignalBoard collection deleted: ${collection.name}`,
      route: 'signalboardDeleteCollection',
      metadata: { collectionId: collection.id },
    });

    return true;
  }

  async addSource(userId: number, input: CreateSignalboardSourceInput) {
    await this.ensureCollectionOwnership(userId, input.collectionId);

    const source = await this.prisma.feedSource.create({
      data: {
        collectionId: input.collectionId,
        type: input.type ?? FeedSourceType.RSS,
        name: input.name,
        url: input.url,
        fetchEveryMin: input.fetchEveryMin ?? null,
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: `SignalBoard source added: ${source.name}`,
      route: 'signalboardAddSource',
      metadata: { collectionId: source.collectionId, sourceId: source.id },
    });

    return source;
  }

  async updateSource(userId: number, id: number, input: UpdateSignalboardSourceInput) {
    await this.ensureSourceOwnership(userId, id);

    const data: Prisma.FeedSourceUpdateInput = {};
    if (input.type !== undefined) data.type = input.type;
    if (input.name !== undefined) data.name = input.name;
    if (input.url !== undefined) data.url = input.url;
    if (input.isActive !== undefined) data.isActive = input.isActive;
    if (input.fetchEveryMin !== undefined)
      data.fetchEveryMin = input.fetchEveryMin;

    const source = await this.prisma.feedSource.update({
      where: { id },
      data,
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: `SignalBoard source updated: ${source.name}`,
      route: 'signalboardUpdateSource',
      metadata: { collectionId: source.collectionId, sourceId: source.id },
    });

    return source;
  }

  async removeSource(userId: number, id: number) {
    await this.ensureSourceOwnership(userId, id);

    const source = await this.prisma.feedSource.update({
      where: { id },
      data: { isActive: false },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: `SignalBoard source removed: ${source.name}`,
      route: 'signalboardRemoveSource',
      metadata: { collectionId: source.collectionId, sourceId: source.id },
    });

    return true;
  }

  async getItems(
    userId: number,
    collectionId: number,
    take = 20,
    cursor?: number,
    filter?: SignalboardItemFilterInput,
  ) {
    await this.ensureCollectionOwnership(userId, collectionId);

    const andFilters: Prisma.FeedItemWhereInput[] = [];

    if (filter?.hidden === true) {
      andFilters.push({
        states: {
          some: { userId, visibility: FeedItemVisibility.HIDDEN },
        },
      });
    } else {
      andFilters.push({
        NOT: {
          states: {
            some: { userId, visibility: FeedItemVisibility.HIDDEN },
          },
        },
      });
    }

    if (filter?.saved === true) {
      andFilters.push({
        states: {
          some: { userId, saveStatus: FeedItemSaveStatus.SAVED },
        },
      });
    }

    if (filter?.unread === true) {
      andFilters.push({
        OR: [
          { states: { none: { userId } } },
          { states: { some: { userId, readStatus: FeedItemReadStatus.UNREAD } } },
        ],
      });
    }

    const where: Prisma.FeedItemWhereInput = {
      status: FeedItemStatus.ACTIVE,
      source: {
        collectionId,
        isActive: true,
      },
      ...(andFilters.length > 0 ? { AND: andFilters } : {}),
    };

    const items = await this.prisma.feedItem.findMany({
      where,
      take,
      ...(cursor ? { skip: 1, cursor: { id: cursor } } : {}),
      orderBy: [{ publishedAt: 'desc' }, { createdAt: 'desc' }, { id: 'desc' }],
      include: {
        states: {
          where: { userId },
        },
      },
    });

    return items.map((item) => ({
      item,
      state: item.states[0] ?? null,
    }));
  }

  async markRead(userId: number, itemId: number, read: boolean) {
    await this.ensureItemOwnership(userId, itemId);
    const readStatus = read ? FeedItemReadStatus.READ : FeedItemReadStatus.UNREAD;

    return this.prisma.feedItemState.upsert({
      where: { userId_itemId: { userId, itemId } },
      update: {
        readStatus,
        readAt: read ? new Date() : null,
      },
      create: {
        userId,
        itemId,
        readStatus,
        readAt: read ? new Date() : null,
      },
    });
  }

  async saveItem(userId: number, itemId: number, saved: boolean) {
    await this.ensureItemOwnership(userId, itemId);
    const saveStatus = saved ? FeedItemSaveStatus.SAVED : FeedItemSaveStatus.NONE;

    return this.prisma.feedItemState.upsert({
      where: { userId_itemId: { userId, itemId } },
      update: {
        saveStatus,
        savedAt: saved ? new Date() : null,
      },
      create: {
        userId,
        itemId,
        saveStatus,
        savedAt: saved ? new Date() : null,
      },
    });
  }

  async hideItem(userId: number, itemId: number, hidden: boolean) {
    await this.ensureItemOwnership(userId, itemId);
    const visibility = hidden ? FeedItemVisibility.HIDDEN : FeedItemVisibility.VISIBLE;

    return this.prisma.feedItemState.upsert({
      where: { userId_itemId: { userId, itemId } },
      update: {
        visibility,
        hiddenAt: hidden ? new Date() : null,
      },
      create: {
        userId,
        itemId,
        visibility,
        hiddenAt: hidden ? new Date() : null,
      },
    });
  }
}
