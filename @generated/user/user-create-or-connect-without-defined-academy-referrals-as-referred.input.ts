import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutDefinedAcademyReferralsAsReferredInput } from './user-create-without-defined-academy-referrals-as-referred.input';

@InputType()
export class UserCreateOrConnectWithoutDefinedAcademyReferralsAsReferredInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutDefinedAcademyReferralsAsReferredInput, {nullable:false})
    @Type(() => UserCreateWithoutDefinedAcademyReferralsAsReferredInput)
    create!: UserCreateWithoutDefinedAcademyReferralsAsReferredInput;
}
