import { supabase } from "@/lib/supabase";
import { Product } from "@/data/products";

export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at");

  if (error) {
    console.error("getProducts failed:", error.message);
    return [];
  }
  return data as Product[];
}

export async function getProduct(id: string): Promise<Product | null> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    console.error("getProduct failed:", error.message);
    return null;
  }
  return data as Product | null;
}