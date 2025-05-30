import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommunityCreateManyInput } from './community-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCommunityArgs {

    @Field(() => [CommunityCreateManyInput], {nullable:false})
    @Type(() => CommunityCreateManyInput)
    data!: Array<CommunityCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
