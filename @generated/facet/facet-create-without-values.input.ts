import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityCreateNestedOneWithoutFacetsInput } from '../community/community-create-nested-one-without-facets.input';

@InputType()
export class FacetCreateWithoutValuesInput {

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CommunityCreateNestedOneWithoutFacetsInput, {nullable:true})
    Community?: CommunityCreateNestedOneWithoutFacetsInput;
}
