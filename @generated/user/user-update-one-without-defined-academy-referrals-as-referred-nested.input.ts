import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDefinedAcademyReferralsAsReferredInput } from './user-create-without-defined-academy-referrals-as-referred.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutDefinedAcademyReferralsAsReferredInput } from './user-create-or-connect-without-defined-academy-referrals-as-referred.input';
import { UserUpsertWithoutDefinedAcademyReferralsAsReferredInput } from './user-upsert-without-defined-academy-referrals-as-referred.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutDefinedAcademyReferralsAsReferredInput } from './user-update-to-one-with-where-without-defined-academy-referrals-as-referred.input';

@InputType()
export class UserUpdateOneWithoutDefinedAcademyReferralsAsReferredNestedInput {

    @Field(() => UserCreateWithoutDefinedAcademyReferralsAsReferredInput, {nullable:true})
    @Type(() => UserCreateWithoutDefinedAcademyReferralsAsReferredInput)
    create?: UserCreateWithoutDefinedAcademyReferralsAsReferredInput;

    @Field(() => UserCreateOrConnectWithoutDefinedAcademyReferralsAsReferredInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDefinedAcademyReferralsAsReferredInput)
    connectOrCreate?: UserCreateOrConnectWithoutDefinedAcademyReferralsAsReferredInput;

    @Field(() => UserUpsertWithoutDefinedAcademyReferralsAsReferredInput, {nullable:true})
    @Type(() => UserUpsertWithoutDefinedAcademyReferralsAsReferredInput)
    upsert?: UserUpsertWithoutDefinedAcademyReferralsAsReferredInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutDefinedAcademyReferralsAsReferredInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutDefinedAcademyReferralsAsReferredInput)
    update?: UserUpdateToOneWithWhereWithoutDefinedAcademyReferralsAsReferredInput;
}
