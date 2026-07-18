import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyWhereInput } from './defined-academy-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUpdateWithoutReferralsInput } from './defined-academy-update-without-referrals.input';

@InputType()
export class DefinedAcademyUpdateToOneWithWhereWithoutReferralsInput {

    @Field(() => DefinedAcademyWhereInput, {nullable:true})
    @Type(() => DefinedAcademyWhereInput)
    where?: DefinedAcademyWhereInput;

    @Field(() => DefinedAcademyUpdateWithoutReferralsInput, {nullable:false})
    @Type(() => DefinedAcademyUpdateWithoutReferralsInput)
    data!: DefinedAcademyUpdateWithoutReferralsInput;
}
