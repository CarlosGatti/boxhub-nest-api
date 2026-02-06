import { ForbiddenException, Injectable } from '@nestjs/common';
import {
  FeedItemReadStatus,
  FeedItemSaveStatus,
  FeedItemStatus,
  FeedItemVisibility,
  FeedEventAction,
  FeedItemLastAction,
  FeedSourceType,
  LogAction,
  Prisma,
} from '@prisma/client';
import { PrismaService } from '../../core/prisma/prisma.service';
import { createLog } from '../../core/services/create-log';
import { CreateSignalboardCollectionInput } from './dto/create-signalboard-collection.input';
import { CreateSignalboardSourceInput } from './dto/create-signalboard-source.input';
import { SignalboardItemFilterInput } from './dto/signalboard-item-filter.input';
import { UpdateSignalboardCollectionInput } from './dto/update-signalboard-collection.input';
import { UpdateSignalboardSourceInput } from './dto/update-signalboard-source.input';
import { SignalboardNudgeAction } from './dto/signalboard-nudge-action.enum';
import { SignalboardIngestResult } from './dto/signalboard-ingest-result.dto';
import { SignalboardSkipResult } from './dto/signalboard-skip-result.dto';
import { SignalboardSourcePreferenceInput } from './dto/signalboard-source-preference.input';
import { SignalboardIngestionService } from './ingestion/signalboard-ingestion.service';
import { SignalboardDebugCounts } from './dto/signalboard-debug-counts.dto';

