// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        (unknown)
// source: caraml/upi/v1/value.proto

package upiv1

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type NamedValue_Type int32

const (
	NamedValue_TYPE_UNSPECIFIED NamedValue_Type = 0
	NamedValue_TYPE_DOUBLE      NamedValue_Type = 1
	NamedValue_TYPE_INTEGER     NamedValue_Type = 2
	NamedValue_TYPE_STRING      NamedValue_Type = 3
)

// Enum value maps for NamedValue_Type.
var (
	NamedValue_Type_name = map[int32]string{
		0: "TYPE_UNSPECIFIED",
		1: "TYPE_DOUBLE",
		2: "TYPE_INTEGER",
		3: "TYPE_STRING",
	}
	NamedValue_Type_value = map[string]int32{
		"TYPE_UNSPECIFIED": 0,
		"TYPE_DOUBLE":      1,
		"TYPE_INTEGER":     2,
		"TYPE_STRING":      3,
	}
)

func (x NamedValue_Type) Enum() *NamedValue_Type {
	p := new(NamedValue_Type)
	*p = x
	return p
}

func (x NamedValue_Type) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (NamedValue_Type) Descriptor() protoreflect.EnumDescriptor {
	return file_caraml_upi_v1_value_proto_enumTypes[0].Descriptor()
}

func (NamedValue_Type) Type() protoreflect.EnumType {
	return &file_caraml_upi_v1_value_proto_enumTypes[0]
}

func (x NamedValue_Type) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use NamedValue_Type.Descriptor instead.
func (NamedValue_Type) EnumDescriptor() ([]byte, []int) {
	return file_caraml_upi_v1_value_proto_rawDescGZIP(), []int{0, 0}
}

