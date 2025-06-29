import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaterialEntryCreateWithoutProjectInput } from './material-entry-create-without-project.input';
import { Type } from 'class-transformer';
import { MaterialEntryCreateOrConnectWithoutProjectInput } from './material-entry-create-or-connect-without-project.input';
import { MaterialEntryCreateManyProjectInputEnvelope } from './material-entry-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MaterialEntryWhereUniqueInput } from './material-entry-where-unique.input';

@InputType()
export class MaterialEntryUncheckedCreateNestedManyWithoutProjectInput {

    @Field(() => [MaterialEntryCreateWithoutProjectInput], {nullable:true})
    @Type(() => MaterialEntryCreateWithoutProjectInput)
    create?: Array<MaterialEntryCreateWithoutProjectInput>;

    @Field(() => [MaterialEntryCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => MaterialEntryCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<MaterialEntryCreateOrConnectWithoutProjectInput>;

    @Field(() => MaterialEntryCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => MaterialEntryCreateManyProjectInputEnvelope)
    createMany?: MaterialEntryCreateManyProjectInputEnvelope;

    @Field(() => [MaterialEntryWhereUniqueInput], {nullable:true})
    @Type(() => MaterialEntryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MaterialEntryWhereUniqueInput, 'id'>>;
}
