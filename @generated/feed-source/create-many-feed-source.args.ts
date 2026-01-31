import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedSourceCreateManyInput } from './feed-source-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFeedSourceArgs {

    @Field(() => [FeedSourceCreateManyInput], {nullable:false})
    @Type(() => FeedSourceCreateManyInput)
    data!: Array<FeedSourceCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
