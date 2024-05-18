// @generated by protoc-gen-es v1.9.0 with parameter "target=ts"
// @generated from file quary/service/v1/cli_rpc_calls.proto (package quary.service.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { TableAddress } from "./table_address_pb.js";
import { QueryResult } from "./query_result_pb.js";
import { ProjectFileSource } from "./project_file_pb.js";

/**
 * @generated from message quary.service.v1.ListTablesRequest
 */
export class ListTablesRequest extends Message<ListTablesRequest> {
  constructor(data?: PartialMessage<ListTablesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "quary.service.v1.ListTablesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListTablesRequest {
    return new ListTablesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListTablesRequest {
    return new ListTablesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListTablesRequest {
    return new ListTablesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListTablesRequest | PlainMessage<ListTablesRequest> | undefined, b: ListTablesRequest | PlainMessage<ListTablesRequest> | undefined): boolean {
    return proto3.util.equals(ListTablesRequest, a, b);
  }
}

/**
 * @generated from message quary.service.v1.ListTablesResponse
 */
export class ListTablesResponse extends Message<ListTablesResponse> {
  /**
   * @generated from field: repeated quary.service.v1.TableAddress tables = 1;
   */
  tables: TableAddress[] = [];

  constructor(data?: PartialMessage<ListTablesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "quary.service.v1.ListTablesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tables", kind: "message", T: TableAddress, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListTablesResponse {
    return new ListTablesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListTablesResponse {
    return new ListTablesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListTablesResponse {
    return new ListTablesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListTablesResponse | PlainMessage<ListTablesResponse> | undefined, b: ListTablesResponse | PlainMessage<ListTablesResponse> | undefined): boolean {
    return proto3.util.equals(ListTablesResponse, a, b);
  }
}

/**
 * @generated from message quary.service.v1.ListViewsRequest
 */
export class ListViewsRequest extends Message<ListViewsRequest> {
  constructor(data?: PartialMessage<ListViewsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "quary.service.v1.ListViewsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListViewsRequest {
    return new ListViewsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListViewsRequest {
    return new ListViewsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListViewsRequest {
    return new ListViewsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListViewsRequest | PlainMessage<ListViewsRequest> | undefined, b: ListViewsRequest | PlainMessage<ListViewsRequest> | undefined): boolean {
    return proto3.util.equals(ListViewsRequest, a, b);
  }
}

/**
 * @generated from message quary.service.v1.ListViewsResponse
 */
export class ListViewsResponse extends Message<ListViewsResponse> {
  /**
   * @generated from field: repeated quary.service.v1.TableAddress views = 1;
   */
  views: TableAddress[] = [];

  constructor(data?: PartialMessage<ListViewsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "quary.service.v1.ListViewsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "views", kind: "message", T: TableAddress, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListViewsResponse {
    return new ListViewsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListViewsResponse {
    return new ListViewsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListViewsResponse {
    return new ListViewsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListViewsResponse | PlainMessage<ListViewsResponse> | undefined, b: ListViewsResponse | PlainMessage<ListViewsResponse> | undefined): boolean {
    return proto3.util.equals(ListViewsResponse, a, b);
  }
}

/**
 * @generated from message quary.service.v1.ExecRequest
 */
export class ExecRequest extends Message<ExecRequest> {
  /**
   * @generated from field: string query = 1;
   */
  query = "";

  constructor(data?: PartialMessage<ExecRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "quary.service.v1.ExecRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "query", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExecRequest {
    return new ExecRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExecRequest {
    return new ExecRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExecRequest {
    return new ExecRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ExecRequest | PlainMessage<ExecRequest> | undefined, b: ExecRequest | PlainMessage<ExecRequest> | undefined): boolean {
    return proto3.util.equals(ExecRequest, a, b);
  }
}

/**
 * @generated from message quary.service.v1.ExecResponse
 */
export class ExecResponse extends Message<ExecResponse> {
  constructor(data?: PartialMessage<ExecResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "quary.service.v1.ExecResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExecResponse {
    return new ExecResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExecResponse {
    return new ExecResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExecResponse {
    return new ExecResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ExecResponse | PlainMessage<ExecResponse> | undefined, b: ExecResponse | PlainMessage<ExecResponse> | undefined): boolean {
    return proto3.util.equals(ExecResponse, a, b);
  }
}

/**
 * @generated from message quary.service.v1.QueryRequest
 */
export class QueryRequest extends Message<QueryRequest> {
  /**
   * @generated from field: string query = 1;
   */
  query = "";

  constructor(data?: PartialMessage<QueryRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "quary.service.v1.QueryRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "query", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryRequest {
    return new QueryRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryRequest {
    return new QueryRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryRequest {
    return new QueryRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryRequest | PlainMessage<QueryRequest> | undefined, b: QueryRequest | PlainMessage<QueryRequest> | undefined): boolean {
    return proto3.util.equals(QueryRequest, a, b);
  }
}

/**
 * @generated from message quary.service.v1.QueryResponse
 */
export class QueryResponse extends Message<QueryResponse> {
  /**
   * @generated from field: quary.service.v1.QueryResult result = 1;
   */
  result?: QueryResult;

  constructor(data?: PartialMessage<QueryResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "quary.service.v1.QueryResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "message", T: QueryResult },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryResponse {
    return new QueryResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryResponse {
    return new QueryResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryResponse {
    return new QueryResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryResponse | PlainMessage<QueryResponse> | undefined, b: QueryResponse | PlainMessage<QueryResponse> | undefined): boolean {
    return proto3.util.equals(QueryResponse, a, b);
  }
}

/**
 * @generated from message quary.service.v1.ListColumnsRequest
 */
export class ListColumnsRequest extends Message<ListColumnsRequest> {
  /**
   * @generated from field: string table_name = 1;
   */
  tableName = "";

  constructor(data?: PartialMessage<ListColumnsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "quary.service.v1.ListColumnsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "table_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListColumnsRequest {
    return new ListColumnsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListColumnsRequest {
    return new ListColumnsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListColumnsRequest {
    return new ListColumnsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListColumnsRequest | PlainMessage<ListColumnsRequest> | undefined, b: ListColumnsRequest | PlainMessage<ListColumnsRequest> | undefined): boolean {
    return proto3.util.equals(ListColumnsRequest, a, b);
  }
}

/**
 * @generated from message quary.service.v1.ListColumnsResponse
 */
export class ListColumnsResponse extends Message<ListColumnsResponse> {
  /**
   * @generated from field: repeated string columns = 1;
   */
  columns: string[] = [];

  constructor(data?: PartialMessage<ListColumnsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "quary.service.v1.ListColumnsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "columns", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListColumnsResponse {
    return new ListColumnsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListColumnsResponse {
    return new ListColumnsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListColumnsResponse {
    return new ListColumnsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListColumnsResponse | PlainMessage<ListColumnsResponse> | undefined, b: ListColumnsResponse | PlainMessage<ListColumnsResponse> | undefined): boolean {
    return proto3.util.equals(ListColumnsResponse, a, b);
  }
}

/**
 * @generated from message quary.service.v1.ListSourcesRequest
 */
export class ListSourcesRequest extends Message<ListSourcesRequest> {
  constructor(data?: PartialMessage<ListSourcesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "quary.service.v1.ListSourcesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSourcesRequest {
    return new ListSourcesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSourcesRequest {
    return new ListSourcesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSourcesRequest {
    return new ListSourcesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListSourcesRequest | PlainMessage<ListSourcesRequest> | undefined, b: ListSourcesRequest | PlainMessage<ListSourcesRequest> | undefined): boolean {
    return proto3.util.equals(ListSourcesRequest, a, b);
  }
}

/**
 * @generated from message quary.service.v1.ListSourcesResponse
 */
export class ListSourcesResponse extends Message<ListSourcesResponse> {
  /**
   * @generated from field: repeated quary.service.v1.ProjectFileSource sources = 1;
   */
  sources: ProjectFileSource[] = [];

  constructor(data?: PartialMessage<ListSourcesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "quary.service.v1.ListSourcesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sources", kind: "message", T: ProjectFileSource, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSourcesResponse {
    return new ListSourcesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSourcesResponse {
    return new ListSourcesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSourcesResponse {
    return new ListSourcesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListSourcesResponse | PlainMessage<ListSourcesResponse> | undefined, b: ListSourcesResponse | PlainMessage<ListSourcesResponse> | undefined): boolean {
    return proto3.util.equals(ListSourcesResponse, a, b);
  }
}

