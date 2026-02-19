import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionBoardCreateWithoutSectionsInput } from './bucket-vision-board-create-without-sections.input';
import { Type } from 'class-transformer';
import { BucketVisionBoardCreateOrConnectWithoutSectionsInput } from './bucket-vision-board-create-or-connect-without-sections.input';
import { BucketVisionBoardUpsertWithoutSectionsInput } from './bucket-vision-board-upsert-without-sections.input';
import { Prisma } from '@prisma/client';
import { BucketVisionBoardWhereUniqueInput } from './bucket-vision-board-where-unique.input';
import { BucketVisionBoardUpdateToOneWithWhereWithoutSectionsInput } from './bucket-vision-board-update-to-one-with-where-without-sections.input';

@InputType()
export class BucketVisionBoardUpdateOneRequiredWithoutSectionsNestedInput {

    @Field(() => BucketVisionBoardCreateWithoutSectionsInput, {nullable:true})
    @Type(() => BucketVisionBoardCreateWithoutSectionsInput)
    create?: BucketVisionBoardCreateWithoutSectionsInput;

    @Field(() => BucketVisionBoardCreateOrConnectWithoutSectionsInput, {nullable:true})
    @Type(() => BucketVisionBoardCreateOrConnectWithoutSectionsInput)
    connectOrCreate?: BucketVisionBoardCreateOrConnectWithoutSectionsInput;

    @Field(() => BucketVisionBoardUpsertWithoutSectionsInput, {nullable:true})
    @Type(() => BucketVisionBoardUpsertWithoutSectionsInput)
    upsert?: BucketVisionBoardUpsertWithoutSectionsInput;

    @Field(() => BucketVisionBoardWhereUniqueInput, {nullable:true})
    @Type(() => BucketVisionBoardWhereUniqueInput)
    connect?: Prisma.AtLeast<BucketVisionBoardWhereUniqueInput, 'id' | 'userId_year'>;

    @Field(() => BucketVisionBoardUpdateToOneWithWhereWithoutSectionsInput, {nullable:true})
    @Type(() => BucketVisionBoardUpdateToOneWithWhereWithoutSectionsInput)
    update?: BucketVisionBoardUpdateToOneWithWhereWithoutSectionsInput;
}
