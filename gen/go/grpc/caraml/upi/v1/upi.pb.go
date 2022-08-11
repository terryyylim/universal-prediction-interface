// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        (unknown)
// source: caraml/upi/v1/upi.proto

package upiv1

import (
	_ "google.golang.org/genproto/googleapis/api/annotations"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// Represents a request to predict multiple values
type PredictValuesRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Collection of prediction instances to be predicted.
	// Each prediction row correspond to one prediction instance.
	// NOTE: the ordering of prediction_rows might differ with prediction_result_rows in the response
	PredictionRows []*PredictionRow `protobuf:"bytes,1,rep,name=prediction_rows,json=predictionRows,proto3" json:"prediction_rows,omitempty"`
	// Name of the concept we wish to predict.
	// In the context of Marketplace's domain entities,
	// this will correspond to a Numeric Dimension,
	// eg. "CancellationProb" or "AcceptanceProb" */
	TargetName string `protobuf:"bytes,2,opt,name=target_name,json=targetName,proto3" json:"target_name,omitempty"`
	// Prediction context may contain additional data applicable to all prediction instances
	// For example it can be used to store information for traffic rules, experimentation
	// or tracking purposes.
	// Eg. country_code, service_type, service_area_id
	PredictionContext []*NamedValue    `protobuf:"bytes,3,rep,name=prediction_context,json=predictionContext,proto3" json:"prediction_context,omitempty"`
	Metadata          *RequestMetadata `protobuf:"bytes,10,opt,name=metadata,proto3" json:"metadata,omitempty"`
}

func (x *PredictValuesRequest) Reset() {
	*x = PredictValuesRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_caraml_upi_v1_upi_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PredictValuesRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PredictValuesRequest) ProtoMessage() {}

func (x *PredictValuesRequest) ProtoReflect() protoreflect.Message {
	mi := &file_caraml_upi_v1_upi_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PredictValuesRequest.ProtoReflect.Descriptor instead.
func (*PredictValuesRequest) Descriptor() ([]byte, []int) {
	return file_caraml_upi_v1_upi_proto_rawDescGZIP(), []int{0}
}

func (x *PredictValuesRequest) GetPredictionRows() []*PredictionRow {
	if x != nil {
		return x.PredictionRows
	}
	return nil
}

func (x *PredictValuesRequest) GetTargetName() string {
	if x != nil {
		return x.TargetName
	}
	return ""
}

func (x *PredictValuesRequest) GetPredictionContext() []*NamedValue {
	if x != nil {
		return x.PredictionContext
	}
	return nil
}

func (x *PredictValuesRequest) GetMetadata() *RequestMetadata {
	if x != nil {
		return x.Metadata
	}
	return nil
}

type RequestMetadata struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Unique identifier for each request. Optional.
	// Prediction ID will generated by the platform. The user is expected
	// include the prediction ID (along with row ID) when calling
	// the observations API so that predictions and observations can be joined.
	// Prediction ID is needed because row ID may not be globally unique
	// across requests (only locally unique within each request).
	// If there are experiments with alternative models, the mapping
	// from prediciton ID to treatment ID will be logged by the platform
	PredictionId string `protobuf:"bytes,1,opt,name=prediction_id,json=predictionId,proto3" json:"prediction_id,omitempty"`
	// Timestamp of the request
	RequestTimestamp *timestamppb.Timestamp `protobuf:"bytes,2,opt,name=request_timestamp,json=requestTimestamp,proto3" json:"request_timestamp,omitempty"`
}

func (x *RequestMetadata) Reset() {
	*x = RequestMetadata{}
	if protoimpl.UnsafeEnabled {
		mi := &file_caraml_upi_v1_upi_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *RequestMetadata) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RequestMetadata) ProtoMessage() {}