// Represents a named and typed data point.
// Can be used as a prediction input, output or metdadata.
// Oneof types are avoided as these can be difficult to handle
type NamedValue struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Name describing what the value represents.
	// Uses include:
	// - Ensuring ML models process columns in the correct order
	// - Defining a Feast row entity name
	// - Parsing metadata to apply traffic rules
	Name         string          `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Type         NamedValue_Type `protobuf:"varint,2,opt,name=type,proto3,enum=caraml.upi.v1.NamedValue_Type" json:"type,omitempty"`
	DoubleValue  float64         `protobuf:"fixed64,3,opt,name=double_value,json=doubleValue,proto3" json:"double_value,omitempty"`
	IntegerValue int32           `protobuf:"varint,4,opt,name=integer_value,json=integerValue,proto3" json:"integer_value,omitempty"`
	StringValue  string          `protobuf:"bytes,5,opt,name=string_value,json=stringValue,proto3" json:"string_value,omitempty"`
}

func (x *NamedValue) Reset() {
	*x = NamedValue{}
	if protoimpl.UnsafeEnabled {
		mi := &file_caraml_upi_v1_value_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *NamedValue) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*NamedValue) ProtoMessage() {}

func (x *NamedValue) ProtoReflect() protoreflect.Message {
	mi := &file_caraml_upi_v1_value_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use NamedValue.ProtoReflect.Descriptor instead.
func (*NamedValue) Descriptor() ([]byte, []int) {
	return file_caraml_upi_v1_value_proto_rawDescGZIP(), []int{0}
}

func (x *NamedValue) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *NamedValue) GetType() NamedValue_Type {
	if x != nil {
		return x.Type
	}
	return NamedValue_TYPE_UNSPECIFIED
}

func (x *NamedValue) GetDoubleValue() float64 {
	if x != nil {
		return x.DoubleValue
	}
	return 0
}

func (x *NamedValue) GetIntegerValue() int32 {
	if x != nil {
		return x.IntegerValue
	}
	return 0
}

func (x *NamedValue) GetStringValue() string {
	if x != nil {
		return x.StringValue
	}
	return ""
}

var File_caraml_upi_v1_value_proto protoreflect.FileDescriptor

var file_caraml_upi_v1_value_proto_rawDesc = []byte{
	0x0a, 0x19, 0x63, 0x61, 0x72, 0x61, 0x6d, 0x6c, 0x2f, 0x75, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f,
	0x76, 0x61, 0x6c, 0x75, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0d, 0x63, 0x61, 0x72,
	0x61, 0x6d, 0x6c, 0x2e, 0x75, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x22, 0x91, 0x02, 0x0a, 0x0a, 0x4e,
	0x61, 0x6d, 0x65, 0x64, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x32, 0x0a,
	0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x1e, 0x2e, 0x63, 0x61,
	0x72, 0x61, 0x6d, 0x6c, 0x2e, 0x75, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x4e, 0x61, 0x6d, 0x65,
	0x64, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x2e, 0x54, 0x79, 0x70, 0x65, 0x52, 0x04, 0x74, 0x79, 0x70,
	0x65, 0x12, 0x21, 0x0a, 0x0c, 0x64, 0x6f, 0x75, 0x62, 0x6c, 0x65, 0x5f, 0x76, 0x61, 0x6c, 0x75,
	0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x01, 0x52, 0x0b, 0x64, 0x6f, 0x75, 0x62, 0x6c, 0x65, 0x56,
	0x61, 0x6c, 0x75, 0x65, 0x12, 0x23, 0x0a, 0x0d, 0x69, 0x6e, 0x74, 0x65, 0x67, 0x65, 0x72, 0x5f,
	0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0c, 0x69, 0x6e, 0x74,
	0x65, 0x67, 0x65, 0x72, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x12, 0x21, 0x0a, 0x0c, 0x73, 0x74, 0x72,
	0x69, 0x6e, 0x67, 0x5f, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x0b, 0x73, 0x74, 0x72, 0x69, 0x6e, 0x67, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x22, 0x50, 0x0a, 0x04,
	0x54, 0x79, 0x70, 0x65, 0x12, 0x14, 0x0a, 0x10, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x55, 0x4e, 0x53,
	0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x0f, 0x0a, 0x0b, 0x54, 0x59,
	0x50, 0x45, 0x5f, 0x44, 0x4f, 0x55, 0x42, 0x4c, 0x45, 0x10, 0x01, 0x12, 0x10, 0x0a, 0x0c, 0x54,
	0x59, 0x50, 0x45, 0x5f, 0x49, 0x4e, 0x54, 0x45, 0x47, 0x45, 0x52, 0x10, 0x02, 0x12, 0x0f, 0x0a,
	0x0b, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x53, 0x54, 0x52, 0x49, 0x4e, 0x47, 0x10, 0x03, 0x42, 0xc6,
	0x01, 0x0a, 0x11, 0x63, 0x6f, 0x6d, 0x2e, 0x63, 0x61, 0x72, 0x61, 0x6d, 0x6c, 0x2e, 0x75, 0x70,
	0x69, 0x2e, 0x76, 0x31, 0x42, 0x0a, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x50, 0x72, 0x6f, 0x74, 0x6f,
	0x50, 0x01, 0x5a, 0x4f, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x63,
	0x61, 0x72, 0x61, 0x6d, 0x6c, 0x2d, 0x64, 0x65, 0x76, 0x2f, 0x75, 0x6e, 0x69, 0x76, 0x65, 0x72,
	0x73, 0x61, 0x6c, 0x2d, 0x70, 0x72, 0x65, 0x64, 0x69, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x2d, 0x69,
	0x6e, 0x74, 0x65, 0x72, 0x66, 0x61, 0x63, 0x65, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x67, 0x6f, 0x2f,
	0x63, 0x61, 0x72, 0x61, 0x6d, 0x6c, 0x2f, 0x75, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x3b, 0x75, 0x70,
	0x69, 0x76, 0x31, 0xa2, 0x02, 0x03, 0x43, 0x55, 0x58, 0xaa, 0x02, 0x0d, 0x43, 0x61, 0x72, 0x61,
	0x6d, 0x6c, 0x2e, 0x55, 0x70, 0x69, 0x2e, 0x56, 0x31, 0xca, 0x02, 0x0d, 0x43, 0x61, 0x72, 0x61,
	0x6d, 0x6c, 0x5c, 0x55, 0x70, 0x69, 0x5c, 0x56, 0x31, 0xe2, 0x02, 0x19, 0x43, 0x61, 0x72, 0x61,
	0x6d, 0x6c, 0x5c, 0x55, 0x70, 0x69, 0x5c, 0x56, 0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74,
	0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x0f, 0x43, 0x61, 0x72, 0x61, 0x6d, 0x6c, 0x3a, 0x3a,
	0x55, 0x70, 0x69, 0x3a, 0x3a, 0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_caraml_upi_v1_value_proto_rawDescOnce sync.Once
	file_caraml_upi_v1_value_proto_rawDescData = file_caraml_upi_v1_value_proto_rawDesc
)

func file_caraml_upi_v1_value_proto_rawDescGZIP() []byte {
	file_caraml_upi_v1_value_proto_rawDescOnce.Do(func() {
		file_caraml_upi_v1_value_proto_rawDescData = protoimpl.X.CompressGZIP(file_caraml_upi_v1_value_proto_rawDescData)
	})
	return file_caraml_upi_v1_value_proto_rawDescData
}

var file_caraml_upi_v1_value_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_caraml_upi_v1_value_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_caraml_upi_v1_value_proto_goTypes = []interface{}{
	(NamedValue_Type)(0), // 0: caraml.upi.v1.NamedValue.Type
	(*NamedValue)(nil),   // 1: caraml.upi.v1.NamedValue
}
var file_caraml_upi_v1_value_proto_depIdxs = []int32{
	0, // 0: caraml.upi.v1.NamedValue.type:type_name -> caraml.upi.v1.NamedValue.Type
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_caraml_upi_v1_value_proto_init() }
func file_caraml_upi_v1_value_proto_init() {
	if File_caraml_upi_v1_value_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_caraml_upi_v1_value_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*NamedValue); i {
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
			RawDescriptor: file_caraml_upi_v1_value_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_caraml_upi_v1_value_proto_goTypes,
		DependencyIndexes: file_caraml_upi_v1_value_proto_depIdxs,
		EnumInfos:         file_caraml_upi_v1_value_proto_enumTypes,
		MessageInfos:      file_caraml_upi_v1_value_proto_msgTypes,
	}.Build()
	File_caraml_upi_v1_value_proto = out.File
	file_caraml_upi_v1_value_proto_rawDesc = nil
	file_caraml_upi_v1_value_proto_goTypes = nil
	file_caraml_upi_v1_value_proto_depIdxs = nil
}