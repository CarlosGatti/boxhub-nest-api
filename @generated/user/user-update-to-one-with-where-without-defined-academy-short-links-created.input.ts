import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutDefinedAcademyShortLinksCreatedInput } from './user-update-without-defined-academy-short-links-created.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutDefinedAcademyShortLinksCreatedInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutDefinedAcademyShortLinksCreatedInput, {nullable:false})
    @Type(() => UserUpdateWithoutDefinedAcademyShortLinksCreatedInput)
    data!: UserUpdateWithoutDefinedAcademyShortLinksCreatedInput;
}
