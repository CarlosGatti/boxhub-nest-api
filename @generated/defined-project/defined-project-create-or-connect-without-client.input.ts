import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedProjectWhereUniqueInput } from './defined-project-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedProjectCreateWithoutClientInput } from './defined-project-create-without-client.input';

@InputType()
export class DefinedProjectCreateOrConnectWithoutClientInput {

    @Field(() => DefinedProjectWhereUniqueInput, {nullable:false})
    @Type(() => DefinedProjectWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedProjectWhereUniqueInput, 'id'>;

    @Field(() => DefinedProjectCreateWithoutClientInput, {nullable:false})
    @Type(() => DefinedProjectCreateWithoutClientInput)
    create!: DefinedProjectCreateWithoutClientInput;
}