func (x *RequestMetadata) ProtoReflect() protoreflect.Message {
	mi := &file_caraml_upi_v1_upi_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RequestMetadata.ProtoReflect.Descriptor instead.
func (*RequestMetadata) Descriptor() ([]byte, []int) {
	return file_caraml_upi_v1_upi_proto_rawDescGZIP(), []int{1}
}

func (x *RequestMetadata) GetPredictionId() string {
	if x != nil {
		return x.PredictionId
	}
	return ""
}

func (x *RequestMetadata) GetRequestTimestamp() *timestamppb.Timestamp {
	if x != nil {
		return x.RequestTimestamp
	}
	return nil
}

// Represents an single instance we wish to predict.
// Eg. for Matchmaking a prediction row will typically
// correspond to a proposed driver plan
type PredictionRow struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Row ID is defined by the client and can be used
	// to join a prediction row with the prediction result,
	// and to track predictions generated by multiple models.
	// The user is expected include row ID (along with prediction ID)
	// when calling the observations API so that predictions
	// and observations can be joined.
	RowId string `protobuf:"bytes,1,opt,name=row_id,json=rowId,proto3" json:"row_id,omitempty"`
	// Model inputs contain all preprocessed feature that model use to perform prediction.
	// The feature ordering in model_inputs must be the same as feature order expected by model.
	// Model inputs can be populated via 3 ways:
	// - By performing preprocessing in the client-side and sent as part of original request.
	// - By transforming raw feature values stored in transformer_inputs.
	// - By retrieving precomputed feature value from feature store.
	ModelInputs []*NamedValue `protobuf:"bytes,2,rep,name=model_inputs,json=modelInputs,proto3" json:"model_inputs,omitempty"`
	// Transformer input contains raw values that can be used to enrich model_inputs using transformer.
	// Typically transformer_inputs contains:
	// - unprocessed/raw features that requires further processing.
	// - list of entities for which their precomputed features are retrieved from feature store.
	//
	TransformerInputs []*NamedValue `protobuf:"bytes,3,rep,name=transformer_inputs,json=transformerInputs,proto3" json:"transformer_inputs,omitempty"`
}

func (x *PredictionRow) Reset() {
	*x = PredictionRow{}
	if protoimpl.UnsafeEnabled {
		mi := &file_caraml_upi_v1_upi_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PredictionRow) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PredictionRow) ProtoMessage() {}

func (x *PredictionRow) ProtoReflect() protoreflect.Message {
	mi := &file_caraml_upi_v1_upi_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PredictionRow.ProtoReflect.Descriptor instead.
func (*PredictionRow) Descriptor() ([]byte, []int) {
	return file_caraml_upi_v1_upi_proto_rawDescGZIP(), []int{2}
}

func (x *PredictionRow) GetRowId() string {
	if x != nil {
		return x.RowId
	}
	return ""
}

func (x *PredictionRow) GetModelInputs() []*NamedValue {
	if x != nil {
		return x.ModelInputs
	}
	return nil
}

func (x *PredictionRow) GetTransformerInputs() []*NamedValue {
	if x != nil {
		return x.TransformerInputs
	}
	return nil
}

type PredictValuesResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Prediction results corresponding to the
	// prediction rows provided in the request.
	// NOTE: the ordering of prediction_result_rows might differ with prediction_rows in the request
	PredictionResultRows []*PredictionResultRow `protobuf:"bytes,1,rep,name=prediction_result_rows,json=predictionResultRows,proto3" json:"prediction_result_rows,omitempty"`
	// Target name as defined in the request metadata
	TargetName string `protobuf:"bytes,2,opt,name=target_name,json=targetName,proto3" json:"target_name,omitempty"`
	// Extensible field to cover unforeseen requirements
	PredictionContext []*NamedValue `protobuf:"bytes,3,rep,name=prediction_context,json=predictionContext,proto3" json:"prediction_context,omitempty"`
	// Response metadata
	Metadata *ResponseMetadata `protobuf:"bytes,10,opt,name=metadata,proto3" json:"metadata,omitempty"`
}

func (x *PredictValuesResponse) Reset() {
	*x = PredictValuesResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_caraml_upi_v1_upi_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PredictValuesResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PredictValuesResponse) ProtoMessage() {}

func (x *PredictValuesResponse) ProtoReflect() protoreflect.Message {
	mi := &file_caraml_upi_v1_upi_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PredictValuesResponse.ProtoReflect.Descriptor instead.
func (*PredictValuesResponse) Descriptor() ([]byte, []int) {
	return file_caraml_upi_v1_upi_proto_rawDescGZIP(), []int{3}
}

func (x *PredictValuesResponse) GetPredictionResultRows() []*PredictionResultRow {
	if x != nil {
		return x.PredictionResultRows
	}
	return nil
}

func (x *PredictValuesResponse) GetTargetName() string {
	if x != nil {
		return x.TargetName
	}
	return ""
}

func (x *PredictValuesResponse) GetPredictionContext() []*NamedValue {
	if x != nil {
		return x.PredictionContext
	}
	return nil
}

func (x *PredictValuesResponse) GetMetadata() *ResponseMetadata {
	if x != nil {
		return x.Metadata
	}
	return nil
}

type PredictionResultRow struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Row ID defined by the caller used to join a prediction result with a prediction row
	RowId string `protobuf:"bytes,1,opt,name=row_id,json=rowId,proto3" json:"row_id,omitempty"`
	// Represents the predicted values corresponding to a
	// single prediction row. This will often be the output of an ML model.
	// This field is repeated to support multi-task models with non-scalar outputs
	Values []*NamedValue `protobuf:"bytes,2,rep,name=values,proto3" json:"values,omitempty"`
}

