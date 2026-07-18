import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyWhereUniqueInput } from './defined-academy-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCreateWithoutReferralsInput } from './defined-academy-create-without-referrals.input';

@InputType()
export class DefinedAcademyCreateOrConnectWithoutReferralsInput {

    @Field(() => DefinedAcademyWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => DefinedAcademyCreateWithoutReferralsInput, {nullable:false})
    @Type(() => DefinedAcademyCreateWithoutReferralsInput)
    create!: DefinedAcademyCreateWithoutReferralsInput;
}
