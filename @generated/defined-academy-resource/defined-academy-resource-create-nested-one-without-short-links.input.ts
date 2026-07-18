import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyResourceCreateWithoutShortLinksInput } from './defined-academy-resource-create-without-short-links.input';
import { Type } from 'class-transformer';
import { DefinedAcademyResourceCreateOrConnectWithoutShortLinksInput } from './defined-academy-resource-create-or-connect-without-short-links.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyResourceWhereUniqueInput } from './defined-academy-resource-where-unique.input';

@InputType()
export class DefinedAcademyResourceCreateNestedOneWithoutShortLinksInput {

    @Field(() => DefinedAcademyResourceCreateWithoutShortLinksInput, {nullable:true})
    @Type(() => DefinedAcademyResourceCreateWithoutShortLinksInput)
    create?: DefinedAcademyResourceCreateWithoutShortLinksInput;

    @Field(() => DefinedAcademyResourceCreateOrConnectWithoutShortLinksInput, {nullable:true})
    @Type(() => DefinedAcademyResourceCreateOrConnectWithoutShortLinksInput)
    connectOrCreate?: DefinedAcademyResourceCreateOrConnectWithoutShortLinksInput;

    @Field(() => DefinedAcademyResourceWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyResourceWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyResourceWhereUniqueInput, 'id'>;
}
