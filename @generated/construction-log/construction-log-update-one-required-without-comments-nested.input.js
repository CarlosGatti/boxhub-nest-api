"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstructionLogUpdateOneRequiredWithoutCommentsNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const construction_log_create_without_comments_input_1 = require("./construction-log-create-without-comments.input");
const class_transformer_1 = require("class-transformer");
const construction_log_create_or_connect_without_comments_input_1 = require("./construction-log-create-or-connect-without-comments.input");
const construction_log_upsert_without_comments_input_1 = require("./construction-log-upsert-without-comments.input");
const client_1 = require("@prisma/client");
const construction_log_where_unique_input_1 = require("./construction-log-where-unique.input");
const construction_log_update_to_one_with_where_without_comments_input_1 = require("./construction-log-update-to-one-with-where-without-comments.input");
let ConstructionLogUpdateOneRequiredWithoutCommentsNestedInput = class ConstructionLogUpdateOneRequiredWithoutCommentsNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => construction_log_create_without_comments_input_1.ConstructionLogCreateWithoutCommentsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => construction_log_create_without_comments_input_1.ConstructionLogCreateWithoutCommentsInput),
    __metadata("design:type", construction_log_create_without_comments_input_1.ConstructionLogCreateWithoutCommentsInput)
], ConstructionLogUpdateOneRequiredWithoutCommentsNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => construction_log_create_or_connect_without_comments_input_1.ConstructionLogCreateOrConnectWithoutCommentsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => construction_log_create_or_connect_without_comments_input_1.ConstructionLogCreateOrConnectWithoutCommentsInput),
    __metadata("design:type", construction_log_create_or_connect_without_comments_input_1.ConstructionLogCreateOrConnectWithoutCommentsInput)
], ConstructionLogUpdateOneRequiredWithoutCommentsNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => construction_log_upsert_without_comments_input_1.ConstructionLogUpsertWithoutCommentsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => construction_log_upsert_without_comments_input_1.ConstructionLogUpsertWithoutCommentsInput),
    __metadata("design:type", construction_log_upsert_without_comments_input_1.ConstructionLogUpsertWithoutCommentsInput)
], ConstructionLogUpdateOneRequiredWithoutCommentsNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => construction_log_where_unique_input_1.ConstructionLogWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => construction_log_where_unique_input_1.ConstructionLogWhereUniqueInput),
    __metadata("design:type", Object)
], ConstructionLogUpdateOneRequiredWithoutCommentsNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => construction_log_update_to_one_with_where_without_comments_input_1.ConstructionLogUpdateToOneWithWhereWithoutCommentsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => construction_log_update_to_one_with_where_without_comments_input_1.ConstructionLogUpdateToOneWithWhereWithoutCommentsInput),
    __metadata("design:type", construction_log_update_to_one_with_where_without_comments_input_1.ConstructionLogUpdateToOneWithWhereWithoutCommentsInput)
], ConstructionLogUpdateOneRequiredWithoutCommentsNestedInput.prototype, "update", void 0);
ConstructionLogUpdateOneRequiredWithoutCommentsNestedInput = __decorate([
    (0, graphql_2.InputType)()
], ConstructionLogUpdateOneRequiredWithoutCommentsNestedInput);
exports.ConstructionLogUpdateOneRequiredWithoutCommentsNestedInput = ConstructionLogUpdateOneRequiredWithoutCommentsNestedInput;
//# sourceMappingURL=construction-log-update-one-required-without-comments-nested.input.js.map