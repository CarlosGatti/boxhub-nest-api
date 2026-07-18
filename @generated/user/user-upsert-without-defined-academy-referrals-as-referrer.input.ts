import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutDefinedAcademyReferralsAsReferrerInput } from './user-update-without-defined-academy-referrals-as-referrer.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutDefinedAcademyReferralsAsReferrerInput } from './user-create-without-defined-academy-referrals-as-referrer.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutDefinedAcademyReferralsAsReferrerInput {

    @Field(() => UserUpdateWithoutDefinedAcademyReferralsAsReferrerInput, {nullable:false})
    @Type(() => UserUpdateWithoutDefinedAcademyReferralsAsReferrerInput)
    update!: UserUpdateWithoutDefinedAcademyReferralsAsReferrerInput;

    @Field(() => UserCreateWithoutDefinedAcademyReferralsAsReferrerInput, {nullable:false})
    @Type(() => UserCreateWithoutDefinedAcademyReferralsAsReferrerInput)
    create!: UserCreateWithoutDefinedAcademyReferralsAsReferrerInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
