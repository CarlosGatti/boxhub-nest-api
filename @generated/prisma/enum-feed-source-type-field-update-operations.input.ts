import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourceType } from './feed-source-type.enum';

@InputType()
export class EnumFeedSourceTypeFieldUpdateOperationsInput {

    @Field(() => FeedSourceType, {nullable:true})
    set?: keyof typeof FeedSourceType;
}
