import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityWhereInput } from './community-where.input';
import { Type } from 'class-transformer';
import { CommunityUpdateWithoutPublicationsInput } from './community-update-without-publications.input';

@InputType()
export class CommunityUpdateToOneWithWhereWithoutPublicationsInput {

    @Field(() => CommunityWhereInput, {nullable:true})
    @Type(() => CommunityWhereInput)
    where?: CommunityWhereInput;

    @Field(() => CommunityUpdateWithoutPublicationsInput, {nullable:false})
    @Type(() => CommunityUpdateWithoutPublicationsInput)
    data!: CommunityUpdateWithoutPublicationsInput;
}
