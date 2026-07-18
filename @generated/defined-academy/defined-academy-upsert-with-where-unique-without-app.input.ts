import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyWhereUniqueInput } from './defined-academy-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUpdateWithoutAppInput } from './defined-academy-update-without-app.input';
import { DefinedAcademyCreateWithoutAppInput } from './defined-academy-create-without-app.input';

@InputType()
export class DefinedAcademyUpsertWithWhereUniqueWithoutAppInput {

    @Field(() => DefinedAcademyWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => DefinedAcademyUpdateWithoutAppInput, {nullable:false})
    @Type(() => DefinedAcademyUpdateWithoutAppInput)
    update!: DefinedAcademyUpdateWithoutAppInput;

    @Field(() => DefinedAcademyCreateWithoutAppInput, {nullable:false})
    @Type(() => DefinedAcademyCreateWithoutAppInput)
    create!: DefinedAcademyCreateWithoutAppInput;
}
