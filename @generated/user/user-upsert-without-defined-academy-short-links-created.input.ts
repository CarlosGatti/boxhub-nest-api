import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutDefinedAcademyShortLinksCreatedInput } from './user-update-without-defined-academy-short-links-created.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutDefinedAcademyShortLinksCreatedInput } from './user-create-without-defined-academy-short-links-created.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutDefinedAcademyShortLinksCreatedInput {

    @Field(() => UserUpdateWithoutDefinedAcademyShortLinksCreatedInput, {nullable:false})
    @Type(() => UserUpdateWithoutDefinedAcademyShortLinksCreatedInput)
    update!: UserUpdateWithoutDefinedAcademyShortLinksCreatedInput;

    @Field(() => UserCreateWithoutDefinedAcademyShortLinksCreatedInput, {nullable:false})
    @Type(() => UserCreateWithoutDefinedAcademyShortLinksCreatedInput)
    create!: UserCreateWithoutDefinedAcademyShortLinksCreatedInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
