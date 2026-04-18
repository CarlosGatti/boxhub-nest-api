import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedIntakeFormCreateWithoutProjectInput } from './defined-intake-form-create-without-project.input';
import { Type } from 'class-transformer';
import { DefinedIntakeFormCreateOrConnectWithoutProjectInput } from './defined-intake-form-create-or-connect-without-project.input';
import { DefinedIntakeFormUpsertWithWhereUniqueWithoutProjectInput } from './defined-intake-form-upsert-with-where-unique-without-project.input';
import { DefinedIntakeFormCreateManyProjectInputEnvelope } from './defined-intake-form-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedIntakeFormWhereUniqueInput } from './defined-intake-form-where-unique.input';
import { DefinedIntakeFormUpdateWithWhereUniqueWithoutProjectInput } from './defined-intake-form-update-with-where-unique-without-project.input';
import { DefinedIntakeFormUpdateManyWithWhereWithoutProjectInput } from './defined-intake-form-update-many-with-where-without-project.input';
import { DefinedIntakeFormScalarWhereInput } from './defined-intake-form-scalar-where.input';

@InputType()
export class DefinedIntakeFormUpdateManyWithoutProjectNestedInput {

    @Field(() => [DefinedIntakeFormCreateWithoutProjectInput], {nullable:true})
    @Type(() => DefinedIntakeFormCreateWithoutProjectInput)
    create?: Array<DefinedIntakeFormCreateWithoutProjectInput>;

    @Field(() => [DefinedIntakeFormCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => DefinedIntakeFormCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<DefinedIntakeFormCreateOrConnectWithoutProjectInput>;

    @Field(() => [DefinedIntakeFormUpsertWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => DefinedIntakeFormUpsertWithWhereUniqueWithoutProjectInput)
    upsert?: Array<DefinedIntakeFormUpsertWithWhereUniqueWithoutProjectInput>;

    @Field(() => DefinedIntakeFormCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => DefinedIntakeFormCreateManyProjectInputEnvelope)
    createMany?: DefinedIntakeFormCreateManyProjectInputEnvelope;

    @Field(() => [DefinedIntakeFormWhereUniqueInput], {nullable:true})
    @Type(() => DefinedIntakeFormWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DefinedIntakeFormWhereUniqueInput, 'id' | 'shareToken'>>;

    @Field(() => [DefinedIntakeFormWhereUniqueInput], {nullable:true})
    @Type(() => DefinedIntakeFormWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DefinedIntakeFormWhereUniqueInput, 'id' | 'shareToken'>>;

    @Field(() => [DefinedIntakeFormWhereUniqueInput], {nullable:true})
    @Type(() => DefinedIntakeFormWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DefinedIntakeFormWhereUniqueInput, 'id' | 'shareToken'>>;

    @Field(() => [DefinedIntakeFormWhereUniqueInput], {nullable:true})
    @Type(() => DefinedIntakeFormWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedIntakeFormWhereUniqueInput, 'id' | 'shareToken'>>;

    @Field(() => [DefinedIntakeFormUpdateWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => DefinedIntakeFormUpdateWithWhereUniqueWithoutProjectInput)
    update?: Array<DefinedIntakeFormUpdateWithWhereUniqueWithoutProjectInput>;

    @Field(() => [DefinedIntakeFormUpdateManyWithWhereWithoutProjectInput], {nullable:true})
    @Type(() => DefinedIntakeFormUpdateManyWithWhereWithoutProjectInput)
    updateMany?: Array<DefinedIntakeFormUpdateManyWithWhereWithoutProjectInput>;

    @Field(() => [DefinedIntakeFormScalarWhereInput], {nullable:true})
    @Type(() => DefinedIntakeFormScalarWhereInput)
    deleteMany?: Array<DefinedIntakeFormScalarWhereInput>;
}
