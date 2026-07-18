import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDefinedAcademyReferralsAsReferrerInput } from './user-create-without-defined-academy-referrals-as-referrer.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutDefinedAcademyReferralsAsReferrerInput } from './user-create-or-connect-without-defined-academy-referrals-as-referrer.input';
import { UserUpsertWithoutDefinedAcademyReferralsAsReferrerInput } from './user-upsert-without-defined-academy-referrals-as-referrer.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutDefinedAcademyReferralsAsReferrerInput } from './user-update-to-one-with-where-without-defined-academy-referrals-as-referrer.input';

@InputType()
export class UserUpdateOneWithoutDefinedAcademyReferralsAsReferrerNestedInput {

    @Field(() => UserCreateWithoutDefinedAcademyReferralsAsReferrerInput, {nullable:true})
    @Type(() => UserCreateWithoutDefinedAcademyReferralsAsReferrerInput)
    create?: UserCreateWithoutDefinedAcademyReferralsAsReferrerInput;

    @Field(() => UserCreateOrConnectWithoutDefinedAcademyReferralsAsReferrerInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDefinedAcademyReferralsAsReferrerInput)
    connectOrCreate?: UserCreateOrConnectWithoutDefinedAcademyReferralsAsReferrerInput;

    @Field(() => UserUpsertWithoutDefinedAcademyReferralsAsReferrerInput, {nullable:true})
    @Type(() => UserUpsertWithoutDefinedAcademyReferralsAsReferrerInput)
    upsert?: UserUpsertWithoutDefinedAcademyReferralsAsReferrerInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutDefinedAcademyReferralsAsReferrerInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutDefinedAcademyReferralsAsReferrerInput)
    update?: UserUpdateToOneWithWhereWithoutDefinedAcademyReferralsAsReferrerInput;
}
