import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContainerCreateWithoutCategoriesInput } from './container-create-without-categories.input';
import { Type } from 'class-transformer';
import { ContainerCreateOrConnectWithoutCategoriesInput } from './container-create-or-connect-without-categories.input';
import { ContainerUpsertWithWhereUniqueWithoutCategoriesInput } from './container-upsert-with-where-unique-without-categories.input';
import { Prisma } from '@prisma/client';
import { ContainerWhereUniqueInput } from './container-where-unique.input';
import { ContainerUpdateWithWhereUniqueWithoutCategoriesInput } from './container-update-with-where-unique-without-categories.input';
import { ContainerUpdateManyWithWhereWithoutCategoriesInput } from './container-update-many-with-where-without-categories.input';
import { ContainerScalarWhereInput } from './container-scalar-where.input';

@InputType()
export class ContainerUpdateManyWithoutCategoriesNestedInput {

    @Field(() => [ContainerCreateWithoutCategoriesInput], {nullable:true})
    @Type(() => ContainerCreateWithoutCategoriesInput)
    create?: Array<ContainerCreateWithoutCategoriesInput>;

    @Field(() => [ContainerCreateOrConnectWithoutCategoriesInput], {nullable:true})
    @Type(() => ContainerCreateOrConnectWithoutCategoriesInput)
    connectOrCreate?: Array<ContainerCreateOrConnectWithoutCategoriesInput>;

    @Field(() => [ContainerUpsertWithWhereUniqueWithoutCategoriesInput], {nullable:true})
    @Type(() => ContainerUpsertWithWhereUniqueWithoutCategoriesInput)
    upsert?: Array<ContainerUpsertWithWhereUniqueWithoutCategoriesInput>;

    @Field(() => [ContainerWhereUniqueInput], {nullable:true})
    @Type(() => ContainerWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ContainerWhereUniqueInput, 'id' | 'code'>>;

    @Field(() => [ContainerWhereUniqueInput], {nullable:true})
    @Type(() => ContainerWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ContainerWhereUniqueInput, 'id' | 'code'>>;

    @Field(() => [ContainerWhereUniqueInput], {nullable:true})
    @Type(() => ContainerWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ContainerWhereUniqueInput, 'id' | 'code'>>;

    @Field(() => [ContainerWhereUniqueInput], {nullable:true})
    @Type(() => ContainerWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ContainerWhereUniqueInput, 'id' | 'code'>>;

    @Field(() => [ContainerUpdateWithWhereUniqueWithoutCategoriesInput], {nullable:true})
    @Type(() => ContainerUpdateWithWhereUniqueWithoutCategoriesInput)
    update?: Array<ContainerUpdateWithWhereUniqueWithoutCategoriesInput>;

    @Field(() => [ContainerUpdateManyWithWhereWithoutCategoriesInput], {nullable:true})
    @Type(() => ContainerUpdateManyWithWhereWithoutCategoriesInput)
    updateMany?: Array<ContainerUpdateManyWithWhereWithoutCategoriesInput>;

    @Field(() => [ContainerScalarWhereInput], {nullable:true})
    @Type(() => ContainerScalarWhereInput)
    deleteMany?: Array<ContainerScalarWhereInput>;
}
