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
      inventory: {
        Row: {
          bags_count: number
          cost_price: number
          itemid: string
          tenant_id: string
        }
        Insert: {
          bags_count?: number
          cost_price: number
          itemid: string
          tenant_id: string
        }
        Update: {
          bags_count?: number
          cost_price?: number
          itemid?: string
          tenant_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "inventory_itemid_fkey"
            columns: ["itemid"]
            isOneToOne: false
            referencedRelation: "items"
            referencedColumns: ["itemid"]
          },
          {
            foreignKeyName: "inventory_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["tenant_id"]
          },
        ]
      }
      items: {
        Row: {
          bag_weight: number
          created_at: string
          description: string | null
          itemid: string
          name: string
          pricing_uom: string
          tenant_id: string
        }
        Insert: {
          bag_weight?: number
          created_at?: string
          description?: string | null
          itemid?: string
          name: string
          pricing_uom?: string
          tenant_id: string
        }
        Update: {
          bag_weight?: number
          created_at?: string
          description?: string | null
          itemid?: string
          name?: string
          pricing_uom?: string
          tenant_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "items_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["tenant_id"]
          },
        ]
      }
      order_items: {
        Row: {
          bags_count: number
          charge: number
          cost_price: number
          itemid: string
          lineid: string
          orderid: string
          selling_price: number
          tenant_id: string
        }
        Insert: {
          bags_count: number
          charge: number
          cost_price: number
          itemid: string
          lineid?: string
          orderid: string
          selling_price: number
          tenant_id: string
        }
        Update: {
          bags_count?: number
          charge?: number
          cost_price?: number
          itemid?: string
          lineid?: string
          orderid?: string
          selling_price?: number
          tenant_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "order_items_itemid_fkey"
            columns: ["itemid"]
            isOneToOne: false
            referencedRelation: "items"
            referencedColumns: ["itemid"]
          },
          {
            foreignKeyName: "order_items_orderid_fkey"
            columns: ["orderid"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["orderid"]
          },
          {
            foreignKeyName: "order_items_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["tenant_id"]
          },
        ]
      }
      orders: {
        Row: {
          created_at: string
          delivery_date: string | null
          order_number: number
          orderid: string
          status: string | null
          tenant_id: string | null
          total: number
          type: string | null
          userid: string
        }
        Insert: {
          created_at?: string
          delivery_date?: string | null
          order_number: number
          orderid?: string
          status?: string | null
          tenant_id?: string | null
          total?: number
          type?: string | null
          userid: string
        }
        Update: {
          created_at?: string
          delivery_date?: string | null
          order_number?: number
          orderid?: string
          status?: string | null
          tenant_id?: string | null
          total?: number
          type?: string | null
          userid?: string
        }
        Relationships: [
          {
            foreignKeyName: "orders_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["tenant_id"]
          },
          {
            foreignKeyName: "orders_userid_fkey"
            columns: ["userid"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["userid"]
          },
        ]
      }
      tenants: {
        Row: {
          created_at: string
          description: string
          name: string
          tenant_id: string
        }
        Insert: {
          created_at?: string
          description: string
          name: string
          tenant_id?: string
        }
        Update: {
          created_at?: string
          description?: string
          name?: string
          tenant_id?: string
        }
        Relationships: []
      }
      transactions: {
        Row: {
          amount: number
          created_at: string
          orderid: string | null
          tenant_id: string
          txnid: string
        }
        Insert: {
          amount: number
          created_at?: string
          orderid?: string | null
          tenant_id: string
          txnid?: string
        }
        Update: {
          amount?: number
          created_at?: string
          orderid?: string | null
          tenant_id?: string
          txnid?: string
        }
        Relationships: [
          {
            foreignKeyName: "transactions_orderid_fkey"
            columns: ["orderid"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["orderid"]
          },
          {
            foreignKeyName: "transactions_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["tenant_id"]
          },
        ]
      }
      users: {
        Row: {
          address: string
          created_at: string
          info: string | null
          name: string
          nickname: string | null
          phone: string
          route: string | null
          tenant_id: string | null
          type: string
          updated_at: string | null
          userid: string
        }
        Insert: {
          address: string
          created_at?: string
          info?: string | null
          name: string
          nickname?: string | null
          phone: string
          route?: string | null
          tenant_id?: string | null
          type?: string
          updated_at?: string | null
          userid?: string
        }
        Update: {
          address?: string
          created_at?: string
          info?: string | null
          name?: string
          nickname?: string | null
          phone?: string
          route?: string | null
          tenant_id?: string | null
          type?: string
          updated_at?: string | null
          userid?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["tenant_id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
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