func (x *PredictionResultRow) Reset() {
	*x = PredictionResultRow{}
	if protoimpl.UnsafeEnabled {
		mi := &file_caraml_upi_v1_upi_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PredictionResultRow) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PredictionResultRow) ProtoMessage() {}

func (x *PredictionResultRow) ProtoReflect() protoreflect.Message {
	mi := &file_caraml_upi_v1_upi_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PredictionResultRow.ProtoReflect.Descriptor instead.
func (*PredictionResultRow) Descriptor() ([]byte, []int) {
	return file_caraml_upi_v1_upi_proto_rawDescGZIP(), []int{4}
}

func (x *PredictionResultRow) GetRowId() string {
	if x != nil {
		return x.RowId
	}
	return ""
}

func (x *PredictionResultRow) GetValues() []*NamedValue {
	if x != nil {
		return x.Values
	}
	return nil
}

type ResponseMetadata struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Prediction ID generated by the platform.
	// The user is expected include the prediction ID (along with row ID) when calling
	// the observations API so that predictions and observations can be joined.
	// Prediction ID is needed because row ID may not be globally unique
	// across requests (only locally unique within each request).
	// If there are experiments with alternative models, the mapping
	// from prediciton ID to treatment ID will be logged by the platform
	PredictionId string `protobuf:"bytes,1,opt,name=prediction_id,json=predictionId,proto3" json:"prediction_id,omitempty"`
	// List of model that produces the prediction
	// This field is repeated to cater for use case such as ensembling several model production results
	Models []*ModelMetadata `protobuf:"bytes,2,rep,name=models,proto3" json:"models,omitempty"`
	// Optional experimentation metadata
	ExperimentId string `protobuf:"bytes,3,opt,name=experiment_id,json=experimentId,proto3" json:"experiment_id,omitempty"`
	TreatmentId  string `protobuf:"bytes,4,opt,name=treatment_id,json=treatmentId,proto3" json:"treatment_id,omitempty"`
}

func (x *ResponseMetadata) Reset() {
	*x = ResponseMetadata{}
	if protoimpl.UnsafeEnabled {
		mi := &file_caraml_upi_v1_upi_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ResponseMetadata) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ResponseMetadata) ProtoMessage() {}

func (x *ResponseMetadata) ProtoReflect() protoreflect.Message {
	mi := &file_caraml_upi_v1_upi_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ResponseMetadata.ProtoReflect.Descriptor instead.
func (*ResponseMetadata) Descriptor() ([]byte, []int) {
	return file_caraml_upi_v1_upi_proto_rawDescGZIP(), []int{5}
}

func (x *ResponseMetadata) GetPredictionId() string {
	if x != nil {
		return x.PredictionId
	}
	return ""
}

func (x *ResponseMetadata) GetModels() []*ModelMetadata {
	if x != nil {
		return x.Models
	}
	return nil
}

func (x *ResponseMetadata) GetExperimentId() string {
	if x != nil {
		return x.ExperimentId
	}
	return ""
}

func (x *ResponseMetadata) GetTreatmentId() string {
	if x != nil {
		return x.TreatmentId
	}
	return ""
}

type ModelMetadata struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Model name that produce prediction
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// Model version that produce prediction
	Version string `protobuf:"bytes,2,opt,name=version,proto3" json:"version,omitempty"`
}

func (x *ModelMetadata) Reset() {
	*x = ModelMetadata{}
	if protoimpl.UnsafeEnabled {
		mi := &file_caraml_upi_v1_upi_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ModelMetadata) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ModelMetadata) ProtoMessage() {}

