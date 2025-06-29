import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaterialEntryCreateWithoutProjectInput } from './material-entry-create-without-project.input';
import { Type } from 'class-transformer';
import { MaterialEntryCreateOrConnectWithoutProjectInput } from './material-entry-create-or-connect-without-project.input';
import { MaterialEntryUpsertWithWhereUniqueWithoutProjectInput } from './material-entry-upsert-with-where-unique-without-project.input';
import { MaterialEntryCreateManyProjectInputEnvelope } from './material-entry-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MaterialEntryWhereUniqueInput } from './material-entry-where-unique.input';
import { MaterialEntryUpdateWithWhereUniqueWithoutProjectInput } from './material-entry-update-with-where-unique-without-project.input';
import { MaterialEntryUpdateManyWithWhereWithoutProjectInput } from './material-entry-update-many-with-where-without-project.input';
import { MaterialEntryScalarWhereInput } from './material-entry-scalar-where.input';

@InputType()
export class MaterialEntryUpdateManyWithoutProjectNestedInput {

    @Field(() => [MaterialEntryCreateWithoutProjectInput], {nullable:true})
    @Type(() => MaterialEntryCreateWithoutProjectInput)
    create?: Array<MaterialEntryCreateWithoutProjectInput>;

    @Field(() => [MaterialEntryCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => MaterialEntryCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<MaterialEntryCreateOrConnectWithoutProjectInput>;

    @Field(() => [MaterialEntryUpsertWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => MaterialEntryUpsertWithWhereUniqueWithoutProjectInput)
    upsert?: Array<MaterialEntryUpsertWithWhereUniqueWithoutProjectInput>;

    @Field(() => MaterialEntryCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => MaterialEntryCreateManyProjectInputEnvelope)
    createMany?: MaterialEntryCreateManyProjectInputEnvelope;

    @Field(() => [MaterialEntryWhereUniqueInput], {nullable:true})
    @Type(() => MaterialEntryWhereUniqueInput)
    set?: Array<Prisma.AtLeast<MaterialEntryWhereUniqueInput, 'id'>>;

    @Field(() => [MaterialEntryWhereUniqueInput], {nullable:true})
    @Type(() => MaterialEntryWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<MaterialEntryWhereUniqueInput, 'id'>>;

    @Field(() => [MaterialEntryWhereUniqueInput], {nullable:true})
    @Type(() => MaterialEntryWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<MaterialEntryWhereUniqueInput, 'id'>>;

    @Field(() => [MaterialEntryWhereUniqueInput], {nullable:true})
    @Type(() => MaterialEntryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MaterialEntryWhereUniqueInput, 'id'>>;

    @Field(() => [MaterialEntryUpdateWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => MaterialEntryUpdateWithWhereUniqueWithoutProjectInput)
    update?: Array<MaterialEntryUpdateWithWhereUniqueWithoutProjectInput>;

    @Field(() => [MaterialEntryUpdateManyWithWhereWithoutProjectInput], {nullable:true})
    @Type(() => MaterialEntryUpdateManyWithWhereWithoutProjectInput)
    updateMany?: Array<MaterialEntryUpdateManyWithWhereWithoutProjectInput>;

    @Field(() => [MaterialEntryScalarWhereInput], {nullable:true})
    @Type(() => MaterialEntryScalarWhereInput)
    deleteMany?: Array<MaterialEntryScalarWhereInput>;
}
