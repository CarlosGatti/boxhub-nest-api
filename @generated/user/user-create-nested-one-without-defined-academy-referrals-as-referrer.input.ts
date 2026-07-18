import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDefinedAcademyReferralsAsReferrerInput } from './user-create-without-defined-academy-referrals-as-referrer.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutDefinedAcademyReferralsAsReferrerInput } from './user-create-or-connect-without-defined-academy-referrals-as-referrer.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutDefinedAcademyReferralsAsReferrerInput {

    @Field(() => UserCreateWithoutDefinedAcademyReferralsAsReferrerInput, {nullable:true})
    @Type(() => UserCreateWithoutDefinedAcademyReferralsAsReferrerInput)
    create?: UserCreateWithoutDefinedAcademyReferralsAsReferrerInput;

    @Field(() => UserCreateOrConnectWithoutDefinedAcademyReferralsAsReferrerInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDefinedAcademyReferralsAsReferrerInput)
    connectOrCreate?: UserCreateOrConnectWithoutDefinedAcademyReferralsAsReferrerInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
