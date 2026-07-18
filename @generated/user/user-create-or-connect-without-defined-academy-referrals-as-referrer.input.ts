import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutDefinedAcademyReferralsAsReferrerInput } from './user-create-without-defined-academy-referrals-as-referrer.input';

@InputType()
export class UserCreateOrConnectWithoutDefinedAcademyReferralsAsReferrerInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutDefinedAcademyReferralsAsReferrerInput, {nullable:false})
    @Type(() => UserCreateWithoutDefinedAcademyReferralsAsReferrerInput)
    create!: UserCreateWithoutDefinedAcademyReferralsAsReferrerInput;
}
