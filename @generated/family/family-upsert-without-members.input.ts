import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FamilyUpdateWithoutMembersInput } from './family-update-without-members.input';
import { Type } from 'class-transformer';
import { FamilyCreateWithoutMembersInput } from './family-create-without-members.input';
import { FamilyWhereInput } from './family-where.input';

@InputType()
export class FamilyUpsertWithoutMembersInput {

    @Field(() => FamilyUpdateWithoutMembersInput, {nullable:false})
    @Type(() => FamilyUpdateWithoutMembersInput)
    update!: FamilyUpdateWithoutMembersInput;

    @Field(() => FamilyCreateWithoutMembersInput, {nullable:false})
    @Type(() => FamilyCreateWithoutMembersInput)
    create!: FamilyCreateWithoutMembersInput;

    @Field(() => FamilyWhereInput, {nullable:true})
    @Type(() => FamilyWhereInput)
    where?: FamilyWhereInput;
}
