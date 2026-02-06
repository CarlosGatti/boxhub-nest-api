import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedSourceNudgeWhereInput } from './feed-source-nudge-where.input';
import { Type } from 'class-transformer';
import { FeedSourceNudgeOrderByWithRelationInput } from './feed-source-nudge-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FeedSourceNudgeWhereUniqueInput } from './feed-source-nudge-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FeedSourceNudgeScalarFieldEnum } from './feed-source-nudge-scalar-field.enum';

@ArgsType()
export class FindFirstFeedSourceNudgeOrThrowArgs {

    @Field(() => FeedSourceNudgeWhereInput, {nullable:true})
    @Type(() => FeedSourceNudgeWhereInput)
    where?: FeedSourceNudgeWhereInput;

    @Field(() => [FeedSourceNudgeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FeedSourceNudgeOrderByWithRelationInput>;

    @Field(() => FeedSourceNudgeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FeedSourceNudgeWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FeedSourceNudgeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FeedSourceNudgeScalarFieldEnum>;
}
