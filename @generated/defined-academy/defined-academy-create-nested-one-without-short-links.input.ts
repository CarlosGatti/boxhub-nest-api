import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCreateWithoutShortLinksInput } from './defined-academy-create-without-short-links.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCreateOrConnectWithoutShortLinksInput } from './defined-academy-create-or-connect-without-short-links.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyWhereUniqueInput } from './defined-academy-where-unique.input';

@InputType()
export class DefinedAcademyCreateNestedOneWithoutShortLinksInput {

    @Field(() => DefinedAcademyCreateWithoutShortLinksInput, {nullable:true})
    @Type(() => DefinedAcademyCreateWithoutShortLinksInput)
    create?: DefinedAcademyCreateWithoutShortLinksInput;

    @Field(() => DefinedAcademyCreateOrConnectWithoutShortLinksInput, {nullable:true})
    @Type(() => DefinedAcademyCreateOrConnectWithoutShortLinksInput)
    connectOrCreate?: DefinedAcademyCreateOrConnectWithoutShortLinksInput;

    @Field(() => DefinedAcademyWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyWhereUniqueInput, 'id' | 'slug'>;
}
