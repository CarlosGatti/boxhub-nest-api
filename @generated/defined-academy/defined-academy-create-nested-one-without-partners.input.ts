import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCreateWithoutPartnersInput } from './defined-academy-create-without-partners.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCreateOrConnectWithoutPartnersInput } from './defined-academy-create-or-connect-without-partners.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyWhereUniqueInput } from './defined-academy-where-unique.input';

@InputType()
export class DefinedAcademyCreateNestedOneWithoutPartnersInput {

    @Field(() => DefinedAcademyCreateWithoutPartnersInput, {nullable:true})
    @Type(() => DefinedAcademyCreateWithoutPartnersInput)
    create?: DefinedAcademyCreateWithoutPartnersInput;

    @Field(() => DefinedAcademyCreateOrConnectWithoutPartnersInput, {nullable:true})
    @Type(() => DefinedAcademyCreateOrConnectWithoutPartnersInput)
    connectOrCreate?: DefinedAcademyCreateOrConnectWithoutPartnersInput;

    @Field(() => DefinedAcademyWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyWhereUniqueInput, 'id' | 'slug'>;
}
