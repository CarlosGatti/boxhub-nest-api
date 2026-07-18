import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyUpdateWithoutReferralsInput } from './defined-academy-update-without-referrals.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCreateWithoutReferralsInput } from './defined-academy-create-without-referrals.input';
import { DefinedAcademyWhereInput } from './defined-academy-where.input';

@InputType()
export class DefinedAcademyUpsertWithoutReferralsInput {

    @Field(() => DefinedAcademyUpdateWithoutReferralsInput, {nullable:false})
    @Type(() => DefinedAcademyUpdateWithoutReferralsInput)
    update!: DefinedAcademyUpdateWithoutReferralsInput;

    @Field(() => DefinedAcademyCreateWithoutReferralsInput, {nullable:false})
    @Type(() => DefinedAcademyCreateWithoutReferralsInput)
    create!: DefinedAcademyCreateWithoutReferralsInput;

    @Field(() => DefinedAcademyWhereInput, {nullable:true})
    @Type(() => DefinedAcademyWhereInput)
    where?: DefinedAcademyWhereInput;
}
