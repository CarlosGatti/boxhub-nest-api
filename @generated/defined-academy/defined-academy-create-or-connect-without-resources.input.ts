import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyWhereUniqueInput } from './defined-academy-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCreateWithoutResourcesInput } from './defined-academy-create-without-resources.input';

@InputType()
export class DefinedAcademyCreateOrConnectWithoutResourcesInput {

    @Field(() => DefinedAcademyWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => DefinedAcademyCreateWithoutResourcesInput, {nullable:false})
    @Type(() => DefinedAcademyCreateWithoutResourcesInput)
    create!: DefinedAcademyCreateWithoutResourcesInput;
}
