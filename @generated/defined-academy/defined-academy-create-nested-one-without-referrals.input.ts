import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCreateWithoutReferralsInput } from './defined-academy-create-without-referrals.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCreateOrConnectWithoutReferralsInput } from './defined-academy-create-or-connect-without-referrals.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyWhereUniqueInput } from './defined-academy-where-unique.input';

@InputType()
export class DefinedAcademyCreateNestedOneWithoutReferralsInput {

    @Field(() => DefinedAcademyCreateWithoutReferralsInput, {nullable:true})
    @Type(() => DefinedAcademyCreateWithoutReferralsInput)
    create?: DefinedAcademyCreateWithoutReferralsInput;

    @Field(() => DefinedAcademyCreateOrConnectWithoutReferralsInput, {nullable:true})
    @Type(() => DefinedAcademyCreateOrConnectWithoutReferralsInput)
    connectOrCreate?: DefinedAcademyCreateOrConnectWithoutReferralsInput;

    @Field(() => DefinedAcademyWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyWhereUniqueInput, 'id' | 'slug'>;
}
