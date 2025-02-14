import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityCreateManyParentCommunityInput } from './community-create-many-parent-community.input';
import { Type } from 'class-transformer';

@InputType()
export class CommunityCreateManyParentCommunityInputEnvelope {

    @Field(() => [CommunityCreateManyParentCommunityInput], {nullable:false})
    @Type(() => CommunityCreateManyParentCommunityInput)
    data!: Array<CommunityCreateManyParentCommunityInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
