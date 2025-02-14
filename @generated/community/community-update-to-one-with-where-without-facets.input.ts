import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityWhereInput } from './community-where.input';
import { Type } from 'class-transformer';
import { CommunityUpdateWithoutFacetsInput } from './community-update-without-facets.input';

@InputType()
export class CommunityUpdateToOneWithWhereWithoutFacetsInput {

    @Field(() => CommunityWhereInput, {nullable:true})
    @Type(() => CommunityWhereInput)
    where?: CommunityWhereInput;

    @Field(() => CommunityUpdateWithoutFacetsInput, {nullable:false})
    @Type(() => CommunityUpdateWithoutFacetsInput)
    data!: CommunityUpdateWithoutFacetsInput;
}
