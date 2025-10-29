import { NextResponse } from "next/server";

import { contentService } from "@/lib/services/contentService";

export async function GET() {
  const examples = await contentService.getExampleProjects();
  return NextResponse.json({ examples });
}

