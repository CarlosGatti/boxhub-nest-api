import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityUpdateWithoutPublicationsInput } from './community-update-without-publications.input';
import { Type } from 'class-transformer';
import { CommunityCreateWithoutPublicationsInput } from './community-create-without-publications.input';
import { CommunityWhereInput } from './community-where.input';

@InputType()
export class CommunityUpsertWithoutPublicationsInput {

    @Field(() => CommunityUpdateWithoutPublicationsInput, {nullable:false})
    @Type(() => CommunityUpdateWithoutPublicationsInput)
    update!: CommunityUpdateWithoutPublicationsInput;

    @Field(() => CommunityCreateWithoutPublicationsInput, {nullable:false})
    @Type(() => CommunityCreateWithoutPublicationsInput)
    create!: CommunityCreateWithoutPublicationsInput;

    @Field(() => CommunityWhereInput, {nullable:true})
    @Type(() => CommunityWhereInput)
    where?: CommunityWhereInput;
}
