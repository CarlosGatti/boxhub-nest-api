import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { FeedCollection } from '../../../@generated/feed-collection/feed-collection.model';
import { FeedItemState } from '../../../@generated/feed-item-state/feed-item-state.model';
import { FeedProfile } from '../../../@generated/feed-profile/feed-profile.model';
import { FeedSource } from '../../../@generated/feed-source/feed-source.model';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { AppPermissionGuard, RequireApp } from '../../auth/guards/app-permission.guard';
import { CurrentUser } from '../../user/current-user.decorator';
import { User } from '../../../@generated/user/user.model';
import { CreateSignalboardCollectionInput } from './dto/create-signalboard-collection.input';
import { CreateSignalboardSourceInput } from './dto/create-signalboard-source.input';
import { SignalboardCollection } from './dto/signalboard-collection.dto';
import { SignalboardItemFilterInput } from './dto/signalboard-item-filter.input';
import { SignalboardItem } from './dto/signalboard-item.dto';
import { UpdateSignalboardCollectionInput } from './dto/update-signalboard-collection.input';
import { UpdateSignalboardSourceInput } from './dto/update-signalboard-source.input';
import { SignalboardService } from './signalboard.service';

@Resolver()
@UseGuards(JwtAuthGuard, AppPermissionGuard)
export class SignalboardResolver {
  constructor(private readonly signalboardService: SignalboardService) {}

  @RequireApp('SIGNALBOARD')
  @Query(() => FeedProfile, { name: 'signalboardMeProfile' })
  async signalboardMeProfile(@CurrentUser() user: User) {
    return this.signalboardService.getOrCreateProfile(user.id);
  }

  @RequireApp('SIGNALBOARD')
  @Query(() => [SignalboardCollection], { name: 'signalboardCollections' })
  async signalboardCollections(@CurrentUser() user: User) {
    return this.signalboardService.getCollections(user.id);
  }

  @RequireApp('SIGNALBOARD')
  @Query(() => [SignalboardItem], { name: 'signalboardItems' })
  async signalboardItems(
    @Args('collectionId', { type: () => Int }) collectionId: number,
    @CurrentUser() user: User,
    @Args('take', { type: () => Int, nullable: true, defaultValue: 20 })
    take?: number,
    @Args('cursor', { type: () => Int, nullable: true })
    cursor?: number,
    @Args('filter', { nullable: true }) filter?: SignalboardItemFilterInput,
  ) {
    return this.signalboardService.getItems(
      user.id,
      collectionId,
      take ?? 20,
      cursor,
      filter,
    );
  }

  @RequireApp('SIGNALBOARD')
  @Mutation(() => FeedCollection, { name: 'signalboardCreateCollection' })
  async signalboardCreateCollection(
    @Args('input') input: CreateSignalboardCollectionInput,
    @CurrentUser() user: User,
  ) {
    return this.signalboardService.createCollection(user.id, input);
  }

  @RequireApp('SIGNALBOARD')
  @Mutation(() => FeedCollection, { name: 'signalboardUpdateCollection' })
  async signalboardUpdateCollection(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: UpdateSignalboardCollectionInput,
    @CurrentUser() user: User,
  ) {
    return this.signalboardService.updateCollection(user.id, id, input);
  }

  @RequireApp('SIGNALBOARD')
  @Mutation(() => Boolean, { name: 'signalboardDeleteCollection' })
  async signalboardDeleteCollection(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: User,
  ) {
    return this.signalboardService.deleteCollection(user.id, id);
  }

  @RequireApp('SIGNALBOARD')
  @Mutation(() => FeedSource, { name: 'signalboardAddSource' })
  async signalboardAddSource(
    @Args('input') input: CreateSignalboardSourceInput,
    @CurrentUser() user: User,
  ) {
    return this.signalboardService.addSource(user.id, input);
  }

  @RequireApp('SIGNALBOARD')
  @Mutation(() => FeedSource, { name: 'signalboardUpdateSource' })
  async signalboardUpdateSource(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: UpdateSignalboardSourceInput,
    @CurrentUser() user: User,
  ) {
    return this.signalboardService.updateSource(user.id, id, input);
  }

  @RequireApp('SIGNALBOARD')
  @Mutation(() => Boolean, { name: 'signalboardRemoveSource' })
  async signalboardRemoveSource(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser() user: User,
  ) {
    return this.signalboardService.removeSource(user.id, id);
  }

  @RequireApp('SIGNALBOARD')
  @Mutation(() => FeedItemState, { name: 'signalboardMarkRead' })
  async signalboardMarkRead(
    @Args('itemId', { type: () => Int }) itemId: number,
    @Args('read', { type: () => Boolean, nullable: true, defaultValue: true })
    read: boolean,
    @CurrentUser() user: User,
  ) {
    return this.signalboardService.markRead(user.id, itemId, read);
  }

  @RequireApp('SIGNALBOARD')
  @Mutation(() => FeedItemState, { name: 'signalboardSave' })
  async signalboardSave(
    @Args('itemId', { type: () => Int }) itemId: number,
    @Args('saved', { type: () => Boolean, nullable: true, defaultValue: true })
    saved: boolean,
    @CurrentUser() user: User,
  ) {
    return this.signalboardService.saveItem(user.id, itemId, saved);
  }

  @RequireApp('SIGNALBOARD')
  @Mutation(() => FeedItemState, { name: 'signalboardHide' })
  async signalboardHide(
    @Args('itemId', { type: () => Int }) itemId: number,
    @Args('hidden', { type: () => Boolean, nullable: true, defaultValue: true })
    hidden: boolean,
    @CurrentUser() user: User,
  ) {
    return this.signalboardService.hideItem(user.id, itemId, hidden);
  }
}
