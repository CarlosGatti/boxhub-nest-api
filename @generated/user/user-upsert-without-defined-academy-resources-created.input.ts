import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutDefinedAcademyResourcesCreatedInput } from './user-update-without-defined-academy-resources-created.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutDefinedAcademyResourcesCreatedInput } from './user-create-without-defined-academy-resources-created.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutDefinedAcademyResourcesCreatedInput {

    @Field(() => UserUpdateWithoutDefinedAcademyResourcesCreatedInput, {nullable:false})
    @Type(() => UserUpdateWithoutDefinedAcademyResourcesCreatedInput)
    update!: UserUpdateWithoutDefinedAcademyResourcesCreatedInput;

    @Field(() => UserCreateWithoutDefinedAcademyResourcesCreatedInput, {nullable:false})
    @Type(() => UserCreateWithoutDefinedAcademyResourcesCreatedInput)
    create!: UserCreateWithoutDefinedAcademyResourcesCreatedInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
