import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectCreateWithoutIntakeFormsInput } from './defined-project-create-without-intake-forms.input';
import { Type } from 'class-transformer';
import { DefinedProjectCreateOrConnectWithoutIntakeFormsInput } from './defined-project-create-or-connect-without-intake-forms.input';
import { DefinedProjectUpsertWithoutIntakeFormsInput } from './defined-project-upsert-without-intake-forms.input';
import { DefinedProjectWhereInput } from './defined-project-where.input';
import { Prisma } from '@prisma/client';
import { DefinedProjectWhereUniqueInput } from './defined-project-where-unique.input';
import { DefinedProjectUpdateToOneWithWhereWithoutIntakeFormsInput } from './defined-project-update-to-one-with-where-without-intake-forms.input';

@InputType()
export class DefinedProjectUpdateOneWithoutIntakeFormsNestedInput {

    @Field(() => DefinedProjectCreateWithoutIntakeFormsInput, {nullable:true})
    @Type(() => DefinedProjectCreateWithoutIntakeFormsInput)
    create?: DefinedProjectCreateWithoutIntakeFormsInput;

    @Field(() => DefinedProjectCreateOrConnectWithoutIntakeFormsInput, {nullable:true})
    @Type(() => DefinedProjectCreateOrConnectWithoutIntakeFormsInput)
    connectOrCreate?: DefinedProjectCreateOrConnectWithoutIntakeFormsInput;

    @Field(() => DefinedProjectUpsertWithoutIntakeFormsInput, {nullable:true})
    @Type(() => DefinedProjectUpsertWithoutIntakeFormsInput)
    upsert?: DefinedProjectUpsertWithoutIntakeFormsInput;

    @Field(() => DefinedProjectWhereInput, {nullable:true})
    @Type(() => DefinedProjectWhereInput)
    disconnect?: DefinedProjectWhereInput;

    @Field(() => DefinedProjectWhereInput, {nullable:true})
    @Type(() => DefinedProjectWhereInput)
    delete?: DefinedProjectWhereInput;

    @Field(() => DefinedProjectWhereUniqueInput, {nullable:true})
    @Type(() => DefinedProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedProjectWhereUniqueInput, 'id'>;

    @Field(() => DefinedProjectUpdateToOneWithWhereWithoutIntakeFormsInput, {nullable:true})
    @Type(() => DefinedProjectUpdateToOneWithWhereWithoutIntakeFormsInput)
    update?: DefinedProjectUpdateToOneWithWhereWithoutIntakeFormsInput;
}
