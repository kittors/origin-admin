
 interface SchemaProperty {
  id: number;
  type: string;
  description?: string;
  name: string;
  format?: string;
  $ref?: string;
  items?: {
    type: string;
    [key: string]: any;
  };
  additionalProperties?:string;
  required?: string[] | string | null;
  properties?: Record<string, SchemaProperty>;
  created_at: string;
  updated_at: string;
}

 interface Schema {
  name: string;
  description?: string;
  type: string;
  properties?: Record<string, SchemaProperty>;
  required?: string[] | string | null;
  additionalProperties?:string;
  created_at: string;
  updated_at: string;
}

interface ExistingType {
    id: number;
    name: string;
    description: string | null;
    type: string;
    required: string;
    properties: string;
    additionalProperties?: string;
}

interface ExistingProperty {
    id: number;
    type_id: number;
    parent_id: number | null;
    name: string;
    type: string;
    additionalProperties: string | null;
    description: string;
    format: string;
    is_required: number;
    is_item_type: number;
    required: string;
    created_at: string;
    updated_at: string;
}

export type { Schema, SchemaProperty, ExistingType, ExistingProperty };
