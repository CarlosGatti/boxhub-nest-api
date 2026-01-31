import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedProfileWhereInput } from './feed-profile-where.input';
import { Type } from 'class-transformer';
import { FeedProfileOrderByWithRelationInput } from './feed-profile-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FeedProfileWhereUniqueInput } from './feed-profile-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FeedProfileScalarFieldEnum } from './feed-profile-scalar-field.enum';

@ArgsType()
export class FindFirstFeedProfileOrThrowArgs {

    @Field(() => FeedProfileWhereInput, {nullable:true})
    @Type(() => FeedProfileWhereInput)
    where?: FeedProfileWhereInput;

    @Field(() => [FeedProfileOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FeedProfileOrderByWithRelationInput>;

    @Field(() => FeedProfileWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FeedProfileWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FeedProfileScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FeedProfileScalarFieldEnum>;
}
