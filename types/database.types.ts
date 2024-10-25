export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      category: {
        Row: {
          created_at: string
          id: number
          image: string
          image_filename: string
          name: string
        }
        Insert: {
          created_at?: string
          id?: number
          image: string
          image_filename: string
          name: string
        }
        Update: {
          created_at?: string
          id?: number
          image?: string
          image_filename?: string
          name?: string
        }
        Relationships: []
      }
      color: {
        Row: {
          created_at: string
          id: number
          name: string
          value: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
          value: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          value?: string
        }
        Relationships: []
      }
      images: {
        Row: {
          created_at: string
          filename: string | null
          id: number
          position: number
          product_id: number
          url: string
        }
        Insert: {
          created_at?: string
          filename?: string | null
          id?: number
          position: number
          product_id: number
          url: string
        }
        Update: {
          created_at?: string
          filename?: string | null
          id?: number
          position?: number
          product_id?: number
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "images_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "product"
            referencedColumns: ["id"]
          },
        ]
      }
      product: {
        Row: {
          archived: boolean
          base_price: number | null
          category_id: number
          color_id: number | null
          created_at: string
          delivery: string | null
          description_long: string | null
          description_short: string | null
          id: number
          information: string | null
          name: string
          price: number
          size: string | null
          status: string
          stock: number | null
          ugs: string
        }
        Insert: {
          archived?: boolean
          base_price?: number | null
          category_id: number
          color_id?: number | null
          created_at?: string
          delivery?: string | null
          description_long?: string | null
          description_short?: string | null
          id?: number
          information?: string | null
          name: string
          price: number
          size?: string | null
          status: string
          stock?: number | null
          ugs: string
        }
        Update: {
          archived?: boolean
          base_price?: number | null
          category_id?: number
          color_id?: number | null
          created_at?: string
          delivery?: string | null
          description_long?: string | null
          description_short?: string | null
          id?: number
          information?: string | null
          name?: string
          price?: number
          size?: string | null
          status?: string
          stock?: number | null
          ugs?: string
        }
        Relationships: [
          {
            foreignKeyName: "product_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "category"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_color_fkey"
            columns: ["color_id"]
            isOneToOne: false
            referencedRelation: "color"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_color_id_fkey"
            columns: ["color_id"]
            isOneToOne: false
            referencedRelation: "color"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_categories: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: number
          created_at: string
          name: string
          image: string
          image_filename: string
          reference_count: number
        }[]
      }
      get_categories_unarchived: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: number
          created_at: string
          name: string
          image: string
          image_filename: string
          reference_count: number
        }[]
      }
      get_colors: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: number
          created_at: string
          name: string
          value: string
          reference_count: number
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
