import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FamilyWhereInput } from './family-where.input';
import { Type } from 'class-transformer';
import { FamilyUpdateWithoutMembersInput } from './family-update-without-members.input';

@InputType()
export class FamilyUpdateToOneWithWhereWithoutMembersInput {

    @Field(() => FamilyWhereInput, {nullable:true})
    @Type(() => FamilyWhereInput)
    where?: FamilyWhereInput;

    @Field(() => FamilyUpdateWithoutMembersInput, {nullable:false})
    @Type(() => FamilyUpdateWithoutMembersInput)
    data!: FamilyUpdateWithoutMembersInput;
}