func (x *ModelMetadata) ProtoReflect() protoreflect.Message {
	mi := &file_caraml_upi_v1_upi_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ModelMetadata.ProtoReflect.Descriptor instead.
func (*ModelMetadata) Descriptor() ([]byte, []int) {
	return file_caraml_upi_v1_upi_proto_rawDescGZIP(), []int{6}
}

func (x *ModelMetadata) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *ModelMetadata) GetVersion() string {
	if x != nil {
		return x.Version
	}
	return ""
}

var File_caraml_upi_v1_upi_proto protoreflect.FileDescriptor

var file_caraml_upi_v1_upi_proto_rawDesc = []byte{
	0x0a, 0x17, 0x63, 0x61, 0x72, 0x61, 0x6d, 0x6c, 0x2f, 0x75, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f,
	0x75, 0x70, 0x69, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0d, 0x63, 0x61, 0x72, 0x61, 0x6d,
	0x6c, 0x2e, 0x75, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x1a, 0x19, 0x63, 0x61, 0x72, 0x61, 0x6d, 0x6c,
	0x2f, 0x75, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x61, 0x70, 0x69,
	0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x22, 0x84, 0x02, 0x0a, 0x14, 0x50, 0x72, 0x65, 0x64, 0x69, 0x63, 0x74, 0x56, 0x61,
	0x6c, 0x75, 0x65, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x45, 0x0a, 0x0f, 0x70,
	0x72, 0x65, 0x64, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x72, 0x6f, 0x77, 0x73, 0x18, 0x01,
	0x20, 0x03, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x63, 0x61, 0x72, 0x61, 0x6d, 0x6c, 0x2e, 0x75, 0x70,
	0x69, 0x2e, 0x76, 0x31, 0x2e, 0x50, 0x72, 0x65, 0x64, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52,
	0x6f, 0x77, 0x52, 0x0e, 0x70, 0x72, 0x65, 0x64, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x6f,
	0x77, 0x73, 0x12, 0x1f, 0x0a, 0x0b, 0x74, 0x61, 0x72, 0x67, 0x65, 0x74, 0x5f, 0x6e, 0x61, 0x6d,
	0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x74, 0x61, 0x72, 0x67, 0x65, 0x74, 0x4e,
	0x61, 0x6d, 0x65, 0x12, 0x48, 0x0a, 0x12, 0x70, 0x72, 0x65, 0x64, 0x69, 0x63, 0x74, 0x69, 0x6f,
	0x6e, 0x5f, 0x63, 0x6f, 0x6e, 0x74, 0x65, 0x78, 0x74, 0x18, 0x03, 0x20, 0x03, 0x28, 0x0b, 0x32,
	0x19, 0x2e, 0x63, 0x61, 0x72, 0x61, 0x6d, 0x6c, 0x2e, 0x75, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e,
	0x4e, 0x61, 0x6d, 0x65, 0x64, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x11, 0x70, 0x72, 0x65, 0x64,
	0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x43, 0x6f, 0x6e, 0x74, 0x65, 0x78, 0x74, 0x12, 0x3a, 0x0a,
	0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x1e, 0x2e, 0x63, 0x61, 0x72, 0x61, 0x6d, 0x6c, 0x2e, 0x75, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x52,
	0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x22, 0x7f, 0x0a, 0x0f, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x12, 0x23, 0x0a, 0x0d,
	0x70, 0x72, 0x65, 0x64, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x0c, 0x70, 0x72, 0x65, 0x64, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x49,
	0x64, 0x12, 0x47, 0x0a, 0x11, 0x72, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x5f, 0x74, 0x69, 0x6d,
	0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67,
	0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54,
	0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x10, 0x72, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x22, 0xae, 0x01, 0x0a, 0x0d, 0x50,
	0x72, 0x65, 0x64, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x6f, 0x77, 0x12, 0x15, 0x0a, 0x06,
	0x72, 0x6f, 0x77, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x72, 0x6f,
	0x77, 0x49, 0x64, 0x12, 0x3c, 0x0a, 0x0c, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x5f, 0x69, 0x6e, 0x70,
	0x75, 0x74, 0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x63, 0x61, 0x72, 0x61,
	0x6d, 0x6c, 0x2e, 0x75, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x4e, 0x61, 0x6d, 0x65, 0x64, 0x56,
	0x61, 0x6c, 0x75, 0x65, 0x52, 0x0b, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x49, 0x6e, 0x70, 0x75, 0x74,
	0x73, 0x12, 0x48, 0x0a, 0x12, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x66, 0x6f, 0x72, 0x6d, 0x65, 0x72,
	0x5f, 0x69, 0x6e, 0x70, 0x75, 0x74, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x19, 0x2e,
	0x63, 0x61, 0x72, 0x61, 0x6d, 0x6c, 0x2e, 0x75, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x4e, 0x61,
	0x6d, 0x65, 0x64, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x11, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x66,
	0x6f, 0x72, 0x6d, 0x65, 0x72, 0x49, 0x6e, 0x70, 0x75, 0x74, 0x73, 0x22, 0x99, 0x02, 0x0a, 0x15,
	0x50, 0x72, 0x65, 0x64, 0x69, 0x63, 0x74, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x73, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x58, 0x0a, 0x16, 0x70, 0x72, 0x65, 0x64, 0x69, 0x63, 0x74,
	0x69, 0x6f, 0x6e, 0x5f, 0x72, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x5f, 0x72, 0x6f, 0x77, 0x73, 0x18,
	0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x22, 0x2e, 0x63, 0x61, 0x72, 0x61, 0x6d, 0x6c, 0x2e, 0x75,
	0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x50, 0x72, 0x65, 0x64, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e,
	0x52, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x52, 0x6f, 0x77, 0x52, 0x14, 0x70, 0x72, 0x65, 0x64, 0x69,
	0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x52, 0x6f, 0x77, 0x73, 0x12,
	0x1f, 0x0a, 0x0b, 0x74, 0x61, 0x72, 0x67, 0x65, 0x74, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x74, 0x61, 0x72, 0x67, 0x65, 0x74, 0x4e, 0x61, 0x6d, 0x65,
	0x12, 0x48, 0x0a, 0x12, 0x70, 0x72, 0x65, 0x64, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x63,
	0x6f, 0x6e, 0x74, 0x65, 0x78, 0x74, 0x18, 0x03, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x63,
	0x61, 0x72, 0x61, 0x6d, 0x6c, 0x2e, 0x75, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x4e, 0x61, 0x6d,
	0x65, 0x64, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x11, 0x70, 0x72, 0x65, 0x64, 0x69, 0x63, 0x74,
	0x69, 0x6f, 0x6e, 0x43, 0x6f, 0x6e, 0x74, 0x65, 0x78, 0x74, 0x12, 0x3b, 0x0a, 0x08, 0x6d, 0x65,
	0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1f, 0x2e, 0x63,
	0x61, 0x72, 0x61, 0x6d, 0x6c, 0x2e, 0x75, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x52, 0x08, 0x6d,
	0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x22, 0x5f, 0x0a, 0x13, 0x50, 0x72, 0x65, 0x64, 0x69,
	0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x52, 0x6f, 0x77, 0x12, 0x15,
	0x0a, 0x06, 0x72, 0x6f, 0x77, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05,
	0x72, 0x6f, 0x77, 0x49, 0x64, 0x12, 0x31, 0x0a, 0x06, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x73, 0x18,
	0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x63, 0x61, 0x72, 0x61, 0x6d, 0x6c, 0x2e, 0x75,
	0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x4e, 0x61, 0x6d, 0x65, 0x64, 0x56, 0x61, 0x6c, 0x75, 0x65,
	0x52, 0x06, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x73, 0x22, 0xb5, 0x01, 0x0a, 0x10, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x12, 0x23, 0x0a,
	0x0d, 0x70, 0x72, 0x65, 0x64, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x0c, 0x70, 0x72, 0x65, 0x64, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e,
	0x49, 0x64, 0x12, 0x34, 0x0a, 0x06, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x73, 0x18, 0x02, 0x20, 0x03,
	0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x63, 0x61, 0x72, 0x61, 0x6d, 0x6c, 0x2e, 0x75, 0x70, 0x69, 0x2e,
	0x76, 0x31, 0x2e, 0x4d, 0x6f, 0x64, 0x65, 0x6c, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61,
	0x52, 0x06, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x73, 0x12, 0x23, 0x0a, 0x0d, 0x65, 0x78, 0x70, 0x65,
	0x72, 0x69, 0x6d, 0x65, 0x6e, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x0c, 0x65, 0x78, 0x70, 0x65, 0x72, 0x69, 0x6d, 0x65, 0x6e, 0x74, 0x49, 0x64, 0x12, 0x21, 0x0a,
	0x0c, 0x74, 0x72, 0x65, 0x61, 0x74, 0x6d, 0x65, 0x6e, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x04, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x0b, 0x74, 0x72, 0x65, 0x61, 0x74, 0x6d, 0x65, 0x6e, 0x74, 0x49, 0x64,
	0x22, 0x3d, 0x0a, 0x0d, 0x4d, 0x6f, 0x64, 0x65, 0x6c, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74,
	0x61, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x32,
	0x90, 0x01, 0x0a, 0x1a, 0x55, 0x6e, 0x69, 0x76, 0x65, 0x72, 0x73, 0x61, 0x6c, 0x50, 0x72, 0x65,
	0x64, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x72,
	0x0a, 0x0d, 0x50, 0x72, 0x65, 0x64, 0x69, 0x63, 0x74, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x73, 0x12,
	0x23, 0x2e, 0x63, 0x61, 0x72, 0x61, 0x6d, 0x6c, 0x2e, 0x75, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e,
	0x50, 0x72, 0x65, 0x64, 0x69, 0x63, 0x74, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x73, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x24, 0x2e, 0x63, 0x61, 0x72, 0x61, 0x6d, 0x6c, 0x2e, 0x75, 0x70,
	0x69, 0x2e, 0x76, 0x31, 0x2e, 0x50, 0x72, 0x65, 0x64, 0x69, 0x63, 0x74, 0x56, 0x61, 0x6c, 0x75,
	0x65, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x16, 0x82, 0xd3, 0xe4, 0x93,
	0x02, 0x10, 0x22, 0x0b, 0x2f, 0x76, 0x31, 0x2f, 0x70, 0x72, 0x65, 0x64, 0x69, 0x63, 0x74, 0x3a,
	0x01, 0x2a, 0x42, 0xc4, 0x01, 0x0a, 0x11, 0x63, 0x6f, 0x6d, 0x2e, 0x63, 0x61, 0x72, 0x61, 0x6d,
	0x6c, 0x2e, 0x75, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x42, 0x08, 0x55, 0x70, 0x69, 0x50, 0x72, 0x6f,
	0x74, 0x6f, 0x50, 0x01, 0x5a, 0x4f, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d,
	0x2f, 0x63, 0x61, 0x72, 0x61, 0x6d, 0x6c, 0x2d, 0x64, 0x65, 0x76, 0x2f, 0x75, 0x6e, 0x69, 0x76,
	0x65, 0x72, 0x73, 0x61, 0x6c, 0x2d, 0x70, 0x72, 0x65, 0x64, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e,
	0x2d, 0x69, 0x6e, 0x74, 0x65, 0x72, 0x66, 0x61, 0x63, 0x65, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x67,
	0x6f, 0x2f, 0x63, 0x61, 0x72, 0x61, 0x6d, 0x6c, 0x2f, 0x75, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x3b,
	0x75, 0x70, 0x69, 0x76, 0x31, 0xa2, 0x02, 0x03, 0x43, 0x55, 0x58, 0xaa, 0x02, 0x0d, 0x43, 0x61,
	0x72, 0x61, 0x6d, 0x6c, 0x2e, 0x55, 0x70, 0x69, 0x2e, 0x56, 0x31, 0xca, 0x02, 0x0d, 0x43, 0x61,
	0x72, 0x61, 0x6d, 0x6c, 0x5c, 0x55, 0x70, 0x69, 0x5c, 0x56, 0x31, 0xe2, 0x02, 0x19, 0x43, 0x61,
	0x72, 0x61, 0x6d, 0x6c, 0x5c, 0x55, 0x70, 0x69, 0x5c, 0x56, 0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d,
	0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x0f, 0x43, 0x61, 0x72, 0x61, 0x6d, 0x6c,
	0x3a, 0x3a, 0x55, 0x70, 0x69, 0x3a, 0x3a, 0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var (
	file_caraml_upi_v1_upi_proto_rawDescOnce sync.Once
	file_caraml_upi_v1_upi_proto_rawDescData = file_caraml_upi_v1_upi_proto_rawDesc
)

func file_caraml_upi_v1_upi_proto_rawDescGZIP() []byte {
	file_caraml_upi_v1_upi_proto_rawDescOnce.Do(func() {
		file_caraml_upi_v1_upi_proto_rawDescData = protoimpl.X.CompressGZIP(file_caraml_upi_v1_upi_proto_rawDescData)
	})
	return file_caraml_upi_v1_upi_proto_rawDescData
}

var file_caraml_upi_v1_upi_proto_msgTypes = make([]protoimpl.MessageInfo, 7)
var file_caraml_upi_v1_upi_proto_goTypes = []interface{}{
	(*PredictValuesRequest)(nil),  // 0: caraml.upi.v1.PredictValuesRequest
	(*RequestMetadata)(nil),       // 1: caraml.upi.v1.RequestMetadata
	(*PredictionRow)(nil),         // 2: caraml.upi.v1.PredictionRow
	(*PredictValuesResponse)(nil), // 3: caraml.upi.v1.PredictValuesResponse
	(*PredictionResultRow)(nil),   // 4: caraml.upi.v1.PredictionResultRow
	(*ResponseMetadata)(nil),      // 5: caraml.upi.v1.ResponseMetadata
	(*ModelMetadata)(nil),         // 6: caraml.upi.v1.ModelMetadata
	(*NamedValue)(nil),            // 7: caraml.upi.v1.NamedValue
	(*timestamppb.Timestamp)(nil), // 8: google.protobuf.Timestamp
}
var file_caraml_upi_v1_upi_proto_depIdxs = []int32{
	2,  // 0: caraml.upi.v1.PredictValuesRequest.prediction_rows:type_name -> caraml.upi.v1.PredictionRow
	7,  // 1: caraml.upi.v1.PredictValuesRequest.prediction_context:type_name -> caraml.upi.v1.NamedValue
	1,  // 2: caraml.upi.v1.PredictValuesRequest.metadata:type_name -> caraml.upi.v1.RequestMetadata
	8,  // 3: caraml.upi.v1.RequestMetadata.request_timestamp:type_name -> google.protobuf.Timestamp
	7,  // 4: caraml.upi.v1.PredictionRow.model_inputs:type_name -> caraml.upi.v1.NamedValue
	7,  // 5: caraml.upi.v1.PredictionRow.transformer_inputs:type_name -> caraml.upi.v1.NamedValue
	4,  // 6: caraml.upi.v1.PredictValuesResponse.prediction_result_rows:type_name -> caraml.upi.v1.PredictionResultRow
	7,  // 7: caraml.upi.v1.PredictValuesResponse.prediction_context:type_name -> caraml.upi.v1.NamedValue
	5,  // 8: caraml.upi.v1.PredictValuesResponse.metadata:type_name -> caraml.upi.v1.ResponseMetadata
	7,  // 9: caraml.upi.v1.PredictionResultRow.values:type_name -> caraml.upi.v1.NamedValue
	6,  // 10: caraml.upi.v1.ResponseMetadata.models:type_name -> caraml.upi.v1.ModelMetadata
	0,  // 11: caraml.upi.v1.UniversalPredictionService.PredictValues:input_type -> caraml.upi.v1.PredictValuesRequest
	3,  // 12: caraml.upi.v1.UniversalPredictionService.PredictValues:output_type -> caraml.upi.v1.PredictValuesResponse
	12, // [12:13] is the sub-list for method output_type
	11, // [11:12] is the sub-list for method input_type
	11, // [11:11] is the sub-list for extension type_name
	11, // [11:11] is the sub-list for extension extendee
	0,  // [0:11] is the sub-list for field type_name
}

func init() { file_caraml_upi_v1_upi_proto_init() }
func file_caraml_upi_v1_upi_proto_init() {
	if File_caraml_upi_v1_upi_proto != nil {
		return
	}
	file_caraml_upi_v1_value_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_caraml_upi_v1_upi_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PredictValuesRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_caraml_upi_v1_upi_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*RequestMetadata); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_caraml_upi_v1_upi_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PredictionRow); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_caraml_upi_v1_upi_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PredictValuesResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_caraml_upi_v1_upi_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PredictionResultRow); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_caraml_upi_v1_upi_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ResponseMetadata); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_caraml_upi_v1_upi_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ModelMetadata); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_caraml_upi_v1_upi_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   7,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_caraml_upi_v1_upi_proto_goTypes,
		DependencyIndexes: file_caraml_upi_v1_upi_proto_depIdxs,
		MessageInfos:      file_caraml_upi_v1_upi_proto_msgTypes,
	}.Build()
	File_caraml_upi_v1_upi_proto = out.File
	file_caraml_upi_v1_upi_proto_rawDesc = nil
	file_caraml_upi_v1_upi_proto_goTypes = nil
	file_caraml_upi_v1_upi_proto_depIdxs = nil
}