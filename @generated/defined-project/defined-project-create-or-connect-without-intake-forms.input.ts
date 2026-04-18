import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedProjectWhereUniqueInput } from './defined-project-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedProjectCreateWithoutIntakeFormsInput } from './defined-project-create-without-intake-forms.input';

@InputType()
export class DefinedProjectCreateOrConnectWithoutIntakeFormsInput {

    @Field(() => DefinedProjectWhereUniqueInput, {nullable:false})
    @Type(() => DefinedProjectWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedProjectWhereUniqueInput, 'id'>;

    @Field(() => DefinedProjectCreateWithoutIntakeFormsInput, {nullable:false})
    @Type(() => DefinedProjectCreateWithoutIntakeFormsInput)
    create!: DefinedProjectCreateWithoutIntakeFormsInput;
}
