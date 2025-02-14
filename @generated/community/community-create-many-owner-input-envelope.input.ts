import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityCreateManyOwnerInput } from './community-create-many-owner.input';
import { Type } from 'class-transformer';

@InputType()
export class CommunityCreateManyOwnerInputEnvelope {

    @Field(() => [CommunityCreateManyOwnerInput], {nullable:false})
    @Type(() => CommunityCreateManyOwnerInput)
    data!: Array<CommunityCreateManyOwnerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
