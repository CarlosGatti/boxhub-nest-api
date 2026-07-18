import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyWhereUniqueInput } from './defined-academy-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCreateWithoutShortLinksInput } from './defined-academy-create-without-short-links.input';

@InputType()
export class DefinedAcademyCreateOrConnectWithoutShortLinksInput {

    @Field(() => DefinedAcademyWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => DefinedAcademyCreateWithoutShortLinksInput, {nullable:false})
    @Type(() => DefinedAcademyCreateWithoutShortLinksInput)
    create!: DefinedAcademyCreateWithoutShortLinksInput;
}
