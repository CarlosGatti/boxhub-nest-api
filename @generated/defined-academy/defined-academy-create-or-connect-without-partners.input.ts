import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyWhereUniqueInput } from './defined-academy-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCreateWithoutPartnersInput } from './defined-academy-create-without-partners.input';

@InputType()
export class DefinedAcademyCreateOrConnectWithoutPartnersInput {

    @Field(() => DefinedAcademyWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => DefinedAcademyCreateWithoutPartnersInput, {nullable:false})
    @Type(() => DefinedAcademyCreateWithoutPartnersInput)
    create!: DefinedAcademyCreateWithoutPartnersInput;
}
