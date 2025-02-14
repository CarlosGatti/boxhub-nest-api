import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FacetCreateManyCommunityInput } from './facet-create-many-community.input';
import { Type } from 'class-transformer';

@InputType()
export class FacetCreateManyCommunityInputEnvelope {

    @Field(() => [FacetCreateManyCommunityInput], {nullable:false})
    @Type(() => FacetCreateManyCommunityInput)
    data!: Array<FacetCreateManyCommunityInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
