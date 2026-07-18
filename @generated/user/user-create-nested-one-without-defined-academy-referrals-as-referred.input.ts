import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDefinedAcademyReferralsAsReferredInput } from './user-create-without-defined-academy-referrals-as-referred.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutDefinedAcademyReferralsAsReferredInput } from './user-create-or-connect-without-defined-academy-referrals-as-referred.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutDefinedAcademyReferralsAsReferredInput {

    @Field(() => UserCreateWithoutDefinedAcademyReferralsAsReferredInput, {nullable:true})
    @Type(() => UserCreateWithoutDefinedAcademyReferralsAsReferredInput)
    create?: UserCreateWithoutDefinedAcademyReferralsAsReferredInput;

    @Field(() => UserCreateOrConnectWithoutDefinedAcademyReferralsAsReferredInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDefinedAcademyReferralsAsReferredInput)
    connectOrCreate?: UserCreateOrConnectWithoutDefinedAcademyReferralsAsReferredInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
