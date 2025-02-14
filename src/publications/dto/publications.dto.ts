import { Field, Int, OmitType, createUnionType } from '@nestjs/graphql';

import { BaseResult } from '../../models/base-error.dto';
import { EventAddressCreateWithoutEventInput } from '../../../@generated/event-address/event-address-create-without-event.input';
import { EventCreateInput } from '../../../@generated/event/event-create.input';
import { EventOnlineDetailCreateWithoutEventInput } from '../../../@generated/event-online-detail/event-online-detail-create-without-event.input';
import { InputType } from '@nestjs/graphql';
import { Publication } from '../../../@generated/publication/publication.model';
import { PublicationCreateInput } from '../../../@generated/publication/publication-create.input';

@InputType()
export class CreateEventInput extends OmitType(EventCreateInput, [
  'onlineDetails',
  'address',
  'owner',
]) {
  @Field(() => EventOnlineDetailCreateWithoutEventInput, { nullable: true })
  onlineDetails?: EventOnlineDetailCreateWithoutEventInput;

  @Field(() => EventAddressCreateWithoutEventInput, { nullable: true })
  address?: EventAddressCreateWithoutEventInput;
}

@InputType()
export class PublicationCreateArgs extends OmitType(PublicationCreateInput, [
  'comments',
  'community',
  'createdAt',
  'likes',
  'user',
  'updatedAt',
  'post',
  'event',
] as const) {
  @Field(() => [String], { nullable: true })
  images?: string[];

  @Field(() => CreateEventInput, { nullable: true })
  event?: CreateEventInput;

  @Field(() => Int, { nullable: true, defaultValue: -1 })
  eventId?: number;

  @Field(() => Int, { nullable: true })
  communityId?: number;

  @Field(() => Int, { nullable: true })
  groupId?: number;
}

export const PublicationResult = createUnionType({
  name: 'PublicationResult',
  resolveType: (value) => {
    if ('message' in value) {
      return BaseResult;
    }
    return Publication;
  },
  types: () => [Publication, BaseResult] as const,
});
