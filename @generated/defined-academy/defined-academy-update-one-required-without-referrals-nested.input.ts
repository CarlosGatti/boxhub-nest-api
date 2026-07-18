import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCreateWithoutReferralsInput } from './defined-academy-create-without-referrals.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCreateOrConnectWithoutReferralsInput } from './defined-academy-create-or-connect-without-referrals.input';
import { DefinedAcademyUpsertWithoutReferralsInput } from './defined-academy-upsert-without-referrals.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyWhereUniqueInput } from './defined-academy-where-unique.input';
import { DefinedAcademyUpdateToOneWithWhereWithoutReferralsInput } from './defined-academy-update-to-one-with-where-without-referrals.input';

@InputType()
export class DefinedAcademyUpdateOneRequiredWithoutReferralsNestedInput {

    @Field(() => DefinedAcademyCreateWithoutReferralsInput, {nullable:true})
    @Type(() => DefinedAcademyCreateWithoutReferralsInput)
    create?: DefinedAcademyCreateWithoutReferralsInput;

    @Field(() => DefinedAcademyCreateOrConnectWithoutReferralsInput, {nullable:true})
    @Type(() => DefinedAcademyCreateOrConnectWithoutReferralsInput)
    connectOrCreate?: DefinedAcademyCreateOrConnectWithoutReferralsInput;

    @Field(() => DefinedAcademyUpsertWithoutReferralsInput, {nullable:true})
    @Type(() => DefinedAcademyUpsertWithoutReferralsInput)
    upsert?: DefinedAcademyUpsertWithoutReferralsInput;

    @Field(() => DefinedAcademyWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => DefinedAcademyUpdateToOneWithWhereWithoutReferralsInput, {nullable:true})
    @Type(() => DefinedAcademyUpdateToOneWithWhereWithoutReferralsInput)
    update?: DefinedAcademyUpdateToOneWithWhereWithoutReferralsInput;
}
