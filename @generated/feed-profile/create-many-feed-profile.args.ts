import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedProfileCreateManyInput } from './feed-profile-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFeedProfileArgs {

    @Field(() => [FeedProfileCreateManyInput], {nullable:false})
    @Type(() => FeedProfileCreateManyInput)
    data!: Array<FeedProfileCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
