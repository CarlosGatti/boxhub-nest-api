import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateManyFamilyInput } from './user-create-many-family.input';
import { Type } from 'class-transformer';

@InputType()
export class UserCreateManyFamilyInputEnvelope {

    @Field(() => [UserCreateManyFamilyInput], {nullable:false})
    @Type(() => UserCreateManyFamilyInput)
    data!: Array<UserCreateManyFamilyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
