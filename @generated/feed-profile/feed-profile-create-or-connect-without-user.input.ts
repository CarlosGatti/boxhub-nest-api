import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedProfileWhereUniqueInput } from './feed-profile-where-unique.input';
import { Type } from 'class-transformer';
import { FeedProfileCreateWithoutUserInput } from './feed-profile-create-without-user.input';

@InputType()
export class FeedProfileCreateOrConnectWithoutUserInput {

    @Field(() => FeedProfileWhereUniqueInput, {nullable:false})
    @Type(() => FeedProfileWhereUniqueInput)
    where!: Prisma.AtLeast<FeedProfileWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => FeedProfileCreateWithoutUserInput, {nullable:false})
    @Type(() => FeedProfileCreateWithoutUserInput)
    create!: FeedProfileCreateWithoutUserInput;
}