@Injectable()
export class SignalboardService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly ingestionService: SignalboardIngestionService,
  ) {}

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

  private async resetSourceSkips(userId: number, sourceId: number) {
    await this.prisma.feedSourcePreference.upsert({
      where: { userId_sourceId: { userId, sourceId } },
      update: {
        consecutiveSkips: 0,
        lastInteractedAt: new Date(),
      },
      create: {
        userId,
        sourceId,
        consecutiveSkips: 0,
        lastInteractedAt: new Date(),
      },
    });
  }

  // (intentionally no ingestion helpers here; handled by SignalboardIngestionService)

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

  async getSources(userId: number, collectionId: number) {
    await this.ensureCollectionOwnership(userId, collectionId);
    return this.prisma.feedSource.findMany({
      where: { collectionId },
      orderBy: [{ isActive: 'desc' }, { id: 'asc' }],
    });
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
        collection: { connect: { id: input.collectionId } },
        type: input.type ?? FeedSourceType.RSS,
        name: input.name,
        url: input.url,
        fetchEveryMin: input.fetchEveryMin ?? null,
        includeShorts: input.includeShorts ?? false,
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
    if (input.includeShorts !== undefined) (data as any).includeShorts = input.includeShorts;

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

  async getInboxItems(
    userId: number,
    take = 20,
    cursor?: number,
    filter?: SignalboardItemFilterInput,
  ) {
    const profile = await this.getOrCreateProfile(userId);
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
        isActive: true,
        collection: { isActive: true, profileId: profile.id },
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

  async getDebugCounts(userId: number): Promise<SignalboardDebugCounts> {
    const profile = await this.prisma.feedProfile.findUnique({ where: { userId } });
    if (!profile) {
      return {
        sourcesTotal: 0,
        sourcesActive: 0,
        itemsTotal: 0,
        itemsActive: 0,
        newestItemPublishedAt: null,
      };
    }

    const [sourcesTotal, sourcesActive, itemsTotal, itemsActive, newestItem] = await Promise.all([
      this.prisma.feedSource.count({
        where: { collection: { profileId: profile.id } },
      }),
      this.prisma.feedSource.count({
        where: { isActive: true, collection: { isActive: true, profileId: profile.id } },
      }),
      this.prisma.feedItem.count({
        where: { source: { collection: { profileId: profile.id } } },
      }),
      this.prisma.feedItem.count({
        where: { status: FeedItemStatus.ACTIVE, source: { collection: { profileId: profile.id } } },
      }),
      this.prisma.feedItem.findFirst({
        where: { status: FeedItemStatus.ACTIVE, source: { collection: { profileId: profile.id } } },
        orderBy: [{ publishedAt: 'desc' }, { createdAt: 'desc' }],
        select: { publishedAt: true },
      }),
    ]);

    return {
      sourcesTotal,
      sourcesActive,
      itemsTotal,
      itemsActive,
      newestItemPublishedAt: newestItem?.publishedAt ?? null,
    };
  }

  async markRead(userId: number, itemId: number, read: boolean) {
    const item = await this.ensureItemOwnership(userId, itemId);
    const readStatus = read ? FeedItemReadStatus.READ : FeedItemReadStatus.UNREAD;

    const state = await this.prisma.feedItemState.upsert({
      where: { userId_itemId: { userId, itemId } },
      update: {
        readStatus,
        readAt: read ? new Date() : null,
        lastAction: FeedItemLastAction.READ,
        actionCount: { increment: 1 },
      },
      create: {
        userId,
        itemId,
        readStatus,
        readAt: read ? new Date() : null,
        lastAction: FeedItemLastAction.READ,
        actionCount: 1,
      },
    });

    await this.resetSourceSkips(userId, item.sourceId);

    return state;
  }

  async saveItem(userId: number, itemId: number, saved: boolean) {
    const item = await this.ensureItemOwnership(userId, itemId);
    const saveStatus = saved ? FeedItemSaveStatus.SAVED : FeedItemSaveStatus.NONE;

    const state = await this.prisma.feedItemState.upsert({
      where: { userId_itemId: { userId, itemId } },
      update: {
        saveStatus,
        savedAt: saved ? new Date() : null,
        lastAction: FeedItemLastAction.SAVE,
        actionCount: { increment: 1 },
      },
      create: {
        userId,
        itemId,
        saveStatus,
        savedAt: saved ? new Date() : null,
        lastAction: FeedItemLastAction.SAVE,
        actionCount: 1,
      },
    });

    await this.resetSourceSkips(userId, item.sourceId);

    return state;
  }

  async hideItem(userId: number, itemId: number, hidden: boolean) {
    await this.ensureItemOwnership(userId, itemId);
    const visibility = hidden ? FeedItemVisibility.HIDDEN : FeedItemVisibility.VISIBLE;

    return this.prisma.feedItemState.upsert({
      where: { userId_itemId: { userId, itemId } },
      update: {
        visibility,
        hiddenAt: hidden ? new Date() : null,
        lastAction: FeedItemLastAction.HIDE,
        actionCount: { increment: 1 },
      },
      create: {
        userId,
        itemId,
        visibility,
        hiddenAt: hidden ? new Date() : null,
        lastAction: FeedItemLastAction.HIDE,
        actionCount: 1,
      },
    });
  }

  async openItem(userId: number, itemId: number) {
    const item = await this.ensureItemOwnership(userId, itemId);
    const state = await this.prisma.feedItemState.upsert({
      where: { userId_itemId: { userId, itemId } },
      update: {
        openedAt: new Date(),
        lastAction: FeedItemLastAction.OPEN,
        actionCount: { increment: 1 },
      },
      create: {
        userId,
        itemId,
        openedAt: new Date(),
        lastAction: FeedItemLastAction.OPEN,
        actionCount: 1,
      },
    });

    await this.resetSourceSkips(userId, item.sourceId);

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'SignalBoard item opened',
      route: 'signalboardOpen',
      metadata: { itemId, sourceId: item.sourceId },
    });

    return state;
  }

  async skipItem(userId: number, itemId: number): Promise<SignalboardSkipResult> {
    const item = await this.ensureItemOwnership(userId, itemId);

    await this.prisma.feedEvent.create({
      data: {
        userId,
        itemId: item.id,
        sourceId: item.sourceId,
        action: FeedEventAction.SKIPPED,
      },
    });

    const state = await this.prisma.feedItemState.upsert({
      where: { userId_itemId: { userId, itemId } },
      update: {
        skippedAt: new Date(),
        skipCount: { increment: 1 },
        lastAction: FeedItemLastAction.SKIP,
        actionCount: { increment: 1 },
      },
      create: {
        userId,
        itemId,
        skippedAt: new Date(),
        skipCount: 1,
        lastAction: FeedItemLastAction.SKIP,
        actionCount: 1,
      },
    });

    const existingPref = await this.prisma.feedSourcePreference.findUnique({
      where: { userId_sourceId: { userId, sourceId: item.sourceId } },
    });
    const previousSkips = existingPref?.consecutiveSkips ?? 0;

    const sourcePreference = await this.prisma.feedSourcePreference.upsert({
      where: { userId_sourceId: { userId, sourceId: item.sourceId } },
      update: {
        consecutiveSkips: { increment: 1 },
        lastInteractedAt: new Date(),
      },
      create: {
        userId,
        sourceId: item.sourceId,
        consecutiveSkips: 1,
        lastInteractedAt: new Date(),
      },
    });

    const needsSourceAttention = sourcePreference.consecutiveSkips >= 3;

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: `SignalBoard item skipped`,
      route: 'signalboardSkip',
      metadata: {
        itemId: item.id,
        sourceId: item.sourceId,
        consecutiveSkips: sourcePreference.consecutiveSkips,
      },
    });

    if (previousSkips < 3 && needsSourceAttention) {
      await createLog({
        action: LogAction.CUSTOM_ACTION,
        userId,
        details: `SignalBoard source attention threshold reached`,
        route: 'signalboardSkip',
        metadata: { sourceId: item.sourceId, consecutiveSkips: sourcePreference.consecutiveSkips },
      });
    }

    return {
      state: state as any,
      sourcePreference: sourcePreference as any,
      needsSourceAttention,
    };
  }

  async getNudges(userId: number) {
    return this.prisma.feedSourceNudge.findMany({
      where: { userId, status: 'OPEN' },
      orderBy: { createdAt: 'desc' },
    });
  }

  async setSourcePreference(
    userId: number,
    sourceId: number,
    input: SignalboardSourcePreferenceInput,
  ) {
    await this.ensureSourceOwnership(userId, sourceId);
    const resetSkips = input.notifyOnNew === true || input.isMuted === false;

    return this.prisma.feedSourcePreference.upsert({
      where: { userId_sourceId: { userId, sourceId } },
      update: {
        notifyOnNew: input.notifyOnNew ?? undefined,
        isMuted: input.isMuted ?? undefined,
        mutedUntil: input.mutedUntil ?? undefined,
        consecutiveSkips: resetSkips ? 0 : undefined,
        lastInteractedAt: new Date(),
      },
      create: {
        userId,
        sourceId,
        notifyOnNew: input.notifyOnNew ?? false,
        isMuted: input.isMuted ?? false,
        mutedUntil: input.mutedUntil ?? null,
        consecutiveSkips: 0,
        lastInteractedAt: new Date(),
      },
    });
  }

  async dismissNudge(userId: number, nudgeId: number) {
    const nudge = await this.prisma.feedSourceNudge.findFirst({
      where: { id: nudgeId, userId },
    });
    if (!nudge) {
      throw new ForbiddenException('Nudge not found');
    }

    await this.prisma.feedSourceNudge.update({
      where: { id: nudgeId },
      data: { status: 'DISMISSED' },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: `SignalBoard nudge dismissed`,
      route: 'signalboardDismissNudge',
      metadata: { nudgeId },
    });

    return true;
  }

  async applyNudge(
    userId: number,
    nudgeId: number,
    action: SignalboardNudgeAction,
  ) {
    const nudge = await this.prisma.feedSourceNudge.findFirst({
      where: { id: nudgeId, userId },
    });
    if (!nudge) {
      throw new ForbiddenException('Nudge not found');
    }

    if (action === 'REMOVE_SOURCE') {
      await this.ensureSourceOwnership(userId, nudge.sourceId);
      await this.prisma.feedSource.update({
        where: { id: nudge.sourceId },
        data: { isActive: false },
      });
      await this.prisma.feedSourceNudge.update({
        where: { id: nudgeId },
        data: { status: 'APPLIED' },
      });
    } else {
      await this.prisma.feedSourceNudge.update({
        where: { id: nudgeId },
        data: { status: 'DISMISSED' },
      });
    }

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: `SignalBoard nudge applied`,
      route: 'signalboardApplyNudge',
      metadata: { nudgeId, action },
    });

    return true;
  }

  async ingestNow(
    userId: number,
    collectionId?: number,
    sourceId?: number,
    limitSources?: number,
  ): Promise<SignalboardIngestResult> {
    if (sourceId) {
      await this.ensureSourceOwnership(userId, sourceId);
    }
    if (collectionId) {
      await this.ensureCollectionOwnership(userId, collectionId);
    }

    const result = await this.ingestionService.ingestSources({
      userId,
      collectionId,
      sourceId,
      limitSources,
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'SignalBoard ingest now',
      route: 'signalboardIngestNow',
      metadata: {
        collectionId,
        sourceId,
        sourcesProcessed: result.sourcesProcessed,
        itemsSeen: result.itemsSeen,
        itemsCreated: result.itemsCreated,
        itemsUpdated: result.itemsUpdated,
        errors: result.errors,
      },
    });

    return result;
  }

}
