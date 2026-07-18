import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyResourceCreateWithoutShortLinksInput } from './defined-academy-resource-create-without-short-links.input';
import { Type } from 'class-transformer';
import { DefinedAcademyResourceCreateOrConnectWithoutShortLinksInput } from './defined-academy-resource-create-or-connect-without-short-links.input';
import { DefinedAcademyResourceUpsertWithoutShortLinksInput } from './defined-academy-resource-upsert-without-short-links.input';
import { DefinedAcademyResourceWhereInput } from './defined-academy-resource-where.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyResourceWhereUniqueInput } from './defined-academy-resource-where-unique.input';
import { DefinedAcademyResourceUpdateToOneWithWhereWithoutShortLinksInput } from './defined-academy-resource-update-to-one-with-where-without-short-links.input';

@InputType()
export class DefinedAcademyResourceUpdateOneWithoutShortLinksNestedInput {

    @Field(() => DefinedAcademyResourceCreateWithoutShortLinksInput, {nullable:true})
    @Type(() => DefinedAcademyResourceCreateWithoutShortLinksInput)
    create?: DefinedAcademyResourceCreateWithoutShortLinksInput;

    @Field(() => DefinedAcademyResourceCreateOrConnectWithoutShortLinksInput, {nullable:true})
    @Type(() => DefinedAcademyResourceCreateOrConnectWithoutShortLinksInput)
    connectOrCreate?: DefinedAcademyResourceCreateOrConnectWithoutShortLinksInput;

    @Field(() => DefinedAcademyResourceUpsertWithoutShortLinksInput, {nullable:true})
    @Type(() => DefinedAcademyResourceUpsertWithoutShortLinksInput)
    upsert?: DefinedAcademyResourceUpsertWithoutShortLinksInput;

    @Field(() => DefinedAcademyResourceWhereInput, {nullable:true})
    @Type(() => DefinedAcademyResourceWhereInput)
    disconnect?: DefinedAcademyResourceWhereInput;

    @Field(() => DefinedAcademyResourceWhereInput, {nullable:true})
    @Type(() => DefinedAcademyResourceWhereInput)
    delete?: DefinedAcademyResourceWhereInput;

    @Field(() => DefinedAcademyResourceWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyResourceWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyResourceWhereUniqueInput, 'id'>;

    @Field(() => DefinedAcademyResourceUpdateToOneWithWhereWithoutShortLinksInput, {nullable:true})
    @Type(() => DefinedAcademyResourceUpdateToOneWithWhereWithoutShortLinksInput)
    update?: DefinedAcademyResourceUpdateToOneWithWhereWithoutShortLinksInput;
}
