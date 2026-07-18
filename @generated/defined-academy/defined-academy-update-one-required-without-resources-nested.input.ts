import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCreateWithoutResourcesInput } from './defined-academy-create-without-resources.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCreateOrConnectWithoutResourcesInput } from './defined-academy-create-or-connect-without-resources.input';
import { DefinedAcademyUpsertWithoutResourcesInput } from './defined-academy-upsert-without-resources.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyWhereUniqueInput } from './defined-academy-where-unique.input';
import { DefinedAcademyUpdateToOneWithWhereWithoutResourcesInput } from './defined-academy-update-to-one-with-where-without-resources.input';

@InputType()
export class DefinedAcademyUpdateOneRequiredWithoutResourcesNestedInput {

    @Field(() => DefinedAcademyCreateWithoutResourcesInput, {nullable:true})
    @Type(() => DefinedAcademyCreateWithoutResourcesInput)
    create?: DefinedAcademyCreateWithoutResourcesInput;

    @Field(() => DefinedAcademyCreateOrConnectWithoutResourcesInput, {nullable:true})
    @Type(() => DefinedAcademyCreateOrConnectWithoutResourcesInput)
    connectOrCreate?: DefinedAcademyCreateOrConnectWithoutResourcesInput;

    @Field(() => DefinedAcademyUpsertWithoutResourcesInput, {nullable:true})
    @Type(() => DefinedAcademyUpsertWithoutResourcesInput)
    upsert?: DefinedAcademyUpsertWithoutResourcesInput;

    @Field(() => DefinedAcademyWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => DefinedAcademyUpdateToOneWithWhereWithoutResourcesInput, {nullable:true})
    @Type(() => DefinedAcademyUpdateToOneWithWhereWithoutResourcesInput)
    update?: DefinedAcademyUpdateToOneWithWhereWithoutResourcesInput;
}
