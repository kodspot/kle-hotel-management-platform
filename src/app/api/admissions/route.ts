import { NextResponse } from "next/server";
import { getSupabaseAdminClient } from "@/lib/supabase";

export const runtime = "edge";

type AdmissionBody = {
  name?: string;
  phone?: string;
  course?: string;
  source?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as AdmissionBody;

    const name = body.name?.trim();
    const phone = body.phone?.trim();
    const course = body.course?.trim();
    const source = body.source?.trim() || "landing-page";

    if (!name || !phone || !course) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const supabase = getSupabaseAdminClient();

    const { data, error } = await supabase
      .from("admission_leads")
      .insert({
        name,
        phone,
        course,
        source,
      })
      .select("id")
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, leadId: data.id }, { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unexpected server error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
