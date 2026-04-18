import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedIntakeFormCreateWithoutProjectInput } from './defined-intake-form-create-without-project.input';
import { Type } from 'class-transformer';
import { DefinedIntakeFormCreateOrConnectWithoutProjectInput } from './defined-intake-form-create-or-connect-without-project.input';
import { DefinedIntakeFormCreateManyProjectInputEnvelope } from './defined-intake-form-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedIntakeFormWhereUniqueInput } from './defined-intake-form-where-unique.input';

@InputType()
export class DefinedIntakeFormCreateNestedManyWithoutProjectInput {

    @Field(() => [DefinedIntakeFormCreateWithoutProjectInput], {nullable:true})
    @Type(() => DefinedIntakeFormCreateWithoutProjectInput)
    create?: Array<DefinedIntakeFormCreateWithoutProjectInput>;

    @Field(() => [DefinedIntakeFormCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => DefinedIntakeFormCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<DefinedIntakeFormCreateOrConnectWithoutProjectInput>;

    @Field(() => DefinedIntakeFormCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => DefinedIntakeFormCreateManyProjectInputEnvelope)
    createMany?: DefinedIntakeFormCreateManyProjectInputEnvelope;

    @Field(() => [DefinedIntakeFormWhereUniqueInput], {nullable:true})
    @Type(() => DefinedIntakeFormWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedIntakeFormWhereUniqueInput, 'id' | 'shareToken'>>;
}
