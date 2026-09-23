import { NextRequest, NextResponse } from "next/server";
import { syncEpisodes } from "@/services/episodesSync";
import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const cronSecret = process.env.CRON_SECRET;
  const authHeader = request.headers.get("authorization");

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json(
      { error: "Unauthorized: Invalid or missing authorization token" },
      { status: 401 }
    );
  }

  try {
    const isDryRun = request.nextUrl.searchParams.get("dryRun") === "true";
    const result = await syncEpisodes({ dryRun: isDryRun });

    // If new episodes were inserted or updated (and not a dry run), revalidate affected pages
    if (!isDryRun && (result.inserted.length > 0 || result.updated.length > 0)) {
      revalidatePath("/");
      revalidatePath("/episodes");
    }

    return NextResponse.json({ ...result, dryRun: isDryRun }, { status: 200 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal Server Error";
    console.error("Error running episode sync:", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

