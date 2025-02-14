import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityUpdateWithoutFacetsInput } from './community-update-without-facets.input';
import { Type } from 'class-transformer';
import { CommunityCreateWithoutFacetsInput } from './community-create-without-facets.input';
import { CommunityWhereInput } from './community-where.input';

@InputType()
export class CommunityUpsertWithoutFacetsInput {

    @Field(() => CommunityUpdateWithoutFacetsInput, {nullable:false})
    @Type(() => CommunityUpdateWithoutFacetsInput)
    update!: CommunityUpdateWithoutFacetsInput;

    @Field(() => CommunityCreateWithoutFacetsInput, {nullable:false})
    @Type(() => CommunityCreateWithoutFacetsInput)
    create!: CommunityCreateWithoutFacetsInput;

    @Field(() => CommunityWhereInput, {nullable:true})
    @Type(() => CommunityWhereInput)
    where?: CommunityWhereInput;
}
