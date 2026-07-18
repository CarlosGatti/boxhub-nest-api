import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutDefinedAcademyReferralsAsReferredInput } from './user-update-without-defined-academy-referrals-as-referred.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutDefinedAcademyReferralsAsReferredInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutDefinedAcademyReferralsAsReferredInput, {nullable:false})
    @Type(() => UserUpdateWithoutDefinedAcademyReferralsAsReferredInput)
    data!: UserUpdateWithoutDefinedAcademyReferralsAsReferredInput;
}
