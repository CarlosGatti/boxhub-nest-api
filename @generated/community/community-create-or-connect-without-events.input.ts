import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommunityWhereUniqueInput } from './community-where-unique.input';
import { Type } from 'class-transformer';
import { CommunityCreateWithoutEventsInput } from './community-create-without-events.input';

@InputType()
export class CommunityCreateOrConnectWithoutEventsInput {

    @Field(() => CommunityWhereUniqueInput, {nullable:false})
    @Type(() => CommunityWhereUniqueInput)
    where!: Prisma.AtLeast<CommunityWhereUniqueInput, 'id' | 'name' | 'communityPlanId'>;

    @Field(() => CommunityCreateWithoutEventsInput, {nullable:false})
    @Type(() => CommunityCreateWithoutEventsInput)
    create!: CommunityCreateWithoutEventsInput;
}
