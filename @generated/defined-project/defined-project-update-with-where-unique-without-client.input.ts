import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedProjectWhereUniqueInput } from './defined-project-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedProjectUpdateWithoutClientInput } from './defined-project-update-without-client.input';

@InputType()
export class DefinedProjectUpdateWithWhereUniqueWithoutClientInput {

    @Field(() => DefinedProjectWhereUniqueInput, {nullable:false})
    @Type(() => DefinedProjectWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedProjectWhereUniqueInput, 'id'>;

    @Field(() => DefinedProjectUpdateWithoutClientInput, {nullable:false})
    @Type(() => DefinedProjectUpdateWithoutClientInput)
    data!: DefinedProjectUpdateWithoutClientInput;
}
