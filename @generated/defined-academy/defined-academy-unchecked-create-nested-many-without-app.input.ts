import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCreateWithoutAppInput } from './defined-academy-create-without-app.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCreateOrConnectWithoutAppInput } from './defined-academy-create-or-connect-without-app.input';
import { DefinedAcademyCreateManyAppInputEnvelope } from './defined-academy-create-many-app-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyWhereUniqueInput } from './defined-academy-where-unique.input';

@InputType()
export class DefinedAcademyUncheckedCreateNestedManyWithoutAppInput {

    @Field(() => [DefinedAcademyCreateWithoutAppInput], {nullable:true})
    @Type(() => DefinedAcademyCreateWithoutAppInput)
    create?: Array<DefinedAcademyCreateWithoutAppInput>;

    @Field(() => [DefinedAcademyCreateOrConnectWithoutAppInput], {nullable:true})
    @Type(() => DefinedAcademyCreateOrConnectWithoutAppInput)
    connectOrCreate?: Array<DefinedAcademyCreateOrConnectWithoutAppInput>;

    @Field(() => DefinedAcademyCreateManyAppInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyCreateManyAppInputEnvelope)
    createMany?: DefinedAcademyCreateManyAppInputEnvelope;

    @Field(() => [DefinedAcademyWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyWhereUniqueInput, 'id' | 'slug'>>;
}
