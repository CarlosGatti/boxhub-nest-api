import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectCreateWithoutIntakeFormsInput } from './defined-project-create-without-intake-forms.input';
import { Type } from 'class-transformer';
import { DefinedProjectCreateOrConnectWithoutIntakeFormsInput } from './defined-project-create-or-connect-without-intake-forms.input';
import { Prisma } from '@prisma/client';
import { DefinedProjectWhereUniqueInput } from './defined-project-where-unique.input';

@InputType()
export class DefinedProjectCreateNestedOneWithoutIntakeFormsInput {

    @Field(() => DefinedProjectCreateWithoutIntakeFormsInput, {nullable:true})
    @Type(() => DefinedProjectCreateWithoutIntakeFormsInput)
    create?: DefinedProjectCreateWithoutIntakeFormsInput;

    @Field(() => DefinedProjectCreateOrConnectWithoutIntakeFormsInput, {nullable:true})
    @Type(() => DefinedProjectCreateOrConnectWithoutIntakeFormsInput)
    connectOrCreate?: DefinedProjectCreateOrConnectWithoutIntakeFormsInput;

    @Field(() => DefinedProjectWhereUniqueInput, {nullable:true})
    @Type(() => DefinedProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedProjectWhereUniqueInput, 'id'>;
}
