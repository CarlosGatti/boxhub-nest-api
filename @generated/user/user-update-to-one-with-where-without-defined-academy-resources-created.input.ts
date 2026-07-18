import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutDefinedAcademyResourcesCreatedInput } from './user-update-without-defined-academy-resources-created.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutDefinedAcademyResourcesCreatedInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutDefinedAcademyResourcesCreatedInput, {nullable:false})
    @Type(() => UserUpdateWithoutDefinedAcademyResourcesCreatedInput)
    data!: UserUpdateWithoutDefinedAcademyResourcesCreatedInput;
}
