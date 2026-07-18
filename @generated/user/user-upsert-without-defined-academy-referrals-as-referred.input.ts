import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutDefinedAcademyReferralsAsReferredInput } from './user-update-without-defined-academy-referrals-as-referred.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutDefinedAcademyReferralsAsReferredInput } from './user-create-without-defined-academy-referrals-as-referred.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutDefinedAcademyReferralsAsReferredInput {

    @Field(() => UserUpdateWithoutDefinedAcademyReferralsAsReferredInput, {nullable:false})
    @Type(() => UserUpdateWithoutDefinedAcademyReferralsAsReferredInput)
    update!: UserUpdateWithoutDefinedAcademyReferralsAsReferredInput;

    @Field(() => UserCreateWithoutDefinedAcademyReferralsAsReferredInput, {nullable:false})
    @Type(() => UserCreateWithoutDefinedAcademyReferralsAsReferredInput)
    create!: UserCreateWithoutDefinedAcademyReferralsAsReferredInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
