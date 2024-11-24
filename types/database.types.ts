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
      collection_items: {
        Row: {
          collection_id: number
          created_at: string
          product_id: number
        }
        Insert: {
          collection_id: number
          created_at?: string
          product_id: number
        }
        Update: {
          collection_id?: number
          created_at?: string
          product_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "collection_items_collection_id_fkey"
            columns: ["collection_id"]
            isOneToOne: false
            referencedRelation: "collections"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "collection_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "product"
            referencedColumns: ["id"]
          },
        ]
      }
      collections: {
        Row: {
          created_at: string
          description: string | null
          id: number
          keywords: string
          slug: string
          title: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          keywords: string
          slug: string
          title: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          keywords?: string
          slug?: string
          title?: string
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
      messages: {
        Row: {
          content: string
          created_at: string
          email: string
          full_name: string
          id: number
          phone: string
        }
        Insert: {
          content: string
          created_at?: string
          email: string
          full_name: string
          id?: number
          phone: string
        }
        Update: {
          content?: string
          created_at?: string
          email?: string
          full_name?: string
          id?: number
          phone?: string
        }
        Relationships: []
      }
      order_items: {
        Row: {
          created_at: string
          id: number
          order_id: number
          price: number
          product_id: number
          quantity: number
          total_price: number
        }
        Insert: {
          created_at?: string
          id?: number
          order_id: number
          price: number
          product_id: number
          quantity: number
          total_price: number
        }
        Update: {
          created_at?: string
          id?: number
          order_id?: number
          price?: number
          product_id?: number
          quantity?: number
          total_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "product"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          address: string
          city: string
          created_at: string
          delivery_number: string | null
          email: string
          first_name: string
          id: number
          last_name: string
          phone: string
          postal_code: string
          products_total: number
          promo_code: string | null
          promo_value: number | null
          province: string
          shipping_fee: number
          status: string
          total: number
          updated_at: string
        }
        Insert: {
          address: string
          city: string
          created_at?: string
          delivery_number?: string | null
          email: string
          first_name: string
          id?: number
          last_name: string
          phone: string
          postal_code: string
          products_total: number
          promo_code?: string | null
          promo_value?: number | null
          province: string
          shipping_fee: number
          status: string
          total: number
          updated_at?: string
        }
        Update: {
          address?: string
          city?: string
          created_at?: string
          delivery_number?: string | null
          email?: string
          first_name?: string
          id?: number
          last_name?: string
          phone?: string
          postal_code?: string
          products_total?: number
          promo_code?: string | null
          promo_value?: number | null
          province?: string
          shipping_fee?: number
          status?: string
          total?: number
          updated_at?: string
        }
        Relationships: []
      }
      pages: {
        Row: {
          content: string
          created_at: string
          description: string | null
          id: number
          keywords: string
          slug: string
          title: string
        }
        Insert: {
          content: string
          created_at?: string
          description?: string | null
          id?: number
          keywords: string
          slug: string
          title: string
        }
        Update: {
          content?: string
          created_at?: string
          description?: string | null
          id?: number
          keywords?: string
          slug?: string
          title?: string
        }
        Relationships: []
      }
      preferences: {
        Row: {
          created_at: string
          key: string
          type: string
          value: string
        }
        Insert: {
          created_at?: string
          key: string
          type: string
          value: string
        }
        Update: {
          created_at?: string
          key?: string
          type?: string
          value?: string
        }
        Relationships: []
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
          orders: number
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
          orders?: number
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
          orders?: number
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
            foreignKeyName: "product_color_id_fkey"
            columns: ["color_id"]
            isOneToOne: false
            referencedRelation: "color"
            referencedColumns: ["id"]
          },
        ]
      }
      promotions: {
        Row: {
          active: boolean
          code: string
          created_at: string
          id: number
          limit_uses: number | null
          max_cut: number | null
          min_order_total: number | null
          type: string
          uses: number
          value: number
        }
        Insert: {
          active?: boolean
          code: string
          created_at?: string
          id?: number
          limit_uses?: number | null
          max_cut?: number | null
          min_order_total?: number | null
          type: string
          uses: number
          value: number
        }
        Update: {
          active?: boolean
          code?: string
          created_at?: string
          id?: number
          limit_uses?: number | null
          max_cut?: number | null
          min_order_total?: number | null
          type?: string
          uses?: number
          value?: number
        }
        Relationships: []
      }
      slideshow: {
        Row: {
          button_label: string
          created_at: string
          direction: Json
          id: number
          index: number
          thumbnail_file_name: string | null
          thumbnail_url: string
          title: string
        }
        Insert: {
          button_label: string
          created_at?: string
          direction: Json
          id?: number
          index: number
          thumbnail_file_name?: string | null
          thumbnail_url: string
          title: string
        }
        Update: {
          button_label?: string
          created_at?: string
          direction?: Json
          id?: number
          index?: number
          thumbnail_file_name?: string | null
          thumbnail_url?: string
          title?: string
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          city: string | null
          created_at: string
          full_name: string
          id: number
          image_file_name: string
          image_url: string
          message: string
          rating: number
        }
        Insert: {
          city?: string | null
          created_at?: string
          full_name: string
          id?: number
          image_file_name: string
          image_url: string
          message: string
          rating: number
        }
        Update: {
          city?: string | null
          created_at?: string
          full_name?: string
          id?: number
          image_file_name?: string
          image_url?: string
          message?: string
          rating?: number
        }
        Relationships: []
      }
    }
    Views: {
      order_status_count_view: {
        Row: {
          count: number | null
          status: string | null
        }
        Relationships: []
      }
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
