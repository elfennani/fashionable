export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
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
      groupings: {
        Row: {
          created_at: string
          id: number
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
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
          grouping_id: number | null
          id: number
          information: string | null
          name: string
          orders: number
          price: number
          shoe_size: number | null
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
          grouping_id?: number | null
          id?: number
          information?: string | null
          name: string
          orders?: number
          price: number
          shoe_size?: number | null
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
          grouping_id?: number | null
          id?: number
          information?: string | null
          name?: string
          orders?: number
          price?: number
          shoe_size?: number | null
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
          {
            foreignKeyName: "product_grouping_id_fkey"
            columns: ["grouping_id"]
            isOneToOne: false
            referencedRelation: "groupings"
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
        Args: never
        Returns: {
          created_at: string
          id: number
          image: string
          image_filename: string
          name: string
          reference_count: number
        }[]
      }
      get_categories_unarchived: {
        Args: never
        Returns: {
          created_at: string
          id: number
          image: string
          image_filename: string
          name: string
          reference_count: number
        }[]
      }
      get_colors: {
        Args: never
        Returns: {
          created_at: string
          id: number
          name: string
          reference_count: number
          value: string
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

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
